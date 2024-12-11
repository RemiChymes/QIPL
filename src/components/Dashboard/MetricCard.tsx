import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricCard } from '../../types';

const MetricCardComponent: React.FC<MetricCard> = ({ title, value, trend, icon }) => {
  const isPositive = trend >= 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
          <span className="text-sm font-medium">{Math.abs(trend)}%</span>
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default MetricCardComponent;