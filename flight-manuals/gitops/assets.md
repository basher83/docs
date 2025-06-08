# Assets

## Overview

A dedicated assets repository is utilized to ensure that all assets are stored in a single location. This allows for easy access and management of assets across all projects and eliminates the external dependency on other providers (e.g. Giphy, etc.). This approach leverages GitHub's CDN: Once uploaded to a repo, GitHub serves images via `raw.githubusercontent.com`.

## Assets

### 1. https://github.com/basher83/assets

```plaintext
basher83/assets/
├── octocats/              # Custom GitHub Octocats
├── space-gifs/            # Space-themed animations for docs
│   ├── dev-missions/      # Development project visuals
│   ├── staging-planets/   # Staging project visuals
│   └── prod-galaxies/     # Production project visuals
├── logos/                 # Project and personal logos
├── banners/               # Header banners for READMEs
├── icons/                 # Small icons and badges
└── screenshots/           # Project screenshots
```

### GitHub-Compatible External Services:

- [Imgur](https://imgur.com/): Very reliable and widely used in GitHub docs
- [ImgBB](https://imgbb.com/): Offers permanent hosting options
- [Cloudinary](https://cloudinary.com/): More professional option with transformation capabilities

## Usage

### 1. Uploading Assets

To upload assets to the `basher83/assets` repository, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/basher83/assets.git
```

2. Navigate to the repository:

```bash
cd assets
```

3. Upload your assets:

### 2. Utilizing Assets

To utilize assets in your projects, follow these steps:

1. Reference the asset in your project:

```markdown
![Your Asset](https://raw.githubusercontent.com/basher83/assets/main/octocats/your-octocat.png)
```

```markdown
<!-- In your README.md or other documents -->
<img src="https://raw.githubusercontent.com/basher83/assets/main/octocats/main-profile-octocat.png" width="200" alt="My Custom Octocat">
```

### 3. Best Practices:

- Include a README in your assets repo explaining usage rights
- Use consistent naming conventions for easy reference
- Consider adding lightweight image optimization to your workflow
- Update your Last Updated badges automatically using GitHub Actions

### 4. Benefits of This Approach:

- Centralized Asset Management: All your visual assets in one place
- Consistent URLs: Links won't break when you update assets
- Version Control: Track changes to your visual assets
- Reusability: Reference the same assets across multiple repositories
- Personalization: Your custom Octocat becomes part of your brand identity

### 5. Additional Tips

- Consider adding a LICENSE file to clarify how others can use your assets
- Set up GitHub Actions to automatically update the Last Updated badge in your README
- Use consistent naming conventions for all your assets to make them easy to reference
- Consider image optimization for larger files to keep repository size manageable

## References

- [GitHub Assets](https://docs.github.com/en/assets)
- [GitHub Octocats](https://octodex.github.com/)
- [My Octocat](https://myoctocat.com/)
- [GitHub Banners](https://github.com/logos)
- [GitHub Icons](https://github.com/logos)
- [GitHub Screenshots](https://github.com/logos)
