export default function QualityEngineering() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Quality Engineering</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Ensure your software meets the highest quality standards with our comprehensive Quality Engineering services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Comprehensive Quality Assurance</h2>
            <p className="text-charcoal mb-6">
              Our Quality Engineering services ensure that your software products meet the highest standards of quality, 
              reliability, and performance. We implement robust testing frameworks and quality processes throughout 
              the development lifecycle.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Automated Testing Solutions
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Performance Testing & Optimization
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Security Testing & Vulnerability Assessment
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Continuous Integration & Quality Gates
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Key Benefits</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• Reduced defect rates by up to 85%</li>
              <li>• Faster time-to-market with quality assurance</li>
              <li>• Enhanced user experience and satisfaction</li>
              <li>• Lower maintenance costs post-deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}