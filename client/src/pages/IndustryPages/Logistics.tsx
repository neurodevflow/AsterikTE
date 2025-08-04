export default function Logistics() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Logistics
            </h1>
            <p className="text-xl mb-8 opacity-90">
              End-to-end software, cloud platforms, and data visualization tools to streamline fleet management, optimize routes, and improve delivery accuracy.
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
              Logistics Solutions
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Comprehensive technology solutions designed to optimize logistics operations and supply chain management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Fleet Management</h3>
              <p className="text-charcoal mb-6">
                Advanced fleet management systems for real-time tracking and optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Vehicle Tracking Systems</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Driver Management Platforms</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Maintenance Scheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Route Optimization</h3>
              <p className="text-charcoal mb-6">
                AI-powered route optimization to reduce costs and improve delivery times.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Dynamic Route Planning</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Traffic-Aware Routing</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Multi-Stop Optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Delivery Tracking</h3>
              <p className="text-charcoal mb-6">
                Real-time delivery tracking and customer communication systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Real-time Package Tracking</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Customer Notifications</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Proof of Delivery Systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Supply Chain Analytics</h3>
              <p className="text-charcoal mb-6">
                Comprehensive analytics and reporting for supply chain optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Performance Dashboards</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Predictive Analytics</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Cost Analysis Tools</span>
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
              How we helped a leading logistics provider achieve significant SLA improvements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-12 border border-light-grey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy-blue mb-6">
                  Leading Logistics Provider SLA Enhancement
                </h3>
                <p className="text-charcoal mb-6">
                  A major logistics provider needed to improve their service level agreements and operational efficiency through better technology and process optimization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Real-time tracking implementation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Route optimization algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Automated customer communications</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-soft-beige rounded-lg">
                  <div className="text-4xl font-bold text-navy-blue mb-2">30%</div>
                  <div className="text-charcoal">SLA performance increase</div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-charcoal italic">
                    "The technology improvements transformed our service delivery capabilities."
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
              Why Choose Asterik for Logistics
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Logistics Expertise</h3>
              <p className="text-charcoal">
                Deep understanding of supply chain and logistics operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-route text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Optimization Focus</h3>
              <p className="text-charcoal">
                Advanced algorithms for route and operational optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Real-time Solutions</h3>
              <p className="text-charcoal">
                Real-time tracking and monitoring for enhanced visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Logistics Operations?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our logistics solutions can improve efficiency and reduce costs.
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