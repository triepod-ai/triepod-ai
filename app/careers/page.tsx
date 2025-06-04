export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Careers at Triepod</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Join us in building the future of AI technology
      </p>
      <div className="space-y-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <p className="text-muted-foreground mb-4">
            We&apos;re always looking for talented individuals to join our team.
          </p>
          <p className="text-muted-foreground">
            No open positions at the moment. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}