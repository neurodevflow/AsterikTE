export default function BusinessAnalysis() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Business Analysis</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Bridge the gap between business needs and technical solutions with our expert Business Analysis services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Strategic Business Solutions</h2>
            <p className="text-charcoal mb-6">
              Our Business Analysis services help organizations identify opportunities, define requirements, 
              and implement solutions that drive business value. We ensure that technology investments 
              align with strategic objectives.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Requirements Gathering & Analysis
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Process Optimization & Reengineering
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Stakeholder Management & Communication
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Solution Design & Implementation Planning
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Our Approach</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• Comprehensive stakeholder analysis</li>
              <li>• Data-driven decision making</li>
              <li>• Agile and iterative methodology</li>
              <li>• Continuous improvement focus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}