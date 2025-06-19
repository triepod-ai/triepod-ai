export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  category?: string;
  status: 'draft' | 'processed' | 'published';
  aiEnhanced?: boolean;
  originalFile?: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  category?: string;
  aiEnhanced?: boolean;
}

export interface BlogConfig {
  watchMode: boolean;
  aiEnhancement: boolean;
  autoPublish: boolean;
  buildOnChange: boolean;
  aiModel: 'claude' | 'deepseek';
  outputFormat: 'tsx' | 'mdx';
}

export interface AIEnhancementOptions {
  expandContent: boolean;
  improveSEO: boolean;
  generateTags: boolean;
  enhanceTone: boolean;
  addRelatedLinks: boolean;
  optimizeReadability: boolean;
}