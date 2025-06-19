import { BlogPost } from '@/types/blog';
import { MarkdownParser } from './markdown-parser';
import fs from 'fs-extra';
import path from 'path';

export class BlogGenerator {
  /**
   * Generate TSX blog page from BlogPost
   */
  static async generateBlogPage(post: BlogPost): Promise<string> {
    const htmlContent = await MarkdownParser.markdownToHtml(post.content);
    
    // Clean up HTML and add proper styling classes
    const styledContent = this.addStylingClasses(htmlContent);
    
    return this.createTSXTemplate(post, styledContent);
  }

  /**
   * Create TSX page template
   */
  private static createTSXTemplate(post: BlogPost, htmlContent: string): string {
    const seoTitle = post.seoTitle || `${post.title} | Triepod AI Consulting`;
    const seoDescription = post.seoDescription || post.excerpt;
    
    return `'use client'

import Link from 'next/link'
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
    authors: ['${post.author || 'Bryan Thompson'}'],
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
              <span>${post.author || 'Bryan Thompson'}</span>
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
          ${htmlContent}
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

  /**
   * Add Tailwind styling classes to HTML content
   */
  private static addStylingClasses(html: string): string {
    return html
      // Headers
      .replace(/<h1>/g, '<h1 className="text-3xl font-bold mt-8 mb-4">')
      .replace(/<h2>/g, '<h2 className="text-2xl font-semibold mt-8 mb-4">')
      .replace(/<h3>/g, '<h3 className="text-xl font-semibold mt-6 mb-3">')
      .replace(/<h4>/g, '<h4 className="text-lg font-semibold mt-6 mb-3">')
      
      // Paragraphs
      .replace(/<p>/g, '<p className="mb-4 leading-relaxed">')
      
      // Lists
      .replace(/<ul>/g, '<ul className="list-disc list-inside mb-4 space-y-2">')
      .replace(/<ol>/g, '<ol className="list-decimal list-inside mb-4 space-y-2">')
      .replace(/<li>/g, '<li className="leading-relaxed">')
      
      // Links
      .replace(/<a href="/g, '<a className="text-primary hover:text-primary/80 underline" href="')
      
      // Code blocks
      .replace(/<pre>/g, '<pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">')
      .replace(/<code>/g, '<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">')
      
      // Blockquotes
      .replace(/<blockquote>/g, '<blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-4">')
      
      // Tables
      .replace(/<table>/g, '<table className="w-full border-collapse border border-gray-300 mb-4">')
      .replace(/<th>/g, '<th className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold">')
      .replace(/<td>/g, '<td className="border border-gray-300 px-4 py-2">')
      
      // Images
      .replace(/<img /g, '<img className="rounded-lg shadow-md mb-4 max-w-full h-auto" ');
  }

  /**
   * Generate component name from slug
   */
  private static generateComponentName(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
  }

  /**
   * Format date for display
   */
  private static formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  /**
   * Save blog page to file system
   */
  static async saveBlogPage(post: BlogPost, outputDir: string = 'app/blog'): Promise<string> {
    const tsxContent = await this.generateBlogPage(post);
    const outputPath = path.join(outputDir, post.slug, 'page.tsx');
    
    // Ensure directory exists
    await fs.ensureDir(path.dirname(outputPath));
    
    // Write TSX file
    await fs.writeFile(outputPath, tsxContent);
    
    console.log(`📄 Generated blog page: ${outputPath}`);
    return outputPath;
  }

  /**
   * Generate blog index data
   */
  static generateBlogIndex(posts: BlogPost[]): string {
    const sortedPosts = posts
      .filter(post => post.status === 'published')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const articleComponents = sortedPosts.map(post => `
        <article className="group relative bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <Link href="/blog/${post.slug}">
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                ${post.tags.slice(0, 3).map(tag => `
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  ${tag}
                </span>`).join('')}
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                ${post.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                ${post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${this.formatDate(post.date)} • ${post.readingTime} min read</span>
                ${post.aiEnhanced ? '<span className="text-green-600">🤖 AI Enhanced</span>' : ''}
              </div>
            </div>
          </Link>
        </article>`).join('');

    return `import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Consulting Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights, strategies, and best practices for AI implementation and business transformation.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        ${articleComponents}
      </div>
    </div>
  );
}`;
  }

  /**
   * Save blog index page
   */
  static async saveBlogIndex(posts: BlogPost[], outputPath: string = 'app/blog/page.tsx'): Promise<void> {
    const indexContent = this.generateBlogIndex(posts);
    await fs.writeFile(outputPath, indexContent);
    console.log(`📄 Updated blog index: ${outputPath}`);
  }
}