import React from 'react';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Quality Assurance',
      description: 'Implement robust quality control processes'
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: 'Certification Support',
      description: 'ISO 9001 and other certification tracking'
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: 'Real-time Monitoring',
      description: 'Track metrics and KPIs in real-time'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Enhanced team communication tools'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Quality Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 bg-gray-50 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;