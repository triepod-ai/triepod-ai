export default function ArticlePage() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Federal MDR Hearing Rules: A Complete Guide for Parents
        </h1>
        <div className="text-muted-foreground">June 3, 2025 • 12 min read</div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground mb-8">
          When a student with disabilities faces disciplinary action, federal law provides crucial protections through the Manifestation Determination Review (MDR) process. This comprehensive guide explains your rights, the legal requirements, and how to effectively advocate for your child during these critical hearings.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Is a Manifestation Determination Review?</h2>
          <p className="text-muted-foreground mb-4">
            An MDR is a federal mandate under both the Individuals with Disabilities Education Act (IDEA) and Section 504 of the Rehabilitation Act. It&apos;s a formal review process that must occur when a school proposes to discipline a student with disabilities in a way that would constitute a &ldquo;change in placement.&rdquo;
          </p>
          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">When Is an MDR Required?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Suspension exceeding 10 consecutive school days</li>
              <li>• Series of suspensions totaling more than 10 days that constitute a pattern</li>
              <li>• Any disciplinary action resulting in change of placement</li>
              <li>• Recommendation for expulsion</li>
              <li>• Placement in alternative educational setting exceeding 10 days</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Two Critical Questions</h2>
          <p className="text-muted-foreground mb-4">
            Federal law requires the MDR team to answer two specific questions:
          </p>          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border-2 border-primary">
              <h3 className="text-lg font-semibold mb-3">Question 1: Direct Relationship</h3>
              <p className="text-muted-foreground font-medium mb-2">
                &ldquo;Was the conduct caused by, or did it have a direct and substantial relationship to, the child&apos;s disability?&rdquo;
              </p>
              <p className="text-muted-foreground text-sm">
                This examines whether the behavior was a direct result of the disability itself—for example, impulsivity from ADHD, emotional dysregulation from autism, or anxiety-driven responses.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary">
              <h3 className="text-lg font-semibold mb-3">Question 2: Implementation Failure</h3>
              <p className="text-muted-foreground font-medium mb-2">
                &ldquo;Was the conduct the direct result of the LEA&apos;s failure to implement the IEP or 504 plan?&rdquo;
              </p>
              <p className="text-muted-foreground text-sm">
                This considers whether the school failed to provide required services, accommodations, or supports that could have prevented the behavior.
              </p>
            </div>
          </div>

          <div className="bg-destructive/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-destructive">
              If the answer to EITHER question is YES, the behavior IS a manifestation of the disability.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Federal Timeline Requirements</h2>
          <p className="text-muted-foreground mb-4">
            Federal regulations establish strict timelines that schools must follow:
          </p>
          <div className="bg-card p-6 rounded-lg my-8 border border-border">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">10 days:</span>
                <span>MDR must be held within 10 school days of the decision to change placement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">Immediate:</span>
                <span>If behavior IS a manifestation, student must return to original placement immediately (with limited exceptions)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">No delay:</span>
                <span>Parents cannot be required to wait for separate hearings or additional procedures</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who Must Participate in the MDR?</h2>
          <p className="text-muted-foreground mb-4">
            Federal law requires specific participants in the MDR process:
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Required Participants:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Parent(s) or guardian(s)</li>
                <li>✓ LEA representative</li>
                <li>✓ Relevant IEP/504 team members</li>
                <li>✓ Others with knowledge of the child</li>
              </ul>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What They Must Review:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Current IEP or 504 plan</li>
                <li>✓ Teacher observations</li>
                <li>✓ Evaluation data</li>
                <li>✓ Parent-provided information</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">If the Behavior IS a Manifestation</h2>
          <p className="text-muted-foreground mb-4">
            When the MDR team determines the behavior was a manifestation of the disability, federal law requires:
          </p>
          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">Mandatory Actions:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li><strong>1. Immediate return to placement:</strong> The student must return to their original placement unless parents agree otherwise or special circumstances apply</li>
              <li><strong>2. Functional Behavioral Assessment (FBA):</strong> If not already conducted, school must complete an FBA</li>
              <li><strong>3. Behavior Intervention Plan (BIP):</strong> Create or modify existing BIP to address the behavior</li>
              <li><strong>4. IEP/504 review:</strong> Team must review and modify the plan as needed</li>
              <li><strong>5. Disciplinary action withdrawal:</strong> All proposed disciplinary changes must be withdrawn</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">If the Behavior Is NOT a Manifestation</h2>
          <p className="text-muted-foreground mb-4">
            Even when behavior is determined not to be a manifestation, students retain important rights:
          </p>
          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <span className="text-primary font-semibold mr-2">•</span>
              <span className="text-muted-foreground">School may apply regular disciplinary procedures</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold mr-2">•</span>
              <span className="text-muted-foreground">Educational services must continue (FAPE requirement)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold mr-2">•</span>
              <span className="text-muted-foreground">Services must enable progress toward IEP goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-semibold mr-2">•</span>
              <span className="text-muted-foreground">FBA and BIP services must be provided as appropriate</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Special Circumstances Under Federal Law</h2>
          <p className="text-muted-foreground mb-4">
            Federal regulations allow schools to remove students to an interim alternative educational setting (IAES) for up to 45 school days, regardless of manifestation determination, for:
          </p>
          <div className="bg-destructive/10 p-6 rounded-lg my-8">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Weapons possession at school or school events</li>
              <li>• Illegal drug possession, use, or distribution at school</li>
              <li>• Infliction of serious bodily injury</li>
            </ul>
            <p className="text-sm mt-4 font-semibold">
              Note: &ldquo;Serious bodily injury&rdquo; has a specific federal definition requiring substantial risk of death, extreme physical pain, protracted and obvious disfigurement, or protracted loss/impairment of bodily function.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Parent Rights During MDR Process</h2>
          <div className="bg-card p-6 rounded-lg my-8 border border-border">
            <h3 className="text-lg font-semibold mb-3">You Have the Right To:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Receive written notice of the MDR meeting</li>
              <li>✓ Participate meaningfully in the determination</li>
              <li>✓ Present evidence and documentation</li>
              <li>✓ Bring advocates or attorneys</li>
              <li>✓ Request copies of all documents reviewed</li>
              <li>✓ Appeal the MDR decision through due process</li>
              <li>✓ Request an expedited hearing if needed</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Preparing for Your Child&apos;s MDR</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">1. Gather Documentation</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Medical records and diagnoses</li>
                <li>• Previous evaluations</li>
                <li>• Behavior tracking data</li>
                <li>• Communication with school about concerns</li>
                <li>• Evidence of requested but unimplemented supports</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">2. Prepare Your Arguments</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Direct connections between disability and behavior</li>
                <li>• Examples of similar past behaviors</li>
                <li>• Implementation failures by the school</li>
                <li>• Missing or inadequate services</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">3. Know Your Evidence</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Highlight specific disability characteristics</li>
                <li>• Document patterns of behavior</li>
                <li>• Show correlation with stressors or triggers</li>
                <li>• Demonstrate need for supports</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common School Violations to Watch For</h2>
          <div className="bg-destructive/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">Red Flags That May Violate Federal Law:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>❌ Proceeding with discipline despite manifestation finding</li>
              <li>❌ Requiring additional hearings after MDR determination</li>
              <li>❌ Claiming &ldquo;suspected&rdquo; disability doesn&apos;t qualify for protections</li>
              <li>❌ Failing to hold MDR within 10-day timeline</li>
              <li>❌ Not including required team members</li>
              <li>❌ Refusing to consider parent-provided evidence</li>
              <li>❌ Pre-determining outcome before meeting</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 504 vs. IDEA: Key Differences</h2>
          <p className="text-muted-foreground mb-4">
            While both laws require MDRs, there are some differences:
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3">IDEA (Special Education)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• More detailed procedural requirements</li>
                <li>• Requires continuation of FAPE</li>
                <li>• Specific team composition rules</li>
                <li>• Detailed appeal procedures</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3">Section 504 (General Education)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Broader disability definition</li>
                <li>• Less prescriptive procedures</li>
                <li>• Still requires manifestation review</li>
                <li>• OCR complaint process available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Appeal Rights and Next Steps</h2>
          <p className="text-muted-foreground mb-4">
            If you disagree with the MDR determination, federal law provides several options:
          </p>
          <ol className="space-y-4 my-8">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">1.</span>
              <div>
                <p className="font-semibold mb-1">Due Process Hearing</p>
                <p className="text-muted-foreground">Request an expedited hearing to challenge the determination</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">2.</span>
              <div>
                <p className="font-semibold mb-1">OCR Complaint</p>
                <p className="text-muted-foreground">File with Office for Civil Rights for Section 504 violations</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">3.</span>
              <div>
                <p className="font-semibold mb-1">State Complaint</p>
                <p className="text-muted-foreground">File with state education agency for IDEA violations</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">4.</span>
              <div>
                <p className="font-semibold mb-1">Stay-Put Rights</p>
                <p className="text-muted-foreground">Invoke right to remain in current placement during appeals</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Legal Citations</h2>
          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-3">Federal Regulations:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>IDEA:</strong> 20 U.S.C. § 1415(k); 34 CFR § 300.530-300.536</li>
              <li>• <strong>Section 504:</strong> 34 CFR § 104.35-104.36</li>
              <li>• <strong>ADA Title II:</strong> 28 CFR Part 35</li>
              <li>• <strong>FERPA:</strong> Rights to educational records access</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Resources for Parents</h2>
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Council of Parent Attorneys and Advocates (COPAA)</h3>
              <p className="text-muted-foreground">Find special education attorneys and advocates in your area</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Wright&apos;s Law</h3>
              <p className="text-muted-foreground">Comprehensive special education law and advocacy information</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Protection &amp; Advocacy Agencies</h3>
              <p className="text-muted-foreground">Every state has a P&amp;A agency providing free advocacy services</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Office for Civil Rights (OCR)</h3>
              <p className="text-muted-foreground">File complaints for Section 504 and ADA violations</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Remember: Time Is Critical</h2>
          <div className="bg-primary/10 p-8 rounded-lg">
            <p className="text-lg font-semibold mb-4">
              MDR proceedings move quickly. Federal timelines are strict, and schools often rush the process.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">✓</span>
                <span className="text-muted-foreground">Document everything immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">✓</span>
                <span className="text-muted-foreground">Request all records in writing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">✓</span>
                <span className="text-muted-foreground">Consider legal representation early</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">✓</span>
                <span className="text-muted-foreground">Know your rights before the meeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-semibold mr-2">✓</span>
                <span className="text-muted-foreground">Don&apos;t sign anything under pressure</span>
              </li>
            </ul>
          </div>
          <p className="text-muted-foreground mt-6 text-center font-semibold">
            Your child&apos;s educational future may depend on the outcome of this process. Be prepared, know your rights, and advocate strongly for your child&apos;s needs.
          </p>
        </section>
      </div>
    </article>
  );
}