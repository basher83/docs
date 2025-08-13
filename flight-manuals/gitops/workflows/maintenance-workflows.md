# 🛠️ Maintenance Workflows

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=flight-manuals%2Fgitops%2Fworkflows%2Fmaintenance-workflows.md&display_timestamp=committer)

Structured automation patterns that keep repositories healthy, consistent, and low-friction for contributors.

## 🎯 Goals

- Enforce deterministic formatting & lint standards
- Keep dependencies, actions, and configs current
- Reduce manual review noise (style, trivial drift)
- Surface security & quality issues early

## 🔄 Workflow Categories

| Category | Purpose | Tools / Services |
|----------|---------|------------------|
| Formatting & Lint Auto-Fix | Normalize code & docs style | autofix.ci, ruff, markdownlint |
| Dependency Refresh | Keep libraries & actions updated | Renovate, Dependabot |
| Security Scanning | Detect secrets & vulnerabilities | detect-secrets, gitleaks, Semgrep |
| Coverage & Quality | Enforce test & quality thresholds | CodeCov, CI test suites |
| Metadata Hygiene | Update readme trees, badges | update-trees script, Shields.io |

---

## ✨ Automated Formatting Workflow (autofix.ci)

> Cross reference: Policy & rationale in `mission-control/coding-standards.md` (Automated Formatting section) and integration details in `github-integrations.md`.

### Purpose

Remove trivial formatting & lint feedback from human review by auto-applying safe, deterministic fixes after a PR is opened.

### Trigger Model

| Event | Action |
|-------|--------|
| pull_request opened / synchronized | autofix.ci runs fixers on changed files |
| Bot produces diff | Pushes `autofix:` commit |
| New commit present | CI re-runs required checks |

### Tool Chain Sequence

1. ruff (Python lint+format quick fixes)
2. markdownlint (documentation style)
3. Prettier / shfmt (if config present)

### Expected Outcomes

- Style-only changes isolated in bot commit
- PR diff remains logically focused
- CI passes without manual formatting tweaks

### Failure Modes & Responses

| Symptom | Likely Cause | Remediation |
|---------|--------------|------------|
| Bot commits repeatedly | Non-deterministic config (line endings, version drift) | Pin tool versions, add .editorconfig |
| No bot activity | App not installed / missing access | Re-install, verify repository scope |
| CI still red post-fix | Non-auto-fix issues (tests, types) | Manual developer intervention |
| Merge blocked by branch rules | Bot user not allowed | Adjust branch protection to allow app |

### Guardrails

- All formatters must be idempotent (A -> B -> B)
- Pure style commit message prefix: `autofix:` (squash merge retains clarity)
- Bot never creates or deletes arbitrary files—only edits those in PR diff

### KPIs

- % PRs requiring no manual style change comments (target > 95%)
- Median time from PR open → first green CI after autofix (< 10 min)
- Reformat loop incidents (target 0 per quarter)

---

## 📦 Dependency Maintenance (Renovate + Dependabot)

High-frequency updates (Renovate) plus security-focused ecosystem scanning (Dependabot) provide layered coverage. Accept minor updates quickly; batch large version bumps if churn high.

---

## 🔐 Security Maintenance

Integrated in pre-commit / CI: detect-secrets, gitleaks, Semgrep security rules, dependency vulnerability scanning (Safety / OSV).

---

## 🧹 Repository Hygiene Tasks

| Task | Mechanism | Frequency |
|------|-----------|-----------|
| Update directory trees | `scripts/update-trees.sh` / workflow | On structure change |
| Badge freshness | Manual spot check or CI link check | Monthly |
| Stale branch pruning | Manual / scheduled script | Monthly |

---

## 🧪 Validation Order in CI (Current Topology)

Active workflows after consolidation:

| Workflow | Purpose | Writes? | Key Tools |
|----------|---------|---------|-----------|
| `autofix.ci` | Auto-apply deterministic formatting fixes on PRs | Yes (bot commit) | Ruff, Prettier, markdownlint |
| `Docs Quality` | Enforce formatting + style; verify action pinning | No | Prettier (check), markdownlint, grep security check |
| `update-doc-trees` | Maintain directory tree sections | Yes (commits tree regen) | custom script |

Sequence for new PR:

1. `autofix.ci` runs (may push `autofix:` commit).
2. `Docs Quality` re-runs and should pass (pure check).
3. Future language/security workflows (if added) execute.

Deprecated (pending removal): legacy `markdownlint.yml`, `markdown-autofix.yml`.

Rationale: Reduce duplication & drift; single check workflow for Markdown; dedicated fix workflow.

> Recommended required status checks: `Docs Quality` (markdown-quality) and optionally success of `autofix.ci`.

---

## 🚨 Incident Playbook (Automation Issues)

| Scenario | Action |
|----------|--------|
| Bot loop formatting | Temporarily uninstall autofix.ci → pin versions → re-enable |
| Unexpected non-style change in bot commit | Revert commit → audit tool configs → open issue |
| Widespread formatter regression after version bump | Roll back version in config → lock version → schedule controlled upgrade |

---

## 📅 Review Cadence

| Quarterly | Validate tool versions, review KPIs, confirm no drift |
| Monthly | Security audit of automation permissions |
| Continuous | Monitor PRs for anomalies |

---

> North Star: Human reviewers invest cognitive energy in correctness, architecture, and security—not whitespace or trivial style.
