import { TrendingUp, Users, Shield, BookOpen, Headphones, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real Trading Experience Included",
      description: "Practice with demo accounts and learn from live trading sessions. Get hands-on experience before risking real money."
    },
    {
      icon: Users,
      title: "Lifetime Mentorship Support",
      description: "Our commitment doesn't end with the course. Get ongoing support and guidance throughout your trading journey."
    },
    {
      icon: BookOpen,
      title: "Practical, Strategy-Based Learning",
      description: "No fluff, just proven strategies that work. Learn the exact techniques used by professional traders."
    },
    {
      icon: Shield,
      title: "Risk Management Focus",
      description: "Learn how to protect your capital with advanced risk management techniques used by institutional traders."
    },
    {
      icon: Headphones,
      title: "24/7 Student Support",
      description: "Have questions? Our team is available via WhatsApp and email to provide quick answers when you need them."
    },
    {
      icon: Award,
      title: "Certified & FCA Recognized",
      description: "Learn from certified forex professionals with over 10 years of proven trading experience and FCA recognition."
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section py-24 bg-white text-gray-900">
      <div className="why-choose-container container mx-auto px-6">
        <div className="why-choose-header text-center mb-20 animate-slide-up">
          <h2 className="why-choose-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Why Choose <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">MBAYA FOREX HUB?</span>
          </h2>
          <p className="why-choose-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            We're not just another forex training school - we're your partners in success
          </p>
        </div>

        <div className="why-choose-features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`why-choose-feature-card bg-white border-2 border-blue-200 rounded-3xl p-10 hover:shadow-blue-300/30 transition-all duration-300 hover:border-blue-500/60 animate-scale-in group hover:scale-105 animate-delay-${index * 100}`}
              >
                <div className="why-choose-icon-wrapper w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-200 transition-all duration-300 shadow-lg">
                  <Icon className="w-10 h-10 text-blue-600 animate-pulse" />
                </div>
                <h3 className="why-choose-feature-title text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="why-choose-feature-description text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="why-choose-cta-banner mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-16 text-center animate-slide-up animate-delay-400 shadow-2xl">
          <h3 className="why-choose-cta-title text-4xl font-extrabold text-white mb-6">
            Ready to Start Your Trading Journey?
          </h3>
          <p className="why-choose-cta-text text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light">
            Join the thousands of successful traders who chose MBAYA FOREX HUB and transformed their financial future
          </p>
          <div className="why-choose-cta-buttons flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#courses"
              className="why-choose-cta-primary inline-flex items-center bg-white text-blue-800 px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl text-lg hover:bg-blue-100"
            >
              View Our Courses
            </a>
            <a
              href="#contact"
              className="why-choose-cta-secondary inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-xl text-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;