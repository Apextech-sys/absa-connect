import React, { useEffect } from 'react';
import { ArrowRight, Upload, Download, Check, Zap } from 'lucide-react';
import { trackEvent, trackClick } from '../utils/analytics';

const PackageCard = ({
  pkg,
  operators,
  formatSpeed,
  onCheckCoverage
}) => {
  useEffect(() => {
    // Track package impression when component mounts
    trackEvent('package_view', {
      package_name: pkg.Title,
      package_price: pkg.Price,
      package_speed: formatSpeed(pkg['Download speed (kbps)']),
      package_type: pkg.productType,
      supplier: pkg.Supplier
    });
  }, [pkg, formatSpeed]);

  const getOperatorLogo = () => {
    const supplierMap = {
      'Vumatel Tactical': 'vumatel',
      'Century City Connect': 'thinkspeed'
    };
    const mappedSupplier = supplierMap[pkg.Supplier] || pkg.Supplier.toLowerCase().replace(/\s+/g, '-');
    return operators.find(op => op.id === mappedSupplier)?.logo;
  };

  const handleCheckCoverage = () => {
    // Track the coverage check click
    trackClick('check_coverage_button', 'package_interaction');
    // Track detailed package selection event
    trackEvent('package_selected', {
      package_name: pkg.Title,
      package_price: pkg.Price,
      package_speed: formatSpeed(pkg['Download speed (kbps)']),
      package_type: pkg.productType,
      supplier: pkg.Supplier
    });
    // Call the original handler
    onCheckCoverage();
  };

  return (
    <div className="relative">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
        {/* Enhanced Logo Section */}
        <div className="relative h-24 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Logo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-full h-full max-h-16 flex items-center justify-center">
              <img
                src={getOperatorLogo()}
                alt={pkg.Supplier}
                className="max-w-full max-h-full w-auto h-auto object-contain transform transition-all duration-300 hover:scale-105 filter contrast-125"
              />
            </div>
          </div>
          
          {/* Enhanced Bottom Border Treatment */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-100"></div>
            <div className="h-2 bg-gradient-to-b from-transparent to-gray-50/50"></div>
          </div>
        </div>

        {/* Speed & Price Section */}
        <div className="relative px-8 pt-8 pb-6 bg-gradient-to-br from-wondernet-900 to-wonderblue-800">
          {/* Product Type Badge */}
          <div className="flex justify-between items-start mb-4">
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              pkg.productType === 'Business'
                ? 'bg-amber-400/20 text-amber-200 border border-amber-400/30'
                : 'bg-emerald-400/20 text-emerald-200 border border-emerald-400/30'
            }`}>
              {pkg.productType}
            </span>
          </div>

          {/* Speed Display */}
          <h3 className="text-4xl font-bold text-white mb-2">
            {formatSpeed(pkg['Download speed (kbps)'])}
          </h3>

          {/* Price Display */}
          <div className="flex items-baseline space-x-1 mt-4">
            <span className="text-3xl font-bold text-white">R{pkg.Price}</span>
            <span className="text-sm text-blue-200">/month</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="p-8">
          <ul className="space-y-6">
            {/* Download Speed */}
            <li className="flex items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-wondernet-50 group-hover:bg-wondernet-100 transition-colors duration-300">
                <Download className="w-6 h-6 text-wondernet-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Download Speed</p>
                <p className="text-base font-semibold text-gray-900">
                  {formatSpeed(pkg['Download speed (kbps)'])}
                </p>
              </div>
            </li>

            {/* Upload Speed */}
            <li className="flex items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-wondernet-50 group-hover:bg-wondernet-100 transition-colors duration-300">
                <Upload className="w-6 h-6 text-wondernet-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Upload Speed</p>
                <p className="text-base font-semibold text-gray-900">
                  {formatSpeed(pkg['Upload speed (kbps)'])}
                </p>
              </div>
            </li>

            {/* Router */}
            <li className="flex items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-wondernet-50 group-hover:bg-wondernet-100 transition-colors duration-300">
                <Zap className="w-6 h-6 text-wondernet-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Equipment</p>
                <p className="text-base font-semibold text-gray-900">
                  Free Premium Router
                </p>
              </div>
            </li>

            {/* Connection Type */}
            <li className="flex items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-wondernet-50 group-hover:bg-wondernet-100 transition-colors duration-300">
                <Check className="w-6 h-6 text-wondernet-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Connection Type</p>
                <p className="text-base font-semibold text-gray-900">
                  Uncapped & Unshaped
                </p>
              </div>
            </li>
          </ul>

          {/* CTA Button */}
          <button
            onClick={handleCheckCoverage}
            type="button"
            className="relative z-10 mt-8 w-full bg-gradient-to-r from-wondernet-600 to-wonderblue-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center hover:from-wondernet-700 hover:to-wonderblue-700 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            Check Coverage
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;