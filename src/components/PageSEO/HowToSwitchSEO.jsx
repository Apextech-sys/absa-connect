import React from 'react';
import SEO from '../SEO';

const HowToSwitchSEO = () => {
  const pageTitle = "Switch to ABSA Connect | Easy ISP Migration Guide South Africa";
  const pageDescription = "Switch your fibre ISP to ABSA Connect hassle-free. We handle everything: ISP cancellation, migration, and setup. No downtime, free installation, and premium router included. Available on all major fibre networks.";

  // HowTo Schema for switching process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Switch Your Fibre ISP to ABSA Connect",
    "description": "Simple step-by-step guide to switch your fibre internet service provider to ABSA Connect",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "ZAR",
      "value": "0"
    },
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Internet connection",
        "description": "Existing fibre connection from any major network"
      },
      {
        "@type": "HowToTool",
        "name": "Proof of residence",
        "description": "Recent utility bill or lease agreement"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Coverage",
        "text": "Enter your address on our coverage checker to confirm fibre availability",
        "url": "https://absaconnect.co.za/coverage"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Package",
        "text": "Select your preferred fibre package from our range of options",
        "url": "https://absaconnect.co.za/packages"
      },
      {
        "@type": "HowToStep",
        "name": "Place Order",
        "text": "Complete the online order form with your details and preferred package"
      },
      {
        "@type": "HowToStep",
        "name": "ISP Migration",
        "text": "We handle the migration process with your current ISP, ensuring no service interruption"
      }
    ]
  };

  // FAQ Schema for switching questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to switch to ABSA Connect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The switching process typically takes 1-2 business days. We handle all the paperwork and coordination with your current ISP to ensure a smooth transition with minimal to no downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to cancel my current ISP first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we handle the cancellation process for you. Simply provide your current ISP details during signup, and we'll manage the entire migration process, including cancellation and service transfer."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a cost to switch to ABSA Connect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, switching to ABSA Connect is completely free. We cover all migration costs, provide free installation, and include a premium mesh WiFi router with your package."
        }
      }
    ]
  };

  // Service schema for migration service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ABSA Connect ISP Migration Service",
    "description": "Hassle-free ISP switching service with full support and zero downtime",
    "provider": {
      "@type": "Organization",
      "name": "ABSA Connect"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "ISP Migration",
      "description": "Complete migration to ABSA Connect fibre service including cancellation of previous ISP"
    }
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[howToSchema, faqSchema, serviceSchema]}
      type="HowTo"
    />
  );
};

export default HowToSwitchSEO;