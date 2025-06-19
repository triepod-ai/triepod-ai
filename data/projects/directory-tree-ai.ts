import { Project } from '@/types/project';

export const directoryTreeAI: Project = {
  id: 'directory-tree-ai',
  slug: 'directory-tree-ai',
  
  title: 'Directory Tree AI',
  tagline: 'Intelligent file system analysis and visualization',
  description: 'Advanced AI system for understanding, analyzing, and visualizing complex directory structures with semantic understanding of code relationships.',
  longDescription: `Directory Tree AI goes beyond simple file listing to provide deep insights into project 
  structure, dependencies, and architecture. Using advanced parsing and machine learning, it understands 
  code relationships, identifies patterns, and provides intelligent recommendations for organization and 
  refactoring.`,
  
  category: 'data-analysis',
  status: 'development',
  featured: true,
  order: 2,
  
  technologies: [
    { name: 'TypeScript', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'D3.js', category: 'framework' },
    { name: 'Neo4j', category: 'database' },
    { name: 'FastAPI', category: 'framework' },
    { name: 'React', category: 'framework' },
  ],
  
  architecture: 'Microservices architecture with real-time file system monitoring and graph-based relationship mapping',
  
  features: [
    {
      title: 'Semantic Code Analysis',
      description: 'Understands imports, exports, and dependencies across multiple languages',
      icon: 'Cpu'
    },
    {
      title: 'Interactive Visualization',
      description: 'Beautiful, interactive tree visualizations with filtering and search',
      icon: 'GitBranch'
    },
    {
      title: 'Pattern Detection',
      description: 'Identifies common patterns, anti-patterns, and architectural issues',
      icon: 'Search'
    },
    {
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions for file organization and structure improvements',
      icon: 'Bulb'
    }
  ],
  
  keyBenefits: [
    'Instantly understand complex codebases',
    'Identify architectural issues and technical debt',
    'Optimize project structure for better maintainability',
    'Generate documentation from directory structure'
  ],
  
  startDate: '2025-06',
  
  seoTitle: 'Directory Tree AI - Intelligent File System Analysis',
  seoDescription: 'Advanced AI for analyzing and visualizing directory structures with semantic code understanding. Coming soon.',
  keywords: ['directory analysis', 'code visualization', 'file system AI', 'project structure', 'code organization']
};
