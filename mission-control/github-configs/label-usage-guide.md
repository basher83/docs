# Label Usage Guide

This document describes how to use the shared label system across the `basher83` GitHub repos.

The actual label configuration (source of truth) lives in:

- [label-definitions.yml](https://github.com/basher83/.github/blob/main/.github/labels/label-definitions.yml)

This guide explains how to use those labels effectively as a solo developer.

---

## Core Principles

- **Keep it simple.** Labels should speed you up, not become a second job.
- **Use labels you actually filter by.** If you never click a label in the GitHub UI, you probably
  don't need it.
- **One label per “dimension” when possible:**
  - Status (where it is in the lifecycle)
  - Priority (how important/urgent)
  - Type (what kind of work)
  - Optional: Effort, Area, Env, Bot, Special

You do _not_ need to perfectly label every issue. Use labels where they help you find or sort work
later.

---

## Recommended Minimum Set per Issue

For most issues:

- **1× `status:*`**
- **0–1× `priority:*`**
- **1× `type:*`**

Optionally, add:

- **0–1× `effort:*`**
- **0–2× `area:*`**
- **0–1× `env:*`**
- **Any relevant `special` or `bot` labels** (usually applied automatically)

---

## Status Labels (`status:*`)

Represents the lifecycle of the issue.

- `status:backlog`
  - Default “idea” or “someday” bucket.
  - Use when you first create an issue and haven’t started it yet.

- `status:in-progress`
  - You’re actively working on it.
  - Set this when you pick the issue up.

- `status:blocked`
  - You _want_ to work on it, but something is in the way (waiting on hardware, another task, a
    decision, etc.).
  - Move issues here instead of leaving them stuck in `in-progress`.

- `status:in-review`
  - Work is done, and you’re reviewing/testing it (often corresponds to an open PR).
  - As a solo dev, this can also mean “needs my own testing later.”

- `status:ready-to-merge`
  - Implementation + testing complete; you just need to merge the PR or apply changes.
  - Acts as a short “finalization” lane.

- `status:done`
  - Fully completed and verified.
  - Use this when the issue is truly finished.

**Typical flow:** `backlog → in-progress → in-review → ready-to-merge → done` If stuck at any point:
move to `blocked`.

---

## Priority Labels (`priority:*`)

Represents how important or time-sensitive the issue is.

- `priority:high`
  - Must be addressed soon; high impact or unblocks other work.
- `priority:medium`
  - Important, but not as urgent. Default for “real work” if you want a priority.
- `priority:low`
  - Nice to have, low impact, or purely exploratory.

You don’t need a priority on every issue. Often only a few `high` issues and some `medium` are
enough to keep yourself focused.

---

## Type Labels (`type:*`)

Represents what kind of work the issue is.

- `type:bug`
  - Something is broken or behaving incorrectly.

- `type:feature`
  - New functionality or a significant enhancement.

- `type:docs`
  - Documentation, notes, or content (often lives in `basher83/docs`).

- `type:chore`
  - Maintenance tasks:
    - Refactoring
    - Tooling changes
    - Dependency cleanup
    - Minor improvements that don’t change visible behavior

- `type:security`
  - Security-related changes (hardening, secrets handling, policies, patching vulnerabilities).

- `type:performance`
  - Work aimed at performance or efficiency improvements.

Every issue should generally have **exactly one** `type:*` label.

---

## Effort Labels (`effort:*`)

Optional, but useful for planning and grabbing quick wins.

- `effort:small`
  - Less than 2 hours.
  - Great candidates for “quick work sessions” or when you want momentum.

- `effort:medium`
  - 2–8 hours.
  - A typical day’s worth of focused work or split over a couple of sessions.

- `effort:large`
  - More than a day.
  - Often worth breaking into smaller issues when possible.

Use these when you care about planning your week or selecting tasks based on available time.

---

## Area Labels (`area:*`)

Represents the technical or conceptual area of the work. Use these sparingly—only when you actually
care to filter by them.

- `area:infra`
  - Infrastructure, networking, IaC, automation around infra.

- `area:cloud`
  - Cloud platform work (cloud providers, managed services, etc.).

- `area:python`
  - Python code: scripts, applications, tooling.

- `area:shell`
  - Shell scripts, bash automation, CLI glue.

- `area:ci-cd`
  - GitHub Actions, pipelines, build/test automation.

- `area:web`
  - APIs, web services, or UI‐related work.

- `area:security`
  - Security, policies, access control, hardening.

- `area:docs`
  - Knowledge management, documentation, and content structure.

You can assign more than one `area:*` if the issue really touches multiple domains (e.g.
`area:infra` + `area:ci-cd`).

---

## Environment Labels (`env:*`)

Use these when an issue is environment-specific.

- `env:prod`
  - Issues impacting production or “real” workloads.

- `env:staging`
  - Issues seen in a staging / test cluster that mirrors production.

- `env:dev`
  - Development or local environment (including your homelab dev setups).

If an issue is environment-agnostic (e.g., pure code cleanup), you can omit `env:*`.

---

## Bot Labels (`bot:*`)

Typically applied automatically.

- `bot:renovate`
  - Created or updated by Renovate (dependency upgrades).

- `bot:dependabot`
  - Created or updated by Dependabot (security updates, dependency alerts).

You generally don’t need to apply these manually.

---

## Special Labels (`special`)

Special-purpose labels with specific meaning.

- `breaking-change`
  - Changes that break backward compatibility:
    - API changes
    - Config format changes
    - Infrastructure changes that require migration

- `dependencies`
  - Work that primarily touches dependencies:
    - Upgrade libraries/packages
    - Add/remove dependencies

- `experimental`
  - Prototypes or experiments:
    - May be thrown away or heavily changed
    - Helps you later to identify “spikes” or experimental work

You can combine these with other labels as needed, e.g.:

- `type:feature` + `experimental`
- `type:chore` + `dependencies`
- `type:feature` + `breaking-change`

---

## Examples

### Example 1 – Small bugfix in homelab infra

> DNS record missing for new service in homelab.

Labels:

- `status:in-progress`
- `priority:high`
- `type:bug`
- `effort:small`
- `area:infra`
- `env:prod`

---

### Example 2 – New Python CLI tool

> Add a Python CLI script to manage backups.

Labels:

- `status:backlog`
- `priority:medium`
- `type:feature`
- `area:python`
- `area:infra`
- `env:dev`

---

### Example 3 – Refactor GitHub Actions workflow

> Clean up CI workflow, split tests and linting, and speed up runs.

Labels:

- `status:in-progress`
- `type:chore`
- `effort:medium`
- `area:ci-cd`
- `area:python` (if it’s a Python repo)

---

## How to Evolve This System

- If you **never** click a label in the UI for several weeks:
  - Consider deleting it from `label-definitions.yml`.
- If you keep wanting to filter for something:
  - Add a new label only after you’ve felt that pain more than once.
- Prefer **reusing existing labels** before introducing new ones.
- Keep this guide updated when you make structural changes to the label set.

The goal is not to be perfectly categorized—it’s to help you pick the right work quickly and see
what matters at a glance.
