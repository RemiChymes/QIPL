import React from 'react';
import { TrendingUp, TrendingDown, Activity, Target, Clock, Zap } from 'lucide-react';
import { MetricCard } from '../../types';
import MetricCardComponent from './MetricCard';

const MetricsOverview: React.FC = () => {
  const metrics: MetricCard[] = [
    {
      title: 'Quality Score',
      value: 92,
      trend: 5.2,
      icon: <Target className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Active Projects',
      value: 24,
      trend: 2.1,
      icon: <Activity className="w-6 h-6 text-green-500" />,
    },
    {
      title: 'Cycle Time',
      value: 18,
      trend: -3.4,
      icon: <Clock className="w-6 h-6 text-purple-500" />,
    },
    {
      title: 'Efficiency Rate',
      value: 87,
      trend: 4.1,
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric) => (
        <MetricCardComponent key={metric.title} {...metric} />
      ))}
    </div>
  );
};

export default MetricsOverview;