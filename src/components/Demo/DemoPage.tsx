import React from 'react';
import Navbar from '../Home/Navigation/Navbar';
import FooterSection from '../Home/Sections/FooterSection';
import { Play, Download, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">See QI Platform in Action</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our platform streamlines quality management processes and ensures HIPAA compliance.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
            <Play className="w-16 h-16 text-white opacity-80 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Product Demo Walkthrough</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Quality Management Dashboard',
                'HIPAA Compliance Features',
                'Real-time Analytics'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download Full Feature Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default DemoPage;