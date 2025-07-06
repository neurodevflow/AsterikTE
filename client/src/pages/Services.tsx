export default function Services() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-8" style={{ color: "var(--asterik-dark)" }}>
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for enterprise transformation in regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Manpower Supply Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div 
                  className="text-white w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--asterik-red)" }}
                >
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h2 className="font-bold text-2xl" style={{ color: "var(--asterik-dark)" }}>
                  Manpower Supply
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bridging the IT talent gap in regulated industries with compliance-ready professionals who understand the complexities of government and financial sector requirements.
              </p>
              <button className="font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-red)" }}>
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* IT Consulting Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div 
                  className="text-white w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--asterik-orange)" }}
                >
                  <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h2 className="font-bold text-2xl" style={{ color: "var(--asterik-dark)" }}>
                  IT Consulting
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic technology advisory services focusing on digital transformation initiatives that align with regulatory frameworks and enterprise governance requirements.
              </p>
              <button className="font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-orange)" }}>
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* Talent Acquisition Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div 
                  className="text-white w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--asterik-red)" }}
                >
                  <i className="fas fa-search text-2xl"></i>
                </div>
                <h2 className="font-bold text-2xl" style={{ color: "var(--asterik-dark)" }}>
                  Talent Acquisition
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Specialized recruitment services for enterprise technology roles with emphasis on finding candidates who excel in regulated environments and complex organizational structures.
              </p>
              <button className="font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-red)" }}>
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* Project Implementation Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div 
                  className="text-white w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--asterik-orange)" }}
                >
                  <i className="fas fa-cogs text-2xl"></i>
                </div>
                <h2 className="font-bold text-2xl" style={{ color: "var(--asterik-dark)" }}>
                  Project Implementation
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end technology project delivery using proven methodologies designed for enterprise-scale implementations in mission-critical environments.
              </p>
              <button className="font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-orange)" }}>
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          {/* Sample Service Detail */}
          <div className="text-white rounded-2xl p-8 md:p-12" style={{ backgroundColor: "var(--asterik-dark)" }}>
            <h3 className="font-bold text-2xl mb-6">Service Deep Dive: Manpower Supply</h3>
            
            {/* Challenge Statement */}
            <div className="mb-8">
              <h4 className="font-bold text-xl mb-4" style={{ color: "var(--asterik-orange)" }}>
                The Challenge
              </h4>
              <p className="text-lg leading-relaxed">Bridging the IT Talent Gap in Regulated Industries</p>
            </div>

            {/* Solution Approach */}
            <div className="mb-8">
              <h4 className="font-bold text-xl mb-4" style={{ color: "var(--asterik-orange)" }}>
                Our Solution
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle mr-3 mt-1" style={{ color: "var(--asterik-orange)" }}></i>
                  <span>Rigorous compliance vetting process for all candidates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle mr-3 mt-1" style={{ color: "var(--asterik-orange)" }}></i>
                  <span>Industry-specific technical assessments and certifications</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle mr-3 mt-1" style={{ color: "var(--asterik-orange)" }}></i>
                  <span>Ongoing professional development and regulatory training</span>
                </li>
              </ul>
            </div>

            {/* Use Case */}
            <div>
              <h4 className="font-bold text-xl mb-4" style={{ color: "var(--asterik-orange)" }}>
                Case Study
              </h4>
              <p className="text-lg leading-relaxed">
                How we helped a GCC Financial Institution overcome critical cybersecurity staffing challenges while maintaining regulatory compliance and reducing time-to-hire by 60%.
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="diagonal-divider h-24 mt-20" style={{ backgroundColor: "var(--asterik-red)" }}></div>
      </section>
    </div>
  );
}
