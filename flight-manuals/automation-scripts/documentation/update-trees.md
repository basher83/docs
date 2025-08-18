# 🛠️ Documentation Scripts

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=flight-manuals%2Fautomation-scripts%2Fdocumentation%2Fupdate-trees.md)

This directory contains scripts and configurations for maintaining and automating documentation
tasks.

## 📄 Tree Generation with Markdown Magic

**Purpose**: Automatically generates and updates directory tree structures in documentation files
using `markdown-magic`.

**Usage**:

```bash
# Run via mise task
mise run docs:trees

# Or directly with markdown-magic
md-magic README.md mission-control/core-github-repos.md --config ./markdown.config.js
```

**Features**:

- Uses `fileTree` transform from markdown-magic for reliable tree generation
- Configurable depth, file inclusion, and exclusion patterns
- Maintains consistent formatting across all documentation
- Integrates with GitHub Actions for automatic updates
- Falls back to `tree-node-cli` when system `tree` is unavailable

**Currently Updates**:

- `mission-control/core-github-repos.md` - Repository overview trees
- `README.md` - Main documentation structure

**Configuration**:

The tree generation is configured in `markdown.config.js` with the following options:

- `src` - Source directory to scan
- `maxDepth` - Maximum depth to traverse (default: 3)
- `includeFiles` - Whether to include files or just directories
- `exclude` - Patterns to exclude from the tree

**Example Tree Markers**:

```markdown
<!-- doc-gen fileTree src="." maxDepth=3 includeFiles=false -->
<!-- end-doc-gen -->
```

## 🔧 Adding New Files

To add automatic tree updates to a new documentation file:

1. Add markdown-magic markers to your file:

   ```markdown
   <!-- doc-gen fileTree src="./path/to/scan" maxDepth=2 -->
   <!-- end-doc-gen -->
   ```

2. Add the file to the mise task in `.mise.toml`:

   ```toml
   [tasks."docs:trees"]
   run = "md-magic README.md mission-control/core-github-repos.md your-file.md --config ./markdown.config.js"
   ```

## 🤖 Automation

This functionality is integrated with GitHub Actions (`.github/workflows/update-doc-trees.yml`) for
automatic updates when files change.

## Migration from Bash Script

Previously, tree generation used a custom bash script (`update-trees.sh`). The migration to
markdown-magic provides:

- Better cross-platform compatibility
- More reliable tree generation
- Easier configuration and maintenance
- Integration with the broader markdown toolchain
