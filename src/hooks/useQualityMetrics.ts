import { useState, useEffect } from 'react';

interface QualityMetric {
  period: string;
  qualityScore: number;
  defectRate: number;
  processEfficiency: number;
}

export const useQualityMetrics = () => {
  const [metrics, setMetrics] = useState<QualityMetric[]>([]);

  useEffect(() => {
    // Simulated data - replace with actual API calls
    const mockMetrics = [
      { period: 'Jan', qualityScore: 85, defectRate: 12, processEfficiency: 78 },
      { period: 'Feb', qualityScore: 88, defectRate: 10, processEfficiency: 82 },
      { period: 'Mar', qualityScore: 92, defectRate: 8, processEfficiency: 85 },
      { period: 'Apr', qualityScore: 90, defectRate: 7, processEfficiency: 88 },
      { period: 'May', qualityScore: 95, defectRate: 5, processEfficiency: 92 }
    ];
    setMetrics(mockMetrics);
  }, []);

  return { metrics };
};