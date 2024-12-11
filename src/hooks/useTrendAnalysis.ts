import { useState, useEffect } from 'react';

interface TrendData {
  date: string;
  actual: number;
  predicted: number;
}

export const useTrendAnalysis = () => {
  const [trends, setTrends] = useState<TrendData[]>([]);

  useEffect(() => {
    // Simulated data - replace with actual API calls
    const mockTrends = [
      { date: '2024-01', actual: 82, predicted: 80 },
      { date: '2024-02', actual: 85, predicted: 84 },
      { date: '2024-03', actual: 88, predicted: 87 },
      { date: '2024-04', actual: 86, predicted: 89 },
      { date: '2024-05', actual: 90, predicted: 91 }
    ];
    setTrends(mockTrends);
  }, []);

  return { trends };
};