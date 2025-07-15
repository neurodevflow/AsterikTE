export default function AIAndML() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">AI and Machine Learning</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Harness the power of artificial intelligence and machine learning to drive innovation and competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Intelligent Solutions</h2>
            <p className="text-charcoal mb-6">
              Our AI and ML services help organizations leverage advanced analytics, predictive modeling, 
              and intelligent automation to solve complex business challenges and create new opportunities 
              for growth and innovation.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Machine Learning Model Development
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Natural Language Processing
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Computer Vision & Image Recognition
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Predictive Analytics & Forecasting
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">AI Technologies</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• TensorFlow, PyTorch, Scikit-learn</li>
              <li>• OpenAI GPT, Claude, Gemini</li>
              <li>• AWS SageMaker, Azure ML</li>
              <li>• Apache Spark, MLflow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}