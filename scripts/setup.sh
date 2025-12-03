#!/bin/bash
# Quick setup script for new contributors
set -euo pipefail

echo "🚀 Setting up docs repository..."

# Check for mise
if ! command -v mise >/dev/null 2>&1; then
  echo "📦 Installing mise..."
  curl https://mise.run | sh
  export PATH="$HOME/.local/bin:$PATH"
fi

# Trust and install mise tools
echo "🔧 Setting up mise..."
mise trust
mise install

# Run setup tasks
echo "📋 Running setup tasks..."
mise run setup

# Verify everything works
echo "🔍 Running verification..."
mise run check

echo "✅ Setup complete! Available commands:"
echo ""
echo "  mise run          # Show all available tasks"
echo "  mise run fmt      # Format markdown files"
echo "  mise run lint     # Run all linters"
echo "  mise run check    # Run all pre-commit checks"
echo "  mise run test     # Run all tests"
echo ""
echo "Shortcuts:"
echo "  mise run f        # Format"
echo "  mise run l        # Lint"
echo "  mise run q        # Quality check"
echo "  mise run t        # Test"
