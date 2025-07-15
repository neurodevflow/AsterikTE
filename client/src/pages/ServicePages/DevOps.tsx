export default function DevOps() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-blue mb-4">DevOps Services</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Streamline your development and operations with our comprehensive DevOps solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Accelerated Development Lifecycle</h2>
            <p className="text-charcoal mb-6">
              Our DevOps services help organizations achieve faster, more reliable software delivery 
              through automation, continuous integration, and collaborative practices. We build 
              robust CI/CD pipelines that enhance productivity and reduce deployment risks.
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Continuous Integration & Deployment
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Infrastructure as Code (IaC)
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Monitoring & Observability
              </li>
              <li className="flex items-start">
                <span className="text-teal-green mr-2">•</span>
                Automated Testing & Quality Gates
              </li>
            </ul>
          </div>
          <div className="bg-soft-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy-blue mb-4">DevOps Tools</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• Jenkins, GitLab CI/CD, Azure DevOps</li>
              <li>• Docker, Kubernetes, Terraform</li>
              <li>• Prometheus, Grafana, ELK Stack</li>
              <li>• Ansible, Chef, Puppet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}