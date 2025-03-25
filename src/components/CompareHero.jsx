import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Wifi, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-full h-full" >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wonderblue-900 via-wondernet-800 to-wondernet-900" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ 
              x: -10, 
              y: Math.random() * 100 + "%",
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{ 
              x: "120%",
              opacity: 0
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 20
            }}
            style={{
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-wonderblue-500/30 rounded-full filter blur-3xl"
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
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-wondernet-500/30 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
    </div>
  </div>
);

const CompareHero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Wifi className="w-5 h-5 text-white mr-2" />
              <span className="text-white/90">Compare Our Packages</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Find Your Perfect 
              <span className="block mt-2 bg-gradient-to-r from-white to-wondernet-100 bg-clip-text text-transparent">
                Fibre Package
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Compare our range of uncapped, unshaped packages side by side and 
              get a personalized recommendation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/recommend"
                className="bg-white text-wondernet-600 px-8 py-4 rounded-xl shadow-lg hover:bg-wondernet-50 transition-all flex items-center group"
              >
                <span>Get a Recommendation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/packages"
                className="bg-wondernet-700 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-wondernet-600 transition-all"
              >
                Browse All Packages
              </Link>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Wifi, title: "Uncapped", desc: "No usage limits" },
              { icon: Shield, title: "Unshaped", desc: "Pure speed always" },
              { icon: Zap, title: "Zero Throttling", desc: "Full speed 24/7" },
              { icon: ArrowRight, title: "No Lock-in", desc: "Month-to-month" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-white/20 transition-all"
              >
                <feature.icon className="w-8 h-8 mb-4 text-white mx-auto" />
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareHero;