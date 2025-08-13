# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Repository Purpose

This is a personal documentation hub organized with a space-themed metaphor. It serves as a central
knowledge management system containing standards, guides, architecture diagrams, and reference
materials for technical projects.

## Directory Organization

The repository follows a strict five-directory space exploration philosophy:

- **`mission-control/`** - Standards, conventions, templates, and governance (prescriptive,
  copy-paste ready)
- **`flight-manuals/`** - Step-by-step procedures, how-to guides, troubleshooting (instructional)
- **`star-charts/`** - Architecture diagrams, network topology, service maps (visual, spatial)
- **`maintenance-logs/`** - Historical records, learning paths, decision journals (chronological)
- **`space-dictionary/`** - Glossaries, acronyms, quick references (alphabetical, searchable)

## File Organization Rules

### Naming Conventions

- Use kebab-case for all files: `my-file-name.md`
- Use descriptive, action-oriented names: `setup-proxmox-cluster.md` not `proxmox.md`
- Every directory must have a `README.md` providing overview and navigation
- Include creation/update dates in document headers

### Content Guidelines

- **One concept per file** - separate procedural and reference content
- **Clear hierarchy** - use subdirectories when categories emerge
- **Cross-references** - link related content across directories
- Follow markdown standards with badges and consistent formatting

## Automation & Workflows

### GitHub Actions

- `update-timestamp.yml` - Automatically updates "Last Updated" badges in README.md
- `update-doc-trees.yml` - Maintains directory tree structures in documentation

### Dependency Management

- Uses Renovate for automated dependency updates (basic configuration)

## Documentation Standards

Every document must be:

- **Actionable** - Reader knows exactly what to do next
- **Current** - Information reflects actual state/procedures
- **Discoverable** - Easy to find through clear navigation
- **Maintainable** - Updates are straightforward and obvious

### Document Headers

Use this format for consistency:

```markdown
# 📐 Document Title

![Last Updated](https://img.shields.io/badge/Last%20Updated-YYYY--MM--DD-success)
```

## Cross-Repository References

When referencing other repositories in the basher83 ecosystem, use:

```markdown
For more details, see my
[Topic Name](https://github.com/basher83/repo-name/blob/main/path/to/file.md).
```

## Key Architecture Files

- `mission-control/information-architecture.md` - Core organizational philosophy
- `.cursor/rules/docs-organization.mdc` - Detailed organization rules for editors
- `mission-control/repo-naming-conventions.md` - Space-themed naming conventions

## Quality Philosophy

"A well-organized documentation system should feel like having an experienced colleague available
24/7 - someone who knows exactly where to find the right information and can explain it clearly."

All organizational decisions must support this goal of being a living, practical knowledge
management system.
