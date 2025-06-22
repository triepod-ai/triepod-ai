import { Code2, Cpu, Database, Layers } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom AI Development - triepod.ai [DEMO]',
  description: 'Custom AI development services - machine learning models, automation systems, and intelligent applications. Demo site showcasing AI development capabilities.',
  keywords: ['custom AI development', 'machine learning', 'AI consulting', 'automation', 'intelligent applications'],
};

export default function DevelopmentPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Demo Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai's services and capabilities
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Custom AI Development</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Building tailored AI solutions that solve real business problems. From machine learning models 
          to intelligent automation systems, we create custom AI applications designed for your specific needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Machine Learning Models</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Custom ML models for prediction, classification, and pattern recognition tailored to your data and business objectives.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Predictive analytics models</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Classification and clustering</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Natural language processing</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Computer vision applications</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Intelligent Automation</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            AI-powered automation systems that handle complex decision-making and adapt to changing business conditions.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Process automation with AI decision-making</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Intelligent document processing</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Adaptive workflow systems</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Smart scheduling and resource allocation</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Data Intelligence Platforms</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Comprehensive platforms that transform raw data into actionable insights through advanced AI analytics.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Real-time data processing and analysis</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Interactive dashboards and reporting</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Anomaly detection and alerting</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Predictive forecasting systems</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">AI Integration Services</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Seamless integration of AI capabilities into existing business systems and workflows.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>API development and integration</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Legacy system AI enhancement</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Cloud and on-premise deployment</li>
            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Performance monitoring and optimization</li>
          </ul>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Discovery & Planning</h3>
            <p className="text-sm text-muted-foreground">Requirements analysis, data assessment, and technical architecture design</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Prototype & Validation</h3>
            <p className="text-sm text-muted-foreground">Rapid prototyping and proof-of-concept development with stakeholder feedback</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Development & Testing</h3>
            <p className="text-sm text-muted-foreground">Full-scale development with continuous testing and accessibility validation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Deployment & Support</h3>
            <p className="text-sm text-muted-foreground">Production deployment, training, and ongoing maintenance support</p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-2">Machine Learning</h3>
            <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, Scikit-learn, Hugging Face</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Cloud Platforms</h3>
            <p className="text-sm text-muted-foreground">AWS, Google Cloud, Azure, Vercel</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Development</h3>
            <p className="text-sm text-muted-foreground">Python, TypeScript, React, Node.js</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Data & Analytics</h3>
            <p className="text-sm text-muted-foreground">PostgreSQL, Redis, Vector Databases</p>
          </div>
        </div>
      </div>

      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}