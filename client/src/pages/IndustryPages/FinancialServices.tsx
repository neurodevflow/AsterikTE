export default function FinancialServices() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Drive digital transformation in financial services with secure, compliant, and innovative technology solutions that enhance customer experience and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-warm-orange text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium text-center"
              >
                Get Started
              </a>
              <a 
                href="/contact" 
                className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium text-center"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Financial Services Solutions
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions tailored specifically for the financial services industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Digital Banking Solutions</h3>
              <p className="text-charcoal mb-6">
                Modern banking platforms that enhance customer experience and operational efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Mobile Banking Applications</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Online Banking Platforms</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Payment Processing Systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Risk Management Systems</h3>
              <p className="text-charcoal mb-6">
                Comprehensive risk assessment and management solutions for financial institutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Risk Analytics Platforms</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Compliance Monitoring</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Fraud Detection Systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Regulatory Compliance</h3>
              <p className="text-charcoal mb-6">
                Ensure compliance with financial regulations and reporting requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Automated Reporting Systems</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>KYC/AML Solutions</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Audit Trail Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Customer Experience Enhancement</h3>
              <p className="text-charcoal mb-6">
                Improve customer satisfaction with personalized financial services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Customer Portal Development</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Personalization Engines</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>AI-Powered Chatbots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Success Story
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              How we helped a global financial organization achieve significant efficiency gains.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-12 border border-light-grey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy-blue mb-6">
                  Global Financial Organization Post-M&A Integration
                </h3>
                <p className="text-charcoal mb-6">
                  A major financial institution needed to integrate systems and processes following multiple acquisitions, requiring a comprehensive digital transformation approach.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Legacy system modernization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Data integration and migration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Process standardization</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-soft-beige rounded-lg">
                  <div className="text-4xl font-bold text-navy-blue mb-2">55%</div>
                  <div className="text-charcoal">Annual run-rate savings achieved</div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-charcoal italic">
                    "The transformation exceeded our expectations in both timeline and results."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Why Choose Asterik for Financial Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Security & Compliance</h3>
              <p className="text-charcoal">
                Deep understanding of financial regulations and security requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cog text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Proven Experience</h3>
              <p className="text-charcoal">
                Extensive experience working with leading financial institutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Innovation Focus</h3>
              <p className="text-charcoal">
                Cutting-edge solutions that drive competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our financial services expertise can drive your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-warm-orange text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium text-center"
            >
              Contact Us Today
            </a>
            <a 
              href="/insights" 
              className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium text-center"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}