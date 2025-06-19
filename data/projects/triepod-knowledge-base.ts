import { Project } from '@/types/project'

export const triepodKnowledgeBase: Project = {
  id: 'triepod-knowledge-base',
  slug: 'triepod-knowledge-base',
  title: 'Triepod.ai Knowledge Base Platform',
  tagline: 'Enterprise RAG system with vector database integration for semantic document search and AI-powered insights',
  description: 'A sophisticated knowledge management platform built with React and Node.js that combines PostgreSQL and Pinecone vector databases for advanced document processing and retrieval.',
  longDescription: 'The system features semantic search capabilities, Hugging Face model integration, and comprehensive document analysis with chunking, embedding generation, and intelligent tagging. Designed for enterprise environments requiring efficient knowledge discovery and AI-powered document insights.',
  category: 'ai-research',
  status: 'development',
  featured: true,
  order: 1,
  
  technologies: [
    { name: 'React', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Express.js', category: 'framework' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'Pinecone', category: 'service' },
    { name: 'OpenAI', category: 'service' },
    { name: 'Hugging Face', category: 'service' },
    { name: 'Supabase', category: 'service' },
    { name: 'Vite', category: 'tool' },
    { name: 'TailwindCSS', category: 'framework' }
  ],
  
  features: [
    {
      icon: 'Server',
      title: 'Hybrid Vector Database',
      description: 'Combines PostgreSQL for structured data with Pinecone for high-performance vector search and semantic similarity matching.'
    },
    {
      icon: 'Cpu',
      title: 'Advanced Document Processing',
      description: 'Intelligent chunking with heading structure analysis, semantic tag extraction, and multi-language support.'
    },
    {
      icon: 'Zap',
      title: 'Real-time Search & RAG',
      description: 'Lightning-fast semantic search with retrieval-augmented generation for contextual AI responses.'
    },
    {
      icon: 'Code',
      title: 'Hugging Face Integration',
      description: 'Direct API integration with Hugging Face Spaces for text generation, summarization, and image processing.'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Secure API token management, rate limiting, and comprehensive logging for enterprise compliance.'
    },
    {
      icon: 'Sparkles',
      title: 'Intelligent Analytics',
      description: 'Token counting, processing metrics, and detailed analytics for cost optimization and performance insights.'
    }
  ],
  
  metrics: [
    {
      label: 'Search Accuracy',
      value: '95%',
      description: 'Semantic search precision rate'
    },
    {
      label: 'Token Optimization',
      value: '60%',
      description: 'Cost reduction through optimization'
    },
    {
      label: 'Setup Time',
      value: '2 hours',
      description: 'Time to deployment and value'
    },
    {
      label: 'System Uptime',
      value: '99.9%',
      description: 'Enterprise-grade reliability'
    }
  ],
  
  githubUrl: 'https://github.com/bryan308/triepod-knowledge-base',
  documentationUrl: '/projects/triepod-knowledge-base/docs',
  demoUrl: 'https://knowledge.triepod.ai',
  
  seoTitle: 'Triepod.ai Knowledge Base Platform - Enterprise RAG System by Bryan Thompson',
  seoDescription: 'Advanced knowledge management platform with vector database integration, semantic search, and AI-powered document processing for enterprise environments.',
  keywords: ['AI', 'RAG', 'vector database', 'semantic search', 'knowledge management', 'enterprise', 'document processing', 'OpenAI', 'Pinecone']
}