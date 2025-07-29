export default function Industries() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry-Focused Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Asterik delivers specialized technology solutions across diverse industries, understanding unique challenges and regulatory requirements to drive meaningful transformation.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
              <div className="w-full h-64 bg-gradient-to-br from-navy-blue/20 to-warm-orange/20 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-industry text-6xl text-white mb-4"></i>
                  <h3 className="text-xl font-semibold text-white">Industry-Focused Solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Specialized solutions tailored to your industry's unique challenges and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-university text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Financial Services</h3>
                <p className="text-charcoal mb-6">
                  Modern solutions for modern finance. Leading financial institutions trust Asterik to streamline operations, improve client service, and modernize confidently.
                </p>
                <a 
                  href="/industries/financial-services" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-heartbeat text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Healthcare</h3>
                <p className="text-charcoal mb-6">
                  AI-driven, cloud-ready, patient-focused health experiences. We align technical solutions with operational, financial, and compliance goals.
                </p>
                <a 
                  href="/industries/healthcare" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Energy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-bolt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Energy</h3>
                <p className="text-charcoal mb-6">
                  Software infrastructure for the energy transition. Modernize grid operations, digitize asset management, and implement real-time control platforms.
                </p>
                <a 
                  href="/industries/energy" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-shipping-fast text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Logistics</h3>
                <p className="text-charcoal mb-6">
                  Supply chain excellence through technology. Real-time fleet tracking, smart route planning, integrated TMS/WMS, and demand forecasting solutions.
                </p>
                <a 
                  href="/industries/logistics" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Wealth Management */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-chart-pie text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Wealth Management</h3>
                <p className="text-charcoal mb-6">
                  Advanced portfolio management and client advisory platforms. Deliver personalized investment strategies with robust risk management and regulatory compliance.
                </p>
                <a 
                  href="/industries/wealth-management" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Retail & E-commerce */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-shopping-cart text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Retail & E-commerce</h3>
                <p className="text-charcoal mb-6">
                  Next-generation retail experiences. Omnichannel platforms, inventory management, customer analytics, and personalized shopping solutions.
                </p>
                <a 
                  href="/industries/retail-ecommerce" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* EdTech */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">EdTech</h3>
                <p className="text-charcoal mb-6">
                  Transformative educational technology solutions. Learning management systems, student analytics, virtual classrooms, and AI-powered personalized education.
                </p>
                <a 
                  href="/industries/edtech" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Marketing & Advertising */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-bullhorn text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Marketing & Advertising</h3>
                <p className="text-charcoal mb-6">
                  Data-driven marketing technology platforms. Campaign management, customer journey mapping, marketing automation, and performance analytics.
                </p>
                <a 
                  href="/industries/marketing" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4">Insurance</h3>
                <p className="text-charcoal mb-6">
                  Digital transformation for insurance providers. Claims processing automation, risk assessment platforms, customer portals, and regulatory compliance solutions.
                </p>
                <a 
                  href="/industries/insurance" 
                  className="inline-flex items-center text-navy-blue hover:text-warm-orange transition-colors font-medium"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Featured Industry Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Financial Services Detail */}
            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Financial Services Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-tools text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Digital Employee Experience</h4>
                    <p className="text-charcoal">Centralized CRMs, AI assistants, and value tracking platforms with real-time portfolio KPIs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-users text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Digital Customer Experience</h4>
                    <p className="text-charcoal">Unified portals, automated onboarding, and behavior-driven dashboards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-database text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Data Engineering</h4>
                    <p className="text-charcoal">Structured data lakes, automated ETL pipelines, and AI-powered anomaly detection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Detail */}
            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Healthcare Innovation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-mobile-alt text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Digital Patient Experience</h4>
                    <p className="text-charcoal">Mobile-first patient portals, CRM integration, and omnichannel experiences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-robot text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Workflow Automation</h4>
                    <p className="text-charcoal">RPA for claims processing, automated workflows, and dashboard insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-brain text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">AI-Readiness</h4>
                    <p className="text-charcoal">Secure AI pipelines, clinician co-pilot apps, and ethical AI frameworks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Detail */}
            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Energy Transformation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-network-wired text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Grid Edge Integration</h4>
                    <p className="text-charcoal">DERMS implementation, dynamic load modeling, and virtual power plant enablement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-cog text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Asset Intelligence</h4>
                    <p className="text-charcoal">Digital twins, predictive failure models, and GIS integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-shield-alt text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Cybersecure Architecture</h4>
                    <p className="text-charcoal">Zero Trust frameworks, device fingerprinting, and NERC CIP compliance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics Detail */}
            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Logistics Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-truck text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Transportation Management</h4>
                    <p className="text-charcoal">Real-time shipment tracking, automated carrier selection, and route optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-warehouse text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Warehouse Management</h4>
                    <p className="text-charcoal">Automated inventory tracking, IoT integration, and optimized picking processes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-analytics text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">AI-Powered Analytics</h4>
                    <p className="text-charcoal">Predictive analytics, machine learning optimization, and NLP customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Industry Impact
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Delivering measurable results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-clock text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-navy-blue mb-2">98%</h3>
                <p className="text-charcoal">On-time delivery rate across all industries</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-navy-blue mb-2">4 Years</h3>
                <p className="text-charcoal">Average client engagement duration</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-thumbs-up text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-navy-blue mb-2">74</h3>
                <p className="text-charcoal">Net Promoter Score across industries</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-bolt text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-navy-blue mb-2">10-20 min</h3>
                <p className="text-charcoal">Average response time for urgent requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Meeting industry-specific regulatory requirements and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-soft-beige rounded-lg p-8">
                <h3 className="text-xl font-bold text-navy-blue mb-4">Financial Services</h3>
                <div className="space-y-2">
                  <div className="text-sm text-charcoal">SEC • FINRA • FCA • IIROC</div>
                  <div className="text-sm text-charcoal">PCI DSS • GDPR • SOX</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-soft-beige rounded-lg p-8">
                <h3 className="text-xl font-bold text-navy-blue mb-4">Healthcare</h3>
                <div className="space-y-2">
                  <div className="text-sm text-charcoal">HIPAA • GDPR • PHIPA</div>
                  <div className="text-sm text-charcoal">ISO 27001 • SOC 2 • MDR</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-soft-beige rounded-lg p-8">
                <h3 className="text-xl font-bold text-navy-blue mb-4">Energy</h3>
                <div className="space-y-2">
                  <div className="text-sm text-charcoal">NERC CIP • ISO 27019</div>
                  <div className="text-sm text-charcoal">EU AI Act • IEC 61850</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                How does Asterik ensure industry-specific compliance?
              </h3>
              <p className="text-charcoal">
                We design every solution with industry-specific regulations in mind, including <strong>HIPAA, GDPR, SEC, FINRA, NERC CIP, and ISO standards</strong>. Our team applies secure-by-design development practices, conducts risk assessments, and ensures traceability and auditability throughout the development lifecycle.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                What makes Asterik different from generic software development companies?
              </h3>
              <p className="text-charcoal">
                Our <strong>industry-specialized approach</strong> means we understand your unique challenges, regulations, and market dynamics. We don't just build software—we deliver solutions that address specific industry pain points, from <strong>financial risk management to healthcare interoperability to energy grid modernization</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                Can you help us modernize legacy systems without disrupting operations?
              </h3>
              <p className="text-charcoal">
                Yes. We specialize in <strong>phased modernization approaches</strong> that minimize operational disruption. Our strategies include <strong>API enablement, cloud-native replatforming, and incremental system upgrades</strong> while maintaining data integrity and regulatory compliance throughout the transition.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-4">
                How do you integrate with existing industry-specific platforms?
              </h3>
              <p className="text-charcoal">
                We have extensive experience integrating with <strong>industry-standard platforms</strong> including EHRs, SCADA systems, trading platforms, WMS/TMS solutions, and CRM systems. Our integration approach ensures <strong>seamless data flow, real-time synchronization, and maintained system performance</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Asterik to build industry-specific solutions that drive measurable results and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Discuss Your Project <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a 
              href="/approach" 
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-navy-blue transition-colors"
            >
              Our Approach <i className="fas fa-search ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}