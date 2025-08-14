# mise — quick setup for contributors

This repository uses mise to manage developer tooling versions. Quick steps for contributors:

- Ensure mise is installed and up-to-date: `mise self-update`
- Trust the local config if prompted: `mise trust`
- Install required tools: `mise install` (or `mise install --yes`)

We pin plugin-qualified tools (for example `core:node` and `core:python`) in `.mise.toml` to
avoid ambiguity. If `mise doctor` reports missing tools, run `mise install` and then `mise doctor`
again to verify the environment.

For more, see the repository `README.md` or the official mise docs: https://mise.jdx.dev/
