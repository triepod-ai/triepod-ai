#!/usr/bin/env node

/**
 * Blog Processing Script
 * 
 * This script provides a command-line interface for the blog processing system.
 * 
 * Usage:
 *   node scripts/blog-processor.js [command] [options]
 * 
 * Commands:
 *   watch          - Start file watcher for automatic processing
 *   process        - Process files once and exit
 *   process-dir    - Process all files in a directory
 *   enhance        - Enhance existing posts with AI
 *   init           - Initialize blog system
 *   stats          - Show processing statistics
 * 
 * Options:
 *   --ai           - Enable AI enhancement
 *   --no-ai        - Disable AI enhancement
 *   --dir <path>   - Specify directory to process
 *   --file <path>  - Specify single file to process
 *   --config <path> - Use custom config file
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const matter = require('gray-matter');
const { marked } = require('marked');
const chokidar = require('chokidar');

const DEFAULT_BLOG_CONFIG = {
  watchMode: true,
  aiEnhancement: true,
  autoPublish: false,
  buildOnChange: true,
  aiModel: 'claude',
  outputFormat: 'tsx',
};

// Simplified blog processing utilities
class SimpleBlogProcessor {
  constructor(config) {
    this.config = config;
    this.processedPosts = new Map();
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  extractExcerpt(content, maxLength = 150) {
    const plainText = content
      .replace(/^#+\s/gm, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .trim();
    
    const firstParagraph = plainText.split('\n\n')[0];
    
    if (firstParagraph.length <= maxLength) {
      return firstParagraph;
    }
    
    return firstParagraph.substring(0, maxLength).trim() + '...';
  }

  async parseFile(filePath) {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content: markdownContent } = matter(fileContent);
    
    const title = data.title || path.basename(filePath, '.md');
    const slug = this.generateSlug(title);
    const wordCount = markdownContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    const excerpt = data.excerpt || this.extractExcerpt(markdownContent);
    
    return {
      id: slug,
      slug,
      title,
      excerpt,
      content: markdownContent,
      date: data.date || new Date().toISOString().split('T')[0],
      readingTime: data.readingTime || readingTime,
      tags: data.tags || [],
      featured: data.featured || false,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      author: data.author || 'Bryan Thompson',
      category: data.category,
      status: 'draft',
      aiEnhanced: data.aiEnhanced || false,
      originalFile: filePath
    };
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  generateComponentName(slug) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
  }

  addStylingClasses(html) {
    return html
      .replace(/<h1>/g, '<h1 className="text-3xl font-bold mt-8 mb-4">')
      .replace(/<h2>/g, '<h2 className="text-2xl font-semibold mt-8 mb-4">')
      .replace(/<h3>/g, '<h3 className="text-xl font-semibold mt-6 mb-3">')
      .replace(/<h4>/g, '<h4 className="text-lg font-semibold mt-6 mb-3">')
      .replace(/<p>/g, '<p className="mb-4 leading-relaxed">')
      .replace(/<ul>/g, '<ul className="list-disc list-inside mb-4 space-y-2">')
      .replace(/<ol>/g, '<ol className="list-decimal list-inside mb-4 space-y-2">')
      .replace(/<li>/g, '<li className="leading-relaxed">')
      .replace(/<a href="/g, '<a className="text-primary hover:text-primary/80 underline" href="')
      .replace(/<pre>/g, '<pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">')
      .replace(/<code>/g, '<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">')
      .replace(/<blockquote>/g, '<blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-4">')
      .replace(/<img /g, '<img className="rounded-lg shadow-md mb-4 max-w-full h-auto" ');
  }

  async generateBlogPage(post) {
    const htmlContent = await marked(post.content);
    const styledContent = this.addStylingClasses(htmlContent);
    const seoTitle = post.seoTitle || `${post.title} | Triepod AI Consulting`;
    const seoDescription = post.seoDescription || post.excerpt;
    
    return `import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${seoTitle}',
  description: '${seoDescription}',
  keywords: [${post.tags.map(tag => `'${tag}'`).join(', ')}],
  openGraph: {
    title: '${seoTitle}',
    description: '${seoDescription}',
    type: 'article',
    publishedTime: '${post.date}',
    authors: ['${post.author}'],
    tags: [${post.tags.map(tag => `'${tag}'`).join(', ')}],
  },
}

export default function ${this.generateComponentName(post.slug)}() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            ${post.tags.map(tag => `
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              <Tag className="w-3 h-3 mr-1" />
              ${tag}
            </span>`).join('')}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ${post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>${post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="${post.date}">${this.formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>${post.readingTime} min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            ${post.excerpt}
          </p>
          
          ${post.aiEnhanced ? `
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            🤖 AI Enhanced Content
          </div>` : ''}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          ${styledContent}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Tags:</span>
              ${post.tags.map(tag => `
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                ${tag}
              </span>`).join('')}
            </div>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get AI Consulting
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}`;
  }

  async saveBlogPage(post, outputDir = 'app/blog') {
    const tsxContent = await this.generateBlogPage(post);
    const outputPath = path.join(outputDir, post.slug, 'page.tsx');
    
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, tsxContent);
    
    console.log(chalk.green(`📄 Generated blog page: ${outputPath}`));
    return outputPath;
  }

  async processFile(filePath) {
    console.log(chalk.blue(`🔄 Processing file: ${filePath}`));
    
    try {
      const post = await this.parseFile(filePath);
      
      // Generate TSX blog page
      await this.saveBlogPage(post);
      
      post.status = 'published';
      this.processedPosts.set(post.slug, post);
      
      console.log(chalk.green(`✅ Successfully processed: ${post.title}`));
      return post;
      
    } catch (error) {
      console.error(chalk.red(`❌ Error processing file ${filePath}:`), error.message);
      throw error;
    }
  }

  async processDirectory(directoryPath) {
    try {
      const files = await fs.readdir(directoryPath);
      const markdownFiles = files
        .filter(file => file.endsWith('.md'))
        .map(file => path.join(directoryPath, file));
      
      console.log(chalk.gray(`📁 Processing ${markdownFiles.length} files from ${directoryPath}`));
      
      const results = [];
      for (const filePath of markdownFiles) {
        try {
          const post = await this.processFile(filePath);
          results.push(post);
        } catch (error) {
          console.error(chalk.red(`Failed to process ${filePath}:`), error.message);
        }
      }
      
      return results;
    } catch (error) {
      console.error(chalk.red(`Error processing directory ${directoryPath}:`), error.message);
      return [];
    }
  }

  getAllPosts() {
    return Array.from(this.processedPosts.values());
  }

  getStats() {
    const posts = Array.from(this.processedPosts.values());
    const allTags = new Set();
    
    posts.forEach(post => {
      post.tags.forEach(tag => allTags.add(tag));
    });
    
    return {
      totalPosts: posts.length,
      aiEnhancedPosts: posts.filter(post => post.aiEnhanced).length,
      publishedPosts: posts.filter(post => post.status === 'published').length,
      tags: Array.from(allTags).sort(),
    };
  }
}

class BlogCLI {
  constructor() {
    this.config = DEFAULT_BLOG_CONFIG;
    this.processor = null;
    this.watcher = null;
  }

  async loadConfig(configPath) {
    try {
      if (configPath && await fs.pathExists(configPath)) {
        const userConfig = await fs.readJson(configPath);
        this.config = { ...DEFAULT_BLOG_CONFIG, ...userConfig };
        console.log(chalk.green(`📄 Loaded config from: ${configPath}`));
      }
    } catch (error) {
      console.error(chalk.red(`❌ Error loading config: ${error.message}`));
    }
  }

  async init() {
    this.processor = new SimpleBlogProcessor(this.config);
  }

  async watch(options = {}) {
    const watchDir = options.dir || 'content/drafts';
    
    console.log(chalk.blue('🚀 Starting blog processing system...'));
    console.log(chalk.gray(`📁 Watch directory: ${path.resolve(watchDir)}`));
    console.log(chalk.gray(`🤖 AI Enhancement: ${this.config.aiEnhancement ? 'enabled' : 'disabled'}`));
    console.log(chalk.gray(`🔄 Auto rebuild: ${this.config.buildOnChange ? 'enabled' : 'disabled'}`));
    
    const watcher = chokidar.watch(path.join(watchDir, '**/*.md'), {
      ignored: /(^|[\/\\])\../,
      persistent: true,
      ignoreInitial: false,
    });

    watcher
      .on('add', async (filePath) => {
        console.log(chalk.yellow(`📁 New file detected: ${filePath}`));
        try {
          await this.processor.processFile(filePath);
        } catch (error) {
          console.error(chalk.red(`Error processing new file ${filePath}:`), error.message);
        }
      })
      .on('change', async (filePath) => {
        console.log(chalk.yellow(`📝 File changed: ${filePath}`));
        try {
          await this.processor.processFile(filePath);
        } catch (error) {
          console.error(chalk.red(`Error processing changed file ${filePath}:`), error.message);
        }
      })
      .on('error', (error) => console.error(chalk.red('File watcher error:'), error));

    console.log(chalk.green('✅ Blog processing system started'));
    console.log(chalk.yellow('📝 Drop markdown files in the drafts folder to process them'));
    console.log(chalk.gray('Press Ctrl+C to stop'));
    
    process.on('SIGINT', () => {
      console.log(chalk.yellow('\n🛑 Shutting down...'));
      watcher.close();
      process.exit(0);
    });
  }

  async processFiles(options = {}) {
    console.log(chalk.blue('🔄 Processing files...'));
    
    if (options.file) {
      try {
        const post = await this.processor.processFile(options.file);
        console.log(chalk.green(`✅ Processed: ${post.title}`));
      } catch (error) {
        console.error(chalk.red(`❌ Error processing file: ${error.message}`));
      }
    } else if (options.dir) {
      try {
        const posts = await this.processor.processDirectory(options.dir);
        console.log(chalk.green(`✅ Processed ${posts.length} files from ${options.dir}`));
      } catch (error) {
        console.error(chalk.red(`❌ Error processing directory: ${error.message}`));
      }
    } else {
      try {
        const posts = await this.processor.processDirectory('content/drafts');
        console.log(chalk.green(`✅ Processed ${posts.length} files`));
      } catch (error) {
        console.error(chalk.red(`❌ Error processing files: ${error.message}`));
      }
    }
  }

  async showStats() {
    const stats = this.processor.getStats();
    
    console.log(chalk.blue('\n📊 Blog Processing Statistics'));
    console.log(chalk.gray('========================================'));
    console.log(`📄 Total Posts: ${chalk.green(stats.totalPosts)}`);
    console.log(`🤖 AI Enhanced: ${chalk.green(stats.aiEnhancedPosts)}`);
    console.log(`✅ Published: ${chalk.green(stats.publishedPosts)}`);
    console.log(`🏷️ Total Tags: ${chalk.green(stats.tags.length)}`);
    
    if (stats.tags.length > 0) {
      console.log(chalk.gray('\nAvailable Tags:'));
      console.log(chalk.cyan(stats.tags.join(', ')));
    }
  }

  async initializeSystem() {
    console.log(chalk.blue('🎯 Initializing blog processing system...'));
    
    const dirs = [
      'content/drafts',
      'content/processed',
      'content/published',
      'lib/blog',
      'scripts'
    ];
    
    for (const dir of dirs) {
      await fs.ensureDir(dir);
      console.log(chalk.gray(`📁 Created directory: ${dir}`));
    }
    
    const configPath = 'blog.config.json';
    if (!await fs.pathExists(configPath)) {
      await fs.writeJson(configPath, DEFAULT_BLOG_CONFIG, { spaces: 2 });
      console.log(chalk.gray(`⚙️ Created config file: ${configPath}`));
    }
    
    console.log(chalk.green('✅ Blog processing system initialized'));
    console.log(chalk.yellow('💡 Run "npm run blog:watch" to start processing'));
  }
}

// CLI argument parsing
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  
  const options = {};
  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--ai') {
      options.aiEnhancement = true;
    } else if (arg === '--no-ai') {
      options.aiEnhancement = false;
    } else if (arg === '--dir') {
      options.dir = args[++i];
    } else if (arg === '--file') {
      options.file = args[++i];
    } else if (arg === '--config') {
      options.config = args[++i];
    }
  }
  
  const cli = new BlogCLI();
  
  if (options.config) {
    await cli.loadConfig(options.config);
  } else {
    await cli.loadConfig('blog.config.json');
  }
  
  if (options.aiEnhancement !== undefined) {
    cli.config.aiEnhancement = options.aiEnhancement;
  }
  
  await cli.init();
  
  switch (command) {
    case 'watch':
      await cli.watch(options);
      break;
    
    case 'process':
      await cli.processFiles(options);
      break;
    
    case 'process-dir':
      if (!options.dir) {
        console.error(chalk.red('❌ --dir option required for process-dir command'));
        process.exit(1);
      }
      await cli.processFiles(options);
      break;
    
    case 'enhance':
      console.log(chalk.yellow('🤖 AI enhancement feature coming soon...'));
      console.log(chalk.gray('Use --ai flag with other commands for basic AI integration'));
      break;
    
    case 'stats':
      await cli.showStats();
      break;
    
    case 'init':
      await cli.initializeSystem();
      break;
    
    case 'help':
    default:
      console.log(chalk.blue('📚 Blog Processing System CLI\n'));
      console.log('Commands:');
      console.log('  watch          Start file watcher for automatic processing');
      console.log('  process        Process files once and exit');
      console.log('  process-dir    Process all files in a directory');
      console.log('  enhance        Enhance existing posts with AI (coming soon)');
      console.log('  init           Initialize blog system');
      console.log('  stats          Show processing statistics');
      console.log('  help           Show this help message\n');
      console.log('Options:');
      console.log('  --ai           Enable AI enhancement (basic)');
      console.log('  --no-ai        Disable AI enhancement');
      console.log('  --dir <path>   Specify directory to process');
      console.log('  --file <path>  Specify single file to process');
      console.log('  --config <path> Use custom config file\n');
      console.log('Examples:');
      console.log('  npm run blog:init');
      console.log('  npm run blog:watch');
      console.log('  npm run blog:process -- --dir content/drafts');
      break;
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('❌ Fatal error:'), error);
    process.exit(1);
  });
}