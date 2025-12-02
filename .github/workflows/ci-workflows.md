# CI Workflows Overview

This document explains the CI workflows used in the `basher83/docs` repository:

- What each workflow does
- When it runs
- Whether it modifies files or is read-only
- How it connects to local `mise` tasks

Current workflows:

- [`autofix-ci.yml`](../../.github/workflows/autofix-ci.yml)
- [`docs-quality.yml`](../../.github/workflows/docs-quality.yml)
- [`update-doc-trees.yml`](../../.github/workflows/update-doc-trees.yml)

---

## Core Concepts

### mise as the single source of truth

All formatting, linting, and doc maintenance commands are defined in `.mise.toml` and run via:

```bash
mise run <task>
```

The workflows simply:

1. Checkout the repo.
2. Setup `mise`.
3. Run the appropriate `mise` task(s).

This keeps **local dev** and **CI behavior** aligned.

Key tasks used by CI:

- `fmt` – Format Markdown with Prettier.
- `fmt:check` – Check Markdown formatting (no changes).
- `lint:md` – Lint Markdown with `markdownlint-cli2`.
- `docs:trees` – Update directory trees using markdown-magic.

See [`.mise.toml`](../../.mise.toml) for full details.

---

## Workflow: `Docs Quality`

**File:** [`.github/workflows/docs-quality.yml`](../../.github/workflows/docs-quality.yml)  
**Purpose:** Read-only quality gate for Markdown and action pinning.

### Triggers

```yaml
on:
  workflow_dispatch:
  pull_request:
    branches: [main]
    paths:
      - "**/*.md"
      - ".markdownlint.json"
      - ".prettierrc.json"
      - ".prettierignore"
      - ".mise.toml"
      - ".github/workflows/docs-quality.yml"
  push:
    branches: [main]
    paths:
      - "**/*.md"
      - ".markdownlint.json"
      - ".prettierrc.json"
      - ".prettierignore"
      - ".mise.toml"
      - ".github/workflows/docs-quality.yml"
```

Runs on:

- Manual trigger (`workflow_dispatch`)
- PRs targeting `main` that touch Markdown / config
- Pushes to `main` that touch Markdown / config

### Jobs

#### 1. `markdown-quality`

- **Permissions:** `contents: read`
- **Does:**
  - Checkout repo
  - Setup `mise`
  - Run:

    ```bash
    mise run fmt:check
    mise run lint:md
    ```

- **Behavior:**
  - Fails if Markdown is not formatted (Prettier) or fails lint (markdownlint).
  - Does **not** modify files.

#### 2. `security-config`

- **Permissions:** `contents: read`
- **Does:**
  - Checkout repo
  - Verify all Actions in `.github/workflows/` use pinned SHAs:

    ```bash
    if grep -R "uses: .*@v[0-9]" .github/workflows/; then
      exit 1
    fi
    ```

- **Behavior:**
  - Fails if any workflow uses `@vX` instead of a SHA.
  - Read-only.

### Local equivalent commands

To reproduce CI checks locally:

```bash
# Formatting check only
mise run fmt:check

# Markdown lint
mise run lint:md

# Full quality gate (format check + lint + tests)
mise run check
# or shortcut
mise run p
```

---

## Workflow: `autofix.ci`

**File:** [`.github/workflows/autofix-ci.yml`](../../.github/workflows/autofix-ci.yml)  
**Purpose:** Automatically fix style issues (Python + Markdown) and push commits via autofix.ci.

### Triggers

```yaml
on:
  workflow_dispatch:

  push:
    branches-ignore: [main]
    paths:
      - "**/*.md"
      - "**/*.mdx"
      - "**/*.py"
      - "**/*.yml"
      - "**/*.yaml"
      - "**/*.json"
      - "**/*.toml"
      - "pyproject.toml"
      - "ruff.toml"
      - ".markdownlint.json"
      - ".prettierrc.json"
      - ".prettierignore"
      - ".mise.toml"
      - ".github/workflows/autofix-ci.yml"

  pull_request:
    branches: [main]
    paths:
      - "**/*.md"
      - "**/*.mdx"
      - "**/*.py"
      - "**/*.yml"
      - "**/*.yaml"
      - "**/*.json"
      - "**/*.toml"
      - "pyproject.toml"
      - "ruff.toml"
      - ".markdownlint.json"
      - ".prettierrc.json"
      - ".prettierignore"
      - ".mise.toml"
      - ".github/workflows/autofix-ci.yml"

  workflow_call:
```

