import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useNavigation } from '../../../hooks/useNavigation';
import { useAuth } from '../../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { handleNavigation } = useNavigation();
  const { currentUser } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">QI Platform</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/features')}
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavigation('/pricing')}
              className="text-gray-600 hover:text-gray-900"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('/resources')}
              className="text-gray-600 hover:text-gray-900"
            >
              Resources
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <button
                onClick={() => handleNavigation('/dashboard', true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation('/login')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigation('/signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;