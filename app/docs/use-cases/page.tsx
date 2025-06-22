import { Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases Documentation - triepod.ai [DEMO]',
  description: 'AI use cases and implementation examples - coming soon. Demo site showcasing triepod.ai use case documentation.',
};

export default function UseCasesDocsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's use case documentation structure
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
          <Lightbulb className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">AI Use Cases & Examples</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Real-world AI implementation examples, case studies, and use case documentation to help you 
          understand how AI can solve your specific business challenges.
        </p>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Coming Soon:</h2>
          <ul className="text-left space-y-2 text-muted-foreground max-w-md mx-auto">
            <li>• Business Process Automation Examples</li>
            <li>• Customer Service AI Implementations</li>
            <li>• Document Processing Use Cases</li>
            <li>• Accessibility Enhancement Examples</li>
            <li>• Industry-Specific AI Applications</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/docs">
              Back to Documentation
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              View Case Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}