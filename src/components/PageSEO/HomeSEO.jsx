import React from 'react';
import SEO from '../SEO';

// Helper function to check promo period - keeping in sync with App.jsx
const isPromoPeriod = () => {
  const now = new Date();
  const startDate = new Date('2023-11-23T00:00:00+02:00');
  const endDate = new Date('2024-12-31T23:59:59+02:00');
  return now >= startDate && now <= endDate;
};

// Define core features with SEO-optimized descriptions
const coreFeatures = [
  {
    "@type": "PropertyValue",
    "name": "Enterprise-Grade Network",
    "value": "High-performance fibre infrastructure with 99.9% uptime guarantee"
  },
  {
    "@type": "PropertyValue",
    "name": "WonderWatch™ Monitoring",
    "value": "24/7 AI-powered network monitoring and proactive support"
  },
  {
    "@type": "PropertyValue",
    "name": "Expert Support",
    "value": "Dedicated South African support team available 7 days a week"
  },
  {
    "@type": "PropertyValue",
    "name": "Premium Equipment",
    "value": "Free enterprise-grade mesh WiFi router for whole-home coverage"
  },
  {
    "@type": "PropertyValue",
    "name": "Network Coverage",
    "value": "Available on Vumatel, Openserve, Frogfoot, Octotel, and Seacom networks"
  }
];

const HomeSEO = () => {
  const promoActive = isPromoPeriod();
  
  // Dynamic title and description based on promo period
  const pageTitle = promoActive
    ? "Premium Fibre Internet Provider in South Africa | Up to R5,000 Free Installation"
    : "Premium Fibre Internet Provider in South Africa | Fast, Reliable Home & Business Internet";

  const pageDescription = promoActive
    ? "Experience South Africa's premium fibre internet with Wondernet. Get unlimited, unshaped fibre from R599/month with FREE installation worth up to R5,000. Available on Vumatel, Openserve, Frogfoot, Octotel & Seacom networks."
    : "Experience South Africa's premium fibre internet with Wondernet. Unlimited, unshaped fibre packages from R599/month. Enterprise-grade network available on all major fibre providers including Vumatel, Openserve & Frogfoot.";

  // Base organization schema with enhanced SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wondernet",
    "description": "Leading fibre internet service provider in South Africa, offering enterprise-grade FTTH solutions for homes and businesses",
    "url": "https://wondernet.co.za",
    "logo": "https://apextech.group/wondernet-logo-colour.png",
    "sameAs": [
      "https://www.facebook.com/WonderNetZA/",
      "https://twitter.com/WondernetZA",
      "https://wa.me/27600672028"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "South Africa"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wondernet.co.za/coverage?address={address}"
      },
      "query-input": "required name=address"
    }
  };

  // Product schema for our internet service
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wondernet Fibre Internet",
    "description": "High-speed fibre internet for South African homes and businesses, with speeds up to 1Gbps",
    "brand": {
      "@type": "Brand",
      "name": "Wondernet"
    },
    "category": "Internet Service Provider",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "lowPrice": "599",
      "highPrice": "1599",
      "offerCount": "30+",
      "offers": [
        {
          "@type": "Offer",
          "name": "Entry-Level Fibre",
          "description": "10Mbps Uncapped Fibre Internet",
          "price": "599",
          "priceCurrency": "ZAR"
        },
        {
          "@type": "Offer",
          "name": "Premium Fibre",
          "description": "1Gbps Uncapped Fibre Internet",
          "price": "1599",
          "priceCurrency": "ZAR"
        }
      ]
    },
    "additionalProperty": coreFeatures
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[organizationSchema, productSchema]}
      type="website"
    />
  );
};

export default HomeSEO;
