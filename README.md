<div align="center">
  
# 🚀 Mission Control: Personal Documentation Hub 📚

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=README.md&display_timestamp=committer)
[![Profile](https://img.shields.io/badge/GitHub-basher83-181717?style=flat&logo=github)](https://github.com/basher83)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

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

## 🔭 Overview

This repository serves as my personal knowledge management system, containing documentation, guides,
standards, and reference materials for all my technical projects.

It follows my [space-themed organization](./mission-control/repo-naming-conventions.md) pattern
based on the principles defined in the
[Information Architecture Philosophy](./mission-control/information-architecture.md).

## 📚 Documentation Structure

<!-- TREE-START -->

```plaintext

```

<!-- TREE-END -->

| Category                                   | Description             | Contents                                                      |
| ------------------------------------------ | ----------------------- | ------------------------------------------------------------- |
| [📏 Mission Control](./mission-control/)   | Standards & guidelines  | Naming conventions, coding practices, project templates       |
| [🗺️ Star Charts](./star-charts/)           | Architecture & diagrams | Network topology, service maps, infrastructure layouts        |
| [📖 Flight Manuals](./flight-manuals/)     | How-to guides           | Setup procedures, automation tips, Git usage, troubleshooting |
| [📝 Maintenance Logs](./maintenance-logs/) | Project journals        | Learning paths, project notes, decisions made                 |
| [🔤 Space Dictionary](./space-dictionary/) | Reference materials     | Glossaries, acronyms, quick references                        |

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

## 🛠️ Development

This repository uses [mise](https://mise.jdx.dev/) for tool management and task automation.

### Quick Start

```bash
# Install mise (if not already installed)
brew install mise

# Trust the repository configuration
mise trust

# Install all required tools
mise install

# Run pre-commit checks
mise run pre-commit

# Show all available tasks
mise tasks
```

### Mise Configuration

**Managed Tools:**

- `node` (v20) - For documentation tooling and npm packages
- `shellcheck` - Shell script linting
- `gitleaks` - Secret detection
- `python` (v3.12) - For pre-commit and detect-secrets

**Key Tasks:**

- `mise run pre-commit` - Run format, lint, and update trees
- `mise run fmt` - Format Markdown with Prettier
- `mise run lint` - Run all linters
- `mise run test` - Run all tests
- `mise run ci` - Verify changes match CI requirements
- `mise run docs` - Update and validate documentation

**Quick Aliases:**

- `mise run f` - Format (alias for fmt)
- `mise run l` - Lint
- `mise run p` - Pre-commit
- `mise run q` - Quality analysis
- `mise run c` - Clean

**Setup & Installation:**

- `mise run setup` - Install Node dependencies
- `mise run setup:pre-commit` - Setup pre-commit hooks
- `mise run install:tools` - Install recommended npm tools
- `mise run git:hooks` - Install enhanced git hooks with auto-fixing

**Quality & Metrics:**

- `mise run quality` - Comprehensive quality analysis
- `mise run quality:metrics` - Generate quality metrics report
- `mise run format` - Auto-fix formatting issues
- `mise run format-check` - Check formatting without changes

### Shell Activation (Recommended)

For automatic tool activation in your shell:

```bash
# For zsh (add to ~/.zshrc)
eval "$(mise activate zsh)"

# For bash (add to ~/.bashrc)
eval "$(mise activate bash)"
```

If you use shell-level activation, you can remove the `eval "$(mise activate direnv)"` line from
`.envrc` to avoid double activation.

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

**Security Setup for New Machines:**

```bash
# One-command security setup
task setup:pre-commit

# Verify everything works
task security

# Test with all checks
task pre-commit
```

---

<div align="center">

<img src="https://raw.githubusercontent.com/basher83/assets/main/space-gifs/docs-footer.gif" width="400">

**"Documentation is like space travel - the better your maps, the less likely you are to get
lost."**

![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=basher83.docs)

</div>
