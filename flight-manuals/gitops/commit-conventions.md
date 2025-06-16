# 📝 Commit Conventions Guide

![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--06--09-success)

Comprehensive guide for git commit message standards and automation using space-themed conventions.

## Overview

Standardized commit messages improve project tracking, automation, and team collaboration. This guide establishes space-themed commit conventions that integrate with GitHub workflows.

## Commit Message Structure

### Standard Format

```
<emoji> <type>(<scope>): <description>

<body>

<footer>
```

### Components Explained

**Emoji**: Visual indicator for quick scanning
**Type**: Category of change (feat, fix, docs, etc.)
**Scope**: Area of codebase affected (optional)
**Description**: Brief summary (50 characters or less)
**Body**: Detailed explanation (optional, 72 characters per line)
**Footer**: Issue references, breaking changes (optional)

## Emoji and Type Mapping

### Primary Types with Space Emojis

**🎯 feat**: New features and capabilities

```bash
git commit -m "🎯 feat(auth): add multi-factor authentication system"
```

**🐛 fix**: Bug fixes and corrections

```bash
git commit -m "🐛 fix(api): resolve timeout issues in user endpoints"
```

**📚 docs**: Documentation changes only

```bash
git commit -m "📚 docs(readme): update installation instructions"
```

**🎨 style**: Code style changes (formatting, etc.)

```bash
git commit -m "🎨 style(components): apply consistent indentation"
```

**🔧 refactor**: Code refactoring without feature/bug changes

```bash
git commit -m "🔧 refactor(utils): extract common validation logic"
```

**⚡ perf**: Performance improvements

```bash
git commit -m "⚡ perf(db): optimize query performance for user lookup"
```

**✅ test**: Adding or modifying tests

```bash
git commit -m "✅ test(auth): add unit tests for login flow"
```

**🔨 build**: Build system or external dependencies

```bash
git commit -m "🔨 build(deps): upgrade React to version 18.2"
```

**👷 ci**: CI/CD configuration changes

```bash
git commit -m "👷 ci(actions): add automated testing workflow"
```

**🧹 chore**: Maintenance tasks, no production code change

```bash
git commit -m "🧹 chore(deps): update development dependencies"
```

### Mission-Specific Emojis

**🚀 deploy**: Deployment and release related

```bash
git commit -m "🚀 deploy: prepare version 2.1.0 for launch"
```

**🛰️ config**: Configuration updates

```bash
git commit -m "🛰️ config(env): update production environment variables"
```

**🌟 enhance**: Improvements to existing features

```bash
git commit -m "🌟 enhance(ui): improve navigation accessibility"
```

**🔒 security**: Security-related changes

```bash
git commit -m "🔒 security(auth): implement rate limiting for login attempts"
```

**🎨 design**: UI/UX specific changes

```bash
git commit -m "🎨 design(landing): update hero section layout"
```

**📊 analytics**: Tracking and analytics changes

```bash
git commit -m "📊 analytics(events): add user interaction tracking"
```

## Scope Guidelines

### Common Scopes by Project Type

**Web Applications:**

- `auth` - Authentication system
- `api` - API endpoints
- `ui` - User interface components
- `db` - Database related
- `config` - Configuration files
- `utils` - Utility functions

**Infrastructure Projects:**

- `k8s` - Kubernetes configurations
- `docker` - Docker related
- `terraform` - Infrastructure as code
- `monitoring` - Observability setup
- `networking` - Network configuration
- `security` - Security hardening

**Documentation Projects:**

- `guides` - How-to guides
- `reference` - Reference documentation
- `templates` - Template files
- `structure` - Organization changes
- `assets` - Images and media

## Detailed Examples

### Feature Addition

```bash
🎯 feat(dashboard): add real-time mission status monitoring

Implement WebSocket connection for live updates of mission progress.
Includes status indicators for each mission phase and alert system
for critical events.

Resolves: #123
Implements: RFC-456
```

### Bug Fix with Investigation

```bash
🐛 fix(navigation): resolve menu collapse on mobile devices

Investigation revealed CSS media query conflict causing navigation
to remain expanded on mobile. Updated breakpoint logic and tested
across device range.

Before: Menu stayed open on screens < 768px
After: Menu properly collapses and shows hamburger icon

Fixes: #89
Tested-on: iOS Safari, Android Chrome, mobile Firefox
```

### Documentation Update

