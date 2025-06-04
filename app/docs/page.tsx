export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Quick Start Guide</h3>
              <p className="text-muted-foreground mb-4">
                Learn how to integrate Triepod.ai into your workflow and start automating your business processes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Core Concepts</h3>
              <p className="text-muted-foreground mb-4">
                Understand the fundamental concepts behind Triepod.ai&apos;s RAG technology and AI capabilities.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">REST API</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive documentation of our REST API endpoints, authentication, and usage examples.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">WebSocket API</h3>
              <p className="text-muted-foreground mb-4">
                Real-time communication protocols and event handling documentation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Guides</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Authentication</h3>
              <p className="text-muted-foreground mb-4">
                Learn about our authentication methods and security best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Data Management</h3>
              <p className="text-muted-foreground mb-4">
                Best practices for managing your data and optimizing performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Custom Integrations</h3>
              <p className="text-muted-foreground mb-4">
                Build custom integrations and extend Triepod.ai&apos;s functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Code Samples</h3>
              <p className="text-muted-foreground mb-4">
                Ready-to-use code examples in various programming languages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Use Cases</h3>
              <p className="text-muted-foreground mb-4">
                Real-world examples and implementation scenarios.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for in the documentation?
          </p>
          <div className="space-x-4">
            <a href="/help/contact" className="text-primary hover:underline">Contact Support</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://github.com/triepod" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub Community
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}