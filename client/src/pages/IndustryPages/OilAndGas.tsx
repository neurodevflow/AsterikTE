export default function OilAndGas() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oil and Gas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Drive operational excellence in the energy sector with advanced technology solutions. From upstream exploration to downstream operations, we optimize processes and enhance safety across the oil and gas value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Energy Technology Solutions
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive technology solutions designed to optimize operations and enhance safety in the energy sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exploration & Production */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-search-location text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Exploration & Production</h3>
              <p className="text-charcoal mb-6">
                Advanced technologies for seismic analysis, reservoir modeling, and production optimization to maximize recovery and efficiency.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Seismic data processing and analysis</li>
                <li>• Reservoir simulation and modeling</li>
                <li>• Well planning and drilling optimization</li>
                <li>• Production monitoring and control</li>
              </ul>
            </div>

            {/* Digital Oilfield */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-oil-well text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Digital Oilfield Solutions</h3>
              <p className="text-charcoal mb-6">
                Integrated digital solutions that connect field operations with real-time data analytics and automated control systems.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Real-time field monitoring</li>
                <li>• SCADA and automation systems</li>
                <li>• Asset performance management</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>

            {/* Pipeline & Transportation */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-road text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Pipeline & Transportation</h3>
              <p className="text-charcoal mb-6">
                Advanced pipeline monitoring and transportation management systems that ensure safe and efficient hydrocarbon transport.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Pipeline integrity management</li>
                <li>• Leak detection systems</li>
                <li>• Transportation optimization</li>
                <li>• Emergency response systems</li>
              </ul>
            </div>

            {/* Refining & Processing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-industry text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Refining & Processing</h3>
              <p className="text-charcoal mb-6">
                Process optimization and control systems that maximize yield, ensure quality, and maintain safety in refining operations.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Process control and optimization</li>
                <li>• Quality management systems</li>
                <li>• Energy management</li>
                <li>• Safety and environmental monitoring</li>
              </ul>
            </div>

            {/* HSE & Compliance */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">HSE & Compliance</h3>
              <p className="text-charcoal mb-6">
                Comprehensive health, safety, and environmental management systems that ensure regulatory compliance and operational excellence.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Environmental monitoring</li>
                <li>• Safety management systems</li>
                <li>• Regulatory compliance tracking</li>
                <li>• Incident management</li>
              </ul>
            </div>

            {/* Supply Chain & Trading */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Supply Chain & Trading</h3>
              <p className="text-charcoal mb-6">
                Advanced supply chain optimization and trading platforms that manage complex energy commodity transactions and logistics.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Commodity trading systems</li>
                <li>• Supply chain optimization</li>
                <li>• Inventory management</li>
                <li>• Risk management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Industry Standards & Compliance
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Ensuring full compliance with energy sector regulations and industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Safety Standards</h3>
              <ul className="text-charcoal space-y-2">
                <li>• API Standards</li>
                <li>• OSHA Regulations</li>
                <li>• IEC 61508/61511</li>
                <li>• ISO 45001</li>
                <li>• NORSOK Standards</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Environmental</h3>
              <ul className="text-charcoal space-y-2">
                <li>• EPA Regulations</li>
                <li>• ISO 14001</li>
                <li>• UNFCCC Guidelines</li>
                <li>• IPCC Standards</li>
                <li>• Carbon Accounting</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Regional Compliance</h3>
              <ul className="text-charcoal space-y-2">
                <li>• UAE Energy Regulations</li>
                <li>• KSA SASO Standards</li>
                <li>• EU Energy Directives</li>
                <li>• ADNOC Requirements</li>
                <li>• Aramco Standards</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Cybersecurity</h3>
              <ul className="text-charcoal space-y-2">
                <li>• NERC CIP</li>
                <li>• NIST Framework</li>
                <li>• IEC 62443</li>
                <li>• DNV GL Guidelines</li>
                <li>• ISA/IEC 62443</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Energy Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Operational Technology</h3>
              <ul className="text-charcoal space-y-2">
                <li>• SCADA and HMI systems</li>
                <li>• Distributed Control Systems (DCS)</li>
                <li>• Programmable Logic Controllers (PLC)</li>
                <li>• Safety Instrumented Systems (SIS)</li>
                <li>• Asset Performance Management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Data & Analytics</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Time-series databases</li>
                <li>• Process data historians</li>
                <li>• Advanced analytics platforms</li>
                <li>• Machine learning algorithms</li>
                <li>• Digital twin technology</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Enterprise Systems</h3>
              <ul className="text-charcoal space-y-2">
                <li>• ERP systems (SAP, Oracle)</li>
                <li>• Maintenance management (CMMS)</li>
                <li>• Document management systems</li>
                <li>• Compliance tracking platforms</li>
                <li>• Supply chain management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Energy Sector Impact Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">15%</h3>
              <p className="text-charcoal">Increase in production efficiency</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">50%</h3>
              <p className="text-charcoal">Reduction in safety incidents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">30%</h3>
              <p className="text-charcoal">Reduction in unplanned downtime</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">25%</h3>
              <p className="text-charcoal">Reduction in environmental impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Journey */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Digital Oil & Gas Transformation
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive digitization approach for modern energy operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-robot text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Automation & Robotics</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Autonomous drilling systems</li>
                <li>• Robotic pipeline inspection</li>
                <li>• Automated tank gauging</li>
                <li>• Intelligent well completion</li>
                <li>• Remote operated vehicles (ROVs)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-brain text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">AI & Machine Learning</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Predictive equipment maintenance</li>
                <li>• Reservoir optimization models</li>
                <li>• Production forecasting</li>
                <li>• Anomaly detection systems</li>
                <li>• Intelligent drilling optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-satellite text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">IoT & Remote Monitoring</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Wireless sensor networks</li>
                <li>• Satellite communication systems</li>
                <li>• Edge computing platforms</li>
                <li>• Real-time telemetry</li>
                <li>• Predictive analytics dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Energy Sector Digital Transformation Results
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Measurable outcomes from our energy technology implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-6">Upstream Operations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Drilling efficiency improvement</span>
                  <span className="text-2xl font-bold text-navy-blue">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Well completion time reduction</span>
                  <span className="text-2xl font-bold text-navy-blue">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Reservoir recovery optimization</span>
                  <span className="text-2xl font-bold text-navy-blue">18%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">HSE incident reduction</span>
                  <span className="text-2xl font-bold text-navy-blue">45%</span>
                </div>
              </div>
            </div>

            <div className="bg-soft-beige rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy-blue mb-6">Downstream Operations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Refinery throughput increase</span>
                  <span className="text-2xl font-bold text-navy-blue">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Energy efficiency improvement</span>
                  <span className="text-2xl font-bold text-navy-blue">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Maintenance cost reduction</span>
                  <span className="text-2xl font-bold text-navy-blue">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal">Environmental compliance rate</span>
                  <span className="text-2xl font-bold text-navy-blue">99.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Energy Technology Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Assessment</h3>
              <p className="text-charcoal">Comprehensive evaluation of current operations, safety protocols, and regulatory requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-drafting-compass text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Design</h3>
              <p className="text-charcoal">Custom solution architecture with safety-first approach and industry compliance standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tools text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Implementation</h3>
              <p className="text-charcoal">Phased deployment with zero downtime approach and comprehensive safety protocols</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Optimization</h3>
              <p className="text-charcoal">Continuous monitoring, performance tuning, and safety enhancement for operational excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Energy Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Asterik to implement advanced technology solutions that enhance safety, efficiency, and sustainability in your energy operations.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Optimize Operations <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}