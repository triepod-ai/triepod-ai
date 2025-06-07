'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Database, Brain, Zap, Shield } from 'lucide-react'

export default function VectorCodeLensDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/vector-code-lens" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">VectorCodeLens Documentation</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to semantic codebase analysis using vector embeddings and LLMs
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 hover:underline">Overview</a></li>
            <li><a href="#installation" className="text-blue-600 hover:underline">Installation & Setup</a></li>
            <li><a href="#configuration" className="text-blue-600 hover:underline">Configuration</a></li>
            <li><a href="#usage" className="text-blue-600 hover:underline">Usage Examples</a></li>
            <li><a href="#api" className="text-blue-600 hover:underline">API Reference</a></li>
            <li><a href="#architecture" className="text-blue-600 hover:underline">Architecture</a></li>
            <li><a href="#troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</a></li>
          </ul>
        </nav>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              VectorCodeLens is a semantic codebase analysis platform that combines vector embeddings, 
              large language models, and the Model Context Protocol to provide intelligent code understanding 
              and natural language querying capabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="text-sm space-y-1">
                  <li>• Semantic code analysis</li>
                  <li>• Natural language queries</li>
                  <li>• Vector-powered search</li>
                  <li>• Progressive enhancement</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Technologies</h3>
                <ul className="text-sm space-y-1">
                  <li>• TypeScript & Node.js</li>
                  <li>• Qdrant Vector Database</li>
                  <li>• Ollama & Claude API</li>
                  <li>• Model Context Protocol</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-600" />
            Installation & Setup
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Node.js 18.x or higher</li>
                <li>TypeScript 5.x</li>
                <li>Docker (optional, for services)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Start</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div># Clone the repository</div>
                <div>git clone &lt;repository-url&gt;</div>
                <div>cd VectorCodeLens</div>
                <div className="mt-2"># Install dependencies</div>
                <div>npm install</div>
                <div className="mt-2"># Build the project</div>
                <div>npm run build</div>
                <div className="mt-2"># Start the service</div>
                <div>npm start</div>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" />
            Configuration
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Environment Variables</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div># Vector Database</div>
                <div>VECTOR_DB_URL=http://127.0.0.1:6333</div>
                <div className="mt-2"># Local LLM Service</div>
                <div>LLM_SERVICE_URL=http://localhost:11434</div>
                <div className="mt-2"># Claude API (optional)</div>
                <div>CLAUDE_API_KEY=your_api_key_here</div>
                <div className="mt-2"># Performance Settings</div>
                <div>CHUNK_SIZE=100</div>
                <div>CHUNK_OVERLAP=20</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">External Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Qdrant Vector Database</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                    docker run -p 6333:6333 qdrant/qdrant
                  </code>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Ollama Local LLM</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                    ollama serve
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-orange-600" />
            Usage Examples
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Analyze a Codebase</h3>
              <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400">{"// Using the MCP tool interface"}</div>
                <div className="text-blue-400">const</div> <div className="text-white">result = </div><div className="text-blue-400">await</div> <div className="text-yellow-400">codeAnalyzer</div><div className="text-white">({`{`}</div>
                <div className="ml-4 text-green-400">directory: <div className="text-red-400">&ldquo;/path/to/your/project&rdquo;</div>,</div>
                <div className="ml-4 text-green-400">filePatterns: [<div className="text-red-400">&ldquo;*.ts&rdquo;</div>, <div className="text-red-400">&ldquo;*.js&rdquo;</div>],</div>
                <div className="ml-4 text-green-400">includeSummary: <div className="text-blue-400">true</div></div>
                <div className="text-white">{`});`}</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Query Your Code</h3>
              <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400">{"// Ask natural language questions"}</div>
                <div className="text-blue-400">const</div> <div className="text-white">results = </div><div className="text-blue-400">await</div> <div className="text-yellow-400">queryCodebase</div><div className="text-white">({`{`}</div>
                <div className="ml-4 text-green-400">query: <div className="text-red-400">&ldquo;How are errors handled in this codebase?&rdquo;</div>,</div>
                <div className="ml-4 text-green-400">limit: <div className="text-purple-400">5</div></div>
                <div className="text-white">{`});`}</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Using the Unified Tool</h3>
              <div className="bg-black text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400">{"// Unified vectorCodeLens tool"}</div>
                <div className="text-blue-400">const</div> <div className="text-white">response = </div><div className="text-blue-400">await</div> <div className="text-yellow-400">vectorCodeLens</div><div className="text-white">({`{`}</div>
                <div className="ml-4 text-green-400">operation: <div className="text-red-400">&ldquo;analyze&rdquo;</div>,</div>
                <div className="ml-4 text-green-400">codebasePath: <div className="text-red-400">&ldquo;./src&rdquo;</div>,</div>
                <div className="ml-4 text-green-400">options: {`{`} deep: <div className="text-blue-400">true</div> {`}`}</div>
                <div className="text-white">{`});`}</div>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-indigo-600" />
            API Reference
          </h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">vectorCodeLens Tool</h3>
              <p className="text-gray-600 mb-4">
                Unified interface for analyzing, querying, and extracting information from codebases.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Operations:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li><code>&ldquo;analyze&rdquo;</code> - Analyze codebase structure and patterns</li>
                    <li><code>&ldquo;query&rdquo;</code> - Ask natural language questions</li>
                    <li><code>&ldquo;extract&rdquo;</code> - Extract specific code elements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Parameters:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li><code>operation</code> (required) - Operation to perform</li>
                    <li><code>query</code> - Natural language query or extraction target</li>
                    <li><code>codebasePath</code> - Path to codebase directory</li>
                    <li><code>options</code> - Additional operation-specific options</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Response Format</h3>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                <div>{`{`}</div>
                <div className="ml-4">&ldquo;success&rdquo;: boolean,</div>
                <div className="ml-4">&ldquo;data&rdquo;: {`{`}</div>
                <div className="ml-8">&ldquo;results&rdquo;: CodeMatch[],</div>
                <div className="ml-8">&ldquo;totalMatches&rdquo;: number,</div>
                <div className="ml-8">&ldquo;executionTime&rdquo;: number</div>
                <div className="ml-4">{`},`}</div>
                <div className="ml-4">&ldquo;error&rdquo;?: string</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-600" />
            Architecture
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Core Components</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Scanner Module</h4>
                  <p className="text-sm text-gray-600">File discovery, content extraction, and intelligent code chunking</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Analysis Module</h4>
                  <p className="text-sm text-gray-600">LLM-based code analysis and pattern recognition</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Storage Layer</h4>
                  <p className="text-sm text-gray-600">Vector database integration and embedding management</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Query System</h4>
                  <p className="text-sm text-gray-600">Natural language processing and semantic search</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Data Flow</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm space-y-2">
                  <div><strong>Analysis:</strong> Directory scanning → File chunking → LLM analysis → Vector embedding → Storage</div>
                  <div><strong>Query:</strong> Natural language query → Embedding generation → Vector similarity search → Result aggregation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-600" />
            Troubleshooting
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Common Issues</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium">Service Connection Issues</h4>
                  <p className="text-sm text-gray-600">
                    Ensure Qdrant and Ollama services are running. The system will gracefully degrade functionality if services are unavailable.
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium">Memory Issues</h4>
                  <p className="text-sm text-gray-600">
                    For large codebases, adjust chunk size and overlap settings in environment variables to reduce memory usage.
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium">TypeScript Compilation</h4>
                  <p className="text-sm text-gray-600">
                    Run <code>npm run build</code> after any configuration changes to ensure proper compilation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Development Commands</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div># Check service dependencies</div>
                <div>npm run check-deps</div>
                <div className="mt-2"># Run diagnostics</div>
                <div>npm run diagnose</div>
                <div className="mt-2"># Test Ollama integration</div>
                <div>npm run test:ollama</div>
                <div className="mt-2"># Test analysis functionality</div>
                <div>npm run test:analysis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              VectorCodeLens - Semantic Code Analysis Platform
            </p>
            <Link 
              href="/projects/vector-code-lens" 
              className="text-blue-600 hover:underline text-sm"
            >
              ← Back to Project
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}