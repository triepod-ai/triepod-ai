import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs-extra';
import { BlogConfig } from '@/types/blog';
import { BlogProcessor } from './blog-processor';

export class FileWatcher {
  private watcher: chokidar.FSWatcher | null = null;
  private processor: BlogProcessor;
  private config: BlogConfig;

  constructor(config: BlogConfig) {
    this.config = config;
    this.processor = new BlogProcessor(config);
  }

  /**
   * Start watching for file changes
   */
  async start(watchPath: string = 'content/drafts'): Promise<void> {
    if (this.watcher) {
      console.log('File watcher is already running');
      return;
    }

    console.log(`👀 Starting file watcher on: ${path.resolve(watchPath)}`);

    this.watcher = chokidar.watch(path.join(watchPath, '**/*.md'), {
      ignored: /(^|[\/\\])\../, // Ignore dotfiles
      persistent: true,
      ignoreInitial: false, // Process existing files on startup
    });

    this.watcher
      .on('add', (filePath) => this.handleFileAdded(filePath))
      .on('change', (filePath) => this.handleFileChanged(filePath))
      .on('unlink', (filePath) => this.handleFileRemoved(filePath))
      .on('error', (error) => console.error('File watcher error:', error));

    console.log('✅ File watcher started successfully');
  }

  /**
   * Stop watching for file changes
   */
  async stop(): Promise<void> {
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
      console.log('🛑 File watcher stopped');
    }
  }

  /**
   * Handle new file added
   */
  private async handleFileAdded(filePath: string): Promise<void> {
    console.log(`📁 New file detected: ${filePath}`);
    
    try {
      await this.processor.processFile(filePath);
      
      if (this.config.buildOnChange) {
        await this.triggerBuild();
      }
    } catch (error) {
      console.error(`Error processing new file ${filePath}:`, error);
    }
  }

  /**
   * Handle file changed
   */
  private async handleFileChanged(filePath: string): Promise<void> {
    console.log(`📝 File changed: ${filePath}`);
    
    try {
      await this.processor.processFile(filePath);
      
      if (this.config.buildOnChange) {
        await this.triggerBuild();
      }
    } catch (error) {
      console.error(`Error processing changed file ${filePath}:`, error);
    }
  }

  /**
   * Handle file removed
   */
  private async handleFileRemoved(filePath: string): Promise<void> {
    console.log(`🗑️ File removed: ${filePath}`);
    
    try {
      await this.processor.handleFileRemoval(filePath);
      
      if (this.config.buildOnChange) {
        await this.triggerBuild();
      }
    } catch (error) {
      console.error(`Error handling file removal ${filePath}:`, error);
    }
  }

  /**
   * Trigger Next.js build
   */
  private async triggerBuild(): Promise<void> {
    try {
      console.log('🔄 Triggering Next.js build...');
      
      // In development mode, Next.js will auto-rebuild
      // In production, you might want to trigger a deployment
      if (process.env.NODE_ENV === 'production') {
        // Trigger your deployment process here
        // e.g., webhook to Vercel, GitHub Actions, etc.
        console.log('📦 Production build trigger would go here');
      } else {
        console.log('🔄 Development mode - Next.js will auto-rebuild');
      }
    } catch (error) {
      console.error('Build trigger error:', error);
    }
  }

  /**
   * Process all existing files in the watch directory
   */
  async processExistingFiles(watchPath: string = 'content/drafts'): Promise<void> {
    try {
      const files = await fs.readdir(watchPath);
      const markdownFiles = files.filter(file => file.endsWith('.md'));
      
      console.log(`📚 Processing ${markdownFiles.length} existing files...`);
      
      for (const file of markdownFiles) {
        const filePath = path.join(watchPath, file);
        await this.processor.processFile(filePath);
      }
      
      console.log('✅ Existing files processed');
    } catch (error) {
      console.error('Error processing existing files:', error);
    }
  }

  /**
   * Get watcher status
   */
  getStatus(): { isRunning: boolean; watchedPaths: string[] } {
    return {
      isRunning: this.watcher !== null,
      watchedPaths: this.watcher ? this.watcher.getWatched() as unknown as string[] : [],
    };
  }
}