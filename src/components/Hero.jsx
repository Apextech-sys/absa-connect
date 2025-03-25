import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { trackEvent, trackClick } from '../utils/analytics';
import { 
  Wifi, ArrowRight, Shield, Router, Check, 
  Download, Monitor, Zap, Cloud 
} from 'lucide-react';
import CoverageModal from './CoverageModal';

const ModernHero = () => {
  const [activeSpeed, setActiveSpeed] = useState(500);
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const navigate = useNavigate();

  const speedTiers = [
    {
      speed: '100',
      features: ['HD Streaming', '4-5 Devices', 'Work from Home'],
      recommended: 'Small Households'
    },
    {
      speed: '200',
      features: ['4K Streaming', '8-10 Devices', 'Gaming & Work'],
      recommended: 'Medium Households'
    },
    {
      speed: '500',
      features: ['Multiple 4K Streams', '12-15 Devices', 'Pro Gaming'],
      recommended: 'Large Households'
    },
    {
      speed: '1000',
      features: ['8K Ready', '15+ Devices', 'Content Creation'],
      recommended: 'Power Users'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-800/50 to-black">
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-absa-600 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 1, 0]
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
        className="absolute top-0 right-0 w-96 h-96 bg-absa-600/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-absa-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Shield className="w-5 h-5 text-absa-600 mr-2" />
                <span className="text-white font-medium">Banking-Grade Secured Internet</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                ABSA Client
                <div className="relative">
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-absa-400 to-absa-600">
                    Exclusive Internet
                  </span>
                  <motion.div
                    className="absolute -right-12 -top-12 w-24 h-24 bg-absa-500/30 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </h1>

              <p className="text-white/80 text-xl mb-12 max-w-xl">
                Experience unmatched speed and reliability with our banking-grade secure network.
                Backed by ABSA Monitor™ and priority support for ABSA clients.
              </p>

              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-6">
                <motion.button
                  onClick={() => setIsCoverageModalOpen(true)}
                  className="group bg-gradient-to-r from-absa-500 to-absa-700 px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-absa-500/20 flex items-center justify-center space-x-2 w-full lg:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-medium">
                    Check Coverage
                  </span>
                  <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  onClick={() => {
                    trackClick('view_packages_button', 'hero');
                    navigate('/packages');
                  }}
                  className="group flex items-center space-x-2 text-white border-2 border-white/20 rounded-xl px-8 py-3 hover:bg-white/10 transition-all w-full lg:w-auto justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Packages</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: 'ABSA Monitor™', subtitle: '24/7 Security' },
                  { icon: Router, title: 'Premium Router', subtitle: 'Included Free' },
                  { icon: Check, title: 'ABSA Client Rate', subtitle: 'Exclusive Pricing' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/20 to-absa-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <feature.icon className="w-8 h-8 text-absa-600 mx-auto mb-2" />
                      <div className="text-white font-medium">{feature.title}</div>
                      <div className="text-white/70 text-sm">{feature.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-absa-500/20 to-absa-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Exclusive ABSA Client Plans</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {speedTiers.map((tier, index) => (
                    <motion.div
                      key={tier.speed}
                      onClick={() => {
                        const speed = parseInt(tier.speed);
                        setActiveSpeed(speed);
                        trackEvent('speed_tier_selected', {
                          speed: speed,
                          recommended_for: tier.recommended,
                          location: 'hero'
                        });
                      }}
                      className="cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`relative p-4 rounded-xl transition-all ${
                        activeSpeed === parseInt(tier.speed) 
                          ? 'bg-white/10' 
                          : 'hover:bg-white/5'
                      }`}>
                        <div className="text-3xl font-bold text-white mb-2">{tier.speed}Mbps</div>
                        <div className="space-y-1">
                          {tier.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-white/70 text-sm">
                              <Check className="w-4 h-4 mr-1 text-absa-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-absa-600 text-sm">{tier.recommended}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-absa-600/10 rounded-xl p-4 backdrop-blur-sm">
                    <Monitor className="w-5 h-5 text-absa-600 mb-2" />
                    <div className="text-white text-sm font-medium">4K Streaming</div>
                    <div className="text-white/70 text-xs">Multiple devices</div>
                  </div>
                  <div className="bg-absa-500/10 rounded-xl p-4 backdrop-blur-sm">
                    <Zap className="w-5 h-5 text-absa-600 mb-2" />
                    <div className="text-white text-sm font-medium">Banking Security</div>
                    <div className="text-white/70 text-xs">Enterprise-grade protection</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            className="text-black"
            d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <CoverageModal 
        isOpen={isCoverageModalOpen}
        onClose={() => setIsCoverageModalOpen(false)}
      />
    </div>
  );
};

export default ModernHero;