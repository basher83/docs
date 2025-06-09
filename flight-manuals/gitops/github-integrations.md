# 🔗 GitHub Integrations Guide
![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--06--09-success)

Complete guide for setting up external integrations with GitHub repositories.

## Overview

This guide covers integration setup for external services that enhance repository functionality and documentation workflows.

## Shields.io Badges

### Standard Badge Set
Add these badges to README.md headers for consistent project presentation:

```markdown
![Last Updated](https://img.shields.io/badge/Last%20Updated-YYYY--MM--DD-success)
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

3. **GitBook Configuration File**
Create `.gitbook.yaml` in repository root:

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
    paths: ['docs/**']

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

2. **Jekyll Configuration**
Create `_config.yml` for GitHub Pages:

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
    paths: ['docs/**']

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

3. **Configuration File**
Add `codecov.yml`:

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

2. **Configuration File**
Add `.all-contributorsrc`:

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

**Mission Control Reference**: Integration configurations and templates available in `mission-control/github-configs/`