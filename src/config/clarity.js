import Clarity from '@microsoft/clarity';

export const CLARITY_PROJECT_ID = 'q60kgsmajq';

export const initClarity = () => {
  try {
    Clarity.init(CLARITY_PROJECT_ID);
  } catch (error) {
    console.error('Failed to initialize Clarity:', error);
  }
};

export const trackPageView = () => {
  try {
    // Generate a unique page ID based on the current path
    const customPageId = window.location.pathname;
    // Call identify for each page view to ensure optimal tracking
    Clarity.identify(null, null, customPageId);
  } catch (error) {
    console.error('Failed to track Clarity page view:', error);
  }
};

export const trackEvent = (eventName) => {
  try {
    Clarity.event(eventName);
  } catch (error) {
    console.error('Failed to track Clarity event:', error);
  }
};

export const setCustomTag = (key, value) => {
  try {
    Clarity.setTag(key, value);
  } catch (error) {
    console.error('Failed to set Clarity tag:', error);
  }
};