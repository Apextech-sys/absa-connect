import React from 'react';
import SEO from '../SEO';

const SupportSEO = () => {
  const pageTitle = "24/7 Fibre Internet Support | ABSA Connect Customer Service";
  const pageDescription = "Get expert support for your fibre internet connection. Our South African support team is available 24/7 via WhatsApp, email, or phone. Featuring AI-powered ABSA Monitor™ for proactive issue resolution.";

  // Service schema for support
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "CustomerService",
    "name": "ABSA Connect Customer Support",
    "description": "24/7 technical support for fibre internet customers, featuring AI-powered monitoring and proactive issue resolution",
    "availableLanguage": ["en"],
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+27600672028",
        "url": "https://wa.me/27600672028",
        "availableLanguage": ["en"],
        "contactOption": ["TollFree", "HearingImpairedSupported"]
      }
    ],
    "serviceOutput": {
      "@type": "Thing",
      "name": "Technical Support Resolution",
      "description": "Fast resolution of internet connectivity issues, network optimization, and hardware support"
    }
  };

  // FAQ Schema for support questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I contact ABSA Connect support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our support team is available 24/7 via WhatsApp at +27 60 067 2028, email at support@absaconnect.co.za, or through our online chat. For immediate assistance, WhatsApp is recommended."
        }
      },
      {
        "@type": "Question",
        "name": "What is ABSA Monitor™?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABSA Monitor™ is our AI-powered network monitoring system that proactively identifies and resolves potential issues before they affect your connection. It monitors your line 24/7 and automatically alerts our support team if any problems are detected."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer on-site support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free on-site support when necessary. Our technicians can assist with router setup, network optimization, and resolving complex connectivity issues that can't be fixed remotely."
        }
      }
    ]
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[serviceSchema, faqSchema]}
      type="CustomerService"
    />
  );
};

export default SupportSEO;
