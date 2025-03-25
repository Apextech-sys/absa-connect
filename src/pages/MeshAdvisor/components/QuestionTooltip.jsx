import React from 'react';
import { HelpCircle } from 'lucide-react';

/**
 * Tooltip component for displaying help information
 * @param {object} props - Component props
 * @param {string} props.content - Tooltip content
 * @returns {JSX.Element} Question tooltip component
 */
const QuestionTooltip = ({ content }) => (
  <div className="group relative inline-block">
    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
    <div className="hidden group-hover:block absolute z-10 w-48 p-2 mt-1 text-sm text-white bg-gray-800 rounded-md">
      {content}
    </div>
  </div>
);

export default QuestionTooltip;