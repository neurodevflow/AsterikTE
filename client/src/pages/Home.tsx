export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(29, 29, 29, 0.7), rgba(29, 29, 29, 0.7)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80')"
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Strategic Technology Solutions for Enterprise Transformation
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Delivering elite IT talent, digital transformation expertise, and end-to-end implementation
          </p>
          <button 
            className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            style={{ backgroundColor: "var(--asterik-red)" }}
          >
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl mb-4" style={{ color: "var(--asterik-dark)" }}>
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for enterprise transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div 
              className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "var(--asterik-light)" }}
            >
              <div 
                className="text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "var(--asterik-red)" }}
              >
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Manpower Supply</h3>
              <p className="text-gray-600 text-center">
                Skilled IT professionals for regulated industries with compliance-first approach and enterprise-grade expertise.
              </p>
            </div>

            {/* Service Card 2 */}
            <div 
              className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "var(--asterik-light)" }}
            >
              <div 
                className="text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "var(--asterik-orange)" }}
              >
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">IT Consulting</h3>
              <p className="text-gray-600 text-center">
                Strategic technology advisory services for digital transformation initiatives in government and financial sectors.
              </p>
            </div>

            {/* Service Card 3 */}
            <div 
              className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "var(--asterik-light)" }}
            >
              <div 
                className="text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "var(--asterik-red)" }}
              >
                <i className="fas fa-search text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Talent Acquisition</h3>
              <p className="text-gray-600 text-center">
                Specialized recruitment for enterprise technology roles with focus on regulatory compliance requirements.
              </p>
            </div>

            {/* Service Card 4 */}
            <div 
              className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "var(--asterik-light)" }}
            >
              <div 
                className="text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "var(--asterik-orange)" }}
              >
                <i className="fas fa-cogs text-2xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Project Implementation</h3>
              <p className="text-gray-600 text-center">
                End-to-end technology project delivery with proven methodologies for enterprise-scale implementations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="py-16" style={{ backgroundColor: "var(--asterik-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-bold text-2xl text-white mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16">
            <span className="text-white text-lg font-semibold mb-4">Serving Government Entities</span>
            <span className="text-2xl" style={{ color: "var(--asterik-orange)" }}>|</span>
            <span className="text-white text-lg font-semibold mb-4">Financial Institutions</span>
            <span className="text-2xl" style={{ color: "var(--asterik-orange)" }}>|</span>
            <span className="text-white text-lg font-semibold mb-4">Enterprise Organizations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
