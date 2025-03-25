import React from 'react';
import { motion } from 'framer-motion';
import HomeSEO from '../components/PageSEO/HomeSEO';
import Hero from '../components/Hero';
import BlackFridayHero from '../components/BlackFridayHero';
import Features from '../components/Features';
import PackageComparison from '../components/PackageComparison';
import CoverageChecker from '../components/CoverageChecker';

// Animated section component with fade-in effect
const AnimatedSection = ({ children, className = "", delay = 0 }) => (
  <motion.div 
    className={`relative w-full ${className}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

// Subtle connector component to create visual continuity between sections
const SectionConnector = () => (
  <div className="relative h-24 overflow-hidden">
    <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-black to-transparent opacity-70"></div>
  </div>
);

// Promo date checker - keeping in sync with App.jsx
const isPromoPeriod = () => {
  const now = new Date();
  const startDate = new Date('2023-11-23T00:00:00+02:00'); // Yesterday SAST
  const endDate = new Date('2024-12-31T23:59:59+02:00'); // End of December 2024 SAST
  return now >= startDate && now <= endDate;
};

const Home = () => {
  return (
    <>
      <HomeSEO />
      <div className="min-h-screen bg-black">
        {/* Background gradient that spans the entire page */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-absa-900/20 to-black -z-10"></div>
        
        {/* Hero Section */}
        {isPromoPeriod() ? (
          <AnimatedSection>
            <BlackFridayHero />
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
        )}
        
        {/* Features Section */}
        <AnimatedSection delay={0.1}>
          <Features />
        </AnimatedSection>
        
        {/* Add spacing between sections */}
        <div className="h-24"></div>
        
        {/* Package Comparison Section */}
        <AnimatedSection delay={0.2} className="relative">
          {/* Overlay to create depth and separation without harsh dividers */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl mx-4 lg:mx-12 -top-12 -bottom-12 -z-10"></div>
          <PackageComparison />
        </AnimatedSection>
        
        {/* Coverage Checker Section */}
        <AnimatedSection delay={0.3}>
          <CoverageChecker />
        </AnimatedSection>
      </div>
    </>
  );
};

export default Home;