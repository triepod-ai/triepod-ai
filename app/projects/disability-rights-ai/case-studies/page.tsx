import { Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disability Rights AI - Case Studies [DEMO]',
  description: 'Case studies and implementation examples for disability rights AI solutions - coming soon. Demo site showcasing accessibility-focused AI projects.',
};

export default function DisabilityRightsAICaseStudiesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's disability rights AI case studies
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
          <Users className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Disability Rights AI - Case Studies</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Real-world implementations of AI solutions designed to advance disability rights, improve accessibility, 
          and create more inclusive digital experiences. Case studies and implementation examples coming soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Accessibility Compliance AI</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered tools that automatically detect and help remediate accessibility issues 
              in digital products, ensuring WCAG compliance and inclusive design.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Assistive Technology Integration</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              AI solutions that enhance assistive technologies and improve the user experience 
              for people with disabilities across digital platforms.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Case Studies Coming Soon:</h2>
          <ul className="text-left space-y-2 text-muted-foreground max-w-md mx-auto">
            <li>• Automated Accessibility Testing Implementation</li>
            <li>• AI-Powered Screen Reader Optimization</li>
            <li>• Inclusive Design Validation Systems</li>
            <li>• Legal Compliance Monitoring Solutions</li>
            <li>• User Experience Enhancement Projects</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/projects/disability-rights-ai">
              Back to Project Overview
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/accessibility">
              Accessibility Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}