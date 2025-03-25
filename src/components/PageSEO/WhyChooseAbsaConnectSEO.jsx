import React from 'react';
import SEO from '../SEO';

const WhyChooseAbsaConnectSEO = () => {
  const pageTitle = "Why Choose ABSA Connect | South Africa's Premium Internet Provider";
  const pageDescription = "Experience the ABSA Connect difference: Banking-grade infrastructure, AI-powered monitoring, and award-winning support. Join thousands of satisfied customers.";

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABSA Connect",
    "url": "https://absaconnect.co.za",
    "logo": "https://absaconnect.co.za/absa-logo.png",
    "description": "South Africa's premium internet service provider offering banking-grade connectivity and support",
    "sameAs": [
      "https://facebook.com/absaconnect",
      "https://twitter.com/absaconnect",
      "https://linkedin.com/company/absaconnect"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27600672028",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  };

  // Product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ABSA Connect Fibre Internet",
    "description": "Premium fibre internet service with banking-grade security and 24/7 AI monitoring",
    "brand": {
      "@type": "Brand",
      "name": "ABSA Connect"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "lowPrice": "499",
      "highPrice": "1499",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1245"
    }
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes ABSA Connect different from other ISPs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABSA Connect offers banking-grade infrastructure, AI-powered monitoring with ABSA Monitor™, and an award-winning support team available 7 days a week. Our custom technology stack is optimized for South African internet conditions, providing unmatched reliability and performance."
        }
      },
      {
        "@type": "Question",
        "name": "What is ABSA Monitor™?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABSA Monitor™ is our proprietary AI-powered monitoring system that provides 24/7 proactive connection monitoring. It automatically detects and resolves potential issues before they affect your connection, ensuring optimal performance at all times."
        }
      },
      {
        "@type": "Question",
        "name": "Is ABSA Connect available in my area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABSA Connect is available on all major fibre networks across South Africa. You can check coverage in your area using our coverage checker on the website."
        }
      }
    ]
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[organizationSchema, productSchema, faqSchema]}
      type="Organization"
    />
  );
};

export default WhyChooseAbsaConnectSEO;