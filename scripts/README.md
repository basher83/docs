# 🛠️ Documentation Scripts

![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--06--08-success)

This directory contains scripts for maintaining and automating documentation tasks.

## 📄 Available Scripts

### update-trees.sh

**Purpose**: Automatically updates directory tree structures in documentation files.

**Usage**:
```bash
./scripts/update-trees.sh
```

**Features**:
- Scans for tree markers (`<!-- TREE-START -->` and `<!-- TREE-END -->`) in documentation files
- Generates fresh directory trees using the `tree` command
- Updates content between markers while preserving surrounding content
- Supports multiple marker types (e.g., `DOCS-TREE-START/END`)
- Provides colored output for better readability

**Currently Updates**:
- `mission-control/core-github-repos.md` - Repository overview trees
- `README.md` - Main documentation structure

**Requirements**:
- `tree` command must be installed
  - Ubuntu/Debian: `sudo apt-get install tree`
  - MacOS: `brew install tree`

**How It Works**:
1. Checks for the `tree` command availability
2. Looks for files with tree markers
3. Generates new tree output with specified filters
4. Replaces content between markers
5. Preserves all other file content

**Example Tree Markers**:
```markdown
<!-- TREE-START -->
```plaintext
[Tree content will be auto-generated here]
```
<!-- TREE-END -->
```

## 🔧 Adding New Files

To add automatic tree updates to a new documentation file:

1. Add tree markers to your file where you want the tree to appear
2. Edit `update-trees.sh` to include your file:
   ```bash
   update_tree_in_file "path/to/your/file.md" "directory/to/scan" "tree-flags"
   ```

## 🤖 Automation

This script is also integrated with GitHub Actions (`.github/workflows/update-doc-trees.yml`) for automatic updates when files change.