import React, { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Users, Wifi, Monitor, Gamepad, Laptop, Video, Cloud, Zap, Check, X, Shield, Router, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent, trackClick } from '../../utils/analytics';
import RecommendSEO from '../../components/PageSEO/RecommendSEO';
import CoverageModal from '../../components/CoverageModal';
import RecommendHero from '../../components/RecommendHero';
import ContentDivider from '../../components/ContentDivider';
import transformedPackages from '../PackagesPage/packagesData';

const speedTiers = {
  entry: {
    name: 'Entry Level',
    range: [50, 100],
    description: 'Suitable for basic internet usage and HD streaming',
    idealFor: [
      'Small households (1-2 people)',
      'HD video streaming',
      'Basic web browsing & email',
      'Social media & video calls'
    ],
    typicalUsage: {
      amount: '500GB+',
      description: 'Typical monthly usage pattern - but remember, all our packages are truly unlimited with no caps or throttling'
    },
    unlimitedFeatures: [
      'No data caps ever',
      'No throttling',
      'No shaping',
      'Consistent speeds'
    ],
    features: [
      'True unlimited data',
      'Free installation',
      'Premium WiFi router included',
      'Uncapped & unshaped',
      'Expert support'
    ],
    startingPrice: 699
  },
  mid: {
    name: 'Mid Range',
    range: [100, 200],
    description: 'Ideal for families, 4K streaming and remote work',
    idealFor: [
      'Medium households (2-4 people)',
      '4K video streaming',
      'Work from home',
      'Online gaming'
    ],
    typicalUsage: {
      amount: '1TB+',
      description: 'Typical monthly usage pattern - but remember, all our packages are truly unlimited with no caps or throttling'
    },
    unlimitedFeatures: [
      'No data caps ever',
      'No throttling',
      'No shaping',
      'Consistent speeds'
    ],
    features: [
      'True unlimited data',
      'Free installation',
      'Premium WiFi router included',
      'Uncapped & unshaped',
      '24/7 Monitoring',
      'Expert support'
    ],
    startingPrice: 899
  },
  high: {
    name: 'High Speed',
    range: [200, 500],
    description: 'Perfect for heavy users, gaming and smart homes',
    idealFor: [
      'Large households (4-6 people)',
      'Multiple 4K streams',
      'Competitive gaming',
      'Large file transfers'
    ],
    typicalUsage: {
      amount: '2TB+',
      description: 'Typical monthly usage pattern - but remember, all our packages are truly unlimited with no caps or throttling'
    },
    unlimitedFeatures: [
      'No data caps ever',
      'No throttling',
      'No shaping',
      'Consistent speeds'
    ],
    features: [
      'True unlimited data',
      'Free installation',
      'Premium WiFi router included',
      'Uncapped & unshaped',
      '24/7 WonderWatch Monitoring',
      'Static IP as add-on'
    ],
    startingPrice: 1099
  },
  premium: {
    name: 'Premium',
    range: [500, 1000],
    description: 'Ultimate performance for demanding users',
    idealFor: [
      'Very large households (6+ people)',
      'Multiple 4K/8K streams',
      'Professional home office',
      'Content creation & streaming'
    ],
    typicalUsage: {
      amount: '3TB+',
      description: 'Typical monthly usage pattern - but remember, all our packages are truly unlimited with no caps or throttling'
    },
    unlimitedFeatures: [
      'No data caps ever',
      'No throttling',
      'No shaping',
      'Consistent speeds'
    ],
    features: [
      'True unlimited data',
      'Free installation',
      'Premium WiFi router included',
      'Uncapped & unshaped',
      'Expert support & WonderWatch',
      'Static IP as add-on',
    ],
    startingPrice: 1299
  }
};

