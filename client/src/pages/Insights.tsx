import { Link } from 'wouter';

export default function Insights() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Expert perspectives on enterprise technology trends, regulatory compliance, and digital transformation strategies
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&h=258" 
                  alt="Modern digital workplace with technology" 
                  className="w-full h-64 md:h-full object-cover" 
                  loading="lazy"
                  decoding="async"
                  width="412"
                  height="258"
                  sizes="(max-width: 768px) 412px, 800px"
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
                <button 
                  onClick={() => window.location.href = '/insights/regtech-compliance-transformation'}
                  className="font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200 cursor-pointer"
                >
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
                <span className="text-sm font-semibold text-warm-orange">
                  Technology Trends
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3 text-navy-blue">
                  Digital Transformation Trends 2024
                </h3>
                <p className="text-charcoal text-sm mb-4">
                  Key technology trends shaping enterprise digital strategies in regulated industries.
                </p>
                <button 
                  onClick={() => window.location.href = '/insights/digital-transformation-trends-2024'}
                  className="text-sm font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200 cursor-pointer"
                >
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
                <span className="text-sm font-semibold text-warm-orange">
                  Talent Management
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3 text-navy-blue">
                  Building RegTech Teams
                </h3>
                <p className="text-charcoal text-sm mb-4">
                  Strategies for assembling high-performing regulatory technology teams.
                </p>
                <button 
                  onClick={() => window.location.href = '/insights/building-regtech-teams'}
                  className="text-sm font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200 cursor-pointer"
                >
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
                <span className="text-sm font-semibold text-warm-orange">
                  HR Strategy
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3 text-navy-blue">
                  Talent Retention Strategies
                </h3>
                <p className="text-charcoal text-sm mb-4">
                  Best practices for retaining top IT talent in competitive markets.
                </p>
                <button 
                  onClick={() => window.location.href = '/insights/talent-retention-strategies'}
                  className="text-sm font-semibold text-navy-blue hover:text-warm-orange transition-colors duration-200 cursor-pointer"
                >
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </article>
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link 
              href="/insights" 
              className="inline-block bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated on Industry Trends
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Subscribe to our insights newsletter for the latest updates on enterprise technology, regulatory compliance, and digital transformation.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-navy-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
