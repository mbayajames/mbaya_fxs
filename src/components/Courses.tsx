import { Clock, BookOpen, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Beginner Trading Fundamentals",
      description: "Perfect for those new to forex. Learn market basics, chart reading, and essential trading concepts.",
      duration: "4 Weeks",
      price: "KSH 15,000",
      level: "Beginner",
      features: [
        "Introduction to Forex Markets",
        "Understanding Currency Pairs",
        "Basic Chart Analysis",
        "Risk Management Basics",
        "Demo Account Practice",
        "Lifetime Course Access"
      ]
    },
    {
      title: "Intermediate Strategy Mastery",
      description: "Build on your knowledge with advanced technical analysis and proven trading strategies.",
      duration: "6 Weeks",
      price: "KSH 25,000",
      level: "Intermediate",
      features: [
        "Advanced Technical Analysis",
        "Trading Strategies & Systems",
        "Market Psychology",
        "Trade Management",
        "Live Trading Sessions",
        "Weekly Mentorship Calls"
      ]
    },
    {
      title: "Advanced Professional Trading",
      description: "Master professional trading techniques used by institutional traders.",
      duration: "8 Weeks",
      price: "KSH 40,000",
      level: "Advanced",
      features: [
        "Professional Trading Strategies",
        "Advanced Risk Management",
        "Multiple Timeframe Analysis",
        "Market Structure & Order Flow",
        "Real Account Guidance",
        "3 Months Mentorship"
      ]
    },
    {
      title: "VIP Mentorship Program",
      description: "One-on-one personalized mentorship for serious traders seeking professional guidance.",
      duration: "12 Weeks",
      price: "KSH 75,000",
      level: "All Levels",
      features: [
        "Personal One-on-One Mentorship",
        "Customized Trading Plan",
        "Daily Market Analysis",
        "24/7 WhatsApp Support",
        "Live Trading Room Access",
        "Lifetime Mentorship Support"
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
    <section id="courses" className="courses-main-section py-24 bg-white text-gray-900">
      <div className="courses-container container mx-auto px-6">
        <div className="courses-header text-center mb-20 animate-slide-up">
          <h2 className="courses-main-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Our <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Trading Courses</span>
          </h2>
          <p className="courses-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            From beginner to professional - we have the perfect course for your trading journey
          </p>
        </div>

        <div className="courses-grid grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card bg-white border-2 border-blue-200 rounded-3xl p-10 hover:shadow-blue-300/30 transition-all duration-300 hover:border-blue-500/60 animate-scale-in group hover:scale-[1.02] delay-${index * 100}`}
            >
              {/* Header */}
              <div className="course-header mb-8">
                <div className="course-level-badge inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-bold mb-5 border border-blue-300/50 hover:bg-blue-200 transition-all duration-300">
                  {course.level}
                </div>
                <h3 className="course-title text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="course-description text-gray-600 text-lg">{course.description}</p>
              </div>

              {/* Course Details */}
              <div className="course-meta flex items-center gap-8 mb-8 text-base">
                <div className="course-duration flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="course-format flex items-center gap-3 text-gray-600">
                  <BookOpen className="w-5 h-5 text-blue-600 animate-pulse" />
                  <span className="font-medium">Online/Physical</span>
                </div>
              </div>

              {/* Features */}
              <div className="course-features-list mb-8 space-y-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="course-feature flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0 animate-pulse" />
                    <span className="text-gray-900 text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="course-footer pt-8 border-t-2 border-blue-200">
                <div className="course-pricing flex items-center justify-between mb-6">
                  <div>
                    <div className="course-price text-4xl font-black text-blue-600">{course.price}</div>
                    <div className="course-payment-info text-sm text-gray-600 mt-1">One-time payment</div>
                  </div>
                </div>
                <Button
                  onClick={scrollToContact}
                  className="course-enroll-btn w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="courses-consultation-cta mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center animate-slide-up shadow-2xl">
          <Users className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
          <h3 className="courses-cta-title text-4xl font-extrabold text-white mb-5">
            Not Sure Which Course Is Right For You?
          </h3>
          <p className="courses-cta-text text-gray-100 mb-8 max-w-3xl mx-auto text-xl font-light">
            Book a free consultation with our trading experts to discuss your goals and find the perfect program for your needs.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="courses-consultation-btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 transition-all duration-300 hover:scale-105 text-lg px-10 py-6 shadow-xl"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;