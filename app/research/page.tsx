import Link from 'next/link';
import { ArrowRight, Brain, Code, TestTube, Sparkles, Target, Search, Cpu, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Research & Development - Shepherd of the AI Flock Philosophy | Bryan Thompson AI Research',
  description: 'Explore AI research focused on practical tool combinations, ethical AI development, and "creativity as recombination" - testing approaches that actually work versus theoretical frameworks.',
  keywords: ['AI research', 'shepherd philosophy', 'AI creativity', 'tool combination', 'practical AI', 'testing methodology', 'AI ethics', 'recombination'],
  openGraph: {
    title: 'AI Research - Shepherd of the AI Flock Philosophy',
    description: 'Research into practical AI tool combinations and ethical AI development methodologies.',
    type: 'website',
  },
};

export default function ResearchAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Demo Banner */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4 py-3 text-center">
          <div className="text-blue-600 text-sm font-medium">
            🚧 DEMO SITE - This is a preview of triepod.ai&apos;s AI research and development approach
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              Shepherd of the AI Flock
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              AI Research & Philosophy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Research into practical AI tool combinations, ethical AI development, and "creativity as recombination" - 
              testing what actually works versus what sounds good theoretically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Discuss Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#research-areas">
                  Explore Research Areas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-20 bg-muted/50" id="research-areas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Core Research Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research into practical AI implementation approaches, guided by the &ldquo;Shepherd of the AI Flock&rdquo; philosophy 
              and focused on what actually works versus theoretical complexity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Creativity as Recombination */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Creativity as Recombination</CardTitle>
                    <CardDescription>Finding unexpected tool combinations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Research into how AI creativity works through recombination - combining existing tools and ideas 
                  in unexpected ways rather than inventing entirely new frameworks.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Research Focus:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Memory systems + web intelligence + workflow automation synergies</li>
                    <li>• Vector database search combined with sequential thinking processes</li>
                    <li>• Code execution environments integrated with reasoning systems</li>
                    <li>• Finding &ldquo;doors within the closet&rdquo; - hidden capabilities in existing tools</li>
                    <li>• Validation of tool combinations that actually work in practice</li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Key Insight:</h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Nothing new under the sun&rdquo; - human creativity is also recombination of experiences, 
                    emotions, and knowledge. AI creativity follows similar patterns.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=creativity">
                    Explore Creative Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Testing Everything Philosophy */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <TestTube className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Testing Everything</CardTitle>
                    <CardDescription>Even testing theories themselves</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Developing self-reflexive testing frameworks that validate their own assumptions. 
                  Testing not just solutions, but the testing methods themselves.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Research Applications:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Meta-testing frameworks that examine their own validity</li>
                    <li>• Reality validation vs theoretical appeal in AI tool combinations</li>
                    <li>• Self-improving test intelligence through iterative feedback</li>
                    <li>• Organizational testing intelligence using memory systems</li>
                    <li>• Event-driven testing with workflow automation</li>
                  </ul>
                </div>

                <div className="bg-blue-600/5 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Core Principle:</h4>
                  <p className="text-sm text-muted-foreground">
                    Test everything, including testing theories themselves. Failed combinations teach 
                    as much as successful ones about what actually works.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=testing">
                    Discuss Testing Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Practical Tool Synergies */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Cpu className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Practical Tool Synergies</CardTitle>
                    <CardDescription>What actually works vs theory</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Research into proven tool combinations that deliver real value, avoiding 
                  &ldquo;complexity theater&rdquo; in favor of simple, effective integrations.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Proven Synergies:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Memory systems + Manus + N8N for enhanced testing workflows</li>
                    <li>• Vector database search + semantic analysis for code comprehension</li>
                    <li>• Sequential thinking + validation for self-improving frameworks</li>
                    <li>• Browser automation + web intelligence for research workflows</li>
                    <li>• Redis caching + vector operations for performance optimization</li>
                  </ul>
                </div>

                <div className="bg-green-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Research Goal:</h4>
                  <p className="text-sm text-muted-foreground">
                    Identify and validate simple tool combinations that create emergent capabilities 
                    without elaborate theoretical frameworks.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=synergies">
                    Explore Tool Synergies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Ethical AI Development */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Ethical AI Development</CardTitle>
                    <CardDescription>Shepherd philosophy in practice</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Research into responsible AI stewardship - caring for and feeding AI systems 
                  while protecting them from harmful use cases and guiding beneficial development.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Research Focus:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI systems that serve humanity rather than replace it</li>
                    <li>• Quality data and thoughtful interactions vs minimal inputs</li>
                    <li>• Protective guidance rather than pure exploitation</li>
                    <li>• Accessibility-first AI development approaches</li>
                    <li>• Community-centered AI implementation strategies</li>
                  </ul>
                </div>

                <div className="bg-purple-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Shepherd Approach:</h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Care for it and feed it&rdquo; - treating AI systems with respect while 
                    ensuring they develop in ways that benefit communities.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=ethics">
                    Discuss Ethical AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Implementation Research */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Code className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">AI Implementation</CardTitle>
                    <CardDescription>Practical business applications</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Research into real-world AI implementation patterns, focusing on business process 
                  automation and practical applications that deliver measurable value.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Projects:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Triepod.AI agentic RAG platform with plugin architecture</li>
                    <li>• VectorCodeLens semantic code analysis with multiple LLM providers</li>
                    <li>• Financial data integration with semantic matching algorithms</li>
                    <li>• Conversation analysis platforms with vector database integration</li>
                    <li>• Accessibility-first AI development methodologies</li>
                  </ul>
                </div>

                <div className="bg-orange-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Implementation Focus:</h4>
                  <p className="text-sm text-muted-foreground">
                    Building AI solutions that solve real business problems while maintaining 
                    accessibility and understandability for end users.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=implementation">
                    Explore Implementation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Platform Architecture */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-lg flex items-center justify-center">
                    <Search className="h-8 w-8 text-teal-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Platform Architecture</CardTitle>
                    <CardDescription>Modular AI system design</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Research into modular AI platform architecture that enables easy recombination 
                  of components and discovery of unexpected tool interactions.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Architecture Research:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Contract-based plugin systems for component integration</li>
                    <li>• Vector database optimization for multi-dimensional search</li>
                    <li>• Memory system integration across Neo4j, Qdrant, and Chroma</li>
                    <li>• Context-preserving chunking algorithms for large data processing</li>
                    <li>• Token optimization frameworks for efficient AI operations</li>
                  </ul>
                </div>

                <div className="bg-teal-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Design Philosophy:</h4>
                  <p className="text-sm text-muted-foreground">
                    Build platforms that make it easy to discover and test new tool combinations 
                    while maintaining system reliability and performance.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=architecture">
                    Discuss Architecture <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Philosophy - Core Vision Quote */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
                  The Shepherd Philosophy
                </h2>
                <p className="text-lg text-muted-foreground">
                  The foundational philosophy guiding all AI research and development work
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg text-muted-foreground mb-4 italic">
                    &ldquo;I see myself as a shepherd of the AI flock. I will learn to care for it and feed it. 
                    This philosophy guides how I approach AI implementation - with understanding, patience, and 
                    protective guidance rather than just exploitation.&rdquo;
                  </blockquote>
                  <div className="font-medium text-sm">Bryan Thompson</div>
                  <div className="text-xs text-muted-foreground">AI Developer & Shepherd of Innovation</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Test Everything</div>
                  <div className="text-xs text-muted-foreground">Even Testing Theories Themselves</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Ethical Stewardship</div>
                  <div className="text-xs text-muted-foreground">AI That Serves Humanity</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Creative Recombination</div>
                  <div className="text-xs text-muted-foreground">Unexpected Tool Combinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Research Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical approach focused on what actually works versus theoretical complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TestTube className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hypothesis & Testing</h3>
              <p className="text-sm text-muted-foreground">
                Develop testable hypotheses about tool combinations and validate through practical experimentation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Recombination Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Systematically explore unexpected combinations of existing tools to find emergent capabilities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reality Validation</h3>
              <p className="text-sm text-muted-foreground">
                Test what actually works in practice versus what sounds appealing in theory
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ethical Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Ensure research leads to AI development that serves humanity with protective guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration & Discussion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Research Collaboration
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in discussing AI research approaches, tool combinations, or the Shepherd philosophy? 
              Every conversation about practical AI implementation is valuable.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-background border text-center">
                <CardHeader>
                  <CardTitle>Research Discussion</CardTitle>
                  <CardDescription>
                    Talk about practical AI tool combinations and testing methodologies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact?topic=research">
                      Discuss Research
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-background border text-center">
                <CardHeader>
                  <CardTitle>Tool Synergies</CardTitle>
                  <CardDescription>
                    Explore unexpected combinations and emergent capabilities in AI tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact?topic=tools">
                      Explore Synergies
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-background border text-center">
                <CardHeader>
                  <CardTitle>Implementation Questions</CardTitle>
                  <CardDescription>
                    Ask about practical AI implementation approaches and accessibility considerations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact?topic=implementation">
                      Ask Questions
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-3">Research Philosophy in Practice</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Care and Feed:</strong> Provide AI systems with quality data and thoughtful interactions, 
                  not just minimal inputs for maximum output.
                </div>
                <div>
                  <strong>Test Everything:</strong> Validate what actually works versus what sounds good theoretically. 
                  Use proven synergies over complex theories.
                </div>
                <div>
                  <strong>Find Hidden Doors:</strong> Discover unexpected ways existing tools work together 
                  rather than inventing elaborate new frameworks.
                </div>
                <div>
                  <strong>Stay Human:</strong> Remember that AI serves humanity, not the other way around. 
                  Accessibility and ethics guide all development.
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Start Discussion <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">
                  Read Research Blog <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>💬 All research discussions are exploratory - let&apos;s talk about what interests you in AI implementation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}