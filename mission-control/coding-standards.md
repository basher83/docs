# Python Coding Standards

This document defines the coding standards for all my personal Python projects. Adhering to these
standards ensures code quality, security, and maintainability.

> CI Pipelines: Docs Quality (format + lint + action pin verification) • Autofix CI (bot fixes) •
> Update Doc Trees (structure sync)

# [TODO] this doc is python-specific, but should be generic. Specific standards should be in `mission-control/project-templates`

---

## 1. Core Environment & Dependency Management

- **Tool:** [uv](https://github.com/astral-sh/uv)
  - Use uv for creating/managing virtual environments and installing dependencies.
  - All dependencies must be listed in pyproject.toml (and requirements.txt if used).

## 2. Linters & Formatters

- **Linter & Formatter:** [ruff](https://docs.astral.sh/ruff/)
  - Run ruff check . to lint code and ruff check . --fix to auto-fix issues.
- **Static Typing:** [mypy](http://mypy-lang.org/)
  - All new code must be type-annotated and pass mypy .
- **Type Hints Helper:** [Ty](https://ty.solutions/)
  - Use ty to auto-generate or validate type hints as a supplement to mypy.

### Markdown Formatting Standard

For Markdown files the canonical formatting pipeline is:

1. **Prettier** (structural + wrapping) – deterministic reflow & list normalization.
2. **markdownlint** (semantic / style rules only) – headings, spacing, allowed HTML.

Configuration:

- Prettier config: `.prettierrc.json` (printWidth 100, proseWrap always)
- Ignore file: `.prettierignore` (binaries / generated assets)
- markdownlint config: `.markdownlint.json` (conflicting rules with Prettier disabled: MD007, MD012,
  MD013, MD029, MD030)

CI / Automation Order:

1. Prettier (write or check)
2. markdownlint (check & optional --fix)
3. autofix.ci may re-run these on PRs for contributors without local tooling.

Pre-commit hooks run Prettier before markdownlint to minimize diffs. Never run two full-formatters
(e.g. Prettier + mdformat) concurrently.

### Automated Formatting (autofix.ci)

Use [autofix.ci](https://autofix.ci) to automatically apply formatting / lint auto-fixes that _can
be resolved deterministically by tools_ after a PR is opened. This keeps contributor PRs clean and
reduces back‑and‑forth on style.

**Scope / What It Does**

- Runs configured formatters / linters (e.g. ruff --fix, markdownlint --fix, prettier) in a bot
  commit pushed onto the contributor's PR branch.
- Only touches files changed in the PR.
- Adds a bot commit like: `autofix: apply formatting (ruff, markdownlint)`.

**When To Rely On It vs Local Hooks**

| Situation                                     | Prefer Pre-commit | Prefer autofix.ci |
| --------------------------------------------- | ----------------- | ----------------- |
| Regular local development                     | ✅                |                   |
| One-off web UI edits                          |                   | ✅                |
| External contributors unfamiliar with tooling |                   | ✅                |
| Fast feedback before push                     | ✅                |                   |

Always keep local pre-commit hooks installed for fastest feedback; autofix.ci is a safety net &
convenience layer.

**PR Flow**

1. Author opens PR.
2. CI runs lint / type / security checks.
3. autofix.ci runs fixers and pushes a commit if changes are produced.
4. CI re-runs; PR must be green before merge.

**Adoption Guidelines**

- Do not disable failing formatters locally expecting the bot to fix fundamental issues (e.g. type
  errors will not be auto-fixed).
- Avoid manual edits to the bot commit unless resolving a merge conflict—then squash on merge.
- Keep deterministic tool versions pinned (e.g. ruff version) to avoid drifting output between local
  and bot runs.

**Security / Governance**

- The autofix bot requires write permission to PR branches; ensure branch protection allows bot
  commits (treat as trusted automation like Renovate).
- Review the first few bot commits when enabling to confirm it only formats.
- If the bot gets into a reformat loop, lock the PR, adjust configs (.ruff.toml, markdownlint), then
  re-run.

**Configuration Locations**

- Python formatting / lint: ruff settings (e.g. pyproject.toml / ruff.toml)
- Markdown: .markdownlint.json
- Generic tooling: pre-commit config reused within autofix workflow (if using a custom action)

> Principle: _All style is automated; humans focus on correctness & design._

## 3. Security & Code Quality

- **Bandit:** bandit -r . for security linting.
- **Semgrep:** semgrep --config=auto for security and code quality checks.
- **Safety:** safety check to scan for vulnerable dependencies.

## 4. Pre-commit Hooks

- Use [pre-commit](https://pre-commit.com/) to automate checks before each commit.
- Required hooks: ruff, mypy, bandit, semgrep, safety

**Example .pre-commit-config.yaml:**

```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: "v0.4.4"
    hooks:
      - id: ruff
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.9.0
    hooks:
      - id: mypy
  - repo: https://github.com/pre-commit/mirrors-bandit
    rev: v1.7.6
    hooks:
      - id: bandit
  - repo: https://github.com/semgrep/semgrep
    rev: v1.35.0
    hooks:
      - id: semgrep
  - repo: https://github.com/pyupio/safety
    rev: "2.3.1"
    hooks:
      - id: safety
```

To install, run:

```bash
pre-commit install
```

## 5. General Guidelines

- All code must pass linting, typing, security, and quality checks before merging.
- Consistent code formatting and type annotations are required.
- Write docstrings for all public modules, classes, and functions.
- Use descriptive commit messages.
- Review and update dependencies regularly.

## 6. Continuous Integration

- All checks must be enforced in CI for pull requests and main branches.

## 7. Comment Tagging Conventions

Use the following tags in code and documentation comments to highlight important items:

- `[TODO]`: Task to be completed
- `[FIXME]`: Needs fixing
- `[NOTE]`: Important information
- `[HACK]`: Temporary workaround
- `[REVIEW]`: Needs review
- `[OPTIMIZE]`: Can be improved
- `[BUG]`: Known issue

These tags should be used in comments and are easily searchable for future maintenance.

## 8. References

- [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/)
- [PEP 484 — Type Hints](https://peps.python.org/pep-0484/)
- [pre-commit](https://pre-commit.com/)
