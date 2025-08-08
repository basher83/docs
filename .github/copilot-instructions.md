# GitHub Copilot Instructions for basher83/docs

**Repository Type**: Personal documentation hub and knowledge management system  
**Primary Language**: Markdown with shell scripts and YAML workflows  
**Build System**: Task-based automation (Taskfile.yml)  
**Organization**: Space-themed directory structure with strict architectural principles

## Repository Overview

This is a living documentation system containing 61+ markdown files organized in a space-themed hierarchy. The repository follows the [Information Architecture Philosophy](./mission-control/information-architecture.md) with five core directories:

- **`mission-control/`** - Standards, templates, conventions (prescriptive, copy-paste ready)
- **`flight-manuals/`** - Step-by-step procedures, troubleshooting guides (instructional)
- **`star-charts/`** - Architecture diagrams, network topology, service maps (visual)
- **`maintenance-logs/`** - Project journals, learning paths, decision records (chronological)
- **`space-dictionary/`** - Glossaries, acronyms, quick references (alphabetical)

## Build & Validation System

### Primary Tool: Task (Taskfile.yml)

**ALWAYS install Task first**: `curl -sL https://taskfile.dev/install.sh | sh && sudo mv bin/task /usr/local/bin/`

**Core Commands (run in order)**:

```bash
# 1. Install required tools
npm install -g markdownlint-cli2 markdown-link-check
pip install detect-secrets

# 2. Setup detect-secrets baseline (first time only)
detect-secrets scan . > .secrets.baseline

# 3. Show all available tasks
task

# 4. Auto-fix formatting issues
task format:markdown

# 5. Run pre-commit checks (main validation pipeline)
task pre-commit

# 6. Update documentation trees
task update-trees

# 7. Run full CI checks (requires clean git state)
task ci
```

### Essential Tasks Reference

| Command | Purpose | Notes |
|---------|---------|--------|
| `task pre-commit` | **Main validation pipeline** | Runs lint, format-check, security, update-trees |
| `task lint:markdown` | Markdown linting | Uses .markdownlint.json config |
| `task format:markdown` | Auto-fix markdown issues | **Always run before committing** |
| `task test:structure` | Validate directory structure | Ensures all 5 directories exist |
| `task security:actions` | Validate GitHub Actions | Ensures actions pinned to commit SHAs |
| `task update-trees` | Update directory trees | Auto-updates tree blocks in documentation |
| `task ci` | Run CI checks locally | Full validation before pushing |

### Known Issues & Workarounds

1. **Markdown Linting Errors**: Run `task format:markdown` first, may need manual fixes for heading styles (setext → ATX headers)
2. **Tree Update Flags**: Script has argument parsing issues with -I/-L flags (cosmetic, doesn't break functionality)
3. **Missing Tools**: Some tools (gitleaks) are optional but recommended for security
4. **CI Format Check**: `task ci` requires clean git state - commit changes before running
5. **Detect-secrets Setup**: First run requires: `detect-secrets scan . > .secrets.baseline`

## GitHub Workflows (Auto-triggered)

1. **markdownlint.yml** - Validates markdown on PRs/pushes
2. **update-doc-trees.yml** - Auto-updates tree structures on main branch
3. **markdown-autofix.yml** - Auto-fixes markdown formatting on PRs
4. **update-timestamp.yml** - Updates "Last Updated" badges

**All GitHub Actions are pinned to commit SHAs for security**

## File Organization Rules

### Naming Conventions

- Use kebab-case: `my-file-name.md`
- Action-oriented names: `setup-proxmox-cluster.md` not `proxmox.md`
- Every directory MUST have `README.md`

### Content Principles

- **One concept per file** - separate procedural and reference content
- **Clear hierarchy** - use subdirectories when categories emerge
- **Cross-references** - link related content across directories
- Include creation/update dates in headers: `![Last Updated](https://img.shields.io/badge/Last%20Updated-YYYY--MM--DD-success)`

## Architecture & Dependencies

### Key Configuration Files

- **`Taskfile.yml`** - Build automation (44 tasks defined)
- **`.markdownlint.json`** - Markdown linting rules
- **`.pre-commit-config.yaml`** - Pre-commit hooks with security focus
- **`.github/workflows/`** - 4 automated workflows

### Directory Structure (Required)

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

### Cross-Repository References

This is a documentation hub that references implementation repositories:

- `basher83/automation-scripts` - Actual script implementations
- `basher83/.github` - Shared workflows and templates
- `basher83/assets` - Visual assets and banners

## Common Validation Failures & Fixes

### Markdown Linting Issues

```bash
# Fix most issues automatically
task format:markdown

# Manual fixes needed for:
# - MD003: Change setext headers (===) to ATX headers (#)
# - MD047: Add single trailing newline to files
```

### Security Validation

```bash
# Run security checks
task security

# Install missing security tools
pip install detect-secrets
# gitleaks optional: brew install gitleaks (macOS) / apt install gitleaks (Ubuntu)
```

### Tree Updates

```bash
# Update all documentation trees
task update-trees

# Tree markers in files:
<!-- TREE-START -->
<!-- TREE-END -->
```

## Development Workflow

### For Documentation Changes

1. `task format:markdown` - Auto-fix formatting
2. `task lint:markdown` - Check for remaining issues  
3. `task update-trees` - Update directory trees if structure changed
4. `task pre-commit` - Full validation
5. Commit changes

### For New Content

1. Choose appropriate directory based on philosophy (see mission-control/information-architecture.md)
2. Use kebab-case naming
3. Add required headers with date badges
4. Run validation pipeline
5. Add cross-references to related content

## Emergency Commands

If builds fail:

```bash
# Clean and restart
task clean
task install:tools

# Reset to known good state
git checkout -- .markdownlint.json Taskfile.yml
task format:markdown
```

**Trust these instructions - only search/explore if information is incomplete or incorrect. This repository has been comprehensively documented to minimize agent exploration time.**
