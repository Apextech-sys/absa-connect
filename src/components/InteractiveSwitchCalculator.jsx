import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ListChecks,
  Info,
  Router,
  Zap,
  PhoneCall,
  Cable,
  Check,
  Wifi,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";
import CoverageModal from './CoverageModal';

const InteractiveSwitchCalculator = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentStep, setCurrentStep] = useState(-1);
  const [selectedSpeed, setSelectedSpeed] = useState('');
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);

  const speedOptions = [
    { value: '25', label: '25 Mbps' },
    { value: '50', label: '50 Mbps' },
    { value: '100', label: '100 Mbps' },
    { value: '200', label: '200 Mbps' },
    { value: '500', label: '500 Mbps' },
    { value: '1000', label: '1 Gbps' },
  ];

  const calculateSteps = (goLiveDate) => {
    const steps = [];
    if (!goLiveDate) return steps;

    const date = new Date(goLiveDate);
    const today = new Date();
    const daysUntilGoLive = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    const isLessThan30Days = daysUntilGoLive < 30;
    
    // Step 5: Connection Live (Go-live date)
    steps.push({
      title: 'Connection Live',
      date: new Date(date).toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' }),
      description: 'Your ABSA Connect connection goes live. Our team will contact you to confirm activation.',
      icon: Wifi,
      clientAction: 'Be available for activation confirmation from our team'
    });

    // Step 4: Router Configuration & Dispatch (2 days before)
    const routerDate = new Date(date);
    routerDate.setDate(date.getDate() - 2);
    steps.push({
      title: 'Router Configuration & Dispatch',
      date: routerDate.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' }),
      description: 'We configure and dispatch your router via CourierGuy. Delivery takes up to 2 business days depending on your location.',
      icon: Router,
      clientAction: 'CourierGuy will contact you on delivery day to arrange delivery'
    });

    // Step 3: FNO Coordination (7 days before)
    const fnoDate = new Date(date);
    fnoDate.setDate(date.getDate() - 7);
    steps.push({
      title: 'FNO Coordination',
      date: fnoDate.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' }),
      description: 'We coordinate with the Fibre Network Operator to prepare your line.',
      icon: Cable,
      clientAction: null
    });

    // Handle ISP cancellation timing
    if (isLessThan30Days) {
      // If less than 30 days, show urgent cancellation notice
      steps.push({
        title: 'Place Order & Urgent ISP Cancellation',
        date: today.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' }),
        description: 'Since your desired go-live date is less than 30 days away, you should cancel with your current ISP immediately after placing your order. Most ISPs require 30 days notice for cancellation.',
        icon: ClipboardCheck,
        clientAction: 'Place your order and immediately submit cancellation to current ISP',
        warning: 'Important: Contact your ISP immediately as they typically require 30 days notice for cancellation'
      });
    } else {
      // Normal flow - 30 days before
      const cancelDate = new Date(date);
      cancelDate.setDate(date.getDate() - 30);
      steps.push({
        title: 'Place Order & Schedule ISP Cancellation',
        date: cancelDate.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' }),
        description: 'Place your order with us and schedule your cancellation with your current ISP to align with your go-live date.',
        icon: ClipboardCheck,
        clientAction: 'Place your order and submit cancellation to current ISP for the go-live date'
      });
    }

    return steps.reverse();
  };

  const steps = calculateSteps(selectedDate);

  useEffect(() => {
    if (selectedDate && steps.length > 0) {
      let step = 0;
      const interval = setInterval(() => {
        if (step < steps.length) {
          setCurrentStep(step);
          step++;
        } else {
          clearInterval(interval);
        }
      }, 600);
      return () => clearInterval(interval);
    }
  }, [selectedDate, steps.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-absa-500/20 to-absa-700/20 rounded-xl blur-xl" />
      <div className="relative bg-black/40 backdrop-blur-lg rounded-xl p-8 border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-6">Plan Your Switch</h2>
        <p className="text-white/80 mb-8">
          Select your go-live date, and we'll calculate the steps to make your transition seamless.
        </p>

        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <label className="block text-sm font-medium text-absa-500 mb-2">When would you like to go live?</label>
            <div className="relative mb-16">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-absa-500 z-10 pointer-events-none" />
              <DatePicker
                selected={selectedDate ? new Date(selectedDate) : null}
                onChange={(date) => setSelectedDate(date.toISOString().split('T')[0])}
                dateFormat="EEEE, dd MMMM yyyy"
                minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                placeholderText="Select your desired go-live date"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-white/20 hover:border-absa-500 focus:border-absa-500 focus:ring-2 focus:ring-absa-500/20 transition-all cursor-pointer bg-black/40 text-white font-medium placeholder-white/60"
                showPopperArrow={false}
                calendarClassName="bg-black/90 border border-white/20 rounded-xl shadow-xl text-white"
                dayClassName={date => "text-white hover:bg-absa-500 rounded"}
                popperClassName="z-[60]"
                popperPlacement="bottom-start"
                popperModifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                  {
                    name: "preventOverflow",
                    options: {
                      padding: 8,
                    },
                  }
                ]}
              />
            </div>
            <p className="mt-2 text-sm text-white/60">Select your desired go-live date</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-absa-500 mb-2">Select Your Speed Package</label>
            <div className="relative">
              <select
                className="w-full rounded-xl border border-white/20 p-4 text-white bg-black/40 appearance-none hover:border-absa-500 focus:border-absa-500 focus:ring-2 focus:ring-absa-500/20 transition-all cursor-pointer"
                value={selectedSpeed}
                onChange={(e) => setSelectedSpeed(e.target.value)}
              >
                <option value="">Select Speed</option>
                {speedOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-absa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        {steps.length > 0 && (
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-absa-500/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    {React.createElement(step.icon, { className: 'w-5 h-5 text-absa-500' })}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 bottom-0 w-0.5 -ml-[1px] bg-absa-500/20" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/20 to-absa-700/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="text-lg font-semibold text-absa-500 mb-1">{step.title}</div>
                      <div className="text-xl font-bold text-white mb-3">{step.date}</div>
                      <div className="text-white/70 mb-4">{step.description}</div>
                      {step.warning && (
                        <div className="bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-4 backdrop-blur-sm">
                          <div className="flex items-start">
                            <Info className="w-5 h-5 text-orange-400 mt-0.5 mr-2" />
                            <p className="text-orange-300">{step.warning}</p>
                          </div>
                        </div>
                      )}
                      {step.clientAction && (
                        <div className="bg-absa-500/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-center gap-2 text-absa-500 font-medium">
                            <Check className="w-5 h-5" />
                            {step.clientAction}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-absa-500/20 to-absa-700/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/40 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-absa-500 mb-4">Your Switch Summary</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Dates</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-absa-500 mt-1" />
                        <div>
                          <p className="font-medium text-white">Go-Live Date</p>
                          <p className="text-white/70">{steps[steps.length - 1].date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="w-5 h-5 text-absa-500 mt-1" />
                        <div>
                          <p className="font-medium text-white">Order & Cancellation</p>
                          <p className="text-white/70">{steps[0].date}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Important Notes</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-absa-500 mt-1 flex-shrink-0" />
                        <span>Most ISPs require 30 days notice for cancellation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Router className="w-5 h-5 text-absa-500 mt-1 flex-shrink-0" />
                        <span>CourierGuy will deliver your router within 2 business days of dispatch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <PhoneCall className="w-5 h-5 text-absa-500 mt-1 flex-shrink-0" />
                        <span>Our team will contact you on your go-live date to confirm activation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Selected Package */}
                {selectedSpeed && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="font-semibold text-white mb-2">Selected Package</h4>
                    <div className="flex items-center gap-2 text-white/70">
                      <Zap className="w-5 h-5 text-absa-500" />
                      <span className="font-medium">{speedOptions.find(option => option.value === selectedSpeed)?.label || selectedSpeed} Fibre Package</span>
                    </div>
                  </div>
                )}

                {/* Next Steps Button */}
                <div className="mt-8">
                  <motion.button 
                    className="group bg-gradient-to-r from-absa-600 to-absa-700 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-absa-500/20 transition-all flex items-center gap-2"
                    onClick={() => setIsCoverageModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Connected Now
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      {/* Coverage Modal - Moved outside conditional rendering */}
      <CoverageModal 
        isOpen={isCoverageModalOpen} 
        onClose={() => setIsCoverageModalOpen(false)} 
      />
    </motion.div>
  );
};

export default InteractiveSwitchCalculator;
