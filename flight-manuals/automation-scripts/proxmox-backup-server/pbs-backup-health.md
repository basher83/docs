# 🔍 Proxmox Backup Server Health Check

## Mission Brief

Automated health check script for verifying recent VM backups in Proxmox Backup Server via REST API.

## 📋 The Script

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

## 🚀 Quick Deploy

```bash
# Download and install
sudo curl -o /usr/local/sbin/pbs-backup-health.sh \
    https://raw.githubusercontent.com/basher83/automation-scripts/main/proxmox/pbs-backup-health.sh
sudo chmod +x /usr/local/sbin/pbs-backup-health.sh

# Configure your settings
sudo nano /usr/local/sbin/pbs-backup-health.sh
```

## ⚙️ Configuration

Before running, update these variables:

| Variable    | Description                            | Example                           |
| ----------- | -------------------------------------- | --------------------------------- |
| `PBS_HOST`  | Your PBS server URL                    | `https://pbs.local:8007`          |
| `TOKEN`     | API token with backup read permissions | `root@pam!backup-check=abc123...` |
| `VMID_LIST` | Array of VM IDs to check               | `("100" "101" "105")`             |

## 🔧 Setup Requirements

```bash
# Install dependencies (if not already present)
sudo apt update && sudo apt install -y curl jq

# Create API token in PBS web UI:
# Administration → API Tokens → Add
```

## 📅 Automation Options

### Cron Job (Daily Check)

```bash
# Add to root crontab
0 8 * * * /usr/local/sbin/pbs-backup-health.sh
```

### Systemd Timer (More Control)

```bash
# /etc/systemd/system/pbs-health-check.timer
[Unit]
Description=PBS Backup Health Check

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

## 📊 Sample Output

```
✅ All VMs have recent backups
```

```
⚠️ No recent backup for VM 105
```

## 🔗 Related Documentation

- [PBS Backup Strategy](../../proxmox-guides/backup-strategy.md)
- [Proxmox Backup Server Setup](../../proxmox-guides/proxmox-backup-server.md)
- [API Token Creation Guide](../../proxmox-guides/api-tokens.md)

## 🚨 Troubleshooting

**No output**: Check network connectivity to PBS server
**Authentication errors**: Verify API token permissions
**jq command not found**: Install with `sudo apt install jq`
