import { useState, useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, Award, ArrowDown, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-bg.jpg";
import './Hero.css';

const Hero = () => {
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string }[]>([]);
  const [chatInput, setChatInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to show/hide scroll-to-bottom button
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      // Show button if not at the bottom (within 100px of bottom)
      if (scrollPosition + windowHeight < documentHeight - 100) {
        setShowScrollToBottom(true);
      } else {
        setShowScrollToBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the latest message when chatMessages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newUserMessage = { sender: "user", text: chatInput };
    setChatMessages((prev) => [...prev, newUserMessage]);

    // Simulate AI response
    const aiResponse = getAIResponse(chatInput);
    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    }, 500);

    // Clear input
    setChatInput("");
  };

  // Simulated AI response logic (placeholder)
  const getAIResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("forex") || lowerInput.includes("trading")) {
      return "Great to hear you're interested in forex trading! At MBAYA FOREX HUB, we offer courses on profitable strategies and risk management. Would you like to know more about our beginner or advanced courses?";
    } else if (lowerInput.includes("course") || lowerInput.includes("class")) {
      return "Our courses cover everything from basics to advanced trading techniques. We offer both online and in-person classes in Nairobi, Kenya. Want details on pricing or schedules?";
    } else if (lowerInput.includes("consultation")) {
      return "You can book a free consultation with our experts! Just click the 'Book Free Consultation' button above or ask me for more details.";
    } else {
      return "Thank you for your message! How can I assist you with your forex trading journey? Ask about our courses, strategies, or book a free consultation!";
    }
  };

  return (
    <section id="home" className="hero-main-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Image with Overlay */}
      <div className="hero-bg-wrapper absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Forex Trading Excellence at MBAYA FOREX HUB"
          className="w-full h-full object-cover brightness-50 transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/70 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="hero-content-container container mx-auto px-6 relative z-10">
        <div className="hero-content-wrapper max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="hero-trust-badge inline-flex items-center gap-3 bg-blue-800/50 backdrop-blur-lg border-2 border-blue-400 rounded-full px-8 py-4 mb-12 animate-slide-down shadow-xl hover:shadow-blue-500/50 transition-all duration-300">
            <Award className="w-8 h-8 text-blue-300 animate-pulse" />
            <span className="text-white text-lg font-semibold tracking-wide">Certified • 2+ Years Trading Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-main-heading text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight animate-slide-up tracking-tight">
            Master Forex Trading
            <span className="hero-highlight-text block text-blue-400 mt-3 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg">From The Experts</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in">
            Join thousands of successful traders who learned profitable strategies, risk management, and professional trading techniques at <span className="font-semibold text-blue-400">MBAYA FOREX HUB</span>
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <Button
              size="lg"
              onClick={() => scrollToSection("courses")}
              className="hero-primary-btn bg-blue-600 hover:bg-blue-700 text-xl px-10 py-7 group shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-white font-semibold"
            >
              View Our Courses
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="hero-secondary-btn text-xl px-10 py-7 bg-transparent border-2 border-blue-400 text-white hover:bg-blue-400/20 hover:text-white transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up-delayed">
            <div className="hero-stat-card bg-gray-800/40 backdrop-blur-lg border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-10 h-10 text-blue-400 animate-float" />
              </div>
              <div className="text-4xl font-black text-white mb-2">2,000+</div>
              <div className="text-gray-300 text-lg font-medium">Students Trained</div>
            </div>
            <div className="hero-stat-card bg-gray-800/40 backdrop-blur-lg border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-10 h-10 text-blue-400 animate-float" />
              </div>
              <div className="text-4xl font-black text-white mb-2">2+</div>
              <div className="text-gray-300 text-lg font-medium">Years Experience</div>
            </div>
            <div className="hero-stat-card bg-gray-800/40 backdrop-blur-lg border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-10 h-10 text-blue-400 animate-float" />
              </div>
              <div className="text-4xl font-black text-white mb-2">95%</div>
              <div className="text-gray-300 text-lg font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-blue-400/50 rounded-full flex justify-center shadow-lg">
          <div className="w-1.5 h-4 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Scroll to Bottom Button */}
      {showScrollToBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-110 animate-slide-up z-50"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      )}

      {/* Chatbox */}
      <div className="fixed bottom-24 right-8 z-50">
        {/* Chat Toggle Button */}
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-110 animate-slide-up"
          aria-label="Toggle chat"
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div className="chat-window bg-gray-800/90 backdrop-blur-lg border-2 border-blue-400/50 rounded-2xl w-80 h-96 flex flex-col shadow-xl hover:shadow-blue-500/30 transition-all duration-300 animate-scale-in mt-4">
            <div className="chat-header bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
            <div className="chat-messages flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-gray-400 text-center text-sm">
                  Start a conversation about forex trading!
                </div>
              )}
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleChatSubmit} className="chat-input-form p-4 border-t border-blue-400/50">
              <div className="flex gap-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about forex trading..."
                  className="bg-gray-900 text-white border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Chat input"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;