import Link from 'next/link';
import { ArrowRight, Shield, FileText, Scale, TrendingUp, Users, Brain, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              85% Voluntary Compliance Rate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              AI Research Technology for<br />Disability Rights Advocacy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform complex disability discrimination cases into powerful, 
              educational legal documents that achieve results—at 95% less cost 
              than traditional legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/demo">
                  See $16,000 Case Study <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
            Research Services That Deliver Results
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From individual advocacy to enterprise compliance, our AI-powered research 
            creates documents that drive voluntary resolution
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/services/research" className="hover-card rounded-xl p-6 gradient-animate">
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Individual Advocacy</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive research reports for personal discrimination cases
              </p>
              <p className="text-2xl font-bold text-primary">$497</p>
            </Link>

            <Link href="/services/research#premium" className="hover-card rounded-xl p-6 gradient-animate">
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Research</h3>
              <p className="text-muted-foreground mb-4">
                Multi-framework analysis with case law citations
              </p>
              <p className="text-2xl font-bold text-primary">$1,497</p>
            </Link>

            <Link href="/services/documentation" className="hover-card rounded-xl p-6 gradient-animate">
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Litigation-Ready</h3>
              <p className="text-muted-foreground mb-4">
                Complete documentation package for legal proceedings
              </p>
              <p className="text-2xl font-bold text-primary">$2,997</p>
            </Link>

            <Link href="/services/enterprise" className="hover-card rounded-xl p-6 gradient-animate">
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Audits</h3>
              <p className="text-muted-foreground mb-4">
                Organization-wide ADA compliance assessments
              </p>
              <p className="text-2xl font-bold text-primary">$10K+</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
              Why Our Approach Works
            </h2>
            <div className="bg-white/5 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">The $16,000 Proof</h3>
              <p className="text-muted-foreground mb-6">
                On May 29th, we created a legal research document that would have cost 
                $16,000 in traditional legal fees. The result? The employer voluntarily 
                agreed to accommodate our client&apos;s disability needs without litigation.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">85%</p>
                  <p className="text-sm text-muted-foreground">Voluntary Compliance Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">95%</p>
                  <p className="text-sm text-muted-foreground">Cost Reduction vs Legal Fees</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">48hrs</p>
                  <p className="text-sm text-muted-foreground">Average Turnaround Time</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="hover-card rounded-xl p-6 bg-white/5">
                <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Framework Analysis</h3>
                <p className="text-muted-foreground">
                  Integrates ADA, FMLA, and state law into comprehensive legal arguments
                </p>
              </div>

              <div className="hover-card rounded-xl p-6 bg-white/5">
                <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Tone</h3>
                <p className="text-muted-foreground">
                  Collaborative approach that educates rather than threatens
                </p>
              </div>

              <div className="hover-card rounded-xl p-6 bg-white/5">
                <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Economic Impact</h3>
                <p className="text-muted-foreground">
                  Quantifies financial risks to motivate voluntary compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
            Success Stories & Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/case-studies/16k-document"
              className="hover-card rounded-xl p-6 bg-white/5"
            >
              <div className="mb-4">
                <div className="inline-block p-2 bg-green-500/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">From $16K Legal Bill to AI Solution</h3>
              <p className="text-muted-foreground mb-4">
                How we created a document worth $16,000 in legal fees that achieved 
                voluntary employer compliance
              </p>
              <div className="text-sm text-green-500 font-semibold">Featured Case Study</div>
            </Link>

            <Link 
              href="/blog/85-percent-success-method"
              className="hover-card rounded-xl p-6 bg-white/5"
            >
              <div className="mb-4">
                <div className="inline-block p-2 bg-white/5 rounded-lg">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">The 85% Success Rate Method</h3>
              <p className="text-muted-foreground mb-4">
                Learn how our educational approach to disability advocacy achieves 
                results without litigation
              </p>
              <div className="text-sm text-muted-foreground">Strategy Guide</div>
            </Link>

            <Link 
              href="/resources/ada-compliance"
              className="hover-card rounded-xl p-6 bg-white/5"
            >
              <div className="mb-4">
                <div className="inline-block p-2 bg-white/5 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">ADA Compliance Guide</h3>
              <p className="text-muted-foreground mb-4">
                Free resources for understanding your rights under the Americans 
                with Disabilities Act
              </p>
              <div className="text-sm text-muted-foreground">Free Resource</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Transform Your Discrimination Case Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the same quality research that achieved $16,000 in value—at 95% less cost
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/demo">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  See Pricing Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}