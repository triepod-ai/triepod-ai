import { Project } from '@/types/project'

export const cyberpunkChat: Project = {
  id: 'cyberpunk-chat',
  slug: 'cyberpunk-chat',
  title: 'Cyberpunk Chat',
  tagline: 'Max Headroom-inspired cyberpunk terminal chat interface with multiple conversation threads and offline resilience',
  description: 'A sophisticated terminal-based chat application that brings the aesthetic and spirit of Max Headroom to modern AI conversations. Features multiple conversation threads, offline fallback capability, persistent storage, and a circuit breaker pattern for API resilience. Built with a cyberpunk aesthetic including visual glitch effects and monochrome styling that captures the essence of 1980s digital rebellion.',
  category: 'experimental',
  status: 'development',
  featured: false,
  
  technologies: [
    { name: 'Python', category: 'language' },
    { name: 'OpenAI API', category: 'service' },
    { name: 'Rich Terminal UI', category: 'framework' },
    { name: 'SQLite', category: 'database' },
    { name: 'Circuit Breaker Pattern', category: 'tool' }
  ],
  
  features: [
    {
      icon: 'Zap',
      title: 'Multiple Thread Support',
      description: 'Create and switch between multiple conversation threads, each with its own context and history.'
    },
    {
      icon: 'Shield',
      title: 'Offline Resilience',
      description: 'Automatic fallback to offline mode when API is unavailable, with seamless recovery when connectivity returns.'
    },
    {
      icon: 'Server',
      title: 'Persistent Storage',
      description: 'Dual-backend persistence with SQLite primary and JSON backup ensures conversation history is never lost.'
    },
    {
      icon: 'Sparkles',
      title: 'Cyberpunk Aesthetic',
      description: 'Max Headroom-inspired UI with configurable glitch effects and monochrome cyberpunk styling.'
    },
    {
      icon: 'Code',
      title: 'Circuit Breaker Pattern',
      description: 'Intelligent API failure handling that prevents cascading failures and enables graceful degradation.'
    },
    {
      icon: 'Terminal',
      title: 'Command Interface',
      description: 'Intuitive command system for thread management, navigation, and application control.'
    }
  ],
  
  metrics: [
    {
      label: 'Reliability',
      value: '99.9%',
      description: 'System uptime with offline fallback'
    },
    {
      label: 'Response Time',
      value: 'Sub-second',
      description: 'Local operations performance'
    },
    {
      label: 'Compatibility',
      value: 'Python 3.8+',
      description: 'Minimum Python version required'
    },
    {
      label: 'Thread Capacity',
      value: 'Unlimited',
      description: 'Number of concurrent conversations'
    }
  ],
  
  githubUrl: 'https://github.com/triepod-ai/cyberpunk-chat',
  documentationUrl: '/projects/cyberpunk-chat/docs',
  
  seoTitle: 'Cyberpunk Chat - Max Headroom Terminal Interface | Bryan Thompson',
  seoDescription: 'Experience AI chat in cyberpunk style with this Max Headroom-inspired terminal interface. Features multiple threads, offline mode, and 80s aesthetics.',
  keywords: ['cyberpunk', 'chat interface', 'Max Headroom', 'terminal UI', 'AI chat', 'Python', 'OpenAI', 'retro computing', 'CLI application']
}