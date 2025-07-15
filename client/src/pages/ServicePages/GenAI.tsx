export default function GenAI() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Generative AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Unlock the transformative potential of Generative AI to revolutionize content creation, automate processes, and enhance customer experiences across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Generative AI Services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Cutting-edge generative AI solutions that transform how businesses create, communicate, and operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Language Models */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-language text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Large Language Models</h3>
              <p className="text-charcoal mb-6">
                Custom LLM integration and fine-tuning for domain-specific applications, from customer service to content generation.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• GPT, Claude, and Gemini integration</li>
                <li>• Custom model fine-tuning</li>
                <li>• Domain-specific training</li>
                <li>• Retrieval-Augmented Generation (RAG)</li>
              </ul>
            </div>

            {/* Conversational AI */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-comments text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Conversational AI</h3>
              <p className="text-charcoal mb-6">
                Intelligent chatbots and virtual assistants that provide natural, context-aware interactions for enhanced customer experience.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Multi-channel chatbot development</li>
                <li>• Voice-enabled AI assistants</li>
                <li>• Context-aware conversations</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            {/* Content Generation */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-pen-fancy text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Content Generation</h3>
              <p className="text-charcoal mb-6">
                Automated content creation for marketing, documentation, reports, and creative materials at scale with consistent quality.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Automated article and blog writing</li>
                <li>• Marketing copy generation</li>
                <li>• Technical documentation</li>
                <li>• Creative content creation</li>
              </ul>
            </div>

            {/* Code Generation */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Code Generation</h3>
              <p className="text-charcoal mb-6">
                AI-powered development tools that accelerate coding, testing, and debugging processes while maintaining code quality.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Automated code generation</li>
                <li>• Intelligent code completion</li>
                <li>• Automated testing and debugging</li>
                <li>• Code review and optimization</li>
              </ul>
            </div>

            {/* Document Processing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-file-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Document Processing</h3>
              <p className="text-charcoal mb-6">
                Intelligent document analysis, extraction, and processing that transforms unstructured data into actionable insights.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Document summarization</li>
                <li>• Information extraction</li>
                <li>• Contract analysis</li>
                <li>• Automated report generation</li>
              </ul>
            </div>

            {/* Creative AI */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-palette text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Creative AI</h3>
              <p className="text-charcoal mb-6">
                AI-powered creative tools for design, image generation, video creation, and multimedia content production.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• AI image and artwork generation</li>
                <li>• Video content creation</li>
                <li>• Design automation</li>
                <li>• Music and audio generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GenAI Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              GenAI Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Discovery & Assessment</h3>
              <p className="text-charcoal">
                Analyze your current processes and identify opportunities for GenAI integration and optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-drafting-compass text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Strategy & Design</h3>
              <p className="text-charcoal">
                Develop a comprehensive GenAI strategy with custom model selection and architecture design.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tools text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Development & Integration</h3>
              <p className="text-charcoal">
                Build and integrate GenAI solutions with your existing systems and workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Optimization & Scaling</h3>
              <p className="text-charcoal">
                Continuously optimize performance and scale solutions across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GenAI Technologies */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              GenAI Technologies & Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Language Models</h3>
              <ul className="text-charcoal space-y-2">
                <li>• OpenAI GPT-4</li>
                <li>• Anthropic Claude</li>
                <li>• Google Gemini</li>
                <li>• Meta LLaMA</li>
                <li>• Custom Fine-tuned Models</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Image Generation</h3>
              <ul className="text-charcoal space-y-2">
                <li>• DALL-E 3</li>
                <li>• Midjourney</li>
                <li>• Stable Diffusion</li>
                <li>• Adobe Firefly</li>
                <li>• RunwayML</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Development Tools</h3>
              <ul className="text-charcoal space-y-2">
                <li>• GitHub Copilot</li>
                <li>• CodeT5</li>
                <li>• Amazon CodeWhisperer</li>
                <li>• Tabnine</li>
                <li>• Cursor</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Platforms</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Hugging Face</li>
                <li>• LangChain</li>
                <li>• LlamaIndex</li>
                <li>• Pinecone</li>
                <li>• Weaviate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              GenAI Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Customer Service</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Intelligent virtual assistants</li>
                <li>• Automated response generation</li>
                <li>• Multi-language support</li>
                <li>• Sentiment analysis</li>
                <li>• Ticket classification and routing</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Content & Marketing</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Automated content creation</li>
                <li>• Personalized marketing campaigns</li>
                <li>• Social media content generation</li>
                <li>• SEO optimization</li>
                <li>• Brand voice consistency</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Enterprise Operations</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Document automation</li>
                <li>• Report generation</li>
                <li>• Process optimization</li>
                <li>• Knowledge management</li>
                <li>• Training material creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              GenAI Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">10x</h3>
              <p className="text-charcoal">Faster content creation and ideation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">60%</h3>
              <p className="text-charcoal">Cost reduction in content production</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">90%</h3>
              <p className="text-charcoal">Improvement in customer satisfaction</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">24/7</h3>
              <p className="text-charcoal">Continuous automated operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize with Generative AI?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your business processes and customer experiences with Asterik's cutting-edge Generative AI solutions that drive innovation and efficiency.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Start GenAI Journey <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}