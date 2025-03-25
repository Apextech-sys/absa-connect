import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import QuickLinks from './components/QuickLinks';
import gtmConfig from './config/gtm';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const HowToSwitch = React.lazy(() => import('./pages/HowToSwitch'));
const Coverage = React.lazy(() => import('./pages/Coverage'));
const Support = React.lazy(() => import('./pages/Support'));
const PackagesPage = React.lazy(() => import('./pages/PackagesPage'));
const ComparePackagesPage = React.lazy(() => import('./pages/Compare'));
const RecommendPage = React.lazy(() => import('./pages/Recommend/index'));
const ABSAMonitor = React.lazy(() => import('./pages/ABSAMonitor'));
const MeshAdvisor = React.lazy(() => import('./pages/MeshAdvisor'));
const WhyChooseAbsaConnect = React.lazy(() => import('./pages/WhyChooseAbsaConnect'));
const TermsAndConditions = React.lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const AcceptableUsePolicy = React.lazy(() => import('./pages/AcceptableUsePolicy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Promo date checker
const isPromoPeriod = () => {
  // Create date objects for SAST (UTC+2)
  const now = new Date();
  const startDate = new Date('2023-11-23T00:00:00+02:00'); // Start of promo period
  const endDate = new Date('2024-12-31T23:59:59+02:00'); // End of promo period
  
  // For testing - uncomment to always show promo
  // return true;
  
  // Check if the current date is within the promo period
  return now >= startDate && now <= endDate;
};

// Route change tracker component
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view in both GTM and Clarity
    import('./utils/analytics').then(analytics => {
      analytics.trackPageView(location.pathname, document.title);
    });
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize Google Tag Manager
    TagManager.initialize(gtmConfig);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen">
            <Navigation />
            <QuickLinks />
            <RouteChangeTracker />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/switch" element={<HowToSwitch />} />
                <Route path="/coverage" element={<Coverage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/packages" element={<PackagesPage />} />
                <Route path="/compare" element={<ComparePackagesPage />} />
                <Route path="/recommend" element={<RecommendPage />} />
                <Route path="/absa-monitor" element={<ABSAMonitor />} />
                <Route path="/mesh-advisor" element={<MeshAdvisor />} />
                <Route path="/why-choose-absa-connect" element={<WhyChooseAbsaConnect />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;