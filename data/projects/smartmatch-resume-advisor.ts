import { Project } from '@/types/project'

export const smartmatchResumeAdvisor: Project = {
  id: 'smartmatch-resume-advisor',
  slug: 'smartmatch-resume-advisor',
  title: 'SmartMatch Resume Advisor',
  tagline: 'AI-powered resume analyzer providing intelligent feedback on job alignment using LangChain and OpenAI',
  description: 'SmartMatch Resume Advisor is an advanced AI system that analyzes resume-job description alignment using cutting-edge natural language processing. Built with LangChain and OpenAI&apos;s GPT models, it provides percentage-based match scoring, identifies missing keywords, and generates actionable improvement suggestions. The system uses FAISS vector embeddings for semantic similarity matching, going beyond simple keyword detection to understand contextual relevance. With a modern Next.js frontend and FastAPI backend, it delivers professional-grade analysis in under 5 seconds.',
  category: 'developer-tools',
  status: 'launched',
  featured: true,
  
  technologies: [
    { name: 'Python', category: 'language' },
    { name: 'FastAPI', category: 'framework' },
    { name: 'LangChain', category: 'framework' },
    { name: 'OpenAI GPT', category: 'service' },
    { name: 'Next.js 15', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Tailwind CSS v4', category: 'framework' },
    { name: 'FAISS Vector Store', category: 'database' },
    { name: 'Pydantic', category: 'framework' },
    { name: 'React Hook Form', category: 'framework' },
    { name: 'Zod', category: 'framework' }
  ],
  
  features: [
    {
      title: 'AI-Powered Analysis',
      description: 'Uses OpenAI GPT models and LangChain for intelligent resume-job matching with semantic understanding beyond keyword matching.'
    },
    {
      title: 'Fast Processing',
      description: 'Delivers comprehensive analysis results in under 5 seconds with parallel keyword extraction and optimized LLM chains.'
    },
    {
      title: 'Smart Suggestions',
      description: 'Generates actionable bullet point improvements with specific reasons and missing keyword integration recommendations.'
    },
    {
      title: 'Vector Similarity',
      description: 'FAISS vector embeddings enable semantic similarity matching for more accurate job alignment scoring.'
    },
    {
      title: 'Modern Interface',
      description: 'Clean, responsive Next.js interface with real-time progress indicators and mobile-optimized design.'
    },
    {
      title: 'Production Ready',
      description: 'Comprehensive error handling, rate limiting, CORS middleware, and automated deployment workflows.'
    }
  ],
  
  metrics: [
    { label: 'Performance', value: 'Sub-5 second analysis' },
    { label: 'Accuracy', value: '85%+ match alignment' },
    { label: 'Time to Value', value: 'Instant feedback' },
    { label: 'Enterprise Ready', value: 'Ready for enterprise scale' },
    { label: 'Success Rate', value: '95% completion rate' },
    { label: 'Efficiency', value: '90% faster than manual review' }
  ],
  
  githubUrl: 'https://github.com/BryanNsoh/ai-resume-analyzer-with-langchain',
  documentationUrl: '/projects/smartmatch-resume-advisor/docs',
  demoUrl: 'https://smartmatch-resume-advisor.vercel.app',
  
  thumbnail: '/images/projects/smartmatch-resume-advisor/thumbnail.png',
  screenshots: [
    '/images/projects/smartmatch-resume-advisor/interface.png',
    '/images/projects/smartmatch-resume-advisor/analysis-results.png',
    '/images/projects/smartmatch-resume-advisor/suggestions.png'
  ],
  
  seoTitle: 'SmartMatch Resume Advisor - AI Resume Analysis Tool by Bryan Thompson',
  seoDescription: 'AI-powered resume analyzer using LangChain and OpenAI. Get instant job alignment scoring, keyword analysis, and improvement suggestions.',
  keywords: ['AI', 'resume analyzer', 'job matching', 'LangChain', 'OpenAI', 'career tools', 'recruitment tech', 'developer tools']
}