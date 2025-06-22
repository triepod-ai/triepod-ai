import { Scale } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Documentation - triepod.ai [DEMO]',
  description: 'Legal compliance and accessibility documentation - coming soon. Demo site showcasing triepod.ai legal documentation structure.',
};

export default function LegalDocsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's legal documentation structure
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
          <Scale className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Legal & Compliance Documentation</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Legal compliance guides, accessibility standards, and regulatory documentation for AI implementations 
          are being developed to help ensure your projects meet all requirements.
        </p>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Coming Soon:</h2>
          <ul className="text-left space-y-2 text-muted-foreground max-w-md mx-auto">
            <li>• WCAG 2.1 Compliance Guidelines</li>
            <li>• ADA Requirements for AI Systems</li>
            <li>• Data Privacy and AI Regulations</li>
            <li>• Accessibility Audit Templates</li>
            <li>• Risk Assessment Frameworks</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/docs">
              Back to Documentation
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