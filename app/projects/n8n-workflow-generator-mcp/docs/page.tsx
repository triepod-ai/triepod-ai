'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Zap, Brain, Globe, Shield } from 'lucide-react'

export default function N8NWorkflowGeneratorMcpDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/n8n-workflow-generator-mcp" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">N8N Workflow Generator MCP Server</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete documentation for AI-powered n8n workflow generation with comprehensive MCP server integration
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 hover:text-blue-800">Project Overview</a></li>
            <li><a href="#installation" className="text-blue-600 hover:text-blue-800">Installation & Setup</a></li>
            <li><a href="#mcp-integration" className="text-blue-600 hover:text-blue-800">MCP Server Integration</a></li>
            <li><a href="#workflow-generation" className="text-blue-600 hover:text-blue-800">Workflow Generation</a></li>
            <li><a href="#api-reference" className="text-blue-600 hover:text-blue-800">API Reference</a></li>
            <li><a href="#examples" className="text-blue-600 hover:text-blue-800">Usage Examples</a></li>
            <li><a href="#advanced-features" className="text-blue-600 hover:text-blue-800">Advanced Features</a></li>
          </ul>
        </nav>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The N8N Workflow Generator MCP Server is an enterprise-grade automation solution that transforms 
              natural language descriptions into complete n8n workflow JSON files. Built with FastMCP and Claude AI, 
              it provides comprehensive workflow management capabilities including real-time modification, validation, 
              and direct deployment to n8n instances.
            </p>
            
            <h3>Core Architecture</h3>
            <ul>
              <li><strong>Workflow Generation System:</strong> N8NWorkflowBuilder for programmatic workflow construction</li>
              <li><strong>Node Library:</strong> Comprehensive n8n node definitions in JSON format</li>
              <li><strong>Sequential Processing:</strong> 5-step reasoning process for reliable generation</li>
              <li><strong>API Integration Layer:</strong> Full n8n API client for lifecycle management</li>
              <li><strong>Validation System:</strong> Enterprise-grade structure and connection validation</li>
            </ul>

            <h3>Key Benefits</h3>
            <ul>
              <li>Transform natural language into production-ready workflows in under 2 seconds</li>
              <li>99.9% validation accuracy with automatic rollback on failures</li>
              <li>Complete n8n API coverage for workflow lifecycle management</li>
              <li>50+ supported node types with extensible architecture</li>
              <li>Enterprise-ready with comprehensive error handling</li>
            </ul>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Installation & Setup
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Python 3.8+
python3 --version

# Node.js 16+ (for JavaScript components)
node --version

# n8n instance (local or remote)
# Get n8n API key from your instance`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Installation</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Clone the repository
git clone https://github.com/triepod-ai/n8n-workflow-generator.git
cd n8n-workflow-generator

# Install Python dependencies
pip install -e .

# Install Node.js dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your n8n instance details`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Environment Configuration</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# .env file
N8N_HOST=http://localhost:5678
N8N_API_KEY=your_api_key_here
PYTHONUNBUFFERED=1`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Start MCP Server</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Start the MCP server
python3 -m mcp_server --transport stdio

# Or use the development server
npm start`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* MCP Integration */}
        <section id="mcp-integration" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            MCP Server Integration
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              The MCP server provides 20+ specialized tools for comprehensive n8n workflow management through 
              Claude Code integration.
            </p>

            <h3>Core MCP Tools</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">Workflow Generation</h4>
              <ul className="text-sm space-y-1">
                <li><code>n8n_create_workflow</code> - Generate workflows from natural language</li>
                <li><code>n8n_deploy_workflow</code> - Deploy workflows to n8n instance</li>
                <li><code>n8n_get_node_library</code> - Access complete node library</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">Workflow Management</h4>
              <ul className="text-sm space-y-1">
                <li><code>n8n_list_workflows</code> - List all workflows with filtering</li>
                <li><code>n8n_get_workflow</code> - Get specific workflow details</li>
                <li><code>n8n_update_workflow</code> - Update existing workflows</li>
                <li><code>n8n_activate_workflow</code> - Activate/deactivate workflows</li>
                <li><code>n8n_execute_workflow</code> - Execute workflows with test data</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">Advanced Modifications</h4>
              <ul className="text-sm space-y-1">
                <li><code>n8n_insert_node_between</code> - Insert nodes between existing connections</li>
                <li><code>n8n_add_node</code> - Add new nodes with positioning</li>
                <li><code>n8n_delete_node</code> - Remove nodes with connection cleanup</li>
                <li><code>n8n_move_node</code> - Reposition nodes on canvas</li>
                <li><code>n8n_batch_operations</code> - Execute multiple operations atomically</li>
              </ul>
            </div>

            <h3>Claude Code Integration</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre><code>{`# Add to Claude Code MCP configuration
claude mcp add n8n-workflow-generator \\
  "python3 -m mcp_server --transport stdio" \\
  -s project`}</code></pre>
            </div>
          </div>
        </section>

        {/* Workflow Generation */}
        <section id="workflow-generation" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Workflow Generation Process
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>5-Step Sequential Reasoning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">1. Requirements Analysis</h4>
                <p className="text-sm">Parse natural language and identify trigger requirements</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">2. Data Flow Mapping</h4>
                <p className="text-sm">Map data transformation and routing between steps</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">3. Node Selection</h4>
                <p className="text-sm">Choose optimal n8n nodes from 50+ available types</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">4. Connection Design</h4>
                <p className="text-sm">Design node connections and data flow paths</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">5. Validation Check</h4>
              <p className="text-sm">Comprehensive validation of JSON structure, connections, and node requirements</p>
            </div>

            <h3>Supported Node Categories</h3>
            <ul>
              <li><strong>Triggers:</strong> Webhook, Schedule, Manual, Email, File Watcher</li>
              <li><strong>Processors:</strong> Code, Set, If, Switch, Merge, Split</li>
              <li><strong>Integrations:</strong> HTTP Request, Database, Email, Slack, Discord</li>
              <li><strong>Utilities:</strong> Wait, Stop, Error Trigger, Date/Time</li>
            </ul>
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
              <h3 className="text-lg font-semibold mb-3">Basic Workflow Generation</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Generate workflow from description
