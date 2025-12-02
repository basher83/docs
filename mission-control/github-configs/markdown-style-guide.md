# Markdown Style Guide

This document describes how Markdown is formatted and linted across the `basher83/docs` repository.

The goal is to have a **simple, predictable** setup driven by:

- **Prettier** – automatic formatting (what files look like)
- **markdownlint-cli2** – structural/style linting (what files contain and how they’re organized)

You should almost never need to think about “style” manually – run the tools and move on.

---

## Tools and Source of Truth

### Formatting: Prettier

- Tool: [`prettier`](https://prettier.io/)
- Config: [`.prettierrc.json`](../../.prettierrc.json)

Key settings:

```json
{
  "printWidth": 100,
  "proseWrap": "always",
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": true
}
```

Prettier is responsible for:

- Line wrapping (at ~100 characters)
- Indentation
- List formatting
- Code block indentation
- General layout/spacing

### Linting: markdownlint-cli2

- Tool: [`markdownlint-cli2`](https://github.com/DavidAnson/markdownlint-cli2)
- Config: [`.markdownlint.json`](../../.markdownlint.json)

Key behaviors:

- Enforces reasonable heading and spacing structure.
- Disables rules that conflict with Prettier (e.g. line length).
- Allows some inline HTML where useful for docs.

---

## How to Run the Tools

Use [`mise`](https://github.com/jdx/mise) tasks as the canonical interface.

### Day-to-day commands

From the repo root:

- **Format all Markdown files** (auto-fix style):

  ```bash
  mise run fmt
  ```

- **Check formatting only** (no changes; for CI / pre-commit):

  ```bash
  mise run fmt:check
  ```

- **Lint Markdown** (structural/style checks):

  ```bash
  mise run lint:md
  ```

- **Auto-fix lint issues and reformat**:

  ```bash
  mise run lint:fix
  ```

- **Full pre-commit / quality pipeline**:

  ```bash
  mise run check
  # or
  mise run p
  ```

`check` runs:

- `fmt:check` (Prettier)
- `lint` (Markdown + shell + secrets)
- `test` (structure + link checks)

---

## Philosophy

### 1. Prettier owns formatting

If it’s about:

- Line length
- Whitespace
- Blank lines
- Indentation
- List marker styles

…then **Prettier is the source of truth**. You do not need to hand-edit to satisfy a style rule.

markdownlint rules that conflict with Prettier are disabled (e.g. `MD013` line length).

### 2. markdownlint owns structure

markdownlint is used for:

- Basic heading rules and spacing
- Spacing around lists and blocks
- Avoiding obviously malformed Markdown

If markdownlint complains, you can:

1. Try `mise run lint:fix` (some rules are auto-fixable).
2. Otherwise, make a small manual change and re-run.

If a rule becomes more annoying than helpful, adjust `.markdownlint.json`.

### 3. Don’t obsess over perfection

This is a **working knowledge base**, not a book publication. The tools are there to:

- Keep diffs clean.
- Make docs readable and consistent.
- Reduce friction when editing frequently.

“Good and consistent” beats “perfect but painful.”

---

## Practical Conventions

These are guidelines that fall naturally out of Prettier + markdownlint, plus a few repo-specific
preferences.

### Headings

- Use **ATX style** headings (`#`, `##`, `###`, …).
- One `#` (H1) per file is ideal, but this repo allows multiple top-level headings when needed.
- Leave a blank line **before and after** headings:

  ```markdown
  # Section Title

  Some text here.
  ```

### Lists

- Let Prettier manage list indentation and numbering.
- You can write:

  ```markdown
  1. First
  1. Second
  1. Third
  ```

  Prettier or renderers will show correct numbering.

- Nested lists: write naturally and rely on formatting tools to normalize.

### Links and images

- Prefer reference-style links for URLs used multiple times; inline links are fine for one-offs:

  ```markdown
  See the [label usage guide].

  [label usage guide]: ./label-usage-guide.md
  ```

- markdownlint rule MD034 (bare URLs) is disabled, so plain URLs are allowed, but links are clearer.

### Code blocks

- Always use fenced code blocks:

  ````markdown
  ```bash
  mise run fmt
  ```
  ````

  ```

  ```

- Include a language when possible (for syntax highlighting).

### Inline HTML

Allowed HTML elements (per `.markdownlint.json`):

- `img`
- `br`
- `details`
- `summary`
- `div`

Use these when Markdown alone isn’t expressive enough (e.g. details/summary toggles). Avoid heavy
HTML layout inside docs.

---

## When Something Fails

### Prettier fails (`fmt:check`)

Typical reasons:

- File not formatted yet.
- Minor spacing/indentation issues.

**Fix:**

```bash
mise run fmt
```

Re-run `mise run fmt:check` or `mise run check` afterwards.

### markdownlint fails (`lint:md`)

Typical reasons:

- Missing blank line before/after a heading.
- Odd spacing around lists or code blocks.
- Unexpected HTML or unusual structure.

**First attempt:**

```bash
mise run lint:fix
mise run fmt
```

If issues remain:

- Open the file at the reported line.
- Fix heading spacing or structure manually.
- Re-run `mise run lint:md`.

If a rule is consistently noisy and not helpful, consider tuning `.markdownlint.json`.

---

## CI / Automation Expectations

- Any CI pipeline using this repo should:
  - Run `mise run fmt:check` (or equivalent Prettier check).
  - Run `mise run lint:md` (or full `mise run check` for comprehensive checks).

- Commits should ideally pass:

  ```bash
  mise run check
  ```

  before opening a PR or pushing.

---

## Extending or Changing the Style

If you want to change Markdown style rules:

1. **Decide whether it’s formatting or structure**:
   - Formatting → Prettier (`.prettierrc.json`).
   - Structure / rules → markdownlint (`.markdownlint.json`).

2. **Change config in a small PR**:
   - Update the config file.
   - Run `mise run fmt` and `mise run lint:md`.
   - Fix any fallout.
   - Update this guide if the change is behavioral (e.g., new heading rules).

3. **Keep it simple**:
   - Don’t add rules just because they exist.
   - Only add rules that catch real issues you care about.

---

## Quick Reference

- **Format Markdown**: `mise run fmt`
- **Check format only**: `mise run fmt:check`
- **Lint Markdown**: `mise run lint:md`
- **Auto-fix Markdown lint + format**: `mise run lint:fix`
- **Full quality pipeline**: `mise run check` (alias: `mise run p`)

- Prettier config: [`.prettierrc.json`](../../.prettierrc.json)
- markdownlint config: [`.markdownlint.json`](../../.markdownlint.json)

These two tools, with these configs, are the only sources of truth for Markdown style in
`basher83/docs`.