```bash
📚 docs(api): add comprehensive endpoint documentation

- Add OpenAPI specifications for all v2 endpoints
- Include request/response examples for each endpoint
- Document authentication requirements
- Add rate limiting information

Co-authored-by: Jane Doe <jane@example.com>
```

### Refactoring with Rationale

```bash
🔧 refactor(auth): extract token validation to middleware

Consolidate JWT validation logic that was duplicated across multiple
route handlers. New middleware provides consistent token verification
and error handling.

Benefits:
- Reduced code duplication by 40%
- Centralized error handling
- Easier to modify token validation logic
- Improved test coverage

Breaking-change: None (internal refactoring only)
```

## Commit Message Templates

### Git Message Template Setup

Create `.gitmessage` template file:

```bash
# 🚀 Mission Commit Template
# 
# <emoji> <type>(<scope>): <description>
# 
# <body>
# 
# <footer>
#
# Types:
# 🎯 feat     - New feature or capability
# 🐛 fix      - Bug fix
# 📚 docs     - Documentation changes
# 🎨 style    - Code style changes
# 🔧 refactor - Code refactoring
# ⚡ perf     - Performance improvement
# ✅ test     - Tests
# 🔨 build    - Build system changes
# 👷 ci       - CI/CD changes
# 🧹 chore    - Maintenance
#
# Mission Emojis:
# 🚀 deploy   - Deployment related
# 🛰️ config   - Configuration
# 🌟 enhance  - Enhancement
# 🔒 security - Security
# 🎨 design   - UI/UX
# 📊 analytics- Analytics
#
# Remember:
# - Use imperative mood ("add" not "added")
# - First line 50 chars or less
# - Reference issues in footer
# - Explain WHY, not just WHAT
```

Configure git to use template:

```bash
git config commit.template .gitmessage
```

### VS Code Integration

Add to `.vscode/settings.json`:

```json
{
  "git.inputValidationLength": 50,
  "git.inputValidationSubjectLength": 50,
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true,
  "conventionalCommits.scopes": [
    "auth", "api", "ui", "db", "config", "utils",
    "k8s", "docker", "terraform", "monitoring"
  ]
}
```

## Automated Workflows

### Commit Validation

Create `.github/workflows/commit-validation.yml`:

```yaml
name: 🔍 Commit Message Validation
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  validate-commits:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Validate Commit Messages
        run: |
          # Check each commit in the PR
          git log --format="%s" origin/main..HEAD | while read message; do
            if ! echo "$message" | grep -qE "^(🎯|🐛|📚|🎨|🔧|⚡|✅|🔨|👷|🧹|🚀|🛰️|🌟|🔒|📊)\s(feat|fix|docs|style|refactor|perf|test|build|ci|chore|deploy|config|enhance|security|design|analytics)(\(.+\))?:\s.+"; then
              echo "❌ Invalid commit message: $message"
              echo "Please follow space-themed commit conventions"
              exit 1
            fi
          done
          echo "✅ All commit messages follow conventions"
```

### Changelog Generation

Automate changelog generation from commit messages:

```yaml
name: 📝 Generate Changelog
on:
  push:
    tags:
      - 'v*'

jobs:
  changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Generate Changelog
        run: |
          # Extract features and fixes from commit messages
          echo "# 🚀 Mission Log - $(git describe --tags --abbrev=0)" > CHANGELOG_NEW.md
          echo "" >> CHANGELOG_NEW.md
          
          echo "## 🎯 New Features" >> CHANGELOG_NEW.md
          git log --format="- %s" --grep="🎯 feat" $(git describe --tags --abbrev=0 HEAD~1)..HEAD >> CHANGELOG_NEW.md
          
          echo "" >> CHANGELOG_NEW.md
          echo "## 🐛 Bug Fixes" >> CHANGELOG_NEW.md
          git log --format="- %s" --grep="🐛 fix" $(git describe --tags --abbrev=0 HEAD~1)..HEAD >> CHANGELOG_NEW.md
          
          # Prepend to existing changelog
          cat CHANGELOG.md >> CHANGELOG_NEW.md
          mv CHANGELOG_NEW.md CHANGELOG.md
```

### Release Notes Automation

Generate release notes from commits:

