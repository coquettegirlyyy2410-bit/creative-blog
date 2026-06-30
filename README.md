# Creative Blog - Deployment Guide

## Step 1: Create a GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Create a new repository called `creative-blog`
3. Choose "Public" (free plan)
4. Click "Create repository"

## Step 2: Upload Your Files to GitHub

After creating the repo, GitHub will show you commands. Follow these steps:

1. Download all the files you have locally (package.json, next.config.js, pages/index.js, etc.)
2. In the repository page, click the green "Code" button
3. Click "Upload files"
4. Drag and drop all your project files here
5. Click "Commit changes"

Or use Git commands if you're comfortable:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/creative-blog.git
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)** (you're already signed up!)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Paste your GitHub repo URL (or authorize GitHub to browse your repos)
5. Click "Import"
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

**That's it!** Your site will be live in 1-2 minutes.

You'll get a URL like: `https://creative-blog.vercel.app`

## Step 4: Make it Your Own

Edit these files to customize:

- **pages/index.js** - Change blog posts, colors, text content
- **Update email** - Change `hello@example.com` in the "Say hello" link
- **Change title** - "Creative Pulse" appears in navigation and <Head>

## After Deployment

Every time you:
1. Edit a file on GitHub (or push changes via Git)
2. Vercel automatically rebuilds and redeploys your site
3. Your site updates in seconds

## Need Help?

- **Change colors**: Find hex codes like `#7F77DD` in pages/index.js
- **Add blog posts**: Duplicate a post in the `blogPosts` array
- **Custom domain**: In Vercel dashboard → Settings → Domains
- **Update content**: Just edit files on GitHub and Vercel redeploys automatically
