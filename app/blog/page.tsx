import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="group relative bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <Link href="/blog/triepod-ai-revolutionizing-business-automation">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Triepod.ai – Revolutionizing Business Automation
              </h2>
              <p className="text-muted-foreground mb-4">
                Discover how Triepod.ai is transforming business process automation with advanced AI capabilities and practical applications.
              </p>
              <div className="text-sm text-muted-foreground">
                March 12, 2025 • 5 min read
              </div>
            </div>
          </Link>
        </article>

        <article className="group relative bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <Link href="/blog/bryan-thompson-journey">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Bryan Thompson – A Journey of Resilience
              </h2>
              <p className="text-muted-foreground mb-4">
                The inspiring story of Triepod.ai&apos;s founder, from tech expert to resilient innovator.
              </p>
              <div className="text-sm text-muted-foreground">
                March 12, 2025 • 4 min read
              </div>
            </div>
          </Link>
        </article>

        <article className="group relative bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <Link href="/blog/heart-behind-innovator">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                The Heart Behind the Innovator
              </h2>
              <p className="text-muted-foreground mb-4">
                Meet the family supporting Bryan Thompson&apos;s vision for AI innovation.
              </p>
              <div className="text-sm text-muted-foreground">
                March 12, 2025 • 3 min read
              </div>
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
}