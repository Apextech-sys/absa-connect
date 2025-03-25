import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, PhoneCall, Zap, Cloud, Users, Router, Wifi } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Banking-Grade Security",
      description: "Benefit from the same security protocols that protect ABSA's financial systems",
      gradient: "from-absa-600 to-absa-700"
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "ABSA Monitor™ system proactively protects your connection 24/7",
      gradient: "from-absa-600 to-absa-700"
    },
    {
      icon: PhoneCall,
      title: "Priority Support",
      description: "Exclusive support channel for ABSA clients via WhatsApp, live chat, or email",
      gradient: "from-absa-600 to-absa-700"
    },
    {
      icon: Zap,
      title: "Client Exclusive Rates",
      description: "Special pricing available only to ABSA banking clients",
      gradient: "from-absa-600 to-absa-700"
    },
    {
      icon: Cloud,
      title: "Secure Data Routing",
      description: "Enhanced routing security that protects your personal information",
      gradient: "from-absa-600 to-absa-700"
    },
    {
      icon: Router,
      title: "Premium Equipment",
      description: "Free high-end router with secure WiFi technology to protect your home network",
      gradient: "from-absa-600 to-absa-700"
    }
  ];

  return (
    <div className="relative min-h-[600px] flex items-center bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-800/50 to-black">
        {/* Animated Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-absa-600 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative w-full py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Why Choose ABSA Connect?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Experience the difference with our banking-grade secure network infrastructure and priority client support
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
                onMouseEnter={() => trackEvent('feature_hover', {
                  feature_title: feature.title,
                  feature_category: 'why_choose_absa_connect'
                })}
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-absa-600/20 to-black/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-absa-600/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onViewportEnter={() => trackEvent('stats_section_viewed', {
              location: 'features',
              stats: [
                { metric: 'uptime', value: '99.9%' },
                { metric: 'monitoring', value: '24/7' },
                { metric: 'network_capacity', value: '1000Gbps' },
                { metric: 'latency', value: '<15ms' }
              ]
            })}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <div className="grid md:grid-cols-4 gap-8">
              {[ 
                { number: "99.9%", label: "Network Uptime" },
                { number: "24/7", label: "Connection Monitoring" },
                { number: "1000Gbps", label: "Routing Network" },
                { number: "<15ms", label: "Average Local Latency" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold text-white group-hover:text-absa-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;