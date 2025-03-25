// src/components/CoverageModal.jsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const CoverageModal = ({ isOpen, onClose }) => {
  // Track modal open/close
  useEffect(() => {
    if (isOpen) {
      trackEvent('coverage_modal_opened');
    }
  }, [isOpen]);

  const handleClose = () => {
    trackEvent('coverage_modal_closed');
    onClose();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Always render the modal, but control visibility with opacity and pointer-events */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={handleClose}
        />
        
        {/* Modal Content */}
        <div 
          className={`fixed inset-y-0 right-0 w-full bg-white shadow-xl transform transition-all duration-500 ease-out z-[101] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ maxWidth: '100vw' }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className={`fixed top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300 z-[102] ${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* iframe Container */}
          <div className={`w-full h-full transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            <iframe 
              src="https://getconnected.wondernet.co.za" 
              title="ABSA Connect Coverage Checker"
              className="w-full h-full border-0"
              allow="geolocation"
              onLoad={() => trackEvent('coverage_checker_loaded')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverageModal;