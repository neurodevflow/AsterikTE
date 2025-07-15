export default function Services() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Software Development Services Done Right
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Take advantage of Asterik's more than 10 years of technical knowledge and experience in providing top-notch software development services to help your business grow and stay competitive on the market.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
              <img 
                src="/api/placeholder/600/350" 
                alt="Software Developer Services Done right and with confidence!" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive software development solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Application Modernization */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-sync-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Application Modernization</h3>
                <p className="text-charcoal mb-6">
                  Stay ahead of market shifts. Our application modernization service upgrades your legacy systems to scalable, innovative, and reliable solutions.
                </p>
                <a 
                  href="/services/application-modernization" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Product Design */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-palette text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Product Design</h3>
                <p className="text-charcoal mb-6">
                  We design intuitive digital experiences that align user needs with business goals—resulting in higher engagement, satisfaction, and adoption.
                </p>
                <a 
                  href="/services/product-design" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Data and Analytics */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Data and Analytics</h3>
                <p className="text-charcoal mb-6">
                  Unlock the power of data. Our data analytics service transforms scattered data into actionable, intelligent insights that drive measurable business value.
                </p>
                <a 
                  href="/services/data-analytics" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* AI and ML */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">AI and ML</h3>
                <p className="text-charcoal mb-6">
                  Drive AI value where it counts. Our AI service identifies the right use cases to ensure meaningful ROI and real business impact.
                </p>
                <a 
                  href="/services/ai-ml" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* GenAI */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-robot text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">GenAI</h3>
                <p className="text-charcoal mb-6">
                  Stand out on the market. Our generative AI service leverages 10+ years of expertise to deliver scalable, value-driven solutions that generate measurable ROI.
                </p>
                <a 
                  href="/services/genai" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cloud text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud</h3>
                <p className="text-charcoal mb-6">
                  Modernize, design and implement secure, scalable cloud architectures that reduce infrastructure costs, support innovation, and future-proof your operations.
                </p>
                <a 
                  href="/services/cloud" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cogs text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">DevOps</h3>
                <p className="text-charcoal mb-6">
                  Streamline your software delivery. Our DevOps service optimizes your SDLC with agile, automated, and governed workflows.
                </p>
                <a 
                  href="/services/devops" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* DevSecOps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">DevSecOps</h3>
                <p className="text-charcoal mb-6">
                  Ensure secure and efficient code delivery. Asterik's DevSecOps services integrate security throughout the SDLC, ensuring compliance and smooth execution.
                </p>
                <a 
                  href="/services/devsecops" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Cybersecurity and Resilience */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-lock text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Cybersecurity and Resilience</h3>
                <p className="text-charcoal mb-6">
                  Shield against cyberattacks. Our cybersecurity service fortifies your defenses with proactive, resilient, and robust protection.
                </p>
                <a 
                  href="/services/cybersecurity-resilience" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Managed Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-headset text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Managed Support</h3>
                <p className="text-charcoal mb-6">
                  Don't let anything disrupt your business. Our application support service keeps your systems stable, secure, and continuously updated for seamless, uninterrupted performance.
                </p>
                <a 
                  href="/services/managed-support" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Salesforce */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cloud-upload-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Salesforce</h3>
                <p className="text-charcoal mb-6">
                  Maximize your Salesforce ROI. From implementation to optimization, our Salesforce services streamline workflows, improve user adoption, and connect your data for smarter business decisions.
                </p>
                <a 
                  href="/services/salesforce" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Why you'll choose us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-soft-beige rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Customer-First Approach</h3>
                <ul className="text-charcoal space-y-2">
                  <li><strong>4 years</strong> average client engagement</li>
                  <li>Asterik's Leadership works side by side with you</li>
                  <li>Net Promoter Score of <strong>74</strong></li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-soft-beige rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Laser-Focused Delivery</h3>
                <ul className="text-charcoal space-y-2">
                  <li><strong>98%</strong> of projects delivered on time and within scope</li>
                  <li>Industry-specialized solutions that drive real impact</li>
                  <li>Precision execution</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-soft-beige rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-bolt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Efficiency at its Best</h3>
                <ul className="text-charcoal space-y-2">
                  <li><strong>10–20 minute</strong> response time for urgent requests</li>
                  <li>Flexible scaling and descaling options</li>
                  <li><strong>Money-back guarantee</strong> for risk-free engagement</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-soft-beige rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-lightbulb text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Expert Problem Solvers</h3>
                <ul className="text-charcoal space-y-2">
                  <li><strong>78%</strong> of clients praise our proactive approach</li>
                  <li>Access to a global talent pool with rare technical expertise</li>
                  <li>Proven methodologies for breaking down complex challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Models Section */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Here's how we can cooperate
            </h2>
            <img 
              src="/api/placeholder/600/400" 
              alt="Two businesswomen shaking hands across a table in a modern office setting, symbolizing partnership and collaboration" 
              className="mx-auto rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Staff Augmentation</h3>
              <p className="text-charcoal mb-6">
                When you know what your project needs, what needs to be done and how. At this point you just lack skilled engineers that can deliver results on time and within budget.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• High-skilled professionals that become an extension of your team</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Managed Delivery</h3>
              <p className="text-charcoal mb-6">
                When you want to focus on business objectives and not the team management.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• High-skilled professionals that become an extension of your team</li>
                <li>• PM, who always ensures project management's done right</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Project-Based</h3>
              <p className="text-charcoal mb-6">
                Best suits for when you need a turnkey project, whether it's to build something from scratch or improve your existing product.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• High-skilled team of professionals who take full responsibility for the project being delivered on time and within budget</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Consulting as a Service</h3>
              <p className="text-charcoal mb-6">
                When you've reached a dead-end in your project's development or your business.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• A technical vision of the project documentation</li>
                <li>• High-level architecture</li>
                <li>• Gap analysis</li>
                <li>• Risk analysis</li>
                <li>• Tech constraints</li>
                <li>• Initial project plan via proposal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-soft-beige rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                Why should I choose Asterik over the other software development companies?
              </h3>
              <p className="text-charcoal">
                Asterik delivers customer-first service, on-time project execution, and scalable engagement models. With a Net Promoter Score of 74, we prioritize long-term partnerships. 98% of projects are delivered on time and within scope. Enjoy 10–20 min response times, a money-back guarantee, and access to a global talent pool for expert problem-solving.
              </p>
            </div>

            <div className="bg-soft-beige rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                What industries do you have an extensive expertise with?
              </h3>
              <p className="text-charcoal">
                We build <strong>industry-specific</strong> solutions for <strong>Financial Services, Insurance, Wealth Management, Energy, Logistics, Media, Telecom, Marketing, Healthcare, EdTech, Retail, and E-commerce</strong>. Our expertise covers <strong>AI-powered automation, cloud platforms, risk management, customer engagement, and real-time data insights</strong>, helping businesses optimize operations and drive measurable growth.
              </p>
            </div>

            <div className="bg-soft-beige rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                Does Asterik cover all stages of software development lifecycle (SDLC)?
              </h3>
              <p className="text-charcoal">
                Yes, we support the <strong>entire SDLC</strong>—from <strong>strategy and development to deployment and ongoing maintenance</strong>. Our process ensures <strong>scalability, security, and seamless execution</strong>, helping businesses stay agile and competitive in a rapidly evolving market.
              </p>
            </div>

            <div className="bg-soft-beige rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                What's the cost of your software development services?
              </h3>
              <p className="text-charcoal">
                Asterik provides <strong>clear cost estimates</strong> with <strong>forecasted timelines, monthly cost projections, project assumptions, and a roadmap</strong> for the next steps. Contact us for a <strong>personalized estimate</strong>, or explore our <strong>case studies</strong> to see how we approach budgeting, planning, and risk mitigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Now, it's your turn. Share your needs, and we'll connect you with the right experts.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Get Started Today <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}