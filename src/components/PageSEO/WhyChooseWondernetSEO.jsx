import React from 'react';
import SEO from '../SEO';

const WhyChooseWondernetSEO = () => {
  const pageTitle = "Why Choose Wondernet | Leading Fibre ISP in South Africa";
  const pageDescription = "Discover why Wondernet is South Africa's premium fibre ISP. Enterprise-grade network, free installation, premium mesh WiFi router, and 24/7 AI-powered monitoring. Experience the Wondernet difference.";

  // Organization schema with detailed features
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wondernet",
    "description": "Premium fibre internet service provider in South Africa, offering enterprise-grade connectivity with innovative features",
    "url": "https://wondernet.co.za",
    "logo": "https://apextech.group/wondernet-logo-colour.png",
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "award": [
      {
        "@type": "Award",
        "name": "Enterprise-Grade Network Quality",
        "description": "99.9% uptime guarantee with redundant infrastructure"
      },
      {
        "@type": "Award",
        "name": "Customer Service Excellence",
        "description": "24/7 expert support with proactive monitoring"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wondernet Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Fibre Internet",
            "description": "Uncapped, unshaped fibre with speeds up to 1Gbps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WonderWatch™ Monitoring",
            "description": "AI-powered network monitoring and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Equipment",
            "description": "Free enterprise-grade mesh WiFi router"
          }
        }
      ]
    }
  };

  // FAQ Schema for differentiation points
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Wondernet different from other ISPs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wondernet stands out with our enterprise-grade network (99.9% uptime), free premium mesh WiFi router, AI-powered WonderWatch™ monitoring, 24/7 expert support, and no-contract flexibility. We focus on quality and customer experience above all."
        }
      },
      {
        "@type": "Question",
        "name": "What is WonderWatch™ and how does it benefit me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WonderWatch™ is our exclusive AI-powered monitoring system that proactively identifies and resolves network issues before they affect your connection. It ensures optimal performance 24/7 and alerts our support team automatically if any problems are detected."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Wondernet considered a premium ISP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our premium status comes from our enterprise-grade infrastructure, advanced features like WonderWatch™, premium equipment (free ASUS mesh router), expert support, and commitment to service quality. We invest in the best technology to deliver superior internet experiences."
        }
      }
    ]
  };

  // Review schema showcasing customer satisfaction
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "InternetService",
      "name": "Wondernet Fibre Internet",
      "provider": {
        "@type": "Organization",
        "name": "Wondernet"
      }
    },
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "500+",
    "reviewCount": "450+"
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[organizationSchema, faqSchema, reviewSchema]}
      type="Organization"
    />
  );
};

export default WhyChooseWondernetSEO;
