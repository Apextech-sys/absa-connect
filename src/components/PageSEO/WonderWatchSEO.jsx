import React from 'react';
import SEO from '../SEO';

const WonderWatchSEO = () => {
  const pageTitle = "WonderWatch™ AI Network Monitoring | 24/7 Fibre Connection Monitoring";
  const pageDescription = "Experience proactive fibre internet monitoring with WonderWatch™. Our AI-powered system monitors your connection 24/7, automatically detecting and resolving issues before they affect you. Exclusive to Wondernet customers.";

  // Product schema for WonderWatch
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WonderWatch™ Network Monitoring",
    "description": "AI-powered network monitoring system that proactively identifies and resolves internet connectivity issues",
    "brand": {
      "@type": "Brand",
      "name": "Wondernet"
    },
    "category": "Network Monitoring Service",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock",
      "description": "Included free with all Wondernet fibre packages"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Monitoring Coverage",
        "value": "24/7 real-time monitoring"
      },
      {
        "@type": "PropertyValue",
        "name": "Response Time",
        "value": "Instant automated response to detected issues"
      },
      {
        "@type": "PropertyValue",
        "name": "AI Capabilities",
        "value": "Predictive issue detection, automated troubleshooting"
      },
      {
        "@type": "PropertyValue",
        "name": "Integration",
        "value": "Seamless integration with support systems"
      }
    ]
  };

  // Software Application schema for technical details
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WonderWatch™ Monitoring System",
    "applicationCategory": "NetworkMonitoring",
    "operatingSystem": "Cloud-based",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ZAR"
    },
    "featureList": [
      "Real-time connection monitoring",
      "Automated issue detection",
      "Predictive maintenance",
      "Performance optimization",
      "Instant alert system",
      "Historical performance tracking"
    ]
  };

  // FAQ Schema for WonderWatch questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is WonderWatch™ and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WonderWatch™ is our AI-powered network monitoring system that continuously monitors your fibre connection. It uses advanced algorithms to detect potential issues before they affect your service, automatically initiates fixes, and alerts our support team if needed."
        }
      },
      {
        "@type": "Question",
        "name": "What types of issues can WonderWatch™ detect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WonderWatch™ can detect a wide range of issues including connection drops, speed degradation, latency spikes, network congestion, and hardware problems. It monitors both your line quality and equipment performance 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "How does WonderWatch™ benefit me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WonderWatch™ ensures optimal internet performance by preventing issues before they occur, reducing downtime, and maintaining consistent speeds. It's like having a personal network engineer monitoring your connection 24/7, completely free with your Wondernet package."
        }
      }
    ]
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[productSchema, softwareSchema, faqSchema]}
      type="Product"
    />
  );
};

export default WonderWatchSEO;