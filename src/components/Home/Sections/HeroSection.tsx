import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../../../hooks/useNavigation';

const HeroSection: React.FC = () => {
  const { handleNavigation } = useNavigation();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Secure Quality Management for Healthcare Excellence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          HIPAA-compliant platform for streamlining quality improvement initiatives, ensuring patient safety, and maintaining regulatory compliance.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => handleNavigation('/signup')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button 
            onClick={() => handleNavigation('/demo')}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;