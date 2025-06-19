# Blog System Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Initialize the System
```bash
npm run blog:init
```

### 2. Create Your First Blog Post
Create a markdown file in `content/drafts/`:

```markdown
---
title: "Your Blog Post Title"
date: "2025-06-19"
excerpt: "Brief description of your post"
tags: ["ai-consulting", "business-transformation"]
featured: true
---

# Your Content Here

Write your blog post content using markdown.

## Benefits for Your Business

- Key point 1
- Key point 2
- Key point 3

Ready to get started? [Contact us](/contact) for consultation.
```

### 3. Process Your Content
```bash
# Process once
npm run blog:process

# Or start file watcher for automatic processing
npm run blog:watch
```

## ✨ What Happens Next

1. **Automatic Processing**: Your markdown is converted to a professional TSX blog page
2. **SEO Optimization**: Meta tags, descriptions, and keywords are automatically generated
3. **Professional Layout**: Consistent styling with your site's design system
4. **Blog Index**: The main blog page is automatically updated

## 🎯 Pro Tips

- **Use descriptive titles** - They become URL slugs automatically
- **Add relevant tags** - Helps with organization and SEO
- **Include excerpts** - Shows up in blog listings and meta descriptions
- **Set featured: true** - For important posts you want to highlight

## 📁 File Organization

```
content/
├── drafts/           # Drop new markdown files here
├── processed/        # AI-enhanced versions (coming soon)
└── published/        # Final versions

app/blog/
├── [slug]/page.tsx   # Generated blog pages
└── page.tsx          # Blog index (manually maintained for now)
```

## 🔧 Available Commands

```bash
npm run blog:init      # Initialize the system
npm run blog:watch     # Start file watcher
npm run blog:process   # Process files once
npm run blog:stats     # Show statistics
```

## 🤖 AI Enhancement (Coming Soon)

The system is designed to support AI enhancement of your content:
- Expand brief outlines into full blog posts
- Optimize for SEO and readability
- Ensure professional consulting tone
- Generate relevant tags and categories

## 📝 Example Workflow

1. **Write core content** in `content/drafts/my-post.md`
2. **System processes** automatically if watcher is running
3. **Blog page generated** at `/blog/my-post/`
4. **Build and deploy** as normal with your existing pipeline

That's it! Your blog system is now fully automated. Just drop markdown files and watch them become professional blog posts.