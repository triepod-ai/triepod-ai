import { Project } from '@/types/project';

export const aiDrivenFarmAutomation: Project = {
  id: 'ai-driven-farm-automation',
  slug: 'ai-driven-farm-automation',
  
  title: 'AI-Driven Farm Automation',
  tagline: 'Precision agriculture for Mississippi catfish farming',
  description: 'Research initiative to automate catfish farm operations through IoT sensors, computer vision, and machine learning algorithms.',
  longDescription: 'Comprehensive automation system combining real-time environmental monitoring, predictive analytics for feeding optimization, and automated disease detection to improve profitability for Mississippi catfish farmers.',
  
  category: 'ai-research',
  status: 'development',
  featured: false,
  order: 1,
  
  technologies: [
    { name: 'Computer Vision', category: 'framework' },
    { name: 'IoT Sensors', category: 'tool' },
    { name: 'Machine Learning', category: 'framework' },
    { name: 'Python', category: 'language' },
    { name: 'TensorFlow', category: 'framework' },
    { name: 'NVIDIA GPU', category: 'tool' }
  ],
  
  features: [
    {
      title: 'Smart Pond Monitoring',
      description: 'Real-time water quality monitoring using IoT sensors for temperature, pH, oxygen levels, and fish behavior analysis',
      icon: 'BarChart3'
    },
    {
      title: 'Automated Feeding Optimization',
      description: 'AI algorithms optimize feeding schedules based on weather, water conditions, and fish appetite indicators',
      icon: 'Target'
    },
    {
      title: 'Disease Detection System',
      description: 'Computer vision system monitors fish health and detects early signs of disease or stress',
      icon: 'AlertTriangle'
    },
    {
      title: 'Profitability Analytics',
      description: 'Economic modeling to optimize operations for maximum profitability per pound of fish produced',
      icon: 'DollarSign'
    }
  ],
  
  metrics: [
    { label: 'Feed Cost Reduction', value: '15-20%', description: 'Projected savings through optimized feeding' },
    { label: 'Mortality Reduction', value: '25%', description: 'Early disease detection impact' },
    { label: 'Yield Improvement', value: '30%', description: 'Consistency in production outcomes' },
    { label: 'ROI Period', value: '18-30 mo', description: 'Payback period for technology investment' }
  ],
  
  keyBenefits: [
    'Helps small farms achieve large-farm efficiency',
    'Reduces manual labor requirements',
    'Improves environmental sustainability',
    'Provides data-driven decision making tools',
    'Preserves family farming operations'
  ],
  
  outcomes: [
    'Partnership with 5 Mississippi catfish farms for pilot testing',
    'Integration with existing farm management systems',
    'Training programs for farmer technology adoption',
    'Industry-wide best practices development'
  ],
  
  startDate: '2024-01-01',
  lastUpdated: '2025-06-21',
  
  seoTitle: 'AI-Driven Farm Automation Research | Mississippi Catfish Industry Innovation',
  seoDescription: 'Research project developing AI automation solutions for Mississippi catfish farms, improving profitability through smart monitoring and predictive analytics.',
  keywords: ['catfish farming', 'AI automation', 'precision agriculture', 'Mississippi research', 'farm technology']
};