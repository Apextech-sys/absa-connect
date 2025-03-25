import React from 'react';
import SEO from '../SEO';

const RecommendSEO = () => {
  const pageTitle = "Find Your Perfect Fibre Package | South African ISP Package Finder";
  const pageDescription = "Get personalized fibre internet package recommendations based on your needs. Our smart advisor helps you find the ideal package for streaming, gaming, or working from home. Available on all major SA networks.";

  // Tool schema for recommendation system
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Wondernet Package Advisor",
    "applicationCategory": "PackageRecommendation",
    "description": "Smart tool that recommends the perfect fibre package based on your internet usage patterns and requirements",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Usage pattern analysis",
      "Speed requirement calculation",
      "Budget consideration",
      "Network availability check",
      "Package comparison",
      "Personalized recommendations"
    ]
  };

  // FAQ Schema for recommendation questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I choose the right fibre package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our package advisor considers your internet usage (streaming, gaming, work), number of users, budget, and location to recommend the perfect package. All packages include free installation, premium router, and 24/7 support."
        }
      },
      {
        "@type": "Question",
        "name": "What speed do I need for streaming and gaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For HD streaming, we recommend at least 25Mbps. For 4K streaming or online gaming, consider 50-100Mbps. For households with multiple users streaming and gaming simultaneously, we suggest 100Mbps or higher."
        }
      },
      {
        "@type": "Question",
        "name": "Can I upgrade my package later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can upgrade or downgrade your package anytime without penalties. Our advisor will help you find the right starting package, and you can adjust based on your experience."
        }
      }
    ]
  };

  // HowTo Schema for using the advisor
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Find Your Perfect Fibre Package",
    "description": "Simple guide to finding the ideal fibre internet package for your needs",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Coverage",
        "text": "Enter your address to see available networks in your area",
        "url": "https://wondernet.co.za/coverage"
      },
      {
        "@type": "HowToStep",
        "name": "Answer Questions",
        "text": "Tell us about your internet usage, number of users, and preferences"
      },
      {
        "@type": "HowToStep",
        "name": "Review Recommendations",
        "text": "Get personalized package recommendations based on your needs"
      },
      {
        "@type": "HowToStep",
        "name": "Compare Options",
        "text": "Compare recommended packages side by side",
        "url": "https://wondernet.co.za/compare"
      }
    ]
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[toolSchema, faqSchema, howToSchema]}
      type="WebApplication"
    />
  );
};

export default RecommendSEO;