Runs on:

- Manual trigger (`workflow_dispatch`)
- Pushes to **non-`main`** branches (feature branches)
- PRs targeting `main` that touch relevant files
- Can be reused via `workflow_call` if needed

### Behavior overview

1. Checkout repo.
2. Skip if re-run by automation bots (`autofix-ci[bot]`, `dependabot[bot]`, `renovate[bot]`).
3. Setup `mise`.
4. Setup [`uv`](https://github.com/astral-sh/uv) for Python tools.
5. **Python (optional):**
   - If `pyproject.toml` or `ruff.toml` exists:
     - `ruff check --fix-only .`
     - `ruff format .`
   - Otherwise, skip Ruff.
6. **Markdown autofix:**
   - `mise run fmt` (Prettier write)
   - `markdownlint-cli2` with `--fix` via `mise x`
7. Use `autofix-ci/action` to commit and push fixes back to the branch / PR.

### What it changes

- Python files (if Ruff config present).
- Markdown files:
  - Reformats with Prettier.
  - Applies markdownlint auto-fixes.

This workflow **does modify files** and pushes commits via the autofix.ci bot.

### Local equivalent commands

To simulate what autofix does (Markdown side):

```bash
# Format all Markdown
mise run fmt

# Auto-fix markdownlint issues and reformat
mise run lint:fix
```

For Python:

- Use your local `uv` + Ruff setup (as defined in your Python projects).
- Or run directly with `uv`/`uvx` if installed.

---

## Workflow: `Update Documentation Trees`

**File:** [`.github/workflows/update-doc-trees.yml`](../../.github/workflows/update-doc-trees.yml)  
**Purpose:** Automatically refresh directory trees in docs and open/update a PR.

### Triggers

```yaml
on:
  schedule:
    - cron: "0 6 * * 1" # Every Monday at 06:00 UTC
  workflow_dispatch:
```

Runs:

- On a **weekly schedule**.
- Manually via `workflow_dispatch`.

### Behavior overview

1. Checkout repo (with full history for branching).
2. Setup `mise`.
3. Run:

   ```bash
   mise run docs:trees
   mise run fmt
   ```

   - `docs:trees` runs `markdown-magic` with your custom DIRTREE transform to update directory trees
     in Markdown files.
   - `fmt` formats all Markdown with Prettier.

4. Detect changes:
   - If no changes: exit.
   - If changes:
     - Commit with message `"🤖 Auto-update documentation trees"`.
     - Push to `docs-auto-update` branch (force-update).
     - Create or update a PR from `docs-auto-update` → `main` using
       `peter-evans/create-pull-request`.

### What it changes

- Only Markdown files that contain tree placeholders handled by `markdown-magic`.
- Ensures directory trees stay up to date without manual work.

### Local equivalent commands

To manually update trees and format:

```bash
mise run docs:trees
mise run fmt
```

You can then commit and push manually instead of waiting for the scheduled workflow.

---

## Summary Table

| Workflow                   | File                                     | Triggers                             | Modifies files? | Key tasks / tools                                        |
| -------------------------- | ---------------------------------------- | ------------------------------------ | --------------- | -------------------------------------------------------- |
| Docs Quality               | `.github/workflows/docs-quality.yml`     | PR to `main`, push to `main`, manual | No              | `mise run fmt:check`, `mise run lint:md`                 |
| autofix.ci                 | `.github/workflows/autofix-ci.yml`       | Non-main pushes, PRs, manual         | Yes             | Ruff (optional), `fmt`, markdownlint `--fix`, autofix-ci |
| Update Documentation Trees | `.github/workflows/update-doc-trees.yml` | Weekly schedule, manual              | Yes (via PR)    | `docs:trees`, `fmt`, create-pull-request                 |

---

## How to reason about CI locally

- Before pushing / opening a PR:

  ```bash
  # Full quality check (what Docs Quality enforces, plus more)
  mise run check
  ```

- To pre-apply the kinds of fixes that `autofix.ci` would do:

  ```bash
  mise run lint:fix  # markdownlint auto-fix + format
  mise run fmt       # ensure Prettier formatting
  ```

- To manually run the doc-tree refresh logic:

  ```bash
  mise run docs:trees
  mise run fmt
  ```

By keeping all logic in `.mise.toml` and using these three workflows, CI stays predictable,
maintainable, and closely aligned with your day-to-day development workflow.
