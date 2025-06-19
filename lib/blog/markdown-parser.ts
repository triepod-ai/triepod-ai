import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost, BlogFrontmatter } from '@/types/blog';
import fs from 'fs-extra';
import path from 'path';

export class MarkdownParser {
  /**
   * Parse a markdown file and extract frontmatter and content
   */
  static async parseFile(filePath: string): Promise<BlogPost> {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return this.parseContent(fileContent, filePath);
  }

  /**
   * Parse markdown content string
   */
  static parseContent(content: string, originalFile?: string): BlogPost {
    const { data, content: markdownContent } = matter(content);
    const frontmatter = data as BlogFrontmatter;
    
    // Generate slug from title or filename
    const slug = this.generateSlug(frontmatter.title || path.basename(originalFile || '', '.md'));
    
    // Calculate reading time (average 200 words per minute)
    const wordCount = markdownContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    
    // Extract excerpt if not provided
    const excerpt = frontmatter.excerpt || this.extractExcerpt(markdownContent);
    
    return {
      id: slug,
      slug,
      title: frontmatter.title || 'Untitled',
      excerpt,
      content: markdownContent,
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      readingTime: frontmatter.readingTime || readingTime,
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false,
      seoTitle: frontmatter.seoTitle,
      seoDescription: frontmatter.seoDescription,
      author: frontmatter.author || 'Bryan Thompson',
      category: frontmatter.category,
      status: 'draft',
      aiEnhanced: frontmatter.aiEnhanced || false,
      originalFile
    };
  }

  /**
   * Generate URL-friendly slug from title
   */
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  }

  /**
   * Extract excerpt from content (first paragraph or 150 characters)
   */
  static extractExcerpt(content: string, maxLength: number = 150): string {
    // Remove markdown formatting
    const plainText = content
      .replace(/^#+\s/gm, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove code
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .trim();
    
    // Get first paragraph or truncate to maxLength
    const firstParagraph = plainText.split('\n\n')[0];
    
    if (firstParagraph.length <= maxLength) {
      return firstParagraph;
    }
    
    return firstParagraph.substring(0, maxLength).trim() + '...';
  }

  /**
   * Convert markdown content to HTML
   */
  static async markdownToHtml(markdown: string): Promise<string> {
    return marked(markdown);
  }

  /**
   * Generate frontmatter string from BlogPost
   */
  static generateFrontmatter(post: BlogPost): string {
    const frontmatter: Record<string, any> = {
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      tags: post.tags,
      featured: post.featured,
      readingTime: post.readingTime,
    };

    if (post.seoTitle) frontmatter.seoTitle = post.seoTitle;
    if (post.seoDescription) frontmatter.seoDescription = post.seoDescription;
    if (post.author) frontmatter.author = post.author;
    if (post.category) frontmatter.category = post.category;
    if (post.aiEnhanced) frontmatter.aiEnhanced = post.aiEnhanced;

    const yamlLines = Object.entries(frontmatter).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map(v => `"${v}"`).join(', ')}]`;
      }
      return `${key}: "${value}"`;
    });

    return `---\n${yamlLines.join('\n')}\n---`;
  }

  /**
   * Create complete markdown file with frontmatter
   */
  static createMarkdownFile(post: BlogPost): string {
    const frontmatter = this.generateFrontmatter(post);
    return `${frontmatter}\n\n${post.content}`;
  }
}