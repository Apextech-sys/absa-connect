import React from 'react';
import { trackEvent } from '../../../../utils/analytics';
import QuestionTooltip from '../QuestionTooltip';

/**
 * Home layout configuration step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {function} props.setFormData - Function to update form data
 * @param {function} props.setStep - Function to change current step
 * @returns {JSX.Element} Home layout configuration component
 */
const Layout = ({ formData, setFormData, setStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tell us about your home layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Number of Floors */}
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <span className="font-medium">Number of Floors</span>
            <QuestionTooltip content="How many levels/stories in your home?" />
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const newFloors = Math.max(1, formData.floors - 1);
                setFormData({ ...formData, floors: newFloors });
                trackEvent('floor_count_changed', {
                  previous_count: formData.floors,
                  new_count: newFloors,
                  action: 'decrease'
                });
              }}
              className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-absa-300"
            >
              -
            </button>
            <span className="w-10 text-center">{formData.floors}</span>
            <button
              onClick={() => {
                const newFloors = formData.floors + 1;
                setFormData({ ...formData, floors: newFloors });
                trackEvent('floor_count_changed', {
                  previous_count: formData.floors,
                  new_count: newFloors,
                  action: 'increase'
                });
              }}
              className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-absa-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Walls Between Points */}
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <span className="font-medium">Wall Density</span>
            <QuestionTooltip content="How many walls typically separate rooms in your home? This helps us account for signal interference. More walls = more signal loss = potentially more mesh units needed." />
          </label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newWalls = Math.max(0, formData.wallsBetweenPoints - 1);
                  setFormData({ ...formData, wallsBetweenPoints: newWalls });
                  trackEvent('wall_density_changed', {
                    previous_count: formData.wallsBetweenPoints,
                    new_count: newWalls,
                    action: 'decrease'
                  });
                }}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-absa-300"
              >
                -
              </button>
              <span className="w-10 text-center">{formData.wallsBetweenPoints}</span>
              <button
                onClick={() => {
                  const newWalls = formData.wallsBetweenPoints + 1;
                  setFormData({ ...formData, wallsBetweenPoints: newWalls });
                  trackEvent('wall_density_changed', {
                    previous_count: formData.wallsBetweenPoints,
                    new_count: newWalls,
                    action: 'increase'
                  });
                }}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-absa-300"
              >
                +
              </button>
            </div>
            <div className="text-sm text-gray-600">
              {formData.wallsBetweenPoints === 0 && "Open plan layout with few walls"}
              {formData.wallsBetweenPoints === 1 && "Standard layout with some walls between rooms"}
              {formData.wallsBetweenPoints === 2 && "Dense layout with many walls"}
              {formData.wallsBetweenPoints >= 3 && "Very dense layout with thick/many walls"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setStep('coverage')}
          className="px-6 py-3 bg-absa-600 text-white rounded-lg hover:bg-absa-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Layout;