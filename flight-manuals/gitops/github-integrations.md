# 🔗 GitHub Integrations Guide

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=flight-manuals%2Fgitops%2Fgithub-integrations.md&display_timestamp=committer)

Complete guide for setting up external integrations with GitHub repositories.

## Overview

This guide covers integration setup for external services that enhance repository functionality and
documentation workflows.

## Shields.io Badges

### Standard Badge Set

Add these badges to README.md headers for consistent project presentation:

```markdown
![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=flight-manuals%2Fgitops%2Fgithub-integrations.md&display_timestamp=committer)
![License](https://img.shields.io/github/license/basher83/[repo-name])
![Issues](https://img.shields.io/github/issues/basher83/[repo-name])
![Stars](https://img.shields.io/github/stars/basher83/[repo-name])
```

### Dynamic Badges

For active projects, include status badges:

```markdown
![Build Status](https://img.shields.io/github/actions/workflow/status/basher83/[repo-name]/main.yml)
![Coverage](https://img.shields.io/codecov/c/github/basher83/[repo-name])
![Dependencies](https://img.shields.io/librariesio/github/basher83/[repo-name])
```

### Custom Badges

Space-themed custom badges:

```markdown
![Mission Status](https://img.shields.io/badge/Mission-Active-brightgreen)
![Space Theme](https://img.shields.io/badge/Theme-Space%20Exploration-blue)
![Documentation](https://img.shields.io/badge/Docs-Complete-success)
```

## GitBook Integration

### Setup Process

1. **GitBook Account Setup**
   - Create/login to GitBook account
   - Connect GitHub organization
   - Select repository for integration

2. **Repository Configuration**
   - Add `.gitbook.yaml` configuration file
   - Structure documentation for GitBook compatibility
   - Configure GitHub sync

3. **GitBook Configuration File** Create `.gitbook.yaml` in repository root:

```yaml
root: ./docs

structure:
  readme: README.md
  summary: SUMMARY.md

plugins:
  - search
  - sharing
  - fontsettings
  - theme-space

variables:
  theme: "space-exploration"
  organization: "Mission Control"
```

### Documentation Structure

Organize docs for GitBook compatibility:

```plaintext
docs/
├── README.md              # Introduction
├── SUMMARY.md             # Table of contents
├── mission-control/       # Standards & templates
├── flight-manuals/        # Procedures & guides
├── star-charts/          # Architecture & diagrams
├── maintenance-logs/     # Historical records
└── space-dictionary/     # Glossaries & references
```

### GitHub Actions for GitBook

Add workflow for automatic GitBook updates:

```yaml
name: GitBook Sync
on:
  push:
    branches: [main]
    paths: ["docs/**"]

jobs:
  gitbook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Sync to GitBook
        uses: gitbook/integrations@v1
        with:
          token: ${{ secrets.GITBOOK_TOKEN }}
```

## GitHub Pages

### Setup for Documentation Sites

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source: GitHub Actions
   - Choose custom domain if available

2. **Jekyll Configuration** Create `_config.yml` for GitHub Pages:

```yaml
title: "[Project Name] - Mission Documentation"
description: "Space-themed documentation hub"
theme: jekyll-theme-cayman
markdown: kramdown
highlighter: rouge

plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

navigation:
  - title: Mission Control
    url: /mission-control/
  - title: Flight Manuals
    url: /flight-manuals/
  - title: Star Charts
    url: /star-charts/
```

3. **GitHub Actions for Pages**

```yaml
name: Deploy Documentation
on:
  push:
    branches: [main]
    paths: ["docs/**"]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: docs
      - uses: actions/deploy-pages@v2
```

## Renovate Integration

### Configuration Setup

Add `renovate.json` to repository root:

```json
{
  "extends": ["config:base"],
  "schedule": ["before 4am on Monday"],
  "commitMessagePrefix": "🔧 ",
  "commitMessageTopic": "{{depName}}",
  "commitMessageExtra": "to {{newVersion}}",
  "semanticCommits": "enabled",
  "labels": ["🤖 renovate", "📦 dependencies"],
  "reviewers": ["basher83"],
  "timezone": "America/New_York"
}
```

