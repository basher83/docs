# 🛠️ Mise Development Environment Management

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=flight-manuals/development-environment/mise-setup.md&display_timestamp=committer)

Complete guide for using [mise](https://mise.jdx.dev/) to manage development tools, dependencies,
and task automation in this repository.

## Overview

Mise (pronounced "meez") is a polyglot tool version manager and task runner that replaces multiple
tools like nvm, pyenv, and Make. It ensures consistent development environments across all
contributors.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Tool Management](#tool-management)
- [Task Automation](#task-automation)
- [MCP Configuration](#mcp-configuration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Installation

### macOS

```bash
brew install mise
```

### Linux/WSL

```bash
curl https://mise.run | sh
echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc
```

### Verify Installation

```bash
mise --version
mise doctor
```

## Configuration

### Repository Setup

This repository uses `.mise.toml` for configuration. When cloning:

```bash
# Trust the repository configuration
mise trust --yes

# Install all required tools
mise install --yes

# Verify setup
mise run setup:verify
```

### Shell Integration

For automatic tool activation:

```bash
# For zsh (add to ~/.zshrc)
eval "$(mise activate zsh)"

# For bash (add to ~/.bashrc)
eval "$(mise activate bash)"
```

## Tool Management

### Currently Managed Tools

| Tool                       | Version | Purpose                             |
| -------------------------- | ------- | ----------------------------------- |
| `core:node`                | 20.19.4 | JavaScript runtime for npm packages |
| `core:python`              | 3.12.11 | Pre-commit hooks, detect-secrets    |
| `aqua:koalaman/shellcheck` | 0.11.0  | Shell script linting                |
| `aqua:gitleaks/gitleaks`   | 8.28.0  | Secret detection                    |
| `fd`                       | latest  | Fast file finder                    |
| `rg` (ripgrep)             | latest  | Fast code/document search           |
| `eza`                      | latest  | Enhanced ls alternative             |
| `jq`                       | latest  | JSON processor                      |
| `act`                      | 0.2.80  | Run GitHub Actions locally          |

### NPM Tools (via mise)

- `prettier` - Markdown formatting
- `markdownlint-cli2` - Markdown linting
- `markdown-link-check` - Link validation

### Adding New Tools

```bash
# Add to .mise.toml
mise use node@20       # Specific version
mise use python@latest # Latest version
mise use -g rust       # Global installation
```

## Task Automation

### Available Tasks

#### Core Tasks

| Command          | Aliases                   | Description            |
| ---------------- | ------------------------- | ---------------------- |
| `mise run check` | `q`, `p`, `pre-commit`    | Run all quality checks |
| `mise run fmt`   | `f`, `format`, `prettier` | Format Markdown files  |
| `mise run lint`  | `l`                       | Run all linters        |
| `mise run test`  | `t`                       | Run all tests          |
| `mise run clean` | `c`                       | Clean temporary files  |

#### Setup Tasks

| Command                      | Description                |
| ---------------------------- | -------------------------- |
| `mise run setup`             | Complete project setup     |
| `mise run setup:npm`         | Install Node dependencies  |
| `mise run setup:pre-commit`  | Setup pre-commit hooks     |
| `mise run setup:act-symlink` | Configure act for VS Code  |
| `mise run setup:mcp`         | Generate MCP configuration |
| `mise run setup:verify`      | Verify all tools installed |

#### Documentation Tasks

| Command                | Aliases        | Description            |
| ---------------------- | -------------- | ---------------------- |
| `mise run docs:trees`  | `update-trees` | Update directory trees |
| `mise run docs:serve`  |                | Serve docs locally     |
| `mise run docs:search` |                | Interactive search     |

#### Utility Tasks

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `mise run metrics`   | Generate quality metrics     |
| `mise run watch`     | Watch files and run checks   |
| `mise run find`      | Interactive file finder      |
| `mise run mcp`       | MCP configuration management |
| `mise run mcp:clean` | Remove MCP configuration     |

### Creating Custom Tasks

Add to `.mise.toml`:

```toml
[tasks.mytask]
description = "Description of my task"
run = "echo 'Running my task'"
sources = ["src/**/*.js"]  # File dependencies
outputs = ["dist/"]        # Generated files
depends = ["lint", "test"] # Task dependencies
tools = { node = "20" }    # Required tools
alias = ["mt", "my"]       # Short aliases
```

## MCP Configuration

### Overview

This repository includes secure MCP (Model Context Protocol) configuration management using
Infisical for secret storage.

### Setup

1. **Install Infisical CLI**:

   ```bash
   # See: https://infisical.com/docs/cli/overview
   ```

2. **Authenticate**:

   ```bash
   infisical login
   ```

3. **Generate MCP Configuration**:

   ```bash
   mise run setup:mcp
   ```

### Configuration Files

- `mcp.json.template` - Template with placeholders
- `.mcp.json` - Generated config (gitignored)
- `.infisical.json` - Infisical workspace config

### Managing Secrets

```bash
# Interactive MCP management
mise run mcp

# Force regenerate configuration
./scripts/generate-mcp-config.sh --force

# Clean up configuration
mise run mcp:clean
```

## Best Practices

### 1. Always Use mise for Tools

Instead of installing tools globally:

```bash
# ❌ Don't do this
npm install -g prettier

# ✅ Do this
mise use npm:prettier@latest
```

### 2. Pin Critical Tool Versions

```toml
# Pin for reproducibility
"core:node" = "20.19.4"
"core:python" = "3.12.11"

# Latest for non-critical tools
fd = "latest"
rg = "latest"
```

### 3. Use Task Dependencies

```toml
[tasks.deploy]
depends = ["test", "lint", "build"]
run = "npm run deploy"
```

### 4. Leverage File Watching

```toml
[tasks.dev]
sources = ["src/**/*.ts"]
outputs = ["dist/**/*.js"]
run = "npm run build"
```

### 5. Document Tool Requirements

Always specify required tools in tasks:

```toml
[tasks.analyze]
tools = { "jq" = "latest", "fd" = "latest" }
run = "fd -e json | xargs jq '.'"
```

## Environment Variables

Mise can manage environment variables:

```toml
[env]
SCRIPTS_DIR = "./scripts"
NODE_ENV = "development"
```

For secrets, use Infisical integration instead of hardcoding.

## CI/CD Integration

### GitHub Actions

```yaml
# IMPORTANT: Workaround for mise-action with core plugins
# The directories must be created before mise-action runs
- name: Pre-create mise directories
  run: |
    mkdir -p $HOME/.local/share/mise/installs/python
    mkdir -p $HOME/.local/share/mise/installs/node

- name: Setup mise
  uses: jdx/mise-action@v2
  with:
    version: latest
    install: true
    cache: true

- name: Run checks
  run: mise run ci
```

**Note**: The directory pre-creation step is a workaround for an issue where mise-action fails to
create symlinks for core plugins (node and python). This affects both GitHub Actions and act (local
testing).

### Local CI Testing

```bash
# Test GitHub Actions locally
mise run act
```

## Troubleshooting

### Common Issues

1. **Missing tools after update**:

   ```bash
   mise install --yes
   mise doctor
   ```

2. **Permission errors**:

   ```bash
   mise trust --yes
   ```

3. **Tool version conflicts**:

   ```bash
   mise ls        # List installed versions
   mise prune     # Remove unused versions
   ```

4. **Task not found**:

   ```bash
   mise tasks     # List all available tasks
   mise task info <task>  # Get task details
   ```

5. **GitHub Actions / act: `.mise.backend` symlink error**:

   Error:
   `failed write: ~/.local/share/mise/installs/node/.mise.backend - No such file or directory`

   Solution: Pre-create the directories before running mise-action:

   ```yaml
   - name: Pre-create mise directories
     run: |
       mkdir -p $HOME/.local/share/mise/installs/python
       mkdir -p $HOME/.local/share/mise/installs/node
   ```

   This issue occurs when mise-action tries to create symlinks for core plugins (node, python) but
   the parent directories don't exist in the container environment.

### Debug Mode

```bash
# Verbose output
mise --verbose run test

# Debug environment
MISE_DEBUG=1 mise run check
```

## Migration from Other Tools

### From nvm/pyenv

```bash
# Export current versions
node --version > .node-version
python --version > .python-version

# Import to mise
mise use node@$(cat .node-version)
mise use python@$(cat .python-version)
```

### From Make

Convert Makefile targets to mise tasks:

```makefile
# Makefile
test:
    npm test

lint:
    eslint src/
```

```toml
# .mise.toml
[tasks.test]
run = "npm test"

[tasks.lint]
run = "eslint src/"
```

## Advanced Features

### Parallel Task Execution

```toml
[tasks.check-all]
wait_for = ["lint", "test", "format:check"]
```

### Conditional Tasks

```bash
[tasks.deploy]
run = '''
if [ "$MISE_ENV" = "production" ]; then
  npm run deploy:prod
else
  npm run deploy:dev
fi
'''
```

### Task Hooks

```toml
[hooks]
enter = "echo 'Welcome to the docs repository!'"
leave = "echo 'Goodbye!'"
```

## References

- [Mise Documentation](https://mise.jdx.dev/)
- [Mise GitHub](https://github.com/jdx/mise)
- [Task Configuration](https://mise.jdx.dev/tasks/)
- [Tool Management](https://mise.jdx.dev/getting-started.html)

---

For repository-specific mise configuration details, see `.mise.toml` in the repository root.
