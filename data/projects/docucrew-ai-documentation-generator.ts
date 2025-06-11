import { Project } from '@/types/project'

export const docucrewAiDocumentationGenerator: Project = {
  id: 'docucrew-ai-documentation-generator',
  slug: 'docucrew-ai-documentation-generator',
  title: 'DocuCrew - AI Documentation Generator',
  tagline: 'Multi-agent AI system that automatically generates comprehensive documentation for GitHub repositories',
  description: 'DocuCrew is an intelligent multi-agent system that revolutionizes software documentation by automatically generating comprehensive, professional-grade documentation for GitHub repositories. Using CrewAI&apos;s collaborative agent framework, five specialized AI agents work together to analyze code, document APIs, create usage examples, and produce polished documentation. The system features real-time progress tracking through a beautiful Next.js interface, allowing users to watch AI agents collaborate in real-time. With deep code analysis capabilities and pattern recognition, DocuCrew produces export-ready markdown documentation that saves development teams hours of manual work while ensuring consistent, high-quality documentation standards.',
  category: 'developer-tools',
  status: 'launched',
  featured: true,
  
  technologies: [
    { name: 'CrewAI', category: 'framework' },
    { name: 'LangChain', category: 'framework' },
    { name: 'FastAPI', category: 'framework' },
    { name: 'Python 3.11+', category: 'language' },
    { name: 'Next.js 14', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Tailwind CSS', category: 'framework' },
    { name: 'WebSocket', category: 'tool' },
    { name: 'OpenAI GPT-4', category: 'service' }
  ],
  
  features: [
    {
      title: 'Multi-Agent Collaboration',
      description: 'Five specialized AI agents work together: Code Analyzer, API Documenter, README Writer, Example Creator, and Editor for comprehensive documentation generation.'
    },
    {
      title: 'Real-time Progress Tracking',
      description: 'Beautiful visualization of AI workflow with WebSocket-powered real-time updates showing each agent&apos;s progress and activities.'
    },
    {
      title: 'Deep Code Analysis',
      description: 'Advanced pattern recognition and repository structure analysis with GitHub API integration for both public and private repositories.'
    },
    {
      title: 'Professional Output',
      description: 'Export-ready markdown documentation with consistent formatting, API references, usage examples, and comprehensive project overviews.'
    },
    {
      title: 'Interactive Web Interface',
      description: 'Modern Next.js 14 frontend with TypeScript, featuring intuitive repository input and beautiful progress visualization.'
    }
  ],
  
  metrics: [
    { label: 'Time to Value', value: '5 minutes' },
    { label: 'Automation', value: '100% automated' },
    { label: 'Coverage', value: 'Full documentation suite' },
    { label: 'Compatibility', value: 'Any GitHub repository' },
    { label: 'Performance', value: 'Real-time generation' }
  ],
  
  githubUrl: 'https://github.com/triepod/docucrew-ai-documentation-generator',
  documentationUrl: '/projects/docucrew-ai-documentation-generator/docs',
  
  thumbnail: '/images/projects/docucrew-ai-documentation-generator/thumbnail.png',
  screenshots: [
    '/images/projects/docucrew-ai-documentation-generator/screenshot-1.png',
    '/images/projects/docucrew-ai-documentation-generator/screenshot-2.png'
  ],
  
  seoTitle: 'DocuCrew - AI Documentation Generator | Triepod.AI',
  seoDescription: 'Intelligent multi-agent system that automatically generates comprehensive documentation for GitHub repositories using CrewAI. Save hours with AI-powered documentation.',
  keywords: ['AI Documentation', 'CrewAI', 'Multi-Agent System', 'GitHub Integration', 'Automatic Documentation', 'Software Documentation', 'Developer Tools', 'Code Analysis']
}