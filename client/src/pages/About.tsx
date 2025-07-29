

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ASTERIK
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Redefining enterprise technology capabilities through strategic talent solutions and regulatory-first transformations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Expertise Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl mb-6 text-navy-blue">
                Expertise That Drives Innovation
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                At the core of Asterik is a founding team of seasoned professionals with a proven track record in delivering complex, high-impact technology projects across government, finance, and enterprise sectors. With deep experience in regulated environments, agile transformation, and cloud-first architecture, the team brings both strategic insight and hands-on execution capability.
              </p>
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4 text-navy-blue">What we bring to the table:</h4>
                <ul className="space-y-3 text-charcoal">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mr-3 text-warm-orange mt-1"></i>
                    <span>10+ years leading digital transformation across GCC and global organizations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mr-3 text-warm-orange mt-1"></i>
                    <span>Expertise in enterprise platforms, cloud systems, and compliance-driven solutions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mr-3 text-warm-orange mt-1"></i>
                    <span>A delivery-first mindset focused on scale, speed, and sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mr-3 text-warm-orange mt-1"></i>
                    <span>Ground-level understanding of public and private sector challenges in emerging markets</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-soft-beige rounded-lg border-l-4 border-navy-blue">
                <p className="text-charcoal italic">
                  "We're not just building a company — we're building a way to deliver technology that works smarter, faster, and with greater purpose."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-brain text-2xl"></i>
                </div>
                <h4 className="font-bold text-navy-blue mb-2">Strategic Insight</h4>
                <p className="text-sm text-charcoal">Deep understanding of complex business environments</p>
              </div>
              <div className="text-center">
                <div className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-cogs text-2xl"></i>
                </div>
                <h4 className="font-bold text-navy-blue mb-2">Technical Excellence</h4>
                <p className="text-sm text-charcoal">Hands-on execution with enterprise-grade solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-navy-blue text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-compass text-2xl"></i>
                </div>
                <h4 className="font-bold text-navy-blue mb-2">Purposeful Direction</h4>
                <p className="text-sm text-charcoal">Technology that delivers meaningful business impact</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="bg-soft-beige py-16 rounded-2xl">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="font-bold text-3xl text-center mb-12 text-navy-blue">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div 
                    className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <i className="fas fa-handshake text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-3">Strategic Partnership</h3>
                  <p className="text-charcoal">Long-term collaborative relationships</p>
                </div>
                <div className="text-center">
                  <div 
                    className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <i className="fas fa-award text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-3">Technology Excellence</h3>
                  <p className="text-charcoal">Best-in-class technical expertise</p>
                </div>
                <div className="text-center">
                  <div 
                    className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <i className="fas fa-shield-alt text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-3">Compliance Focus</h3>
                  <p className="text-charcoal">Regulatory requirements first</p>
                </div>
                <div className="text-center">
                  <div 
                    className="bg-navy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <i className="fas fa-chart-bar text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-3">ROI-Driven</h3>
                  <p className="text-charcoal">Measurable business outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with Enterprise Technology Leaders
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Leverage our proven expertise and regulatory-first approach for your next technology transformation initiative.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-navy-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
