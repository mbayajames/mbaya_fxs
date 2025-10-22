import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need prior experience to join?",
      answer: "No prior experience is necessary! Our Beginner course is designed for complete novices. We start from the basics and build your knowledge progressively."
    },
    {
      question: "Are the classes online or physical?",
      answer: "We offer both online and physical classes to accommodate your preferences. Online classes are conducted via Zoom with recorded sessions for your convenience."
    },
    {
      question: "How long does it take to become profitable?",
      answer: "While results vary, most students start seeing consistent profits within 3-6 months of completing our courses and practicing with demo accounts. Success depends on dedication, practice, and following our risk management strategies."
    },
    {
      question: "What's the minimum capital needed to start trading?",
      answer: "We recommend starting with at least $100-$500 for a real trading account. However, you'll practice with demo accounts (free) during the course before risking real money."
    },
    {
      question: "Do you provide ongoing support after the course?",
      answer: "Absolutely! All students get lifetime access to course materials. Advanced and VIP packages include extended mentorship support, and we maintain an active community for continued learning."
    },
    {
      question: "Is forex trading legal in Kenya?",
      answer: "Yes, forex trading is legal in Kenya. We educate you on trading with regulated brokers and ensure you understand all compliance requirements."
    },
    {
      question: "What if I can't attend all live sessions?",
      answer: "All live sessions are recorded and made available to you. You can watch them at your convenience and still get full value from the course."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, we'll refund your full investment."
    },
    {
      question: "Do you offer installment payment plans?",
      answer: "Yes, we offer flexible installment payment options for all our courses. Contact us to discuss a payment plan that works for you."
    },
    {
      question: "What makes MBAYA FOREX HUB different from other training schools?",
      answer: "We focus on practical, real-world trading strategies with hands-on experience. You get lifetime mentorship, demo account practice, live trading sessions, and access to our exclusive trading community."
    }
  ];

  return (
    <section id="faq" className="faq-main-section py-24 bg-white text-gray-900">
      <div className="faq-container container mx-auto px-6">
        <div className="faq-header text-center mb-20 animate-slide-up">
          <h2 className="faq-main-title text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Questions</span>
          </h2>
          <p className="faq-subtitle text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Got questions? We've got answers. Find everything you need to know below.
          </p>
        </div>

        <div className="faq-accordion-wrapper max-w-5xl mx-auto animate-scale-in">
          <Accordion type="single" collapsible className="faq-accordion space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-accordion-item bg-white border-2 border-blue-200 rounded-2xl px-8 py-2 hover:border-blue-500/60 hover:shadow-blue-300/30 transition-all duration-300 shadow-md hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="faq-question text-left hover:text-blue-600 transition-colors font-bold text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer text-gray-600 leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="faq-cta-wrapper mt-20 text-center animate-slide-up">
          <div className="faq-cta-banner bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-16 max-w-4xl mx-auto shadow-2xl">
            <h3 className="faq-cta-title text-4xl font-extrabold text-white mb-6">
              Still Have Questions?
            </h3>
            <p className="faq-cta-text text-2xl text-gray-100 mb-10 font-light">
              Our team is here to help! Contact us directly and we'll answer any questions you have.
            </p>
            <a
              href="#contact"
              className="faq-cta-btn inline-flex items-center bg-white text-blue-800 px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl text-lg hover:bg-blue-100"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;