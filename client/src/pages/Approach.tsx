export default function Approach() {
  return (
    <div className="pt-16">
      <section className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-8 text-navy-blue">
              Our Approach
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              A proven framework for enterprise technology transformation
            </p>
          </div>

          {/* Framework Visualization */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div 
                  className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-navy-blue">
                  Discover
                </h3>
                <p className="text-charcoal">Comprehensive assessment of current capabilities and requirements</p>
              </div>
              <div className="text-center">
                <div 
                  className="bg-warm-orange text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <span className="font-bold text-xl">2</span>
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
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-navy-blue">
                  Deploy
                </h3>
                <p className="text-charcoal">Systematic implementation with minimal business disruption</p>
              </div>
              <div className="text-center">
                <div 
                  className="bg-warm-orange text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <span className="font-bold text-xl">4</span>
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
                className="bg-warm-orange text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
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
    </div>
  );
}
