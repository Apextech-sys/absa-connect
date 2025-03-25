import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Wifi, Shield, Zap, Router } from 'lucide-react';
import CoverageModal from '../../components/CoverageModal';
import PackageCard from '../../components/PackageCard';
import transformedPackages from './packagesData';
import SectionDivider from '../../components/SectionDivider';
import PackagesSEO from '../../components/PageSEO/PackagesSEO';
import { trackEvent } from '../../utils/analytics';

const PackagesPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedFNO, setSelectedFNO] = useState(searchParams.get('fno') || 'all');
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('all');

  const speedTiers = {
    entry: { name: 'Entry Level', range: [0, 75], description: 'Perfect for browsing, emails, and light streaming' },
    mid: { name: 'Mid Range', range: [76, 200], description: 'Ideal for HD streaming and remote work' },
    high: { name: 'High Speed', range: [201, 500], description: 'Great for 4K streaming and gaming' },
    premium: { name: 'Premium', range: [501, Infinity], description: 'Ultimate performance for power users' }
  };

  const operators = [
    { id: 'all', name: 'All Providers', logo: null },
    {
      id: 'frogfoot',
      name: 'Frogfoot',
      logo: 'https://apextech.group/frogfoot-bw.png',
      greyLogo: 'https://apextech.group/frogfoot-grey.png'
    },
    {
      id: 'lightwire',
      name: 'Lightwire',
      logo: 'https://apextech.group/lightwire-colour.png',
      greyLogo: 'https://apextech.group/lightwire-grey.png'
    },
    {
      id: 'metro-fibre',
      name: 'Metro Fibre',
      logo: 'https://apextech.group/mfn-colour.png',
      greyLogo: 'https://apextech.group/mfn-grey.png'
    },
    {
      id: 'octotel',
      name: 'Octotel',
      logo: 'https://apextech.group/octotel-colour.png',
      greyLogo: 'https://apextech.group/octotel-grey.png'
    },
    {
      id: 'openserve',
      name: 'Openserve',
      logo: 'https://apextech.group/openserve-colour.png',
      greyLogo: 'https://apextech.group/openserve-grey.png'
    },
    {
      id: 'seacom',
      name: 'Seacom',
      logo: 'https://apextech.group/seacom-bw.png',
      greyLogo: 'https://apextech.group/seacom-grey.png'
    },
    {
      id: 'vumatel',
      name: 'Vumatel',
      logo: 'https://apextech.group/vuma-colour.png',
      greyLogo: 'https://apextech.group/vuma-grey.png'
    },
    {
      id: 'thinkspeed',
      name: 'Thinkspeed',
      logo: 'https://apextech.group/thinkspeed-colour.png',
      greyLogo: 'https://apextech.group/thinkspeed-grey.png'
    }
  ];

  const features = [
    { icon: Wifi, title: 'Uncapped & Unshaped', description: 'No limits on your data usage' },
    { icon: Zap, title: 'Zero Throttling', description: 'Full speed, all the time' },
    { icon: Router, title: 'Free Premium Mesh Router', description: 'Whole-home coverage included' },
    { icon: Shield, title: 'WonderWatch™ Included', description: '24/7 proactive monitoring' }
  ];

  const formatSpeed = (speedInKbps) => {
    const speedInMbps = speedInKbps / 1024;
    return `${Math.round(speedInMbps)}Mbps`;
  };

  const getSpeedTier = (speedInKbps) => {
    const speedInMbps = speedInKbps / 1024;
    for (const [tier, { range }] of Object.entries(speedTiers)) {
      if (speedInMbps >= range[0] && speedInMbps <= range[1]) return tier;
    }
    return 'premium';
  };

  const filteredPackages = transformedPackages
    .filter(pkg => {
      if (selectedFNO !== 'all') {
        const supplier = pkg.Supplier.toLowerCase();
        if (selectedFNO === 'vumatel') {
          if (!supplier.includes('vumatel')) return false;
        } else if (supplier.replace(/\s+/g, '-') !== selectedFNO) {
          return false;
        }
      }
      if (selectedTier !== 'all') {
        const pkgTier = getSpeedTier(pkg['Download speed (kbps)']);
        if (pkgTier !== selectedTier) return false;
      }
      return true;
    })
    .sort((a, b) => a.Price - b.Price);

  const groupedPackages = filteredPackages.reduce((acc, pkg) => {
    const tier = getSpeedTier(pkg['Download speed (kbps)']);
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(pkg);
    return acc;
  }, {});

  return (
    <>
      <PackagesSEO />
      <div className="min-h-screen bg-wondernet-900">
        {/* Hero Section with Enhanced Gradient */}
        <div className="relative bg-gradient-to-br from-wondernet-900 via-wonderblue-800 to-brand-black text-white">
          <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Enterprise-Grade Fibre for Your Home
                </h1>
                <p className="text-xl text-wondernet-100 animate-fade-in-delayed">
                  Experience unmatched connectivity with our premium fibre packages
                </p>
              </div>

              {/* Features Grid with Animation */}
              <div className="grid md:grid-cols-4 gap-8 mt-16">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className="text-center transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-700/30 mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-wondernet-100">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SectionDivider variant="light" />

        {/* Provider Selection with Enhanced Design */}
        <div className="bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-8 text-wondernet-900">Choose Your Network Provider</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {operators.map((operator) => (
                <button
                  key={operator.id}
                  onClick={() => {
                    setSelectedFNO(operator.id);
                    trackEvent('fno_selected', {
                      fno_id: operator.id,
                      fno_name: operator.name
                    });
                  }}
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105
                    ${selectedFNO === operator.id 
                      ? 'bg-gradient-to-br from-wondernet-900 to-wonderblue-800 text-white shadow-lg' 
                      : 'bg-white hover:bg-wondernet-50 text-wondernet-900'
                    }`}
                >
                  {operator.logo ? (
                    <img
                      src={operator.logo}
                      alt={operator.name}
                      className="h-12 mx-auto mb-2"
                    />
                  ) : (
                    <div className="h-8 mb-2 flex items-center justify-center">
                      <Wifi className="w-6 h-6" />
                    </div>
                  )}
                  <span className="text-sm font-medium">{operator.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider variant="dark" />

        {/* Speed Tiers with Enhanced Design */}
        <div className="bg-gradient-to-br from-wondernet-900 to-wonderblue-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-8">Select Your Speed Tier</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {Object.entries(speedTiers).map(([key, tier]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedTier(key);
                    trackEvent('speed_tier_selected', {
                      tier_id: key,
                      tier_name: tier.name,
                      speed_range: `${tier.range[0]}-${tier.range[1] === Infinity ? '1000+' : tier.range[1]} Mbps`
                    });
                  }}
                  className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105
                    ${selectedTier === key 
                      ? 'bg-white text-wondernet-900 shadow-lg' 
                      : 'bg-white/10 hover:bg-white/20'
                    }`}
                >
                  <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                  <p className="text-sm opacity-80">{tier.description}</p>
                  <div className="mt-4 text-xs font-medium">
                    {tier.range[0]}-{tier.range[1] === Infinity ? '1000+' : tier.range[1]} Mbps
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider variant="light" />

        {/* Package Cards with Enhanced Design */}
        <div className="bg-gradient-to-br from-white to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            {Object.entries(groupedPackages).map(([tier, packages]) => (
              <div key={tier} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-bold mb-8 text-wondernet-900">
                  {speedTiers[tier].name} Packages
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {packages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      operators={operators}
                      formatSpeed={formatSpeed}
                      onCheckCoverage={() => setIsCoverageModalOpen(true)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Modal */}
        <CoverageModal
          isOpen={isCoverageModalOpen}
          onClose={() => setIsCoverageModalOpen(false)}
        />
      </div>
    </>
  );
};

export default PackagesPage;