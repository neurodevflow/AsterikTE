export default function ManagedSupport() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Managed Support
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive managed services to keep your systems running smoothly with 24/7 monitoring, proactive maintenance, and expert technical assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium cursor-pointer"
              >
                Get Started
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Managed Support Services
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We provide comprehensive managed services to ensure your IT infrastructure operates at peak performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">24/7 Support</h3>
              <p className="text-charcoal mb-6">
                Round-the-clock technical support to address issues and maintain system availability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>24/7 Help Desk Support</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Emergency Response Team</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Multi-Channel Support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">System Monitoring</h3>
              <p className="text-charcoal mb-6">
                Proactive monitoring and alerting to prevent issues before they impact your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Infrastructure Monitoring</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Application Performance Monitoring</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Security Monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Maintenance Services</h3>
              <p className="text-charcoal mb-6">
                Regular maintenance and updates to keep your systems secure and performing optimally.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Preventive Maintenance</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Security Updates</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Technical Assistance</h3>
              <p className="text-charcoal mb-6">
                Expert technical guidance and assistance for your IT needs and challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Technical Consulting</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Problem Resolution</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Best Practices Guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Process */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Reduced IT Operational Costs</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Improved System Uptime</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Proactive Issue Prevention</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Access to Expert Knowledge</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Focus on Core Business</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-search text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Assessment</h4>
                    <p className="text-charcoal">Evaluate current IT infrastructure and support needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-cogs text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Service Design</h4>
                    <p className="text-charcoal">Design customized support services for your requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-tools text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Implementation</h4>
                    <p className="text-charcoal">Deploy monitoring and support infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-headset text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Ongoing Support</h4>
                    <p className="text-charcoal">Continuous monitoring and support services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our managed support services can optimize your IT operations and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Contact Us Today
            </button>
            <button 
              onClick={() => window.location.href = '/insights'}
              className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}