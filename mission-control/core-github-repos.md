# Core GitHub Repositories

## Overview

This document outlines the core GitHub repositories that are essential for my technical projects.

## Repositories

<!-- DOCS-TREE-START -->
```plaintext
.
|-- CLAUDE.md
|-- LICENSE
|-- README.md
|-- SUMMARY.md
|-- flight-manuals
|   |-- README.md
|   |-- automation-scripts
|   |   |-- README.md
|   |   |-- proxmox-backup-server
|   |   |   |-- README.md
|   |   |   `-- pbs-backup-health.md
|   |   `-- proxmox-virtual-environment
|   |       `-- README.md
|   |-- gitops
|   |   |-- README.md
|   |   |-- actions.md
|   |   |-- assets.md
|   |   |-- commit-conventions.md
|   |   |-- github-integrations.md
|   |   |-- gitignore.md
|   |   |-- gitkeep.md
|   |   |-- gitmessage.md
|   |   |-- project-management.md
|   |   |-- repo-setup-guide.md
|   |   |-- repository-maintenance.md
|   |   |-- templates
|   |   |   |-- docker-workflow.yml
|   |   |   `-- terraform-workflow.yml
|   |   `-- workflows
|   |       |-- README.md
|   |       |-- deployment-patterns.md
|   |       |-- maintenance-workflows.md
|   |       |-- reusable-workflows.md
|   |       `-- security-workflows.md
|   |-- network-security
|   |   `-- README.md
|   `-- proxmox-guides
|       |-- README.md
|       |-- backup-strategy.md
|       |-- proxmox-backup-server-troubleshooting.md
|       `-- proxmox-backup-server.md
|-- maintenance-logs
|   |-- README.md
|   `-- learning-paths.md
|-- mission-control
|   |-- README.md
|   |-- boilerplate
|   |   |-- gitignore-templates
|   |   |   |-- docker.gitignore
|   |   |   |-- nodejs.gitignore
|   |   |   |-- python.gitignore
|   |   |   `-- terraform.gitignore
|   |   |-- gitmessage-template
|   |   |-- license-templates
|   |   |   |-- APACHE-2.0.LICENSE
|   |   |   `-- MIT.LICENSE
|   |   `-- readme-templates
|   |       |-- documentation-readme.md
|   |       `-- project-readme.md
|   |-- boilerplate.md
|   |-- coding-standards.md
|   |-- core-github-repos.md
|   |-- github-configs
|   |   |-- integration-configs
|   |   |   |-- dependabot.yml
|   |   |   |-- renovate-config.json
|   |   |   `-- shields-badges.md
|   |   |-- label-definitions.yml
|   |   `-- milestone-templates.md
|   |-- github-configs.md
|   |-- github-templates
|   |   |-- CONTRIBUTING.md
|   |   `-- SECURITY.md
|   |-- github-templates.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   `-- repo-naming-conventions.md
|-- renovate.json
|-- scripts
|   |-- README.md
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
`-- star-charts
    |-- README.md
    |-- homelab-topology.md
    `-- service-maps.md

23 directories, 67 files
```
<!-- DOCS-TREE-END -->

### 1. `basher83/docs/`

<!-- DOCS-TREE-START -->
```plaintext
.
|-- CLAUDE.md
|-- LICENSE
|-- README.md
|-- SUMMARY.md
|-- flight-manuals
|   |-- README.md
|   |-- automation-scripts
|   |   |-- README.md
|   |   |-- proxmox-backup-server
|   |   |   |-- README.md
|   |   |   `-- pbs-backup-health.md
|   |   `-- proxmox-virtual-environment
|   |       `-- README.md
|   |-- gitops
|   |   |-- README.md
|   |   |-- actions.md
|   |   |-- assets.md
|   |   |-- commit-conventions.md
|   |   |-- github-integrations.md
|   |   |-- gitignore.md
|   |   |-- gitkeep.md
|   |   |-- gitmessage.md
|   |   |-- project-management.md
|   |   |-- repo-setup-guide.md
|   |   |-- repository-maintenance.md
|   |   |-- templates
|   |   |   |-- docker-workflow.yml
|   |   |   `-- terraform-workflow.yml
|   |   `-- workflows
|   |       |-- README.md
|   |       |-- deployment-patterns.md
|   |       |-- maintenance-workflows.md
|   |       |-- reusable-workflows.md
|   |       `-- security-workflows.md
|   |-- network-security
|   |   `-- README.md
|   `-- proxmox-guides
|       |-- README.md
|       |-- backup-strategy.md
|       |-- proxmox-backup-server-troubleshooting.md
|       `-- proxmox-backup-server.md
|-- maintenance-logs
|   |-- README.md
|   `-- learning-paths.md
|-- mission-control
|   |-- README.md
|   |-- boilerplate
|   |   |-- gitignore-templates
|   |   |   |-- docker.gitignore
|   |   |   |-- nodejs.gitignore
|   |   |   |-- python.gitignore
|   |   |   `-- terraform.gitignore
|   |   |-- gitmessage-template
|   |   |-- license-templates
|   |   |   |-- APACHE-2.0.LICENSE
|   |   |   `-- MIT.LICENSE
|   |   `-- readme-templates
|   |       |-- documentation-readme.md
|   |       `-- project-readme.md
|   |-- boilerplate.md
|   |-- coding-standards.md
|   |-- core-github-repos.md
|   |-- github-configs
|   |   |-- integration-configs
|   |   |   |-- dependabot.yml
|   |   |   |-- renovate-config.json
|   |   |   `-- shields-badges.md
|   |   |-- label-definitions.yml
|   |   `-- milestone-templates.md
|   |-- github-configs.md
|   |-- github-templates
|   |   |-- CONTRIBUTING.md
|   |   `-- SECURITY.md
|   |-- github-templates.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   `-- repo-naming-conventions.md
|-- renovate.json
|-- scripts
|   |-- README.md
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
`-- star-charts
    |-- README.md
    |-- homelab-topology.md
    `-- service-maps.md

23 directories, 67 files
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
