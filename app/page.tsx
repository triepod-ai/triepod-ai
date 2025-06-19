import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectGrid } from '@/components/project-grid';
import { featuredProjects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bryan Thompson - AI Consultant & Business Solutions Expert',
  description: 'Professional AI consultant specializing in business transformation, custom AI solutions, and strategic implementation. Ready for your state\'s $9B AI initiative.',
  keywords: ['AI consultant', 'business transformation', 'artificial intelligence', 'custom AI solutions', 'strategic consulting', 'AI initiative'],
  openGraph: {
    title: 'Bryan Thompson - AI Consultant & Business Solutions Expert',
    description: 'Transform your business with AI. Custom solutions, proven results, ready for enterprise initiatives.',
    type: 'website',
    siteName: 'Triepod AI Consulting',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated for testing */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Target className="h-4 w-4 mr-2" />
              Ready for $9B AI Initiative
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              AI Consultant for<br />Business Transformation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I&apos;m Bryan Thompson, your AI business consultant. I help enterprises implement 
              AI solutions that drive real ROI. From strategy to deployment, I deliver results 
              that position your business for the AI-driven future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  View Services <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Proven Business Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real AI solutions delivering measurable ROI for businesses across industries.
              See how I transform challenges into competitive advantages.
            </p>
          </div>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$16K</div>
              <div className="text-sm text-muted-foreground">Validated Value Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Fortune 500</div>
              <div className="text-sm text-muted-foreground">Enterprise Experience</div>
            </div>
          </div>
          
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      {/* Consulting Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              AI Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs. 
              From strategy to implementation, I deliver results that drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Strategy & Planning</h3>
              <p className="text-sm text-muted-foreground">
                Custom AI roadmaps, technology assessment, and implementation planning 
                aligned with your business objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom AI Development</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end AI solution development using GPT-4, Claude, and enterprise 
                frameworks for your specific use cases
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Initiative Readiness</h3>
              <p className="text-sm text-muted-foreground">
                Position your organization for state AI initiatives and enterprise 
                partnerships with proven frameworks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses across industries have transformed with strategic AI implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">JD</span>
                </div>
                <div>
                  <blockquote className="text-muted-foreground mb-4">
                    "Bryan's AI strategy transformed our compliance process, delivering $16,000 in validated value with an 85% success rate. His Fortune 500 experience showed immediately."
                  </blockquote>
                  <div className="font-medium text-sm">Jennifer Davis</div>
                  <div className="text-xs text-muted-foreground">VP Operations, Enterprise Client</div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">MR</span>
                </div>
                <div>
                  <blockquote className="text-muted-foreground mb-4">
                    "The AI roadmap Bryan developed positioned us perfectly for the state AI initiative. His strategic approach and technical expertise made the difference."
                  </blockquote>
                  <div className="font-medium text-sm">Michael Rodriguez</div>
                  <div className="text-xs text-muted-foreground">CTO, Technology Firm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Proven Consulting Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My systematic approach ensures successful AI implementation with measurable business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategic Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive analysis of your business needs, current capabilities, and AI readiness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Roadmap</h3>
              <p className="text-sm text-muted-foreground">
                Detailed implementation plan with ROI projections, timelines, and success metrics
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Hands-on development and deployment with continuous monitoring and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Success Validation</h3>
              <p className="text-sm text-muted-foreground">
                Measurable results tracking, performance optimization, and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful businesses already leveraging AI for competitive advantage. 
            Schedule your strategic consultation and discover your AI transformation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ai-initiative">
                AI Initiative Info <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
