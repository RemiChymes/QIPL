import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { month: 'Jan', qualityScore: 85, efficiency: 78, defects: 12 },
  { month: 'Feb', qualityScore: 88, efficiency: 80, defects: 10 },
  { month: 'Mar', qualityScore: 92, efficiency: 85, defects: 8 },
  { month: 'Apr', qualityScore: 90, efficiency: 87, defects: 7 },
  { month: 'May', qualityScore: 95, efficiency: 89, defects: 5 },
];

const AnalyticsCharts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Quality Metrics Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="qualityScore" stroke="#3B82F6" name="Quality Score" />
              <Line type="monotone" dataKey="efficiency" stroke="#10B981" name="Efficiency" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Defects Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="defects" fill="#EF4444" name="Defects Found" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;