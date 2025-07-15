export default function OilGas() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Energy & Oil & Gas</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Drive operational excellence in the energy sector with advanced technology solutions. From upstream exploration to downstream operations, we optimize processes and enhance safety across the oil and gas value chain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Energy Technology Solutions</h2>
            <p className="text-charcoal mb-6">
              Our comprehensive energy solutions help companies optimize exploration, production, and distribution 
              processes while ensuring safety, compliance, and environmental responsibility. We leverage 
              advanced technologies including IoT, AI, and digital twins to improve operational efficiency and reduce costs.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Exploration & Production Optimization
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Digital Oilfield & Smart Operations
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Pipeline Management & Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                HSE Compliance & Risk Management
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