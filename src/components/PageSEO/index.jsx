import React from 'react';
import SEO from '../SEO';

// Helper function to format step data
const formatHowToSteps = (steps) => {
  return steps.map(step => ({
    "@type": "HowToStep",
    "name": step.title,
    "text": step.description,
    "image": step.image || null,
    "url": step.url || null
  }));
};

// HowToSwitch SEO Configuration
export const HowToSwitchSEO = () => (
  <SEO 
    title="How to Switch to Wondernet | Easy 4-Step Process"
    description="Switch to Wondernet in 4 simple steps. Expert support throughout your transition, free router, and no installation fees. Start saving on your internet today."
    type="HowTo"
    schema={{
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Switch to Wondernet",
      "description": "A step-by-step guide to switching your internet service provider to Wondernet",
      "totalTime": "PT30M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "ZAR",
        "value": "0"
      },
      "tool": {
        "@type": "HowToTool",
        "name": "Internet connection"
      },
      "supply": {
        "@type": "HowToSupply",
        "name": "Existing fibre line (if available)"
      },
      "step": formatHowToSteps([
        {
          title: "Check Coverage",
          description: "Verify fibre availability at your address using our coverage checker",
          url: "https://wondernet.co.za/coverage"
        },
        {
          title: "Choose Your Package",
          description: "Select the ideal fibre package for your needs",
          url: "https://wondernet.co.za/packages"
        },
        {
          title: "Place Your Order",
          description: "Complete your order and schedule installation",
          url: "https://wondernet.co.za/packages"
        },
        {
          title: "Get Connected",
          description: "Our team handles the installation and setup",
          url: "https://wondernet.co.za/support"
        }
      ])
    }}
  />
);

// Support Page SEO Configuration
export const SupportSEO = () => (
  <SEO 
    title="24/7 Expert Support | Wondernet Customer Service"
    description="Experience world-class internet support with Wondernet. Our expert team is available 7 days a week with rapid response times and proactive monitoring."
    type="CustomerService"
    schema={{
      "@context": "https://schema.org",
      "@type": "CustomerService",
      "name": "Wondernet Customer Support",
      "telephone": "+27600672028",
      "email": "support@wondernet.co.za",
      "availableLanguage": ["en-ZA"],
      "areaServed": "ZA",
      "hoursAvailable": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "serviceType": "Internet Support"
    }}
  />
);

// WonderWatch SEO Configuration
export const WonderWatchSEO = () => (
  <SEO 
    title="WonderWatch™: AI-Powered Network Monitoring"
    description="Experience South Africa's first AI-powered proactive internet monitoring system. Detects and resolves network issues before they impact your connection."
    type="Product"
    schema={{
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "WonderWatch™",
      "description": "AI-powered network monitoring and issue resolution system",
      "category": "Network Monitoring",
      "brand": {
        "@type": "Brand",
        "name": "Wondernet"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "ZAR",
        "priceValidUntil": "2024-12-31"
      }
    }}
  />
);