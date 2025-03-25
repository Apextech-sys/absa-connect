import React from 'react';
import { motion } from 'framer-motion';
import { trackEvent, trackClick } from '../utils/analytics';
import {
  Shield,
  Zap,
  Activity,
  HeadphonesIcon,
  CheckCircle2,
  Brain,
  Code,
  Settings,
  Users,
  Star,
  Network,
  Clock,
  Wifi,
  Award,
  BarChart,
  Lock,
  Heart
} from 'lucide-react';
import WhyChooseAbsaConnectSEO from '../components/PageSEO/WhyChooseAbsaConnectSEO';
import SEO from '../components/SEO';
import CoverageModal from '../components/CoverageModal';

const FeatureCard = ({ icon: Icon, title, description, section }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onViewportEnter={() => {
      trackEvent('feature_card_viewed', {
        title,
        section,
        type: 'feature'
      });
    }}
    onClick={() => {
      trackEvent('feature_card_clicked', {
        title,
        section,
        type: 'feature'
      });
    }}
    className="relative group cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
      <Icon className="w-12 h-12 text-absa-500 mb-6" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-white/70">{label}</div>
    </div>
  </motion.div>
);

const WhyChooseAbsaConnect = () => {
  const [isCoverageModalOpen, setIsCoverageModalOpen] = React.useState(false);

  const coreFeatures = [
    {
      icon: Shield,
      title: "Banking-Grade Network",
      description: "Experience carrier-grade infrastructure designed for unmatched reliability and performance."
    },
    {
      icon: Brain,
      title: "AI-Powered Monitoring",
      description: "ABSA Monitor™, our proprietary AI system, provides 24/7 proactive connection monitoring and issue resolution."
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support Team",
      description: "Access our award-winning support team, available 7 days a week with industry-leading response times."
    },
    {
      icon: Network,
      title: "Premium Network Partners",
      description: "Strategic partnerships with leading fiber network operators ensure the best possible coverage and service."
    }
  ];

  const innovations = [
    {
      icon: Code,
      title: "Custom Technology Stack",
      description: "In-house developed systems optimized for South African internet conditions."
    },
    {
      icon: Activity,
      title: "Real-Time Analytics",
      description: "Advanced monitoring and reporting for unprecedented network visibility."
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Banking-level security measures protecting your connection."
    },
    {
      icon: Settings,
      title: "Automated Systems",
      description: "Cutting-edge automation for faster issue detection and resolution."
    }
  ];

  const testimonials = [
    {
      quote: "Switching to ABSA Connect was the best decision. Their proactive support and stable connection have transformed how we work from home.",
      author: "Sarah M.",
      role: "Remote Professional"
    },
    {
      quote: "The difference in service quality is night and day. ABSA Connect's support team is incredibly responsive and their systems just work.",
      author: "David K.",
      role: "Business Owner"
    }
  ];

  return (
    <>
      <WhyChooseAbsaConnectSEO />
      <div className="min-h-screen bg-black">
        <SEO 
          title="Why Choose ABSA Connect | South Africa's Premium Internet Provider"
          description="Experience the ABSA Connect difference: Banking-grade infrastructure, AI-powered monitoring, and award-winning support. Join thousands of satisfied customers."
        />
        
        {/* Hero Section */}
        <div className="relative bg-black overflow-hidden min-h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-900/20 to-black">
            {/* Animated Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-absa-500/50 rounded-full"
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
                <Award className="w-5 h-5 text-absa-500 mr-2" />
                <span className="text-white font-medium">South Africa's Premium Internet Provider</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Experience the
                <div className="relative">
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-absa-400 to-absa-600">
                    ABSA Connect Difference
                  </span>
                </div>
              </h1>

              <p className="text-white/80 text-xl mb-12 max-w-xl">
                Join thousands of South Africans who trust ABSA Connect for banking-grade internet connectivity and unmatched support.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    trackClick('check_coverage_button', 'hero_section');
                    setIsCoverageModalOpen(true);
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-absa-600 to-absa-700 hover:from-absa-500 hover:to-absa-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Check Coverage
                </button>
                <a
                  href="#features"
                  onClick={() => trackClick('learn_more_link', 'hero_section')}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 border border-white/10"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-4 gap-8"
              onViewportEnter={() => {
                trackEvent('stats_section_viewed', {
                  page: 'why_choose_absa_connect'
                });
              }}
            >
              <StatCard value="99.9%" label="Network Uptime" />
              <StatCard value="15min" label="Average Response Time" />
              <StatCard value="24/7" label="AI Monitoring" />
              <StatCard value="98.5%" label="Customer Satisfaction" />
            </motion.div>
          </div>
        </div>

        {/* Core Features Section */}
        <div className="relative bg-black py-24" id="features">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why We're Different
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Experience internet service reimagined with cutting-edge technology and unmatched support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} section="core_features" />
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Innovation at Our Core
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Our custom-built technology stack sets new standards in the industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {innovations.map((innovation, index) => (
                <FeatureCard key={index} {...innovation} section="innovations" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied ABSA Connect customers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    <Star className="w-8 h-8 text-absa-500 mb-4" />
                    <p className="text-lg text-white/90 italic mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Ready to Experience Better Internet?
              </h2>
              <div className="flex flex-col items-center gap-4 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-absa-500" />
                  <span className="text-white">Banking-grade connectivity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-absa-500" />
                  <span className="text-white">24/7 AI-powered monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-absa-500" />
                  <span className="text-white">Award-winning support team</span>
                </div>
              </div>
              <button
                onClick={() => {
                  trackClick('check_coverage_button', 'cta_section');
                  setIsCoverageModalOpen(true);
                }}
                className="px-8 py-4 bg-gradient-to-r from-absa-600 to-absa-700 hover:from-absa-500 hover:to-absa-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Check Coverage Now
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

export default WhyChooseAbsaConnect;