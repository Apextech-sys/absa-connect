import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield } from 'lucide-react';

const LegalPageLayout = ({ title, subtitle, sections }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -offset);
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden min-h-[400px]">
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
              <Shield className="w-5 h-5 text-absa-500 mr-2" />
              <span className="text-white font-medium">Legal Information</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              {title}
              <div className="relative">
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-absa-400 to-absa-600">
                  {subtitle}
                </span>
              </div>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section with Floating Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Floating Menu Container */}
          <div className="lg:w-64 flex-shrink-0">
            <div className={`${isSticky ? 'lg:sticky lg:top-24' : ''}`}>
              <nav className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-absa-100 text-absa-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-8 last:mb-0"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                    {expandedSections[section.id] ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {(expandedSections[section.id] || activeSection === section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="prose prose-blue max-w-none text-gray-600 mt-4">
                          {section.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
