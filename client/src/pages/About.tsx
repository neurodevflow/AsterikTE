export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Statement */}
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl md:text-5xl mb-8 text-navy-blue">
              About ASTERIK
            </h1>
            <p className="text-xl md:text-2xl text-charcoal max-w-4xl mx-auto leading-relaxed">
              To redefine enterprise technology capabilities through strategic talent solutions
            </p>
          </div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="font-bold text-3xl mb-6 text-navy-blue">
                Leadership Excellence
              </h2>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Asterik Founder - Professional business leader" 
                className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover shadow-lg mb-6" 
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-charcoal leading-relaxed">
                Former CX/DX lead at PwC Middle East with 15+ years experience driving transformations for ADGM, MetLife Gulf, and Fortune 500 enterprises. Our founder brings deep expertise in regulatory compliance, digital transformation, and enterprise technology implementation across the GCC region.
              </p>
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
    </div>
  );
}
