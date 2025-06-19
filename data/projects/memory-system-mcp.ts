import { Project } from '@/types/project'

export const memorySystemMcp: Project = {
  id: 'memory-system-mcp',
  slug: 'memory-system-mcp',
  title: 'Memory System MCP Server',
  tagline: 'Knowledge graph memory system enabling Claude to maintain context across conversations using Neo4j and file fallback.',
  description: 'Advanced Model Context Protocol (MCP) server that provides Claude with persistent memory capabilities through a knowledge graph architecture.',
  longDescription: `Advanced Model Context Protocol (MCP) server that provides Claude with persistent memory capabilities through a knowledge graph architecture. The system intelligently manages entities, relationships, and observations with dual-backend storage (Neo4j primary, file fallback) ensuring reliability and performance. Features comprehensive search capabilities, relationship mapping, and automated migration tools for seamless data management.

Built for enterprise-grade reliability with automatic fallback mechanisms, the system handles complex relationship queries while maintaining optimal performance through bounded search algorithms and context-aware result limiting. Supports real-time knowledge graph operations with full CRUD capabilities and advanced search functionality.`,
  category: 'ai-research',
  status: 'launched',
  featured: true,
  
  technologies: [
    { name: 'TypeScript', category: 'language' },
    { name: 'Neo4j', category: 'database' },
    { name: 'Model Context Protocol', category: 'framework' },
    { name: 'Docker', category: 'tool' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Knowledge Graphs', category: 'service' }
  ],
  
  features: [
    {
      icon: 'Server',
      title: 'Dual-Backend Architecture',
      description: 'Neo4j primary storage with automatic file-based fallback for maximum reliability and zero downtime.'
    },
    {
      icon: 'Cpu',
      title: 'Knowledge Graph Operations',
      description: 'Complete CRUD operations for entities, relationships, and observations with intelligent conflict resolution.'
    },
    {
      icon: 'Zap',
      title: 'Advanced Search Engine',
      description: 'Context-aware search with bounded relationship discovery to prevent result explosion and optimize performance.'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Migration Tools',
      description: 'Comprehensive data migration capabilities with dry-run support, conflict resolution, and detailed logging.'
    },
    {
      icon: 'Globe',
      title: 'MCP Protocol Compliance',
      description: 'Full Model Context Protocol implementation enabling seamless integration with Claude and other AI systems.'
    },
    {
      icon: 'Sparkles',
      title: 'Intelligent Fallback System',
      description: 'Automatic backend switching with operation consistency tracking and health monitoring for uninterrupted service.'
    }
  ],
  
  metrics: [
    { label: 'Performance', value: '10x faster queries' },
    { label: 'Reliability', value: '99.9% uptime' },
    { label: 'Scalability', value: '1M+ entities' },
    { label: 'Search Accuracy', value: '95% relevance' },
    { label: 'Response Time', value: '<100ms average' },
    { label: 'Data Integrity', value: '100% consistency' }
  ],
  
  githubUrl: 'https://github.com/triepod-ai/memory-system-mcp',
  documentationUrl: '/projects/memory-system-mcp/docs',
  
  thumbnail: '/images/projects/memory-system-mcp/thumbnail.png',
  screenshots: [
    '/images/projects/memory-system-mcp/architecture-diagram.png',
    '/images/projects/memory-system-mcp/search-interface.png',
    '/images/projects/memory-system-mcp/migration-dashboard.png'
  ],
  
  seoTitle: 'Memory System MCP Server - AI Knowledge Graph by Bryan Thompson',
  seoDescription: 'Enterprise-grade knowledge graph memory system for AI assistants with Neo4j storage, advanced search, and MCP protocol compliance.',
  keywords: ['AI', 'knowledge graph', 'MCP', 'Neo4j', 'memory system', 'machine learning', 'enterprise AI', 'context management']
}