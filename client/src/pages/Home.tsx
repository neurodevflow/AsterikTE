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
            <a 
              href="/contact"
              className="bg-navy-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
            >
              Schedule Consultation
            </a>
            <a 
              href="/approach"
              className="text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-200 text-center"
            >
              View Our Approach
            </a>
          </div>
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">30+</div>
              <p className="text-charcoal font-semibold">Cumulative Years Leadership Experience</p>
            </div>
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">48hr</div>
              <p className="text-charcoal font-semibold">CV Turnaround Time</p>
            </div>
            <div>
              <div className="font-bold text-4xl mb-2 text-navy-blue">100%</div>
              <p className="text-charcoal font-semibold">GCC Compliance-Ready Profiles</p>
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

      {/* Focus Areas Section */}
      <div className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-navy-blue">
              Focused on What Matters Most
            </h2>
            <p className="text-lg text-charcoal max-w-4xl mx-auto">
              We partner with organizations operating in complex, regulated, and fast-moving environments — from public sector programs to fintech innovation to enterprise modernization.
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
              <p className="text-charcoal mb-4">Powering the digital evolution of public institutions through compliant, future-ready technology solutions. From smart cities to regulatory platforms, we support initiatives that put citizens and governance at the center.</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy-blue mb-2">Expertise includes:</p>
                <ul className="text-sm text-light-grey space-y-1">
                  <li>• Compliance-driven public sector systems</li>
                  <li>• Smart city infrastructure & platforms</li>
                  <li>• Digital public service transformation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4">Financial Services & Fintech</h3>
              <p className="text-charcoal mb-4">Accelerating digital innovation in finance with agile tech teams and deep domain know-how. Whether you're building next-gen payment systems or scaling a regulated fintech platform, we deliver the talent to move fast and stay compliant.</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy-blue mb-2">Expertise includes:</p>
                <ul className="text-sm text-light-grey space-y-1">
                  <li>• Core banking modernization for scaleups</li>
                  <li>• RegTech & embedded compliance frameworks</li>
                  <li>• Mobile-first digital payments & wallets</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div 
                className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <i className="fas fa-building text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4">Enterprise Organizations</h3>
              <p className="text-charcoal mb-4">Supporting large-scale transformation through flexible IT staffing, agile delivery teams, and technology solutions tailored to complex operational environments. From ERP to cloud to security, we help enterprises move with speed and stability.</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy-blue mb-2">Expertise includes:</p>
                <ul className="text-sm text-light-grey space-y-1">
                  <li>• ERP implementation & rollout support</li>
                  <li>• Cloud migration strategy & execution</li>
                  <li>• Cybersecurity frameworks & governance models</li>
                </ul>
              </div>
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



      {/* Focus Areas */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-bold text-2xl mb-8 text-navy-blue">Our Focus Areas Include</h3>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16">
            <span className="text-charcoal text-lg font-semibold mb-4">Government & Public Sector</span>
            <span className="text-2xl text-warm-orange">|</span>
            <span className="text-charcoal text-lg font-semibold mb-4">Financial Services</span>
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
                Founded by former PwC Middle East CX/DX leadership with 15+ years of experience driving transformations for ADGM, MetLife Gulf, and Fortune 500 enterprises. Our team combines Big Four advisory expertise with hands-on technology implementation experience across the GCC region.
              </p>
              <div className="mb-6 p-4 bg-white rounded-lg border-l-4 border-navy-blue">
                <p className="text-sm text-charcoal mb-2"><strong>Founder Credentials:</strong></p>
                <ul className="text-sm text-light-grey space-y-1">
                  <li>• Former PwC Middle East Customer & Digital Experience Practice Lead</li>
                  <li>• 15+ years driving digital transformations for Fortune 500 companies</li>
                  <li>• Led technology implementations for ADGM and major GCC financial institutions</li>
                  <li>• Deep expertise in regulatory compliance and enterprise-scale projects</li>
                </ul>
              </div>
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
