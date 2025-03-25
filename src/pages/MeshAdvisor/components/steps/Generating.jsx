import React from 'react';

/**
 * Loading/generating recommendation step
 * @returns {JSX.Element} Loading animation component
 */
const Generating = () => {
  return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-absa-600 mx-auto mb-4"></div>
      <h2 className="text-2xl font-bold mb-2">Analyzing Your Home</h2>
      <p className="text-gray-600">
        Our system is calculating optimal mesh placement based on your layout...
      </p>
    </div>
  );
};

export default Generating;