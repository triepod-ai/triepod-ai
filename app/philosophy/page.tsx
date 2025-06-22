import { Heart, Users, Target, Lightbulb } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Philosophy - triepod.ai [DEMO]',
  description: 'AI solutions grounded in accessibility, practical implementation, and real-world impact. Our philosophy and approach to transformative technology consulting.',
  keywords: ['AI philosophy', 'accessibility first', 'practical AI', 'inclusive technology', 'business transformation'],
};

export default function PhilosophyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's philosophy and approach
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Philosophy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Technology should empower everyone. Our approach to AI consulting is grounded in accessibility, 
          practical implementation, and creating solutions that deliver real value to businesses and communities.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Accessibility First</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Every solution we build is designed with accessibility as a core principle, not an afterthought. 
            We believe technology should work for everyone, regardless of ability.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Lived experience with disability informs our design</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>WCAG compliance built into every project</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Inclusive testing with diverse users</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Universal design principles</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Practical Implementation</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            We focus on AI solutions that solve real business problems with measurable outcomes. 
            No buzzwords, no hype - just practical technology that works.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Clear ROI and success metrics</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Proven technologies and methodologies</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Iterative development and testing</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Real-world validation before deployment</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Human-Centered Design</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Technology serves people, not the other way around. We design AI systems that augment human 
            capabilities and improve quality of life for users and employees.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>User research and empathy mapping</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Transparent AI decision-making</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Employee training and change management</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Ethical AI practices</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Continuous Innovation</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            We stay at the forefront of AI technology while maintaining focus on practical applications 
            that deliver immediate value to our clients.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Research into emerging AI technologies</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Open source contributions and collaboration</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Knowledge sharing and thought leadership</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Continuous learning and adaptation</li>
          </ul>
        </div>
      </div>

      {/* Personal Mission */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">Personal Mission</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As someone who navigates the world with a disability, I understand firsthand the barriers that 
            inaccessible technology creates. My mission is to ensure that AI-powered solutions break down 
            these barriers rather than create new ones. Every project is an opportunity to make technology 
            more inclusive and effective for everyone.
          </p>
        </div>
        <div className="text-center">
          <blockquote className="text-lg italic text-muted-foreground">
            "The best AI solutions are those that feel natural, work for everyone, and solve real problems 
            that people actually have."
          </blockquote>
          <cite className="text-sm text-muted-foreground mt-2 block">- Bryan Thompson, Founder</cite>
        </div>
      </div>

      {/* Approach */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Approach to AI Consulting</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-medium mb-4">Listen & Understand</h3>
            <p className="text-sm text-muted-foreground">
              We start every project by deeply understanding your business challenges, user needs, 
              and success criteria before proposing any technology solutions.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-4">Design & Validate</h3>
            <p className="text-sm text-muted-foreground">
              Solutions are designed with accessibility and usability as core requirements, 
              then validated through testing with real users and stakeholders.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-4">Implement & Support</h3>
            <p className="text-sm text-muted-foreground">
              Implementation includes comprehensive training, documentation, and ongoing support 
              to ensure successful adoption and long-term value.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss how AI can solve your specific challenges while creating inclusive, 
          accessible solutions that work for everyone.
        </p>
      </div>

      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}