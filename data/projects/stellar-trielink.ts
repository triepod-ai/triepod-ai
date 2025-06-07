import { Project } from '@/types/project'

export const stellarTrielink: Project = {
  id: 'stellar-trielink',
  slug: 'stellar-trielink',
  title: 'Stellar TrieLink',
  tagline: 'Unified middleware for LLM providers with performance optimization and caching',
  description: 'Stellar TrieLink is a sophisticated middleware solution that provides a unified interface for multiple Language Model providers. It serves as a centralized abstraction layer between applications and various LLM services like Ollama, OpenAI, and local models.',
  longDescription: 'Stellar TrieLink is a sophisticated middleware solution that provides a unified interface for multiple Language Model providers. It serves as a centralized abstraction layer between applications and various LLM services like Ollama, OpenAI, and local models. The system features advanced performance optimization through intelligent caching, content chunking, and resource monitoring. Built with TypeScript and Express, it offers OpenAI-compatible REST endpoints while adding powerful operational features like health monitoring, performance analytics, and adaptive processing capabilities.',
  category: 'enterprise',
  status: 'development',
  featured: true,
  
  technologies: [
    { name: 'TypeScript', category: 'language' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Express', category: 'framework' },
    { name: 'Docker', category: 'tool' },
    { name: 'Redis', category: 'database' },
    { name: 'Ollama', category: 'service' },
    { name: 'OpenAI API', category: 'service' },
    { name: 'Winston', category: 'tool' }
  ],
  
  features: [
    {
      icon: 'Zap',
      title: 'Unified API Interface',
      description: 'Standardized REST API with OpenAI-compatible endpoints for seamless integration across multiple LLM providers.'
    },
    {
      icon: 'Shield',
      title: 'Advanced Caching System',
      description: 'Memory-efficient caching with TTL policies, automatic eviction, and intelligent cache hit optimization for reduced API costs.'
    },
    {
      icon: 'Brain',
      title: 'Content Chunking',
      description: 'Intelligent content splitting with context preservation through overlapping boundaries for processing large documents.'
    },
    {
      icon: 'Database',
      title: 'Multi-Provider Support',
      description: 'Adapters for Ollama, OpenAI, and local models with consistent interface and automatic failover capabilities.'
    },
    {
      icon: 'Sparkles',
      title: 'Performance Monitoring',
      description: 'Real-time tracking of metrics, memory usage, GPU utilization, and automated optimization recommendations.'
    },
    {
      icon: 'Globe',
      title: 'Production Ready',
      description: 'Docker containerization, health checks, graceful shutdown handling, and comprehensive error management.'
    }
  ],
  
  metrics: [
    { label: 'Performance', value: '10x faster response' },
    { label: 'Cost Reduction', value: '60% API cost savings' },
    { label: 'Reliability', value: '99.9% uptime' },
    { label: 'Compatibility', value: 'OpenAI-compatible' }
  ],
  
  githubUrl: 'https://github.com/bryanthompson/stellar_trielink',
  documentationUrl: '/projects/stellar-trielink/docs',
  
  thumbnail: '/images/projects/stellar-trielink/thumbnail.png',
  screenshots: [
    '/images/projects/stellar-trielink/architecture-diagram.png',
    '/images/projects/stellar-trielink/performance-dashboard.png'
  ],
  
  seoTitle: 'Stellar TrieLink - Unified LLM Middleware by Bryan Thompson',
  seoDescription: 'Enterprise-grade middleware for Language Model providers with performance optimization, caching, and unified API interface.',
  keywords: ['AI', 'LLM', 'middleware', 'API', 'caching', 'performance', 'OpenAI', 'Ollama', 'TypeScript', 'enterprise']
}