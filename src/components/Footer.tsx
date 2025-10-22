import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-slide-up">
            <img src={logo} alt="MBAYA FOREX HUB" className="h-16 w-auto mb-4 transform hover:scale-105 transition-transform duration-300" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering traders with professional forex education and lifetime mentorship support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up animate-slide-up-delay-01">
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="animate-slide-up animate-slide-up-delay-02">
            <h3 className="font-bold text-lg mb-4 text-white">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Beginner Trading Fundamentals</li>
              <li className="text-gray-400">Intermediate Strategy Mastery</li>
              <li className="text-gray-400">Advanced Professional Trading</li>
              <li className="text-gray-400">VIP Mentorship Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-up animate-slide-up-delay-03">
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400 animate-pulse" />
                <span className="text-gray-400">+254 712 555 914</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400 animate-pulse" />
                <span className="text-gray-400">info@mbayaforexhub.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400 animate-pulse" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/50 mt-12 pt-8 animate-slide-up animate-slide-up-delay-04">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} MBAYA FOREX HUB. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Risk Disclaimer</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Risk Warning: Forex trading carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;