### Advanced Configuration

For specific package managers:

```json
{
  "packageRules": [
    {
      "matchManagers": ["npm"],
      "labels": ["📦 npm"],
      "commitMessagePrefix": "📦 npm: "
    },
    {
      "matchManagers": ["docker"],
      "labels": ["🐳 docker"],
      "commitMessagePrefix": "🐳 docker: "
    }
  ]
}
```

## autofix.ci Integration

Automated pull request formatting & lint auto-fixing. Complements (not replaces) local pre-commit
hooks.

### When To Use

- Reduce contributor friction (external / drive‑by PRs)
- Enforce consistent formatting without manual review comments
- Keep PRs small & focused on logical changes, not style churn

### What It Does

1. Watches open PRs
2. Runs configured fixers (e.g. ruff --fix, markdownlint --fix, prettier, shfmt)
3. Pushes a bot commit with only auto-fixable changes
4. Triggers CI re-run

### Installation

1. Visit https://autofix.ci and install the GitHub App
2. Grant access: select repositories (principle of least privilege)
3. Open a test PR touching a file handled by a fixer
4. Wait for the bot to comment / push a commit

### Minimal Configuration

autofix.ci infers tools from existing config files. Ensure these exist:

- `.markdownlint.json` (Markdown)
- `pyproject.toml` / `ruff.toml` (Ruff)
- `.prettierrc` if web assets present
- `.editorconfig` for base whitespace consistency

### Branch Protection Considerations

| Setting                | Recommendation                                                         |
| ---------------------- | ---------------------------------------------------------------------- |
| Require status checks  | Enable (checks run after bot commit)                                   |
| Require linear history | OK (squash merge preserves cleanliness)                                |
| Require signed commits | If enforced, bot commits must be exempt or use allowed signing pattern |
| Allow force pushes     | Keep disabled (bot uses normal pushes)                                 |

If required status checks run before & after autofix commit, ensure they are fast to avoid queueing
delays.

### Example Workflow Interaction

```text
Contributor pushes PR → CI (lint fails due to formatting) → autofix.ci fixes & commits → CI passes → reviewer approves
```

### Example: Python (Ruff + uv + autofix.ci)

Deterministic formatting & lint auto-fix using pinned action SHAs and `uv` to ensure the same Ruff
version locally and in CI.

```yaml
name: autofix.ci

on:
  pull_request:
  push:
    branches: ["main"]
  workflow_call:

permissions:
  contents: read

jobs:
  autofix:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # Pin uv installer action (update SHA quarterly / when needed)
      - name: Set up uv
        uses: astral-sh/setup-uv@e92bafb6253dcd438e0484186d7669ea7a8ca1cc
        with:
          version: "0.4.20"

      # (Optional) Cache the uv tool & virtualenv to speed up runs
      - name: Cache uv
        uses: actions/cache@v4
        with:
          path: ~/.cache/uv
          key: uv-${{ runner.os }}-0.4.20

      - name: Ruff lint auto-fix (safe fixes only)
        run: uv run ruff check --fix-only .

      - name: Ruff format
        run: uv run ruff format .

      # Add other deterministic fixers here (markdownlint, prettier, shfmt) if desired
      # - run: uv run markdownlint-cli2 --fix '**/*.md'

      - name: Commit & report fixes
        uses: autofix-ci/action@635ffb0c9798bd160680f18fd73371e355b85f27
```

#### Notes

- Pin action SHAs (supply chain integrity). Rotate on a schedule.
- `--fix-only` prevents Ruff from emitting diagnostics that can't be auto-corrected.
- If you add more tools (e.g. `markdownlint`), ensure configs (.markdownlint.json) are present so
  output is deterministic.
- For monorepos, restrict path globs or use a matrix if needed.

#### Variant: Using pre-commit

If you already codify tools in `.pre-commit-config.yaml`, you can run only fix-capable hooks, then
invoke the autofix action:

```yaml
- name: Install pre-commit
  run: uv tool install pre-commit==3.7.1
- name: Run fix-capable hooks
  run: pre-commit run --all-files --hook-stage manual || true
```

Ensure non-deterministic or destructive hooks (e.g. sorting imports differently per version) are
pinned.

