export default function CybersecurityResilience() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Cybersecurity and Resilience</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Protect your digital assets and ensure business continuity with our comprehensive cybersecurity and resilience services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Comprehensive Security Solutions</h2>
            <p className="text-charcoal mb-6">
              Our cybersecurity and resilience services provide end-to-end protection for your organization, 
              from threat detection and prevention to incident response and recovery. We help you build 
              a robust security posture that evolves with emerging threats.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Security Assessment & Penetration Testing
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Threat Detection & Response
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Compliance & Risk Management
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Disaster Recovery & Business Continuity
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Security Frameworks</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• ISO 27001, NIST Cybersecurity Framework</li>
              <li>• SOC 2, GDPR, HIPAA Compliance</li>
              <li>• Zero Trust Architecture</li>
              <li>• Security Operations Center (SOC)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}