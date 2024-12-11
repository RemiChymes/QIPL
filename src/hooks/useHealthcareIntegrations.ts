import { useState, useEffect } from 'react';
import { IntegrationService } from '../services/IntegrationService';
import { HealthcareData } from '../types/integrations';

export const useHealthcareIntegrations = (systemId: string) => {
  const [data, setData] = useState<HealthcareData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1);

        const integrationService = IntegrationService.getInstance();
        const qualityData = await integrationService.fetchQualityData(
          systemId,
          startDate,
          endDate
        );
        setData(qualityData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [systemId]);

  return { data, loading, error };
};