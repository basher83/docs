# 🛠️ Development Environment

![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--08--18-success)

Guides for setting up and managing development environments, tools, and workflows.

## Contents

- [**Mise Setup**](./mise-setup.md) - Complete guide for using mise to manage development tools and
  task automation
  - Tool version management
  - Task automation and scripts
  - MCP configuration with Infisical
  - CI/CD integration

## Quick Start

```bash
# Install mise
brew install mise  # macOS
curl https://mise.run | sh  # Linux

# Setup repository
mise trust --yes
mise install --yes
mise run setup
```

## Related Documentation

- [Repository Setup Guide](../gitops/repo-setup-guide.md) - Creating new repositories
- [GitHub Integrations](../gitops/github-integrations.md) - CI/CD and automation
- [Coding Standards](../../mission-control/coding-standards.md) - Development practices

## Coming Soon

- Container development environments
- VS Code configuration and extensions
- Remote development setup
- Cloud development environments
