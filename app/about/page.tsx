import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bryan Thompson - AI Developer & Business Analyst',
  description: 'Meet Bryan Thompson, business analyst with enterprise experience at PayPal and Fiserv, now focused on practical AI implementation and consultation.',
  keywords: ['Bryan Thompson', 'AI developer', 'business analyst', 'AI consulting', 'enterprise experience', 'PayPal', 'Fiserv', 'AI implementation'],
  openGraph: {
    title: 'About Bryan Thompson - AI Developer & Business Analyst',
    description: 'Business analyst turned AI developer helping organizations implement practical AI solutions.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Bryan Thompson</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">AI Developer & Business Analyst</h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m a business analyst with enterprise experience at companies like PayPal and Fiserv, now focused on practical AI implementation and consulting. My background combines technical systems knowledge with hands-on AI development, helping organizations implement AI solutions that solve real business problems.
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600/5 to-green-500/5 rounded-lg p-6 shadow-sm border border-blue-200/20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">🐟 Personal Journey: From Enterprise Systems to AI</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              <strong>My path to AI started from practical problem-solving.</strong> Growing up on a Mississippi catfish farm, I learned early that technology should solve real problems. This mindset carried through my career in enterprise systems at PayPal and Fiserv, where I focused on automation and data integration.
            </p>
            <p className="text-muted-foreground">
              When COVID took my leg in 2021, I used my recovery time to dive deep into AI and machine learning. What started as personal exploration became a passion for building AI solutions that are both practical and accessible to everyone.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2">Why Accessibility Matters</h4>
              <p className="text-sm text-blue-700">
                As an amputee, I understand firsthand how technology can either create barriers or break them down. 
                This lived experience shapes every AI solution I build - ensuring they work for everyone, not just some users.
              </p>
            </div>
            <p className="text-muted-foreground">
              <strong>My approach is personal and practical.</strong> I combine enterprise experience with a commitment to accessibility, building AI solutions that solve real business problems while ensuring everyone can benefit from the technology.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              My career spans over 10 years in technical systems, with recent experience as a business analyst at major companies like PayPal and Fiserv. Currently, I work at Lodestar Technologies developing Python-based financial data integration platforms that use machine learning for semantic matching.
            </p>
            <p className="text-muted-foreground">
              I&apos;ve built automation solutions that have reduced manual work by 60-80% in enterprise environments. My projects include semantic search platforms, AI-powered data reconciliation systems, and custom development tools that solve real business challenges.
            </p>
            <p className="text-muted-foreground">
              <strong>Current Focus:</strong> Bridging the gap between enterprise business analysis and practical AI implementation, helping organizations implement AI solutions that deliver measurable value while maintaining accessibility and usability.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills & Project Areas</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              My technical experience focuses on practical AI implementation across various business applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>AI Development:</strong> LLM integration, vector databases, semantic search, and RAG implementation</li>
              <li><strong>Data Systems:</strong> Financial data reconciliation, automated matching algorithms, and enterprise data integration</li>
              <li><strong>Business Automation:</strong> Process optimization, workflow automation, and efficiency improvements</li>
              <li><strong>Web Development:</strong> Full-stack applications using Python, JavaScript/TypeScript, and modern frameworks</li>
              <li><strong>Accessibility Solutions:</strong> WCAG-compliant development and inclusive design principles</li>
              <li><strong>Enterprise Integration:</strong> SAP systems, core banking platforms, and large-scale data processing</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              I combine hands-on development experience with business analysis skills, ensuring AI solutions that are both technically sound and practically valuable for organizations.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Why Work with Me</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🏢 Enterprise Experience</h3>
              <p className="text-muted-foreground">
                Proven track record at major companies including PayPal, Fiserv, and Lodestar Technologies. I understand the challenges of implementing technology solutions in large, complex organizations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">📈 Practical Results</h3>
              <p className="text-muted-foreground">
                Built automation solutions that have reduced manual work by 60-80% in real business environments. Focus on measurable outcomes and solving actual business problems, not just technical demos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">♿ Accessibility First</h3>
              <p className="text-muted-foreground">
                As an amputee, I bring lived experience with accessibility challenges. Every solution I build includes WCAG compliance and inclusive design principles from the ground up.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">⚙️ Technical & Business Balance</h3>
              <p className="text-muted-foreground">
                Unique combination of hands-on development skills and business analysis experience. I can both build the solution and understand the business context that makes it valuable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">🎯 Honest Approach</h3>
              <p className="text-muted-foreground">
                Transparent about what AI can and cannot do. I focus on practical implementations that solve real problems rather than overpromising on theoretical capabilities.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">My Approach to AI Implementation</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Business-First Thinking</h3>
              <p className="text-muted-foreground">
                Every AI project starts with understanding the business problem, not the technology. I measure success by practical impact and ROI, not just technical achievement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Accessible by Design</h3>
              <p className="text-muted-foreground">
                Accessibility isn&apos;t an afterthought - it&apos;s built into every solution from day one. I ensure AI tools work for all users, including those with disabilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Iterative Development</h3>
              <p className="text-muted-foreground">
                Start small, prove value, then scale. I prefer building working prototypes quickly and iterating based on real user feedback rather than theoretical requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Knowledge Transfer</h3>
              <p className="text-muted-foreground">
                My goal is to make your team self-sufficient. I provide clear documentation, training, and ongoing support to ensure you can maintain and extend the solutions.
              </p>
            </div>
          </div>
        </section>

        <ConsultationCTA variant="primary" showBenefits={true} />
      </div>
    </div>
  );
}