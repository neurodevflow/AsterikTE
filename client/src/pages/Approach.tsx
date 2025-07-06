export default function Approach() {
  return (
    <div className="pt-16">
      <section className="py-20" style={{ backgroundColor: "var(--asterik-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-8" style={{ color: "var(--asterik-dark)" }}>
              Our Approach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven framework for enterprise technology transformation
            </p>
          </div>

          {/* Framework Visualization */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div 
                  className="text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "var(--asterik-red)" }}
                >
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Discover
                </h3>
                <p className="text-gray-600">Comprehensive assessment of current capabilities and requirements</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "var(--asterik-orange)" }}
                >
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Design
                </h3>
                <p className="text-gray-600">Strategic planning with regulatory compliance at the forefront</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "var(--asterik-red)" }}
                >
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Deploy
                </h3>
                <p className="text-gray-600">Systematic implementation with minimal business disruption</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "var(--asterik-orange)" }}
                >
                  <span className="font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Optimize
                </h3>
                <p className="text-gray-600">Continuous improvement and performance monitoring</p>
              </div>
            </div>
          </div>

          {/* Problem-Solving Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div 
                className="text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--asterik-red)" }}
              >
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Regulatory Compliance First</h3>
              <p className="text-gray-600">Every solution designed with regulatory requirements as the foundation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div 
                className="text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--asterik-orange)" }}
              >
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Technology-Agnostic Advisory</h3>
              <p className="text-gray-600">Unbiased recommendations based on business needs, not vendor relationships</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div 
                className="text-white w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--asterik-red)" }}
              >
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Scalable Talent Models</h3>
              <p className="text-gray-600">Flexible resource allocation that grows with your organization</p>
            </div>
          </div>

          {/* Sample Case Study */}
          <div className="text-white rounded-2xl p-8 md:p-12" style={{ backgroundColor: "var(--asterik-dark)" }}>
            <h3 className="font-bold text-2xl md:text-3xl mb-8 text-center">Featured Case Study</h3>
            <h4 className="font-bold text-xl mb-6" style={{ color: "var(--asterik-orange)" }}>
              Digital Transformation for GCC Financial Institution
            </h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-orange)" }}>
                  Phase 1: Assessment
                </h5>
                <p>Comprehensive audit of legacy systems and regulatory requirements across 12 departments</p>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-orange)" }}>
                  Phase 2: Implementation
                </h5>
                <p>Deployment of cloud-native architecture with enhanced security and compliance frameworks</p>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-3" style={{ color: "var(--asterik-orange)" }}>
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
