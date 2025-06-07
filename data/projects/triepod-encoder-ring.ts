import { Project } from '@/types/project'

export const triepodEncoderRing: Project = {
  id: 'triepod-encoder-ring',
  slug: 'triepod-encoder-ring',
  title: 'Triepod Encoder Ring',
  tagline: 'Cyberpunk-themed email address generator with deterministic encoding for unique digital identities',
  description: `The Triepod Encoder Ring is a sophisticated email address generation system that creates unique, cyberpunk-themed email identities using deterministic encoding algorithms. This tool transforms ordinary email parts into dystopian-style identifiers through seed-based substitution ciphers, making it perfect for creating memorable yet secure email addresses for various digital personas.

Built with security and uniqueness in mind, the system uses SHA256 hashing to ensure deterministic results while maintaining the aesthetic appeal of cyberpunk nomenclature. Each generated email follows the pattern: {botid}-{noid}-{vector}-{encoded_email_part}@triepod.ai, creating instantly recognizable yet unique identifiers.

The project features comprehensive logging, cross-platform compatibility with ANSI color support, and a robust encoding system that prevents conflicts while maintaining readability. It's particularly useful for developers, security researchers, and anyone needing memorable email addresses with a distinctive cyberpunk aesthetic.`,
  category: 'experimental',
  status: 'launched',
  featured: false,
  
  technologies: [
    { name: 'Python', category: 'language' },
    { name: 'SHA256', category: 'tool' },
    { name: 'Colorama', category: 'tool' },
    { name: 'Deterministic Algorithms', category: 'tool' },
    { name: 'Cryptographic Hashing', category: 'tool' }
  ],
  
  features: [
    {
      icon: 'Zap',
      title: 'Deterministic Generation',
      description: 'Uses SHA256 hashing to ensure the same input always produces the same unique email address.'
    },
    {
      icon: 'Shield',
      title: 'Cyberpunk Encoding',
      description: 'Transforms text using leetspeak-style substitutions (a→4, e→3, i→1) for dystopian aesthetics.'
    },
    {
      icon: 'Code',
      title: 'Structured Logging',
      description: 'Comprehensive logging system tracks all email generation activities with timestamps and error handling.'
    },
    {
      icon: 'Sparkles',
      title: 'Cross-Platform Compatibility',
      description: 'ANSI color support with Colorama ensures consistent cyberpunk styling across Windows, Mac, and Linux.'
    }
  ],
  
  metrics: [
    {
      label: 'Generation Time',
      value: 'Instant',
      description: 'Email generation speed'
    },
    {
      label: 'Accuracy',
      value: '100%',
      description: 'Deterministic encoding reliability'
    },
    {
      label: 'Performance',
      value: 'Sub-second',
      description: 'Execution time for generation'
    }
  ],
  
  githubUrl: 'https://github.com/disler/triepod.ai_encoder_ring',
  
  seoTitle: 'Triepod Encoder Ring - Cyberpunk Email Generator | Bryan Thompson',
  seoDescription: 'Generate unique cyberpunk-themed email addresses with deterministic encoding. Perfect for developers and security researchers.',
  keywords: ['email generator', 'cyberpunk', 'deterministic algorithms', 'Python', 'SHA256', 'developer tools', 'encoding']
}