import React from 'react';
import { trackEvent } from '../../../../utils/analytics';
import QuestionTooltip from '../QuestionTooltip';

/**
 * Device and usage selection step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {function} props.setFormData - Function to update form data
 * @param {function} props.simulateLoading - Function to start recommendation calculation
 * @returns {JSX.Element} Device and usage selection component
 */
const Devices = ({ formData, setFormData, simulateLoading }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">What devices do you have?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(formData.devices).map(([device, count]) => (
          <div key={device} className="space-y-2">
            <label className="flex items-center gap-2">
              <span className="font-medium capitalize">{device}</span>
              <QuestionTooltip content={`Number of ${device} in your home`} />
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newCount = Math.max(0, count - 1);
                  const newDevices = {
                    ...formData.devices,
                    [device]: newCount
                  };
                  setFormData({ ...formData, devices: newDevices });
                  trackEvent('device_count_changed', {
                    device,
                    previous_count: count,
                    new_count: newCount,
                    action: 'decrease'
                  });
                }}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-absa-300"
              >
                -
              </button>
              <span className="w-10 text-center">{count}</span>
              <button
                onClick={() => {
                  const newCount = count + 1;
                  const newDevices = {
                    ...formData.devices,
                    [device]: newCount
                  };
                  setFormData({ ...formData, devices: newDevices });
                  trackEvent('device_count_changed', {
                    device,
                    previous_count: count,
                    new_count: newCount,
                    action: 'increase'
                  });
                }}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-absa-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Usage Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(formData.usage).map(([usage, enabled]) => (
            <button
              key={usage}
              onClick={() => {
                const newEnabled = !enabled;
                const newUsage = {
                  ...formData.usage,
                  [usage]: newEnabled
                };
                setFormData({ ...formData, usage: newUsage });
                trackEvent('usage_type_changed', {
                  usage_type: usage,
                  action: newEnabled ? 'enabled' : 'disabled'
                });
              }}
              className={`p-4 rounded-xl border-2 transition-all ${
                enabled
                  ? 'border-absa-600 bg-absa-50'
                  : 'border-gray-200 hover:border-absa-300'
              }`}
            >
              <span className="font-medium capitalize">{usage.replace(/([A-Z])/g, ' $1')}</span>
            </button>
          ))}
        </div>
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

export default Devices;