const SpeedTierCard = ({ tier, speed, price, isRecommended, meetsRequirements, requiredSpeed, providers, onCheckCoverage }) => {
  const handleCardView = () => {
    trackEvent('speed_tier_viewed', {
      tier_name: tier.name,
      speed,
      price,
      is_recommended: isRecommended,
      meets_requirements: meetsRequirements,
      providers
    });
  };

  const handleCoverageCheck = () => {
    trackClick('coverage_check_button', 'recommend_page', {
      tier_name: tier.name,
      speed,
      price,
      is_recommended: isRecommended
    });
    onCheckCoverage();
  };

  return (
    <div
      className={`relative transform transition-all duration-500 hover:scale-105 ${
        isRecommended ? 'md:-mt-4' : ''
      }`}
      onMouseEnter={handleCardView}
    >
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
      isRecommended ? 'ring-2 ring-wondernet-600' : ''
    }`}>
      <div className={`p-6 ${
        isRecommended
          ? 'bg-gradient-to-br from-wondernet-600 to-wondernet-800 text-white'
          : 'bg-gray-50'
      }`}>
        {isRecommended && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-white text-wondernet-600 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              Recommended
            </span>
          </div>
        )}
        <div className="text-center">
          <h3 className={`text-2xl font-bold ${isRecommended ? 'text-white' : 'text-gray-900'}`}>
            {tier.name}
          </h3>
          <p className={`text-sm ${isRecommended ? 'text-white/80' : 'text-gray-500'}`}>
            {speed}Mbps Package
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-gray-600">{tier.description}</p>

        <div className="bg-wondernet-50 p-4 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="w-5 h-5 text-wondernet-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-wondernet-900 mb-1">Speed Information</h4>
              <p className="text-sm text-wondernet-700">
                {meetsRequirements
                  ? `This package provides ${speed}Mbps, which we recommend as a better alternative based on your requirements you've disclosed`
                  : `This package provides ${speed}Mbps, which is below your ideal ${requiredSpeed}Mbps requirement`}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Perfect For:</h4>
          <ul className="space-y-2">
            {tier.idealFor.map((item, i) => (
              <li key={i} className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="w-5 h-5 text-wondernet-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">Typical Monthly Usage: {tier.typicalUsage.amount}</h4>
              <p className="text-sm text-gray-600 mt-1">
                {tier.typicalUsage.description}
              </p>
            </div>
          </div>
        </div>

        {providers && providers.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Available Networks:</h4>
            <div className="flex flex-wrap gap-2">
              {providers.map((provider, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {provider}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Package Features:</h4>
          <ul className="space-y-2">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t text-center">
          <div className="text-sm text-gray-500">Starting from</div>
          <div className="text-3xl font-bold text-wondernet-600">
            R{price}
          </div>
          <div className="text-sm text-gray-500">per month</div>
        </div>

        <button
          onClick={onCheckCoverage}
          className={`w-full py-3 rounded-lg transition-colors ${
            isRecommended
              ? 'bg-wondernet-600 text-white hover:bg-wondernet-500'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Check Coverage & Availability
        </button>
      </div>
    </div>
  </div>
  );
};

const RecommendationInfoCard = ({ title, message, impact, recommendedTier }) => {
  const tierInfo = speedTiers[recommendedTier];
  
  return (
    <div className="bg-wondernet-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-wondernet-900 mb-2">{title}</h3>
      <p className="text-wondernet-700 mb-4">{message}</p>
      <div className="space-y-3 text-wondernet-600">
        <div className="flex items-start space-x-2">
          <Check className="h-5 w-5 text-wondernet-500 mt-0.5" />
          <p>For optimal performance and budget balance, we recommend {tierInfo.name} ({tierInfo.range[0]}-{tierInfo.range[1]}Mbps)</p>
        </div>
        {impact && (
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-wondernet-500 mt-0.5" />
            <p>{impact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Option = ({ value, label, description, icon, selected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`cursor-pointer rounded-xl p-6 transition-all duration-200 ${
      selected
        ? 'bg-gradient-to-br from-wondernet-900 to-wonderblue-800 text-white shadow-lg'
        : 'bg-white hover:bg-wondernet-50 border border-gray-200'
    }`}
    onClick={onClick}
  >
    <div className="flex flex-col items-center text-center space-y-2">
      {icon && <div className={selected ? 'text-white' : 'text-wondernet-600'}>{icon}</div>}
      <div className="font-medium">{label}</div>
      {description && (
        <div className={`text-sm ${selected ? 'text-white/80' : 'text-gray-500'}`}>
          {description}
        </div>
      )}
    </div>
  </motion.div>
);

const RecommendationWizard = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    householdSize: 1,
    devices: '1-3',
    activities: [],
    streamingQuality: 'hd',
    gamingType: null,
    budget: 'flexible'
  });
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);

  const steps = [
    {
      id: 'household',
      title: 'Tell us about your household',
      subtitle: 'This helps us understand your basic internet needs',
      options: [
        { value: 1, label: '1 Person', icon: <Users /> },
        { value: 2, label: '2 People', icon: <Users /> },
        { value: 3, label: '3 People', icon: <Users /> },
        { value: 4, label: '4 People', icon: <Users /> },
        { value: 5, label: '5+ People', icon: <Users /> }
      ],
      field: 'householdSize'
    },
    {
      id: 'devices',
      title: 'Connected Devices',
      subtitle: 'How many devices will be connected?',
      options: [
        { value: '1-3', label: '1-3 devices', icon: <Wifi /> },
        { value: '4-6', label: '4-6 devices', icon: <Wifi /> },
        { value: '7-10', label: '7-10 devices', icon: <Wifi /> },
        { value: '10+', label: '10+ devices', icon: <Wifi /> }
      ],
      field: 'devices'
    },
    {
      id: 'activities',
      title: 'Internet Activities',
      subtitle: 'What will you use the internet for?',
      options: [
        { value: 'streaming', label: 'Streaming', icon: <Monitor />, description: 'Netflix, YouTube, etc.' },
        { value: 'gaming', label: 'Gaming', icon: <Gamepad />, description: 'Online gaming' },
        { value: 'work', label: 'Work from Home', icon: <Laptop />, description: 'Video calls & cloud apps' },
        { value: 'backup', label: 'Cloud Backup', icon: <Cloud />, description: 'File storage & backup' }
      ],
      field: 'activities',
      multiple: true
    },
    {
      id: 'streaming',
      title: 'Streaming Quality',
      subtitle: 'What quality do you prefer for streaming?',
      options: [
        { value: 'sd', label: 'Standard Definition', description: 'Good for basic streaming' },
        { value: 'hd', label: 'High Definition', description: 'Recommended for most users' },
        { value: '4k', label: '4K Ultra HD', description: 'Best quality available' }
      ],
      field: 'streamingQuality',
      showIf: (answers) => answers.activities.includes('streaming')
    },
    {
      id: 'gaming',
      title: 'Gaming Type',
      subtitle: 'What type of gaming do you do?',
      options: [
        { value: 'casual', label: 'Casual Gaming', description: 'Mobile and casual games' },
        { value: 'competitive', label: 'Competitive Gaming', description: 'Fast-paced online games' }
      ],
      field: 'gamingType',
      showIf: (answers) => answers.activities.includes('gaming')
    },
    {
      id: 'budget',
      title: 'Monthly Budget',
      subtitle: 'What\'s your monthly budget?',
      options: [
        { value: 'entry', label: 'Entry Level', description: 'Up to R699' },
        { value: 'moderate', label: 'Moderate', description: 'Up to R899' },
        { value: 'premium', label: 'Premium', description: 'Up to R1299' },
        { value: 'flexible', label: 'Flexible', description: 'Show all options' }
      ],
      field: 'budget'
    }
  ];

  const calculateRequiredSpeed = useMemo(() => {
    const baseSpeedByHousehold = {
      1: 50,
      2: 100,
      3: 200,
      4: 300,
      5: 500
    };

    const deviceMultipliers = {
      '1-3': 1,
      '4-6': 1.5,
      '7-10': 2,
      '10+': 2.5
    };

    const activitySpeedRequirements = {
      streaming: {
        sd: 10,
        hd: 25,
        '4k': 50
      },
      gaming: {
        casual: 50,
        competitive: 100
      },
      work: 50,
      video: 25,
      backup: 50
    };

    let speed = baseSpeedByHousehold[answers.householdSize] || 50;
    speed *= deviceMultipliers[answers.devices] || 1;

    if (answers.activities.includes('streaming')) {
      speed += activitySpeedRequirements.streaming[answers.streamingQuality] || 25;
    }

    if (answers.activities.includes('gaming')) {
      speed += activitySpeedRequirements.gaming[answers.gamingType || 'casual'];
    }

    answers.activities.forEach(activity => {
      if (activity !== 'streaming' && activity !== 'gaming') {
        speed += activitySpeedRequirements[activity] || 0;
      }
    });

    return Math.ceil(speed);
  }, [answers]);

  const getSpeedTierRecommendation = (baseSpeed) => {
    // Determine appropriate speed tier
    let recommendedTier;
    if (baseSpeed <= 100) recommendedTier = 'entry';
    else if (baseSpeed <= 200) recommendedTier = 'mid';
    else if (baseSpeed <= 500) recommendedTier = 'high';
    else recommendedTier = 'premium';

    // Get budget limit
    const budgetLimits = {
      entry: 699,
      moderate: 899,
      premium: 1299,
      flexible: Infinity
    };
    const budgetLimit = budgetLimits[answers.budget] || Infinity;

    // Find packages within recommended tier and group by FNO
    const availablePackages = transformedPackages
      .filter(pkg => {
        const speedMbps = (pkg['Download speed (kbps)'] || 0) / 1024;
        return speedMbps >= speedTiers[recommendedTier].range[0] && 
               speedMbps <= speedTiers[recommendedTier].range[1];
      })
      .sort((a, b) => a.Price - b.Price);

    // Find budget-friendly packages and group by FNO
    const budgetPackages = transformedPackages
      .filter(pkg => pkg.Price <= budgetLimit)
      .sort((a, b) => {
        const speedA = (a['Download speed (kbps)'] || 0) / 1024;
        const speedB = (b['Download speed (kbps)'] || 0) / 1024;
        return speedB - speedA;
      });

    const budgetOption = budgetPackages[0];
    const recommendedOption = availablePackages[0];

    // Get unique providers for each option
    const budgetProviders = [...new Set(budgetPackages.map(pkg => pkg.Supplier))];
    const recommendedProviders = [...new Set(availablePackages.map(pkg => pkg.Supplier))];

    // Check for budget mismatch
    const budgetMismatch = recommendedOption && (!budgetOption || (budgetOption['Download speed (kbps)'] / 1024) < baseSpeed);

    const getBudgetTier = (speed) => {
      if (speed <= 100) return 'entry';
      if (speed <= 200) return 'mid';
      if (speed <= 500) return 'high';
      return 'premium';
    };

    return {
      recommendedTier,
      budgetOption: budgetOption && {
        speed: (budgetOption['Download speed (kbps)'] || 0) / 1024,
        price: budgetOption.Price,
        tier: speedTiers[getBudgetTier((budgetOption['Download speed (kbps)'] || 0) / 1024)],
        providers: budgetProviders
      },
      recommendedOption: recommendedOption && {
        speed: (recommendedOption['Download speed (kbps)'] || 0) / 1024,
        price: recommendedOption.Price,
        tier: speedTiers[recommendedTier],
        providers: recommendedProviders
      },
      budgetMismatch
    };
  };

  const renderRecommendations = () => {
    const requiredSpeed = calculateRequiredSpeed;
    const recommendation = getSpeedTierRecommendation(requiredSpeed);
    
    if (!recommendation.recommendedOption) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">No suitable packages available for your criteria.</p>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <RecommendationInfoCard
          title="Speed Requirements"
          message={`Based on your usage, we recommend a ${requiredSpeed}+ Mbps connection`}
          impact={recommendation.budgetMismatch ? 
            "Note: Your budget selection may limit access to recommended speeds" : 
            "This package meets your speed requirements"}
          recommendedTier={recommendation.recommendedTier}
        />

        {recommendation.budgetMismatch ? (
          <>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-wondernet-900 mb-2">
                We found two options for you:
              </h3>
              <p className="text-gray-600">
                We've selected the best package within your budget, and we're also showing you our recommended package that better matches your speed requirements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {recommendation.budgetOption && (
                <SpeedTierCard
                  tier={recommendation.budgetOption.tier}
                  speed={recommendation.budgetOption.speed}
                  price={recommendation.budgetOption.price}
                  isRecommended={false}
                  meetsRequirements={recommendation.budgetOption.speed >= requiredSpeed}
                  requiredSpeed={requiredSpeed}
                  providers={recommendation.budgetOption.providers}
                  onCheckCoverage={() => setIsCoverageModalOpen(true)}
                />
              )}
              
              <SpeedTierCard
                tier={recommendation.recommendedOption.tier}
                speed={recommendation.recommendedOption.speed}
                price={recommendation.recommendedOption.price}
                isRecommended={true}
                meetsRequirements={true}
                requiredSpeed={requiredSpeed}
                providers={recommendation.recommendedOption.providers}
                onCheckCoverage={() => setIsCoverageModalOpen(true)}
              />
            </div>
          </>
        ) : (
          <SpeedTierCard
            tier={recommendation.recommendedOption.tier}
            speed={recommendation.recommendedOption.speed}
            price={recommendation.recommendedOption.price}
            isRecommended={true}
            meetsRequirements={true}
            requiredSpeed={requiredSpeed}
            providers={recommendation.recommendedOption.providers}
            onCheckCoverage={() => setIsCoverageModalOpen(true)}
          />
        )}
      </div>
    );
  };

  const currentStep = typeof step === 'number' ? steps[step] : null;
  
  const canProceed = step === 'results' ? true : currentStep ? (
    currentStep.multiple 
      ? answers[currentStep.field]?.length > 0 
      : answers[currentStep.field] !== null && answers[currentStep.field] !== undefined
  ) : false;

  const handleNext = () => {
    let nextStep = step + 1;
    
    while (nextStep < steps.length && steps[nextStep].showIf && !steps[nextStep].showIf(answers)) {
      nextStep++;
    }

    if (nextStep < steps.length) {
      setStep(nextStep);
      trackEvent('recommendation_step_completed', {
        step_number: step + 1,
        step_name: steps[step].id,
        answers: answers
      });
    } else {
      setStep('results');
      trackEvent('recommendation_completed', {
        final_answers: answers
      });
    }
  };

  const handlePrevious = () => {
    let prevStep = step - 1;
    
    while (prevStep >= 0 && steps[prevStep].showIf && !steps[prevStep].showIf(answers)) {
      prevStep--;
    }

    setStep(Math.max(0, prevStep));
  };

  const handleSelect = (value) => {
    setAnswers(prev => {
      const newAnswers = {
        ...prev,
        [currentStep.field]: currentStep.multiple
          ? prev[currentStep.field].includes(value)
            ? prev[currentStep.field].filter(v => v !== value)
            : [...prev[currentStep.field], value]
          : value
      };

      trackEvent('recommendation_answer_selected', {
        step: currentStep.id,
        field: currentStep.field,
        value: value,
        is_multiple: currentStep.multiple
      });

      return newAnswers;
    });
  };

  return (
    <>
      <RecommendSEO />
      <div className="min-h-screen bg-gray-50">
        <RecommendHero step={step} steps={steps} />

        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {step === 'results' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-wondernet-900 mb-6">
                    Your Perfect Package Match
                  </h2>
                  <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Based on your needs, we've analyzed our packages to find the perfect match.
                  </p>

                  {renderRecommendations()}

                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setStep(0)}
                      className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Start Over
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="mb-8">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-gradient-to-r from-wondernet-600 to-wonderblue-600 rounded-full transition-all duration-300"
                      style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-600 text-right">
                    Step {step + 1} of {steps.length}
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-wondernet-900 mb-2">
                    {currentStep.title}
                  </h2>
                  <p className="text-gray-600">{currentStep.subtitle}</p>
                </div>

                <div className={`grid gap-4 ${
                  currentStep.options.length > 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                }`}>
                  {currentStep.options.map((option) => (
                    <Option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      icon={option.icon}
                      selected={currentStep.multiple
                        ? answers[currentStep.field].includes(option.value)
                        : answers[currentStep.field] === option.value
                      }
                      onClick={() => handleSelect(option.value)}
                    />
                  ))}
                </div>

                <div className="flex justify-between mt-8 pt-8 border-t">
                  <button
                    onClick={handlePrevious}
                    className={`flex items-center px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ${
                      step === 0 ? 'invisible' : ''
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canProceed}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                      canProceed
                        ? 'bg-gradient-to-r from-wondernet-600 to-wonderblue-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {step === steps.length - 1 ? 'See Recommendations' : 'Next'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <ContentDivider />

        <CoverageModal
          isOpen={isCoverageModalOpen}
          onClose={() => setIsCoverageModalOpen(false)}
        />
      </div>
    </>
  );
};

export default RecommendationWizard;