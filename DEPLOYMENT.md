# GitHub Pages Deployment Guide

This guide will help you deploy your Skardu Organic Store to GitHub Pages.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository

## Setup Instructions

### Step 1: Configure Base Path

The `vite.config.ts` file has been configured to support GitHub Pages deployment. The base path is automatically set to your repository name.

**Important:** If your repository name is different from the project folder name, update the base path:

1. Open `vite.config.ts`
2. Find the line: `const base = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || '/';`
3. Replace with your repository name, for example:
   ```typescript
   const base = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || '/your-repo-name/';
   ```
   Or leave as `'/'` if deploying to a custom domain (username.github.io).

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

### Step 3: Push Your Code

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your project when you push to `main` or `master` branch
- Deploy the built files to GitHub Pages
- Update the deployment on every push

Simply push your code:
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 4: Access Your Site

After the workflow completes (usually 1-2 minutes), your site will be available at:
- `https://your-username.github.io/your-repo-name/`

You can check the deployment status in the **Actions** tab of your repository.

## Important Notes

### Base Path Configuration

- **Subdirectory deployment** (e.g., `username.github.io/repo-name/`): 
  - Set base to `/repo-name/` in `vite.config.ts`
  - Or use environment variable `VITE_BASE_PATH=/repo-name/`

- **Root domain deployment** (e.g., `username.github.io`):
  - Set base to `/` in `vite.config.ts`
  - Requires repository name to be `username.github.io`

### Hash Routing

Your app uses hash-based routing (`#/shop`, `#/about`, etc.), which works perfectly with GitHub Pages since it doesn't require server-side configuration. This is already set up correctly!

### Environment Variables

If you're using API keys (like `GEMINI_API_KEY`), you'll need to:
1. Add them as GitHub Secrets
2. Update the workflow to use them during build

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Assets Not Loading

- Verify the base path matches your repository name
- Check that assets use relative paths or absolute URLs
- Ensure `dist` folder is not in `.gitignore`

### Site Not Updating

- Wait 1-2 minutes for GitHub Pages to refresh
- Check deployment status in **Actions** tab
- Clear browser cache

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to repository **Settings** → **Pages**

3. Select **Source**: `main` branch, `/dist` folder

4. Copy the `dist` folder contents to a `gh-pages` branch (or use the root)

**Note:** The GitHub Actions workflow is recommended as it automatically handles deployment.

