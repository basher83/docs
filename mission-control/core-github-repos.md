# Core GitHub Repositories

## Overview

This document outlines the core GitHub repositories that are essential for my technical projects.

## Repositories

```plaintext
basher83/
├── docs/
├── assets/
└── ...
```

### 1. `basher83/docs/`

```plaintext
basher83/docs/
├── README.md                          # Main documentation hub
├── mission-control/                   # Overall guidelines and standards
│   ├── repo-naming-conventions.md     # Your space-themed naming convention
│   ├── coding-standards.md            # Personal coding standards
│   └── project-templates/             # Templates for new projects
├── star-charts/                       # Architecture diagrams
│   ├── homelab-topology.md            # Network and server diagrams
│   └── service-maps.md                # How services connect
├── flight-manuals/                    # How-to guides
│   ├── proxmox-guides/                # Proxmox-specific documentation
│   ├── network-security/              # Security procedures
│   └── automation-scripts/            # Documentation for your scripts
├── maintenance-logs/                  # Project journals and notes
│   └── learning-paths.md              # Personal learning roadmap
└── space-dictionary/                  # Glossary and reference
    └── tech-acronyms.md               # Quick reference for terminology
```

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
- Dedicated Purpose: Creates a clear separation of concerns - one repo for your profile, one for assets that support all your repos
