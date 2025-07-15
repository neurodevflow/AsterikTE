export default function Cloud() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Accelerate digital transformation with comprehensive cloud solutions. From migration to optimization, we help organizations leverage cloud technologies for scalability, security, and cost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              End-to-end cloud solutions that drive innovation, reduce costs, and enhance operational agility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Migration */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cloud-upload-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud Migration</h3>
              <p className="text-charcoal mb-6">
                Seamless migration of applications and infrastructure to the cloud with minimal downtime and optimized performance.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Migration strategy and planning</li>
                <li>• Application modernization</li>
                <li>• Data migration and synchronization</li>
                <li>• Post-migration optimization</li>
              </ul>
            </div>

            {/* Cloud Architecture */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-sitemap text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud Architecture</h3>
              <p className="text-charcoal mb-6">
                Design scalable, resilient, and cost-effective cloud architectures tailored to your specific business requirements.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Multi-cloud and hybrid strategies</li>
                <li>• Microservices architecture</li>
                <li>• Serverless computing</li>
                <li>• High availability and disaster recovery</li>
              </ul>
            </div>

            {/* Cloud Security */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud Security</h3>
              <p className="text-charcoal mb-6">
                Comprehensive security solutions that protect your cloud infrastructure, applications, and data from threats.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Identity and access management</li>
                <li>• Network security and encryption</li>
                <li>• Compliance and governance</li>
                <li>• Security monitoring and response</li>
              </ul>
            </div>

            {/* Cloud Optimization */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Cloud Optimization</h3>
              <p className="text-charcoal mb-6">
                Continuous optimization of cloud resources, costs, and performance to maximize ROI and operational efficiency.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Cost optimization and FinOps</li>
                <li>• Performance tuning</li>
                <li>• Resource right-sizing</li>
                <li>• Automated scaling</li>
              </ul>
            </div>

            {/* DevOps Integration */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-code-branch text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">DevOps Integration</h3>
              <p className="text-charcoal mb-6">
                Integrate cloud services with DevOps practices for automated deployment, monitoring, and continuous delivery.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• CI/CD pipeline automation</li>
                <li>• Infrastructure as Code</li>
                <li>• Container orchestration</li>
                <li>• Monitoring and observability</li>
              </ul>
            </div>

            {/* Cloud Support */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-headset text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Managed Support</h3>
              <p className="text-charcoal mb-6">
                24/7 managed support services that ensure your cloud infrastructure operates at peak performance.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• 24/7 monitoring and support</li>
                <li>• Proactive maintenance</li>
                <li>• Incident response and resolution</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Cloud Platforms We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-soft-beige rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-aws text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Amazon Web Services</h3>
              <ul className="text-charcoal space-y-2">
                <li>• EC2, ECS, EKS</li>
                <li>• RDS, DynamoDB</li>
                <li>• Lambda, API Gateway</li>
                <li>• S3, CloudFront</li>
                <li>• IAM, CloudTrail</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-microsoft text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Microsoft Azure</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Virtual Machines, AKS</li>
                <li>• SQL Database, Cosmos DB</li>
                <li>• Functions, Logic Apps</li>
                <li>• Blob Storage, CDN</li>
                <li>• Active Directory, Key Vault</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-google text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Google Cloud Platform</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Compute Engine, GKE</li>
                <li>• Cloud SQL, Firestore</li>
                <li>• Cloud Functions, App Engine</li>
                <li>• Cloud Storage, CDN</li>
                <li>• IAM, Cloud Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Benefits */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Cloud Transformation Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">30%</h3>
              <p className="text-charcoal">Reduction in infrastructure costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">5x</h3>
              <p className="text-charcoal">Faster application deployment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-expand-arrows-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">99.9%</h3>
              <p className="text-charcoal">Uptime with auto-scaling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">100%</h3>
              <p className="text-charcoal">Compliance with industry standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Accelerate your digital transformation with Asterik's comprehensive cloud services that drive innovation, reduce costs, and enhance agility.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Start Cloud Journey <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}