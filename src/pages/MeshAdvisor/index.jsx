import React, { useState, useRef } from 'react';
import MeshHero from '../../components/MeshHero';
import ContentDivider from '../../components/ContentDivider';
import MeshAdvisorSEO from '../../components/PageSEO/MeshAdvisorSEO';
import { calculateRecommendation } from './utils/meshCalculations';
import {
  HomeSize,
  CPELocation,
  Rooms,
  Layout,
  CoverageAreas,
  Devices,
  Generating,
  Results
} from './components/steps';

/**
 * ABSA Connect Mesh Advisor page
 * Helps users determine the optimal mesh network setup for their home
 */
const MeshAdvisor = () => {
  const [step, setStep] = useState('size');
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    homeSize: '',
    cpeLocation: '',
    rooms: {
      bedroom: 0,
      bathroom: 0,
      lounge: 0,
      kitchen: 0,
      office: 0,
      otherRoom: 0
    },
    floors: 1,
    wallsBetweenPoints: 0,
    importantCoverageAreas: [],
    devices: {
      computers: 0,
      phones: 0,
      tvs: 0,
      smarthome: 0
    },
    usage: {
      streaming: false,
      gaming: false,
      workFromHome: false
    },
    area: 0,
    minArea: 0,
    maxArea: 0
  });
  const [recommendation, setRecommendation] = useState(null);

  const steps = [
    'size',
    'cpeLocation',
    'rooms',
    'layout',
    'coverage',
    'devices',
    'generating',
    'results'
  ];

  /**
   * Simulate loading and calculate recommendation
   */
  const simulateLoading = async () => {
    setStep('generating');
    const delay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
    await new Promise(resolve => setTimeout(resolve, delay));
    const result = calculateRecommendation(formData);
    setRecommendation(result);
    setStep('results');
  };

  /**
   * Scroll to form and start the advisor
   */
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setStep('size');
  };

  /**
   * Render the current step
   */
  const renderStep = () => {
    switch (step) {
      case 'size':
        return <HomeSize formData={formData} setFormData={setFormData} setStep={setStep} />;
      case 'cpeLocation':
        return <CPELocation formData={formData} setFormData={setFormData} setStep={setStep} />;
      case 'rooms':
        return <Rooms formData={formData} setFormData={setFormData} setStep={setStep} />;
      case 'layout':
        return <Layout formData={formData} setFormData={setFormData} setStep={setStep} />;
      case 'coverage':
        return <CoverageAreas formData={formData} setFormData={setFormData} simulateLoading={simulateLoading} />;
      case 'devices':
        return <Devices formData={formData} setFormData={setFormData} simulateLoading={simulateLoading} />;
      case 'generating':
        return <Generating />;
      case 'results':
        return <Results formData={formData} recommendation={recommendation} />;
      default:
        return null;
    }
  };

  return (
    <>
      <MeshAdvisorSEO />
      <div className="min-h-screen bg-gray-900">
        <MeshHero onStartAnalysis={scrollToForm} />

        {/* Main Content - Centered */}
        <div ref={formRef} className="w-full max-w-4xl mx-auto px-8 py-12">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-absa-600/20 text-white">
            {renderStep()}
          </div>
        </div>

        {/* Content Divider - Full Width */}
        <div className="w-full">
          <ContentDivider />
        </div>
      </div>
    </>
  );
};

export default MeshAdvisor;