import React from 'react';
import Navbar from '../Home/Navigation/Navbar';
import FooterSection from '../Home/Sections/FooterSection';
import { Shield, BarChart2, Users, Clock, Lock, FileText } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'HIPAA Compliance',
      description: 'Built-in compliance features ensuring your data meets healthcare regulations.'
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-green-500" />,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics for quality metrics.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Streamlined communication and task management for quality teams.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of quality metrics and KPIs.'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Security',
      description: 'Enterprise-grade security with end-to-end encryption.'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-500" />,
      title: 'Documentation',
      description: 'Comprehensive documentation and audit trail capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Quality Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage, monitor, and improve quality processes while maintaining HIPAA compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-gray-50 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default FeaturesPage;