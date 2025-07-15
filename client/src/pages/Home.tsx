import leadershipImage from "@assets/leadership Image_1751810042614.jpg";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(29, 29, 29, 0.7), rgba(29, 29, 29, 0.7)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Strategic Technology Solutions for Enterprise Transformation
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-4xl mx-auto">
            Delivering elite IT talent, digital transformation expertise, and end-to-end implementation for government entities and financial institutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-navy-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Consultation
            </button>
            <button 
              className="text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-200"
            >
              View Our Approach
            </button>
          </div>
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">15+</div>
              <p className="text-charcoal font-semibold">Years Experience</p>
            </div>
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">100+</div>
              <p className="text-charcoal font-semibold">Enterprise Clients</p>
            </div>
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">99%</div>
              <p className="text-charcoal font-semibold">Compliance Rate</p>
            </div>
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">24/7</div>
              <p className="text-charcoal font-semibold">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-navy-blue">
              Our Core Services
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for enterprise transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div 
              className="bg-soft-beige p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Manpower Supply</h3>
              <p className="text-charcoal text-center">
                Skilled IT professionals for regulated industries with compliance-first approach and enterprise-grade expertise.
              </p>
            </div>

            {/* Service Card 2 */}
            <div 
              className="bg-soft-beige p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">IT Consulting</h3>
              <p className="text-charcoal text-center">
                Strategic technology advisory services for digital transformation initiatives in government and financial sectors.
              </p>
            </div>

            {/* Service Card 3 */}
            <div 
              className="bg-soft-beige p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <i className="fas fa-search text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Talent Acquisition</h3>
              <p className="text-charcoal text-center">
                Specialized recruitment for enterprise technology roles with focus on regulatory compliance requirements.
              </p>
            </div>

            {/* Service Card 4 */}
            <div 
              className="bg-soft-beige p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <i className="fas fa-cogs text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Project Implementation</h3>
              <p className="text-charcoal text-center">
                End-to-end technology project delivery with proven methodologies for enterprise-scale implementations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Focus Section */}
      <div className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-navy-blue">
              Transforming the GCC Region
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Leading digital transformation initiatives across key industries with regulatory compliance at the forefront
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <i className="fas fa-university text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4">Government & Public Sector</h3>
              <p className="text-charcoal mb-4">Digital government initiatives, regulatory compliance, and citizen service enhancement programs.</p>
              <ul className="text-sm text-light-grey space-y-1">
                <li>• ADGM regulatory frameworks</li>
                <li>• Smart city implementations</li>
                <li>• Public service digitization</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4">Financial Services</h3>
              <p className="text-charcoal mb-4">Banking modernization, fintech innovation, and regulatory technology implementations.</p>
              <ul className="text-sm text-light-grey space-y-1">
                <li>• Core banking transformations</li>
                <li>• RegTech compliance solutions</li>
                <li>• Digital payment platforms</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <i className="fas fa-building text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4">Enterprise Organizations</h3>
              <p className="text-charcoal mb-4">Large-scale digital transformation and enterprise technology modernization projects.</p>
              <ul className="text-sm text-light-grey space-y-1">
                <li>• ERP implementations</li>
                <li>• Cloud migration strategies</li>
                <li>• Cybersecurity frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Insights */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-navy-blue">
                Industry Insights
              </span>
              <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6 text-navy-blue">
                The Future of Enterprise Technology in the GCC
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Our latest research reveals key trends shaping digital transformation across government and financial sectors in the Middle East region.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-navy-blue text-white w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-balance-scale text-xs"></i>
                  </div>
                  <p className="text-charcoal">Regulatory compliance driving 85% of technology investments</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-navy-blue text-white w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-cloud text-xs"></i>
                  </div>
                  <p className="text-charcoal">Cloud adoption accelerating in government sector</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-navy-blue text-white w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-shield-alt text-xs"></i>
                  </div>
                  <p className="text-charcoal">Skills gap widening in cybersecurity and AI domains</p>
                </div>
              </div>
              <button className="font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200">
                Read Full Report <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional technology consulting team collaborating on digital strategy" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Client Success Story */}
      <div className="bg-navy-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-light-grey max-w-3xl mx-auto">
              Transforming enterprises through strategic technology partnerships
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Modern financial institution digital transformation" 
                  className="w-full h-auto rounded-xl" 
                />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-navy-blue">
                  Case Study
                </span>
                <h3 className="font-bold text-2xl md:text-3xl mt-2 mb-4 text-navy-blue">
                  Leading GCC Bank Digital Transformation
                </h3>
                <p className="text-lg text-charcoal mb-6">
                  "ASTERIK's compliance-first approach enabled us to modernize our core banking systems while maintaining full regulatory adherence. Their team delivered exceptional results."
                </p>
                <div className="mb-6">
                  <p className="font-semibold text-navy-blue">Key Results:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-3 text-warm-orange"></i>
                      <span>40% reduction in processing time</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-3 text-warm-orange"></i>
                      <span>99.9% system uptime achieved</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-3 text-warm-orange"></i>
                      <span>Full regulatory compliance maintained</span>
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-light-grey">
                  <p className="font-semibold">Chief Technology Officer</p>
                  <p>Major GCC Financial Institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-bold text-2xl mb-8 text-navy-blue">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16">
            <span className="text-charcoal text-lg font-semibold mb-4">Serving Government Entities</span>
            <span className="text-2xl text-warm-orange">|</span>
            <span className="text-charcoal text-lg font-semibold mb-4">Financial Institutions</span>
            <span className="text-2xl text-warm-orange">|</span>
            <span className="text-charcoal text-lg font-semibold mb-4">Enterprise Organizations</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-navy-blue">
                About ASTERIK
              </span>
              <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-6 text-navy-blue">
                Redefining Enterprise Technology Capabilities
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Led by former PwC Middle East CX/DX leadership with 15+ years of experience driving transformations for ADGM, MetLife Gulf, and Fortune 500 enterprises. We bring deep expertise in regulatory compliance, digital transformation, and enterprise technology implementation across the GCC region.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div 
                    className="bg-navy-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <i className="fas fa-handshake text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Strategic Partnership</h4>
                    <p className="text-charcoal text-sm">Long-term collaborative relationships with enterprise clients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="bg-navy-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <i className="fas fa-shield-alt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Compliance First</h4>
                    <p className="text-charcoal text-sm">Regulatory requirements integrated from project inception</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="bg-navy-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <i className="fas fa-award text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Technology Excellence</h4>
                    <p className="text-charcoal text-sm">Best-in-class technical expertise and innovation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="bg-navy-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <i className="fas fa-chart-bar text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">ROI-Driven</h4>
                    <p className="text-charcoal text-sm">Measurable business outcomes and performance metrics</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-navy-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                >
                  Learn More About Us
                </button>
                <button className="font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200 px-6 py-3">
                  Our Leadership Team <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="relative">
                <img 
                  src={leadershipImage} 
                  alt="ASTERIK Founder & CEO - Former PwC Middle East CX/DX Leader" 
                  className="w-80 h-80 rounded-full mx-auto object-cover shadow-lg border-4 border-white" 
                />
              </div>
              <div className="mt-6 text-center">
                <h4 className="font-bold text-xl mb-2" style={{ color: "var(--asterik-dark)" }}>Leadership Excellence</h4>
                <p className="text-gray-600 mb-3">Founder & Chief Executive Officer</p>
                <p className="text-sm text-gray-500">Former PwC Middle East CX/DX Lead | 15+ Years Enterprise Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
