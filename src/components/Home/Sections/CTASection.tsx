import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../../../hooks/useNavigation';

const CTASection: React.FC = () => {
  const { handleNavigation } = useNavigation();

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Quality Management?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join healthcare organizations that trust our HIPAA-compliant platform for their quality management needs.
        </p>
        <button 
          onClick={() => handleNavigation('/signup')}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
        >
          Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;