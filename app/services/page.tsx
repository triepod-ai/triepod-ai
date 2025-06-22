import { Brain, Code, TrendingUp, Shield, Target, Lightbulb } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Implementation Services - Bryan Thompson',
  description: 'Practical AI implementation and consulting services. Strategy, custom development, and accessibility-focused solutions for business automation.',
  keywords: ['AI implementation', 'AI consulting', 'accessibility consulting', 'business automation', 'AI strategy', 'custom AI development', 'practical AI'],
  openGraph: {
    title: 'AI Implementation Services - Bryan Thompson',
    description: 'Practical AI solutions that solve real business problems with accessibility at the core.',
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
      title: "AI Strategy & Assessment",
      description: "Evaluate your current processes and identify practical AI opportunities that align with your business objectives and accessibility requirements.",
      features: [
        "Current process analysis and AI readiness assessment",
        "Identification of automation opportunities",
        "Technology stack evaluation and recommendations",
        "ROI projections for potential AI implementations",
        "Risk assessment and mitigation planning"
      ],
      deliverables: [
        "AI Readiness Assessment Report",
        "Implementation Roadmap with priorities",
        "Technology recommendations",
        "Budget planning guidance",
        "Next steps action plan"
      ],
      timeline: "1-2 weeks",
      investment: "Contact for pricing"
    },
    {
      icon: Code,
      title: "Custom AI Solutions",
      description: "Build tailored AI solutions for your specific business needs, with accessibility and practical implementation as core design principles.",
      features: [
        "Requirements analysis and solution design",
        "Custom development using proven AI technologies",
        "Integration with existing business systems",
        "Accessibility testing and validation",
        "Documentation and user training"
      ],
      deliverables: [
        "Working AI solution tailored to your needs",
        "Integration documentation",
        "User training materials",
        "Maintenance and support guidance",
        "Knowledge transfer sessions"
      ],
      timeline: "4-8 weeks",
      investment: "Project-based pricing"
    },
    {
      icon: TrendingUp,
      title: "Process Automation",
      description: "Identify and automate repetitive business processes using AI technologies, with focus on measurable efficiency improvements.",
      features: [
        "Process analysis and automation opportunities",
        "Custom automation solution development",
        "Integration with existing business systems",
        "Staff training and change management support",
        "Performance monitoring and optimization"
      ],
      deliverables: [
        "Process Automation Strategy",
        "Working automation solutions",
        "Integration documentation",
        "Staff training materials",
        "Performance monitoring setup"
      ],
      timeline: "3-6 weeks",
      investment: "Based on scope"
    },
    {
      icon: Shield,
      title: "Accessibility Consulting",
      description: "Improve your digital accessibility with AI-powered tools and inclusive design consulting, informed by lived experience with disability.",
      features: [
        "Accessibility audits and compliance assessment",
        "AI-powered accessibility testing implementation",
        "Inclusive design recommendations",
        "Staff training on accessibility best practices",
        "Ongoing compliance guidance"
      ],
      deliverables: [
        "Accessibility Assessment Report",
        "Implementation recommendations",
        "AI-powered monitoring setup",
        "Team training materials",
        "Compliance roadmap"
      ],
      timeline: "2-4 weeks",
      investment: "Contact for quote"
    },
    {
      icon: Target,
      title: "Technology Evaluation",
      description: "Evaluate AI tools, platforms, and vendors to help you make informed technology decisions that fit your business needs and budget.",
      features: [
        "Technology landscape analysis",
        "Vendor evaluation and comparison",
        "Proof of concept planning and testing",
        "Cost-benefit analysis and ROI projections",
        "Integration feasibility assessment"
      ],
      deliverables: [
        "Technology Assessment Report",
        "Vendor comparison matrix",
        "POC results and recommendations",
        "Implementation cost analysis",
        "Risk assessment and mitigation plan"
      ],
      timeline: "1-3 weeks",
      investment: "Contact for pricing"
    },
    {
      icon: Lightbulb,
      title: "AI Discovery Workshops",
      description: "Interactive workshops to help your team understand AI opportunities, generate practical ideas, and develop implementation strategies.",
      features: [
        "AI education and awareness sessions",
        "Use case identification workshops",
        "Brainstorming and opportunity mapping",
        "Team capability assessment",
        "Quick wins identification and prioritization"
      ],
      deliverables: [
        "Workshop summary and insights",
        "Use case opportunity matrix",
        "Implementation roadmap",
        "Team development recommendations",
        "Quick wins action plan"
      ],
      timeline: "1-2 weeks",
      investment: "Contact for details"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Implementation Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Practical AI consulting and development services focused on solving real business problems. 
          From strategy and assessment to custom development and integration, with accessibility 
          built into every solution.
        </p>
      </div>

      {/* Experience Highlights */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience & Approach</h2>
          <p className="text-muted-foreground">Building practical AI solutions with enterprise experience and accessibility focus</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Technical Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Automation Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Enterprise Companies</div>
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
        <h2 className="text-2xl font-bold mb-6 text-center">My Implementation Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Understand & Assess</h3>
            <p className="text-sm text-muted-foreground">Analyze your current processes, challenges, and identify practical AI opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Plan & Design</h3>
            <p className="text-sm text-muted-foreground">Create practical solutions that align with your business goals and accessibility requirements</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Build & Test</h3>
            <p className="text-sm text-muted-foreground">Develop solutions with continuous testing for functionality and accessibility</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Deploy & Support</h3>
            <p className="text-sm text-muted-foreground">Implementation guidance and ongoing support to ensure successful adoption</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}