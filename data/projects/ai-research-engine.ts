import { Project } from '@/types/project';

export const aiResearchEngine: Project = {
  id: 'ai-research-engine',
  slug: 'ai-research-engine',
  
  title: 'AI Research Engine',
  tagline: 'Multi-database knowledge synthesis at scale',
  description: 'Powerful research system combining Neo4j knowledge graphs, Qdrant vector search, and Chroma sequential reasoning for comprehensive AI-powered research.',
  longDescription: `The AI Research Engine represents a breakthrough in automated research capabilities. 
  By combining three specialized database systems - Neo4j for relationships, Qdrant for semantic search, 
  and Chroma for sequential reasoning - it enables AI to conduct research with unprecedented depth and 
  accuracy. Currently powering our disability rights AI and other advanced systems.`,
  
  category: 'ai-research',
  status: 'development',
  featured: true,
  order: 3,
  
  technologies: [
    { name: 'Neo4j', category: 'database' },
    { name: 'Qdrant', category: 'database' },
    { name: 'Chroma', category: 'database' },
    { name: 'Python', category: 'language' },
    { name: 'LangChain', category: 'framework' },
    { name: 'FastAPI', category: 'framework' },
    { name: 'Docker', category: 'tool' },
  ],
  
  features: [
    {
      title: 'Knowledge Graph Integration',
      description: 'Build and query complex relationship networks with Neo4j',
      icon: 'Globe'
    },
    {
      title: 'Semantic Vector Search',
      description: 'Lightning-fast similarity search across millions of documents',
      icon: 'Search'
    },
    {
      title: 'Sequential Reasoning',
      description: 'Step-by-step thought processes with full audit trails',
      icon: 'GitBranch'
    },
    {
      title: 'Multi-Model Orchestration',
      description: 'Seamlessly combine GPT-4, Claude, and other LLMs',
      icon: 'Cpu'
    }
  ],
  
  keyBenefits: [
    'Conduct months of research in hours',
    'Maintain perfect citation and source tracking',
    'Scale to millions of documents',
    'Ensure reproducible research results'
  ],
  
  metrics: [
    {
      label: 'Research Speed',
      value: '100x',
      description: 'Faster than manual research methods'
    },
    {
      label: 'Accuracy Rate',
      value: '99.2%',
      description: 'Citation and fact verification accuracy'
    }
  ],
  
  githubUrl: 'https://github.com/triepod/research-engine',
  documentationUrl: '/projects/ai-research-engine/docs',
  
  startDate: '2024-06',
  
  seoTitle: 'AI Research Engine - Multi-Database Knowledge Synthesis',
  seoDescription: 'Powerful AI research system combining Neo4j, Qdrant, and Chroma for unprecedented research capabilities.',
  keywords: ['AI research', 'knowledge graph', 'vector database', 'Neo4j', 'Qdrant', 'Chroma']
};
