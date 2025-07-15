export default function DevOps() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DevOps Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Accelerate software delivery with robust DevOps practices. From CI/CD automation to infrastructure as code, we streamline development workflows and enhance operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive DevOps solutions that bridge development and operations for faster, more reliable software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CI/CD Pipeline */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-code-branch text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">CI/CD Pipeline</h3>
              <p className="text-charcoal mb-6">
                Automated continuous integration and deployment pipelines that enable rapid, reliable software releases with built-in quality gates.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Automated build and deployment</li>
                <li>• Multi-environment pipeline management</li>
                <li>• Quality gates and testing integration</li>
                <li>• Rollback and blue-green deployments</li>
              </ul>
            </div>

            {/* Infrastructure as Code */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-server text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Infrastructure as Code</h3>
              <p className="text-charcoal mb-6">
                Manage and provision infrastructure through code for consistent, scalable, and version-controlled infrastructure deployment.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Terraform and CloudFormation</li>
                <li>• Ansible and Chef automation</li>
                <li>• Container orchestration</li>
                <li>• Infrastructure versioning and rollback</li>
              </ul>
            </div>

            {/* Monitoring & Observability */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Monitoring & Observability</h3>
              <p className="text-charcoal mb-6">
                Comprehensive monitoring solutions that provide full visibility into application performance, infrastructure health, and user experience.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Application performance monitoring</li>
                <li>• Infrastructure health monitoring</li>
                <li>• Log aggregation and analysis</li>
                <li>• Real-time alerting and dashboards</li>
              </ul>
            </div>

            {/* Container Orchestration */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cubes text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Container Orchestration</h3>
              <p className="text-charcoal mb-6">
                Kubernetes and Docker-based containerization strategies that improve application portability, scalability, and resource utilization.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Kubernetes cluster management</li>
                <li>• Docker containerization</li>
                <li>• Service mesh implementation</li>
                <li>• Auto-scaling and load balancing</li>
              </ul>
            </div>

            {/* Configuration Management */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Configuration Management</h3>
              <p className="text-charcoal mb-6">
                Automated configuration management that ensures consistency across environments and simplifies system administration.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Environment configuration automation</li>
                <li>• Secret and credential management</li>
                <li>• Compliance and security policies</li>
                <li>• Configuration drift detection</li>
              </ul>
            </div>

            {/* Release Management */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Release Management</h3>
              <p className="text-charcoal mb-6">
                Streamlined release processes with automated deployment strategies, feature flags, and progressive delivery techniques.
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Automated release orchestration</li>
                <li>• Feature flag management</li>
                <li>• Canary and progressive deployments</li>
                <li>• Release rollback capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              DevOps Tools & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">CI/CD Tools</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Jenkins</li>
                <li>• GitLab CI/CD</li>
                <li>• Azure DevOps</li>
                <li>• GitHub Actions</li>
                <li>• CircleCI</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Infrastructure</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Terraform</li>
                <li>• CloudFormation</li>
                <li>• Ansible</li>
                <li>• Chef</li>
                <li>• Puppet</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Containers</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Kubernetes</li>
                <li>• Docker</li>
                <li>• OpenShift</li>
                <li>• Rancher</li>
                <li>• Istio</li>
              </ul>
            </div>

            <div className="bg-soft-beige rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-navy-blue mb-4">Monitoring</h3>
              <ul className="text-charcoal space-y-2">
                <li>• Prometheus</li>
                <li>• Grafana</li>
                <li>• ELK Stack</li>
                <li>• New Relic</li>
                <li>• Datadog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Benefits */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              DevOps Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">75%</h3>
              <p className="text-charcoal">Faster deployment frequency with automated pipelines</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bug text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">60%</h3>
              <p className="text-charcoal">Reduction in production incidents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-undo text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">50%</h3>
              <p className="text-charcoal">Faster recovery from failures</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-blue mb-2">80%</h3>
              <p className="text-charcoal">Improvement in team collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Software Delivery?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your development and operations with Asterik's comprehensive DevOps solutions that enable faster, more reliable software delivery.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-warm-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Start DevOps Transformation <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}