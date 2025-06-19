// Export all blog utilities
export { BlogProcessor } from './blog-processor';
export { MarkdownParser } from './markdown-parser';
export { AIEnhancer } from './ai-enhancer';
export { BlogGenerator } from './blog-generator';
export { FileWatcher } from './file-watcher';

// Default configuration
export const DEFAULT_BLOG_CONFIG = {
  watchMode: true,
  aiEnhancement: true,
  autoPublish: false,
  buildOnChange: true,
  aiModel: 'claude' as const,
  outputFormat: 'tsx' as const,
};