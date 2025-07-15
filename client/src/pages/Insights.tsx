export default function Insights() {
  return (
    <div className="pt-16">
      <section className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-8 text-navy-blue">
              Industry Insights
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Expert perspectives on enterprise technology trends and regulatory compliance
            </p>
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Modern digital workplace with technology" 
                  className="w-full h-64 md:h-full object-cover" 
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="text-sm font-semibold uppercase tracking-wide text-navy-blue">
                  Featured Article
                </span>
                <h2 className="font-bold text-2xl md:text-3xl mt-2 mb-4 text-navy-blue">
                  The Future of RegTech: Compliance-First Digital Transformation
                </h2>
                <p className="text-charcoal mb-6 leading-relaxed">
                  Exploring how regulatory technology is reshaping enterprise transformation strategies in the GCC region, with insights from recent implementations across financial services and government sectors.
                </p>
                <button className="font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200">
                  Read Full Article <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Article 1 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Technology consulting team in modern office" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <span className="text-sm font-semibold" style={{ color: "var(--asterik-orange)" }}>
                  Technology Trends
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Digital Transformation Trends 2024
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Key technology trends shaping enterprise digital strategies in regulated industries.
                </p>
                <button className="text-sm font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-red)" }}>
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Professional team building and collaboration" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <span className="text-sm font-semibold" style={{ color: "var(--asterik-orange)" }}>
                  Talent Management
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Building RegTech Teams
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Strategies for assembling high-performing regulatory technology teams.
                </p>
                <button className="text-sm font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-red)" }}>
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Business strategy and growth planning" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <span className="text-sm font-semibold" style={{ color: "var(--asterik-orange)" }}>
                  HR Strategy
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3" style={{ color: "var(--asterik-dark)" }}>
                  Talent Retention Strategies
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Best practices for retaining top IT talent in competitive markets.
                </p>
                <button className="text-sm font-semibold hover:text-gray-900 transition-colors duration-200" style={{ color: "var(--asterik-red)" }}>
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </article>
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <button 
              className="text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
              style={{ backgroundColor: "var(--asterik-red)" }}
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
