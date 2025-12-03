<div align="center">

# 🚀 Mission Control: Personal Documentation Hub 📚

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=README.md&display_timestamp=author&style=plastic&logo=github)
[![Profile](https://img.shields.io/badge/GitHub-basher83-181717?style=plastic&logo=github)](https://github.com/basher83)
[![GitHub License](https://img.shields.io/github/license/basher83/docs?style=plastic)](./LICENSE)

<!-- CI BADGES: Core automation pipelines -->

[![Docs Quality](https://github.com/basher83/docs/actions/workflows/docs-quality.yml/badge.svg)](https://github.com/basher83/docs/actions/workflows/docs-quality.yml)
[![Autofix CI](https://github.com/basher83/docs/actions/workflows/autofix-ci.yml/badge.svg)](https://github.com/basher83/docs/actions/workflows/autofix-ci.yml)
[![Update Doc Trees](https://github.com/basher83/docs/actions/workflows/update-doc-trees.yml/badge.svg)](https://github.com/basher83/docs/actions/workflows/update-doc-trees.yml)

_Docs Quality = formatting + lint + pinned action verification • Autofix CI = bot-applied
deterministic fixes • Update Doc Trees = keeps structure map fresh_

**Central knowledge repository for my projects, homelab, and technical standards**

<img src="https://raw.githubusercontent.com/basher83/assets/main/banners/docs-banner.png" width="600" alt="Documentation Banner">

</div>

---

## 🧭 Quick Nav

[📏 Mission Control](./mission-control/) • [📖 Flight Manuals](./flight-manuals/) •
[🗺️ Star Charts](./star-charts/) • [📝 Maintenance Logs](./maintenance-logs/) •
[🔤 Space Dictionary](./space-dictionary/)

---

## 🔭 Overview

This repository serves as my personal knowledge management system, containing documentation, guides,
standards, and reference materials for all my technical projects.

It follows my [space-themed organization](./mission-control/repo-naming-conventions.md) pattern
based on the principles defined in the
[Information Architecture Philosophy](./mission-control/information-architecture.md).

## 📚 Documentation Structure

<!-- doc-gen fileTree src="." maxDepth=3 includeFiles=false -->

```
└── docs/
    ├── ai_docs/
    ├── flight-manuals/
    │   ├── automation-scripts/
    │   │   ├── documentation/
    │   │   │   ...
    │   │   ├── proxmox-backup-server/
    │   │   │   ...
    │   │   └── proxmox-virtual-environment/
    │   │       ...
    │   ├── development-environment/
    │   ├── gitops/
    │   │   ├── templates/
    │   │   │   ...
    │   │   └── workflows/
    │   │       ...
    │   ├── network-security/
    │   └── proxmox-guides/
    ├── maintenance-logs/
    ├── mission-control/
    │   ├── boilerplate/
    │   │   ├── gitignore-templates/
    │   │   │   ...
    │   │   ├── license-templates/
    │   │   │   ...
    │   │   └── readme-templates/
    │   │       ...
    │   ├── github-configs/
    │   │   └── integration-configs/
    │   │       ...
    │   ├── github-templates/
    │   │   └── ISSUE_TEMPLATE/
    │   │       ...
    │   └── project-templates/
    ├── scripts/
    ├── space-dictionary/
    └── star-charts/
```

<!-- end-doc-gen -->

| Category                                | Description             | Contents                                                      |
| --------------------------------------- | ----------------------- | ------------------------------------------------------------- |
| [Mission Control](./mission-control/)   | Standards & guidelines  | Naming conventions, coding practices, project templates       |
| [Star Charts](./star-charts/)           | Architecture & diagrams | Network topology, service maps, infrastructure layouts        |
| [Flight Manuals](./flight-manuals/)     | How-to guides           | Setup procedures, automation tips, Git usage, troubleshooting |
| [Maintenance Logs](./maintenance-logs/) | Project journals        | Learning paths, project notes, decisions made                 |
| [Space Dictionary](./space-dictionary/) | Reference materials     | Glossaries, acronyms, quick references                        |

## 🔍 Quick Navigation

### Recently Updated

- [Space-Themed Repo Naming Conventions](./mission-control/repo-naming-conventions.md) -
  `2025-06-06`
- [Proxmox Backup Server Setup](./flight-manuals/proxmox-guides/proxmox-backup-server.md) -
  `2025-05-28`
- [Homelab Network Topology](./star-charts/homelab-topology.md) - `2025-05-15`

### Popular Guides

- [Terraform Best Practices](./mission-control/coding-standards.md#terraform)
- [Network Security Procedures](./flight-manuals/network-security/README.md)
- [Automation Scripts](./flight-manuals/automation-scripts/)

## 🛠️ Using This Documentation

This documentation is designed to be:

- **Living** - Constantly updated as I learn and grow
- **Practical** - Focused on real-world applications
- **Personal** - Tailored to my workflows and preferences
- **Organized** - Following a consistent space-themed structure

### 📐 Organization Philosophy

All content follows the
[Information Architecture Philosophy](./mission-control/information-architecture.md), which defines
clear purposes for each directory and provides a framework for consistent organization across all
documentation.

Feel free to reference, fork, or adapt any of these documents for your own use!

## 🔄 Syncing with Projects

Documentation in this repository is referenced across my projects:

```markdown
For more details, see my
[Terraform standards](https://github.com/basher83/docs/blob/main/mission-control/coding-standards.md#terraform).
```

## 📅 Maintenance Schedule

- **Weekly Reviews**: Basic updates and additions
- **Monthly Audits**: Ensure documentation matches current practices
- **Quarterly Reorganization**: Structural improvements and major updates

## ⚡ Quick Links to Other Resources

- [🖼️ Assets Repository](https://github.com/basher83/assets)
- [👨‍💻 Profile README](https://github.com/basher83/basher83)
- [🏠 ProxmoxMCP Project](https://github.com/basher83/ProxmoxMCP)
- [📊 Triangulum Observe](https://github.com/basher83/triangulum-observe) - Monitoring and
  observability solutions

## 🛠️ Development

This repository uses [mise](https://mise.jdx.dev/) for tool management and task automation.

### Quick Start

```bash
# Install mise (if not already installed)
brew install mise

# Setup repository
mise trust --yes
mise install --yes
mise run setup

# Run quality checks
mise run check

# Show all available tasks
mise tasks
```

### Key Commands

- `mise run check` (or `q`) - Run all quality checks
- `mise run fmt` (or `f`) - Format Markdown files
- `mise run lint` (or `l`) - Run linters
- `mise run test` (or `t`) - Run tests
- `mise run mcp` - Manage MCP configuration

📚 **For comprehensive mise documentation, see
[Development Environment Guide](./flight-manuals/development-environment/mise-setup.md)**

**Code Quality Analysis:**

For comprehensive code quality and security analysis, use Claude Code with Codacy MCP integration:

```bash
# In Claude Code session
use codacy mcp to check for issues
```

**Automated Quality Features:**

- ⬆️ **Renovate Bot** - Automated dependency updates with security focus
- 🔧 **Auto-fix Workflows** -
  [autofix.ci integration](./flight-manuals/gitops/github-integrations.md#autofixci-integration)
  automatic markdown formatting on PRs
- 🛡️ **Multi-Layer Security** - Pre-commit hooks with gitleaks, detect-secrets, and config
  validation
- 🚫 **Secret Prevention** - Blocks API keys and sensitive data at commit time
- 📊 **Quality Metrics** - Continuous quality monitoring and reporting

**Secret Management via Infisical:**

Requirements:

- Infisical CLI logged into cloud

⚠️ **Security Warning**: Never export secrets directly in your shell as they can leak to:

- Shell history files (~/.bash_history, ~/.zsh_history)
- Process lists visible to other users (ps aux)
- Log files and debugging output

### Recommended: Use Infisical's Ephemeral Run

The safest approach is to inject secrets only when needed:

```bash
# Run commands with secrets injected ephemerally
infisical run --path="/API-keys" -- npm run deploy
infisical run --path="/API-keys" -- mise run test:integration
```

### If You Must Export to Shell

If you absolutely need secrets in your shell environment, disable history first:

```bash
# Method 1: Temporarily disable history
set +o history  # Turn off history recording
export GITHUB_PERSONAL_ACCESS_TOKEN=$(infisical secrets get GITHUB_PERSONAL_ACCESS_TOKEN --path="/API-keys" --plain --silent)
export FIRECRAWL_API_KEY=$(infisical secrets get FIRECRAWL_API_KEY --path="/API-keys" --plain --silent)
set -o history  # Re-enable history recording

# Method 2: Use space prefix (requires HISTCONTROL=ignorespace)
 export GITHUB_PERSONAL_ACCESS_TOKEN=$(infisical secrets get GITHUB_PERSONAL_ACCESS_TOKEN --path="/API-keys" --plain --silent)
#^ Note the leading space - won't be saved to history if HISTCONTROL=ignorespace is set
```

### Via .envrc with validation

```bash
# --- Load secrets from Infisical ---
# Safety first
set -euo pipefail

: "${FIRECRAWL_API_KEY:=$(infisical secrets get FIRECRAWL_API_KEY --path="/API-keys" --plain 2>/dev/null || true)}"

# Firecrawl API Key handling
if [ -z "$FIRECRAWL_API_KEY" ]; then
  if [ -n "$CI" ]; then
    echo "❌ FIRECRAWL_API_KEY not available – failing early." >&2
    exit 1
  else
    echo "⚠️  FIRECRAWL_API_KEY could not be retrieved – Firecrawl API operations may fail." >&2
  fi
else
  export FIRECRAWL_API_KEY
fi
```

---

<div align="center">

<img src="https://raw.githubusercontent.com/basher83/assets/main/space-gifs/docs-footer.gif" width="400">

**"Documentation is like space travel - the better your maps, the less likely you are to get
lost."**

![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=basher83.docs)

</div>
