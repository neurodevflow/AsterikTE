export default function Cybersecurity() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity & Resilience
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Protect your digital assets with comprehensive cybersecurity solutions. From threat detection to incident response, we build resilient security frameworks that safeguard your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive security solutions that protect, detect, and respond to evolving cyber threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security Assessment */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-search text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Assessment</h3>
              <p className="text-charcoal mb-6">
                Comprehensive security audits and vulnerability assessments to identify risks and strengthen your security posture.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Vulnerability scanning and penetration testing</li>
                <li>• Risk assessment and compliance audits</li>
                <li>• Security architecture review</li>
                <li>• Gap analysis and remediation planning</li>
              </ul>
            </div>

            {/* Threat Detection */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Threat Detection & Response</h3>
              <p className="text-charcoal mb-6">
                Advanced threat detection systems with real-time monitoring and rapid incident response capabilities.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• 24/7 security monitoring and SOC services</li>
                <li>• AI-powered threat detection</li>
                <li>• Incident response and forensics</li>
                <li>• Threat intelligence and analysis</li>
              </ul>
            </div>

            {/* Identity & Access Management */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-user-shield text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Identity & Access Management</h3>
              <p className="text-charcoal mb-6">
                Secure identity management solutions that control access and protect against unauthorized activities.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Multi-factor authentication (MFA)</li>
                <li>• Single sign-on (SSO) solutions</li>
                <li>• Privileged access management</li>
                <li>• Identity governance and administration</li>
              </ul>
            </div>

            {/* Cloud Security */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cloud-shield text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud Security</h3>
              <p className="text-charcoal mb-6">
                Comprehensive cloud security solutions that protect your cloud infrastructure, applications, and data.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Cloud security architecture design</li>
                <li>• Container and Kubernetes security</li>
                <li>• Cloud workload protection</li>
                <li>• Multi-cloud security management</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-lock text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Data Protection</h3>
              <p className="text-charcoal mb-6">
                Advanced data encryption, backup, and recovery solutions that ensure data integrity and availability.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Data encryption and key management</li>
                <li>• Data loss prevention (DLP)</li>
                <li>• Backup and disaster recovery</li>
                <li>• Privacy compliance (GDPR, CCPA)</li>
              </ul>
            </div>

            {/* Security Training */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Awareness Training</h3>
              <p className="text-charcoal mb-6">
                Comprehensive security awareness programs that educate employees and reduce human-related security risks.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Phishing simulation and training</li>
                <li>• Security awareness campaigns</li>
                <li>• Role-based security training</li>
                <li>• Security culture development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Security Frameworks & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Standards</h3>
              <ul className="text-charcoal space-y-2">
                <li>• ISO 27001/27002</li>
                <li>• NIST Cybersecurity Framework</li>
                <li>• CIS Controls</li>
                <li>• COBIT</li>
                <li>• OWASP</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Compliance</h3>
              <ul className="text-charcoal space-y-2">
                <li>• SOX</li>
                <li>• HIPAA</li>
                <li>• PCI DSS</li>
                <li>• GDPR</li>
                <li>• SOC 2</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Industry Specific</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Financial Services (FFIEC)</li>
                <li>• Healthcare (HITECH)</li>
                <li>• Government (FedRAMP)</li>
                <li>• Energy (NERC CIP)</li>
                <li>• Retail (PCI DSS)</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">International</h3>
              <ul className="text-charcoal space-y-2">
                <li>• UAE PDPL</li>
                <li>• KSA NCA ECC</li>
                <li>• UK Cyber Essentials</li>
                <li>• EU NIS Directive</li>
                <li>• Singapore PDPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Technologies */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Security Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Tools</h3>
              <ul className="text-charcoal space-y-2">
                <li>• SIEM/SOAR platforms</li>
                <li>• Endpoint detection and response</li>
                <li>• Network security monitoring</li>
                <li>• Vulnerability management</li>
                <li>• Security orchestration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Threat Intelligence</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Threat hunting platforms</li>
                <li>• Cyber threat intelligence feeds</li>
                <li>• Malware analysis tools</li>
                <li>• Digital forensics solutions</li>
                <li>• Incident response platforms</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Protection Solutions</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Next-gen firewalls</li>
                <li>• Zero trust architecture</li>
                <li>• Secure web gateways</li>
                <li>• Email security solutions</li>
                <li>• Data encryption platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Security Performance Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">15min</h3>
              <p className="text-charcoal">Average threat detection time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">99.9%</h3>
              <p className="text-charcoal">Threat prevention rate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">90%</h3>
              <p className="text-charcoal">Employee security awareness improvement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check-circle text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">100%</h3>
              <p className="text-charcoal">Compliance audit success rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Cybersecurity?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Protect your organization with Asterik's comprehensive cybersecurity solutions that provide robust defense against evolving threats.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Secure Your Business <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}