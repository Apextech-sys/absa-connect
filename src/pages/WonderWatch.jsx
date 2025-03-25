import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Wifi,
  Bell,
  Zap,
  Activity,
  HeadphonesIcon,
  CheckCircle2,
  ArrowRight,
  Brain,
  Code,
  Settings,
  Users,
  Clock,
  Star
} from 'lucide-react';
import { trackEvent, trackClick } from '../utils/analytics';
import WonderWatchSEO from '../components/PageSEO/WonderWatchSEO';
import SEO from '../components/SEO';
import CoverageModal from '../components/CoverageModal';

// New comparison table component
const ComparisonTable = () => {
  const features = [
    { name: 'Proactive Monitoring', wonderwatch: '24/7 real-time, automated detection', traditional: 'Manual or customer-reported' },
    { name: 'Issue Detection', wonderwatch: 'Immediate, AI-powered', traditional: 'Delayed, often reactive' },
    { name: 'Customer Notifications', wonderwatch: 'Instant alerts', traditional: 'Customers must report problems' },
    { name: 'Support Response', wonderwatch: 'Already in action when notified', traditional: 'Starts only after a complaint is filed' },
    { name: 'Unique Features', wonderwatch: 'Built-in automation, engineering-backed', traditional: 'Standardized reactive processes' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left text-white bg-black/40 border-b border-white/10">Feature</th>
            <th className="p-4 text-left text-purple-400 bg-black/40 border-b border-white/10">WonderWatch</th>
            <th className="p-4 text-left text-white/70 bg-black/40 border-b border-white/10">Traditional ISPs</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b border-white/10">
              <td className="p-4 text-white">{feature.name}</td>
              <td className="p-4 text-purple-400">{feature.wonderwatch}</td>
              <td className="p-4 text-white/70">{feature.traditional}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// New engineering insights component
const EngineeringInsights = () => {
  const handleInsightView = (insight) => {
    trackEvent('engineering_insight_viewed', {
      insight_title: insight.title,
      page: 'wonderwatch'
    });
  };

  const insights = [
    {
      title: "Custom Engineering",
      description: "Designed from the ground up for unmatched reliability",
      icon: Code,
    },
    {
      title: "Built for Scale",
      description: "Handles thousands of connections with ease",
      icon: Settings,
    },
    {
      title: "AI & Machine Learning",
      description: "Enables precise issue detection and categorization",
      icon: Brain,
    },
    {
      title: "Collaborative Development",
      description: "Created with input from network specialists and client feedback",
      icon: Users,
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {insights.map((insight) => (
        <div key={insight.title} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
          <div
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            onMouseEnter={() => handleInsightView(insight)}
          >
            <insight.icon className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
            <p className="text-white/70">{insight.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// New testimonials component
const Testimonials = () => {
  const handleTestimonialView = (testimonial) => {
    trackEvent('testimonial_viewed', {
      author: testimonial.author,
      role: testimonial.role,
      page: 'wonderwatch'
    });
  };

  const testimonials = [
    {
      quote: "WonderWatch detected a problem with my connection before I even knew there was one. Within minutes, the team had resolved it without me lifting a finger!",
      author: "Sarah M.",
      role: "Business Owner"
    },
    {
      quote: "No more waiting on hold or explaining issues multiple times. WonderWatch just handles everything automatically!",
      author: "James K.",
      role: "Remote Worker"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl blur-xl" />
          <div
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            onMouseEnter={() => handleTestimonialView(testimonial)}
          >
            <Star className="w-8 h-8 text-purple-400 mb-4" />
            <p className="text-lg text-white/90 italic mb-4">{testimonial.quote}</p>
            <div>
              <p className="text-white font-semibold">{testimonial.author}</p>
              <p className="text-white/70">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Update the main WonderWatchPage component
// Keep existing flow diagram component
const FlowDiagram = () => (
  <div className="grid md:grid-cols-4 gap-8">
    {["Detection", "Analysis", "Response", "Resolution"].map((step, index) => (
      <div key={step} className="relative">
        {index < 3 && (
          <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full z-10">
            <div className="flex items-center justify-center w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full">
              <ArrowRight className="w-4 h-4 text-purple-400" />
            </div>
          </div>
        )}
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl relative border border-white/10 group hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="relative">
            <div className="text-lg font-semibold mb-2 text-white">{step}</div>
            <p className="text-white/70">
              {step === "Detection" && "Real-time monitoring across all network points"}
              {step === "Analysis" && "AI-powered issue classification and correlation"}
              {step === "Response" && "Automated engagement with correct team or FNO"}
              {step === "Resolution" && "Swift issue resolution with minimal downtime"}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Keep existing benefits section
const BenefitsSection = () => {
  const benefits = [
    {
      title: "24/7 Connection Monitoring",
      description: "Our system monitors your internet connection around the clock, detecting the moment it goes down.",
      icon: Shield,
    },
    {
      title: "Instant Notifications",
      description: "When your connection drops, our team is immediately notified and begins working on resolving the issue.",
      icon: Bell,
    },
    {
      title: "Quick Response",
      description: "No need to call us - we're already aware and working on the problem when your connection is down.",
      icon: Zap,
    },
    {
      title: "Automatic Reporting",
      description: "Our system automatically reports connection issues to our team, eliminating the need for you to log support tickets.",
      icon: Activity,
    }
  ];

  return (
    <div className="relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      <motion.div 
        className="relative max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefits for Your Home
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            WonderWatch isn't just network monitoring - it's your home's guardian, ensuring you stay connected and entertained.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <benefit.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Keep existing network monitoring section
const NetworkMonitoringSection = () => {
  const monitoringFeatures = [
    {
      title: "Connection Status Detection",
      description: "WonderWatch continuously monitors your internet connection status, detecting any interruptions immediately.",
      icon: Wifi,
      details: [
        "Real-time connection monitoring",
        "Instant outage detection",
        "Automated alert system",
        "24/7 monitoring coverage"
      ]
    },
    {
      title: "Rapid Response System",
      description: "When an outage is detected, our team is automatically notified and begins working on resolving the issue.",
      icon: Bell,
      details: [
        "Automatic team notifications",
        "Immediate response initiation",
        "Issue tracking",
        "Resolution monitoring"
      ]
    },
    {
      title: "Proactive Support",
      description: "No need to report issues - our team is notified and working on resolving connection problems as soon as they occur.",
      icon: HeadphonesIcon,
      details: [
        "Automatic issue reporting",
        "Immediate team notification",
        "Connection restoration tracking",
        "Status updates"
      ]
    }
  ];

  return (
    <div className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Network Monitoring
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our intelligent monitoring system keeps your network running smoothly with proactive detection and rapid response.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {monitoringFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WonderWatchPage = () => {
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);

  const handleCoverageCheck = () => {
    trackClick('coverage_check_button', 'wonderwatch_page');
    setIsCoverageModalOpen(true);
  };

  const handleFeatureView = (featureName) => {
    trackEvent('feature_section_viewed', {
      feature: featureName,
      page: 'wonderwatch'
    });
  };

  const handleTestimonialView = (testimonial) => {
    trackEvent('testimonial_viewed', {
      author: testimonial.author,
      role: testimonial.role,
      page: 'wonderwatch'
    });
  };

  return (
    <>
      <WonderWatchSEO />
      <div className="min-h-screen bg-black">
        {/* Enhanced Hero Section */}
        <div className="relative bg-black overflow-hidden min-h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
            {/* Animated Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-500/50 rounded-full"
                initial={{ 
                  x: Math.random() * 100,
                  y: Math.random() * 100,
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

          <div className="relative max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-white font-medium">South Africa's First AI-Powered Connection Monitor</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Always On,
                <div className="relative">
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    Always Watching
                  </span>
                </div>
              </h1>

              <p className="text-white/80 text-xl mb-12 max-w-xl">
                Custom-built by our expert team, WonderWatch blends engineering innovation with cutting-edge AI monitoring technology to revolutionize internet connectivity management.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsCoverageModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Check Coverage
                </button>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 border border-white/10"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Game Changer Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why WonderWatch is a Game-Changer
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Experience the future of internet connectivity with South Africa's most advanced monitoring system.
              </p>
            </motion.div>
            <ComparisonTable />
          </div>
        </div>

        {/* Engineering Insights Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Engineering Excellence
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Built from the ground up by our expert team of engineers and developers.
              </p>
            </motion.div>
            <EngineeringInsights />
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Real experiences from real WonderWatch users.
              </p>
            </motion.div>
            <Testimonials />
          </div>
        </div>

        {/* Flow Diagram Section */}
        <div className="relative bg-black py-24" id="features">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How WonderWatch Works
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Our monitoring system works around the clock to detect any connection issues and notify our team instantly.
              </p>
            </motion.div>
            <FlowDiagram />
          </div>
        </div>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Network Monitoring Section */}
        <NetworkMonitoringSection />

        {/* Final CTA Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Peace of Mind, Always Connected
              </h2>
              <div className="flex flex-col items-center gap-4 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  <span className="text-white">No missed meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  <span className="text-white">No interrupted streaming</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  <span className="text-white">No waiting on hold to report issues</span>
                </div>
              </div>
              <button
                onClick={() => setIsCoverageModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Join Thousands of Happy Customers
              </button>
            </motion.div>
          </div>
        </div>

        <CoverageModal 
          isOpen={isCoverageModalOpen} 
          onClose={() => setIsCoverageModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default WonderWatchPage;