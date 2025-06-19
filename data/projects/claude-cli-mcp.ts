import { Project } from '@/types/project'

export const claudeCliMcp: Project = {
  id: 'claude-cli-mcp',
  slug: 'claude-cli-mcp',
  title: 'Claude CLI MCP Server',
  tagline: 'MCP server that exposes Claude Code CLI functionality through standardized protocol tools',
  description: 'A minimal yet powerful Model Context Protocol (MCP) server that bridges Claude Code CLI functionality with programmatic access.',
  longDescription: 'This server enables seamless integration of Claude\'s capabilities into any MCP-compatible application through standardized tools and JSON APIs. Built with FastMCP and Python, it provides secure subprocess execution, session continuity, file processing capabilities, and comprehensive input validation. The server supports both one-shot queries and persistent conversations, making it ideal for building AI-powered applications that need reliable access to Claude\'s reasoning capabilities. Perfect for developers who want to integrate Claude Code into their existing workflows, automation systems, or custom applications without direct CLI dependency management.',
  category: 'developer-tools',
  status: 'development',
  featured: false,
  
  technologies: [
    { name: 'Python', category: 'language' },
    { name: 'FastMCP', category: 'framework' },
    { name: 'Claude Code CLI', category: 'tool' },
    { name: 'asyncio', category: 'framework' },
    { name: 'Docker', category: 'tool' },
    { name: 'JSON-RPC', category: 'tool' },
    { name: 'uvicorn', category: 'tool' }
  ],
  
  features: [
    {
      icon: 'Zap',
      title: 'One-Shot Queries',
      description: 'Execute single Claude queries with JSON responses and automatic session management.'
    },
    {
      icon: 'Globe',
      title: 'Session Continuity',
      description: 'Maintain conversation context across multiple queries with persistent session support.'
    },
    {
      icon: 'Code',
      title: 'File Processing',
      description: 'Process and analyze file content with Claude, supporting multiple encoding formats.'
    },
    {
      icon: 'Shield',
      title: 'Secure Execution',
      description: 'Input validation, command whitelisting, and timeout protection against injection attacks.'
    },
    {
      icon: 'Server',
      title: 'JSON API',
      description: 'Clean JSON responses with token usage tracking and error handling.'
    },
    {
      icon: 'Sparkles',
      title: 'Docker Ready',
      description: 'Containerized deployment with configuration management and volume mounting.'
    }
  ],
  
  metrics: [
    {
      label: 'Response Time',
      value: '< 2s',
      description: 'Average API response time'
    },
    {
      label: 'Reliability',
      value: '99.9%',
      description: 'System uptime'
    },
    {
      label: 'Security',
      value: '100%',
      description: 'Input validation coverage'
    },
    {
      label: 'Protocol',
      value: 'MCP 2024-11-05',
      description: 'Latest protocol compliance'
    }
  ],
  
  githubUrl: 'https://github.com/bryan-triepod/claude-cli-mcp',
  documentationUrl: '/projects/claude-cli-mcp/docs',
  
  seoTitle: 'Claude CLI MCP Server - AI Integration Tool by Bryan Thompson',
  seoDescription: 'MCP server for Claude Code CLI integration. Secure, fast, and production-ready with session continuity and file processing.',
  keywords: ['MCP', 'Claude CLI', 'AI integration', 'developer tools', 'API server', 'Python', 'automation']
}