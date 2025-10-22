import { Award, Target, Users, TrendingUp } from "lucide-react";
import './About.css';
import founderImage from "../assets/founder2.jpeg";

const About = () => {
  return (
    <section id="about" className="about-main-section py-24 bg-white text-gray-900">
      <div className="about-container container mx-auto px-6">
        <div className="about-header text-center mb-20 animate-slide-up">
          <h2 className="about-main-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            About <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">MBAYA FOREX HUB</span>
          </h2>
          <p className="about-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Empowering traders with knowledge, strategy, and real-world experience since 2023
          </p>
        </div>

        <div className="about-content-grid grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Founder Section */}
          <div className="about-image-wrapper animate-scale-in">
            <img
              src={founderImage}
              alt="Professional Forex Trading Expert and Mentor at MBAYA FOREX HUB"
              className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[550px] object-cover object-top border-4 border-blue-500/30 hover:border-blue-500/70 transition-all duration-500 transform hover:scale-105"
            />
          </div>

          <div className="about-text-content space-y-8 animate-slide-right">
            <h3 className="about-section-title text-4xl font-extrabold text-gray-900">Meet Your Trading Mentor</h3>
            <p className="about-description text-xl text-gray-700 leading-relaxed">
              With over 2 years of professional forex trading experience and a proven track record in financial markets, our certified forex coach has trained thousands of successful traders across Kenya and beyond.
            </p>
            <p className="about-mission text-xl text-gray-700 leading-relaxed">
              Our mission is simple: to transform aspiring traders into confident, profitable professionals through practical, strategy-based education and lifetime mentorship support.
            </p>
            
            {/* Achievements */}
            <div className="about-achievements-grid grid grid-cols-2 gap-6 pt-6">
              <div className="about-achievement-card bg-white border-2 border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <Award className="w-10 h-10 text-blue-500 mb-3" />
                <div className="font-bold text-lg text-gray-900">Certified Forex Coach</div>
                <div className="text-sm text-gray-500 mt-1">FCA Recognized</div>
              </div>
              <div className="about-achievement-card bg-white border-2 border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-10 h-10 text-blue-500 mb-3" />
                <div className="font-bold text-lg text-gray-900">2,000+ Students</div>
                <div className="text-sm text-gray-500 mt-1">Trained Worldwide</div>
              </div>
              <div className="about-achievement-card bg-white border-2 border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <TrendingUp className="w-10 h-10 text-blue-500 mb-3" />
                <div className="font-bold text-lg text-gray-900">95% Success Rate</div>
                <div className="text-sm text-gray-500 mt-1">Student Achievement</div>
              </div>
              <div className="about-achievement-card bg-white border-2 border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <Target className="w-10 h-10 text-blue-500 mb-3" />
                <div className="font-bold text-lg text-gray-900">10+ Years</div>
                <div className="text-sm text-gray-500 mt-1">Trading Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="about-philosophy-banner bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-16 text-center animate-slide-up shadow-2xl">
          <h3 className="about-philosophy-title text-4xl font-extrabold text-white mb-8">
            Our Teaching Philosophy
          </h3>
          <p className="about-philosophy-text text-2xl text-gray-100 max-w-5xl mx-auto leading-relaxed font-light">
            We believe in practical, hands-on learning. Our courses combine theoretical knowledge with real trading experience, demo account practice, and personalized mentorship to ensure every student gains the confidence and skills needed to succeed in the forex market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;