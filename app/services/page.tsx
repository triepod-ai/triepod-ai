import { Brain, Code, TrendingUp, Shield, Target, Lightbulb } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Modernization Services - Triepod Consulting',
  description: 'Comprehensive AI modernization consulting with accessibility focus. Multiple revenue streams: strategy, development, transformation, and accessibility solutions.',
  keywords: ['AI modernization', 'AI consulting', 'accessibility consulting', 'digital transformation', 'AI strategy', 'custom AI development', 'inclusive design'],
  openGraph: {
    title: 'AI Modernization Services - Triepod Consulting',
    description: 'Shepherd of the AI flock. Transform your organization with ethical AI modernization.',
    type: 'website',
  },
};

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  investment: string;
}

function ServiceCard({ icon: Icon, title, description, features, deliverables, timeline, investment }: ServiceProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">What You Get:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Deliverables:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-sm font-medium">Timeline</p>
            <p className="text-sm text-muted-foreground">{timeline}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Investment</p>
            <p className="text-sm text-muted-foreground">{investment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const services: ServiceProps[] = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmapping",
      description: "Comprehensive AI assessment and strategic planning with accessibility at the core, aligning AI capabilities with your business objectives.",
      features: [
        "Current state AI readiness and accessibility assessment",
        "Competitive landscape analysis with inclusion focus",
        "Custom AI roadmap with accessibility milestones",
        "ROI projections and accessibility compliance metrics",
        "Risk assessment and ethical AI mitigation strategies"
      ],
      deliverables: [
        "AI Readiness & Accessibility Assessment Report",
        "Strategic AI Implementation Roadmap",
        "Inclusive Technology Stack Recommendations",
        "Budget Planning Guide with Accessibility Considerations",
        "Executive Presentation Deck"
      ],
      timeline: "2-3 weeks",
      investment: "Starting at $8,500"
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end accessible AI solution development tailored to your specific business needs with disability-informed design principles.",
      features: [
        "Accessibility-first requirements analysis and solution design",
        "Custom AI model development with bias testing",
        "Inclusive integration with existing systems",
        "Comprehensive testing including accessibility validation",
        "Deployment with accessibility monitoring setup"
      ],
      deliverables: [
        "Production-ready accessible AI solution",
        "Accessibility compliance documentation",
        "Inclusive user training materials",
        "Monitoring and maintenance guides",
        "Knowledge transfer sessions with accessibility focus"
      ],
      timeline: "6-12 weeks",
      investment: "Starting at $25,000"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "End-to-end organizational modernization using AI technologies with accessibility and inclusion at the forefront.",
      features: [
        "Complete digital transformation roadmap",
        "Accessibility compliance integration",
        "Change management with inclusion focus",
        "Staff training on accessible AI tools",
        "Performance monitoring and optimization"
      ],
      deliverables: [
        "Digital Transformation Strategy",
        "Accessibility Integration Plan",
        "Change Management Framework",
        "Staff Training Program",
        "Performance Monitoring Dashboard"
      ],
      timeline: "8-16 weeks",
      investment: "Starting at $35,000"
    },
    {
      icon: Shield,
      title: "Accessibility Solutions",
      description: "Specialized AI-powered accessibility improvements and inclusive design consulting based on lived experience with disability.",
      features: [
        "Comprehensive accessibility audits using AI tools",
        "Disability-informed design recommendations",
        "AI-powered accessibility testing and monitoring",
        "Staff training on inclusive design principles",
        "Ongoing accessibility compliance support"
      ],
      deliverables: [
        "Accessibility Audit Report",
        "Inclusive Design Implementation Guide",
        "AI-Powered Accessibility Monitoring Setup",
        "Staff Training Program on Inclusion",
        "Compliance Maintenance Plan"
      ],
      timeline: "4-8 weeks",
      investment: "Starting at $12,500"
    },
    {
      icon: Target,
      title: "AI Technology Assessment",
      description: "Evaluate AI tools, platforms, and vendors with accessibility lens to make informed technology decisions that serve all users.",
      features: [
        "Accessibility-informed technology landscape analysis",
        "Vendor evaluation with inclusion criteria",
        "POC planning with accessibility testing",
        "Cost-benefit analysis including accessibility ROI",
        "Integration feasibility with existing accessibility tools"
      ],
      deliverables: [
        "Technology Assessment Report with Accessibility Focus",
        "Vendor Comparison Matrix with Inclusion Scores",
        "POC Results and Accessibility Recommendations",
        "Total Cost of Ownership Analysis",
        "Implementation Risk and Accessibility Assessment"
      ],
      timeline: "2-4 weeks",
      investment: "Starting at $5,500"
    },
    {
      icon: Lightbulb,
      title: "AI Innovation Workshops",
      description: "Interactive workshops to identify accessible AI opportunities, generate inclusive ideas, and build disability-informed AI capabilities.",
      features: [
        "Executive AI education with accessibility awareness",
        "Inclusive use case identification workshops",
        "Innovation brainstorming with disability perspective",
        "Team capability assessment including accessibility skills",
        "Quick wins identification with accessibility impact"
      ],
      deliverables: [
        "Workshop Summary Reports with Accessibility Insights",
        "Inclusive Use Case Opportunity Matrix",
        "Accessibility-Informed Innovation Pipeline",
        "Team Development Plan with Inclusion Training",
        "Quick Wins Implementation Guide"
      ],
      timeline: "1-2 weeks",
      investment: "Starting at $3,500 per workshop"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Modernization Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Shepherd of the AI flock. Comprehensive consulting services spanning multiple revenue streams: 
          AI strategy, custom development, digital transformation, and accessibility solutions. 
          Ethical AI implementation with accessibility at the core.
        </p>
      </div>

      {/* Success Metrics */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Proven Client Results</h2>
          <p className="text-muted-foreground">Track record of delivering accessible AI modernization with measurable business impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$85K+</div>
            <div className="text-sm text-muted-foreground">Client Value Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Organizations Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Accessibility Focused</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Shepherd of the AI Flock Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Listen & Understand</h3>
            <p className="text-sm text-muted-foreground">Deep discovery of your organization&apos;s needs, challenges, and accessibility requirements</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Strategic Design</h3>
            <p className="text-sm text-muted-foreground">Craft ethical AI solutions that align with your values and serve all users inclusively</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Implementation</h3>
            <p className="text-sm text-muted-foreground">Build and deploy solutions with continuous testing and accessibility validation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Nurture & Support</h3>
            <p className="text-sm text-muted-foreground">Ongoing guidance to ensure AI solutions continue serving your organization effectively</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}