import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-blue-900/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-down">
            <img src={logo} alt="MBAYA FOREX HUB" className="h-12 w-auto transform hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-down-delayed">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} className="animate-pulse" /> : <Menu size={24} className="animate-pulse" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-lg text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;