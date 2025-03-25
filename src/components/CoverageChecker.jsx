import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { trackEvent, trackClick } from '../utils/analytics';
import CoverageModal from './CoverageModal';

const CoverageChecker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Content */}
      <div className="relative w-full py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => trackEvent('coverage_section_viewed', {
                location: 'home_page'
              })}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Check If We're In Your Area
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Enter your address to see available packages and get connected in as little as 7 days.
              </p>
              <motion.button
                onClick={() => {
                  setIsModalOpen(true);
                  trackClick('check_coverage_button', 'coverage_checker');
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-absa-600 to-absa-700 text-white rounded-xl font-medium hover:from-absa-700 hover:to-absa-800 transition-all group shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Check Coverage Now
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <CoverageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default CoverageChecker;