import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQualityMetrics } from '../../hooks/useQualityMetrics';

const QualityMetrics: React.FC = () => {
  const { metrics } = useQualityMetrics();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Quality Metrics Analysis</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="qualityScore" fill="#3B82F6" name="Quality Score" />
            <Bar dataKey="defectRate" fill="#EF4444" name="Defect Rate" />
            <Bar dataKey="processEfficiency" fill="#10B981" name="Process Efficiency" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QualityMetrics;