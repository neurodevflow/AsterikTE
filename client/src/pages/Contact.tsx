import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
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
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'contact_form',
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Thank you for your message. We will get back to you within 24 hours!"
        });
        
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Ready to transform your enterprise technology capabilities? Let's discuss your strategic requirements and compliance needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-soft-beige p-8 rounded-2xl">
              <h2 className="font-bold text-2xl mb-6 text-navy-blue">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-navy-blue">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-navy-blue">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-navy-blue">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-navy-blue">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-soft-beige h-64 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-4xl mb-4 text-navy-blue"></i>
                  <p className="text-charcoal font-semibold">Dubai, UAE Office Location</p>
                  <p className="text-sm text-light-grey">Interactive map integration</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-navy-blue text-white p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-4 text-warm-orange"></i>
                    <span>hello@asterik.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone mr-4 text-warm-orange"></i>
                    <span>+971 X XXX XXXX</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock mr-4 text-warm-orange"></i>
                    <span>Sunday-Thursday: 8AM-6PM GST</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-light-grey">
                  <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-warm-orange hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-warm-orange hover:text-white transition-colors duration-200"
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

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Our enterprise technology specialists are ready to discuss your transformation requirements and compliance needs.
          </p>
          <button className="bg-white text-navy-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
