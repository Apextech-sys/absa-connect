import React from 'react';
import { Check, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const RecommendHero = ({ step, steps }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-wondernet-900/50 to-black">
        {/* Central WiFi Icon with Signal Waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* WiFi Icon */}
          <motion.div
            className="relative"
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-wondernet-400/20 rounded-full blur-xl w-16 h-16" />
              <Wifi className="w-12 h-12 text-wondernet-400" />
            </div>
          </motion.div>

          {/* Signal Waves */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute"
              initial={{ 
                scale: 0.1,
                opacity: 0.8,
              }}
              animate={{
                scale: [0.1, (i + 1) * 1.5],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut"
              }}
            >
              {/* Top Wave */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[40rem] h-[40rem] border-2 border-wondernet-400/30 rounded-full" />
              </div>
              {/* Bottom Wave (slightly offset) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[40rem] h-[40rem] border border-wondernet-400/20 rounded-full" 
                  style={{ transform: 'scale(0.98)' }}
                />
              </div>
            </motion.div>
          ))}

          {/* Small Signal Dots */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateX(${Math.random() * 200 + 100}px)`,
              }}
              initial={{ 
                scale: 0,
                opacity: 0 
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              <div className="w-2 h-2 bg-wondernet-400/50 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Background Glow Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-wondernet-600/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-wondernet-700/50 to-wondernet-600/50 text-white backdrop-blur-sm border border-wondernet-500/20">
            Personalized Recommendations
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="inline-block bg-gradient-to-r from-white via-white to-wondernet-200 bg-clip-text text-transparent">
            Find Your Perfect Package
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-wondernet-100 max-w-2xl mx-auto mb-12"
        >
          Answer a few questions and we'll recommend the best package for your needs,
          with unlimited data and no hidden costs.
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {[
            'True Unlimited Data',
            'No Speed Throttling',
            'Free Installation',
            'Premium WiFi Router'
          ].map((feature, index) => (
            <motion.div 
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-br from-wondernet-800/50 to-wondernet-700/50 backdrop-blur-sm border border-wondernet-600/20 transition-all duration-300 hover:scale-105 hover:from-wondernet-700/50 hover:to-wondernet-600/50">
                <Check className="w-4 h-4 text-wondernet-400 group-hover:text-wondernet-300 transition-colors" />
                <span className="text-sm text-white group-hover:text-wondernet-50 transition-colors">{feature}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between mb-6 relative">
            {/* Progress line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-wondernet-700">
              <div 
                className="h-full bg-gradient-to-r from-wondernet-500 to-wondernet-400 transition-all duration-500"
                style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            {steps.map((s, i) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="relative flex flex-col items-center group z-10"
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  i < step ? 'bg-gradient-to-br from-wondernet-500 to-wondernet-400' : 
                  i === step ? 'bg-white ring-4 ring-wondernet-500/20' : 
                  'bg-wondernet-800'
                }`}>
                  <span className={`text-sm font-medium ${
                    i === step ? 'text-wondernet-900' : 'text-white'
                  }`}>
                    {i < step ? <Check className="w-5 h-5" /> : i + 1}
                  </span>
                </div>
                <div className="mt-3 text-sm text-wondernet-100">
                  {s.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendHero;
