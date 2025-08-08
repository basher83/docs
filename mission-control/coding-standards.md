
# Python Coding Standards

This document defines the coding standards for all my personal Python projects. Adhering to these standards ensures code quality, security, and maintainability.

# [OPTIMIZE] this doc is python-specific, but should be genaric. Specific standards should be in `mission-control/project-templates`

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
