# 📐 Information Architecture Philosophy

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=mission-control%2Finformation-architecture.md&display_timestamp=committer)

## 🎯 Core Philosophy

This document defines the organizational philosophy for the entire `basher83/docs` ecosystem. Every
directory, file, and structural decision should align with these principles.

---

## 🌌 The Space-Themed Foundation

All organization follows space exploration metaphors:

- **Mission Control** = Command center for standards and control
- **Flight Manuals** = Operational procedures and guides
- **Star Charts** = Maps and diagrams of systems
- **Maintenance Logs** = Historical records and learning
- **Space Dictionary** = Reference materials and definitions

---

## 📂 Directory Philosophy Framework

### 🎛️ Mission Control (`mission-control/`)

**Philosophy**: _"What are the rules of engagement?"_

- **Purpose**: Central command for standards, templates, and governance
- **Contains**: Standards, conventions, boilerplate, templates, rules
- **Nature**: Prescriptive, authoritative, copy-paste ready
- **Audience**: Future self and collaborators setting up new projects
- **Update Frequency**: Stable, changes when standards evolve

**Think**: The flight director's handbook - these are the non-negotiable standards that ensure
mission success.

### 📖 Flight Manuals (`flight-manuals/`)

**Philosophy**: _"How do I operate this system?"_

- **Purpose**: Step-by-step procedures and operational guides
- **Contains**: How-to guides, procedures, troubleshooting, workflows
- **Nature**: Instructional, procedural, educational
- **Audience**: Someone actively working on a task
- **Update Frequency**: Regular updates as procedures improve

**Think**: The pilot's manual - practical instructions for getting things done safely and
effectively.

### 🗺️ Star Charts (`star-charts/`)

**Philosophy**: _"Where are we and how does everything connect?"_

- **Purpose**: Visual maps and architectural understanding
- **Contains**: Network diagrams, service maps, topology, relationships
- **Nature**: Visual, spatial, interconnected
- **Audience**: Anyone needing to understand system architecture
- **Update Frequency**: Updated when infrastructure changes

**Think**: Navigation charts - showing the terrain, routes, and how systems interconnect.

### 📝 Maintenance Logs (`maintenance-logs/`)

**Philosophy**: _"What happened and what did we learn?"_

- **Purpose**: Historical records, learning paths, decision journals
- **Contains**: Project logs, learning notes, decisions made, retrospectives
- **Nature**: Chronological, reflective, evolutionary
- **Audience**: Future self reviewing past decisions and learning
- **Update Frequency**: Ongoing, as events occur and learning happens

**Think**: Ship's log - the ongoing record of the journey, decisions made, and lessons learned.

### 🔤 Space Dictionary (`space-dictionary/`)

**Philosophy**: _"What does this mean and where can I find it quickly?"_

- **Purpose**: Quick reference and terminology lookup
- **Contains**: Glossaries, acronyms, quick references, cheat sheets
- **Nature**: Alphabetical, searchable, bite-sized
- **Audience**: Anyone needing quick clarification or reference
- **Update Frequency**: Incremental additions as new terms emerge

**Think**: Reference manual - the quick lookup for when you need a definition or reminder.

---

## 🔗 Cross-Repository Relationships

### The Documentation Hub Pattern

```plaintext
basher83/docs/           # Knowledge hub - procedures and standards
basher83/automation-scripts/  # Implementation - actual scripts
basher83/.github/      # Implementation - actual workflows
basher83/assets/             # Resources - visual assets
```

**Philosophy**: _Separate knowledge from implementation while maintaining discoverability_

- **Documentation** references implementation repositories
- **Implementation** repositories focus on code/functionality
- **Knowledge hub** remains clean and navigable
- **Assets** support all repositories from central location

---

## 📏 File Naming and Organization Principles

### Consistent Naming Convention

- Use kebab-case for files: `my-file-name.md`
- Use descriptive, action-oriented names: `setup-proxmox-cluster.md` not `proxmox.md`
- README.md files provide directory overviews and navigation

### Content Organization

- **One concept per file** - don't mix procedural and reference content
- **Clear hierarchy** - use subdirectories when categories emerge
- **Cross-references** - link related content across directories
- **Templates** - provide starting points for common document types

---

## 🎖️ Quality Standards

### Documentation Must Be

- **Actionable**: Reader should know exactly what to do next
- **Current**: Information should reflect actual state/procedures
- **Discoverable**: Easy to find through clear navigation and search
- **Maintainable**: Updates should be straightforward and obvious

### Content Guidelines

- Include creation/update dates
- Provide context and prerequisites
- Use consistent formatting and structure
- Include examples and code blocks where helpful
- Cross-reference related documentation

---

## 🔄 Evolution and Maintenance

### When to Create New Directories

Only when content clearly doesn't fit existing philosophy:

1. Content serves a fundamentally different purpose
2. Different audience or use case
3. Different update frequency or lifecycle
4. Different organizational needs

### When to Restructure

- Philosophy becomes unclear or contradictory
- Users consistently can't find what they need
- Maintenance becomes difficult or error-prone
- Growth outpaces current organization

---

## 📋 Implementation Checklist

When adding new content, ask:

- [ ] Which directory philosophy does this align with?
- [ ] Is this knowledge (docs) or implementation (separate repo)?
- [ ] Does this follow naming conventions?
- [ ] Are cross-references clear and helpful?
- [ ] Will someone else understand this in 6 months?

---

## 🌟 The North Star

**"A well-organized documentation system should feel like having an experienced colleague available
24/7 - someone who knows exactly where to find the right information and can explain it clearly."**

This philosophy ensures that every organizational decision supports this goal.
