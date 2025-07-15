export default function QualityEngineering() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quality Engineering Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Ensure software excellence with comprehensive Quality Engineering services. From automated testing to performance optimization, we deliver robust quality assurance that accelerates delivery while maintaining the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Quality Engineering Services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive quality assurance and testing solutions that ensure your software meets the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Test Automation */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-robot text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Test Automation</h3>
              <p className="text-charcoal mb-6">
                Accelerate testing cycles with comprehensive automation frameworks that ensure consistent, reliable, and repeatable testing processes.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• UI and API test automation</li>
                <li>• Cross-platform testing frameworks</li>
                <li>• Continuous integration testing</li>
                <li>• Test data management</li>
              </ul>
            </div>

            {/* Performance Testing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-tachometer-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Performance Testing</h3>
              <p className="text-charcoal mb-6">
                Validate system performance under various conditions to ensure optimal user experience and system reliability.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Load and stress testing</li>
                <li>• Performance bottleneck analysis</li>
                <li>• Scalability assessment</li>
                <li>• Performance monitoring setup</li>
              </ul>
            </div>

            {/* Security Testing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Testing</h3>
              <p className="text-charcoal mb-6">
                Comprehensive security assessments to identify vulnerabilities and ensure robust protection against threats.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Vulnerability scanning</li>
                <li>• Penetration testing</li>
                <li>• Security code review</li>
                <li>• Compliance verification</li>
              </ul>
            </div>

            {/* Mobile Testing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Mobile Testing</h3>
              <p className="text-charcoal mb-6">
                Ensure flawless mobile experiences across devices, platforms, and operating systems with specialized mobile testing.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Native and hybrid app testing</li>
                <li>• Device compatibility testing</li>
                <li>• Mobile performance optimization</li>
                <li>• User experience validation</li>
              </ul>
            </div>

            {/* API Testing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-exchange-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">API Testing</h3>
              <p className="text-charcoal mb-6">
                Validate API functionality, reliability, and security to ensure seamless integration and data exchange.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• REST and SOAP API testing</li>
                <li>• Contract testing</li>
                <li>• Data validation and integrity</li>
                <li>• API performance testing</li>
              </ul>
            </div>

            {/* Accessibility Testing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-universal-access text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Accessibility Testing</h3>
              <p className="text-charcoal mb-6">
                Ensure your applications are accessible to all users, including those with disabilities, meeting WCAG guidelines.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• WCAG compliance testing</li>
                <li>• Screen reader compatibility</li>
                <li>• Keyboard navigation testing</li>
                <li>• Color contrast validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Methodologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Testing Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-sync-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Agile Testing</h3>
              <p className="text-charcoal">
                Integrated testing approaches that align with agile development cycles for continuous quality assurance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-code-branch text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Shift-Left Testing</h3>
              <p className="text-charcoal">
                Early testing integration in the development lifecycle to identify and resolve issues faster and more cost-effectively.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-infinity text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Continuous Testing</h3>
              <p className="text-charcoal">
                Automated testing integrated into CI/CD pipelines for immediate feedback and rapid deployment confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Risk-Based Testing</h3>
              <p className="text-charcoal">
                Strategic testing approach that prioritizes testing efforts based on risk assessment and business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              We leverage industry-leading tools and frameworks to deliver comprehensive quality engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Automation Frameworks</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Selenium WebDriver</li>
                <li>• Playwright & Puppeteer</li>
                <li>• Cypress & TestCafe</li>
                <li>• Appium for mobile testing</li>
                <li>• REST Assured for API testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Performance Tools</h3>
              <ul className="text-charcoal space-y-2">
                <li>• JMeter & LoadRunner</li>
                <li>• K6 & Artillery</li>
                <li>• BlazeMeter & NeoLoad</li>
                <li>• New Relic & AppDynamics</li>
                <li>• Lighthouse & WebPageTest</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security Testing</h3>
              <ul className="text-charcoal space-y-2">
                <li>• OWASP ZAP & Burp Suite</li>
                <li>• SonarQube & Checkmarx</li>
                <li>• Veracode & WhiteSource</li>
                <li>• Nessus & OpenVAS</li>
                <li>• SQLMap & Metasploit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Quality Metrics & KPIs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bug text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">85%</h3>
              <p className="text-charcoal">Defect reduction through early testing integration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">60%</h3>
              <p className="text-charcoal">Faster testing cycles with automation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-check text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">99.9%</h3>
              <p className="text-charcoal">Test coverage for critical business functions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">40%</h3>
              <p className="text-charcoal">Cost reduction in maintenance and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Software Quality?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Asterik to implement comprehensive quality engineering practices that ensure your software meets the highest standards while accelerating delivery.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Start Quality Engineering <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}