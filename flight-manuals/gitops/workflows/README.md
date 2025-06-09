# Workflows

## Overview

This directory contains comprehensive documentation for GitHub Actions workflows used across the basher83 ecosystem.

## Structure

| Document                                          | Description                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| [Reusable Workflows](reusable-workflows.md)       | Documentation for centralized, reusable workflow components        |
| [Deployment Patterns](deployment-patterns.md)     | Common deployment workflow patterns and best practices             |
| [Security Workflows](security-workflows.md)       | Security-focused workflows for code scanning, vulnerability checks |
| [Maintenance Workflows](maintenance-workflows.md) | Automated maintenance tasks, dependency updates, cleanup           |

## Quick Links

* **Implementation Repository**: [`basher83/github-actions`](https://github.com/basher83/github-actions)
* **Workflow Templates**: [`../templates/`](../templates/)
* **Current Project Workflows**: Individual project `.github/workflows/` directories

## Usage Pattern

1. **Reusable workflows** stored in `basher83/github-actions` repository
2. **Project-specific workflows** reference reusable components
3. **Documentation** in this directory explains usage and patterns
4. **Templates** provide starting points for new workflows

## Integration Examples

```yaml
# In project workflow
jobs:
  deploy:
    uses: basher83/github-actions/.github/workflows/deploy-docker.yml@main
    with:
      environment: production
```

## Related Documentation

* [GitHub Actions Overview](../actions.md)
* [Repository Setup Guide](../repo-setup-guide.md)
* [Project Management](../project-management.md)
