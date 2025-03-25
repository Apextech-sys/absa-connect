import React from 'react';
import { trackEvent } from '../../../../utils/analytics';
import { formatRoomName } from '../../utils/meshCalculations';

/**
 * CPE Location selection step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {function} props.setFormData - Function to update form data
 * @param {function} props.setStep - Function to change current step
 * @returns {JSX.Element} CPE location selection component
 */
const CPELocation = ({ formData, setFormData, setStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Where is your Fibre CPE installed?</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(formData.rooms).map(([room]) => (
          <button
            key={room}
            onClick={() => {
              setFormData({ ...formData, cpeLocation: room });
              trackEvent('cpe_location_selected', {
                location: room,
                location_name: formatRoomName(room)
              });
              setStep('rooms');
            }}
            className={`p-6 rounded-xl border-2 transition-all ${
              formData.cpeLocation === room
                ? 'border-absa-600 bg-absa-600/20 text-white'
                : 'border-gray-600 bg-gray-700 text-white hover:border-absa-500 hover:bg-gray-600'
            }`}
          >
            <span className="font-medium capitalize">{formatRoomName(room)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CPELocation;