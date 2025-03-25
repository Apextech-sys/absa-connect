import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, ArrowLeft, ArrowRight, Quote, 
  Wifi, Monitor, Download, Users 
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Sandton, Johannesburg",
    role: "Remote Professional",
    image: "/api/placeholder/64/64",
    quote: "Switching to Wondernet was the best decision. The speeds are consistently fast, and their support team is incredibly responsive.",
    rating: 5,
    package: "500Mbps",
    tags: ["Remote Work", "Streaming", "Gaming"],
    metrics: {
      speed: "492Mbps avg",
      uptime: "99.9%",
      support: "<2min"
    }
  },
  {
    id: 2,
    name: "Michael van der Merwe",
    location: "Durbanville, Cape Town",
    role: "Tech Enthusiast",
    image: "/api/placeholder/64/64",
    quote: "The WonderWatch monitoring is a game-changer. Issues are often fixed before I even notice them.",
    rating: 5,
    package: "1Gbps",
    tags: ["Gaming", "Smart Home", "4K Streaming"],
    metrics: {
      speed: "945Mbps avg",
      uptime: "99.95%",
      support: "<1min"
    }
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "Umhlanga, Durban",
    role: "Family of Five",
    image: "/api/placeholder/64/64",
    quote: "With three kids streaming and gaming, Wondernet handles everything smoothly - no more fighting over bandwidth!",
    rating: 5,
    package: "200Mbps",
    tags: ["Family", "Multiple Devices", "Streaming"],
    metrics: {
      speed: "195Mbps avg",
      uptime: "99.8%",
      support: "<3min"
    }
  }
];

const TestimonialCard = ({ testimonial, isActive }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
      isActive ? 'ring-2 ring-wondernet-600' : ''
    }`}
  >
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.location}</p>
            <p className="text-sm text-wondernet-600">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
          ))}
        </div>
      </div>

      {/* Package Info */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="px-3 py-1 bg-wondernet-50 text-wondernet-600 rounded-full text-sm font-medium">
          {testimonial.package} Package
        </div>
        {testimonial.tags.map((tag, index) => (
          <div key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {tag}
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-8">
        <Quote className="absolute -left-2 -top-2 w-8 h-8 text-wondernet-200" />
        <p className="text-gray-600 text-lg pl-6">{testimonial.quote}</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center mb-2">
            <Download className="w-4 h-4 text-wondernet-600 mr-2" />
            <span className="text-sm text-gray-600">Avg Speed</span>
          </div>
          <div className="font-bold text-wondernet-600">{testimonial.metrics.speed}</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center mb-2">
            <Wifi className="w-4 h-4 text-wondernet-600 mr-2" />
            <span className="text-sm text-gray-600">Uptime</span>
          </div>
          <div className="font-bold text-wondernet-600">{testimonial.metrics.uptime}</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center mb-2">
            <Monitor className="w-4 h-4 text-wondernet-600 mr-2" />
            <span className="text-sm text-gray-600">Support</span>
          </div>
          <div className="font-bold text-wondernet-600">{testimonial.metrics.support}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wondernet-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wonderblue-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Join thousands of satisfied customers experiencing the Wonder difference
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-3xl"
                  >
                    <TestimonialCard testimonial={testimonial} isActive={true} />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-wondernet-600 hover:text-wondernet-500 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-wondernet-600 hover:text-wondernet-500 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-wondernet-600' 
                  : 'bg-gray-300 hover:bg-wondernet-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;