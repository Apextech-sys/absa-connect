import React from 'react';
import { Router, Wifi, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Hero component for the Mesh Advisor page
 * @param {object} props - Component props
 * @param {function} props.onStartAnalysis - Function to start the advisor
 * @returns {JSX.Element} Hero component
 */
const MeshHero = ({ onStartAnalysis }) => {
  return (
    <div className="relative overflow-hidden min-h-[650px] w-full">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-900/40 to-black" />
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-absa-600/20 rounded-bl-[200px] blur-xl"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-absa-500/20 rounded-tr-[200px] blur-xl"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Mesh network visualization */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-[600px] h-[400px]">
            {/* Mesh nodes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M100,100 L300,150 L500,100 M300,150 L400,300 L200,250 M300,150 L200,250"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, 100],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-[650px] w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col items-center">
            {/* Pill badge */}
            <motion.div 
              className="inline-flex items-center bg-absa-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-absa-600/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Router className="w-5 h-5 mr-2 text-absa-300" />
              <span className="text-white font-medium">ABSA Connect Network Planning</span>
            </motion.div>

            {/* Hero content */}
            <div className="max-w-3xl w-full text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Home Network Advisor
                <span className="block text-2xl font-medium mt-4 bg-gradient-to-r from-absa-400 to-absa-600 bg-clip-text text-transparent">
                  Design your perfect mesh network setup
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our intelligent advisor analyzes your space and requirements to create the optimal mesh network setup for your home.
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button
                  onClick={onStartAnalysis}
                  className="bg-absa-600 text-white px-8 py-4 rounded-lg hover:bg-absa-700 transition-colors flex items-center gap-2 shadow-lg shadow-absa-600/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started</span>
                  <Zap className="w-5 h-5" />
                </motion.button>
                
                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                  Learn more about mesh networks
                </a>
              </motion.div>
            </div>
            
            {/* Feature highlights */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-12 h-12 bg-absa-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-absa-500" />
                </div>
                <h3 className="text-white font-medium mb-2">Optimal Coverage</h3>
                <p className="text-white/70 text-sm">Get whole-home WiFi coverage with no dead zones</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-12 h-12 bg-absa-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-absa-500" />
                </div>
                <h3 className="text-white font-medium mb-2">Enhanced Security</h3>
                <p className="text-white/70 text-sm">Banking-grade security for your home network</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-12 h-12 bg-absa-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-absa-500" />
                </div>
                <h3 className="text-white font-medium mb-2">Maximum Performance</h3>
                <p className="text-white/70 text-sm">Optimized for streaming, gaming, and work</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#1f2937" // gray-800
          />
        </svg>
      </div>
    </div>
  );
};

export default MeshHero;
