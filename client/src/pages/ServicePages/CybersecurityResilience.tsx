export default function CybersecurityResilience() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity & Pen Testing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Secure your digital infrastructure with advanced cybersecurity and penetration testing services. From vulnerability assessments to red team exercises, we identify and eliminate security risks before threats can exploit them.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Cybersecurity & Penetration Testing Services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Advanced security testing and assessment services that identify vulnerabilities and strengthen your defense posture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security Assessment */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-search text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Penetration Testing</h3>
              <p className="text-charcoal mb-6">
                Comprehensive penetration testing and ethical hacking services that simulate real-world attacks to identify vulnerabilities before malicious actors can exploit them.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Network penetration testing</li>
                <li>• Web application security testing</li>
                <li>• Mobile application penetration testing</li>
                <li>• Wireless network security assessment</li>
                <li>• Social engineering testing</li>
              </ul>
            </div>

            {/* Red Team Operations */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Red Team Operations</h3>
              <p className="text-charcoal mb-6">
                Advanced adversarial simulation exercises that test your organization's detection and response capabilities through realistic attack scenarios.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Advanced persistent threat simulation</li>
                <li>• Multi-vector attack campaigns</li>
                <li>• Social engineering assessments</li>
                <li>• Physical security testing</li>
                <li>• Incident response evaluation</li>
              </ul>
            </div>

            {/* Vulnerability Assessment */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bug text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Vulnerability Assessment</h3>
              <p className="text-charcoal mb-6">
                Systematic identification and analysis of security weaknesses in your infrastructure, applications, and processes.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Automated vulnerability scanning</li>
                <li>• Manual security testing</li>
                <li>• Configuration review</li>
                <li>• Code security analysis</li>
                <li>• Risk prioritization and remediation</li>
              </ul>
            </div>

            {/* Security Architecture */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-lock text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Architecture</h3>
              <p className="text-charcoal mb-6">
                Design and implementation of robust security architectures that protect against evolving threats and ensure compliance.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Zero Trust architecture design</li>
                <li>• Security control implementation</li>
                <li>• Identity and access management</li>
                <li>• Network security design</li>
                <li>• Cloud security architecture</li>
              </ul>
            </div>

            {/* Incident Response */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-fire text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Incident Response</h3>
              <p className="text-charcoal mb-6">
                Rapid detection, containment, and recovery from security incidents with comprehensive forensic analysis and remediation.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• 24/7 incident response</li>
                <li>• Digital forensics and investigation</li>
                <li>• Malware analysis</li>
                <li>• Breach containment</li>
                <li>• Recovery and remediation</li>
              </ul>
            </div>

            {/* Compliance & Governance */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-balance-scale text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Compliance & Governance</h3>
              <p className="text-charcoal mb-6">
                Comprehensive compliance management and governance programs that meet regulatory requirements and industry standards.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• ISO 27001, SOC 2, PCI DSS compliance</li>
                <li>• GDPR and data protection</li>
                <li>• Risk assessment and management</li>
                <li>• Policy and procedure development</li>
                <li>• Audit preparation and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Security Testing Process
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              A systematic approach to identifying and mitigating security risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Assessment</h3>
              <p className="text-charcoal">
                Comprehensive evaluation of your current security posture and infrastructure
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-drafting-compass text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Strategy Development</h3>
              <p className="text-charcoal">
                Development of customized testing strategies and methodologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tools text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Testing Implementation</h3>
              <p className="text-charcoal">
                Execution of penetration tests and security assessments
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Remediation Support</h3>
              <p className="text-charcoal">
                Ongoing support for vulnerability remediation and security improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Strengthen Your Security Posture
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Get proactive penetration testing and security assessments to protect your organization.
          </p>
          <button className="bg-white text-navy-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all">
            Get Security Assessment
          </button>
        </div>
      </section>
    </div>
  );
}