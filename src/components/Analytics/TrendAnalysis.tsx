import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTrendAnalysis } from '../../hooks/useTrendAnalysis';

const TrendAnalysis: React.FC = () => {
  const { trends } = useTrendAnalysis();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Quality Trends Over Time</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#3B82F6" name="Actual Performance" />
            <Line type="monotone" dataKey="predicted" stroke="#8B5CF6" name="Predicted Trend" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendAnalysis;