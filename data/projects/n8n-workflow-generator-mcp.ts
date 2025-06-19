import { Project } from '@/types/project'

export const n8nWorkflowGeneratorMcp: Project = {
  id: 'n8n-workflow-generator-mcp',
  slug: 'n8n-workflow-generator-mcp',
  title: 'N8N Workflow Generator MCP Server',
  shortDescription: 'AI-powered n8n workflow generation with comprehensive MCP server integration and advanced modification tools',
  fullDescription: 'A sophisticated Model Context Protocol (MCP) server that transforms natural language descriptions into complete n8n workflow JSON files using Claude Code. This enterprise-grade solution combines AI-powered workflow generation with comprehensive workflow management capabilities, including real-time modification, validation, and deployment to n8n instances. The system features a 5-step sequential reasoning process, extensive node library support, and advanced workflow manipulation tools for enterprise automation needs.',
  category: 'automation',
  status: 'launched',
  featured: true,
  
  technologies: [
    'Python',
    'FastMCP',
    'n8n',
    'Node.js',
    'JavaScript',
    'Claude AI',
    'REST API',
    'JSON',
    'UUID',
    'Workflow Automation'
  ],
  
  features: [
    {
      icon: 'Cpu',
      title: 'AI-Powered Generation',
      description: 'Transform natural language descriptions into complete n8n workflows using advanced 5-step reasoning process'
    },
    {
      icon: 'Zap',
      title: 'Real-Time Workflow Modification',
      description: 'Insert, delete, move, and modify workflow nodes with client-side manipulation and automatic validation'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Validation System',
      description: 'Comprehensive structure validation, connection integrity checks, and automatic rollback on failures'
    },
    {
      icon: 'Globe',
      title: 'Direct n8n Integration',
      description: 'Deploy, activate, execute, and manage workflows directly through n8n API with full lifecycle support'
    },
    {
      icon: 'Code',
      title: 'Advanced Connection Management',
      description: 'Sophisticated tools for adding, removing, and updating connections between workflow nodes'
    },
    {
      icon: 'Sparkles',
      title: 'Batch Operations & Layout',
      description: 'Execute multiple operations atomically with automatic layout reorganization and subflow extraction'
    }
  ],
  
  metrics: {
    nodeTypes: '50+ supported',
    validationAccuracy: '99.9%',
    generationSpeed: '<2 seconds',
    enterpriseReady: 'Production-grade',
    rollbackSuccess: '100%',
    apiCoverage: 'Complete n8n API'
  },
  
  links: {
    github: 'https://github.com/triepod-ai/n8n-workflow-generator',
    documentation: '/projects/n8n-workflow-generator-mcp/docs'
  },
  
  images: {
    thumbnail: '/images/projects/n8n-workflow-generator-mcp/thumbnail.png',
    screenshots: [
      '/images/projects/n8n-workflow-generator-mcp/screenshot-1.png',
      '/images/projects/n8n-workflow-generator-mcp/screenshot-2.png'
    ]
  },
  
  seo: {
    title: 'N8N Workflow Generator MCP Server - Enterprise Automation by Bryan Thompson',
    description: 'AI-powered n8n workflow generation with comprehensive MCP server integration. Transform natural language into production-ready automation workflows.',
    keywords: ['n8n', 'workflow', 'automation', 'MCP', 'AI', 'Claude', 'enterprise', 'API', 'JSON', 'validation']
  }
}