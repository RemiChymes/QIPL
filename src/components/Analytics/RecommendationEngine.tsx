import React from 'react';
import { AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';
import { useRecommendations } from '../../hooks/useRecommendations';

const RecommendationEngine: React.FC = () => {
  const { recommendations } = useRecommendations();

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'improvement':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'achievement':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">AI-Powered Recommendations</h3>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">{getIcon(rec.type)}</div>
            <div>
              <h4 className="font-medium text-gray-900">{rec.title}</h4>
              <p className="text-gray-600 mt-1">{rec.description}</p>
              <div className="mt-2">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationEngine;