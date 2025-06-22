import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bryan Thompson - AI Modernization Consultant',
  description: 'AI modernization consultant helping organizations transform processes through ethical AI implementation. Accessibility-focused consulting with proven results.',
  keywords: ['AI consulting', 'AI modernization', 'digital transformation', 'accessibility AI', 'AI strategy', 'process automation', 'AI implementation', 'business transformation'],
  openGraph: {
    title: 'Bryan Thompson - AI Modernization Consultant',
    description: 'Transform your organization with ethical AI modernization and accessibility-focused consulting.',
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
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI Modernization Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Bryan Thompson<br />AI Modernization Consultant
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Shepherd of the AI flock. I help organizations modernize their processes through 
              ethical AI implementation, with a focus on accessibility and practical innovation. 
              Multiple revenue streams across AI strategy, custom development, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/services">
                  View Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Start Consultation <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              What We're Building
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developing AI solutions and consulting services focused on 
              practical implementation with accessibility at the core.
            </p>
          </div>
          
          {/* Development Focus */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">New</div>
              <div className="text-sm text-muted-foreground">Company Building Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Demo</div>
              <div className="text-sm text-muted-foreground">Projects and Capabilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Focused Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Accessibility Focused</div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Consulting Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI modernization services across multiple domains. 
              Accessibility-informed consulting that drives real business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Strategic AI planning and roadmapping for organizations looking 
                to modernize their processes with ethical AI implementation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Development</h3>
              <p className="text-sm text-muted-foreground">
                Tailored AI solutions and automation systems built for your 
                specific business needs and accessibility requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Digital Transformation</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end modernization of business processes using AI 
                technologies that improve efficiency and accessibility
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Accessibility Solutions</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered accessibility improvements and inclusive design 
                consulting based on lived experience with disability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Our Development Focus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building AI solutions with accessibility and practical implementation at the core. 
              We're a new company focused on creating tools that serve everyone.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg text-muted-foreground mb-4 italic">
                    &ldquo;As a new company, we&apos;re focused on building AI solutions that serve real needs. 
                    Our accessibility-first approach guides every project we develop, ensuring technology works for everyone.&rdquo;
                  </blockquote>
                  <div className="font-medium text-sm">Bryan Thompson</div>
                  <div className="text-xs text-muted-foreground">Founder, AI Modernization Consultant</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">New</span>
                </div>
                <div className="text-sm font-medium">Fresh Perspective</div>
                <div className="text-xs text-muted-foreground">Innovative Approach to AI</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">100%</span>
                </div>
                <div className="text-sm font-medium">Accessibility Focus</div>
                <div className="text-xs text-muted-foreground">Every Solution We Build</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">Demo</span>
                </div>
                <div className="text-sm font-medium">Available Now</div>
                <div className="text-xs text-muted-foreground">See What We're Building</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              My Consulting Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A shepherd&apos;s methodology focused on nurturing AI implementation that serves humanity with accessibility at its core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Listen & Understand</h3>
              <p className="text-sm text-muted-foreground">
                Deep discovery of your organization&apos;s needs, challenges, and accessibility requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategic Design</h3>
              <p className="text-sm text-muted-foreground">
                Craft ethical AI solutions that align with your values and serve all users inclusively
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Build and deploy solutions with continuous testing and accessibility validation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Nurture & Support</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing guidance to ensure AI solutions continue serving your organization effectively
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in What We&apos;re Building?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re a new company developing AI solutions with accessibility at the core. 
            Explore our demo projects and let&apos;s discuss how we might help in the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
