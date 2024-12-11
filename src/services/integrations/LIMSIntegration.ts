import { BaseIntegration } from './BaseIntegration';
import { HealthcareData } from '../../types/integrations';

export class LIMSIntegration extends BaseIntegration {
  protected async authenticate(): Promise<void> {
    const { clientId, clientSecret } = this.config.credentials;
    try {
      const response = await this.client.post('/auth', {
        apiKey: clientId,
        secret: clientSecret,
      });
      
      this.client.defaults.headers.common['X-API-Key'] = response.data.token;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async fetchQualityMetrics(startDate: Date, endDate: Date): Promise<HealthcareData[]> {
    try {
      await this.authenticate();
      const response = await this.client.get('/quality-metrics', {
        params: {
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
        },
      });

      return response.data.map((item: any) => ({
        patientId: item.sample_id,
        timestamp: item.timestamp,
        metrics: {
          qualityScore: item.quality_score,
          complianceRate: item.compliance_rate,
          incidentCount: item.incident_count,
        },
        source: this.config.system.name,
      }));
    } catch (error) {
      throw this.handleError(error);
    }
  }
}