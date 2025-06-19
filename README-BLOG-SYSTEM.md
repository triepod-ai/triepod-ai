# Automated Blog Generation System

## Overview

This system transforms your blog workflow from manual TSX creation to simple markdown file drops with optional AI enhancement. Drop a markdown file in the `content/drafts` folder, and the system automatically processes it into a professional blog post.

## Quick Start

### 1. Initialize the System
```bash
npm run blog:init
```

### 2. Start the File Watcher
```bash
npm run blog:watch
```

### 3. Create Content
Drop markdown files in `content/drafts/` and they'll be automatically processed.

## Directory Structure

```
content/
├── drafts/           # Drop markdown files here
├── processed/        # AI-enhanced blog posts  
└── published/        # Final blog posts ready for site

lib/blog/            # Blog processing utilities
scripts/             # CLI tools
blog.config.json     # Configuration
```

## Features

### ✅ Automatic Processing
- **File Watching**: Automatically detects new/changed markdown files
- **Slug Generation**: Creates URL-friendly slugs from titles
- **Reading Time**: Calculates estimated reading time
- **SEO Optimization**: Generates meta titles and descriptions
- **Blog Index**: Automatically updates the blog listing page

### ✅ AI Enhancement (Optional)
- **Content Expansion**: Transforms core content into comprehensive blog posts
- **Professional Tone**: Enhances writing for consulting audience
- **SEO Improvement**: Optimizes for search rankings
- **Tag Generation**: Suggests relevant tags
- **Structure Optimization**: Improves readability and flow

### ✅ Professional Output
- **TSX Generation**: Creates Next.js blog pages
- **Consistent Styling**: Professional design with Tailwind CSS
- **Responsive Layout**: Mobile-friendly blog posts
- **SEO Ready**: Proper meta tags and structured data

## Usage Examples

### Basic Markdown Processing
```bash
# Process files once
npm run blog:process

# Process specific directory
npm run blog:process -- --dir content/drafts

# Process single file
npm run blog:process -- --file content/drafts/my-post.md
```

### AI Enhancement
```bash
# Start watcher with AI enhancement
npm run blog:watch --ai

# Enhance existing posts
npm run blog:enhance

# Process without AI
npm run blog:process --no-ai
```

### System Management
```bash
# View statistics
npm run blog:stats

# Initialize system
npm run blog:init
```

## Markdown Format

### Frontmatter Options
```yaml
---
title: "Your Blog Post Title"
date: "2025-06-19"
excerpt: "Brief description for previews"
tags: ["ai-consulting", "business-transformation"]
featured: true
readingTime: 5
seoTitle: "Custom SEO Title"
seoDescription: "SEO description"
author: "Bryan Thompson"
category: "AI Consulting"
---
```

### Content Structure
```markdown
# Main Heading

Introduction paragraph with key value proposition.

## Section Header

Content with actionable insights.

### Subsection

- Bullet points for clarity
- Professional examples
- Client benefits

## Call to Action

Ready to transform your business? [Contact us](/contact) for consultation.
```

## AI Enhancement

The AI enhancement system uses advanced language models to:

1. **Expand Content**: Turn core ideas into comprehensive blog posts (800-1200 words)
2. **Improve SEO**: Optimize titles, descriptions, and keyword usage
3. **Enhance Tone**: Ensure professional consulting voice throughout
4. **Add Structure**: Improve headings, bullet points, and flow
5. **Generate Tags**: Suggest relevant tags for better categorization

### AI Enhancement Example

**Input** (Core content):
```markdown
# AI Consulting Benefits

AI helps businesses automate processes and make better decisions.
```

**Output** (Enhanced):
```markdown
# Transforming Business Operations: The Strategic Value of AI Consulting

Artificial Intelligence consulting has emerged as a critical competitive advantage for modern enterprises seeking to optimize operations, enhance decision-making capabilities, and drive sustainable growth in an increasingly digital marketplace.

## Key Business Benefits

### Process Automation Excellence
AI-powered automation solutions can reduce operational costs by up to 85% while improving accuracy and consistency across business processes...

[Additional comprehensive content]
```

## Configuration

### blog.config.json
```json
{
  "watchMode": true,
  "aiEnhancement": true, 
  "autoPublish": false,
  "buildOnChange": true,
  "aiModel": "claude",
  "outputFormat": "tsx"
}
```

### Environment Variables
```env
# Optional: Configure AI models
ANTHROPIC_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
```

## Workflow Examples

### Simple Blog Post Creation
1. Write `my-post.md` with core content
2. Drop in `content/drafts/`
3. System automatically:
   - Processes markdown
   - Generates TSX blog page
   - Updates blog index
   - Triggers build (in dev mode)

### AI-Enhanced Content Creation
1. Write brief outline in `outline.md`
2. Drop in `content/drafts/`
3. AI expands into full blog post
4. Saves enhanced version to `content/processed/`
5. Generates professional TSX page
6. Updates blog index automatically

### Batch Processing
```bash
# Process multiple files from another project
npm run blog:process -- --dir ../my-other-project/docs

# Enhance all existing posts
npm run blog:enhance
```

## Integration with Existing Site

The system integrates seamlessly with your existing Next.js blog:

- **Preserves Layout**: Uses existing blog layout and styling
- **Maintains URLs**: Blog posts remain at `/blog/[slug]`
- **Updates Index**: Automatically maintains the blog listing page
- **SEO Compatible**: Generates proper meta tags and structured data

## Troubleshooting

### Common Issues

1. **File Not Processing**: Check file is valid markdown with frontmatter
2. **AI Enhancement Fails**: System falls back to basic processing
3. **Build Errors**: Check generated TSX syntax in `app/blog/[slug]/page.tsx`

### Debug Commands
```bash
# Check system status
npm run blog:stats

# Process single file with verbose output
node scripts/blog-processor.js process --file content/drafts/test.md

# Test without AI enhancement
npm run blog:process --no-ai
```

### Log Output
The system provides detailed console output:
```
🚀 Starting blog processing system...
📁 Watch directory: /path/to/content/drafts
🤖 AI Enhancement: enabled
📝 New file detected: content/drafts/my-post.md
🤖 Enhancing with AI: My Post Title
✅ AI enhancement completed
📄 Generated blog page: app/blog/my-post/page.tsx
📄 Updated blog index with 1 posts
```

## Advanced Usage

### Custom AI Prompts
Modify `lib/blog/ai-enhancer.ts` to customize enhancement behavior:

```typescript
// Add custom enhancement options
const customOptions = {
  expandContent: true,
  improveSEO: true,
  addIndustryExamples: true,  // Custom option
  includeActionItems: true,   // Custom option
};
```

### Custom Templates
Modify `lib/blog/blog-generator.ts` to customize blog page templates:

```typescript
// Add custom sections, styling, or components
private static createTSXTemplate(post: BlogPost, htmlContent: string): string {
  // Customize the generated TSX template
}
```

### Integration with CMS
The system can be extended to work with headless CMS:

```typescript
// Example: Sync with external CMS
const cmsPost = await fetchFromCMS(post.slug);
const enhancedPost = await AIEnhancer.enhancePost(cmsPost);
await syncToCMS(enhancedPost);
```

This system dramatically reduces blog maintenance overhead while ensuring professional quality and SEO optimization for your AI consulting content.