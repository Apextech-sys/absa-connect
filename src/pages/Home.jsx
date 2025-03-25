import React from 'react';
import HomeSEO from '../components/PageSEO/HomeSEO';
import Hero from '../components/Hero';
import BlackFridayHero from '../components/BlackFridayHero';
import Features from '../components/Features';
import PackageComparison from '../components/PackageComparison';
import CoverageChecker from '../components/CoverageChecker';
import SectionDivider from '../components/SectionDivider';

const Section = ({ children, className = "" }) => (
  <div className={`relative w-full ${className}`}>
    {children}
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
      <div className="min-h-screen">
        {isPromoPeriod() ? (
          <>
            <Section>
              <BlackFridayHero />
            </Section>
            <SectionDivider variant="light" />
          </>
        ) : (
          <>
            <Section className="bg-gradient-to-br from-absa-900 to-absa-800">
              <Hero />
            </Section>
            <SectionDivider variant="light" />
          </>
        )}
        
        <Section className="bg-gradient-to-br from-white to-purple-900">
          <Features />
        </Section>
        
        <SectionDivider variant="dark" />
        
        <Section className="bg-white">
          <PackageComparison />
        </Section>
        
        <SectionDivider variant="light" />
        
        <CoverageChecker />
        
      </div>
    </>
  );
};

export default Home;