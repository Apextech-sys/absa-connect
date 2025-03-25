import React from 'react';
import SEO from '../SEO';

const PackagesSEO = () => {
  const pageTitle = "Fibre Internet Packages South Africa | Uncapped Home & Business Fibre";
  const pageDescription = "Browse our range of uncapped fibre packages in South Africa. High-speed internet from R599/month with free installation and premium router. Available on Vumatel, Openserve, and other major networks.";

  // Product schema for fibre packages
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wondernet Fibre Internet Packages",
    "description": "High-speed, uncapped fibre internet packages for South African homes and businesses, featuring free installation and premium mesh WiFi router",
    "brand": {
      "@type": "Brand",
      "name": "Wondernet"
    },
    "category": "Internet Service",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "lowPrice": "599",
      "highPrice": "1599",
      "offerCount": "30+",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Wondernet",
        "url": "https://wondernet.co.za"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Speed Range",
        "value": "10Mbps to 1Gbps"
      },
      {
        "@type": "PropertyValue",
        "name": "Coverage",
        "value": "Available on all major South African fibre networks"
      },
      {
        "@type": "PropertyValue",
        "name": "Included Features",
        "value": "Free installation, premium router, 24/7 support, WonderWatch™ monitoring"
      }
    ]
  };

  // Performance metrics schema
  const performanceSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Wondernet Network Performance Metrics",
    "description": "Key performance indicators for Wondernet's fibre network",
    "provider": {
      "@type": "Organization",
      "name": "Wondernet"
    },
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Network Uptime",
        "value": "99.9%",
        "unitText": "percentage"
      },
      {
        "@type": "PropertyValue",
        "name": "Average Installation Time",
        "value": "7-14 days",
        "unitText": "days"
      },
      {
        "@type": "PropertyValue",
        "name": "Support Response Time",
        "value": "< 15 minutes",
        "unitText": "minutes"
      },
      {
        "@type": "PropertyValue",
        "name": "Customer Satisfaction",
        "value": "4.8/5",
        "unitText": "rating"
      }
    ]
  };

  // FAQ Schema for package-related questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's included in Wondernet fibre packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Wondernet fibre packages include free installation (worth up to R5,000), a premium mesh WiFi router, uncapped data, no throttling, 24/7 support, and WonderWatch™ AI network monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "Which fibre speed package do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For basic browsing and streaming, 25-50Mbps is sufficient. For gaming or working from home, consider 50-100Mbps. For large households or 4K streaming, we recommend 100Mbps+. All packages are uncapped and unshaped."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a contract or hidden costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No contracts or hidden costs. Your monthly fee includes everything: line rental, router, installation, and support. You can upgrade, downgrade, or cancel anytime."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover in South Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide service on all major fibre networks including Vumatel, Openserve, Frogfoot, Octotel, and Seacom. Check coverage for your specific address using our online coverage checker."
        }
      }
    ]
  };

  // Review aggregation schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Product",
      "name": "Wondernet Fibre Packages",
      "brand": {
        "@type": "Brand",
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
      schema={[productSchema, performanceSchema, faqSchema, reviewSchema]}
      type="Product"
    />
  );
};

export default PackagesSEO;
