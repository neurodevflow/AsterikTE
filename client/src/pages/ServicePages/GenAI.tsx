export default function GenAI() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Generative AI</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Unlock the transformative potential of Generative AI to revolutionize your business processes and customer experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Next-Generation AI Solutions</h2>
            <p className="text-charcoal mb-6">
              Our Generative AI services help organizations implement cutting-edge AI technologies 
              to automate content creation, enhance customer interactions, and drive innovation 
              across all business functions.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Large Language Model Integration
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Conversational AI & Chatbots
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Content Generation & Automation
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Code Generation & Development Assistance
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">GenAI Capabilities</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• Text, Image, and Video Generation</li>
              <li>• Intelligent Document Processing</li>
              <li>• Automated Code Review & Testing</li>
              <li>• Creative Content & Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}