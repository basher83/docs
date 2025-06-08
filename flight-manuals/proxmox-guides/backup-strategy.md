# 📦 Proxmox Backup Strategy

## 🎯 Goal

Establish a resilient, automated, and verifiable backup plan for Proxmox environments, covering VMs, LXCs, and critical configuration data.

---

## 🗂️ Backup Types

### 1. Virtual Machine (VM) & Container (CT) Backups

- Scheduled backups via Proxmox VE to Proxmox Backup Server (PBS)
- Modes: Snapshot (preferred), Stop, or Suspend
- Compression: ZSTD (default and efficient)

### 2. Host Configuration Backups

- `/etc/pve` from Proxmox VE nodes
- PBS internal config database

### 3. Offsite Copies (Optional)

- Rclone sync to remote storage (e.g. S3, B2, rsync.net)
- Encrypted and versioned

---

## 🗓️ Schedule

| Type            | Frequency | Retention | Notes                              |
| --------------- | --------- | --------- | ---------------------------------- |
| VM/CT Backups   | Daily     | 7–30 days | Varies by criticality              |
| Config Backups  | Weekly    | 4 weeks   | Automate via cron or systemd timer |
| Verification    | Weekly    | N/A       | Use PBS verification job           |
| Garbage Cleanup | Weekly    | N/A       | Reclaims space from pruned chunks  |

---

## 🔁 Backup Rotation & Pruning

Set up PBS prune jobs using:

```bash
keep-daily: 7
keep-weekly: 4
keep-monthly: 6
```

Adjust based on datastore capacity and importance of retained history.

---

## 🧪 CI Backup Verification (via Cron + REST API)

Example daily job to validate recent backup status:

```bash
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
```

> 🧩 Optionally pipe results to Discord, email, or webhook if failures occur.

---

## 🛡️ Best Practices

- Test restores regularly — don’t trust untested backups
- Keep at least 1 backup copy offsite or offline
- Use verified backup jobs (PBS has built-in integrity checks)
- Avoid backing up to the same disk pool as active VMs

---

## 🔗 Related

- [Proxmox Backup Server Guide](./proxmox-backup-server.md)
- [Troubleshooting Guide](./proxmox-backup-server-troubleshooting.md)
