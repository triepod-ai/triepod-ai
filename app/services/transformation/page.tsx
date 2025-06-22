import { TrendingUp, Zap, Target, Users } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation - triepod.ai [DEMO]',
  description: 'AI-powered digital transformation consulting. Modernize operations, automate processes, and implement intelligent systems. Demo site showcasing transformation capabilities.',
  keywords: ['digital transformation', 'business automation', 'AI consulting', 'process optimization', 'change management'],
};

export default function TransformationPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's transformation services and capabilities
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Digital Transformation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your business operations with AI-powered solutions. We help organizations modernize 
          processes, automate workflows, and implement intelligent systems that drive efficiency and growth.
        </p>
      </div>

      {/* Transformation Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Process Optimization</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Analyze and optimize business processes using AI to eliminate bottlenecks and improve efficiency.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Process mapping and analysis</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Bottleneck identification</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Automation opportunity assessment</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Performance metrics and KPI tracking</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Intelligent Automation</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Implement smart automation solutions that adapt to changing business conditions and requirements.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Robotic process automation (RPA)</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>AI-powered decision making</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Document processing automation</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Workflow orchestration</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Transform data into actionable insights with AI-powered analytics and intelligent reporting systems.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Business intelligence dashboards</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Predictive analytics</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Real-time monitoring</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Automated reporting</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Change Management</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Support your team through digital transformation with training, documentation, and change management strategies.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Team training and upskilling</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Documentation and knowledge transfer</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Adoption strategy planning</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Ongoing support and guidance</li>
          </ul>
        </div>
      </div>

      {/* Transformation Journey */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Transformation Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Assessment</h3>
            <p className="text-sm text-muted-foreground">Current state analysis and opportunity identification</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Strategy</h3>
            <p className="text-sm text-muted-foreground">Transformation roadmap and technology selection</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Implementation</h3>
            <p className="text-sm text-muted-foreground">Phased rollout with continuous testing and validation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Training</h3>
            <p className="text-sm text-muted-foreground">Team enablement and change management support</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">5</span>
            </div>
            <h3 className="font-medium mb-2">Optimization</h3>
            <p className="text-sm text-muted-foreground">Continuous improvement and performance monitoring</p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Transformation Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">60%</div>
            <div className="text-sm text-muted-foreground">Average Process Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Reduction in Manual Tasks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3-6</div>
            <div className="text-sm text-muted-foreground">Months to Full Implementation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">ROI</div>
            <div className="text-sm text-muted-foreground">Positive Return in First Year</div>
          </div>
        </div>
      </div>

      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}