# Proxmox Backup Server

## Overview

The Proxmox Backup Server is a tool that allows you to backup your data to a remote server.

## Installation

1. Install the Proxmox Backup Server package.
2. Configure the Proxmox Backup Server.
3. Start the Proxmox Backup Server.

## Configuration

1. Configure the Proxmox Backup Server.
2. Start the Proxmox Backup Server.

## Usage

1. Use the Proxmox Backup Server to backup your data.
2. Use the Proxmox Backup Server to restore your data.

## Troubleshooting

1. If you have any issues, please contact the Proxmox Backup Server team.
2. If you have any questions, please contact the Proxmox Backup Server team.

# Proxmox Backup Server

## 🧰 Overview

Proxmox Backup Server (PBS) is an enterprise-grade, open-source solution for backing up and
restoring virtual machines (VMs), containers (CTs), and physical hosts. It integrates seamlessly
with Proxmox VE and supports deduplication, compression, and authentication out of the box.

---

## 📦 Installation

### System Requirements

- 64-bit CPU (Intel or AMD)
- At least 4 GB of RAM (8 GB recommended)
- Storage with good write IOPS for backup targets

### Steps

1. Download the official ISO from the [Proxmox website](https://www.proxmox.com/en/downloads).
2. Write the ISO to a USB stick and boot the target system.
3. Follow the installation wizard to complete setup.

---

## ⚙️ Configuration

### Initial Setup

1. Access the web UI at `https://<your-server-ip>:8007`
2. Login using root credentials
3. Configure a datastore (where backups will be stored)

### Add Proxmox VE as a Client

- Go to Proxmox VE UI → Datacenter → Storage → Add → Proxmox Backup Server
- Enter the PBS host, port, and credentials

---

## 💾 Usage

### Creating a Backup Job

1. In Proxmox VE, go to a VM or CT
2. Click on "Backup"
3. Choose your PBS datastore and schedule

### Restoring Backups

1. Navigate to the PBS UI
2. Select the backup archive
3. Click “Restore” or download archive as needed

---

## 🛠️ Maintenance

### Prune & Garbage Collection

- Define prune jobs to remove old backups
- Run garbage collection to clear unused chunks

### Verify Backups

- Use scheduled verification jobs to ensure backup integrity

---

## 🚨 Troubleshooting

### Common Issues

- **Backup fails**: Check network, authentication, and disk space
- **UI not loading**: Ensure the `proxmox-backup` service is running
- **No space left**: Run garbage collection or expand storage

### Advanced Debugging

- Logs are located at `/var/log/proxmox-backup/`
- Use `journalctl -u proxmox-backup` for service status

---

## 🧪 Related Guides

- [Troubleshooting UEFI Boot & RAM Issues](./proxmox-backup-server-troubleshooting.md)
- [Backup Strategy](./backup-strategy.md)
- [Backup Strategy Recommendations](./backup-strategy.md)
