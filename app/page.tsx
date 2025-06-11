import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectGrid } from '@/components/project-grid';
import { featuredProjects } from '@/data/projects';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated for testing */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Research & Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Building AI Solutions for<br />Real-World Problems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I&apos;m Bryan Thompson, an AI researcher and developer creating innovative 
              solutions that democratize access to powerful technology. From legal AI to 
              data analysis tools, I&apos;m working to make advanced AI accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  About Me <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my latest AI innovations designed to solve complex challenges
              and create real-world impact.
            </p>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Technology Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge AI and development technologies to build 
              innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                GPT-4, Claude 3, LangChain, and custom ML models for intelligent automation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                Next.js, TypeScript, Python, and modern web technologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Data & Security</h3>
              <p className="text-sm text-muted-foreground">
                Neo4j, vector databases, and enterprise-grade security practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in collaboration, investment opportunities, 
            or learning more about my projects, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                Read the Blog <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
