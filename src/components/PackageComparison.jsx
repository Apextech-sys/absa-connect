import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { trackEvent, trackClick } from '../utils/analytics';
import {
  Download, Monitor, Users, Wifi, Gamepad, Laptop, 
  Video, Cloud, Zap, Check, Shield, Info, ArrowRight 
} from 'lucide-react';
import CoverageModal from './CoverageModal';
import { Link } from 'react-router-dom';

const DetailedAnalysisPrompt = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mt-16 bg-gradient-to-br from-absa-900/50 via-absa-800/50 to-absa-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Need a More Detailed Recommendation?</h3>
      <p className="text-white/80 mb-8">
        Get a comprehensive analysis of your exact needs with our advanced recommendation engine. 
        Consider factors like home layout, wall materials, device types, and more.
      </p>
      <Link 
        to="/recommend"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-absa-500 to-absa-700 text-white rounded-xl font-medium hover:from-absa-600 hover:to-absa-800 transition-all group"
        onClick={() => trackClick('detailed_analysis_button', 'package_comparison')}
      >
        Get Detailed Analysis
        <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const PackageComparison = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [households, setHouseholds] = useState(1);
  const [streamingQuality, setStreamingQuality] = useState('hd');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const usageProfiles = {
    streaming: {
      icon: Monitor,
      title: "Streaming & Entertainment",
      description: "Netflix, YouTube, Spotify",
      baseSpeed: 25,
      concurrent: 15,
      examples: ["4K streaming", "Multiple devices", "Smart TV"]
    },
    gaming: {
      icon: Gamepad,
      title: "Gaming",
      description: "Online gaming, downloads",
      baseSpeed: 50,
      concurrent: 25,
      examples: ["Online multiplayer", "Game downloads", "Live streaming"]
    },
    working: {
      icon: Laptop,
      title: "Working From Home",
      description: "Video calls, file sharing",
      baseSpeed: 25,
      concurrent: 20,
      examples: ["Video conferencing", "Cloud storage", "Remote desktop"]
    },
    streaming4k: {
      icon: Video,
      title: "4K Streaming",
      description: "Ultra HD content",
      baseSpeed: 40,
      concurrent: 30,
      examples: ["4K Movies", "HDR content", "Multiple streams"]
    },
    smarthome: {
      icon: Cloud,
      title: "Smart Home",
      description: "IoT devices, automation",
      baseSpeed: 15,
      concurrent: 10,
      examples: ["Security cameras", "Smart devices", "Home automation"]
    }
  };

  const getRecommendedSpeed = useMemo(() => {
    if (selectedCategories.length === 0) return null;

    // Track recommendation generation
    trackEvent('package_recommendation_generated', {
      selected_categories: selectedCategories,
      household_size: households,
      streaming_quality: streamingQuality
    });

    let baseSpeed = Math.max(
      ...selectedCategories.map(category => usageProfiles[category].baseSpeed)
    );

    const concurrentNeeds = selectedCategories.reduce((acc, category) => {
      return acc + usageProfiles[category].concurrent;
    }, 0);

    let recommendedSpeed = baseSpeed + (concurrentNeeds * (households - 1));

    if (streamingQuality === '4k') {
      recommendedSpeed *= 1.5;
    } else if (streamingQuality === 'hd') {
      recommendedSpeed *= 1.2;
    }

    const speedTiers = [25, 50, 100, 200, 500, 1000];
    return speedTiers.find(tier => tier >= recommendedSpeed) || 1000;
  }, [selectedCategories, households, streamingQuality]);

  const PackageCard = ({ speed, isRecommended }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-absa-600/20 to-absa-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        isRecommended
          ? 'bg-gradient-to-br from-absa-900/80 to-black border-2 border-absa-600/50'
          : 'bg-black/40 border border-white/10 hover:border-absa-600/50'
      }`}>
        {isRecommended && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-absa-500 to-absa-700 text-white px-3 py-1 rounded-full text-sm">
            Recommended
          </div>
        )}

        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-2">{speed}Mbps</h3>
          <p className="text-absa-600 mb-6">Symmetrical Speed</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-3 bg-absa-800/20 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <Download className="w-4 h-4 text-absa-600 mr-2" />
                <span className="text-white/80">Download</span>
              </div>
              <span className="font-medium text-white">{speed}Mbps</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-absa-800/20 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <Download className="w-4 h-4 text-absa-600 mr-2" />
                <span className="text-white/80">Upload</span>
              </div>
              <span className="font-medium text-white">{speed}Mbps</span>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[/* eslint-disable react/prop-types */
              { icon: Check, text: "Uncapped & Unshaped" },
              { icon: Shield, text: "Banking-Grade Security" },
              { icon: Zap, text: "ABSA Client Exclusive" },
              { icon: Wifi, text: "ABSA Monitor™ Included" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center text-white/80">
                <feature.icon className="w-4 h-4 text-absa-600 mr-2" />
                {feature.text}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-absa-500 to-absa-700 text-white py-3 rounded-lg hover:from-absa-600 hover:to-absa-800 transition-colors"
          >
            Check Coverage
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative -mt-32 pt-32 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-800/50 to-black pointer-events-none">
        {/* Top Wave Transition */}
        <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="absolute w-full h-full transform rotate-180"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              className="text-black"
              d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-absa-600 rounded-full pointer-events-none"
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-absa-400 to-absa-600 mb-4">
            ABSA Client Exclusive Packages
          </h2>
          <p className="text-xl text-white/80">
            Tell us about your internet needs and we'll recommend the ideal ABSA Connect package for your home
          </p>
        </div>

        {/* Usage Profile Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">What will you use your internet for?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(usageProfiles).map(([key, profile]) => (
              <motion.button
                key={key}
                onClick={() => {
                  const newCategories = prev => {
                    const updated = prev.includes(key)
                      ? prev.filter(c => c !== key)
                      : [...prev, key];
                    
                    trackEvent('usage_profile_selected', {
                      profile: key,
                      profile_name: profile.title,
                      action: prev.includes(key) ? 'removed' : 'added',
                      total_profiles: updated.length
                    });
                    
                    return updated;
                  };
                  setSelectedCategories(newCategories);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  selectedCategories.includes(key)
                    ? 'border-absa-600 bg-absa-800/20'
                    : 'border-white/10 hover:border-absa-600/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <profile.icon className="w-8 h-8 text-absa-600 mb-4" />
                <h4 className="text-white font-semibold mb-2">{profile.title}</h4>
                <p className="text-white/70 text-sm mb-4">{profile.description}</p>
                <div className="space-y-1">
                  {profile.examples.map((example, i) => (
                    <div key={i} className="flex items-center text-xs text-white/60">
                      <Check className="w-3 h-3 mr-1 text-absa-600" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Household Size Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">How many people will use the connection?</h3>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, '5+'].map((number) => (
              <motion.button
                key={number}
                onClick={() => {
                  setHouseholds(number);
                  trackEvent('household_size_selected', {
                    size: number,
                    previous_size: households
                  });
                }}
                className={`p-4 rounded-xl border-2 min-w-[100px] transition-all ${
                  households === number
                    ? 'border-absa-600 bg-absa-900/20'
                    : 'border-white/10 hover:border-absa-600/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-6 h-6 mx-auto mb-2 text-absa-600" />
                <span className="block text-sm font-medium text-white">{number}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Streaming Quality Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">
            Preferred Streaming Quality
            <Info className="inline-block ml-2 text-absa-600" />
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {[/* eslint-disable react/prop-types */
              { id: 'sd', label: 'Standard', description: '480p quality' },
              { id: 'hd', label: 'High Definition', description: '1080p quality' },
              { id: '4k', label: 'Ultra HD', description: '4K + HDR quality' }
            ].map((quality) => (
              <motion.button
                key={quality.id}
                onClick={() => {
                  setStreamingQuality(quality.id);
                  trackEvent('streaming_quality_selected', {
                    quality: quality.id,
                    quality_label: quality.label,
                    previous_quality: streamingQuality
                  });
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  streamingQuality === quality.id
                    ? 'border-absa-600 bg-absa-900/20'
                    : 'border-white/10 hover:border-absa-600/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Monitor className="w-8 h-8 mx-auto mb-3 text-absa-600" />
                <h4 className="text-white font-semibold mb-1">{quality.label}</h4>
                <p className="text-white/70 text-sm">{quality.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Recommendation Display */}
        {getRecommendedSpeed && selectedCategories.length > 0 && (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              <PackageCard speed={getRecommendedSpeed / 2} />
              <PackageCard speed={getRecommendedSpeed} isRecommended={true} />
              <PackageCard speed={getRecommendedSpeed * 2} />
            </div>
            <DetailedAnalysisPrompt />
          </>
        )}

        {(!getRecommendedSpeed || selectedCategories.length === 0) && (
          <div className="mt-8 flex items-center justify-center">
            <Link 
              to="/recommend"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-absa-500 to-absa-700 text-white rounded-lg hover:from-absa-600 hover:to-absa-800 transition-all group"
              onClick={() => trackClick('skip_to_analysis_button', 'package_comparison')}
            >
              Skip to Detailed Analysis
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        <CoverageModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default PackageComparison;