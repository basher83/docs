# 📁 `.gitkeep` – Empty Directory Tracking in Git

## 🧭 Overview

Git does not track empty directories by default. This can be problematic when your project relies on
certain folder structures (e.g., for logs, uploads, build artifacts, etc.) that should exist but
don't yet contain files.

To address this, we use a convention: adding a file named `.gitkeep` to those directories. This
ensures they are versioned in the Git repository without needing placeholder junk files.

---

## 📦 When to Use `.gitkeep`

- You want to preserve the structure of empty folders
- CI/CD pipelines depend on directory presence
- You need folders like `/logs`, `/tmp`, or `/cache` created on clone
- A project scaffolding or starter repo benefits from predefined layout

---

## 🔧 Usage Example

```bash
mkdir logs
touch logs/.gitkeep
git add logs/.gitkeep
```

Now `logs/` will be committed, even if it's empty.

> 💡 Tip: You can add a comment in `.gitkeep` explaining the folder's purpose, or leave it empty.

---

## 🙅 What About `.gitignore`?

`.gitignore` tells Git to ignore **files** inside a directory but won’t make Git track the directory
itself if it’s empty. That’s where `.gitkeep` steps in — it keeps the folder _tracked_ without
interfering with ignores.

---

## 🧼 Convention Note

`.gitkeep` isn’t a Git feature — it's just a naming convention. You could name the file anything,
but `.gitkeep` is widely recognized and semantically clear.

---

## ⚙️ Automating `.gitkeep` File Creation

You can auto-generate `.gitkeep` files as part of your project scaffolding or bootstrapping process.
This ensures essential empty folders are always present in the repo.

### 🧪 Example: `init.sh` Snippet

```bash
#!/bin/bash
# create-required-dirs.sh

dirs=(
  "logs"
  "tmp"
  "build"
  "artifacts"
  "data/uploads"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
  touch "$dir/.gitkeep"
done

echo "📁 .gitkeep files added to all tracked empty directories."
```

This can be included in a setup routine or called manually to scaffold your repo layout.

### 🧱 Example: Taskfile Integration

```yaml
version: "3"

tasks:
  ensure-dirs:
    cmds:
      - mkdir -p logs tmp data/uploads
      - touch logs/.gitkeep tmp/.gitkeep data/uploads/.gitkeep
    desc: Ensure critical dirs exist and have .gitkeep
```

> 💡 You can even include comments inside `.gitkeep` files to clarify folder purpose.

```bash
echo "# Runtime logs live here" > logs/.gitkeep
```
