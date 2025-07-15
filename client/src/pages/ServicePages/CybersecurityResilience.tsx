export default function CybersecurityResilience() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">Cybersecurity and Pen Testing</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Secure your digital infrastructure with advanced cybersecurity and penetration testing services that identify vulnerabilities before attackers do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Advanced Penetration Testing & Security</h2>
            <p className="text-charcoal mb-6">
              Our cybersecurity and penetration testing services simulate real-world attacks to identify 
              vulnerabilities before malicious actors can exploit them. We provide comprehensive security 
              assessments that strengthen your organization's defense posture.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Network & Web Application Penetration Testing
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Red Team Operations & Adversarial Simulation
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Vulnerability Assessment & Ethical Hacking
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Security Control Testing & Validation
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