### Best Practices

- Keep tool versions pinned to avoid diff churn (e.g. pin ruff in pre-commit)
- Avoid mixing logical changes with pure formatting commits—let the bot own style updates
- If a formatter produces undesired changes, adjust its config locally and push; the bot will re-run
- Document in `CONTRIBUTING.md` that minor formatting issues are auto-resolved

### Troubleshooting

| Symptom          | Cause                              | Fix                                    |
| ---------------- | ---------------------------------- | -------------------------------------- |
| No bot commit    | App not installed / lacks access   | Re-install, confirm repo selected      |
| Repeated commits | Non-deterministic tool output      | Pin versions, unify line ending rules  |
| Bot cannot push  | Branch protection blocks bot user  | Allow GitHub App / adjust restrictions |
| CI still failing | Non-auto-fix issues (types, tests) | Address manually                       |

### Security Notes

- App has write access—treat like Renovate; review first runs
- Monitor commit author to ensure only formatting changes occur
- Quarterly review: verify config drift has not expanded scope unexpectedly

### Deactivation / Rollback

- Temporarily pause by uninstalling the App (no workflow file edits needed)
- To fully remove: uninstall + update docs removing references

### Cross References

- Standards: see "Automated Formatting (autofix.ci)" in `mission-control/coding-standards.md`
- Maintenance workflow design: see `flight-manuals/gitops/workflows/maintenance-workflows.md`

> Principle: Automation should make PR review about correctness, not whitespace.

## CodeCov Integration

### Setup Process

1. **CodeCov Account**
   - Connect CodeCov with GitHub
   - Add repository to CodeCov dashboard
   - Get upload token

2. **GitHub Actions Integration**

```yaml
name: Test Coverage
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: npm test
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```

3. **Configuration File** Add `codecov.yml`:

```yaml
coverage:
  status:
    project:
      default:
        target: 80%
    patch:
      default:
        target: 70%

comment:
  layout: "header, diff, flags, files"
  behavior: default
```

## Dependabot Configuration

### Security Updates

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "04:00"
    labels:
      - "🤖 dependabot"
      - "📦 dependencies"
    commit-message:
      prefix: "🔧"
      include: "scope"

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "🤖 dependabot"
      - "⚙️ github-actions"
```

## All Contributors Integration

### Setup Process

1. **Install All Contributors Bot**
   - Install from GitHub Marketplace
   - Grant repository access
   - Configure settings

2. **Configuration File** Add `.all-contributorsrc`:

```json
{
  "projectName": "[repo-name]",
  "projectOwner": "basher83",
  "repoType": "github",
  "repoHost": "https://github.com",
  "files": ["README.md"],
  "imageSize": 100,
  "commit": true,
  "commitConvention": "angular",
  "contributorsPerLine": 7,
  "skipCi": true
}
```

## Integration Monitoring

### Health Checks

Regular monitoring of integrations:

- [ ] Shields.io badges display correctly
- [ ] GitBook syncs automatically
- [ ] GitHub Pages deploys successfully
- [ ] Renovate creates PRs on schedule
- [ ] CodeCov reports upload correctly
- [ ] Dependabot security alerts active

### Troubleshooting Common Issues

**Badge Display Issues:**

- Check URL syntax in markdown
- Verify repository visibility settings
- Test badge URLs independently

**GitBook Sync Failures:**

- Verify `.gitbook.yaml` syntax
- Check GitHub webhook status
- Review GitBook integration logs

**GitHub Actions Failures:**

- Check workflow file syntax
- Verify secrets configuration
- Review action logs for errors

## Security Considerations

### Token Management

- Store all tokens in GitHub Secrets
- Use least-privilege access
- Rotate tokens regularly
- Monitor token usage

### Webhook Security

- Verify webhook sources
- Use secret tokens for validation
- Monitor webhook activity
- Limit webhook permissions

## Next Steps

After setting up integrations:

1. Configure [project management](project-management.md) workflows
2. Establish [commit conventions](commit-conventions.md)
3. Set up [repository maintenance](repository-maintenance.md) schedules

---

**Mission Control Reference**: Integration configurations and templates available in
`mission-control/github-configs/`
