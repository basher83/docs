# 🚀 GitHub Actions

## Overview

Comprehensive GitHub Actions automation strategy for the basher83 ecosystem, providing reusable workflows, templates, and best practices for consistent CI/CD across all projects.

## 📁 Organization Structure

This documentation follows a separation of concerns pattern:

| Component | Location | Purpose |
|-----------|----------|---------|
| **Documentation** | [`workflows/`](./workflows/) | Comprehensive guides and patterns |
| **Templates** | [`templates/`](./templates/) | Starting points for new workflows |
| **Implementation** | [`basher83/github-actions`](https://github.com/basher83/github-actions) | Reusable workflow repository |
| **Project Workflows** | Individual `.github/workflows/` | Project-specific implementations |

## 🔄 Workflow Categories

### Core Workflows
- **[Reusable Workflows](./workflows/reusable-workflows.md)** - Centralized, parameterized workflows
- **[Deployment Patterns](./workflows/deployment-patterns.md)** - Common deployment strategies
- **[Security Workflows](./workflows/security-workflows.md)** - Security scanning and compliance
- **[Maintenance Workflows](./workflows/maintenance-workflows.md)** - Automated maintenance tasks

### Templates
- **[Docker Workflow Template](./templates/docker-workflow.yml)** - Container-based applications
- **[Terraform Workflow Template](./templates/terraform-workflow.yml)** - Infrastructure as Code
- **[Documentation Workflow Template](./templates/docs-workflow.yml)** - Documentation automation

## 🎯 Quick Start

### 1. Create Project Workflow Directory
```bash
mkdir -p .github/workflows
```

### 2. Choose Template
Copy appropriate template from [`templates/`](./templates/) to your project:
```bash
cp flight-manuals/gitops/templates/docker-workflow.yml .github/workflows/deploy.yml
```

### 3. Customize Template
Update TODO sections in the copied workflow file

### 4. Reference Reusable Workflows
```yaml
jobs:
  deploy:
    uses: basher83/github-actions/.github/workflows/deploy-docker.yml@main
    with:
      environment: production
```

## 🏗️ Architecture Principles

### Separation of Concerns
- **Documentation** in this repository explains patterns and usage
- **Implementation** in separate repository provides reusable components
- **Project workflows** consume reusable components with project-specific configuration

### Space-Themed Environments
Following our [naming conventions](../../mission-control/repo-naming-conventions.md):
- **Development**: `Apollo-*`, `Mercury-*` (rapid iteration)
- **Staging**: `Saturn-Prime`, `Mars-Alpha` (pre-production testing)
- **Production**: `Andromeda-Core`, `MilkyWay-Max` (live systems)

### Security by Design
- Environment protection rules for production deployments
- Proper secret management and rotation
- Automated security scanning and compliance checks

## 📚 Related Documentation

- [Repository Setup Guide](./repo-setup-guide.md)
- [Commit Conventions](./commit-conventions.md)
- [Project Management](./project-management.md)
- [Information Architecture](../../mission-control/information-architecture.md)
