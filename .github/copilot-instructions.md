# GitHub Copilot Instructions for basher83/docs

**Repository Type**: Personal documentation hub and knowledge management system  
**Primary Language**: Markdown with shell scripts and YAML workflows  
**Build System**: Task-based automation (Taskfile.yml)  
**Organization**: Space-themed directory structure with strict architectural principles

## 🚀 Quick Start

**New to this repo?** Run these commands to get productive immediately:

```bash
# 1. Install build tool
curl -sL https://taskfile.dev/install.sh | sh && sudo mv bin/task /usr/local/bin/

# 2. Install dependencies
npm install -g markdownlint-cli2 markdown-link-check

# 3. Set up security baseline (first time only)
pip install detect-secrets && detect-secrets scan . > .secrets.baseline

# 4. See what you can do
task

# 5. Before any changes: auto-fix formatting
task format:markdown

# 6. Ready to work!
```

**Daily workflow**: `task format:markdown` → make changes → `task pre-commit` → commit

## 📁 Repository Overview

This is a living documentation system with 61+ markdown files organized in a **space-themed
hierarchy**. The repository follows the
[Information Architecture Philosophy](../mission-control/information-architecture.md) with five core
directories:

| Directory               | Purpose                                  | Content Type                   | When to Use                                 |
| ----------------------- | ---------------------------------------- | ------------------------------ | ------------------------------------------- |
| **`mission-control/`**  | Standards, templates, conventions        | Prescriptive, copy-paste ready | Setting up new projects, defining standards |
| **`flight-manuals/`**   | Step-by-step procedures, troubleshooting | Instructional, procedural      | Need to accomplish a specific task          |
| **`star-charts/`**      | Architecture diagrams, network topology  | Visual, reference              | Understanding system relationships          |
| **`maintenance-logs/`** | Project journals, learning paths         | Chronological, experiential    | Documenting progress, decisions, lessons    |
| **`space-dictionary/`** | Glossaries, acronyms, quick references   | Alphabetical, definitional     | Looking up terms, quick reference           |

## ⚡ Essential Commands

### First-Time Setup

```bash
# Install Task build system
curl -sL https://taskfile.dev/install.sh | sh && sudo mv bin/task /usr/local/bin/

# Install required tools
npm install -g markdownlint-cli2 markdown-link-check
pip install detect-secrets

# Setup security baseline
detect-secrets scan . > .secrets.baseline
```

### Daily Development Workflow

```bash
# Before making changes
task format:markdown        # Auto-fix formatting issues

# During development
task lint:markdown          # Check for issues
task update-trees          # Update directory trees (if structure changed)

# Before committing
task pre-commit            # Full validation pipeline

# Local CI verification (requires clean git state)
task ci                    # Run full CI checks locally
```

### When Things Go Wrong

```bash
# Quick recovery
task format:markdown       # Fix most formatting issues
task clean                 # Clean temporary files

# Emergency reset
git checkout -- .markdownlint.json Taskfile.yml
task format:markdown
```

## 📋 Task Reference

| Command                 | Purpose                      | When to Use                               |
| ----------------------- | ---------------------------- | ----------------------------------------- |
| `task pre-commit`       | **Main validation pipeline** | Before every commit                       |
| `task format:markdown`  | Auto-fix markdown issues     | Before making changes, when linting fails |
| `task lint:markdown`    | Check markdown quality       | During development                        |
| `task update-trees`     | Update directory trees       | When adding/removing files or directories |
| `task ci`               | Full CI validation           | Before pushing (requires clean git state) |
| `task test:structure`   | Validate directory structure | When reorganizing repository              |
| `task security:actions` | Check pinned GitHub Actions  | When modifying workflows                  |

### Decision Tree: Which Command When?

```
New to repo? → Quick Start commands
Making changes? → task format:markdown first
Changed file structure? → task update-trees
Before commit? → task pre-commit
Before push? → task ci
Build failing? → Emergency commands
```

## 🔧 Troubleshooting Guide

### Common Issues and Solutions

#### Markdown Linting Failures

```bash
# Most issues auto-fixable
task format:markdown

# Manual fixes may be needed for:
# - MD003: Change setext headers (===) to ATX headers (#)
# - MD047: Add single trailing newline to files
```

#### Security Check Failures

