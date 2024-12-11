import React from 'react';
import { Building, PieChart, BarChart2 } from 'lucide-react';

const IndustriesSection: React.FC = () => {
  const industries = [
    { 
      icon: <Building className="w-8 h-8 text-blue-500" />, 
      name: 'Healthcare',
      description: 'HIPAA-compliant quality management for healthcare providers'
    },
    { 
      icon: <PieChart className="w-8 h-8 text-green-500" />, 
      name: 'Pharmaceuticals',
      description: 'FDA compliance and quality control tracking'
    },
    { 
      icon: <BarChart2 className="w-8 h-8 text-purple-500" />, 
      name: 'Medical Devices',
      description: 'ISO 13485 compliance and quality assurance'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted Across Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="inline-block p-4 bg-white rounded-lg shadow-sm mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;