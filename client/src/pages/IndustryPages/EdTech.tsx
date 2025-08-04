import { Link } from 'wouter';

export default function EdTech() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EdTech
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Interactive learning platforms and applications blending research and experience to improve learning outcomes and transform educational experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              EdTech Solutions
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Innovative educational technology solutions designed to enhance learning experiences and outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Interactive Learning</h3>
              <p className="text-charcoal mb-6">
                Engaging interactive learning platforms that make education more effective and enjoyable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Gamified Learning Experiences</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Virtual Classroom Platforms</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Interactive Content Creation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Educational Analytics</h3>
              <p className="text-charcoal mb-6">
                Data-driven insights to track progress and optimize learning outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Learning Analytics Dashboards</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Performance Tracking</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Predictive Learning Models</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Student Engagement</h3>
              <p className="text-charcoal mb-6">
                Tools and platforms designed to increase student participation and motivation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Social Learning Features</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Collaborative Tools</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Mobile Learning Apps</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-light-grey">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Learning Management</h3>
              <p className="text-charcoal mb-6">
                Comprehensive learning management systems for institutions and organizations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Course Management Systems</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Assessment Tools</span>
                </li>
                <li className="flex items-start text-charcoal">
                  <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                  <span>Content Library Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Success Story
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              How we helped an American national education nonprofit scale global learning.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-12 border border-light-grey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy-blue mb-6">
                  American National Education Nonprofit Scaling Global Learning
                </h3>
                <p className="text-charcoal mb-6">
                  A leading education nonprofit needed to scale their learning platform to reach global audiences with educational games and interactive content.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Custom learning platform development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Educational game integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-navy-blue rounded-full mr-4"></div>
                    <span className="text-charcoal">Global distribution platform</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center p-8 bg-soft-beige rounded-lg">
                  <div className="text-4xl font-bold text-navy-blue mb-2">800+</div>
                  <div className="text-charcoal">Games delivered to 250,000 families</div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-charcoal italic">
                    "The platform enabled us to reach families worldwide with quality educational content."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Why Choose Asterik for EdTech
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Education Focus</h3>
              <p className="text-charcoal">
                Deep understanding of educational needs and learning science.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-gamepad text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Engaging Experiences</h3>
              <p className="text-charcoal">
                Creating interactive and gamified learning experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Scalable Solutions</h3>
              <p className="text-charcoal">
                Platforms designed to scale globally and reach diverse audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Education?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our EdTech solutions can enhance learning outcomes and engage students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Contact Us Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium">
              View More Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}