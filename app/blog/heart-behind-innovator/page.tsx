export default function ArticlePage() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          The Heart Behind the Innovator
        </h1>
        <div className="text-muted-foreground">March 12, 2025 • 3 min read</div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground mb-8">
          Behind Bryan Thompson&apos;s success as an AI pioneer is a supportive and dynamic family. Living in Madison, MS, Bryan shares his life with his wife, a brilliant software engineer, their inquisitive 10-year-old son, and their two German Shepherd service dogs, Zeus and Hera.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Tech-Savvy Partnership</h2>
          <p className="text-muted-foreground mb-4">
            Bryan&apos;s wife is more than a partner—she&apos;s a collaborator. As a software engineer, she brings her own expertise to the table, often engaging in late-night discussions about code, AI, and Triepod.ai&apos;s development.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic my-6">
            &quot;She gets it. Having someone who understands the tech world makes all the difference.&quot;
            <footer className="text-muted-foreground mt-2">— Bryan Thompson</footer>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nurturing the Next Generation</h2>
          <p className="text-muted-foreground mb-4">
            Their 10-year-old son is already showing signs of inheriting his parents&apos; love for innovation. Bryan and his wife encourage his curiosity, introducing him to coding and AI concepts through fun, hands-on projects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Zeus and Hera: Loyal Companions</h2>
          <p className="text-muted-foreground mb-4">
            The Thompson household is completed by Zeus and Hera, two German Shepherd service dogs—one black, one white—who joined the family after Bryan&apos;s COVID-19 recovery. These loyal companions provide emotional support and a sense of security, reflecting the family&apos;s resilience.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic my-6">
            &quot;Zeus and Hera are part of our team. They remind us to stay grounded and keep going.&quot;
            <footer className="text-muted-foreground mt-2">— Bryan Thompson</footer>
          </blockquote>
        </section>
      </div>
    </article>
  );
}