// Project type definitions for the portfolio site

export type ProjectStatus = 'concept' | 'planning' | 'development' | 'beta' | 'launched' | 'maintenance';

export type ProjectCategory = 'ai-research' | 'legal-tech' | 'accessibility' | 'data-analysis' | 'automation' | 'developer-tools' | 'experimental' | 'other';

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string; // Lucide icon name
}

export interface ProjectMetric {
  label: string;
  value: string | number;
  description?: string;
}

export interface ProjectTechnology {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'service';
  icon?: string;
}

export interface Project {
  // Core identification
  id: string;
  slug: string;
  
  // Basic information
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  
  // Categorization
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  order?: number; // For custom ordering
  
  // Visual assets
  heroImage?: string;
  thumbnail?: string;
  screenshots?: string[];
  
  // Technical details
  technologies: ProjectTechnology[];
  architecture?: string; // Brief architecture description
  
  // Features and capabilities
  features: ProjectFeature[];
  keyBenefits?: string[];
  
  // Results and metrics
  metrics?: ProjectMetric[];
  outcomes?: string[];
  testimonials?: {
    quote: string;
    author: string;
    role?: string;
  }[];
  
  // Links and resources
  demoUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  caseStudyUrl?: string;
  earlyAccessUrl?: string;
  
  // Timeline
  startDate?: string;
  launchDate?: string;
  lastUpdated?: string;
  
  // SEO and metadata
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export interface ProjectsPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  categories: {
    value: ProjectCategory;
    label: string;
    description: string;
  }[];
}
