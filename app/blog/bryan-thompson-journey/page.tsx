export default function ArticlePage() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Bryan Thompson – A Journey of Resilience, Passion, and Innovation
        </h1>
        <div className="text-muted-foreground">March 12, 2025 • 4 min read</div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground mb-8">
          Bryan Thompson, a Senior Technical Lead at Lodestar Technologies, is more than just a tech expert—he&apos;s a testament to resilience and a driving force behind Triepod.ai.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Career Rooted in Expertise</h2>
          <p className="text-muted-foreground mb-4">
            Based in Madison, MS, Bryan has built an impressive career in IT and financial analytics. At Lodestar Technologies, where he currently serves as a mergers analyst, he leverages his skills in data-driven insights and process optimization.
          </p>
          <p className="text-muted-foreground mb-4">
            His past roles include leading IT projects at PayPal, Fiserv, and Elior North America, where he reduced backlogs by 60%, cut man-hours by 80% through imaging deployments, and optimized financial reporting for credit unions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The COVID-19 Turning Point</h2>
          <p className="text-muted-foreground mb-4">
            In 2020, Bryan&apos;s life took a dramatic turn when he contracted COVID-19, resulting in severe complications and the loss of his leg. News reports from the time highlighted his struggle and recovery.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic my-6">
            &quot;COVID-19 showed me how fragile life is and how technology can be a lifeline.&quot;
            <footer className="text-muted-foreground mt-2">— Bryan Thompson</footer>
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">A Passion for Empowering Others</h2>
          <p className="text-muted-foreground mb-4">
            Bryan&apos;s passion lies in democratizing technology. At Lodestar, he applies his skills to mergers and analytics, but Triepod.ai reflects his broader vision: to build a system that empowers organizations, big and small, to innovate.
          </p>
        </section>
      </div>
    </article>
  );
}