```bash
# Install missing tools
pip install detect-secrets
# Optional: brew install gitleaks (macOS) / apt install gitleaks (Ubuntu)

# Reset security baseline
detect-secrets scan . > .secrets.baseline
```

#### Tree Update Issues

```bash
# Update all documentation trees
task update-trees

# Trees auto-update between these markers:
<!-- TREE-START -->
<!-- TREE-END -->
```

#### CI Format Check Failures

- **Problem**: `task ci` fails with "working tree not clean"
- **Solution**: Commit changes first, then run `task ci`

#### Missing Dependencies

```bash
# Reinstall everything
task clean
task install:tools
```

### Error Message Quick Reference

| Error Contains            | Likely Cause              | Solution                                    |
| ------------------------- | ------------------------- | ------------------------------------------- |
| "markdownlint"            | Formatting issues         | `task format:markdown`                      |
| "working tree not clean"  | Uncommitted changes       | Commit changes first                        |
| "command not found: task" | Task not installed        | Run installation command                    |
| "detect-secrets"          | Missing security baseline | `detect-secrets scan . > .secrets.baseline` |

### Cross-Repository References

This documentation hub references implementation repositories:

- `basher83/automation-scripts` - Actual script implementations
- `basher83/.github` - Shared workflows and templates
- `basher83/assets` - Visual assets and banners

---

## 💡 Pro Tips

- **Start simple**: Use the Quick Start commands, then dive deeper as needed
- **Format first**: Always run `task format:markdown` before making changes - it prevents most
  issues
- **Check as you go**: Run `task lint:markdown` frequently during development
- **When in doubt**: The
  [Information Architecture Philosophy](../mission-control/information-architecture.md) explains the
  "why" behind the organization
- **Emergency escape**: If something breaks, the troubleshooting guide has you covered

This repository is designed to be self-documenting and self-maintaining. These instructions should
be sufficient for productive work without extensive exploration.

## 📝 Content Creation Guide

### Where to Put New Content

**Decision flowchart for new content:**

```
Standards/templates? → mission-control/
Step-by-step guide? → flight-manuals/
Diagram/architecture? → star-charts/
Project journal/log? → maintenance-logs/
Reference/glossary? → space-dictionary/
```

### File Organization Rules

**Naming Conventions:**

- Use kebab-case: `my-file-name.md` ✅
- Action-oriented names: `setup-proxmox-cluster.md` not `proxmox.md` ✅
- Every directory MUST have `README.md` ✅

**Content Principles:**

- **One concept per file** - separate procedural and reference content
- **Clear hierarchy** - use subdirectories when categories emerge
- **Cross-references** - link related content across directories
- **Date badges** - include in headers:
  `![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path={ADD_PATH_TO_FILE}&display_timestamp=committer)`

### Content Creation Workflow

```bash
# 1. Choose directory based on content type (see decision flowchart above)
# 2. Create file with kebab-case naming
# 3. Add required headers with date badge
# 4. Write content
# 5. Run validation
task format:markdown
task lint:markdown
task update-trees    # if you added new files/directories
task pre-commit      # full validation
# 6. Commit changes
```

## 🏗️ Architecture Reference

### Key Configuration Files

- **`Taskfile.yml`** - Build automation (44+ tasks defined)
- **`.markdownlint.json`** - Markdown linting rules
- **`.pre-commit-config.yaml`** - Pre-commit hooks with security focus
- **`.github/workflows/`** - 3 automated workflows

### Required Directory Structure

```
.
├── mission-control/     # Standards & templates
├── flight-manuals/     # Procedures & guides
├── star-charts/        # Diagrams & architecture
├── maintenance-logs/   # Project journals
├── space-dictionary/   # Reference materials
├── scripts/           # Automation scripts
└── .github/          # Workflows & templates
```

### GitHub Workflows (Auto-triggered)

1. **docs-quality.yml** - Validates markdown formatting & pinned action security checks
2. **autofix-ci.yml** - Bot applies deterministic formatting fixes (Prettier, markdownlint, Ruff)
3. **update-doc-trees.yml** - Auto-updates directory tree sections on main branch

> **Security Note**: All GitHub Actions are pinned to commit SHAs for supply-chain safety

### Cross-Repository References

This documentation hub references implementation repositories:

- `basher83/automation-scripts` - Actual script implementations
- `basher83/.github` - Shared workflows and templates
- `basher83/assets` - Visual assets and banners
