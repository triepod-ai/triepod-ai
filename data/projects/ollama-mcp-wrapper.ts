import { Project } from '@/types/project'

export const ollamaMcpWrapper: Project = {
  id: 'ollama-mcp-wrapper',
  slug: 'ollama-mcp-wrapper',
  title: 'Ollama MCP Server',
  shortDescription: 'Model Context Protocol server enabling Claude to interact with local Ollama models seamlessly',
  fullDescription: `A sophisticated TypeScript-based MCP (Model Context Protocol) server that bridges Claude Desktop with local Ollama models. This integration enables Claude to access and utilize locally-hosted language models through a standardized protocol, providing enhanced privacy and control over AI model interactions.

The server implements a comprehensive set of Ollama operations through MCP tools, including model management, chat completions, and administrative functions. Built with enterprise-grade error handling and OpenAI-compatible APIs, it serves as a critical infrastructure component for local AI deployments.

This solution addresses the growing need for local AI model integration while maintaining the conversational capabilities that users expect from cloud-based AI assistants. It&apos;s particularly valuable for organizations requiring data privacy, offline capabilities, or specialized model deployments.`,
  category: 'developer-tools',
  status: 'development',
  featured: true,
  
  technologies: [
    'TypeScript',
    'Node.js',
    'Model Context Protocol',
    'Ollama',
    'Axios',
    'JSON Schema'
  ],
  
  features: [
    {
      icon: 'Zap',
      title: 'Complete Ollama Integration',
      description: 'Full support for all standard Ollama operations including serve, create, pull, list, run, and model management commands.'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Error Handling',
      description: 'Robust error handling with proper McpError integration and detailed logging for production reliability.'
    },
    {
      icon: 'Code',
      title: 'OpenAI-Compatible API',
      description: 'Chat completion endpoint that mimics OpenAI&apos;s format, enabling seamless integration with existing applications.'
    },
    {
      icon: 'Globe',
      title: 'MCP Protocol Compliance',
      description: 'Fully compliant with Model Context Protocol specifications, ensuring compatibility with Claude Desktop and other MCP clients.'
    },
    {
      icon: 'Brain',
      title: 'Local Model Privacy',
      description: 'Enables private, local AI model usage while maintaining Claude&apos;s conversational interface and capabilities.'
    },
    {
      icon: 'Sparkles',
      title: 'Configurable Timeouts',
      description: 'Flexible timeout configuration for different model sizes and response requirements, with sensible defaults.'
    }
  ],
  
  metrics: {
    compatibility: '100% MCP compliant',
    apiCoverage: '10 Ollama operations',
    responseTime: 'Sub-second initialization',
    reliability: 'Enterprise-grade error handling'
  },
  
  links: {
    github: 'https://github.com/BryanNTGitHub/ollama-wrapper',
    documentation: '/projects/ollama-mcp-wrapper/docs'
  },
  
  images: {
    thumbnail: '/images/projects/ollama-mcp-wrapper/thumbnail.png',
    screenshots: [
      '/images/projects/ollama-mcp-wrapper/mcp-integration.png',
      '/images/projects/ollama-mcp-wrapper/chat-completion.png'
    ]
  },
  
  seo: {
    title: 'Ollama MCP Server - Local AI Integration by Bryan Thompson',
    description: 'TypeScript MCP server enabling Claude to interact with local Ollama models. Features OpenAI-compatible APIs, enterprise error handling, and complete Ollama integration.',
    keywords: ['MCP', 'Ollama', 'TypeScript', 'local AI', 'Model Context Protocol', 'Claude integration', 'OpenAI compatible', 'privacy', 'developer tools']
  }
}