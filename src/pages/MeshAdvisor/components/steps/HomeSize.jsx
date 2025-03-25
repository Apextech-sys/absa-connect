import React from 'react';
import { MESH_SPECS } from '../../constants/meshSpecs';
import { trackEvent } from '../../../../utils/analytics';

/**
 * Home size selection step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {function} props.setFormData - Function to update form data
 * @param {function} props.setStep - Function to change current step
 * @returns {JSX.Element} Home size selection component
 */
const HomeSize = ({ formData, setFormData, setStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">What size is your home?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(MESH_SPECS.HOME_SIZES).map(([size, details]) => (
          <button
            key={size}
            onClick={() => {
              // Set both min and max for better area calculation
              setFormData({
                ...formData,
                homeSize: size,
                area: details.max,
                minArea: details.min,
                maxArea: details.max
              });
              trackEvent('home_size_selected', {
                size,
                area: details.max,
                min_area: details.min,
                max_area: details.max
              });
              setStep('cpeLocation');
            }}
            className={`p-6 rounded-xl border-2 transition-all ${
              formData.homeSize === size
                ? 'border-absa-600 bg-absa-600/20 text-white'
                : 'border-gray-600 bg-gray-700 text-white hover:border-absa-500 hover:bg-gray-600'
            }`}
          >
            <span className="font-medium">{details.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSize;