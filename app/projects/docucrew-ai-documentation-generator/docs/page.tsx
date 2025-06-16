'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Zap, Brain, Globe, Users, CheckCircle } from 'lucide-react'

export default function DocuCrewDocumentation() {
  return (
    <article className="min-h-screen py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/docucrew-ai-documentation-generator" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DocuCrew Documentation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete guide to setting up and using the AI-powered documentation generation system
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Table of Contents
          </h2>
          <nav className="space-y-2">
            <a href="#overview" className="block text-blue-600 hover:text-blue-800">1. Overview</a>
            <a href="#installation" className="block text-blue-600 hover:text-blue-800">2. Installation</a>
            <a href="#usage" className="block text-blue-600 hover:text-blue-800">3. Usage</a>
            <a href="#agents" className="block text-blue-600 hover:text-blue-800">4. Agent System</a>
            <a href="#api" className="block text-blue-600 hover:text-blue-800">5. API Reference</a>
            <a href="#examples" className="block text-blue-600 hover:text-blue-800">6. Examples</a>
          </nav>
        </div>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              DocuCrew is an intelligent multi-agent system that automatically generates comprehensive 
              documentation for GitHub repositories. Using CrewAI&apos;s collaborative framework, five 
              specialized AI agents work together to analyze your code and create professional documentation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Automated documentation generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Real-time progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional markdown output
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Multi-agent collaboration
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Stack</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• CrewAI & LangChain</li>
                  <li>• FastAPI Backend</li>
                  <li>• Next.js 14 Frontend</li>
                  <li>• WebSocket Communication</li>
                  <li>• OpenAI GPT-4</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-600" />
            Installation
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Python 3.11+</li>
                <li>Node.js 18+</li>
                <li>OpenAI API key</li>
                <li>Git</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend Setup</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  {`# Clone repository
git clone https://github.com/triepod-ai/docucrew-ai-documentation-generator
cd docucrew-ai-documentation-generator

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt

# Environment configuration
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY

# Start backend server
python main.py`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Setup</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  {`# Frontend setup (new terminal)
cd frontend
npm install
npm run dev

# Access application
# Open http://localhost:3000`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-600" />
            Usage
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Start</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Open the application at <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code></li>
                <li>Enter a GitHub repository URL in the input field</li>
                <li>Click &ldquo;Generate Documentation&rdquo; to start the process</li>
                <li>Watch the real-time progress as agents analyze your repository</li>
                <li>Download the generated documentation when complete</li>
              </ol>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Globe className="w-5 h-5 inline mr-2" />
                Supported Repositories
              </h3>
              <p className="text-gray-700 mb-3">DocuCrew works with any GitHub repository, including:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• Python projects</li>
                <li>• JavaScript/TypeScript</li>
                <li>• React applications</li>
                <li>• FastAPI/Flask APIs</li>
                <li>• Node.js backends</li>
                <li>• Machine learning projects</li>
                <li>• Open source libraries</li>
                <li>• Private repositories (with token)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Agent System */}
        <section id="agents" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            Multi-Agent System
          </h2>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Agent Workflow</h3>
              <p className="text-gray-700 mb-4">
                DocuCrew employs five specialized agents that work sequentially to create comprehensive documentation:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Code Analyzer Agent</h4>
                    <p className="text-sm text-gray-700">Examines repository structure, identifies key files, and analyzes code patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">API Documenter Agent</h4>
                    <p className="text-sm text-gray-700">Identifies and documents API endpoints, parameters, and responses</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">README Writer Agent</h4>
                    <p className="text-sm text-gray-700">Creates user-friendly documentation with installation and usage instructions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Example Creator Agent</h4>
                    <p className="text-sm text-gray-700">Generates practical usage examples and code snippets</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Editor Agent</h4>
                    <p className="text-sm text-gray-700">Reviews and polishes all documentation for consistency and quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-red-600" />
            API Reference
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Base URL</h3>
              <code className="bg-gray-100 px-3 py-2 rounded block">http://localhost:8000</code>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">POST /api/analyze</h3>
              <p className="text-gray-700 mb-4">Analyzes a GitHub repository structure</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Request Body:</h4>
                  <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <code className="text-green-400 text-sm">
{`{
  "repo_url": "https://github.com/username/repository",
  "github_token": "optional_token_for_private_repos"
}`}
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Response:</h4>
                  <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <code className="text-green-400 text-sm">
{`{
  "success": true,
  "data": {
    "structure": {...},
    "files": [...],
    "metadata": {...}
  },
  "timestamp": "2024-01-01T00:00:00Z"
}`}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">WebSocket /ws</h3>
              <p className="text-gray-700 mb-4">Real-time updates during documentation generation</p>
              
              <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                <code className="text-green-400 text-sm">
{`// Connect to WebSocket
const ws = new WebSocket('ws://localhost:8000/ws');

// Receive updates
ws.onmessage = (event) => {
  const update = JSON.parse(event.data);
  console.log(update.agent, update.status, update.message);
};`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            Examples
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sample Test Repositories</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Simple Project</h4>
                  <code className="text-sm text-blue-600">https://github.com/kennethreitz/requests</code>
                  <p className="text-sm text-gray-600 mt-1">Well-documented Python HTTP library - good for testing basic features</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Medium Complexity</h4>
                  <code className="text-sm text-blue-600">https://github.com/tiangolo/fastapi</code>
                  <p className="text-sm text-gray-600 mt-1">Modern Python web framework - tests API documentation features</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Complex Project</h4>
                  <code className="text-sm text-blue-600">https://github.com/facebook/react</code>
                  <p className="text-sm text-gray-600 mt-1">Large JavaScript library - stress test for agent coordination</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Output</h3>
              <p className="text-gray-700 mb-3">Each documentation generation produces:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Comprehensive README with installation instructions</li>
                <li>• API documentation (if applicable)</li>
                <li>• Usage examples and code snippets</li>
                <li>• Project structure overview</li>
                <li>• Contributing guidelines</li>
                <li>• Deployment instructions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-center text-gray-600">
            For more information, visit the{' '}
            <Link href="/projects/docucrew-ai-documentation-generator" className="text-blue-600 hover:text-blue-800">
              project page
            </Link>{' '}
            or check the{' '}
            <a href="https://github.com/triepod-ai/docucrew-ai-documentation-generator" className="text-blue-600 hover:text-blue-800">
              GitHub repository
            </a>.
          </p>
        </div>
      </div>
    </article>
  )
}