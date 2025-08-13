# 🚀 Repository Setup Guide

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=flight-manuals%2Fgitops%2Frepo-setup-guide.md&display_timestamp=committer)

Complete step-by-step workflow for creating new repositories following space-themed standards.

## Pre-Setup Checklist

- [ ] Repository name follows [naming conventions](../../mission-control/repo-naming-conventions.md)
- [ ] Project purpose clearly defined
- [ ] License type determined
- [ ] Initial team members identified

## Step 1: Repository Creation

### GitHub Repository Creation

1. Navigate to GitHub and click "New repository"
2. Apply naming convention: `project-type-name` (e.g., `homelab-infrastructure`, `web-portfolio`)
3. Add description following format: "Brief purpose - Space-themed emoji 🚀"
4. Set visibility (public/private based on content sensitivity)
5. Initialize with README (will be replaced with template)

### Initial Clone and Setup

```bash
git clone https://github.com/basher83/[repo-name].git
cd [repo-name]
```

## Step 2: Apply Templates and Boilerplate

### Copy GitHub Templates

```bash
# Copy issue templates
cp -r ../docs/mission-control/github-templates/.github .

# Copy appropriate .gitignore
cp ../docs/mission-control/boilerplate/gitignore-templates/[type].gitignore .gitignore

# Copy git message template
cp ../docs/mission-control/boilerplate/gitmessage-template .gitmessage
```

### Configure Git Message Template

```bash
git config commit.template .gitmessage
```

### Apply README Template

1. Choose appropriate template from `mission-control/boilerplate/readme-templates/`
2. Customize with project-specific information
3. Include space-themed elements and badges

## Step 3: GitHub Configuration

### Labels Setup

1. Delete default GitHub labels
2. Apply standardized labels from `mission-control/github-configs/label-definitions.yml`
3. Use GitHub CLI or manual setup:

```bash
gh label list --repo basher83/[repo-name]
# Apply custom labels (see github-configs for details)
```

### Milestones Creation

Reference `mission-control/github-configs/milestone-templates.md` for standard milestone patterns:

- 🎯 Mission Phase 1 (Initial Setup)
- 🚀 Launch Preparation (Core Features)
- 🌟 Operational Excellence (Polish & Optimization)

### Branch Protection

```bash
# Enable branch protection for main
gh api repos/basher83/[repo-name]/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":[]}' \
  --field enforce_admins=false \
  --field required_pull_request_reviews='{"required_approving_review_count":1}' \
  --field restrictions=null
```

## Step 4: Integration Setup

### Renovate Configuration

Copy `renovate.json` from this repository for dependency management:

```bash
cp ../docs/renovate.json .
```

### GitHub Actions

Choose appropriate workflow templates from `mission-control/github-templates/workflows/`:

- Documentation updates
- Dependency updates
- Testing pipelines
- Deployment workflows

## Step 5: Documentation Structure

### Create Directory Structure

Based on project type, create appropriate directory structure:

**For Documentation Projects:**

```bash
mkdir -p {mission-control,flight-manuals,star-charts,maintenance-logs,space-dictionary}
```

**For Code Projects:**

```bash
mkdir -p {src,tests,docs,.github/workflows}
```

### Initial Documentation

1. Update README with project-specific content
2. Create CONTRIBUTING.md from template
3. Add SECURITY.md if applicable
4. Create initial CHANGELOG.md

## Step 6: Team Setup

### Collaborators

1. Add team members with appropriate permissions
2. Assign initial roles and responsibilities
3. Set up code owners file (CODEOWNERS)

### Communication

1. Link to project communication channels
2. Set up issue/PR templates
3. Configure notification preferences

## Step 7: Final Verification

### Repository Health Check

- [ ] All templates applied correctly
- [ ] Labels and milestones configured
- [ ] Branch protection enabled
- [ ] Integration configurations active
- [ ] Documentation complete and accurate
- [ ] Team access properly configured

### First Commit

```bash
git add .
git commit -m "🎯 Initial repository setup with space-themed standards

- Apply GitOps templates and boilerplate
- Configure GitHub settings and integrations
- Establish documentation structure
- Enable automated workflows

🚀 Ready for mission launch!"

git push origin main
```

## Common Issues and Solutions

### Template Conflicts

If existing files conflict with templates:

1. Back up existing content
2. Apply template
3. Merge custom content back in
4. Test all integrations

### Permission Issues

Ensure you have admin access to:

- Configure branch protection
- Manage repository settings
- Add/remove collaborators
- Modify GitHub Actions

### Integration Failures

Common integration setup issues:

- Renovate: Check renovate.json syntax
- Actions: Verify workflow permissions
- Labels: Ensure no naming conflicts

## Next Steps

After repository setup:

1. Review [project management guide](project-management.md)
2. Set up [GitHub integrations](github-integrations.md)
3. Establish [commit conventions](commit-conventions.md)
4. Plan [repository maintenance](repository-maintenance.md)

---

**Mission Control Reference**: See `mission-control/` directory for all templates, boilerplate, and standards referenced in this guide.
