# 🚀 Deployment Patterns

## Overview

Common deployment patterns and workflows used across different project types in the basher83 ecosystem.

## Deployment Environments

### Space-Themed Environment Strategy

Following the [space-themed naming convention](../../../mission-control/repo-naming-conventions.md):

| Environment | Purpose | Naming Pattern | Approval Required |
|-------------|---------|----------------|-------------------|
| **Development** | Feature branches, rapid iteration | `Apollo-*`, `Mercury-*` | No |
| **Staging** | Pre-production testing | `Saturn-Prime`, `Mars-Alpha` | Review Required |
| **Production** | Live systems | `Andromeda-Core`, `MilkyWay-Max` | Manual Approval |

## Common Patterns

### 1. 🐳 Container Deployment Pattern

**Use Case**: Docker-based applications (ProxmoxMCP, homelab services)

```yaml
name: Container Deployment

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: docker compose -f compose.test.yml up --abort-on-container-exit

  build-and-deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    uses: basher83/.github/.github/workflows/deploy-docker.yml@main
    with:
      environment: production
      registry: ghcr.io
      image_name: ${{ github.repository }}
    secrets:
      REGISTRY_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 2. 🏗️ Infrastructure as Code Pattern

**Use Case**: Terraform projects (iac, scalr-deploy-kestra)

```yaml
name: Infrastructure Deployment

on:
  push:
    branches: [main]
    paths: ['terraform/**']
  pull_request:
    paths: ['terraform/**']

jobs:
  terraform-plan:
    uses: basher83/.github/.github/workflows/terraform-plan.yml@main
    with:
      working_directory: terraform
      environment: ${{ github.ref == 'refs/heads/main' && 'production' || 'staging' }}
    secrets:
      TF_API_TOKEN: ${{ secrets.TERRAFORM_TOKEN }}

  terraform-apply:
    needs: terraform-plan
    if: github.ref == 'refs/heads/main'
    uses: basher83/.github/.github/workflows/terraform-apply.yml@main
    environment: production
    with:
      working_directory: terraform
```

### 3. 📚 Documentation Pattern

**Use Case**: Documentation repositories (docs, project wikis)

```yaml
name: Documentation Update

on:
  push:
    branches: [main]
    paths: 
      - 'docs/**'
      - '**.md'
  schedule:
    - cron: '0 6 * * *'  # Daily at 6 AM UTC

jobs:
  update-docs:
    uses: basher83/.github/.github/workflows/update-docs.yml@main
    with:
      update_trees: true
      update_timestamps: true
```

### 4. 🔄 Multi-Environment Pattern

**Use Case**: Progressive deployment across environments

```yaml
name: Progressive Deployment

on:
  push:
    branches: [main, develop]

jobs:
  deploy-development:
    if: github.ref == 'refs/heads/develop'
    uses: basher83/.github/.github/workflows/deploy-docker.yml@main
    with:
      environment: development
      image_tag: dev-${{ github.sha }}

  deploy-staging:
    if: github.ref == 'refs/heads/main'
    uses: basher83/.github/.github/workflows/deploy-docker.yml@main
    with:
      environment: staging
      image_tag: staging-${{ github.sha }}

  deploy-production:
    needs: deploy-staging
    if: github.ref == 'refs/heads/main'
    uses: basher83/.github/.github/workflows/deploy-docker.yml@main
    environment: production  # Requires manual approval
    with:
      environment: production
      image_tag: prod-${{ github.sha }}
```

## Security Considerations

### Environment Protection Rules

```yaml
# In GitHub repository settings
production:
  required_reviewers: 
    - basher83
  wait_timer: 5  # 5-minute delay
  prevent_self_review: true

staging:
  required_reviewers: []
  wait_timer: 0
  prevent_self_review: false
```

### Secret Management

| Secret Type | Scope | Pattern |
|-------------|-------|---------|
| Registry Tokens | Repository | `REGISTRY_TOKEN` |
| API Keys | Organization | `TERRAFORM_TOKEN`, `PROXMOX_TOKEN` |
| Environment-specific | Environment | `PROD_DB_URL`, `STAGING_API_KEY` |

## Monitoring and Notifications

### Deployment Status Notifications

```yaml
  - name: Notify deployment status
    if: always()
    uses: 8398a7/action-slack@v3
    with:
      status: ${{ job.status }}
      channel: '#deployments'
      webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Health Checks

```yaml
  - name: Post-deployment health check
    run: |
      timeout 300 bash -c 'until curl -f ${{ env.HEALTH_CHECK_URL }}; do sleep 5; done'
```

## Best Practices

### 🎯 Deployment Strategy

- **Fail Fast**: Run tests before any deployment
- **Progressive**: Deploy to staging before production
- **Reversible**: Always plan for rollback scenarios
- **Monitored**: Include health checks and notifications

### 🔒 Security

- Use environment protection rules for production
- Rotate secrets regularly
- Audit deployment logs
- Limit deployment permissions

### 📊 Observability

- Log all deployment steps
- Track deployment metrics
- Monitor application health post-deployment
- Set up alerting for failed deployments

## Related Documentation

- [Reusable Workflows](./reusable-workflows.md)
- [Security Workflows](./security-workflows.md)
- [Repository Setup Guide](../repo-setup-guide.md)
