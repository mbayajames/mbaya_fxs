import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import './Contact.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll event to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp integration
    const whatsappMessage = `Hi! I'm ${formData.name}. Email: ${formData.email}. Phone: ${formData.phone || 'Not provided'}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/254712555914?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Success!",
      description: "Redirecting you to WhatsApp to complete your message",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-main-section py-24 bg-white text-gray-900 relative">
      <div className="contact-container container mx-auto px-6">
        <div className="contact-header text-center mb-20 animate-slide-up">
          <h2 className="contact-main-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Get In <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Touch</span>
          </h2>
          <p className="contact-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Ready to start your forex journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="contact-content-grid grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="contact-info-section space-y-10 animate-slide-left">
            <div className="contact-intro">
              <h3 className="contact-info-title text-3xl font-extrabold text-gray-900 mb-6">Contact Information</h3>
              <p className="contact-info-description text-gray-600 text-lg mb-10">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="contact-info-list space-y-8">
              <div className="contact-info-item flex items-start gap-5">
                <div className="contact-icon-wrapper w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-300/50 hover:bg-blue-200 transition-all duration-300">
                  <Phone className="w-7 h-7 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <div className="contact-info-label font-bold text-gray-900 mb-2 text-lg">Phone</div>
                  <a href="tel:+254700000000" className="contact-info-value text-gray-600 hover:text-blue-600 transition-colors text-base">
                    +254 712 555 914
                  </a>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-5">
                <div className="contact-icon-wrapper w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-300/50 hover:bg-blue-200 transition-all duration-300">
                  <Mail className="w-7 h-7 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <div className="contact-info-label font-bold text-gray-900 mb-2 text-lg">Email</div>
                  <a href="mailto:info@mbayaforexhub.com" className="contact-info-value text-gray-600 hover:text-blue-600 transition-colors text-base">
                    info@mbayaforexhub.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-5">
                <div className="contact-icon-wrapper w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-300/50 hover:bg-blue-200 transition-all duration-300">
                  <MessageSquare className="w-7 h-7 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <div className="contact-info-label font-bold text-gray-900 mb-2 text-lg">WhatsApp</div>
                  <a 
                    href="https://wa.me/254712555914" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-info-value text-gray-600 hover:text-blue-600 transition-colors text-base"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-5">
                <div className="contact-icon-wrapper w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-300/50 hover:bg-blue-200 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <div className="contact-info-label font-bold text-gray-900 mb-2 text-lg">Location</div>
                  <p className="contact-info-value text-gray-600 text-base">
                    Nairobi, Kenya<br />
                    Online & Physical Classes Available
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-business-hours bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mt-10 shadow-xl">
              <h4 className="contact-hours-title font-bold text-white mb-6 text-xl">Business Hours</h4>
              <div className="contact-hours-list space-y-3 text-gray-100">
                <div className="contact-hours-item flex justify-between text-base">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="contact-hours-item flex justify-between text-base">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="contact-hours-item flex justify-between text-base">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper bg-white border-2 border-blue-200 rounded-3xl p-10 animate-scale-in shadow-xl hover:shadow-blue-300/30 transition-all duration-300">
            <h3 className="contact-form-title text-3xl font-extrabold text-gray-900 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form space-y-8">
              <div className="contact-form-field">
                <label htmlFor="name" className="contact-form-label block text-base font-bold text-gray-900 mb-3">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="contact-input w-full text-base py-6 border-blue-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="email" className="contact-form-label block text-base font-bold text-gray-900 mb-3">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="contact-input w-full text-base py-6 border-blue-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="phone" className="contact-form-label block text-base font-bold text-gray-900 mb-3">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="contact-input w-full text-base py-6 border-blue-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="message" className="contact-form-label block text-base font-bold text-gray-900 mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trading goals and which course you're interested in..."
                  required
                  rows={5}
                  className="contact-textarea w-full resize-none text-base border-blue-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <Button type="submit" className="contact-submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-7 group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                <Send className="w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-110 animate-slide-up z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </section>
  );
};

export default Contact;