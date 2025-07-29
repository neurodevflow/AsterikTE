export default function Approach() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              A proven framework for enterprise technology transformation that delivers measurable results and regulatory compliance
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Framework Visualization */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div 
                  className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <i className="fas fa-search text-2xl"></i>
                </div>
                <h3 className="font-bold text-lg mb-3 text-navy-blue">
                  Discover
                </h3>
                <p className="text-charcoal">Comprehensive assessment of current capabilities and requirements</p>
              </div>
              <div className="text-center">
                <div 
                  className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <i className="fas fa-drafting-compass text-2xl"></i>
                </div>
                <h3 className="font-bold text-lg mb-3 text-navy-blue">
                  Design
                </h3>
                <p className="text-charcoal">Strategic planning with regulatory compliance at the forefront</p>
              </div>
              <div className="text-center">
                <div 
                  className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <i className="fas fa-rocket text-2xl"></i>
                </div>
                <h3 className="font-bold text-lg mb-3 text-navy-blue">
                  Deploy
                </h3>
                <p className="text-charcoal">Systematic implementation with minimal business disruption</p>
              </div>
              <div className="text-center">
                <div 
                  className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h3 className="font-bold text-lg mb-3 text-navy-blue">
                  Optimize
                </h3>
                <p className="text-charcoal">Continuous improvement and performance monitoring</p>
              </div>
            </div>
          </div>

          {/* Problem-Solving Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div 
                className="bg-navy-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
              >
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Regulatory Compliance First</h3>
              <p className="text-charcoal">Every solution designed with regulatory requirements as the foundation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div 
                className="bg-navy-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
              >
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Technology-Agnostic Advisory</h3>
              <p className="text-charcoal">Unbiased recommendations based on business needs, not vendor relationships</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div 
                className="bg-navy-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
              >
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Scalable Talent Models</h3>
              <p className="text-charcoal">Flexible resource allocation that grows with your organization</p>
            </div>
          </div>

          {/* Sample Case Study */}
          <div className="bg-navy-blue text-white rounded-2xl p-8 md:p-12">
            <h3 className="font-bold text-2xl md:text-3xl mb-8 text-center">Featured Case Study</h3>
            <h4 className="font-bold text-xl mb-6 text-warm-orange">
              Digital Transformation for GCC Financial Institution
            </h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold text-lg mb-3 text-warm-orange">
                  Phase 1: Assessment
                </h5>
                <p>Comprehensive audit of legacy systems and regulatory requirements across 12 departments</p>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-3 text-warm-orange">
                  Phase 2: Implementation
                </h5>
                <p>Deployment of cloud-native architecture with enhanced security and compliance frameworks</p>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-3 text-warm-orange">
                  Phase 3: Results
                </h5>
                <p>40% reduction in processing time, 99.9% uptime, and full regulatory compliance achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Let our proven approach guide your organization through successful technology transformation with regulatory compliance at its core.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-navy-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Start Your Transformation
          </a>
        </div>
      </section>
    </div>
  );
}
