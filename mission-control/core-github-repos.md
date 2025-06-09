# Core GitHub Repositories

## Overview

This document outlines the core GitHub repositories that are essential for my technical projects.

## Repositories

<!-- DOCS-TREE-START -->
```plaintext
.
|-- flight-manuals
|   |-- automation-scripts
|   |   |-- proxmox-backup-server
|   |   |   `-- pbs-backup-health.sh
|   |   |-- proxmox-virtual-environment
|   |   `-- README.md
|   |-- gitops
|   |   |-- actions.md
|   |   |-- assets.md
|   |   |-- gitignore.md
|   |   |-- gitkeep.md
|   |   `-- gitmessage.md
|   |-- network-security
|   |   `-- README.md
|   |-- proxmox-guides
|   |   |-- backup-strategy.md
|   |   |-- proxmox-backup-server.md
|   |   |-- proxmox-backup-server-troubleshooting.md
|   |   `-- README.md
|   `-- README.md
|-- LICENSE
|-- maintenance-logs
|   |-- learning-paths.md
|   `-- README.md
|-- mission-control
|   |-- coding-standards.md
|   |-- core-github-repos.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   |-- README.md
|   `-- repo-naming-conventions.md
|-- README.md
|-- renovate.json
|-- scripts
|   |-- README.md
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
`-- star-charts
    |-- homelab-topology.md
    |-- README.md
    `-- service-maps.md

14 directories, 31 files
```
<!-- DOCS-TREE-END -->

### 1. `basher83/docs/`

<!-- DOCS-TREE-START -->
```plaintext
.
|-- flight-manuals
|   |-- automation-scripts
|   |   |-- proxmox-backup-server
|   |   |   `-- pbs-backup-health.sh
|   |   |-- proxmox-virtual-environment
|   |   `-- README.md
|   |-- gitops
|   |   |-- actions.md
|   |   |-- assets.md
|   |   |-- gitignore.md
|   |   |-- gitkeep.md
|   |   `-- gitmessage.md
|   |-- network-security
|   |   `-- README.md
|   |-- proxmox-guides
|   |   |-- backup-strategy.md
|   |   |-- proxmox-backup-server.md
|   |   |-- proxmox-backup-server-troubleshooting.md
|   |   `-- README.md
|   `-- README.md
|-- LICENSE
|-- maintenance-logs
|   |-- learning-paths.md
|   `-- README.md
|-- mission-control
|   |-- coding-standards.md
|   |-- core-github-repos.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   |-- README.md
|   `-- repo-naming-conventions.md
|-- README.md
|-- renovate.json
|-- scripts
|   |-- README.md
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
`-- star-charts
    |-- homelab-topology.md
    |-- README.md
    `-- service-maps.md

14 directories, 31 files
```
<!-- DOCS-TREE-END -->

### 2. `basher83/assets/`

```plaintext
basher83/assets/
├── README.md
├── octocats/
│   ├── main-profile-octocat.png
│   ├── cybersecurity-octocat.png
│   └── homelab-octocat.png
├── space-gifs/
│   ├── dev-missions.gif
│   ├── staging-planets.gif
│   └── production-galaxies.gif
├── logos/
│   └── project-logos/
└── banners/
    ├── profile-banner.png
    └── repo-banners/
```

## Why a Separate Repository Is Better for Assets

- Organization: Keeps your main profile repo clean and focused on your actual README and profile information
- Reusability: Makes it easy to reference the same assets across multiple repositories (profile, projects, documentation)
- Version Control: You can update assets without cluttering your profile repo's commit history
- Size Management: GitHub has soft limits on repository sizes - keeping media assets separate prevents your main profile from growing too large
- Permissions: You can give specific collaborators access to help with assets without giving them access to your profile
- CDN Benefits: GitHub serves raw files from repositories via its CDN, making this an effective hosting solution
