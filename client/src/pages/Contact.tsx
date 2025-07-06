import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Success message (in real implementation, this would submit to backend)
    toast({
      title: "Success",
      description: "Thank you for your message. We will get back to you soon!"
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-8" style={{ color: "var(--asterik-dark)" }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your enterprise technology capabilities? Let's discuss your strategic requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--asterik-light)" }}>
              <h2 className="font-bold text-2xl mb-6" style={{ color: "var(--asterik-dark)" }}>
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: "var(--asterik-dark)" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "var(--asterik-red)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "var(--asterik-dark)" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "var(--asterik-red)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: "var(--asterik-dark)" }}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "var(--asterik-red)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: "var(--asterik-dark)" }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": "var(--asterik-red)" } as React.CSSProperties}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                  style={{ backgroundColor: "var(--asterik-red)" }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-4xl mb-4" style={{ color: "var(--asterik-red)" }}></i>
                  <p className="text-gray-600 font-semibold">Dubai, UAE Office Location</p>
                  <p className="text-sm text-gray-500">Interactive map integration</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="text-white p-8 rounded-2xl" style={{ backgroundColor: "var(--asterik-dark)" }}>
                <h3 className="font-bold text-xl mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-4" style={{ color: "var(--asterik-orange)" }}></i>
                    <span>hello@asterik.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone mr-4" style={{ color: "var(--asterik-orange)" }}></i>
                    <span>+971 X XXX XXXX</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock mr-4" style={{ color: "var(--asterik-orange)" }}></i>
                    <span>Sunday-Thursday: 8AM-6PM GST</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-600">
                  <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="transition-colors duration-200"
                      style={{ color: "var(--asterik-orange)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--asterik-orange)")}
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="transition-colors duration-200"
                      style={{ color: "var(--asterik-orange)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--asterik-orange)")}
                    >
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
