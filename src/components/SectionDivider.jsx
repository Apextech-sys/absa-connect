import React from 'react';

const SectionDivider = ({ variant = 'default', position = 'bottom' }) => {
  const variants = {
    default: {
      primary: 'from-[#242424]/10 via-[#242424]/15 to-[#242424]/10',
      secondary: 'from-[#F8F8F8]/10 via-[#F8F8F8]/15 to-[#F8F8F8]/10'
    },
    dark: {
      primary: 'from-[#242424]/15 via-[#242424]/20 to-[#242424]/15',
      secondary: 'from-[#242424]/10 via-[#242424]/15 to-[#242424]/10'
    },
    light: {
      primary: 'from-[#F8F8F8]/15 via-[#F8F8F8]/20 to-[#F8F8F8]/15',
      secondary: 'from-[#F8F8F8]/10 via-[#F8F8F8]/15 to-[#F8F8F8]/10'
    }
  };

  const selectedVariant = variants[variant] || variants.default;
  const positionClass = position === 'top' ? '-top-24' : '-bottom-24';

  return (
    <div className="relative h-48 -my-24 overflow-hidden pointer-events-none">
      {/* First gradient layer */}
      <div 
        className={`absolute ${positionClass} inset-x-0 h-48 bg-gradient-to-br ${selectedVariant.primary} transform rotate-3 scale-110 pointer-events-none`} 
      />
      {/* Second gradient layer */}
      <div 
        className={`absolute ${positionClass} inset-x-0 h-48 bg-gradient-to-br ${selectedVariant.secondary} transform -rotate-3 scale-110 pointer-events-none`} 
      />
    </div>
  );
};

export default SectionDivider;
