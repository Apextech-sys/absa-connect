import React, { createContext, useContext, useState } from 'react';
import CoverageModal from '../components/CoverageModal';

const CoverageModalContext = createContext();

export const CoverageModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CoverageModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <CoverageModal 
        isOpen={isOpen}
        onClose={closeModal}
      />
    </CoverageModalContext.Provider>
  );
};

export const useCoverageModal = () => {
  const context = useContext(CoverageModalContext);
  if (!context) {
    throw new Error('useCoverageModal must be used within a CoverageModalProvider');
  }
  return context;
};
