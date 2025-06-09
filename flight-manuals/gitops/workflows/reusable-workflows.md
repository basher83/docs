# 🔧 Reusable Workflows

## Overview

Centralized, reusable GitHub Actions workflows for common operations across multiple repositories.

## Available Workflows

### 🐳 Docker Workflows

#### `deploy-docker.yml`
**Purpose**: Build and deploy Docker containers to various environments

**Inputs**:
- `environment` - Target environment (development, staging, production)
- `registry` - Container registry URL
- `image_name` - Docker image name
- `dockerfile_path` - Path to Dockerfile (default: ./Dockerfile)

**Usage**:
```yaml
jobs:
  deploy:
    uses: basher83/github-actions/.github/workflows/deploy-docker.yml@main
    with:
      environment: production
      registry: ghcr.io
      image_name: my-app
    secrets:
      REGISTRY_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 🏗️ Terraform Workflows

#### `terraform-plan.yml`
**Purpose**: Plan Terraform changes across environments

**Inputs**:
- `working_directory` - Terraform working directory
- `terraform_version` - Terraform version to use
- `environment` - Target environment

#### `terraform-apply.yml`
**Purpose**: Apply Terraform changes with proper approvals

### 📚 Documentation Workflows

#### `update-docs.yml`
**Purpose**: Automatically update documentation trees and timestamps

**Triggers**: 
- Push to documentation directories
- Manual dispatch

**Features**:
- Updates directory trees in markdown files
- Updates timestamp badges
- Auto-commits changes

### 🔒 Security Workflows

#### `security-scan.yml`
**Purpose**: Comprehensive security scanning

**Features**:
- Container image vulnerability scanning
- Code quality checks
- Dependency vulnerability scanning
- Secret detection

## Implementation Repository

All reusable workflows are stored in: [`basher83/github-actions`](https://github.com/basher83/github-actions)

## Best Practices

### Workflow Design
- **Modular**: Each workflow handles one specific concern
- **Parameterized**: Use inputs for customization
- **Secure**: Handle secrets properly
- **Documented**: Clear descriptions and examples

### Version Management
- Use semantic versioning tags for releases
- Reference specific versions in production workflows
- Use `@main` for development/testing

### Input Validation
- Provide sensible defaults
- Validate required inputs
- Document input constraints

## Creating New Reusable Workflows

1. **Define Purpose**: Clear, single responsibility
2. **Design Interface**: Inputs, outputs, secrets
3. **Implement Logic**: Workflow steps and jobs
4. **Document Usage**: Add to this documentation
5. **Test Thoroughly**: Validate across different scenarios
6. **Version Release**: Tag and release for consumption

## Related Documentation

- [Deployment Patterns](./deployment-patterns.md)
- [Security Workflows](./security-workflows.md)
- [Workflow Templates](../templates/)