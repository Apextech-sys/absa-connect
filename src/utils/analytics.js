/**
 * Utility functions for analytics tracking (GTM and Microsoft Clarity)
 */
import gtmConfig from '../config/gtm';
import { trackPageView as clarityTrackPage, trackEvent as clarityTrackEvent } from '../config/clarity';

// Debug flag for development
const isDebug = process.env.NODE_ENV === 'development';

/**
 * Verify GTM is loaded correctly
 */
const verifyGTM = () => {
  if (isDebug) {
    if (window.google_tag_manager && window.google_tag_manager[gtmConfig.gtmId]) {
      console.log('GTM loaded successfully:', gtmConfig.gtmId);
    } else {
      console.warn('GTM not loaded. Check implementation.');
    }
  }
};

/**
 * Push an event to the dataLayer
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Additional data to send with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  // Track in GTM
  if (window.dataLayer) {
    const eventPayload = {
      event: eventName,
      ...eventData,
      timestamp: new Date().toISOString()
    };
    window.dataLayer.push(eventPayload);
    
    if (isDebug) {
      console.log('GTM Event:', eventPayload);
    }
  } else if (isDebug) {
    console.warn('dataLayer not found. Check GTM implementation.');
  }

  // Track in Clarity
  clarityTrackEvent(eventName);
};

/**
 * Track form submissions
 * @param {string} formName - Name/identifier of the form
 * @param {Object} formData - Form data to track
 */
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent(gtmConfig.events.formSubmit, {
    form_name: formName,
    form_data: formData
  });
};

/**
 * Track button/link clicks
 * @param {string} label - Label/identifier for the clicked element
 * @param {string} category - Category of the interaction (e.g., 'navigation', 'cta')
 */
export const trackClick = (label, category = 'interaction') => {
  trackEvent(gtmConfig.events.click, {
    click_label: label,
    click_category: category
  });
};

/**
 * Track page views manually (if needed)
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
  // Track in GTM
  trackEvent(gtmConfig.events.pageView, {
    page: {
      path,
      title
    }
  });

  // Track in Clarity
  clarityTrackPage();
};

// Verify GTM on initial load
if (typeof window !== 'undefined') {
  window.addEventListener('load', verifyGTM);
}

export default {
  trackEvent,
  trackFormSubmission,
  trackClick,
  trackPageView
};