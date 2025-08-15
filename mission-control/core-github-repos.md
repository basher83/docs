# Core GitHub Repositories

## Overview

This document outlines the core GitHub repositories that are essential for my technical projects.

## Repositories

The core repositories and their roles:

| Repository                                                                      | Purpose                                                             | Key Focus Areas                                          |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------- |
| [`basher83/basher83`](https://github.com/basher83/basher83)                     | Special profile repository that renders on your GitHub profile page | Personal branding, at-a-glance status, entrypoint links  |
| [`basher83/docs`](https://github.com/basher83/docs)                             | Central knowledge hub (standards, procedures, architecture)         | Information architecture, automation docs, consistency   |
| [`basher83/assets`](https://github.com/basher83/assets)                         | Shared visual/media assets (banners, logos, octocats)               | Reusable branding & imagery                              |
| [`basher83/automation-scripts`](https://github.com/basher83/automation-scripts) | Implementation scripts and operational tooling                      | Scripting, task automation, platform ops                 |
| [`basher83/.github`](https://github.com/basher83/.github)                       | Shared GitHub configuration & reusable workflows                    | Workflow templates, issue/PR templates, security pinning |
| [`basher83/triangulum-observe`](https://github.com/basher83/triangulum-observe) | Monitoring and observability solutions                              | Metrics, logs, traces, alerting, visualization           |

Additional (future or optional) satellites could include infrastructure-as-code repositories,
service-specific codebases, and experiment sandboxes—each intentionally kept out of this
documentation hub to preserve separation of concerns.

### 1. `basher83/basher83/`

This is the special GitHub profile repository (matching your username) whose `README.md` is rendered
at https://github.com/basher83. It should:

- Provide a concise personal elevator pitch
- Surface key badges (build status, coverage, security, tooling)
- Link out to the other core repos (docs, assets, automation-scripts, .github)
- Optionally highlight current focus, tech stack, learning goals
- Stay lean—deep content belongs in `basher83/docs`

No tree is embedded here because its structure is typically minimal and changes infrequently.

### 2. `basher83/docs/`

<!-- DOCS-TREE-START -->
```plaintext
.
|-- CLAUDE.md
|-- LICENSE
|-- README.md
|-- SUMMARY.md
|-- Taskfile.yml
|-- flight-manuals
|   |-- README.md
|   |-- automation-scripts
|   |   |-- README.md
|   |   |-- documentation
|   |   |   `-- update-trees.md
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
|   |   |-- README.md
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
|   |   |-- CODEOWNERS-template
|   |   |-- README.md
|   |   |-- copilot-instructions.md
|   |   |-- integration-configs
|   |   |   |-- dependabot.yml
|   |   |   |-- renovate-config.json
|   |   |   `-- shields-badges.md
|   |   |-- label-definitions.yml
|   |   |-- learning-project-template.md
|   |   |-- major-feature-template.md
|   |   `-- milestone-templates.md
|   |-- github-configs.md
|   |-- github-templates
|   |   |-- CODE_OF_CONDUCT.md
|   |   |-- CONTRIBUTING.md
|   |   |-- ISSUE_TEMPLATE
|   |   |   |-- bug-report.yml
|   |   |   |-- config.yml
|   |   |   |-- documentation.yml
|   |   |   `-- feature-request.yml
|   |   |-- README.md
|   |   |-- SECURITY.md
|   |   `-- pull_request_template.md
|   |-- github-templates.md
|   |-- information-architecture.md
|   |-- project-templates
|   |   `-- README.md
|   `-- repo-naming-conventions.md
|-- package-lock.json
|-- package.json
|-- renovate.json
|-- scripts
|   `-- update-trees.sh
|-- space-dictionary
|   |-- README.md
|   `-- tech-acronyms.md
`-- star-charts
    |-- README.md
    |-- homelab-topology.md
    `-- service-maps.md

25 directories, 83 files
```
<!-- DOCS-TREE-END -->

### 3. `basher83/assets/`

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

- Organization: Keeps your main profile repo clean and focused on your actual README and profile
  information
- Reusability: Makes it easy to reference the same assets across multiple repositories (profile,
  projects, documentation)
- Version Control: You can update assets without cluttering your profile repo's commit history
- Size Management: GitHub has soft limits on repository sizes - keeping media assets separate
  prevents your main profile from growing too large
- Permissions: You can give specific collaborators access to help with assets without giving them
  access to your profile
- CDN Benefits: GitHub serves raw files from repositories via its CDN, making this an effective
  hosting solution
