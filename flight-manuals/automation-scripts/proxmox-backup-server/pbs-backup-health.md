# PBS Backup Health

## Overview

This script checks the health of the PBS backup server.

## Purpose

This script performs a lightweight CI-style check to ensure that recent backups exist for a list of VMs in a Proxmox Backup Server (PBS) datastore. It is ideal for integration into cron jobs, CI/CD pipelines, or monitoring alerts.

---

## Prerequisites

- A valid Proxmox Backup Server deployment accessible at the address set in `PBS_HOST`.
- An API token (`ci-backup-token`) for the `root@pam` user with permissions to query backup snapshots.
- `curl`, `jq`, and `grep` installed on the host executing the script.

---

## Configuration

Update the following variables in the script to match your environment:

- `PBS_HOST`: The full URL to your PBS instance.
- `TOKEN`: The PVE API token in `user@realm!token=secret` format.
- `VMID_LIST`: Array of VM IDs to check against the backup server.
- `your-datastore-name`: Replace with the actual name of your PBS datastore.

---

## Output

For each VM ID in the list, the script queries PBS for recent backups. If no backup is found, it emits a warning line:

```
⚠️ No recent backup for VM 101
```

Successful checks produce no output (silent pass). This makes it suitable for piping into notification systems like Discord, Slack, or email.

---

## 🕒 Systemd Timer Example

For better control and logging, use a `systemd` timer instead of cron.

### 1. Create a service unit

Save as `/etc/systemd/system/pbs-backup-health.service`:

```ini
[Unit]
Description=Check PBS Backup Health

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/pbs-backup-health.sh
StandardOutput=journal
```

### 2. Create a timer unit

Save as `/etc/systemd/system/pbs-backup-health.timer`:

```ini
[Unit]
Description=Run PBS Backup Health Check Daily

[Timer]
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

### 3. Enable and start the timer

```bash
sudo systemctl daemon-reexec
sudo systemctl enable --now pbs-backup-health.timer
```

You can view logs with:

```bash
journalctl -u pbs-backup-health.service
```

---

## 📣 Webhook Integration (Discord Example)

You can forward backup alerts to Discord using a webhook. First, create a webhook URL in your Discord server, then modify the script like this:

```bash
WEBHOOK_URL="https://discord.com/api/webhooks/your-webhook-id"

for vmid in "${VMID_LIST[@]}"; do
  result=$(curl -s --header "Authorization: PVEAPIToken=${TOKEN}" \
    "${PBS_HOST}/api2/json/datastore/your-datastore-name/snapshots?type=vm&vmid=${vmid}" |
    jq '.[0]' | grep -q '"backup-type":"vm"')

  if [ $? -ne 0 ]; then
    message="⚠️ No recent backup for VM ${vmid}"
    echo "$message"
    curl -s -H "Content-Type: application/json" \
      -X POST -d "{\"content\": \"${message}\"}" "$WEBHOOK_URL" > /dev/null
  fi
done
```

This setup makes backup monitoring alert-driven and integrates smoothly into homelab observability.

---

## Script

#!/bin/bash

# /usr/local/sbin/pbs-backup-health.sh

PBS_HOST="https://pbs.local:8007"
TOKEN="root@pam!ci-backup-token=your-token-value"
VMID_LIST=("100" "101" "105")

for vmid in "${VMID_LIST[@]}"; do
    curl -s --header "Authorization: PVEAPIToken=${TOKEN}" \
 "${PBS_HOST}/api2/json/datastore/your-datastore-name/snapshots?type=vm&vmid=${vmid}" |
jq '.[0]' | grep -q '"backup-type":"vm"' || echo "⚠️ No recent backup for VM ${vmid}"
done

<iframe src="https://app.warp.dev/block/embed/PqGS0H0kpAVbEYZa01MGvc" title="embedded warp block" style="width: 1272px; height: 492px; border:0; overflow:hidden;" allow="clipboard-read; clipboard-write"></iframe>
