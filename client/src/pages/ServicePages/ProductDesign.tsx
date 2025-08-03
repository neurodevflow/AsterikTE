export default function ProductDesign() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Design
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Create exceptional digital experiences that drive business value through user-centered design, comprehensive research, and innovative solutions.
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
              Our Product Design Services
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We create digital products that users love and businesses value through comprehensive design processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">UX/UI Design</h3>
              <p className="text-charcoal mb-6">
                Design intuitive and engaging user interfaces that provide exceptional user experiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>User Interface Design</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>User Experience Architecture</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Interaction Design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">User Research</h3>
              <p className="text-charcoal mb-6">
                Understand your users' needs and behaviors through comprehensive research methodologies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>User Interviews & Surveys</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Usability Testing</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Market Research Analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Prototyping</h3>
              <p className="text-charcoal mb-6">
                Validate design concepts and user flows through interactive prototypes and wireframes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Interactive Prototypes</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Wireframe Development</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Concept Validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Design Systems</h3>
              <p className="text-charcoal mb-6">
                Create scalable design systems that ensure consistency across all digital products.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Component Libraries</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Brand Guidelines</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Design Tokens</span>
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
                  <span className="text-lg">Enhanced User Satisfaction</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Increased Conversion Rates</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Reduced Development Costs</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Faster Time to Market</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span className="text-lg">Brand Differentiation</span>
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
                    <h4 className="font-semibold text-navy-blue">Discovery</h4>
                    <p className="text-charcoal">Research user needs and business requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-palette text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Design</h4>
                    <p className="text-charcoal">Create user-centered design solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check-circle text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Validation</h4>
                    <p className="text-charcoal">Test and refine design concepts with users</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-blue text-white rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-tools text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Implementation</h4>
                    <p className="text-charcoal">Support development with detailed specifications</p>
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
            Let's discuss how our product design services can create exceptional experiences for your users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Contact Us Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}