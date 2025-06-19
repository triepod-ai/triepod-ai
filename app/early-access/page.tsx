'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Shield, Brain, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function ConsultationRequestPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    toast.success('Consultation request submitted successfully!');
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Request Received!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your interest in AI consulting services. We'll review your 
            request and get back to you within 24 hours to schedule your consultation.
          </p>
          <div className="bg-white/5 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  We'll contact you within 24 hours to schedule your consultation
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  Initial consultation includes strategic assessment and recommendations
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  Receive customized AI strategy proposal tailored to your business
                </p>
              </div>
            </div>
          </div>
          <Button asChild>
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="default">
              Strategic AI Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Request Your AI Strategy Consultation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with strategic AI implementation. Get expert guidance 
              from a consultant with proven Fortune 500 experience and measurable results.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Consultation Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Strategic AI Roadmap</p>
                    <p className="text-sm text-muted-foreground">
                      Custom implementation plan aligned with your business goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">ROI Assessment</p>
                    <p className="text-sm text-muted-foreground">
                      Detailed analysis of potential cost savings and revenue opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Implementation Guidance</p>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step guidance for successful AI adoption
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Risk Mitigation</p>
                    <p className="text-sm text-muted-foreground">
                      Identify and address potential challenges before they impact business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Request Form */}
            <div className="bg-white/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Schedule Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Business Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    type="text" 
                    required
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Your Role</Label>
                  <Input 
                    id="role" 
                    type="text" 
                    required
                    placeholder="CEO, CTO, Director, etc."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="consultation-type">Consultation Focus</Label>
                  <select 
                    id="consultation-type" 
                    required
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="strategy">AI Strategy & Planning</option>
                    <option value="implementation">Implementation Guidance</option>
                    <option value="optimization">Process Optimization</option>
                    <option value="enterprise">Enterprise AI Solutions</option>
                    <option value="training">Team Training & Development</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Request Consultation'} 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours to schedule your consultation.
                </p>
              </form>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Successful Consultations</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-muted-foreground">Implementation Success Rate</p>
              </div>
              <div>
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">$16K+</p>
                <p className="text-sm text-muted-foreground">Validated Value Created</p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">$9B</p>
                <p className="text-sm text-muted-foreground">State AI Initiative</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">What's included in the consultation?</h3>
                <p className="text-muted-foreground">
                  Your consultation includes strategic assessment, custom AI roadmap, 
                  ROI analysis, and actionable implementation recommendations tailored 
                  to your specific business needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">How much does it cost?</h3>
                <p className="text-muted-foreground">
                  Initial strategic consultations are offered at competitive rates. 
                  We'll provide transparent pricing based on your specific requirements 
                  during our discussion.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">What makes your approach different?</h3>
                <p className="text-muted-foreground">
                  I bring Fortune 500 experience with proven results—including $16,000+ 
                  in validated value creation and 85% project success rates. My approach 
                  combines strategic thinking with practical implementation guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}