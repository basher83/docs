# GitHub Configs

Configuration references for repository automation & governance (branch protection, bots, scanners).

## Overview

Central location to document required configuration files and security posture for GitHub-based automation.

| Area | File / Source | Purpose |
|------|---------------|---------|
| Dependency Updates | `renovate.json` | Automated dependency & action PRs |
| Security Updates | `.github/dependabot.yml` | Complementary security / ecosystem updates |
| Formatting | (Service) autofix.ci | PR auto-format bot |
| Secrets Baseline | `.secrets.baseline` | detect-secrets allowlist |

## Automation Provenance & Security

- Verify bot commits: `autofix-ci[bot]` commits must contain only deterministic formatting changes; investigate immediately if logic/content files (e.g., source code semantics) are altered unexpectedly.
- Branch protection: allow autofix bot to push to PR branches; restrict direct pushes to `main` to humans + approved automation (Renovate, Dependabot, autofix).
- Audit quarterly: compare tool versions pinned in configs vs. what automation executed (look at workflow logs / bot PRs).

> Principle: Automation must be observable, least-privilege, and reversible.
