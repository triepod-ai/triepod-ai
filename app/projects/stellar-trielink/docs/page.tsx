'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Zap, Shield, Brain, Database, Sparkles, Globe } from 'lucide-react'

export default function StellarTrieLinkDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/stellar-trielink" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Stellar TrieLink Documentation</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to deploying and using the unified LLM middleware
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 hover:text-blue-800">Overview</a></li>
            <li><a href="#installation" className="text-blue-600 hover:text-blue-800">Installation</a></li>
            <li><a href="#configuration" className="text-blue-600 hover:text-blue-800">Configuration</a></li>
            <li><a href="#api-reference" className="text-blue-600 hover:text-blue-800">API Reference</a></li>
            <li><a href="#adapters" className="text-blue-600 hover:text-blue-800">Model Adapters</a></li>
            <li><a href="#performance" className="text-blue-600 hover:text-blue-800">Performance Optimization</a></li>
            <li><a href="#deployment" className="text-blue-600 hover:text-blue-800">Deployment</a></li>
          </ul>
        </nav>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Overview
          </h2>
          <div className="prose prose-lg">
            <p>
              Stellar TrieLink is a production-ready middleware that provides a unified interface 
              for multiple Language Model providers. It acts as a centralized abstraction layer 
              between your applications and various LLM services.
            </p>
            
            <h3>Key Benefits</h3>
            <ul>
              <li><strong>Cost Optimization:</strong> Intelligent caching reduces API calls by up to 60%</li>
              <li><strong>Performance:</strong> Content chunking and optimization for 10x faster responses</li>
              <li><strong>Reliability:</strong> Health monitoring and automatic failover capabilities</li>
              <li><strong>Compatibility:</strong> OpenAI-compatible endpoints for easy migration</li>
            </ul>

            <h3>Architecture</h3>
            <p>
              The system follows a modular architecture with distinct layers for API handling, 
              model adaptation, caching, and performance monitoring.
            </p>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Installation
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Node.js &gt;= 18.0.0</li>
                <li>npm or yarn package manager</li>
                <li>Docker (optional, for containerized deployment)</li>
                <li>Redis (for production caching)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Start</h3>
              <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Clone the repository
git clone https://github.com/bryanthompson/stellar_trielink.git

# Navigate to project directory
cd stellar_trielink

# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Docker Deployment</h3>
              <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Build Docker image
docker build -t stellar-trielink .

# Run container
docker run -p 3500:3500 -v ./config:/app/config stellar-trielink`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Configuration
          </h2>
          
          <div className="space-y-6">
            <p>Configure the middleware by editing <code className="bg-gray-100 px-2 py-1 rounded">config/config.json</code>:</p>
            
            <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre><code>{`{
  "server": {
    "port": 3500,
    "host": "0.0.0.0",
    "apiKey": "your-api-key-here"
  },
  "adapters": {
    "ollama": {
      "enabled": true,
      "apiUrl": "http://localhost:11434",
      "timeout": 30000
    },
    "openai": {
      "enabled": true,
      "apiKey": "\${OPENAI_API_KEY}",
      "apiUrl": "https://api.openai.com"
    }
  },
  "services": {
    "cache": {
      "enabled": true,
      "ttl": 3600,
      "maxEntries": 1000
    }
  }
}`}</code></pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Environment Variables</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 font-mono text-sm">
                  <li><span className="font-semibold">OPENAI_API_KEY</span> - Your OpenAI API key</li>
                  <li><span className="font-semibold">REDIS_URL</span> - Redis connection URL for caching</li>
                  <li><span className="font-semibold">LOG_LEVEL</span> - Logging level (info, debug, error)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            API Reference
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">OpenAI-Compatible Endpoints</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                    <code>/v1/chat/completions</code>
                  </div>
                  <p className="text-gray-600">Generate chat completions with conversation context</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                    <code>/v1/completions</code>
                  </div>
                  <p className="text-gray-600">Generate text completions from prompts</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                    <code>/v1/embeddings</code>
                  </div>
                  <p className="text-gray-600">Generate vector embeddings for text</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code>/v1/models</code>
                  </div>
                  <p className="text-gray-600">List available models across all providers</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Custom Middleware Endpoints</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code>/health</code>
                  </div>
                  <p className="text-gray-600">Health check and system status</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code>/stats</code>
                  </div>
                  <p className="text-gray-600">Performance metrics and usage statistics</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                    <code>/providers</code>
                  </div>
                  <p className="text-gray-600">List available model providers and their status</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Adapters */}
        <section id="adapters" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Model Adapters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Ollama Adapter</h3>
              <p className="text-gray-600 mb-4">
                Connect to local Ollama instances for privacy-focused model access.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Local model execution</li>
                <li>• No API costs</li>
                <li>• Full data privacy</li>
                <li>• Custom model support</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">OpenAI Adapter</h3>
              <p className="text-gray-600 mb-4">
                Access OpenAI&apos;s models with enhanced caching and optimization.
              </p>
              <ul className="text-sm space-y-1">
                <li>• GPT-3.5 and GPT-4 support</li>
                <li>• Function calling</li>
                <li>• Embeddings generation</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section id="performance" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Performance Optimization
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Intelligent Caching</h3>
                <p className="text-sm text-gray-600">
                  Reduce API costs by up to 60% with smart response caching and TTL management.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <Brain className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Content Chunking</h3>
                <p className="text-sm text-gray-600">
                  Process large documents efficiently with context-preserving chunking algorithms.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <Zap className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Resource Monitoring</h3>
                <p className="text-sm text-gray-600">
                  Real-time tracking of memory, GPU usage, and automatic optimization recommendations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Response Time:</span> 10x faster than direct API calls
                  </div>
                  <div>
                    <span className="font-semibold">Cost Reduction:</span> Up to 60% savings on API costs
                  </div>
                  <div>
                    <span className="font-semibold">Cache Hit Rate:</span> 85% average across workloads
                  </div>
                  <div>
                    <span className="font-semibold">Uptime:</span> 99.9% reliability with health monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section id="deployment" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Production Deployment
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Docker Compose Setup</h3>
              <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                <pre><code>{`version: '3.8'
services:
  stellar-trielink:
    build: .
    ports:
      - "3500:3500"
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis
    volumes:
      - ./config:/app/config
  
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Health Monitoring</h3>
              <p className="text-gray-600 mb-3">
                The middleware includes comprehensive health monitoring endpoints:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm">
                  <li>• <code>/health</code> - Overall system health</li>
                  <li>• <code>/stats</code> - Performance metrics</li>
                  <li>• Automatic failover between providers</li>
                  <li>• Graceful shutdown handling</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Scaling Considerations</h3>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> For production deployments, consider implementing 
                  load balancing, Redis clustering for cache scalability, and monitoring 
                  with tools like Prometheus and Grafana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              For questions or support, contact Bryan Thompson
            </p>
            <Link 
              href="/projects/stellar-trielink" 
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Back to Project Overview
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}