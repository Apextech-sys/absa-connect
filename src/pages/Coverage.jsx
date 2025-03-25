import React, { useEffect } from 'react';

const Coverage = () => {
  useEffect(() => {
    // Remove body scroll when component mounts
    document.body.style.overflow = 'hidden';
    
    // Restore body scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="w-full h-screen pt-16"> {/* pt-16 accounts for navbar height */}
      <iframe 
        src="https://getconnected.wondernet.co.za" 
        title="Wondernet Coverage Checker"
        className="w-full h-full border-0"
        allow="geolocation"
        style={{ height: 'calc(100vh - 64px)' }} // 64px is navbar height
      />
    </div>
  );
};

export default Coverage;