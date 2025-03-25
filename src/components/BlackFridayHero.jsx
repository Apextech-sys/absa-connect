import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Gift, Clock, Calendar, Zap, Check } from 'lucide-react';
import CoverageModal from './CoverageModal';

const BlackFridayHero = () => {
  // FNO operator definitions with correct logo URLs
  const operators = [
    { id: 'frogfoot', name: 'Frogfoot', logo: 'https://apextech.group/frogfoot.png' },
    { id: 'lightwire', name: 'Lightwire', logo: 'https://apextech.group/lightwire.png' },
    { id: 'octotel', name: 'Octotel', logo: 'https://apextech.group/octotel.png' },
    { id: 'openserve', name: 'Openserve', logo: 'https://apextech.group/openserve.png' },
    { id: 'seacom', name: 'Seacom', logo: 'https://apextech.group/seacom.png' },
    { id: 'vumatel', name: 'Vumatel', logo: 'https://apextech.group/vumatel.png' }
  ];
  
  const fnoData = [
    {
      name: 'Vumatel High Speed (Existing Customers Only)',
      operatorId: 'vumatel',
      endDate: '2024-12-29T23:59:59+02:00',
      packages: [
        {
          speed: '500/200',
          price: 999,
          features: [
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Large household of 5-7 family members',
            'Up to 9 devices',
            '4k or live streamers, pro gamers & work-from-home'
          ]
        },
        {
          speed: '1000/250',
          price: 1199,
          features: [
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Large household of 8-10 family members',
            'Up to 12 devices',
            '4k or live streamers, pro gamers & work-from-home'
          ]
        },
        {
          speed: '1000/500',
          price: 1449,
          features: [
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Large household of 10 family members',
            'Up to 14 devices',
            '4k or live streamers, pro gamers & work-from-home'
          ]
        }
      ]
    },
    {
      name: 'Vumatel Standard (Existing Customers Only)',
      operatorId: 'vumatel',
      endDate: '2024-12-29T23:59:59+02:00',
      packages: [
        {
          speed: '100/50',
          price: 519,
          features: [
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Medium household of 2-3 family members',
            'Up to 4 devices',
            'Regular streamers, gamers & work-from-home'
          ]
        },
        {
          speed: '100/100',
          price: 669,
          features: [
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Medium household of 2-3 family members',
            'Up to 5 devices',
            '4k or live streamers, pro gamers & work-from-home'
          ]
        },
        {
          speed: '200/200',
          price: 849,
          features: [
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Medium household of 3-4 family members',
            'Up to 7 devices',
            '4k or live streamers, pro gamers & work-from-home'
          ]
        }
      ]
    },
    {
      name: 'Octotel',
      operatorId: 'octotel',
      endDate: '2024-12-31T23:59:59+02:00',
      packages: [
        {
          speed: '100/100',
          price: 759,
          features: [
            'First Month Free!',
            'Month-to-month',
            'No Installation fee',
            'Free-to-use router',
            'Medium household of 2-3 family members',
            'Up to 5 devices',
            'Regular streamers, gamers & work-from-home'
          ],
          special: 'FIRST_MONTH_FREE'
        }
      ]
    }
  ];

  const [currentFNO, setCurrentFNO] = useState(0);
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const [activeOffers, setActiveOffers] = useState(fnoData);

  // Filter out expired offers
  useEffect(() => {
    const currentDate = new Date('2024-12-12T12:47:37+02:00'); // Use the provided current time
    const filteredOffers = fnoData.filter(offer => {
      const endDate = new Date(offer.endDate);
      return endDate > currentDate;
    });
    setActiveOffers(filteredOffers);
    setCurrentFNO(0);
  }, []);

  useEffect(() => {
    if (activeOffers.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentFNO((prev) => (prev + 1) % activeOffers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeOffers]);

  const getLogo = (operatorId) => {
    const operator = operators.find(op => op.id === operatorId);
    return operator ? operator.logo : '';
  };

  // Early return if no active offers
  if (activeOffers.length === 0) {
    return null;
  }

  const currentOffer = activeOffers[currentFNO];
  const operator = operators.find(op => op.id === currentOffer?.operatorId);

  const BlackFridayTimer = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    useEffect(() => {
      const calculateTimeLeft = () => {
        const difference = new Date(endDate) - new Date();
        
        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          });
        }
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }, [endDate]);

    return (
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center space-x-4 text-white/90">
          <Clock className="w-5 h-5" />
          <div className="flex space-x-2">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-xl font-bold">{String(value).padStart(2, '0')}</span>
                </div>
                <div className="text-xs mt-1 text-white/70">{key}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white/80">
          <span className="text-purple-400 font-semibold">{currentOffer.name}</span> offer ends {new Date(currentOffer.endDate).toLocaleDateString('en-ZA', { 
            day: 'numeric', 
            month: 'long'
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/50 to-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{
                y: [null, -20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Gift className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white font-medium">Black Friday Extended!</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Don't Miss Out On
              <div className="relative">
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  2024's Best Deal
                </span>
              </div>
            </h1>

            <div className="max-w-2xl mx-auto">
              <p className="text-white/80 text-xl mb-8">
                Due to overwhelming demand, we've extended our Black Friday specials! 
                Lock in unbeatable prices on enterprise-grade fibre until December 31st. 
                Save up to R500/month on selected packages.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <BlackFridayTimer endDate={currentOffer.endDate} />
                <div className="h-8 w-px bg-white/20 hidden md:block"></div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Zap className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-white">Save up to <span className="font-bold text-purple-400">R6,000</span> on your 2024 internet costs!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentFNO}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={getLogo(currentOffer.operatorId)}
                  alt={`${currentOffer.name} Logo`}
                  className="h-16 md:h-20 object-contain"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white">{currentOffer.name}</h3>
              </div>
              <div className="flex space-x-2">
                {currentFNO > 0 && (
                  <button 
                    onClick={() => setCurrentFNO(prev => prev - 1)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                )}
                {currentFNO < activeOffers.length - 1 && (
                  <button 
                    onClick={() => setCurrentFNO(prev => prev + 1)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {currentOffer.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    {pkg.special && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                          {pkg.special === 'FIRST_MONTH_FREE' ? 'First Month Free!' : 'Free Delivery!'}</div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
                        <img 
                          src={getLogo(currentOffer.operatorId)}
                          alt={`${currentOffer.name} Logo`}
                          className="h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto mb-6" />
                      <div className="text-3xl font-bold text-white mb-2">
                        {pkg.speed} Mbps
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                          >
                            <Check className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
                          </motion.div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsCoverageModalOpen(true)}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl hover:from-purple-500 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      <span>Get Connected</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {activeOffers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFNO(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentFNO === index ? 'bg-purple-500 scale-125' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <CoverageModal 
        isOpen={isCoverageModalOpen}
        onClose={() => setIsCoverageModalOpen(false)}
      />
    </div>
  );
};

export default BlackFridayHero;