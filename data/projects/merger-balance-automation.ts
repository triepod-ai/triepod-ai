import { Project } from '@/types/project'

export const mergerBalanceAutomation: Project = {
  id: 'merger-balance-automation',
  slug: 'merger-balance-automation',
  title: 'Merger Balance Sheet Automation',
  tagline: 'AI-powered financial data reconciliation system for bank mergers with >90% accuracy using vector embeddings',
  description: 'A comprehensive solution for automating the integration of CSV data into Excel balance sheets for financial mergers. This tool addresses complex data matching challenges using three progressively sophisticated approaches: standard exact matching, enhanced logging with fuzzy matching, and vector-based semantic matching using AI embeddings. The vector-based version achieves over 90% fill rate compared to 37.5% with traditional exact matching, making it ideal for handling inconsistent naming conventions and missing data in financial mergers.',
  category: 'automation',
  status: 'development',
  featured: true,
  
  technologies: [
    { name: 'Python', category: 'language' },
    { name: 'PyTorch', category: 'framework' },
    { name: 'Sentence Transformers', category: 'framework' },
    { name: 'FAISS', category: 'database' },
    { name: 'SQLite', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'OpenPyXL', category: 'tool' },
    { name: 'Pandas', category: 'tool' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Vector Embeddings', category: 'tool' }
  ],
  
  features: [
    {
      icon: 'Cpu',
      title: 'AI-Powered Semantic Matching',
      description: 'Vector-based similarity matching using transformer models to handle inconsistent naming conventions and identify data relationships.'
    },
    {
      icon: 'Server',
      title: 'Multi-Version Architecture',
      description: 'Three implementations: standard exact matching, enhanced with comprehensive logging, and vector-based for maximum accuracy.'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Logging & Audit',
      description: 'Comprehensive audit trails with SQLite and PostgreSQL support for compliance and troubleshooting in financial environments.'
    },
    {
      icon: 'Zap',
      title: 'Automated CSV to Excel Integration',
      description: 'Processes multiple CSV files and updates balance sheets automatically with configurable matching thresholds.'
    },
    {
      icon: 'Code',
      title: 'Multi-Client Support',
      description: 'Handles data for different financial institutions with standardized folder structure and client-specific configurations.'
    },
    {
      icon: 'Sparkles',
      title: 'Predictive Value Filling',
      description: 'AI-powered prediction of missing values based on learned patterns from historical financial data.'
    }
  ],
  
  metrics: [
    {
      label: 'Data Fill Rate',
      value: '90%+',
      description: 'Successful data matching and filling rate'
    },
    {
      label: 'Performance Improvement',
      value: '40% → 90%',
      description: 'Improvement over traditional exact matching'
    },
    {
      label: 'Setup Time',
      value: '24 hours',
      description: 'Time to deployment and value'
    },
    {
      label: 'Matching Precision',
      value: '95%',
      description: 'Accuracy of semantic matching'
    }
  ],
  
  githubUrl: 'https://github.com/bthompson-nd/balancing_act',
  
  seoTitle: 'Merger Balance Sheet Automation - AI Financial Reconciliation by Bryan Thompson',
  seoDescription: 'AI-powered financial data reconciliation system for bank mergers achieving 90%+ accuracy using vector embeddings and semantic matching.',
  keywords: ['AI', 'financial automation', 'bank mergers', 'data reconciliation', 'vector embeddings', 'enterprise software', 'Python', 'machine learning']
}