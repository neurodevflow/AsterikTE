export default function OilGas() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Oil and Gas</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Optimize operations and drive efficiency in the oil and gas sector with our specialized technology solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Industry-Specific Solutions</h2>
            <p className="text-charcoal mb-6">
              Our oil and gas solutions help companies optimize exploration, production, and distribution 
              processes while ensuring safety, compliance, and environmental responsibility. We leverage 
              advanced technologies to improve operational efficiency and reduce costs.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Exploration & Production Optimization
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Pipeline Management & Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Safety & Environmental Compliance
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Asset Performance Management
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Key Technologies</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• IoT Sensors & Real-time Monitoring</li>
              <li>• Predictive Maintenance Systems</li>
              <li>• Digital Twin Technology</li>
              <li>• Advanced Analytics & AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}