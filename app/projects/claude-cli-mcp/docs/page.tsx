'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Shield, Zap } from 'lucide-react'

export default function ClaudeCliMcpDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/claude-cli-mcp" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Claude CLI MCP Server Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete guide to setting up and using the Claude CLI MCP Server for AI integration
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 hover:underline">Overview</a></li>
            <li><a href="#prerequisites" className="text-blue-600 hover:underline">Prerequisites</a></li>
            <li><a href="#installation" className="text-blue-600 hover:underline">Installation</a></li>
            <li><a href="#configuration" className="text-blue-600 hover:underline">Configuration</a></li>
            <li><a href="#running" className="text-blue-600 hover:underline">Running the Server</a></li>
            <li><a href="#api-reference" className="text-blue-600 hover:underline">API Reference</a></li>
            <li><a href="#examples" className="text-blue-600 hover:underline">Usage Examples</a></li>
            <li><a href="#security" className="text-blue-600 hover:underline">Security</a></li>
            <li><a href="#deployment" className="text-blue-600 hover:underline">Docker Deployment</a></li>
          </ul>
        </nav>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Overview
          </h2>
          <p className="text-gray-700 mb-4">
            The Claude CLI MCP Server is a minimal yet powerful Model Context Protocol (MCP) server that exposes 
            Claude Code CLI functionality through standardized tools. It enables programmatic access to Claude&apos;s 
            capabilities via secure subprocess execution with JSON responses.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Key Benefits</h3>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Secure subprocess execution with input validation</li>
              <li>Session continuity for multi-turn conversations</li>
              <li>File processing capabilities</li>
              <li>JSON-formatted responses with token tracking</li>
              <li>Docker-ready deployment</li>
            </ul>
          </div>
        </section>

        {/* Prerequisites */}
        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Python 3.8+</strong> - Required for running the server
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Claude Code CLI</strong> - Must be installed and configured
                <br />
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">pip install claude-cli</code>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Anthropic API Key</strong> - Configure for Claude Code authentication
              </div>
            </li>
          </ul>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Installation
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Clone the Repository</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`git clone https://github.com/bryan-triepod/claude-cli-mcp.git
cd claude-cli-mcp`}</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">2. Create Virtual Environment</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Install Dependencies</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>pip install -e .</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Configuration</h2>
          <div className="space-y-4">
            <p>Create a <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file for configuration:</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`CLAUDE_CLI_PATH=claude    # Path to Claude CLI (default: assumes in PATH)
PORT=8060                 # Server port
LOG_LEVEL=INFO           # Logging level`}</code>
            </pre>
          </div>
        </section>

        {/* Running */}
        <section id="running" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Running the Server</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Start the MCP Server</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>python -m src.claude_cli_mcp.main</code>
            </pre>
            <p className="text-gray-600">
              The server will start on <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:8060</code> by default.
            </p>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            API Reference
          </h2>
          
          <div className="space-y-8">
            {/* claude_query */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">claude_query</h3>
              <p className="text-gray-600 mb-4">Execute one-shot queries with JSON response.</p>
              
              <h4 className="font-semibold mb-2">Parameters:</h4>
              <ul className="space-y-2 mb-4">
                <li><code className="bg-gray-100 px-2 py-1 rounded">query</code> (string, required): The prompt to send to Claude</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">timeout</code> (int, optional): Maximum execution time in seconds (default: 30)</li>
              </ul>

              <h4 className="font-semibold mb-2">Example:</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{
  "tool": "claude_query",
  "arguments": {
    "query": "Explain quantum computing in simple terms",
    "timeout": 30
  }
}`}</code>
              </pre>
            </div>

            {/* claude_session_query */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">claude_session_query</h3>
              <p className="text-gray-600 mb-4">Query Claude with session continuity support.</p>
              
              <h4 className="font-semibold mb-2">Parameters:</h4>
              <ul className="space-y-2 mb-4">
                <li><code className="bg-gray-100 px-2 py-1 rounded">query</code> (string, required): The prompt to send to Claude</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">session_id</code> (string, optional): Specific session ID to resume</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">continue_recent</code> (bool, optional): Continue the most recent session</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">timeout</code> (int, optional): Maximum execution time (default: 30)</li>
              </ul>
            </div>

            {/* claude_process_file */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">claude_process_file</h3>
              <p className="text-gray-600 mb-4">Process file content with Claude.</p>
              
              <h4 className="font-semibold mb-2">Parameters:</h4>
              <ul className="space-y-2 mb-4">
                <li><code className="bg-gray-100 px-2 py-1 rounded">file_path</code> (string, required): Path to the file to process</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">query</code> (string, required): The prompt for processing the file</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">timeout</code> (int, optional): Maximum execution time (default: 60)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Usage Examples</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Python MCP Client</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`from mcp import Client

async with Client("http://localhost:8060") as client:
    result = await client.call_tool(
        "claude_query",
        {"query": "Hello Claude!"}
    )`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Session Conversation</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`# First query
result1 = await client.call_tool(
    "claude_session_query",
    {"query": "Tell me about Python decorators"}
)
session_id = result1.get("session_id")

# Follow-up query
result2 = await client.call_tool(
    "claude_session_query",
    {
        "query": "Show me a practical example",
        "session_id": session_id
    }
)`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Security
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Security Features</h3>
              <ul className="list-disc list-inside text-yellow-800 space-y-1">
                <li>Input validation prevents command injection</li>
                <li>Whitelisted CLI flags only</li>
                <li>Configurable timeouts prevent hanging</li>
                <li>No shell execution - direct subprocess only</li>
                <li>File access limited to readable files</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Docker Deployment */}
        <section id="deployment" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Docker Deployment</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Build and Run</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`# Build image
docker build -t claude-cli-mcp .

# Run container
docker run -d \\
  -p 8060:8060 \\
  -v ~/.anthropic:/home/mcpuser/.anthropic:ro \\
  --name claude-mcp \\
  claude-cli-mcp`}</code>
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              For issues or questions, visit the{' '}
              <a href="https://github.com/bryan-triepod/claude-cli-mcp" className="text-blue-600 hover:underline">
                GitHub repository
              </a>
            </p>
            <Link 
              href="/projects/claude-cli-mcp" 
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Project
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}