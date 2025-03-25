import React, { useState, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent, trackClick } from '../../utils/analytics';
import { Range } from 'react-range';
import CompareHero from '../../components/CompareHero';
import CoverageModal from '../../components/CoverageModal';
import SectionDivider from '../../components/SectionDivider';
import transformedPackages from '../PackagesPage/packagesData';
import { 
  Filter, Download, Upload, Wifi, Shield, Router, Check, X, AlertCircle, Zap, 
  ArrowRight, ArrowLeft, Home, Users, Monitor, Gamepad, Laptop, Video, Cloud, Info 
} from 'lucide-react';
import CompareSEO from '../../components/PageSEO/CompareSEO';

const formatSpeed = (speedInKbps) => {
  const speedInMbps = speedInKbps / 1024;
  return `${Math.round(speedInMbps)}Mbps`;
};

const SpeedRangeSlider = ({ values, onChange }) => {
  const speedMarkers = [25, 50, 100, 200, 500, 1000];
  
  // Convert between linear slider position and actual speed values
  const getSpeedFromPosition = (position) => {
    const index = Math.min(Math.max(Math.round((position / 100) * (speedMarkers.length - 1)), 0), speedMarkers.length - 1);
    return speedMarkers[index];
  };

  const getPositionFromSpeed = (speed) => {
    // Find the closest speed marker
    const closestSpeed = speedMarkers.reduce((prev, curr) => {
      return Math.abs(curr - speed) < Math.abs(prev - speed) ? curr : prev;
    });
    const index = speedMarkers.indexOf(closestSpeed);
    return Math.max(0, (index / (speedMarkers.length - 1)) * 100);
  };

  const handleSpeedMarkerClick = (speed) => {
    const currentUpperBound = values[1];
    if (speed > currentUpperBound) {
      onChange([currentUpperBound, speed]);
    } else {
      onChange([speed, currentUpperBound]);
    }
  };

  // Ensure values are within valid speed markers
  const safeValues = values.map(value => {
    const closestSpeed = speedMarkers.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
    return closestSpeed;
  });

  // Convert actual speed values to positions for the gradient
  const lowerPosition = getPositionFromSpeed(safeValues[0]);
  const upperPosition = getPositionFromSpeed(safeValues[1]);

  return (
    <div className="py-6 px-4">
      <div className="mb-4 flex justify-between text-sm font-medium text-white">
        <span>0 Mbps</span>
        <span>1000 Mbps</span>
      </div>
      <Range
        values={[lowerPosition, upperPosition]}
        step={100 / (speedMarkers.length - 1)}
        min={0}
        max={100}
        onChange={(newValues) => {
          const newSpeeds = newValues.map(getSpeedFromPosition);
          const [min, max] = [Math.min(...newSpeeds), Math.max(...newSpeeds)];
          onChange([min, max]);
          trackEvent('speed_range_changed', {
            min_speed: min,
            max_speed: max,
            location: 'compare_page'
          });
        }}
        renderTrack={({ props, children }) => (
          <div className="h-8 flex w-full items-center">
            <div
              {...props}
              ref={props.ref}
              className="h-3 w-full rounded-full"
              style={{
                background: `linear-gradient(to right, #e42313 ${lowerPosition}%, #f03940 ${lowerPosition}%, #f03940 ${upperPosition}%, #e42313 ${upperPosition}%)`
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="h-6 w-6 rounded-full bg-gradient-to-br from-absa-500 to-absa-700 shadow-lg border-2 border-white focus:outline-none hover:scale-110 transition-transform"
          >
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-absa-600 to-absa-700 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
              {safeValues[index]} Mbps
            </div>
          </div>
        )}
      />
      
      <div className="mt-8 flex justify-between px-2">
        {speedMarkers.map((speed) => (
          <div 
            key={speed}
            onClick={() => handleSpeedMarkerClick(speed)}
            className={`flex flex-col items-center cursor-pointer transition-all ${
              speed >= safeValues[0] && speed <= safeValues[1]
                ? 'opacity-100 scale-110'
                : 'opacity-50 hover:opacity-75'
            }`}
          >
            <div className={`w-1 h-3 rounded-full mb-1 ${
              speed >= safeValues[0] && speed <= safeValues[1]
                ? 'bg-gradient-to-br from-absa-500 to-absa-700'
                : 'bg-gray-300'
            }`} />
            <span className="text-xs font-medium text-white">{speed}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const NetworkProviderCard = ({ operator, isSelected, onToggle }) => (
  <motion.button
    onClick={() => onToggle(operator.id)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className={`p-6 rounded-xl transition-all group ${
      isSelected
        ? 'bg-gradient-to-br from-absa-700 to-absa-900 text-white shadow-lg'
        : 'bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/60 text-white'
    }`}
  >
    <div className="h-12 flex items-center justify-center mb-3">
      {operator.logo ? (
        <img 
          src={operator.logo}
          alt={operator.name}
          className="h-full w-auto object-contain group-hover:scale-110 transition-transform"
        />
      ) : (
        <Wifi className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-absa-600'}`} />
      )}
    </div>
    <div className="text-base font-medium text-center">{operator.name}</div>
  </motion.button>
);

const PackageCard = ({ pkg, isSelected, onToggle, onCheckCoverage, operators }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10"
    >
      {/* Package Header */}
      <div className="bg-gradient-to-br from-absa-700 to-absa-900 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-2xl font-bold">
              {formatSpeed(pkg['Download speed (kbps)'])}
            </h4>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                pkg.Title.toLowerCase().includes('business') || pkg.Title.toLowerCase().includes('office')
                  ? 'bg-amber-500/20 text-amber-200' 
                  : 'bg-emerald-500/20 text-emerald-200'
              }`}>
                {pkg.Title.toLowerCase().includes('business') || pkg.Title.toLowerCase().includes('office') ? 'Business' : 'Home'}
              </span>
              <p className="text-white/80">
                {pkg.Supplier}
              </p>
            </div>
          </div>
          <img 
            src={operators.find(op => 
              op.id === pkg.Supplier.toLowerCase().replace(/\s+/g, '-')
            )?.logo} 
            alt={pkg.Supplier}
            className="h-8 w-auto"
          />
        </div>
        <div className="text-3xl font-bold">
          R{pkg.Price}
          <span className="text-base font-normal text-white/80">/pm</span>
        </div>
      </div>

      {/* Package Features */}
      <div className="p-6">
        <ul className="space-y-4 mb-6">
          <li className="flex items-center text-white">
            <Download className="w-5 h-5 mr-3 text-absa-600" />
            <span>Download: {formatSpeed(pkg['Download speed (kbps)'])}</span>
          </li>
          <li className="flex items-center text-white">
            <Upload className="w-5 h-5 mr-3 text-absa-600" />
            <span>Upload: {formatSpeed(pkg['Upload speed (kbps)'])}</span>
          </li>
          <li className="flex items-center text-white">
            <Check className="w-5 h-5 mr-3 text-absa-600" />
            <span>Free Premium Router</span>
          </li>
          <li className="flex items-center text-white">
            <Check className="w-5 h-5 mr-3 text-absa-600" />
            <span>Uncapped & Unshaped</span>
          </li>
        </ul>

        <div className="space-y-3">
          <button
            onClick={() => onToggle(pkg)}
            className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-all duration-300 ${
              isSelected
                ? 'bg-gradient-to-r from-absa-600 to-absa-700 text-white'
                : 'bg-black/30 text-white border border-white/10 hover:bg-black/50'
            }`}
          >
            {isSelected ? 'Selected for Comparison' : 'Add to Compare'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <button
            onClick={onCheckCoverage}
            className="w-full bg-gradient-to-r from-absa-600 to-absa-700 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center hover:from-absa-700 hover:to-absa-800 transition-all duration-300"
          >
            Check Coverage
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ComparePage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [selectedFNOs, setSelectedFNOs] = useState([searchParams.get('fno') || 'all']);
  const [speedRange, setSpeedRange] = useState([0, 1000]);
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const comparisonRef = useRef(null);

  const operators = [
    { id: 'all', name: 'All Providers', logo: null },
    { id: 'frogfoot', name: 'Frogfoot', logo: 'https://apextech.group/frogfoot.png' },
    { id: 'lightwire', name: 'Lightwire', logo: 'https://apextech.group/lightwire.png' },
    { id: 'metro-fibre', name: 'Metro Fibre', logo: 'https://apextech.group/mfn.png' },
    { id: 'octotel', name: 'Octotel', logo: 'https://apextech.group/octotel.png' },
    { id: 'openserve', name: 'Openserve', logo: 'https://apextech.group/openserve.png' },
    { id: 'seacom', name: 'Seacom', logo: 'https://apextech.group/seacom.png' },
    { id: 'vumatel', name: 'Vumatel', logo: 'https://apextech.group/vumatel.png' }
  ];

  const featureComparison = [
    { name: 'No Contract Lock-in', icon: Check },
    { name: 'Free Installation', icon: Check },
    { name: 'Free Premium Router', icon: Router },
    { name: 'Proactive Monitoring', icon: Shield },
    { name: 'Unshaped', icon: Check },
    { name: 'Zero Throttling', icon: Zap },
    { name: 'Expert Support', icon: Check },
    { name: 'Same-day Support', icon: Check }
  ];

  const filteredPackages = useMemo(() => {
    return transformedPackages.filter(pkg => {
      const speedInMbps = pkg['Download speed (kbps)'] / 1024;
      if (speedInMbps < speedRange[0] || speedInMbps > speedRange[1]) return false;
      
      if (!selectedFNOs.includes('all')) {
        const fnoId = pkg.Supplier.toLowerCase().replace(/\s+/g, '-');
        if (!selectedFNOs.includes(fnoId)) return false;
      }
      
      return true;
    }).sort((a, b) => a.Price - b.Price);
  }, [selectedFNOs, speedRange]);

  const handlePackageSelect = (pkg) => {
    if (!selectedPackages.find(p => p.ID === pkg.ID)) {
      setSelectedPackages([...selectedPackages, pkg]);
      trackEvent('package_added_to_comparison', {
        package_id: pkg.ID,
        package_name: pkg.Name,
        package_speed: formatSpeed(pkg['Download speed (kbps)']),
        package_price: pkg.Price,
        total_packages: selectedPackages.length + 1
      });
    }
  };

  const handleRemovePackage = (packageId) => {
    const pkg = selectedPackages.find(p => p.ID === packageId);
    setSelectedPackages(selectedPackages.filter(p => p.ID !== packageId));
    if (pkg) {
      trackEvent('package_removed_from_comparison', {
        package_id: pkg.ID,
        package_name: pkg.Name,
        package_speed: formatSpeed(pkg['Download speed (kbps)']),
        package_price: pkg.Price,
        total_packages: selectedPackages.length - 1
      });
    }
  };

  const toggleFNO = (fnoId) => {
    setSelectedFNOs(prev => {
      let newFNOs;
      if (fnoId === 'all') {
        newFNOs = ['all'];
      } else {
        const withoutAll = prev.filter(id => id !== 'all');
        newFNOs = prev.includes(fnoId)
          ? withoutAll.filter(id => id !== fnoId)
          : [...withoutAll, fnoId];
      }
      
      trackEvent('network_provider_selected', {
        provider_id: fnoId,
        provider_name: operators.find(op => op.id === fnoId)?.name,
        action: prev.includes(fnoId) ? 'removed' : 'added',
        total_selected: newFNOs.length
      });
      
      return newFNOs;
    });
  };

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({ behavior: 'smooth' });
    trackClick('scroll_to_comparison_button', 'compare_page');
  };

  return (
    <>
      <CompareSEO />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-absa-900 via-absa-800 to-brand-black text-white">
          <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-absa-100 to-white bg-clip-text text-transparent">
                  Compare Fibre Packages
                </h1>
                <p className="text-xl text-white/80 animate-fade-in-delayed">
                  Find the perfect fibre package for your needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider variant="light" />

        {/* Main Content */}
        <div className="bg-gradient-to-br from-black via-absa-900/50 to-black py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filters Section */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-12 border border-white/10">
              <div className="bg-gradient-to-br from-absa-900 to-absa-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Filter className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Filter Packages</h2>
                </div>
              </div>

              {/* Speed Range */}
              <div className="p-6 border-b border-white/10">
                <h3 className="text-lg font-semibold mb-4 text-white">Speed Range</h3>
                <SpeedRangeSlider 
                  values={speedRange}
                  onChange={setSpeedRange}
                />
              </div>

              {/* Network Providers */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6 text-white">Network Provider</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {operators.map(operator => (
                    <NetworkProviderCard
                      key={operator.id}
                      operator={operator}
                      isSelected={selectedFNOs.includes(operator.id)}
                      onToggle={toggleFNO}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Packages Comparison */}
            {selectedPackages.length > 0 && (
              <>
                {/* Package Cards */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-12 border border-white/10" ref={comparisonRef}>
                  <h2 className="text-2xl font-bold mb-6 text-white">Selected Packages</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {selectedPackages.map(pkg => (
                      <PackageCard
                        key={pkg.ID}
                        pkg={pkg}
                        operators={operators}
                        isSelected={true}
                        onToggle={() => handleRemovePackage(pkg.ID)}
                        onCheckCoverage={() => setIsCoverageModalOpen(true)}
                      />
                    ))}
                  </div>
                </div>

                {/* Feature Comparison Table */}
                <div
                  className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-12 border border-white/10"
                  onMouseEnter={() => trackEvent('feature_comparison_viewed', {
                    packages: selectedPackages.map(pkg => ({
                      id: pkg.ID,
                      name: pkg.Name,
                      speed: formatSpeed(pkg['Download speed (kbps)']),
                      price: pkg.Price
                    }))
                  })}
                >
                  <div className="bg-gradient-to-br from-absa-900 to-absa-700 p-6 text-white">
                    <h2 className="text-2xl font-bold">Feature Comparison</h2>
                  </div>
                  <div className="p-6">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left font-medium text-absa-600 pb-6 w-1/3">Feature</th>
                          {selectedPackages.map((pkg, index) => (
                            <th key={index} className="text-center pb-6">
                              <div className="space-y-3">
                                <img 
                                  src={operators.find(op => 
                                    op.id === pkg.Supplier.toLowerCase().replace(/\s+/g, '-')
                                  )?.logo}
                                  alt={pkg.Supplier}
                                  className="h-10 mx-auto object-contain"
                                />
                                <div className="text-base font-semibold text-absa-600">
                                  {formatSpeed(pkg['Download speed (kbps)'])}
                                </div>
                                <div className="text-sm text-white/80">
                                  R{pkg.Price}/pm
                                </div>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {featureComparison.map((feature, index) => (
                          <tr key={index} className="group hover:bg-white/5 transition-colors">
                            <td className="py-4 border-t border-white/10 flex items-center text-white">
                              <feature.icon className="w-5 h-5 mr-3 text-absa-600" />
                              {feature.name}
                            </td>
                            {selectedPackages.map((_, pkgIndex) => (
                              <td key={pkgIndex} className="py-4 border-t border-white/10 text-center">
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Available Packages */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-white">Available Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPackages.map(pkg => (
                    <PackageCard
                      key={pkg.ID}
                      pkg={pkg}
                      operators={operators}
                      isSelected={selectedPackages.some(p => p.ID === pkg.ID)}
                      onToggle={handlePackageSelect}
                      onCheckCoverage={() => setIsCoverageModalOpen(true)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        {selectedPackages.length > 0 && (
          <button
            onClick={scrollToComparison}
            className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-absa-600 to-absa-700 text-white rounded-full shadow-lg hover:scale-105 transform transition-all group z-50"
          >
            <span className="font-medium">Compare {selectedPackages.length} Packages</span>
            <div className="bg-white text-absa-600 w-6 h-6 rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              {selectedPackages.length}
            </div>
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}

        {/* Coverage Modal */}
        <CoverageModal
          isOpen={isCoverageModalOpen}
          onClose={() => setIsCoverageModalOpen(false)}
        />
      </div>
    </>
  );
};

export default ComparePage;