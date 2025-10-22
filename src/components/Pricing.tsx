import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import './Pricing.css';

const Pricing = () => {
  const packages = [
    {
      name: "Beginner",
      price: "15,000",
      popular: true,
      description: "Perfect for those starting their forex journey",
      features: [
        "4 Weeks Duration",
        "Introduction to Forex Markets",
        "Basic Chart Analysis",
        "Risk Management Basics",
        "Demo Account Practice",
        "Lifetime Course Access",
        "Email Support",
        "Certificate of Completion"
      ]
    },
    {
      name: "Intermediate",
      price: "25,000",
      popular: false,
      description: "For traders ready to level up their skills",
      features: [
        "6 Weeks Duration",
        "Advanced Technical Analysis",
        "Trading Strategies & Systems",
        "Market Psychology",
        "Live Trading Sessions",
        "Weekly Mentorship Calls",
        "WhatsApp Support",
        "Trading Resources & Tools",
        "Certificate of Completion"
      ]
    },
    {
      name: "Advanced",
      price: "40,000",
      popular: false,
      description: "Master professional trading techniques",
      features: [
        "8 Weeks Duration",
        "Professional Trading Strategies",
        "Advanced Risk Management",
        "Multiple Timeframe Analysis",
        "Market Structure & Order Flow",
        "Real Account Guidance",
        "3 Months Mentorship",
        "24/7 Support",
        "Premium Trading Tools",
        "Certificate of Completion"
      ]
    },
    {
      name: "VIP Mentorship",
      price: "75,000",
      popular: false,
      description: "Ultimate one-on-one personalized guidance",
      features: [
        "12 Weeks Duration",
        "Personal One-on-One Mentorship",
        "Customized Trading Plan",
        "Daily Market Analysis",
        "24/7 WhatsApp Support",
        "Live Trading Room Access",
        "Lifetime Mentorship Support",
        "All Course Materials",
        "Priority Support",
        "Exclusive Community Access",
        "Certificate of Completion"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="pricing-main-section py-24 bg-white text-gray-900">
      <div className="pricing-container container mx-auto px-6">
        <div className="pricing-header text-center mb-20 animate-slide-up">
          <h2 className="pricing-main-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Investment <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Packages</span>
          </h2>
          <p className="pricing-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Transparent pricing with flexible payment options - invest in your trading education today
          </p>
        </div>

        <div className="pricing-packages-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`pricing-package-card bg-white border-2 border-blue-200 rounded-3xl p-10 hover:shadow-blue-300/30 hover:border-blue-500/60 transition-all duration-300 animate-scale-in relative delay-${index * 100}`}
            >
              {/* {pkg.popular && (
                <div className="pricing-popular-badge absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    Most Popular
                  </span>
                </div>
              )} */}

              <div className="pricing-package-header mb-8">
                <h3 className="pricing-package-name text-3xl font-extrabold text-gray-900 mb-3">{pkg.name}</h3>
                <p className="pricing-package-description text-base text-gray-600 mb-6">{pkg.description}</p>
                <div className="pricing-package-price-wrapper flex items-baseline gap-2">
                  <span className="pricing-package-price text-5xl font-black text-blue-600">KSH {pkg.price}</span>
                </div>
                <p className="pricing-package-payment-note text-sm text-gray-600 mt-3">One-time payment</p>
              </div>

              <ul className="pricing-package-features space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="pricing-package-feature flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5 animate-pulse" />
                    <span className="text-gray-900 text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className="pricing-package-cta-btn w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="pricing-payment-options mt-20 max-w-5xl mx-auto animate-slide-up delay-400">
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-blue-200 shadow-md">
            <h3 className="pricing-payment-title text-3xl font-extrabold text-gray-900 mb-6">Flexible Payment Options</h3>
            <p className="pricing-payment-description text-gray-600 mb-10 text-lg">
              We understand that investing in education is a big decision. That's why we offer flexible payment plans to make our courses accessible to everyone.
            </p>
            <div className="pricing-payment-methods grid md:grid-cols-3 gap-8">
              <div className="pricing-payment-method bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-blue-300/30 transition-all duration-300 transform hover:scale-105">
                <div className="pricing-payment-method-name font-bold text-gray-900 text-xl mb-3">M-Pesa</div>
                <p className="pricing-payment-method-description text-base text-gray-600">Quick and secure mobile payments</p>
              </div>
              <div className="pricing-payment-method bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-blue-300/30 transition-all duration-300 transform hover:scale-105">
                <div className="pricing-payment-method-name font-bold text-gray-900 text-xl mb-3">Bank Transfer</div>
                <p className="pricing-payment-method-description text-base text-gray-600">Direct bank deposits accepted</p>
              </div>
              <div className="pricing-payment-method bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-blue-300/30 transition-all duration-300 transform hover:scale-105">
                <div className="pricing-payment-method-name font-bold text-gray-900 text-xl mb-3">Installments</div>
                <p className="pricing-payment-method-description text-base text-gray-600">Pay in flexible installments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="pricing-guarantee-banner mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center max-w-5xl mx-auto animate-slide-up shadow-2xl delay-600">
          <h3 className="pricing-guarantee-title text-4xl font-extrabold text-white mb-6">
            30-Day Money-Back Guarantee
          </h3>
          <p className="pricing-guarantee-text text-gray-100 max-w-3xl mx-auto text-xl font-light">
            We're confident in the quality of our training. If you're not satisfied within the first 30 days, we'll refund your investment - no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;