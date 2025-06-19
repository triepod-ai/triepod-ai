import { BlogPost, BlogConfig } from '@/types/blog';
import { MarkdownParser } from './markdown-parser';
import { AIEnhancer } from './ai-enhancer';
import { BlogGenerator } from './blog-generator';
import fs from 'fs-extra';
import path from 'path';

export class BlogProcessor {
  private config: BlogConfig;
  private processedPosts: Map<string, BlogPost> = new Map();

  constructor(config: BlogConfig) {
    this.config = config;
  }

  /**
   * Process a single markdown file
   */
  async processFile(filePath: string): Promise<BlogPost> {
    console.log(`🔄 Processing file: ${filePath}`);
    
    try {
      // Parse the markdown file
      let post = await MarkdownParser.parseFile(filePath);
      
      // Enhance with AI if enabled
      if (this.config.aiEnhancement) {
        console.log(`🤖 Enhancing with AI: ${post.title}`);
        post = await AIEnhancer.enhancePost(post);
        
        // Save enhanced version to processed folder
        await this.saveProcessedPost(post);
      }
      
      // Generate TSX blog page
      await BlogGenerator.saveBlogPage(post);
      
      // Update the post status
      post.status = 'published';
      
      // Store in memory
      this.processedPosts.set(post.slug, post);
      
      // Update blog index
      await this.updateBlogIndex();
      
      console.log(`✅ Successfully processed: ${post.title}`);
      return post;
      
    } catch (error) {
      console.error(`❌ Error processing file ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * Process multiple files in batch
   */
  async processFiles(filePaths: string[]): Promise<BlogPost[]> {
    const results: BlogPost[] = [];
    
    for (const filePath of filePaths) {
      try {
        const post = await this.processFile(filePath);
        results.push(post);
        
        // Add delay to avoid overwhelming AI services
        if (this.config.aiEnhancement && filePaths.length > 1) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        console.error(`Failed to process ${filePath}:`, error);
      }
    }
    
    return results;
  }

  /**
   * Process all files in a directory
   */
  async processDirectory(directoryPath: string): Promise<BlogPost[]> {
    try {
      const files = await fs.readdir(directoryPath);
      const markdownFiles = files
        .filter(file => file.endsWith('.md'))
        .map(file => path.join(directoryPath, file));
      
      console.log(`📁 Processing ${markdownFiles.length} files from ${directoryPath}`);
      
      return await this.processFiles(markdownFiles);
    } catch (error) {
      console.error(`Error processing directory ${directoryPath}:`, error);
      return [];
    }
  }

  /**
   * Save processed/enhanced post to processed folder
   */
  private async saveProcessedPost(post: BlogPost): Promise<void> {
    const processedDir = 'content/processed';
    await fs.ensureDir(processedDir);
    
    const filename = `${post.slug}.md`;
    const filePath = path.join(processedDir, filename);
    const markdownContent = MarkdownParser.createMarkdownFile(post);
    
    await fs.writeFile(filePath, markdownContent);
    console.log(`💾 Saved processed post: ${filePath}`);
  }

  /**
   * Handle file removal
   */
  async handleFileRemoval(filePath: string): Promise<void> {
    const filename = path.basename(filePath, '.md');
    const slug = MarkdownParser.generateSlug(filename);
    
    // Remove from memory
    this.processedPosts.delete(slug);
    
    // Remove generated blog page
    const blogPagePath = path.join('app/blog', slug);
    if (await fs.pathExists(blogPagePath)) {
      await fs.remove(blogPagePath);
      console.log(`🗑️ Removed blog page: ${blogPagePath}`);
    }
    
    // Remove from processed folder
    const processedPath = path.join('content/processed', `${slug}.md`);
    if (await fs.pathExists(processedPath)) {
      await fs.remove(processedPath);
      console.log(`🗑️ Removed processed file: ${processedPath}`);
    }
    
    // Update blog index
    await this.updateBlogIndex();
  }

  /**
   * Update the blog index page
   */
  private async updateBlogIndex(): Promise<void> {
    try {
      const posts = Array.from(this.processedPosts.values());
      await BlogGenerator.saveBlogIndex(posts);
      console.log(`📄 Updated blog index with ${posts.length} posts`);
    } catch (error) {
      console.error('Error updating blog index:', error);
    }
  }

  /**
   * Load existing published posts
   */
  async loadExistingPosts(): Promise<void> {
    try {
      const blogDir = 'app/blog';
      const entries = await fs.readdir(blogDir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== 'layout.tsx') {
          // Try to find corresponding processed file
          const processedFile = path.join('content/processed', `${entry.name}.md`);
          if (await fs.pathExists(processedFile)) {
            try {
              const post = await MarkdownParser.parseFile(processedFile);
              post.status = 'published';
              this.processedPosts.set(post.slug, post);
            } catch (error) {
              console.warn(`Could not load processed file for ${entry.name}:`, error);
            }
          }
        }
      }
      
      console.log(`📚 Loaded ${this.processedPosts.size} existing posts`);
    } catch (error) {
      console.error('Error loading existing posts:', error);
    }
  }

  /**
   * Get all processed posts
   */
  getAllPosts(): BlogPost[] {
    return Array.from(this.processedPosts.values());
  }

  /**
   * Get post by slug
   */
  getPost(slug: string): BlogPost | undefined {
    return this.processedPosts.get(slug);
  }

  /**
   * Get posts by tag
   */
  getPostsByTag(tag: string): BlogPost[] {
    return Array.from(this.processedPosts.values())
      .filter(post => post.tags.includes(tag));
  }

  /**
   * Get featured posts
   */
  getFeaturedPosts(): BlogPost[] {
    return Array.from(this.processedPosts.values())
      .filter(post => post.featured);
  }

  /**
   * Search posts by title or content
   */
  searchPosts(query: string): BlogPost[] {
    const searchTerm = query.toLowerCase();
    return Array.from(this.processedPosts.values())
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
  }

  /**
   * Get processing statistics
   */
  getStats(): {
    totalPosts: number;
    aiEnhancedPosts: number;
    publishedPosts: number;
    tags: string[];
  } {
    const posts = Array.from(this.processedPosts.values());
    const allTags = new Set<string>();
    
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