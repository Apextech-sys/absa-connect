import React from 'react';
import SEO from '../SEO';

const MeshAdvisorSEO = () => {
  const pageTitle = "WiFi Mesh Coverage Calculator | Free Home WiFi Network Planner South Africa";
  const pageDescription = "Plan your perfect home WiFi network with our free mesh coverage calculator. Get personalized recommendations for WiFi 6 mesh systems based on your home size and layout. Expert advice for South African homes.";

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Wondernet Mesh Coverage Advisor",
    "applicationCategory": "NetworkingApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ZAR"
    },
    "description": "Free online tool to calculate optimal WiFi mesh coverage for your home, with personalized recommendations for WiFi 6 mesh systems.",
    "featureList": [
      "Home size and layout analysis",
      "WiFi 6 mesh system recommendations",
      "Coverage optimization",
      "Device capacity planning",
      "Installation guidance"
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Plan Your Home WiFi Mesh Network",
    "description": "Step-by-step guide to planning optimal WiFi coverage for your home",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "ZAR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Home Details",
        "text": "Provide your home's size, number of floors, and layout information"
      },
      {
        "@type": "HowToStep",
        "name": "Specify Usage Requirements",
        "text": "Tell us about your internet usage, number of devices, and specific needs"
      },
      {
        "@type": "HowToStep",
        "name": "Review Recommendations",
        "text": "Get personalized mesh system recommendations and optimal placement guidance"
      },
      {
        "@type": "HowToStep",
        "name": "Implementation Guide",
        "text": "Receive detailed instructions for setting up your mesh network"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Wondernet Mesh Coverage Calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is WiFi 6 mesh networking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WiFi 6 mesh networking creates a seamless, high-performance wireless network throughout your home using multiple access points. It offers faster speeds, better coverage, and supports more devices than traditional WiFi routers."
        }
      },
      {
        "@type": "Question",
        "name": "How many mesh points do I need for my home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The number of mesh points depends on your home's size and layout. Generally, one mesh point covers 80-120 square meters. Our calculator will recommend the optimal number based on your specific situation."
        }
      },
      {
        "@type": "Question",
        "name": "Do thick walls affect WiFi mesh coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, thick walls, especially those made of concrete or metal, can affect WiFi signals. Our advisor takes wall materials into account when calculating coverage and recommending mesh point placement."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use mesh WiFi with any internet provider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, mesh WiFi systems work with any internet service provider in South Africa. They simply replace or enhance your existing WiFi router setup."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wondernet.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://wondernet.co.za/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mesh Coverage Advisor",
        "item": "https://wondernet.co.za/mesh-advisor"
      }
    ]
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[softwareSchema, howToSchema, faqSchema, breadcrumbSchema]}
      type="WebApplication"
    />
  );
};

export default MeshAdvisorSEO;
