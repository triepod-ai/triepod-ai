export default function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Help Center</h1>
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/help/contact" className="block p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-medium mb-2">Contact Support</h3>
              <p className="text-muted-foreground">Get in touch with our support team</p>
            </a>
            <a href="/docs" className="block p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-medium mb-2">Documentation</h3>
              <p className="text-muted-foreground">Browse our technical documentation</p>
            </a>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">What is Triepod?</h3>
              <p className="text-muted-foreground">
                Triepod is an advanced AI platform that helps businesses automate their processes and enhance productivity through intelligent conversation and RAG technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">How do I get started?</h3>
              <p className="text-muted-foreground">
                Simply start a conversation with our AI assistant on the home page. You can ask questions, request assistance, or explore our capabilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Is my data secure?</h3>
              <p className="text-muted-foreground">
                Yes, we implement industry-standard security measures to protect your data. All communications are encrypted, and we follow strict data privacy guidelines.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">What kind of support do you offer?</h3>
              <p className="text-muted-foreground">
                We provide email support, documentation, and community forums. Enterprise customers receive additional dedicated support options.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for? Our support team is ready to assist you.
          </p>
          <a href="/help/contact" className="inline-block text-primary hover:underline">
            Contact Support →
          </a>
        </section>
      </div>
    </div>
  );
}