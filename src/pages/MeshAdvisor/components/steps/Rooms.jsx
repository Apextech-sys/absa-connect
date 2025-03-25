import React from 'react';
import { trackEvent } from '../../../../utils/analytics';
import { formatRoomName } from '../../utils/meshCalculations';
import QuestionTooltip from '../QuestionTooltip';

/**
 * Room count selection step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {function} props.setFormData - Function to update form data
 * @param {function} props.setStep - Function to change current step
 * @returns {JSX.Element} Room count selection component
 */
const Rooms = ({ formData, setFormData, setStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">How many rooms do you have?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(formData.rooms).map(([room, count]) => (
          <div key={room} className="space-y-2">
            <label className="flex items-center gap-2">
              <span className="font-medium">{formatRoomName(room)}</span>
              <QuestionTooltip content={`Number of ${formatRoomName(room).toLowerCase()}s in your home`} />
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newCount = Math.max(0, count - 1);
                  const newRooms = {
                    ...formData.rooms,
                    [room]: newCount
                  };
                  setFormData({ ...formData, rooms: newRooms });
                  trackEvent('room_count_changed', {
                    room,
                    room_name: formatRoomName(room),
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
                  const newRooms = {
                    ...formData.rooms,
                    [room]: newCount
                  };
                  setFormData({ ...formData, rooms: newRooms });
                  trackEvent('room_count_changed', {
                    room,
                    room_name: formatRoomName(room),
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
      <div className="flex justify-end">
        <button
          onClick={() => setStep('layout')}
          className="px-6 py-3 bg-absa-600 text-white rounded-lg hover:bg-absa-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Rooms;