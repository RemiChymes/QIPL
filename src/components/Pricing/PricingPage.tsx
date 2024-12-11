import React from 'react';
import Navbar from '../Home/Navigation/Navbar';
import FooterSection from '../Home/Sections/FooterSection';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: 99,
      description: 'Perfect for small healthcare practices',
      features: [
        'HIPAA Compliance',
        'Basic Analytics',
        'Up to 5 Team Members',
        'Email Support',
        'Standard Reports'
      ]
    },
    {
      name: 'Professional',
      price: 199,
      description: 'Ideal for growing organizations',
      features: [
        'Everything in Starter',
        'Advanced Analytics',
        'Up to 20 Team Members',
        'Priority Support',
        'Custom Reports',
        'API Access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      description: 'For large healthcare institutions',
      features: [
        'Everything in Professional',
        'Unlimited Team Members',
        'Custom Integration',
        '24/7 Support',
        'Dedicated Account Manager',
        'Custom Development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your organization's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-gray-600 mb-4">{plan.description}</div>
              <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PricingPage;