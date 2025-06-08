# Proxmox Backup Server Troubleshooting – UEFI Boot + RAM Issues

## 🧠 Issue Summary

Two main problems were identified:

1. Severe memory errors causing system instability.
2. Broken or incomplete UEFI boot configuration (no ESP mount, missing grub-efi-amd64, no fstab entry).

---

## 🛠️ RAM Troubleshooting

### Symptoms

- MemTest86+ showed millions of memory errors.
- Errors occurred early in test passes, particularly around 13–14 GB region.

### Actions Taken

- Removed one stick of RAM and tested each individually.
- Identified one stick (Crucial CT8G4DFD8213) as faulty.
- Kept the known-good stick in slot **DIMM4** (2nd from right), since **DIMM2** didn’t post reliably.
- Verified healthy stick with MemTest86+, 0 errors across full pass.

---

## ⚙️ UEFI Boot Fix

### Symptoms

- System booted in UEFI mode but:
  - `grub-efi-amd64` not installed.
  - ESP not mounted to `/boot/efi`.
  - Warnings about missing `/etc/kernel/proxmox-boot-uuids`.

### Actions Taken

1. **Identified ESP**:

   ```bash
   lsblk -f
   # Found ESP at /dev/sdc2 (vfat)
   ```

2. **Mounted ESP**:

   ```bash
   mkdir -p /boot/efi
   mount /dev/sdc2 /boot/efi
   ```

3. **Installed GRUB for UEFI**:

   ```bash
   apt update
   apt install grub-efi-amd64
   grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=proxmox
   update-grub
   ```

4. **Configured fstab for persistent mount**:

   ```bash
   blkid /dev/sdc2
   # UUID="XXXX-XXXX"
   ```

   `/etc/fstab` entry:

   ```ini
   UUID="XXXX-XXXX" /boot/efi vfat umask=0077 0 1
   ```

5. **Confirmed mount**:

   ```bash
   mount -a
   findmnt /boot/efi
   ```

6. **Silenced the ESP sync warning** (optional):
   ```bash
   touch /etc/kernel/proxmox-boot-uuids
   ```

---

## ✅ Final Verifications

- `efibootmgr` shows valid boot entries (`proxmox`, `UEFI OS`).
- `/boot/efi/EFI/proxmox` and `/boot/efi/EFI/BOOT` directories populated correctly.
- `update-initramfs` and `update-grub` complete without errors.
- System reboots into Proxmox cleanly and consistently.

---

## 🏁 Status: **System Stable**

- RAM is clean
- EFI boot is clean
- Backups and kernel updates now safe
