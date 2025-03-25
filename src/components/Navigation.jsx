import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, MapPin, Calculator, ArrowRight, Router, Shield, Users, Monitor, Cloud, Info, Laptop, Activity, Wifi, ChevronRight, Home, Package, Scale, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CoverageModal from './CoverageModal';
import { trackClick, trackEvent } from '../utils/analytics';

const MegaMenu = ({ isOpen }) => {
  if (!isOpen) return null;
  
  const handleMenuItemClick = (itemName) => {
    trackClick(itemName, 'mega_menu');
  };
  
  return (
    <div className="absolute top-full left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-6 p-8 grid grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="relative overflow-hidden p-6 bg-gradient-to-br from-absa-600 to-absa-800 rounded-2xl text-white group transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3">Save up to R5,000</h3>
            <p className="text-blue-100 mb-4">Free installation, activation and WiFi router included</p>
            <Link 
              to="/recommend" 
              onClick={() => handleMenuItemClick('promo_get_started')}
              className="flex items-center text-white group"
            >
              <span className="group-hover:mr-4 transition-all">Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-absa-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-bold text-white mb-2">Find Your Perfect Package</h3>
            <p className="text-white/70 mb-4">Answer a few questions to find your ideal connection</p>
            <Link
              to="/recommend"
              onClick={() => handleMenuItemClick('find_perfect_package')}
              className="flex items-center text-absa-500 group"
            >
              <span className="group-hover:mr-4 transition-all">Start Now</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <h3 className="font-semibold text-white mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-absa-600 mr-3"></span>
            Quick Actions
          </h3>
          <div className="space-y-1">
            <Link
              to="/why-choose-absa-connect"
              onClick={() => handleMenuItemClick('why_choose_absa_connect')}
              className="flex items-center p-4 hover:bg-white/5 rounded-xl group transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-absa-600/20 text-white group-hover:bg-absa-600 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-white">Why Choose ABSA Connect</div>
                <div className="text-sm text-white/60">Experience the ABSA Connect difference</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-absa-600 group-hover:translate-x-2 transition-all opacity-0 group-hover:opacity-100" />
            </Link>
            
            <Link 
              to="/compare" 
              onClick={() => handleMenuItemClick('free_premium_router')}
              className="flex items-center p-4 hover:bg-white/5 rounded-xl group transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-absa-500/20 text-white group-hover:bg-absa-600 group-hover:text-white transition-colors">
                <Router className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-white">Free Premium Mesh Router</div>
                <div className="text-sm text-white/60">Whole-home WiFi coverage</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-absa-600 group-hover:translate-x-2 transition-all opacity-0 group-hover:opacity-100" />
            </Link>

            <Link 
              to="/mesh-advisor" 
              onClick={() => handleMenuItemClick('connect_whole_home')}
              className="flex items-center p-4 hover:bg-white/5 rounded-xl group transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-absa-500/20 text-white group-hover:bg-absa-600 group-hover:text-white transition-colors">
                <Wifi className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-white">Connect your whole home</div>
                <div className="text-sm text-white/60">Smart home ready network</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-absa-600 group-hover:translate-x-2 transition-all opacity-0 group-hover:opacity-100" />
            </Link>

            <Link 
              to="/wonderwatch" 
              onClick={() => handleMenuItemClick('wonderwatch_monitoring')}
              className="flex items-center p-4 hover:bg-white/5 rounded-xl group transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-absa-500/20 text-white group-hover:bg-absa-600 group-hover:text-white transition-colors">
                <Activity className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-white">ABSA Monitor™</div>
                <div className="text-sm text-white/60">24/7 network monitoring</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-absa-600 group-hover:translate-x-2 transition-all opacity-0 group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-white mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-absa-600 mr-3"></span>
            Additional Features
          </h3>
            
          <div className="flex items-start group">
            <div className="p-2 rounded-lg bg-absa-500/20 text-absa-500 group-hover:bg-absa-600 group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-white">Why Choose ABSA Connect</div>
              <div className="text-sm text-white/60">Experience the ABSA Connect difference</div>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="p-2 rounded-lg bg-absa-500/20 text-absa-500 group-hover:bg-absa-600 group-hover:text-white transition-colors">
              <Router className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-white">Free Premium Mesh Router</div>
              <div className="text-sm text-white/60">Connect your whole home</div>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="p-2 rounded-lg bg-absa-500/20 text-absa-500 group-hover:bg-absa-600 group-hover:text-white transition-colors">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-white">ABSA Monitor™</div>
              <div className="text-sm text-white/60">24/7 proactive network monitoring</div>
            </div>
          </div>

          <div className="relative mt-8 p-6 bg-gradient-to-br from-absa-900 to-absa-700 rounded-2xl text-white overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-absa-500/10 rounded-full -mt-16 -mr-16" />
            <div className="relative z-10">
              <div className="font-medium mb-1">Need Help Deciding?</div>
              <div className="text-sm text-white/60 mb-4">Our experts are ready to assist</div>
              <Link 
                to="/support" 
                onClick={() => handleMenuItemClick('contact_support')}
                className="flex items-center text-white group/btn"
              >
                <span className="group-hover/btn:mr-4 transition-all">Contact Support</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PackagesMegaMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  const operators = [
    { id: 'frogfoot', name: 'Frogfoot', logo: 'https://apextech.group/frogfoot.png' },
    { id: 'lightwire', name: 'Lightwire', logo: 'https://apextech.group/lightwire.png' },
    { id: 'metro-fibre', name: 'Metro Fibre', logo: 'https://apextech.group/mfn.png' },
    { id: 'octotel', name: 'Octotel', logo: 'https://apextech.group/octotel.png' },
    { id: 'openserve', name: 'Openserve', logo: 'https://apextech.group/openserve.png' },
    { id: 'seacom', name: 'Seacom', logo: 'https://apextech.group/seacom.png' },
    { id: 'vumatel', name: 'Vumatel', logo: 'https://apextech.group/vumatel.png' }
  ];

  const handleOperatorClick = (operatorId) => {
    trackEvent('operator_selected', {
      operator_id: operatorId,
      operator_name: operators.find(op => op.id === operatorId)?.name
    });
  };

  return (
    <div className="absolute top-full left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-6 p-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="font-semibold text-white mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-absa-500 mr-3"></span>
            Available Network Operators
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {operators.map((operator) => (
              <Link 
                key={operator.id}
                to={`/packages?fno=${operator.id}`}
                onClick={() => handleOperatorClick(operator.id)}
                className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl group transition-all duration-300 border border-white/10"
              >
                <img 
                  src={operator.logo} 
                  alt={`${operator.name} logo`}
                  className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                />
                <div className="ml-4 flex-1">
                  <div className="font-medium text-white">{operator.name}</div>
                  <div className="text-sm text-white/60">View packages</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-absa-500 group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative overflow-hidden p-6 bg-gradient-to-br from-absa-500 to-absa-700 rounded-2xl text-white group transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3">Uncapped Fibre</h3>
            <p className="text-white mb-4">No throttling. No shaping. Just pure speed from R399/pm.</p>
            <Link 
              to="/packages" 
              onClick={() => trackClick('view_all_plans', 'packages_menu')}
              className="flex items-center text-white group"
            >
              <span className="group-hover:mr-4 transition-all">View Plans</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="font-medium text-white mb-2">Need Help Choosing?</div>
            <div className="text-sm text-white/70 mb-4">Compare packages side by side or let us recommend the best option for you.</div>
            <div className="space-y-3">
              <Link 
                to="/compare"
                onClick={() => trackClick('compare_packages', 'packages_menu')}
                className="block w-full px-4 py-2 bg-white/5 hover:bg-white/10 text-absa-500 rounded-lg font-medium transition-colors text-center border border-white/10"
              >
                Compare All Packages
              </Link>
              <Link 
                to="/recommend"
                onClick={() => trackClick('get_recommendation', 'packages_menu')}
                className="block w-full px-4 py-2 bg-absa-600 text-white rounded-lg font-medium hover:bg-absa-500 transition-colors text-center"
              >
                Get a Recommendation
              </Link>
              <Link 
                to="/mesh-advisor"
                onClick={() => trackClick('mesh_advisor', 'packages_menu')}
                className="block w-full px-4 py-2 bg-absa-500/20 hover:bg-absa-500/30 text-absa-600 rounded-lg font-medium transition-colors text-center border border-white/10"
              >
                Smart Home Network & Wi-Fi Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCoverageModalOpen = () => {
    trackEvent('coverage_modal_opened', {
      source: 'navigation'
    });
    setIsCoverageModalOpen(true);
  };

  const handleMobileMenuToggle = (isOpening) => {
    trackEvent('mobile_menu_interaction', {
      action: isOpening ? 'open' : 'close'
    });
    setIsOpen(isOpening);
  };

  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Coverage',
      onClick: handleCoverageModalOpen
    },
    {
      label: 'Packages',
      hasDropdown: true,
      onMouseEnter: () => {
        setPackagesOpen(true);
        setMegaMenuOpen(false);
        trackEvent('packages_menu_opened');
      }
    },
    {
      label: 'ABSA Monitor™',
      href: '/absa-monitor',
      icon: Activity
    },
    {
      label: 'How to Switch',
      href: '/switch'
    },
    {
      label: 'Support',
      href: '/support'
    },
    {
      label: 'Client Portal',
      href: 'https://portal.absaconnect.co.za',
      isExternal: true,
      className: 'ml-2 text-absa-600 hover:text-absa-500'
    }
  ];

  const mobileMenuItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'Coverage',
      onClick: handleCoverageModalOpen,
      icon: MapPin
    },
    {
      label: 'All Packages',
      href: '/packages',
      icon: Package
    },
    {
      label: 'Compare Packages',
      href: '/compare',
      icon: Scale
    },
    {
      label: 'Get a Recommendation',
      href: '/recommend',
      icon: Calculator
    },
    {
      label: 'ABSA Monitor™',
      href: '/absa-monitor',
      icon: Activity
    },
    {
      label: 'How to Switch',
      href: '/switch',
      icon: ArrowRight
    },
    {
      label: 'Support',
      href: '/support',
      icon: HelpCircle
    },
    {
      label: 'Home Network Advisor',
      href: '/mesh-advisor',
      icon: Wifi
    },
    {
      label: 'Client Portal',
      href: 'https://portal.absaconnect.co.za',
      icon: Users,
      isExternal: true,
      className: 'mt-4 text-absa-600'
    }
  ];

  const handleNavItemClick = (item) => {
    if (item.href) {
      trackClick(item.label.toLowerCase(), 'navigation');
    }
  };

  const getItemProps = (item) => {
    if (item.href) {
      return {
        as: Link,
        to: item.href,
        onClick: () => handleNavItemClick(item)
      };
    }
    return {
      as: 'button',
      onClick: item.onClick
    };
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
       scrolled || megaMenuOpen || packagesOpen
         ? 'bg-black shadow-lg py-2'
         : 'bg-transparent py-4'
     }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => trackClick('logo', 'navigation')}
            className="relative z-50"
          >
            <div className="flex items-center">
              <img
                src={scrolled || megaMenuOpen || packagesOpen || isOpen ? "https://apextech.group/absa-logo-1.png" : "https://apextech.group/absa-logo-1.png"}
                alt="ABSA Connect Logo"
                className="h-10 transition-transform duration-300 hover:scale-105"
              />
              <span className={`ml-2 font-bold text-lg ${scrolled || megaMenuOpen || packagesOpen || isOpen ? 'text-absa-600' : 'text-white'}`}>Connect</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.href ? (
                  item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackClick(item.label.toLowerCase(), 'navigation')}
                      className={`px-4 py-2 rounded-lg transition-colors ${item.className || ''} ${
                        scrolled || megaMenuOpen || packagesOpen
                          ? location.pathname === item.href ? 'text-white' : 'text-white/80 hover:text-white'
                          : location.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => trackClick(item.label.toLowerCase(), 'navigation')}
                      className={`px-4 py-2 rounded-lg transition-colors ${item.className || ''} ${
                        scrolled || megaMenuOpen || packagesOpen
                          ? location.pathname === item.href ? 'text-white' : 'text-white/80 hover:text-white'
                          : location.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <button
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      scrolled || megaMenuOpen || packagesOpen
                        ? location.pathname === item.href ? 'text-white' : 'text-white/80 hover:text-white'
                        : location.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                    onClick={item.onClick}
                    onMouseEnter={() => {
                      if (item.onMouseEnter) {
                        item.onMouseEnter();
                        trackEvent('menu_hover', {
                          menu_item: item.label.toLowerCase()
                        });
                      }
                    }}
                  >
                    <span className="flex items-center">
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${packagesOpen ? 'rotate-180' : ''}`} />
                      )}
                    </span>
                  </button>
                )}
              </div>
            ))}
            
            <button 
              className={`ml-4 px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                megaMenuOpen
                  ? 'bg-absa-600 text-white'
                  : scrolled || packagesOpen
                    ? 'bg-absa-600 text-white hover:bg-absa-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onMouseEnter={() => {
                setMegaMenuOpen(true);
                setPackagesOpen(false);
                trackEvent('mega_menu_opened');
              }}
            >
              Get Connected
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg bg-blue-600/10 relative z-50"
            onClick={() => {
              const newIsOpen = !isOpen;
              handleMobileMenuToggle(newIsOpen);
              setMegaMenuOpen(false);
              setPackagesOpen(false);
            }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-white/40 backdrop-blur-lg z-40 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ top: '0', height: '100vh', background: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0.3))' }}
        >
          <div className="pt-24 px-6 h-full overflow-y-auto pb-24">
            <div className="space-y-3">
              {mobileMenuItems.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackClick(item.label.toLowerCase(), 'mobile_menu');
                          setIsOpen(false);
                        }}
                        className={`flex items-center space-x-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors ${item.className || ''}`}
                      >
                        {item.icon && <item.icon className="w-5 h-5" />}
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => {
                          trackClick(item.label.toLowerCase(), 'mobile_menu');
                          setIsOpen(false);
                        }}
                        className={`flex items-center space-x-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors ${item.className || ''}`}
                      >
                        {item.icon && <item.icon className="w-5 h-5" />}
                        <span>{item.label}</span>
                      </Link>
                    )
                  ) : (
                    <button
                      onClick={() => {
                        trackClick(item.label.toLowerCase(), 'mobile_menu');
                        item.onClick();
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors w-full text-left"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Modal */}
      <CoverageModal 
        isOpen={isCoverageModalOpen} 
        onClose={() => {
          trackEvent('coverage_modal_closed');
          setIsCoverageModalOpen(false);
        }}
      />

      {/* Mega Menus */}
      <div 
        className="hidden md:block"
        onMouseLeave={() => {
          if (megaMenuOpen) trackEvent('mega_menu_closed');
          if (packagesOpen) trackEvent('packages_menu_closed');
          setMegaMenuOpen(false);
          setPackagesOpen(false);
        }}
      >
        <MegaMenu isOpen={megaMenuOpen} />
        <PackagesMegaMenu isOpen={packagesOpen} />
      </div>
    </nav>
  );
};

export default Navigation;