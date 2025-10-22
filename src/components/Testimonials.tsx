import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Kariuki",
      role: "Full-Time Trader",
      content: "MBAYA FOREX HUB transformed my understanding of forex trading. Within 3 months, I was making consistent profits. The mentorship is invaluable!",
      rating: 5,
      profit: "+280% ROI"
    },
    {
      name: "Sarah Wanjiku",
      role: "Part-Time Trader",
      content: "As a beginner, I was intimidated by forex. The instructors made everything so clear and practical. I'm now trading confidently alongside my job.",
      rating: 5,
      profit: "Consistent Monthly Income"
    },
    {
      name: "David Omondi",
      role: "Investment Banker",
      content: "Even with my finance background, I learned strategies I never knew existed. The advanced course was worth every shilling. Highly recommend!",
      rating: 5,
      profit: "+KSH 500K in 6 months"
    },
    {
      name: "Grace Akinyi",
      role: "Business Owner",
      content: "The VIP mentorship program gave me the one-on-one attention I needed. My mentor helped me develop a personalized strategy that fits my schedule perfectly.",
      rating: 5,
      profit: "Financial Freedom"
    },
    {
      name: "Michael Kimani",
      role: "Professional Trader",
      content: "Best forex training in Kenya! The practical approach and real trading experience made all the difference. I now trade forex full-time.",
      rating: 5,
      profit: "+150% Monthly Returns"
    },
    {
      name: "Ruth Njeri",
      role: "Corporate Professional",
      content: "I was skeptical at first, but the results speak for themselves. The risk management techniques alone have saved me thousands. Thank you MBAYA FOREX HUB!",
      rating: 5,
      profit: "Profitable Trader"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-main-section py-24 bg-white text-gray-900">
      <div className="testimonials-container container mx-auto px-6">
        <div className="testimonials-header text-center mb-20 animate-slide-up">
          <h2 className="testimonials-main-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Success <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Stories</span>
          </h2>
          <p className="testimonials-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Join thousands of successful traders who transformed their lives with MBAYA FOREX HUB
          </p>
        </div>

        <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card bg-white border-2 border-blue-200 rounded-3xl p-10 hover:shadow-blue-300/30 transition-all duration-300 hover:border-blue-500/60 animate-scale-in relative group hover:scale-105 delay-${index * 100}`}
            >
              {/* Quote Icon */}
              <Quote className="testimonial-quote-icon absolute top-8 right-8 w-16 h-16 text-blue-100 group-hover:text-blue-200 transition-colors" />
              
              {/* Rating */}
              <div className="testimonial-rating flex gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" />
                ))}
              </div>

              {/* Content */}
              <p className="testimonial-content text-gray-900 mb-8 leading-relaxed relative z-10 text-lg">
                "{testimonial.content}"
              </p>

              {/* Profit Badge */}
              <div className="testimonial-profit-badge inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-300/50 hover:bg-blue-200 transition-all duration-300">
                {testimonial.profit}
              </div>

              {/* Author */}
              <div className="testimonial-author pt-6 border-t-2 border-blue-200">
                <div className="testimonial-author-name font-bold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="testimonial-author-role text-base text-gray-600 mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats-grid mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up delay-400">
          <div className="testimonials-stat-card bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-black text-white mb-3">2,000+</div>
            <div className="text-gray-100 text-base font-medium">Students Trained</div>
          </div>
          <div className="testimonials-stat-card bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-black text-white mb-3">95%</div>
            <div className="text-gray-100 text-base font-medium">Success Rate</div>
          </div>
          <div className="testimonials-stat-card bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-black text-white mb-3">4.9/5</div>
            <div className="text-gray-100 text-base font-medium">Average Rating</div>
          </div>
          <div className="testimonials-stat-card bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="text-5xl font-black text-white mb-3">2+</div>
            <div className="text-gray-100 text-base font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;