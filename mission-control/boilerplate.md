# 📋 Boilerplate Templates & Standard Files

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=mission-control/boilerplate.md&display_timestamp=committer)

## Overview

This document provides an index to standard boilerplate templates used across all projects. These
templates ensure consistency, save time, and maintain best practices across the entire repository
ecosystem.

## 📁 Available Templates

### [Gitignore Templates](./boilerplate/gitignore-templates/)

Pre-configured `.gitignore` files for different technology stacks:

| Template                                                                     | Use Case                      | Key Exclusions                            |
| ---------------------------------------------------------------------------- | ----------------------------- | ----------------------------------------- |
| [docker.gitignore](./boilerplate/gitignore-templates/docker.gitignore)       | Docker/containerized projects | Build contexts, secrets, temp files       |
| [nodejs.gitignore](./boilerplate/gitignore-templates/nodejs.gitignore)       | Node.js/npm projects          | node_modules, logs, env files             |
| [python.gitignore](./boilerplate/gitignore-templates/python.gitignore)       | Python projects               | **pycache**, venv, .pyc files             |
| [terraform.gitignore](./boilerplate/gitignore-templates/terraform.gitignore) | Infrastructure as Code        | .terraform, state files, override configs |

### [License Templates](./boilerplate/license-templates/)

Standard open source licenses ready to use:

| License    | File                                                                     | Use Case                               |
| ---------- | ------------------------------------------------------------------------ | -------------------------------------- |
| MIT        | [MIT.LICENSE](./boilerplate/license-templates/MIT.LICENSE)               | Permissive, simple, widely compatible  |
| Apache 2.0 | [APACHE-2.0.LICENSE](./boilerplate/license-templates/APACHE-2.0.LICENSE) | Patent protection, enterprise-friendly |

### [README Templates](./boilerplate/readme-templates/)

Structured README templates for different project types:

| Template                                                                          | Purpose             | Key Sections                       |
| --------------------------------------------------------------------------------- | ------------------- | ---------------------------------- |
| [project-readme.md](./boilerplate/readme-templates/project-readme.md)             | Software projects   | Setup, usage, API, contributing    |
| [documentation-readme.md](./boilerplate/readme-templates/documentation-readme.md) | Documentation repos | Navigation, structure, maintenance |

### [Git Message Template](./boilerplate/gitmessage-template)

Standardized commit message template following conventional commits:

```bash
# Copy to your project:
cp mission-control/boilerplate/gitmessage-template .gitmessage
git config commit.template .gitmessage
```

## 🚀 Quick Start Usage

### For New Projects

1. **Choose appropriate templates**:

   ```bash
   # Example for a Node.js project
   cp mission-control/boilerplate/gitignore-templates/nodejs.gitignore .gitignore
   cp mission-control/boilerplate/license-templates/MIT.LICENSE LICENSE
   cp mission-control/boilerplate/readme-templates/project-readme.md README.md
   ```

2. **Configure git message template**:

   ```bash
   cp mission-control/boilerplate/gitmessage-template .gitmessage
   git config commit.template .gitmessage
   ```

3. **Customize for your project**:
   - Update README with project-specific information
   - Add technology-specific gitignore rules
   - Update LICENSE copyright year and holder

### For Existing Projects

1. **Merge gitignore rules**:

   ```bash
   cat mission-control/boilerplate/gitignore-templates/[template].gitignore >> .gitignore
   ```

2. **Review and adopt conventions**:
   - Compare existing files with templates
   - Gradually align with standards

## 📝 Template Guidelines

### When to Use

- **Always** use templates for new projects
- **Reference** templates when updating existing projects
- **Contribute** improvements back to templates

### Customization Rules

1. **Preserve Structure** - Keep section headers and organization
2. **Add, Don't Remove** - Extend templates rather than removing sections
3. **Document Changes** - Note why customizations were needed

## 🔄 Maintenance

### Adding New Templates

1. Create template file in appropriate subdirectory
2. Update this index with description and use case
3. Test template in a real project
4. Submit with examples of usage

### Updating Existing Templates

1. Review impact across existing projects
2. Update template with backward compatibility in mind
3. Document changes in commit message
4. Consider versioning for breaking changes

## 🔗 Related Documentation

- [GitHub Templates](./github-templates.md) - Issue and PR templates
- [Project Templates](./project-templates/) - Complete project scaffolds
- [Coding Standards](./coding-standards.md) - Language-specific conventions
- [Repository Setup Guide](../flight-manuals/gitops/repo-setup-guide.md) - Complete setup procedures

## 📊 Template Coverage

Current template coverage by technology:

- ✅ Docker
- ✅ Node.js
- ✅ Python
- ✅ Terraform
- 🔄 Go (planned)
- 🔄 Rust (planned)
- 🔄 Java (planned)

## 💡 Best Practices

1. **Start with Templates** - Don't create from scratch
2. **Stay Consistent** - Use the same templates across related projects
3. **Version Control** - Track template versions used in projects
4. **Contribute Back** - Share improvements to benefit all projects
5. **Document Deviations** - Explain why you diverged from templates

---

_Templates are living documents. Contribute improvements to help the entire ecosystem._
