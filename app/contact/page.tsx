export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have questions about Triepod.ai? We&apos;d love to hear from you.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:info@triepod.ai" className="text-primary hover:underline">info@triepod.ai</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Technical Support</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:support@triepod.ai" className="text-primary hover:underline">support@triepod.ai</a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Office Location</h2>
          <div className="space-y-2">
            <p className="text-muted-foreground">Triepod, Inc.</p>
            <p className="text-muted-foreground">PO Box 123</p>
            <p className="text-muted-foreground">Madison, MS 39110</p>
            <p className="text-muted-foreground">United States</p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <p className="text-muted-foreground mb-4">
            Our team is available during the following hours:
          </p>
          <p className="text-muted-foreground">
            Monday - Friday: 9:00 AM - 6:00 PM EST
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <div className="space-y-2">
            <a href="https://twitter.com/triepod_ai" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              Twitter
            </a>
            <a href="https://github.com/triepod-ai" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
              GitHub
            </a>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Solutions</h2>
          <p className="text-muted-foreground mb-4">
            Looking for enterprise-grade solutions? Our team is ready to help you scale.
          </p>
          <p className="text-muted-foreground">
            Contact our enterprise team: <a href="mailto:enterprise@triepod.ai" className="text-primary hover:underline">enterprise@triepod.ai</a>
          </p>
        </section>
      </div>
    </div>
  );
}