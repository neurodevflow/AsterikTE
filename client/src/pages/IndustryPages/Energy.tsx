export default function Energy() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Energy
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Technology solutions for asset management, energy forecasting, modernization of energy systems, and enhanced operational resilience in the energy sector.
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
              Energy Industry Solutions
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Comprehensive technology solutions designed to optimize energy operations and drive sustainability initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Asset Management</h3>
              <p className="text-charcoal mb-6">
                Advanced asset management systems for energy infrastructure and equipment optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Predictive Maintenance Systems</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Asset Performance Monitoring</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Lifecycle Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Energy Forecasting</h3>
              <p className="text-charcoal mb-6">
                AI-powered forecasting solutions for energy demand, production, and market analysis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Demand Forecasting Models</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Production Optimization</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Market Price Analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">System Modernization</h3>
              <p className="text-charcoal mb-6">
                Modernization of legacy energy systems with cutting-edge digital technologies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>SCADA System Upgrades</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>IoT Integration</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Digital Twin Technology</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Operational Resilience</h3>
              <p className="text-charcoal mb-6">
                Enhanced operational resilience through advanced monitoring and response systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Real-time Monitoring</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Emergency Response Systems</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Risk Assessment Tools</span>
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
              How we helped a US energy company expand their EV charging infrastructure.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-12 border border-light-grey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy-blue mb-6">
                  US Energy Company Empowering EV Charging Expansion
                </h3>
                <p className="text-charcoal mb-6">
                  A major energy company needed to rapidly expand their electric vehicle charging network while optimizing operational efficiency and customer experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Smart charging station management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Real-time monitoring and analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Customer mobile application</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-soft-beige rounded-lg">
                  <div className="text-4xl font-bold text-navy-blue mb-2">2x</div>
                  <div className="text-charcoal">Operational efficiency improvement</div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-charcoal italic">
                    "The platform enabled us to scale our EV charging network rapidly while maintaining high service quality."
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
              Why Choose Asterik for Energy Solutions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Energy Expertise</h3>
              <p className="text-charcoal">
                Deep understanding of energy sector challenges and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Sustainability Focus</h3>
              <p className="text-charcoal">
                Solutions that support renewable energy and sustainability goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-network-wired text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Smart Grid Technology</h3>
              <p className="text-charcoal">
                Advanced smart grid and IoT solutions for modern energy infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your Energy Operations?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our energy solutions can optimize your operations and support your sustainability goals.
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