export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Triepod</h1>
      
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At Triepod, we&apos;re on a mission to democratize AI technology and make advanced automation accessible to businesses of all sizes. Through our innovative RAG (Retrieval Augmented Generation) technology, we&apos;re transforming how organizations handle complex workflows and decision-making processes.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Founded by Bryan Thompson, a Senior Technical professional with extensive experience in enterprise systems and financial technology, Triepod emerged from a vision to make AI more practical and accessible.
            </p>
            <p className="text-muted-foreground">
              After facing personal challenges during the COVID-19 pandemic, Bryan was inspired to create technology that could help businesses navigate their own challenges more effectively. Working with industry leading fortune 500 companies like Elior-North America, Fiserv, and Paypal, gave him a unique insight into the needs of modern businesses and led to the development of Triepod&apos;s unique approach to AI-powered automation.
            </p>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Triepod&apos;s core technology combines advanced RAG capabilities with a modular architecture, allowing for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Intelligent workflow detection and automation</li>
              <li>Context-aware information retrieval</li>
              <li>Seamless integration with existing systems</li>
              <li>Customizable modules for specific business needs</li>
            </ul>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Bryan Thompson</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-muted-foreground">
                A veteran in enterprise systems and financial technology, Bryan brings over a decade of experience in developing innovative solutions for businesses. His expertise spans cloud integration, workflow automation, and AI implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of what&apos;s possible with AI technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe powerful technology should be accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We maintain open communication and clear documentation of our technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Security</h3>
              <p className="text-muted-foreground">
                We prioritize the security and privacy of our users&apos; data.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-4">
            We&apos;re always looking for talented individuals who share our passion for innovation and technology.
          </p>
          <a href="/careers" className="text-primary hover:underline">
            View Open Positions →
          </a>
        </section>
      </div>
    </div>
  );
}