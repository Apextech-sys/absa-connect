import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, MapPin, Activity } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-7xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white/90 mb-6">Page Not Found</h2>
        <p className="text-lg text-white/80 mb-12">
          Oops! The page you're looking for seems to have vanished into the digital ether. 
          Don't worry though, we've got plenty of other great content for you to explore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <Link 
            to="/"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <Link 
            to="/packages"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <Package className="w-5 h-5" />
            <span>View Packages</span>
          </Link>

          <button
            onClick={() => document.getElementById('coverage-modal').click()}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <MapPin className="w-5 h-5" />
            <span>Check Coverage</span>
          </button>

          <Link 
            to="/wonderwatch"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <Activity className="w-5 h-5" />
            <span>WonderWatch™</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
