'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Zap, Brain, Shield, Globe } from 'lucide-react'

export default function SmartMatchResumeAdvisorDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/smartmatch-resume-advisor" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">SmartMatch Resume Advisor Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete guide to using and understanding the AI-powered resume analysis system
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Quick Start</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Clone and Setup</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
{`git clone https://github.com/BryanNsoh/ai-resume-analyzer-with-langchain
cd ai-resume-analyzer-with-langchain
chmod +x scripts/setup.sh
./scripts/setup.sh`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">2. Configure OpenAI API</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm">
{`# Edit backend/.env
OPENAI_API_KEY=your_openai_api_key_here`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">3. Start Development</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm">
{`chmod +x scripts/dev-start.sh
./scripts/dev-start.sh`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">4. Access Application</h3>
              <ul className="space-y-1 text-sm">
                <li>• Frontend: <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3000</code></li>
                <li>• Backend API: <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:8000</code></li>
                <li>• API Docs: <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:8000/docs</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Architecture Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-blue-800">Backend (Python)</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>FastAPI</strong>: High-performance async web framework</li>
                <li>• <strong>LangChain</strong>: LLM orchestration and document processing</li>
                <li>• <strong>OpenAI GPT</strong>: Natural language understanding</li>
                <li>• <strong>FAISS</strong>: Vector similarity search</li>
                <li>• <strong>Pydantic</strong>: Data validation and serialization</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-green-800">Frontend (TypeScript)</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Next.js 15</strong>: React framework with App Router</li>
                <li>• <strong>TypeScript</strong>: Type-safe development</li>
                <li>• <strong>Tailwind CSS v4</strong>: Utility-first styling</li>
                <li>• <strong>React Hook Form</strong>: Form state management</li>
                <li>• <strong>Zod</strong>: Runtime validation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Analysis Pipeline */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold">Analysis Pipeline</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-bold mb-2">1. Document Processing</h3>
              <p className="text-gray-600 mb-2">
                Text preprocessing with chunking (1000 chars, 200 overlap) for optimal LLM processing
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`# Text processing configuration
RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)`}
              </pre>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold mb-2">2. Parallel Keyword Extraction</h3>
              <p className="text-gray-600 mb-2">
                Simultaneous extraction from resume and job description using structured LLM chains
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`# Parallel processing
resume_keywords_task = self._extract_keywords(resume_text, "resume")
jd_keywords_task = self._extract_keywords(job_description, "job description")

resume_keywords, jd_keywords = await asyncio.gather(
    resume_keywords_task,
    jd_keywords_task
)`}
              </pre>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold mb-2">3. Vector Similarity Analysis</h3>
              <p className="text-gray-600 mb-2">
                FAISS vector store with OpenAI embeddings for semantic keyword matching
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`# Vector embeddings
self.embeddings = OpenAIEmbeddings(
    model="text-embedding-ada-002",
    openai_api_key=settings.openai_api_key
)`}
              </pre>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="font-bold mb-2">4. Structured Analysis</h3>
              <p className="text-gray-600 mb-2">
                JSON-structured responses with match percentage, keywords, and improvement suggestions
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm">
{`{
  "match_percentage": 85,
  "matched_keywords": ["Python", "FastAPI", "Docker"],
  "missing_keywords": ["TensorFlow", "PyTorch"],
  "suggestions": [...]
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold">API Reference</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3">POST /analyze</h3>
              <p className="text-gray-600 mb-4">Main endpoint for resume analysis</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Request Body:</h4>
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
{`{
  "resume_text": "string (required)",
  "job_description": "string (required)"
}`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response:</h4>
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
{`{
  "match_percentage": 85,
  "matched_keywords": ["Python", "FastAPI"],
  "missing_keywords": ["TensorFlow", "ML"],
  "suggestions": [
    {
      "original": "Worked on ML projects",
      "improved": "Developed 3 TensorFlow models achieving 95% accuracy",
      "reason": "Adds specific framework and quantifiable results"
    }
  ],
  "strengths": ["Strong backend experience"],
  "areas_for_improvement": ["Add ML framework experience"],
  "overall_feedback": "Your resume shows a good match..."
}`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3">GET /health</h3>
              <p className="text-gray-600 mb-4">Health check endpoint</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm">
{`{
  "status": "healthy",
  "model": "gpt-3.5-turbo"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold">Configuration</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold mb-4">Environment Variables (backend/.env)</h3>
            <div className="space-y-3">
              <div>
                <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">OPENAI_API_KEY</code>
                <span className="ml-2 text-gray-600">- Your OpenAI API key (required)</span>
              </div>
              <div>
                <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">MODEL_NAME</code>
                <span className="ml-2 text-gray-600">- OpenAI model (default: gpt-3.5-turbo)</span>
              </div>
              <div>
                <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">EMBEDDING_MODEL</code>
                <span className="ml-2 text-gray-600">- Embedding model (default: text-embedding-ada-002)</span>
              </div>
              <div>
                <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">FRONTEND_URL</code>
                <span className="ml-2 text-gray-600">- Frontend URL for CORS (default: http://localhost:3000)</span>
              </div>
              <div>
                <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">LANGCHAIN_TRACING_V2</code>
                <span className="ml-2 text-gray-600">- Enable LangSmith tracing (optional)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Production Deployment */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Production Deployment</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-blue-800">Frontend (Vercel)</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm text-xs">
{`# Deploy to Vercel
npm run build
vercel --prod

# Environment variables
NEXT_PUBLIC_API_URL=your_backend_url`}
              </pre>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-green-800">Backend (Railway/Render)</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm text-xs">
{`# Dockerfile deployment
FROM python:3.11-slim
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD uvicorn app.main:app --host 0.0.0.0 --port $PORT`}
              </pre>
            </div>
          </div>
        </section>

        {/* Performance & Security */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Performance &amp; Security</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Performance Features</h3>
              <ul className="space-y-2 text-sm">
                <li>• Async/await for parallel processing</li>
                <li>• Text chunking for large documents</li>
                <li>• Response caching capabilities</li>
                <li>• Vector embeddings for semantic search</li>
                <li>• Sub-5 second analysis time</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Security Features</h3>
              <ul className="space-y-2 text-sm">
                <li>• CORS middleware with origin validation</li>
                <li>• Input validation with Pydantic models</li>
                <li>• Global exception handling</li>
                <li>• Environment variable configuration</li>
                <li>• Type safety with TypeScript</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contributing */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Book className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold">Development &amp; Testing</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Backend Testing</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm">
{`cd backend
pytest          # Run tests
black .         # Format code
uvicorn app.main:app --reload  # Development server`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm">
{`cd frontend
npm run dev     # Development server
npm run build   # Production build
npm run lint    # ESLint check`}
              </pre>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Support &amp; Resources</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-2">
              <li>• <Link href="https://github.com/BryanNsoh/ai-resume-analyzer-with-langchain" className="text-blue-600 hover:underline">GitHub Repository</Link></li>
              <li>• <Link href="https://github.com/BryanNsoh/ai-resume-analyzer-with-langchain/issues" className="text-blue-600 hover:underline">Issue Tracker</Link></li>
              <li>• <Link href="/projects/smartmatch-resume-advisor" className="text-blue-600 hover:underline">Project Overview</Link></li>
              <li>• <Link href="https://docs.langchain.com/" className="text-blue-600 hover:underline">LangChain Documentation</Link></li>
              <li>• <Link href="https://platform.openai.com/docs" className="text-blue-600 hover:underline">OpenAI API Documentation</Link></li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}