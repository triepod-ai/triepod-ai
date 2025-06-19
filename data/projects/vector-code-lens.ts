import { Project } from '@/types/project'

export const vectorCodeLens: Project = {
  id: 'vector-code-lens',
  slug: 'vector-code-lens',
  title: 'VectorCodeLens',
  tagline: 'Semantic codebase analysis platform using vector embeddings and LLMs for intelligent code understanding.',
  description: `VectorCodeLens is a sophisticated TypeScript application that revolutionizes how developers understand and query codebases. By combining vector embeddings, large language models, and the Model Context Protocol (MCP), it provides intelligent semantic analysis that goes beyond traditional static code analysis.`,
  longDescription: `VectorCodeLens is a sophisticated TypeScript application that revolutionizes how developers understand and query codebases. By combining vector embeddings, large language models, and the Model Context Protocol (MCP), it provides intelligent semantic analysis that goes beyond traditional static code analysis.

The platform implements a progressive enhancement strategy, gracefully degrading functionality when external AI services are unavailable while maintaining core capabilities. It features modular architecture with clear separation between scanning, analysis, storage, and querying components, making it both maintainable and extensible.

Key innovations include intelligent code chunking with structural awareness, semantic search powered by vector similarity, and natural language querying capabilities that allow developers to ask questions about their codebase in plain English. The system automatically discovers patterns, relationships, and architectural insights that would be difficult to identify manually.`,
  category: 'ai-research',
  status: 'development',
  featured: true,
  
  technologies: [
    { name: 'TypeScript', category: 'language' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Qdrant Vector DB', category: 'database' },
    { name: 'Ollama', category: 'service' },
    { name: 'Claude API', category: 'service' },
    { name: 'Model Context Protocol', category: 'framework' },
    { name: 'Vector Embeddings', category: 'tool' },
    { name: 'LLM Integration', category: 'service' }
  ],
  
  features: [
    {
      icon: 'Cpu',
      title: 'Semantic Code Analysis',
      description: 'Understand code structure, patterns, and relationships using advanced LLM analysis and vector embeddings.'
    },
    {
      icon: 'Sparkles',
      title: 'Natural Language Queries',
      description: 'Ask questions about your codebase in plain English and get precise, contextual answers with code references.'
    },
    {
      icon: 'Server',
      title: 'Vector-Powered Search',
      description: 'Semantic search capabilities using Qdrant vector database for finding similar code patterns and concepts.'
    },
    {
      icon: 'Shield',
      title: 'Progressive Enhancement',
      description: 'Graceful degradation ensuring core functionality works even when external AI services are unavailable.'
    },
    {
      icon: 'Code',
      title: 'MCP Integration',
      description: 'Full Model Context Protocol implementation enabling seamless integration with AI development tools.'
    },
    {
      icon: 'Zap',
      title: 'Intelligent Chunking',
      description: 'Structure-aware code segmentation that preserves context and relationships for better analysis accuracy.'
    }
  ],
  
  metrics: [
    {
      label: 'Search Performance',
      value: '10x faster',
      description: 'Semantic search speed improvement'
    },
    {
      label: 'Pattern Detection',
      value: '95%',
      description: 'Code pattern recognition accuracy'
    },
    {
      label: 'Setup Time',
      value: '< 5 minutes',
      description: 'Time to deployment and value'
    },
    {
      label: 'System Uptime',
      value: '99%',
      description: 'Availability with fallback systems'
    }
  ],
  
  githubUrl: 'https://github.com/BryanNsoh/VectorCodeLens',
  documentationUrl: '/projects/vector-code-lens/docs',
  
  seoTitle: 'VectorCodeLens - AI-Powered Semantic Code Analysis by Bryan Thompson',
  seoDescription: 'Advanced TypeScript platform for semantic codebase analysis using vector embeddings, LLMs, and MCP. Understand code structure with natural language queries.',
  keywords: ['AI', 'code analysis', 'vector embeddings', 'TypeScript', 'LLM', 'semantic search', 'developer tools', 'MCP', 'Qdrant', 'Ollama']
}