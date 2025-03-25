import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const defaultSEO = {
  siteName: 'Wondernet',
  titleTemplate: '%s | Wondernet - Premium Fibre Internet Provider South Africa',
  defaultTitle: 'Wondernet - Premium Fibre Internet Provider in South Africa | Fast, Reliable FTTH',
  defaultDescription: 'Experience enterprise-grade fibre internet in South Africa with Wondernet. Available on Vumatel, Openserve, Frogfoot, Octotel & Seacom networks. Unlimited, unshaped fibre packages from R599/month.',
  siteUrl: 'https://wondernet.co.za',
  twitterHandle: '@WondernetZA',
  language: 'en-ZA',
  keywords: [
    // Primary Keywords
    'fibre internet south africa',
    'ftth provider',
    'fibre packages',
    'home internet provider',
    'business internet provider',
    // Location Keywords
    'south african isp',
    'fibre coverage south africa',
    // Service Keywords
    'unlimited internet',
    'unshaped internet',
    'high-speed internet',
    'enterprise-grade internet',
    // Network Keywords
    'vumatel fibre',
    'openserve fibre',
    'frogfoot fibre',
    'octotel fibre',
    'seacom fibre',
    // Feature Keywords
    'mesh wifi',
    'wonderwatch monitoring',
    'smart home network',
    // Speed Keywords
    '10mbps fibre',
    '20mbps fibre',
    '50mbps fibre',
    '100mbps fibre',
    '200mbps fibre',
    '1gbps fibre'
  ].join(', ')
};

// URL normalization utility
const normalizeUrl = (url) => {
  try {
    // Create URL object for parsing
    const urlObj = new URL(url);
    
    // Force HTTPS
    urlObj.protocol = 'https:';
    
    // Remove trailing slashes
    urlObj.pathname = urlObj.pathname.replace(/\/+$/, '');
    
    // Remove 'index' from the end of paths
    urlObj.pathname = urlObj.pathname.replace(/\/index$/, '');
    
    // Remove default ports
    if (urlObj.port === '80' || urlObj.port === '443') {
      urlObj.port = '';
    }
    
    // Sort query parameters (if any) for consistency
    if (urlObj.search) {
      const searchParams = new URLSearchParams(urlObj.search);
      const sortedParams = new URLSearchParams([...searchParams.entries()].sort());
      urlObj.search = sortedParams.toString() ? `?${sortedParams.toString()}` : '';
    }
    
    // Remove hash fragments from canonical URLs
    urlObj.hash = '';
    
    return urlObj.toString();
  } catch (error) {
    console.warn('Error normalizing URL:', error);
    return url;
  }
};

const SEO = ({ 
  title,
  description,
  canonical,
  image,
  type = 'website',
  schema,
  noindex = false
}) => {
  const location = useLocation();
  const siteUrl = defaultSEO.siteUrl;
  
  // Check if we're on any production domain variation
  const isProduction = (() => {
    try {
      const hostname = window.location.hostname.toLowerCase();
      const productionDomains = [
        'wondernet.co.za',
        'www.wondernet.co.za'
      ];
      return productionDomains.includes(hostname);
    } catch (error) {
      console.warn('Error checking production status:', error);
      return false;
    }
  })();
  
  // Generate and normalize the page URL
  const pageUrl = (() => {
    try {
      if (!location) {
        console.warn('Location object not yet available');
        return siteUrl;
      }
      return normalizeUrl(`${siteUrl}${location.pathname || ''}${location.search || ''}`);
    } catch (error) {
      console.warn('Error generating page URL:', error);
      return siteUrl;
    }
  })();
  
  // Always use HTTPS for canonical URLs in production
  const canonicalUrl = (() => {
    try {
      if (!location) {
        console.warn('Location object not yet available');
        return siteUrl;
      }
      if (isProduction) {
        return `https://wondernet.co.za${location.pathname || ''}${location.search || ''}`;
      }
      return pageUrl;
    } catch (error) {
      console.warn('Error generating canonical URL:', error);
      return pageUrl;
    }
  })();
  
  // Use provided image or default OG image
  const ogImage = (() => {
    try {
      return image ? normalizeUrl(image) : normalizeUrl(`${siteUrl}/og-image.jpg`);
    } catch (error) {
      console.warn('Error generating OG image URL:', error);
      return `${siteUrl}/og-image.jpg`;
    }
  })();

  // Generate structured data
  const getStructuredData = () => {
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: defaultSEO.siteName,
      url: siteUrl,
      logo: normalizeUrl(`${siteUrl}/logo.png`),
      sameAs: [
        'https://www.facebook.com/WonderNetZA/',
        'https://twitter.com/WondernetZA',
        'https://linkedin.com/company/wondernet'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+27-XXX-XXX-XXXX',
        contactType: 'customer service',
        areaServed: 'ZA',
        availableLanguage: ['en']
      }
    };

    return schema || defaultSchema;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={defaultSEO.language} />
      <title>{title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.defaultTitle}</title>
      <meta name="description" content={description || defaultSEO.defaultDescription} />
      <meta name="keywords" content={defaultSEO.keywords} />
      
      {/* Canonical URL - always point to https://wondernet.co.za */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Force HTTPS in production */}
      {isProduction && (
        <meta 
          http-equiv="Content-Security-Policy" 
          content="upgrade-insecure-requests"
        />
      )}
      
      {/* Add noindex for non-production environments */}
      {(!isProduction || noindex) && (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:title" content={title || defaultSEO.defaultTitle} />
      <meta property="og:description" content={description || defaultSEO.defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content={defaultSEO.language} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />
      <meta name="twitter:title" content={title || defaultSEO.defaultTitle} />
      <meta name="twitter:description" content={description || defaultSEO.defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#7C3AED" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={defaultSEO.siteName} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEO;