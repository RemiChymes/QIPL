import React from 'react';
import { Lock, Shield, FileText } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const features = [
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: 'HIPAA Compliant',
      description: 'Fully compliant with HIPAA security and privacy requirements'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all sensitive information'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: 'Audit Trails',
      description: 'Comprehensive logging and audit capabilities'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform meets the highest security standards and compliance requirements for healthcare organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="inline-block p-3 bg-white rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;