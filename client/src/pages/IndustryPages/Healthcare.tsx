export default function Healthcare() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare & Life Sciences
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with innovative technology solutions. From patient care optimization to clinical research acceleration, we enable healthcare organizations to improve outcomes and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Healthcare Technology Solutions
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for healthcare and life sciences organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electronic Health Records */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-file-medical text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Electronic Health Records</h3>
              <p className="text-charcoal mb-6">
                Modern EHR systems that streamline patient data management, improve care coordination, and enhance clinical decision-making.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• EHR implementation and optimization</li>
                <li>• Interoperability and data exchange</li>
                <li>• Clinical workflow automation</li>
                <li>• Patient portal development</li>
              </ul>
            </div>

            {/* Telemedicine */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-video text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Telemedicine & Remote Care</h3>
              <p className="text-charcoal mb-6">
                Advanced telehealth platforms that enable remote consultations, patient monitoring, and care delivery.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Virtual consultation platforms</li>
                <li>• Remote patient monitoring</li>
                <li>• Mobile health applications</li>
                <li>• Wearable device integration</li>
              </ul>
            </div>

            {/* Clinical Research */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-flask text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Clinical Research Technology</h3>
              <p className="text-charcoal mb-6">
                Innovative solutions that accelerate clinical trials, improve data quality, and enhance research outcomes.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Electronic Data Capture (EDC)</li>
                <li>• Clinical Trial Management Systems</li>
                <li>• Regulatory compliance solutions</li>
                <li>• Real-world evidence platforms</li>
              </ul>
            </div>

            {/* Medical Imaging */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-x-ray text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Medical Imaging & AI</h3>
              <p className="text-charcoal mb-6">
                AI-powered medical imaging solutions that enhance diagnostic accuracy and accelerate radiological workflows.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• AI-assisted diagnostic imaging</li>
                <li>• PACS and imaging workflow</li>
                <li>• Computer-aided detection</li>
                <li>• 3D visualization and modeling</li>
              </ul>
            </div>

            {/* Population Health */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Population Health Management</h3>
              <p className="text-charcoal mb-6">
                Comprehensive population health platforms that enable proactive care management and health outcomes improvement.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Risk stratification and analytics</li>
                <li>• Care gap identification</li>
                <li>• Quality measure reporting</li>
                <li>• Preventive care optimization</li>
              </ul>
            </div>

            {/* Healthcare Data Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Healthcare Analytics</h3>
              <p className="text-charcoal mb-6">
                Advanced analytics solutions that transform healthcare data into actionable insights for better decision-making.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Clinical data analytics</li>
                <li>• Predictive modeling</li>
                <li>• Performance dashboards</li>
                <li>• Real-time reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Healthcare Compliance & Standards
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Ensuring full compliance with healthcare regulations and industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">US Regulations</h3>
              <ul className="text-charcoal space-y-2">
                <li>• HIPAA</li>
                <li>• HITECH Act</li>
                <li>• FDA 21 CFR Part 11</li>
                <li>• CLIA</li>
                <li>• Meaningful Use</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">International Standards</h3>
              <ul className="text-charcoal space-y-2">
                <li>• HL7 FHIR</li>
                <li>• IHE Profiles</li>
                <li>• ISO 13485</li>
                <li>• ISO 27799</li>
                <li>• GDPR</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Clinical Standards</h3>
              <ul className="text-charcoal space-y-2">
                <li>• ICH GCP</li>
                <li>• CDISC Standards</li>
                <li>• SNOMED CT</li>
                <li>• ICD-10/11</li>
                <li>• LOINC</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Regional Requirements</h3>
              <ul className="text-charcoal space-y-2">
                <li>• UAE MOH Standards</li>
                <li>• KSA SFDA</li>
                <li>• EU MDR</li>
                <li>• Health Canada</li>
                <li>• TGA Australia</li>
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
              Healthcare Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">EHR & Clinical Systems</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Epic, Cerner, Allscripts</li>
                <li>• HL7 FHIR integration</li>
                <li>• Clinical decision support</li>
                <li>• CPOE and e-prescribing</li>
                <li>• Revenue cycle management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Research & Analytics</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Clinical data warehouses</li>
                <li>• OMOP Common Data Model</li>
                <li>• Machine learning platforms</li>
                <li>• Statistical analysis tools</li>
                <li>• Visualization platforms</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Infrastructure & Security</h3>
              <ul className="text-charcoal space-y-2">
                <li>• HIPAA-compliant cloud</li>
                <li>• Zero-trust security</li>
                <li>• Encrypted data storage</li>
                <li>• Secure communication</li>
                <li>• Audit and compliance tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Healthcare Impact Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">40%</h3>
              <p className="text-charcoal">Reduction in clinical documentation time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">25%</h3>
              <p className="text-charcoal">Improvement in patient satisfaction scores</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">99.9%</h3>
              <p className="text-charcoal">HIPAA compliance rate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">30%</h3>
              <p className="text-charcoal">Reduction in operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Healthcare with Technology?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Asterik to implement innovative healthcare technology solutions that improve patient outcomes and operational efficiency.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Transform Healthcare <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}