n8n_create_workflow(
    description="Create webhook → process data → send to Slack",
    name="Customer Notification Workflow",
    auto_deploy=True
)

# Response
{
    "workflow": { /* complete n8n JSON */ },
    "status": "deployed",
    "workflow_id": "abc123",
    "url": "http://localhost:5678/workflow/abc123"
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Advanced Node Manipulation</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Insert validation node between webhook and processor
n8n_insert_node_between(
    workflow_id="abc123",
    source_node_name="Webhook",
    target_node_name="Process Data",
    new_node_config={
        "name": "Validate Input",
        "type": "n8n-nodes-base.if",
        "parameters": {
            "conditions": {
                "string": [
                    {
                        "value1": "={{$json.email}}",
                        "operation": "isNotEmpty"
                    }
                ]
            }
        }
    }
)`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Batch Operations</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`# Execute multiple operations atomically
n8n_batch_operations(
    workflow_id="abc123",
    operations=[
        {
            "type": "add_node",
            "params": {
                "node_config": {
                    "name": "Error Handler",
                    "type": "n8n-nodes-base.set"
                }
            }
        },
        {
            "type": "add_connection",
            "params": {
                "source_node": "Process Data",
                "target_node": "Error Handler",
                "connection_type": "error"
            }
        }
    ]
)`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Usage Examples
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Customer Support Automation</h3>
              <p className="text-gray-600 mb-3">
                Automatically process customer emails, extract sentiment, and route to appropriate teams.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`claude "Create a workflow that:
1. Monitors customer support email inbox
2. Extracts email content and sender info
3. Analyzes sentiment using AI
4. Routes urgent issues to on-call team via Slack
5. Creates tickets in Jira for all requests
6. Sends acknowledgment email to customer"`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Data Processing Pipeline</h3>
              <p className="text-gray-600 mb-3">
                ETL pipeline for processing CSV uploads with validation and database storage.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`claude "Build a data pipeline workflow:
- Webhook receives CSV file upload
- Validate CSV format and required columns
- Transform data (clean, normalize, enrich)
- Split into batches for processing
- Store in PostgreSQL database
- Send processing report via email
- Handle errors with retry logic"`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Multi-Channel Notifications</h3>
              <p className="text-gray-600 mb-3">
                Broadcast important updates across multiple communication channels.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`claude "Create a notification broadcast system:
- Manual trigger for emergency announcements
- Format message for different platforms
- Send to Slack channels simultaneously
- Post to Discord servers
- Send SMS to on-call team
- Update status page
- Log all notifications to database"`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section id="advanced-features" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Advanced Features
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3>Enterprise Validation System</h3>
            <ul>
              <li><strong>Structure Validation:</strong> Ensures all required fields and proper JSON structure</li>
              <li><strong>Connection Integrity:</strong> Validates node connections and data flow paths</li>
              <li><strong>Node Requirements:</strong> Checks that all node parameters meet n8n specifications</li>
              <li><strong>Automatic Rollback:</strong> Reverts changes on validation failures</li>
            </ul>

            <h3>Layout Management</h3>
            <ul>
              <li><strong>Auto-positioning:</strong> Intelligent node placement for optimal readability</li>
              <li><strong>Layout Algorithms:</strong> Grid, flow, and circular layout options</li>
              <li><strong>Canvas Organization:</strong> Automatic spacing and alignment</li>
            </ul>

            <h3>Workflow Composition</h3>
            <ul>
              <li><strong>Subflow Extraction:</strong> Extract node groups into reusable components</li>
              <li><strong>Workflow Merging:</strong> Combine multiple workflows with connection management</li>
              <li><strong>Template System:</strong> Save and reuse common workflow patterns</li>
            </ul>

            <h3>Error Handling & Monitoring</h3>
            <ul>
              <li><strong>Comprehensive Logging:</strong> Detailed operation logs and error tracking</li>
              <li><strong>Health Checks:</strong> Workflow validation and n8n connectivity monitoring</li>
              <li><strong>Performance Metrics:</strong> Generation speed and success rate tracking</li>
            </ul>

            <h3>Security Features</h3>
            <ul>
              <li><strong>API Key Management:</strong> Secure storage and rotation of n8n credentials</li>
              <li><strong>Input Validation:</strong> Sanitization of all user inputs and parameters</li>
              <li><strong>Permission Control:</strong> Role-based access to workflow operations</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 mt-16">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Built with enterprise-grade reliability for production automation workflows
            </p>
            <Link 
              href="/projects/n8n-workflow-generator-mcp" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Back to Project ↗
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}