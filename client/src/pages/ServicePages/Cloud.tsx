export default function Cloud() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Cloud Services</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Accelerate your digital transformation with our comprehensive Cloud services and solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Cloud-First Solutions</h2>
            <p className="text-charcoal mb-6">
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              Our cloud services help you leverage the power of modern cloud platforms to drive 
              innovation and operational efficiency.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Cloud Migration & Modernization
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Multi-Cloud Architecture
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Cloud Security & Compliance
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Cost Optimization & Management
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud Platforms</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• Amazon Web Services (AWS)</li>
              <li>• Microsoft Azure</li>
              <li>• Google Cloud Platform (GCP)</li>
              <li>• Hybrid & Multi-Cloud Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}