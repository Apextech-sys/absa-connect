import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Package, SwitchCamera, Wifi, Shield, Clock, Zap,
  HeadphonesIcon, Router, Settings, CheckCircle2, HelpCircle, Quote, ArrowRight
} from 'lucide-react';
import { trackEvent, trackClick } from '../utils/analytics';
import HowToSwitchSEO from '../components/PageSEO/HowToSwitchSEO';
import CoverageModal from '../components/CoverageModal';
import InteractiveSwitchCalculator from '../components/InteractiveSwitchCalculator';

const HowToSwitch = () => {
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0);

  const handleFaqExpand = (index) => {
    trackEvent('faq_expanded', {
      faq_index: index,
      faq_question: faqs[index].question,
      page: 'how_to_switch'
    });
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleCoverageCheck = () => {
    trackClick('coverage_check_button', 'how_to_switch_page');
    setIsCoverageModalOpen(true);
  };

  const commitments = [
    {
      icon: HeadphonesIcon,
      title: "Expert Support Team",
      description: "Our dedicated support team is here to guide you through every step of your switching journey."
    },
    {
      icon: Router,
      title: "Premium Equipment",
      description: "Receive a high-quality WiFi router configured specifically for optimal performance on our network."
    },
    {
      icon: Settings,
      title: "Seamless Setup",
      description: "We handle the technical setup, ensuring your transition is as smooth as possible."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Sandton, Gauteng",
      quote: "Switching to ABSA Connect was the best decision. Their support team made the transition seamless, and the internet speed is incredible!",
      rating: 5
    },
    {
      name: "Thabo Molefe",
      location: "Soweto, Gauteng",
      quote: "I run my business from home and needed reliable internet. ABSA Connect delivered beyond my expectations. The installation was quick and professional.",
      rating: 5
    },
    {
      name: "Priya Naidoo",
      location: "Durban North, KZN",
      quote: "Working from home became so much easier with ABSA Connect. The connection is stable even during load shedding with their UPS backup.",
      rating: 5
    },
    {
      name: "Willem van der Merwe",
      location: "Stellenbosch, Western Cape",
      quote: "As a tech enthusiast, I appreciate the advanced router and consistent speeds. Perfect for gaming and streaming!",
      rating: 5
    },
    {
      name: "Nomvula Sithole",
      location: "Nelspruit, Mpumalanga",
      quote: "The customer service is outstanding. They're always available and actually solve problems quickly. Such a refreshing change!",
      rating: 5
    },
    {
      name: "Ahmed Patel",
      location: "Fordsburg, Gauteng",
      quote: "My whole family streams and games simultaneously now without any lag. The unlimited package is perfect for our needs.",
      rating: 5
    },
    {
      name: "Lauren McKenzie",
      location: "Sea Point, Western Cape",
      quote: "I was hesitant to switch providers, but ABSA Connect made it effortless. Their team handled everything professionally.",
      rating: 5
    },
    {
      name: "Busisiwe Ndlovu",
      location: "Polokwane, Limpopo",
      quote: "Finally, a provider that delivers what they promise! The speeds are consistent and the service is excellent.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Greenstone, Gauteng",
      quote: "As a small business owner, reliable internet is crucial. ABSA Connect's business package has been a game-changer for us.",
      rating: 5
    },
    {
      name: "Fatima Abrahams",
      location: "Mitchell's Plain, Western Cape",
      quote: "The value for money is incredible. Better service, faster speeds, and actually paying less than my previous provider!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does the switching process take?",
      answer: "The typical switching process takes about 14-30 days. This timeline allows for proper coordination with your current ISP's notice period and our technical setup. We'll work with you to schedule a go-live date that ensures a smooth transition."
    },
    {
      question: "What happens to my current internet connection?",
      answer: "You'll need to submit a cancellation request to your current ISP. Most ISPs require a 30-day notice period. We recommend coordinating the cancellation date with your ABSA Connect installation to avoid any gap in service."
    },
    {
      question: "Do I need to be home for the installation?",
      answer: "If you already have a fibre line installed, there's typically no need for a home visit. Your router will be delivered by CourierGuy, and our technical team will guide you through the setup process remotely if needed."
    },
    {
      question: "What equipment do I need?",
      answer: "We provide a pre-configured WiFi router suitable for your chosen package. If you prefer to use your own router, our support team can guide you through the configuration process."
    },
    {
      question: "How do I prepare for the switch?",
      answer: "1. Check your current ISP contract for notice periods\n2. Choose your preferred ABSA Connect package\n3. Schedule your go-live date\n4. Submit cancellation to your current ISP\n5. Be available on the go-live date for activation confirmation"
    },
    {
      question: "What support is available during and after the switch?",
      answer: "Our support team is available to assist you throughout the entire process. After switching, you'll have access to our technical support team for any connectivity-related queries or assistance."
    }
  ];

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentTestimonialSet((prev) => (prev + 1) % (Math.ceil(testimonials.length / 3)));
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(rotationInterval);
  }, []);

  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonialSet * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <>
      <HowToSwitchSEO />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative bg-black overflow-hidden min-h-[800px]">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-900/20 to-black">
            {/* Animated Particles */}
            {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-absa-500/50 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1280),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: 0
                }}
                animate={{
                  y: [null, -20, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-absa-600/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-absa-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-6 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <SwitchCamera className="w-5 h-5 text-absa-500 mr-2" />
                <span className="text-white font-medium">Simple 4-Step Process</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Switch to
                <div className="relative">
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-absa-500 to-absa-700">
                    Better Internet
                  </span>
                  <motion.div 
                    className="absolute -right-12 -top-12 w-24 h-24 bg-absa-500/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </h1>

              <p className="text-white/80 text-xl mb-12 max-w-xl">
                Experience a seamless transition to ABSA Connect. Our expert team handles everything,
                ensuring you stay connected throughout the switch.
              </p>
            </motion.div>

            {/* Interactive Calculator Section - Moved inside hero */}
            <div className="relative pb-48">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <InteractiveSwitchCalculator />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Our Commitments */}
        <div className="relative bg-gradient-to-b from-black to-absa-900/10">
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-30 text-white">Our Commitments to You</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {commitments.map((commitment, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                      <commitment.icon className="w-12 h-12 text-absa-500 mb-6" />
                      <h3 className="text-xl font-bold text-white mb-3">{commitment.title}</h3>
                      <p className="text-white/70">{commitment.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative bg-gradient-to-b from-absa-900/10 to-black">
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 text-white">What Our Customers Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {getCurrentTestimonials().map((testimonial, index) => (
                  <motion.div 
                    key={`${currentTestimonialSet}-${index}`}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-full bg-absa-500/20 flex items-center justify-center">
                          <Quote className="w-6 h-6 text-absa-500" />
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-absa-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-white/80 mb-6 italic">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{testimonial.name}</span>
                        <span className="text-white/60">{testimonial.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8 gap-2">
                {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialSet(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonialSet === index ? 'bg-absa-500 w-4' : 'bg-white/20'
                    }`}
                    aria-label={`View testimonial set ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative bg-gradient-to-b from-black to-absa-900/10">
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                        onClick={() => handleFaqExpand(index)}
                      >
                        <span className="font-medium text-lg text-white flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-absa-500" />
                          {faq.question}
                        </span>
                        <CheckCircle2 
                          className={`w-5 h-5 transition-transform ${
                            expandedFaq === index ? 'rotate-180 text-absa-500' : 'text-white/40'
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                          <p className="text-white/70 whitespace-pre-line">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Coverage Modal */}
        <CoverageModal isOpen={isCoverageModalOpen} onClose={() => setIsCoverageModalOpen(false)} />
      </div>
    </>
  );
};

export default HowToSwitch;