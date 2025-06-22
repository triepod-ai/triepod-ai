import { Shield, Eye, Users, CheckCircle } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Solutions - triepod.ai [DEMO]',
  description: 'AI-powered accessibility consulting and solutions. WCAG compliance, inclusive design, and assistive technology integration. Demo site showcasing accessibility expertise.',
  keywords: ['accessibility consulting', 'WCAG compliance', 'inclusive design', 'assistive technology', 'disability rights', 'AI accessibility'],
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's accessibility services and capabilities
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Accessibility Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Make your digital products accessible to everyone with AI-powered testing, WCAG compliance consulting, 
          and inclusive design solutions informed by lived experience with disability.
        </p>
      </div>

      {/* Personal Statement */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">Accessibility Through Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As someone who navigates the world with a disability, I bring both technical expertise and lived experience 
            to create truly inclusive digital solutions that work for everyone.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">WCAG Compliance Audits</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Comprehensive accessibility audits using AI-powered tools and manual testing to ensure WCAG 2.1 AA compliance.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Automated accessibility scanning</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Manual testing with assistive technologies</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Detailed compliance reports</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Remediation roadmaps</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">AI-Powered Testing</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Intelligent accessibility testing that identifies issues and provides specific recommendations for improvement.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Continuous accessibility monitoring</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Real-time issue detection</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Automated testing integration</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Custom rule configuration</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Inclusive Design Consulting</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Design review and consultation to ensure your products are usable by people with diverse abilities and needs.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>User experience design review</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Inclusive design principles training</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Accessibility design patterns</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>User testing with disabled users</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Implementation Support</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Hands-on support for implementing accessibility improvements and training your team on best practices.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Code review and remediation</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Team training and workshops</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Accessibility documentation</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Ongoing compliance monitoring</li>
          </ul>
        </div>
      </div>

      {/* Accessibility Standards */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Accessibility Standards & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-medium mb-2">WCAG 2.1 Level AA</h3>
            <p className="text-sm text-muted-foreground">International accessibility guidelines compliance</p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-2">Section 508</h3>
            <p className="text-sm text-muted-foreground">Federal accessibility requirements for government systems</p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-2">ADA Compliance</h3>
            <p className="text-sm text-muted-foreground">Americans with Disabilities Act digital accessibility</p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Accessibility Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Audit & Assessment</h3>
            <p className="text-sm text-muted-foreground">Comprehensive accessibility evaluation using automated and manual testing</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Prioritization</h3>
            <p className="text-sm text-muted-foreground">Issue prioritization based on impact and legal compliance requirements</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Implementation</h3>
            <p className="text-sm text-muted-foreground">Guided remediation with code examples and testing validation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Monitoring</h3>
            <p className="text-sm text-muted-foreground">Ongoing monitoring and team training for sustained compliance</p>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Accessibility Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15%</div>
            <div className="text-sm text-muted-foreground">Of population has a disability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$13T</div>
            <div className="text-sm text-muted-foreground">Annual disposable income of disabled consumers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">71%</div>
            <div className="text-sm text-muted-foreground">Will leave inaccessible websites immediately</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Of users benefit from accessible design</div>
          </div>
        </div>
      </div>

      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}