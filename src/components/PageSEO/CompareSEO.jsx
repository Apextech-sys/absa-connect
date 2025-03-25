import React from 'react';
import SEO from '../SEO';

const CompareSEO = () => {
  const pageTitle = "Compare Fibre Internet Packages in South Africa | ISP Speed & Price Comparison";
  const pageDescription = "Compare South African fibre internet packages side by side. Find the best fibre deals from Wondernet, with transparent pricing, speeds, and features. Easy comparison tool for home and business fibre.";

  // Define comparison tool schema
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Wondernet Fibre Package Comparison Tool",
    "applicationCategory": "InternetServiceComparison",
    "description": "Interactive tool to compare fibre internet packages in South Africa, featuring speed, price, and feature comparisons across different networks",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "lowPrice": "599",
      "highPrice": "1599",
      "offerCount": "30+",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Side-by-side package comparison",
      "Real-time pricing updates",
      "Network coverage checker",
      "Speed vs price analysis",
      "Feature comparison matrix"
    ]
  };

  // FAQ Schema for common comparison questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I compare fibre packages in South Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our comparison tool to easily compare fibre packages side by side. You can compare speeds, prices, and features across different packages. All our packages include free installation, premium router, and 24/7 support."
        }
      },
      {
        "@type": "Question",
        "name": "What should I look for when comparing fibre packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider download and upload speeds, monthly cost, installation fees, contract length, and included features. Wondernet offers uncapped, unshaped packages with no hidden costs and includes premium mesh WiFi routers."
        }
      },
      {
        "@type": "Question",
        "name": "Which fibre networks does Wondernet support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wondernet provides services on all major South African fibre networks including Vumatel, Openserve, Frogfoot, Octotel, and Seacom. Check coverage in your area using our coverage checker."
        }
      }
    ]
  };

  return (
    <SEO
      title={pageTitle}
      description={pageDescription}
      schema={[toolSchema, faqSchema]}
      type="WebApplication"
    />
  );
};

export default CompareSEO;
