# 🚀 Contributing to the Documentation Hub

Welcome, fellow space explorer! We're thrilled that you want to contribute to our documentation
mission. This guide will help you navigate the contribution process and ensure your efforts align
with our mission objectives.

## 🎯 Mission Values

Our space-themed documentation project operates under these core principles:

- **🌟 Excellence in Documentation** - Clear, accurate, and actionable documentation
- **🤝 Collaborative Spirit** - Open communication and mutual respect
- **📚 Knowledge Sharing** - Making information discoverable and maintainable
- **🚀 Continuous Improvement** - Always evolving and growing
- **🛸 Space Theme Consistency** - Maintaining our unique organizational metaphor

## 🛰️ Getting Started

### 1. Mission Briefing

Before contributing, familiarize yourself with:

- [Repository structure and philosophy](mission-control/information-architecture.md)
- [Space-themed naming conventions](mission-control/repo-naming-conventions.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Commit conventions](flight-manuals/gitops/commit-conventions.md)

### 2. Setting Up Your Mission Control

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs

# Add upstream remote
git remote add upstream https://github.com/basher83/docs.git

# Install any necessary tools
# This repository primarily uses markdown and GitHub Actions
```

### 3. Understanding the Directory Structure

Our repository follows a strict five-directory space exploration philosophy:

- **`mission-control/`** - Standards, conventions, templates, and governance
- **`flight-manuals/`** - Step-by-step procedures, how-to guides, troubleshooting
- **`star-charts/`** - Architecture diagrams, network topology, service maps
- **`maintenance-logs/`** - Historical records, learning paths, decision journals
- **`space-dictionary/`** - Glossaries, acronyms, quick references

## 🚀 Contribution Workflow

### Step 1: Mission Planning

1. **Find or create an issue** describing what you want to work on
2. **Comment on the issue** to let others know you're working on it
3. **Get confirmation** from maintainers for larger changes

### Step 2: Development Phase

1. **Create a feature branch** from the main branch:

   ```bash
   git checkout -b docs/topic-name
   ```

2. **Follow our documentation standards:**
   - Use kebab-case for all files: `my-file-name.md`
   - Use descriptive, action-oriented names
   - Include creation/update dates in document headers
   - One concept per file
   - Clear hierarchy with subdirectories when needed
   - Cross-references to related content

3. **Use consistent formatting:**

   ```markdown
   # 📐 Document Title

   ![Last Updated](https://img.shields.io/badge/Last%20Updated-YYYY--MM--DD-success)
   ```

4. **Commit your changes** using our
   [commit conventions](flight-manuals/gitops/commit-conventions.md):

   ```bash
   git commit -m "docs: add proxmox cluster setup guide

   Add comprehensive guide for setting up Proxmox clusters
   including network configuration and storage setup.

   Closes: #123"
   ```

### Step 3: Mission Review

1. **Verify documentation quality:**
   - Information is actionable and current
   - Content is discoverable through clear navigation
   - Updates are straightforward and obvious
   - Follows the space theme appropriately

2. **Create a pull request** using our PR template
3. **Respond to feedback** promptly and professionally

## 📋 Contribution Types

### 📚 Documentation Updates

- Check for typos and grammar
- Ensure accuracy of technical information
- Add examples where helpful
- Follow our documentation standards
- Test any code examples provided
- Maintain space theme consistency

### 🎨 Diagrams and Visual Content

- Follow existing design patterns
- Ensure accessibility compliance
- Include source files for editable diagrams
- Use consistent color schemes and styles
- Place in appropriate `star-charts/` subdirectory

### 🔧 Process and Procedure Documentation

- Write clear, step-by-step instructions
- Include prerequisites and requirements
- Add troubleshooting sections
- Place in appropriate `flight-manuals/` subdirectory

### 📖 Reference Materials

- Keep glossaries alphabetical
- Ensure acronyms are clearly defined
- Cross-reference related terms
- Place in `space-dictionary/` directory

### 📝 Standards and Templates

- Make templates copy-paste ready
- Include clear usage instructions
- Ensure prescriptive guidance
- Place in `mission-control/` directory

## 🔍 Review Process

### What We Look For

- **Accuracy** - Is the information correct and current?
- **Clarity** - Is it easy to understand?
- **Organization** - Does it follow our directory structure?
- **Consistency** - Does it match our style and theme?
- **Completeness** - Are all necessary details included?
- **Discoverability** - Can users easily find this information?

### Review Timeline

- **Initial response:** Within 2 business days
- **Full review:** Within 1 week for standard contributions
- **Complex changes:** May require additional time

## 🛡️ Quality Standards

### Documentation Standards

- **Actionable:** Reader knows exactly what to do next
- **Current:** Information reflects actual state/procedures
- **Discoverable:** Easy to find through clear navigation
- **Maintainable:** Updates are straightforward and obvious

### Markdown Standards

- Use proper heading hierarchy (single H1 per document)
- Include badges for status and updates
- Use code blocks with language specification
- Add alt text for images
- Check links are not broken

### Git Standards

- **Commit Messages:** Follow our commit conventions
- **Branch Names:** Use descriptive names (e.g., `docs/proxmox-setup`, `fix/broken-links`)
- **History:** Keep git history clean
- **Conflicts:** Resolve merge conflicts before requesting review

## 🚨 Reporting Issues

### Documentation Issues

Use our issue templates:

- Clear, descriptive title
- Link to the affected documentation
- Description of the problem
- Suggested improvement (if applicable)

### Broken Links or References

- Identify the broken link location
- Suggest correct link if known
- Note if content has moved or been removed

## 🤝 Community Guidelines

### Communication

- **Be respectful** and inclusive in all interactions
- **Ask questions** if something is unclear
- **Provide constructive feedback** during reviews
- **Maintain the space theme** appropriately

### Getting Help

- **GitHub Discussions** - General questions and community chat
- **Issue Comments** - Specific questions about issues
- **Documentation** - Check our comprehensive guides first

## 📊 Contribution Recognition

We recognize contributors through:

- Commit history and GitHub contributions graph
- Acknowledgment in release notes for significant contributions
- Maintaining contributor list in repository

## 🚀 Advanced Contributions

### Major Documentation Restructuring

For significant organizational changes:

1. Create an RFC (Request for Comments) issue
2. Provide detailed rationale and impact analysis
3. Gather community feedback
4. Create implementation plan
5. Coordinate with maintainers throughout

### Automation and Tooling

- Improvements to GitHub Actions workflows
- Documentation generation scripts
- Quality checking tools
- Always test thoroughly before submitting

## 📚 Resources

### Key Documentation

- [Information Architecture](mission-control/information-architecture.md)
- [Organization Rules](.cursor/rules/docs-organization.mdc)
- [Naming Conventions](mission-control/repo-naming-conventions.md)

### Tools and References

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)
- [Mermaid Diagrams](https://mermaid-js.github.io/mermaid/)

### Community

- [GitHub Discussions](https://github.com/basher83/docs/discussions)
- [Issues](https://github.com/basher83/docs/issues)

## 🎉 Thank You

Your contributions make this documentation hub better for everyone. Whether you're fixing a typo,
adding a new guide, or improving organization, every contribution matters to our mission success.

**Welcome to the crew, space explorer!** 🚀

---

_For questions about this guide, please open an issue or start a discussion. We're here to help you
succeed in your contribution mission!_
