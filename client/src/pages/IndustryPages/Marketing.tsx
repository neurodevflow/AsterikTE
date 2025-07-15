export default function Marketing() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Intent-based targeting, data-driven insights, and analytics to enhance campaign efficiency and maximize the ROI of your marketing investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium">
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
              Marketing Technology Solutions
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Advanced marketing technology solutions designed to optimize campaigns and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Intent-based Targeting</h3>
              <p className="text-charcoal mb-6">
                Advanced targeting systems that identify and reach customers based on purchase intent.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Behavioral Intent Analysis</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Predictive Audience Modeling</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Real-time Personalization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Campaign Analytics</h3>
              <p className="text-charcoal mb-6">
                Comprehensive analytics platforms for tracking and optimizing marketing performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Multi-channel Attribution</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Performance Dashboards</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Campaign Optimization Tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">ROI Optimization</h3>
              <p className="text-charcoal mb-6">
                Advanced tools and strategies to maximize return on marketing investments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Budget Allocation Models</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Conversion Rate Optimization</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Lifetime Value Analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Data-driven Insights</h3>
              <p className="text-charcoal mb-6">
                Powerful analytics and insights to inform marketing strategy and decision-making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Customer Journey Mapping</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Market Segmentation Analysis</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Competitive Intelligence</span>
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
              How we helped a marketing solution provider dramatically reduce reporting time.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-12 border border-light-grey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy-blue mb-6">
                  Marketing Solution Provider Custom Solution
                </h3>
                <p className="text-charcoal mb-6">
                  A leading marketing solution provider needed to streamline their reporting processes and provide better insights to their clients through automated analytics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Automated reporting platform</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Real-time analytics dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Custom visualization tools</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-soft-beige rounded-lg">
                  <div className="text-4xl font-bold text-navy-blue mb-2">2x</div>
                  <div className="text-charcoal">Reduction in reporting time</div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-charcoal italic">
                    "The automated solution transformed our client reporting capabilities."
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
              Why Choose Asterik for Marketing Technology
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Precision Targeting</h3>
              <p className="text-charcoal">
                Advanced targeting technologies for improved campaign performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">ROI Focus</h3>
              <p className="text-charcoal">
                Solutions designed to maximize marketing return on investment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">AI-Powered Insights</h3>
              <p className="text-charcoal">
                Machine learning algorithms for predictive marketing analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Maximize Your Marketing ROI?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our marketing technology solutions can enhance your campaign performance and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Contact Us Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium">
              View More Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}