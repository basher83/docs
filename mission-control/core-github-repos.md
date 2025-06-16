# Core GitHub Repositories

## Overview

This document outlines the core GitHub repositories that are essential for my technical projects.

## Repositories

<!-- DOCS-TREE-START -->
```plaintext
.
|-- CLAUDE.md
|-- docs.code-workspace
|-- flight-manuals
|   |-- automation-scripts
|   |   |-- documentation
|   |   |   `-- update-trees.md
|   |   |-- proxmox-backup-server
|   |   |   |-- pbs-backup-health.md
|   |   |   `-- README.md
|   |   |-- proxmox-virtual-environment
|   |   |   `-- README.md
|   |   `-- README.md
|   |-- gitops
|   |   |-- actions.md
|   |   |-- assets.md
|   |   |-- commit-conventions.md
|   |   |-- github-integrations.md
|   |   |-- gitignore.md
|   |   |-- gitkeep.md
|   |   |-- gitmessage.md
|   |   |-- project-management.md
|   |   |-- README.md
|   |   |-- repo-setup-guide.md
|   |   |-- repository-maintenance.md
|   |   |-- templates
|   |   |   |-- docker-workflow.yml
|   |   |   `-- terraform-workflow.yml
|   |   `-- workflows
|   |       |-- deployment-patterns.md
|   |       |-- maintenance-workflows.md
|   |       |-- README.md
|   |       |-- reusable-workflows.md
|   |       `-- security-workflows.md
|   |-- network-security
|   |   `-- README.md
|   |-- proxmox-guides
|   |   |-- backup-strategy.md
|   |   |-- proxmox-backup-server-troubleshooting.md
|   |   |-- proxmox-backup-server.md
|   |   `-- README.md
|   `-- README.md
|-- LICENSE
|-- maintenance-logs
|   |-- learning-paths.md
|   `-- README.md
|-- mission-control
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
|   |   |-- readme-templates
|   |   |   |-- documentation-readme.md
|   |   |   `-- project-readme.md
|   |   `-- README.md
|   |-- boilerplate.md
|   |-- coding-standards.md
|   |-- core-github-repos.md
|   |-- github-configs
|   |   |-- CODEOWNERS-template
|   |   |-- integration-configs
|   |   |   |-- dependabot.yml
|   |   |   |-- renovate-config.json
|   |   |   `-- shields-badges.md
|   |   |-- label-definitions.yml
|   |   |-- milestone-templates.md
|   |   `-- README.md
|   |-- github-configs.md
|   |-- github-templates
|   |   |-- CODE_OF_CONDUCT.md
|   |   |-- CONTRIBUTING.md
|   |   |-- ISSUE_TEMPLATE
|   |   |   |-- bug-report.yml
|   |   |   |-- config.yml
|   |   |   |-- documentation.yml
|   |   |   `-- feature-request.yml
|   |   |-- pull_request_template.md
|   |   |-- README.md
|   |   `-- SECURITY.md
|   |-- github-templates.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   |-- README.md
|   `-- repo-naming-conventions.md
|-- README.md
|-- renovate.json
|-- scripts
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
|-- star-charts
|   |-- homelab-topology.md
|   |-- README.md
|   `-- service-maps.md
|-- SUMMARY.md
`-- Taskfile.yml

25 directories, 79 files
```
<!-- DOCS-TREE-END -->

### 1. `basher83/docs/`

<!-- DOCS-TREE-START -->
```plaintext
.
|-- CLAUDE.md
|-- docs.code-workspace
|-- flight-manuals
|   |-- automation-scripts
|   |   |-- documentation
|   |   |   `-- update-trees.md
|   |   |-- proxmox-backup-server
|   |   |   |-- pbs-backup-health.md
|   |   |   `-- README.md
|   |   |-- proxmox-virtual-environment
|   |   |   `-- README.md
|   |   `-- README.md
|   |-- gitops
|   |   |-- actions.md
|   |   |-- assets.md
|   |   |-- commit-conventions.md
|   |   |-- github-integrations.md
|   |   |-- gitignore.md
|   |   |-- gitkeep.md
|   |   |-- gitmessage.md
|   |   |-- project-management.md
|   |   |-- README.md
|   |   |-- repo-setup-guide.md
|   |   |-- repository-maintenance.md
|   |   |-- templates
|   |   |   |-- docker-workflow.yml
|   |   |   `-- terraform-workflow.yml
|   |   `-- workflows
|   |       |-- deployment-patterns.md
|   |       |-- maintenance-workflows.md
|   |       |-- README.md
|   |       |-- reusable-workflows.md
|   |       `-- security-workflows.md
|   |-- network-security
|   |   `-- README.md
|   |-- proxmox-guides
|   |   |-- backup-strategy.md
|   |   |-- proxmox-backup-server-troubleshooting.md
|   |   |-- proxmox-backup-server.md
|   |   `-- README.md
|   `-- README.md
|-- LICENSE
|-- maintenance-logs
|   |-- learning-paths.md
|   `-- README.md
|-- mission-control
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
|   |   |-- readme-templates
|   |   |   |-- documentation-readme.md
|   |   |   `-- project-readme.md
|   |   `-- README.md
|   |-- boilerplate.md
|   |-- coding-standards.md
|   |-- core-github-repos.md
|   |-- github-configs
|   |   |-- CODEOWNERS-template
|   |   |-- integration-configs
|   |   |   |-- dependabot.yml
|   |   |   |-- renovate-config.json
|   |   |   `-- shields-badges.md
|   |   |-- label-definitions.yml
|   |   |-- milestone-templates.md
|   |   `-- README.md
|   |-- github-configs.md
|   |-- github-templates
|   |   |-- CODE_OF_CONDUCT.md
|   |   |-- CONTRIBUTING.md
|   |   |-- ISSUE_TEMPLATE
|   |   |   |-- bug-report.yml
|   |   |   |-- config.yml
|   |   |   |-- documentation.yml
|   |   |   `-- feature-request.yml
|   |   |-- pull_request_template.md
|   |   |-- README.md
|   |   `-- SECURITY.md
|   |-- github-templates.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   |-- README.md
|   `-- repo-naming-conventions.md
|-- README.md
|-- renovate.json
|-- scripts
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
|-- star-charts
|   |-- homelab-topology.md
|   |-- README.md
|   `-- service-maps.md
|-- SUMMARY.md
`-- Taskfile.yml

25 directories, 79 files
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
