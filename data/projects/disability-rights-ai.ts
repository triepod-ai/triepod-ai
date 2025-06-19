import { Project } from '@/types/project';

export const disabilityRightsAI: Project = {
  id: 'disability-rights-ai',
  slug: 'disability-rights-ai',
  
  title: 'Business Legal AI Assistant',
  tagline: 'Transform complex business legal requirements into comprehensive documentation',
  description: 'Advanced AI technology that creates enterprise-grade legal documentation and compliance materials at 95% less cost than traditional legal services.',
  longDescription: `Our flagship AI system helps businesses create comprehensive, legally-sound documentation 
  for compliance and business processes. Using advanced multi-framework analysis and professional tone 
  optimization, the system has proven its worth with documented $16,000+ value creation in real-world 
  business applications.`,
  
  category: 'legal-tech',
  status: 'beta',
  featured: true,
  order: 1,
  
  technologies: [
    { name: 'GPT-4', category: 'framework' },
    { name: 'Claude 3', category: 'framework' },
    { name: 'Neo4j', category: 'database' },
    { name: 'Qdrant', category: 'database' },
    { name: 'Chroma', category: 'database' },
    { name: 'Next.js', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Python', category: 'language' },
  ],
  
  architecture: 'Multi-stage AI pipeline with knowledge graph integration and vector search capabilities',
  
  features: [
    {
      title: 'Multi-Framework Business Analysis',
      description: 'Analyzes business requirements through multiple legal and regulatory frameworks simultaneously',
      icon: 'Scale'
    },
    {
      title: 'Professional Document Generation',
      description: 'Creates comprehensive, professional documents that support business compliance and operations',
      icon: 'FileText'
    },
    {
      title: 'Information Organization',
      description: 'Automatically structures and presents business information in compelling, professional format',
      icon: 'FolderOpen'
    },
    {
      title: 'Rapid Turnaround',
      description: 'Generate comprehensive documentation in under 48 hours',
      icon: 'Zap'
    }
  ],  
  keyBenefits: [
    '95% cost reduction compared to traditional legal services',
    '85% success rate in achieving voluntary compliance',
    'Zero litigation required in proven cases',
    'Comprehensive documentation that protects your rights'
  ],
  
  metrics: [
    {
      label: 'Document Value Created',
      value: '$16,000+',
      description: 'Verified value of documentation produced in test cases'
    },
    {
      label: 'Success Rate',
      value: '85%',
      description: 'Cases achieving voluntary compliance without litigation'
    },
    {
      label: 'Cost Savings',
      value: '95%',
      description: 'Compared to traditional legal consultation fees'
    },
    {
      label: 'Turnaround Time',
      value: '< 48 hours',
      description: 'From case input to complete documentation'
    }
  ],
  
  outcomes: [
    'Achieved voluntary compliance in complex employment discrimination case',
    'Created documentation valued at $16,000 by legal standards',
    'Prevented need for costly litigation',
    'Empowered individuals to advocate effectively for their rights'
  ],
  
  caseStudyUrl: '/projects/disability-rights-ai/case-studies/16k-document',
  earlyAccessUrl: '/projects/disability-rights-ai/early-access',
  
  startDate: '2023-01',
  lastUpdated: '2025-06',
  
  seoTitle: 'Disability Rights AI Assistant - Transform Discrimination Cases into Results',
  seoDescription: 'Revolutionary AI technology creating enterprise-grade disability rights documentation at 95% less cost. Proven $16,000+ value creation. Join the waitlist.',
  keywords: ['disability rights', 'AI legal assistant', 'ADA compliance', 'discrimination documentation', 'legal AI']
};
