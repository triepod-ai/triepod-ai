export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Use of Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Eligibility</h3>
                <p className="text-muted-foreground">
                  You must be at least 18 years old to use our Services. By using Triepod.ai, you represent that you meet this requirement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">License</h3>
                <p className="text-muted-foreground">
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Services for personal or business purposes, subject to these Terms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Account Responsibility</h2>
            <p className="text-muted-foreground">
              If you create an account, you are responsible for maintaining the confidentiality of your credentials and all activities under your account. Notify us immediately at support@triepod.ai if you suspect unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Ownership</h3>
                <p className="text-muted-foreground">
                  All content, code, and technology in our Services are owned by Triepod.ai or our licensors and are protected by intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">User Content</h3>
                <p className="text-muted-foreground">
                  You retain ownership of any data or content you submit to our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and display it as necessary to provide and improve our Services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Disclaimers and Limitations</h2>
            <p className="text-muted-foreground">
              Our Services are provided &quot;as is&quot; without warranties of any kind. To the fullest extent permitted by law, Triepod.ai will not be liable for any indirect, incidental, or consequential damages arising from your use of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Contact us at support@triepod.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}