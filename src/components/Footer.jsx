import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, Mail, MessageSquare, Shield, 
  Wifi, Clock, Zap, ArrowRight, Calculator 
} from 'lucide-react';

const Footer = () => (
  <footer className="relative -mt-8">
    {/* Recommendation Bar */}
    <div className="bg-black relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-absa-900/50">
              <Calculator className="w-6 h-6 text-absa-600" />
            </div>
            <div>
              <h3 className="text-white font-medium">Not sure which package is right for you?</h3>
              <p className="text-white/70">Get a personalized recommendation based on your needs</p>
            </div>
          </div>
          <Link 
            to="/recommend" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-absa-500 to-absa-700 text-white rounded-lg hover:from-absa-600 hover:to-absa-800 transition-all group whitespace-nowrap"
          >
            Get Recommendation
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="relative bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-900/50 to-black">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-absa-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-absa-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Rest of the footer content */}
      <div className="relative">
        {/* Footer Main Content */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center">
                  <img
                    src="https://apextech.group/absa-logo-1.png"
                    alt="ABSA Connect Logo"
                    className="h-8 mb-6"
                  />
                  <span className="ml-2 font-bold text-lg text-white mb-6">Connect</span>
                </div>
                <p className="text-white/70">
                  Banking-grade secure connectivity for ABSA clients
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/packages" className="text-white/70 hover:text-white transition-colors">
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/coverage" className="text-white/70 hover:text-white transition-colors">
                      Coverage
                    </Link>
                  </li>
                  <li>
                    <Link to="/absa-monitor" className="text-white/70 hover:text-white transition-colors">
                      ABSA Monitor™
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="text-white/70 hover:text-white transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/switch" className="text-white/70 hover:text-white transition-colors">
                      How to Switch
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold text-white mb-4">Contact</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://wa.me/27860222272"
                      className="flex items-center text-white/70 hover:text-white transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      WhatsApp Support
                    </a>
                  </li>
                  <li>
                    <button className="flex items-center text-white/70 hover:text-white transition-colors">
                      <PhoneCall className="w-5 h-5 mr-2" />
                      Live Chat
                    </button>
                  </li>
                  <li>
                    <a
                      href="mailto:connect@absa.africa"
                      className="flex items-center text-white/70 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-bold text-white mb-4">Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-white/70">
                    <Shield className="w-4 h-4 mr-2 text-absa-600" />
                    Banking-Grade Security
                  </li>
                  <li className="flex items-center text-white/70">
                    <Clock className="w-4 h-4 mr-2 text-absa-600" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-white/70">
                    <Wifi className="w-4 h-4 mr-2 text-absa-600" />
                    Free Premium Router
                  </li>
                  <li className="flex items-center text-white/70">
                    <Zap className="w-4 h-4 mr-2 text-absa-600" />
                    ABSA Client Exclusive
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              2024 ABSA Connect. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/terms-and-conditions" className="text-white/60 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="text-white/60 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/acceptable-use-policy" className="text-white/60 text-sm hover:text-white transition-colors">
                Acceptable Use Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;