```yaml
name: 🚀 Auto Release Notes
on:
  release:
    types: [created]

jobs:
  release-notes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Generate Release Notes
        id: release-notes
        run: |
          # Create comprehensive release notes
          notes=$(cat << 'EOF'
          ## 🚀 Mission Summary
          
          This release includes the following mission objectives:
          
          ### 🎯 New Features
          $(git log --format="- %s" --grep="🎯 feat" ${{ github.event.release.tag_name }}^..HEAD)
          
          ### 🐛 Mission Fixes
          $(git log --format="- %s" --grep="🐛 fix" ${{ github.event.release.tag_name }}^..HEAD)
          
          ### 📚 Documentation Updates
          $(git log --format="- %s" --grep="📚 docs" ${{ github.event.release.tag_name }}^..HEAD)
          
          ### 🔧 System Improvements
          $(git log --format="- %s" --grep="🔧 refactor" ${{ github.event.release.tag_name }}^..HEAD)
          
          ## 🛰️ Mission Control
          
          **Full mission log**: [${{ github.event.release.tag_name }}](${{ github.server_url }}/${{ github.repository }}/compare/${{ github.event.release.tag_name }}^...${{ github.event.release.tag_name }})
          
          **Mission Commander**: @${{ github.actor }}
          **Launch Date**: $(date -u +"%Y-%m-%d %H:%M UTC")
          EOF
          )
          
          echo "notes=$notes" >> $GITHUB_OUTPUT
      
      - name: Update Release
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.repos.updateRelease({
              owner: context.repo.owner,
              repo: context.repo.repo,
              release_id: ${{ github.event.release.id }},
              body: `${{ steps.release-notes.outputs.notes }}`
            })
```

## Team Guidelines

### Code Review Integration

**PR Title Format:**

```
🎯 feat(scope): Brief description of changes

Details about the changes, why they were made, and any considerations
for reviewers.

Closes: #123
Related: #456
```

**Review Comments:**
Use space-themed language in reviews:

- "🚀 Ready for launch!" (Approved)
- "🔍 Navigation check needed" (Needs changes)
- "🛰️ Orbital adjustment suggested" (Minor suggestion)
- "⚠️ Mission critical issue" (Blocking concern)

### Commit Frequency Guidelines

**Development Flow:**

- Make small, logical commits
- Each commit should be a complete thought
- Avoid "WIP" or "tmp" commits in main branch
- Use interactive rebase to clean up history before PR

**Commit Timing:**

- Commit working code frequently
- Don't commit broken code to main branch
- Use feature branches for experimental work
- Squash related commits before merging

## Troubleshooting

### Common Issues

**Commit Message Too Long:**

```bash
# Instead of:
🎯 feat(auth): implement comprehensive multi-factor authentication with SMS, email, and app-based verification

# Use:
🎯 feat(auth): add multi-factor authentication system

Implement comprehensive MFA with multiple verification methods:
- SMS verification for mobile users
- Email backup codes for account recovery  
- App-based TOTP for enhanced security
```

**Missing Emoji or Type:**

```bash
# Incorrect:
fix login bug

# Correct:
🐛 fix(auth): resolve session timeout issue
```

**Scope Too Broad:**

```bash
# Too broad:
🎯 feat(app): add new features

# Better:
🎯 feat(dashboard): add user activity timeline
🎯 feat(profile): implement avatar upload
```

### Git Hooks for Validation

Create `.git/hooks/commit-msg`:

```bash
#!/bin/sh
# Space-themed commit message validation

commit_regex='^(🎯|🐛|📚|🎨|🔧|⚡|✅|🔨|👷|🧹|🚀|🛰️|🌟|🔒|📊)\s(feat|fix|docs|style|refactor|perf|test|build|ci|chore|deploy|config|enhance|security|design|analytics)(\(.+\))?:\s.+$'

if ! grep -qE "$commit_regex" "$1"; then
    echo "❌ Invalid commit message format!"
    echo "Expected: <emoji> <type>(<scope>): <description>"
    echo "Example: 🎯 feat(auth): add user authentication"
    exit 1
fi

# Check message length
first_line=$(head -n1 "$1")
if [ ${#first_line} -gt 50 ]; then
    echo "⚠️  Commit message too long (${#first_line} > 50 characters)"
    echo "Consider shortening the description or adding details in the body"
fi
```

Make hook executable:

```bash
chmod +x .git/hooks/commit-msg
```

---

**Mission Control Reference**: Message templates and automation configs available in `mission-control/boilerplate/`
