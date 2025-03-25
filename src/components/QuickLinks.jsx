import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Calculator, Scale, Wifi } from 'lucide-react';

const QuickLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [initialAnimationIndex, setInitialAnimationIndex] = useState(null);

  useEffect(() => {
    // Check if this is the first visit
    if (!sessionStorage.getItem('quickLinksAnimated')) {
      // Mark as animated
      sessionStorage.setItem('quickLinksAnimated', 'true');
      
      // Animate each button sequentially
      const animateButtons = (index) => {
        if (index < 4) {
          setInitialAnimationIndex(index);
          // Hide after 1 second and animate next button
          setTimeout(() => {
            setInitialAnimationIndex(null);
            setTimeout(() => animateButtons(index + 1), 200);
          }, 1000);
        }
      };

      // Start animation after a short delay
      setTimeout(() => animateButtons(0), 500);
    }
  }, []);

  const links = [
    { 
      to: '/packages', 
      icon: <Package className="w-5 h-5" />, 
      text: 'Packages',
      bgColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    { 
      to: '/recommend', 
      icon: <Calculator className="w-5 h-5" />, 
      text: 'Recommend',
      bgColor: 'bg-green-500 hover:bg-green-600'
    },
    { 
      to: '/compare', 
      icon: <Scale className="w-5 h-5" />, 
      text: 'Compare',
      bgColor: 'bg-pink-500 hover:bg-pink-600'
    },
    { 
      to: '/mesh-advisor', 
      icon: <Wifi className="w-5 h-5" />, 
      text: 'Home Advisor',
      bgColor: 'bg-cyan-400 hover:bg-cyan-500'
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 h-64 hidden md:block">
      {links.map((link, index) => (
        <Link
          key={link.to}
          to={link.to}
          style={{ top: `${index * 45}px` }}
          className={`absolute right-0 flex items-center justify-end text-white font-medium 
                     transition-all duration-300 ${link.bgColor} backdrop-blur-sm
                     rounded-l-full py-2 px-3 ${hoveredIndex === index || initialAnimationIndex === index ? 'w-40' : 'w-10'} overflow-hidden
                     hover:shadow-lg hover:shadow-black/20`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className={`transition-opacity duration-300 mr-2 whitespace-nowrap
                          ${hoveredIndex === index || initialAnimationIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            {link.text}
          </span>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
