export default function HealthcareLifeScience() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Healthcare and Life Science</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Transform healthcare delivery and accelerate life science innovation with our specialized technology solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Healthcare Innovation</h2>
            <p className="text-charcoal mb-6">
              Our healthcare and life science solutions improve patient outcomes, streamline clinical workflows, 
              and accelerate research and development. We help organizations navigate complex regulatory 
              requirements while delivering cutting-edge healthcare technology.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Electronic Health Records (EHR) Systems
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Clinical Decision Support Systems
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Drug Discovery & Development Platforms
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Telemedicine & Remote Patient Monitoring
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Compliance & Security</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• HIPAA & GDPR Compliance</li>
              <li>• FDA 21 CFR Part 11 Validation</li>
              <li>• Clinical Data Management</li>
              <li>• Secure Data Exchange</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}