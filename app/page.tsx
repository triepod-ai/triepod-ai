import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bryan Thompson - AI Implementation Specialist & Shepherd of Innovation',
  description: 'AI Implementation Specialist helping businesses unlock measurable value through practical AI solutions. Accessibility-first approach with proven methodologies.',
  keywords: ['AI implementation', 'AI consulting', 'accessibility AI', 'AI strategy', 'business automation', 'AI integration', 'AI ROI', 'ethical AI'],
  openGraph: {
    title: 'Bryan Thompson - AI Implementation Specialist & Shepherd of Innovation',
    description: 'Guide your organization through practical AI implementation with accessibility-first principles and measurable results.',
    type: 'website',
    siteName: 'Triepod AI Consulting',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Professional Transformation */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI Implementation & Strategic Guidance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Bryan Thompson<br />AI Developer & Business Analyst
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Business analyst with experience at PayPal and Fiserv, now focused on practical AI implementation. 
              I build AI solutions that solve real business problems, with a background in enterprise systems 
              and a commitment to making technology accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise & Approach */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Technical Background & Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience with AI implementation using various technologies, 
              with focus on accessibility-first development and practical applications.
            </p>
          </div>
          
          {/* Technical Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Technical Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Enterprise Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Real</div>
              <div className="text-sm text-muted-foreground">Business Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">WCAG</div>
              <div className="text-sm text-muted-foreground">Accessibility Focus</div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Areas - General Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              AI Implementation Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Areas where I can help with AI implementation and consultation. 
              Contact me to discuss your specific needs and explore possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">AI Strategy & Assessment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Evaluation of current processes and identification of AI opportunities. 
                Analysis of implementation possibilities and strategic planning.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Custom AI Development</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Building tailored AI solutions for specific business needs. 
                Focus on practical applications with accessibility considerations.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Integration & Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Guidance on integrating AI solutions with existing systems. 
                Consultation on best practices and accessibility compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Bryan - Authentic Background */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              About Bryan Thompson
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Background in software development and technical systems, with a growing focus 
              on practical AI implementation and accessibility.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground mb-4">
                  My journey into AI started from a practical problem-solving perspective. With experience 
                  in software development and technical systems, I found myself drawn to how AI could make 
                  technology more accessible and useful for everyday business needs.
                </p>
                <p className="text-muted-foreground mb-4">
                  As an amputee, I understand firsthand how technology can either create barriers or break 
                  them down. This lived experience shapes my approach to AI implementation - ensuring 
                  solutions work for everyone, not just some users.
                </p>
                <p className="text-muted-foreground">
                  I focus on practical applications over theoretical possibilities, helping businesses 
                  implement AI solutions that deliver real value while remaining accessible and 
                  understandable to the people who use them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Project Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Recent Project Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects focused on practical AI implementation and business automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Triepod.AI Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Personal project building an agentic RAG platform with contract-based plugin system. 
                Experimenting with vector database optimization and multi-LLM integration for workflow automation.
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Technologies:</strong> Python, OpenAI API, Pinecone, Docker
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">VectorCodeLens</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Side project creating semantic code search across large codebases using vector embeddings. 
                Learning experience with LLM abstraction layers and context-preserving chunking algorithms.
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Technologies:</strong> JavaScript, TypeScript, Qdrant, Node.js
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-3">Balancing Act</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Work project developing financial data reconciliation tools using semantic matching. 
                Applied machine learning techniques to improve cross-platform data matching accuracy.
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Technologies:</strong> Python, pandas, SentenceTransformers, PostgreSQL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills - Honest Assessment */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Technical Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with regularly, from development to AI integration.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold text-lg mb-4">AI & Machine Learning</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• OpenAI API, Claude API integration</div>
                  <div>• Vector databases (Qdrant, Pinecone, Chroma)</div>
                  <div>• Semantic search and RAG implementation</div>
                  <div>• LLM workflow automation</div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold text-lg mb-4">Development & Infrastructure</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Python, JavaScript, TypeScript, SQL</div>
                  <div>• PostgreSQL, MongoDB database management</div>
                  <div>• Docker, cloud platform deployment</div>
                  <div>• REST API development and integration</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="font-semibold text-lg mb-2">Accessibility Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Every AI solution includes WCAG compliance consideration, screen reader 
                  compatibility, and inclusive design principles from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Professional Background
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Career progression from technical systems to AI implementation and consulting.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Business Analyst - AI/ML Focus</h3>
                  <div className="text-sm text-muted-foreground">Lodestar Technologies, 2024-Present</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Developing Python-based financial data integration platform with semantic matching algorithms. 
                  Building AI automation tools that reduce manual reconciliation work for enterprise clients.
                </p>
                <div className="text-xs text-muted-foreground">
                  Technologies: Python, Machine Learning, Financial Data Processing
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Business Intelligence Analyst</h3>
                  <div className="text-sm text-muted-foreground">PayPal (2023-2024), Fiserv (2019-2023)</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Worked on data transformation and automation frameworks for financial platforms. 
                  Experience with SAP integration, process automation, and technical documentation systems.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: Data Analysis, Process Automation, Enterprise Systems
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold text-lg">Technical Systems & Development</h3>
                  <div className="text-sm text-muted-foreground">2012-2019</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Foundation in database administration, software support, and technical infrastructure. 
                  Built problem-solving skills and understanding of business technology needs.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: Database Management, Technical Support, Infrastructure
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="font-semibold text-lg mb-2">Continuous Learning Approach</h4>
                <p className="text-sm text-muted-foreground">
                  Self-taught progression into AI and machine learning, staying current with 
                  emerging technologies while maintaining focus on practical business applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shepherd Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              The Shepherd Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical framework for AI implementation based on real-world experience. 
              Accessibility-first development with measurable business outcomes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg text-muted-foreground mb-4 italic">
                    &ldquo;My approach to AI implementation is like shepherding a flock - it requires understanding, 
                    patience, and protective guidance. I help organizations nurture AI solutions that truly serve their needs 
                    while ensuring every user can benefit from the technology.&rdquo;
                  </blockquote>
                  <div className="font-medium text-sm">Bryan Thompson</div>
                  <div className="text-xs text-muted-foreground">AI Implementation Specialist & Shepherd of Innovation</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">ROI-Driven</div>
                <div className="text-xs text-muted-foreground">Measurable Business Outcomes</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Accessibility First</div>
                <div className="text-xs text-muted-foreground">WCAG Compliant Solutions</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium">Proven Frameworks</div>
                <div className="text-xs text-muted-foreground">Production-Ready Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              General Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How I typically approach AI implementation projects. Each situation is unique - 
              contact me to discuss your specific needs and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Discovery & Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Analysis of current processes, accessibility requirements, and AI readiness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategy & Planning</h3>
              <p className="text-sm text-muted-foreground">
                Implementation roadmap with technology selection and strategic considerations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Development & Testing</h3>
              <p className="text-sm text-muted-foreground">
                Building solutions with testing for accuracy and accessibility compliance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Integration support and guidance based on project requirements
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-lg mb-2">Flexible Engagement</h4>
              <p className="text-sm text-muted-foreground">
                Every project is different. Let&apos;s discuss your specific needs, timeline, 
                and how I might be able to help with your AI implementation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in AI Implementation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every situation is unique. Contact me to discuss your specific needs, challenges, 
            and explore whether AI implementation might be a good fit for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>💬 Let&apos;s have a conversation about your AI questions and possibilities</p>
          </div>
        </div>
      </section>
    </div>
  );
}
