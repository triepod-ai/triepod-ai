'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Zap, Shield, Settings, Download } from 'lucide-react'

export default function OllamaMcpWrapperDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/ollama-mcp-wrapper" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Ollama MCP Server Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete guide to setting up and using the Model Context Protocol server for Ollama integration
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Contents
          </h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 hover:underline">Overview</a></li>
            <li><a href="#installation" className="text-blue-600 hover:underline">Installation &amp; Setup</a></li>
            <li><a href="#configuration" className="text-blue-600 hover:underline">Configuration</a></li>
            <li><a href="#tools" className="text-blue-600 hover:underline">Available Tools</a></li>
            <li><a href="#examples" className="text-blue-600 hover:underline">Usage Examples</a></li>
            <li><a href="#troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</a></li>
          </ul>
        </nav>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Overview
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The Ollama MCP Server is a TypeScript-based implementation that enables Claude Desktop 
              to interact with local Ollama models through the Model Context Protocol. This integration 
              provides seamless access to locally-hosted language models while maintaining privacy and control.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Key Benefits</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Complete privacy - models run locally</li>
                <li>• OpenAI-compatible chat completion API</li>
                <li>• Full Ollama operation support</li>
                <li>• Enterprise-grade error handling</li>
                <li>• Configurable timeouts and settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Download className="w-6 h-6" />
            Installation &amp; Setup
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• Node.js 18+ installed</li>
                <li>• Ollama installed and running</li>
                <li>• Claude Desktop (for MCP integration)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Installation Steps</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-gray-100 text-sm">
                  <div># Clone the repository</div>
                  <div>git clone https://github.com/BryanNTGitHub/ollama-wrapper</div>
                  <div>cd ollama-wrapper</div>
                  <div></div>
                  <div># Install dependencies</div>
                  <div>npm install</div>
                  <div></div>
                  <div># Build the TypeScript code</div>
                  <div>npm run build</div>
                  <div></div>
                  <div># Start the server</div>
                  <div>npm start</div>
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Configuration
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Environment Variables</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Variable</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono">OLLAMA_HOST</td>
                      <td className="border border-gray-300 px-4 py-2 font-mono">http://127.0.0.1:11434</td>
                      <td className="border border-gray-300 px-4 py-2">Ollama API endpoint</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono">OLLAMA_TIMEOUT</td>
                      <td className="border border-gray-300 px-4 py-2 font-mono">60000</td>
                      <td className="border border-gray-300 px-4 py-2">Request timeout (ms)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono">MCP_SAFE_MODE</td>
                      <td className="border border-gray-300 px-4 py-2 font-mono">true</td>
                      <td className="border border-gray-300 px-4 py-2">Enable MCP safe mode</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Available Tools
          </h2>
          <div className="grid gap-6">
            {[
              { name: 'serve', desc: 'Start the Ollama server', args: 'None' },
              { name: 'create', desc: 'Create a model from a Modelfile', args: 'name, modelfile' },
              { name: 'show', desc: 'Show information about a model', args: 'name' },
              { name: 'run', desc: 'Run a prompt through a model', args: 'name, prompt, timeout?' },
              { name: 'pull', desc: 'Pull a model from registry', args: 'name' },
              { name: 'push', desc: 'Push a model to registry', args: 'name' },
              { name: 'list', desc: 'List available models', args: 'None' },
              { name: 'cp', desc: 'Copy a model', args: 'source, destination' },
              { name: 'rm', desc: 'Remove a model', args: 'name' },
              { name: 'chat_completion', desc: 'OpenAI-compatible chat API', args: 'model, messages, temperature?, timeout?' }
            ].map((tool) => (
              <div key={tool.name} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-2">{tool.desc}</p>
                <p className="text-sm text-gray-500">
                  <strong>Parameters:</strong> {tool.args}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Usage Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Basic Model Interaction</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-gray-100 text-sm">
                  <div># Pull a model</div>
                  <div>ollama pull llama2</div>
                  <div></div>
                  <div># List available models</div>
                  <div>ollama list</div>
                  <div></div>
                  <div># Run a prompt</div>
                  <div>ollama run llama2 &ldquo;Hello, how are you?&rdquo;</div>
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Chat Completion API</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-gray-100 text-sm">
                  <div>{`{`}</div>
                  <div>&nbsp;&nbsp;&ldquo;model&rdquo;: &ldquo;llama2&rdquo;,</div>
                  <div>&nbsp;&nbsp;&ldquo;messages&rdquo;: [</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;{`{`} &ldquo;role&rdquo;: &ldquo;user&rdquo;, &ldquo;content&rdquo;: &ldquo;Hello!&rdquo; {`}`}</div>
                  <div>&nbsp;&nbsp;],</div>
                  <div>&nbsp;&nbsp;&ldquo;temperature&rdquo;: 0.7</div>
                  <div>{`}`}</div>
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Troubleshooting
          </h2>
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Common Issues</h3>
              <ul className="text-yellow-700 space-y-2">
                <li><strong>Connection refused:</strong> Ensure Ollama is running on the correct port</li>
                <li><strong>Model not found:</strong> Pull the model first using &ldquo;ollama pull [model-name]&rdquo;</li>
                <li><strong>Timeout errors:</strong> Increase OLLAMA_TIMEOUT for large models</li>
                <li><strong>MCP connection issues:</strong> Check Claude Desktop MCP configuration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Debug Mode</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-gray-100 text-sm">
                  <div># Run with debug logging</div>
                  <div>NODE_OPTIONS=&ldquo;--no-warnings&rdquo; npm start</div>
                  <div></div>
                  <div># Test MCP connection</div>
                  <div>npm run inspector</div>
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 mt-12">
          <p className="text-gray-600 text-center">
            For more information, visit the{' '}
            <a href="https://github.com/BryanNTGitHub/ollama-wrapper" className="text-blue-600 hover:underline">
              GitHub repository
            </a>
          </p>
        </footer>
      </div>
    </article>
  )
}