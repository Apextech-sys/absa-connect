import React from 'react';
import { trackEvent } from '../../../../utils/analytics';
import { formatRoomName } from '../../utils/meshCalculations';

/**
 * Coverage areas selection step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {function} props.setFormData - Function to update form data
 * @param {function} props.simulateLoading - Function to start recommendation calculation
 * @returns {JSX.Element} Coverage areas selection component
 */
const CoverageAreas = ({ formData, setFormData, simulateLoading }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Select areas needing strong WiFi coverage</h2>
      <p className="text-gray-600">Choose rooms where you need the best possible connection</p>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(formData.rooms)
          .filter(([room, count]) => count > 0)
          .map(([room]) => (
            <button
              key={room}
              onClick={() => {
                const isRemoving = formData.importantCoverageAreas.includes(room);
                const areas = isRemoving
                  ? formData.importantCoverageAreas.filter(r => r !== room)
                  : [...formData.importantCoverageAreas, room];
                setFormData({ ...formData, importantCoverageAreas: areas });
                trackEvent('coverage_area_changed', {
                  room,
                  room_name: formatRoomName(room),
                  action: isRemoving ? 'removed' : 'added',
                  total_areas: areas.length
                });
              }}
              className={`p-6 rounded-xl border-2 transition-all ${
                formData.importantCoverageAreas.includes(room)
                  ? 'border-absa-600 bg-absa-50'
                  : 'border-gray-200 hover:border-absa-300'
              }`}
            >
              <span className="font-medium capitalize">{formatRoomName(room)}</span>
            </button>
          ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => simulateLoading()}
          className="px-6 py-3 bg-absa-600 text-white rounded-lg hover:bg-absa-700"
        >
          Calculate Recommendation
        </button>
      </div>
    </div>
  );
};

export default CoverageAreas;