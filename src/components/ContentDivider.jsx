import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContentDivider = ({ 
  title = "Ready to optimise your smart home network or just need advice?",
  subtitle = "Get a comprehensive analysis of your home network and discover ways to enhance your internet experience & performance.",
  className = ""
}) => {
  return (
    <div className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-wondernet-900/5 via-wondernet-900/10 to-wondernet-900/5" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg leading-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-6">
            <motion.div 
              className="h-1 w-12 bg-wondernet-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="/mesh-advisor"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wondernet-600 hover:bg-wondernet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wondernet-500"
              >
                Analyse My Network
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </motion.div>
            <motion.div 
              className="h-1 w-12 bg-wondernet-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDivider;
