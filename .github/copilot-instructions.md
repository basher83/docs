# GitHub Copilot Coding Agent Instructions for basher83/docs

| Property         | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| Repository Type  | Personal documentation hub and knowledge management system |
| Primary Language | Markdown (~80 files) with shell scripts and YAML workflows |
| Build System     | mise (polyglot tool manager) - see `.mise.toml`            |
| Organization     | Space-themed directory structure                           |

> **Note**: These instructions are validated and reliable. Perform additional exploration only if
> information is incomplete or produces errors.

## Quick Start (Validated Commands)

**ALWAYS run these commands in order when starting work:**

```bash
# 1. Install npm dependencies (REQUIRED - works without mise)
npm install

# 2. Check formatting (catches most issues)
npm run format:md:check

# 3. Lint markdown files
npm run lint:md
```

**Daily workflow**: `npm run format:md` → make changes → `npm run format:md:check` →
`npm run lint:md`

## Build & Validation Commands

### Primary Commands (Always Available via npm)

These commands work in any environment with Node.js installed:

| Command                   | Purpose                  | When to Use               |
| ------------------------- | ------------------------ | ------------------------- |
| `npm install`             | Install dependencies     | **First thing to run**    |
| `npm run format:md`       | Auto-fix markdown format | Before making any changes |
| `npm run format:md:check` | Check formatting only    | Before committing         |
| `npm run lint:md`         | Lint markdown files      | Before committing         |

### Mise Commands (When mise is Available)

If mise is installed (`curl https://mise.run | sh`), more commands are available:

| Command               | Aliases           | Purpose                  |
| --------------------- | ----------------- | ------------------------ |
| `mise run fmt`        | `f`, `format`     | Format all markdown      |
| `mise run fmt:check`  |                   | Check formatting         |
| `mise run lint`       | `l`               | Run all linters          |
| `mise run lint:md`    |                   | Lint markdown only       |
| `mise run check`      | `q`, `pre-commit` | Full validation pipeline |
| `mise run test`       | `t`               | Run all tests            |
| `mise run docs:trees` | `update-trees`    | Update directory trees   |

### CI Pipeline (What GitHub Actions Run)

The `docs-quality.yml` workflow runs:

1. `mise run fmt:check` - Prettier formatting check
2. `mise run lint:md` - markdownlint check
3. Verifies all GitHub Actions are pinned to commit SHAs

## Repository Structure

```
.
├── mission-control/      # Standards, templates, conventions (prescriptive)
├── flight-manuals/       # Step-by-step procedures, troubleshooting
├── star-charts/          # Architecture diagrams, network topology
├── maintenance-logs/     # Project journals, learning paths
├── space-dictionary/     # Glossaries, acronyms, quick references
├── scripts/              # Automation scripts (setup.sh, etc.)
├── .github/workflows/    # 4 GitHub Actions workflows
├── .mise.toml            # Mise task/tool configuration (NOT Taskfile.yml)
├── .markdownlint.json    # Markdown linting rules
├── .prettierrc.json      # Prettier formatting config
├── .pre-commit-config.yaml # Pre-commit hooks
└── package.json          # npm scripts (fallback commands)
```

### Content Placement Rules

| Content Type         | Directory           | Example                    |
| -------------------- | ------------------- | -------------------------- |
| Standards/templates  | `mission-control/`  | `coding-standards.md`      |
| Step-by-step guide   | `flight-manuals/`   | `setup-proxmox-cluster.md` |
| Diagram/architecture | `star-charts/`      | `homelab-topology.md`      |
| Project journal/log  | `maintenance-logs/` | `project-notes.md`         |
| Reference/glossary   | `space-dictionary/` | `acronyms.md`              |

### File Naming Rules

- Use kebab-case: `my-file-name.md`
- Use action-oriented names: `setup-proxmox-cluster.md` not `proxmox.md`
- Every directory MUST have a `README.md`

## Key Configuration Files

| File                      | Purpose                                     |
| ------------------------- | ------------------------------------------- |
| `.mise.toml`              | Task automation and tool management         |
| `.markdownlint.json`      | Markdown linting rules (relaxed for docs)   |
| `.prettierrc.json`        | Prettier config (100 char width, proseWrap) |
| `.pre-commit-config.yaml` | Pre-commit hooks with security checks       |
| `package.json`            | npm scripts for CI fallback commands        |
| `.markdownlintignore`     | Files excluded from linting                 |
| `.prettierignore`         | Files excluded from formatting              |

## Troubleshooting

### Formatting Failures

```bash
# Auto-fix most issues
npm run format:md

# Check what changed
git diff
```

### Linting Failures

```bash
# Run lint to see issues
npm run lint:md

# Common auto-fixable rules:
# - MD022: Blank lines around headings
# - MD032: Blank lines around lists
# - MD047: Trailing newline at end of file
```

### Node_modules Errors in Lint Output

The npm lint script may show errors from `node_modules/`. This is expected when using the default
`npm run lint:md` command. The CI workflow excludes `node_modules` properly. For local testing, use:

```bash
npx markdownlint-cli2 "**/*.md" "!node_modules" --config .markdownlint.json
```

### Missing Dependencies

```bash
npm install
```

## GitHub Workflows

1. **docs-quality.yml** - Validates formatting and linting on PRs/pushes to main
2. **autofix-ci.yml** - Auto-applies formatting fixes on non-main branches
3. **update-doc-trees.yml** - Weekly auto-update of directory trees in docs
4. **sync-labels.yml** - Syncs repository labels

> **Security**: All GitHub Actions MUST be pinned to commit SHAs (not version tags)

## Validation Checklist (Before Committing)

1. `npm install` - Ensure dependencies are installed
2. `npm run format:md` - Auto-fix formatting
3. `npm run format:md:check` - Verify formatting passes
4. `npm run lint:md` - Check for linting issues (ignore node_modules errors)
5. Verify new files are in the correct directory per placement rules
6. Verify new directories have a `README.md`

## Cross-Repository References

This documentation hub references:

- `basher83/automation-scripts` - Script implementations
- `basher83/.github` - Shared workflows and templates
- `basher83/assets` - Visual assets and banners
