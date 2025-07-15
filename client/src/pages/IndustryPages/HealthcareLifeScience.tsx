export default function HealthcareLifeScience() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Healthcare and Life Sciences</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Transform healthcare delivery with innovative technology solutions. From patient care optimization to clinical research acceleration, we enable healthcare organizations to improve outcomes and operational efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Healthcare Technology Solutions</h2>
            <p className="text-charcoal mb-6">
              Our comprehensive healthcare solutions improve patient outcomes, streamline clinical workflows, 
              and accelerate research and development. We provide HIPAA-compliant systems that enhance care 
              delivery while reducing operational costs and improving patient satisfaction.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Electronic Health Records (EHR) & Clinical Systems
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Telemedicine & Remote Patient Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Clinical Research & Trial Management
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Population Health Management & Analytics
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