import { BaseIntegration } from './BaseIntegration';
import { HealthcareData } from '../../types/integrations';
import FHIR from 'fhir.js';

export class EHRIntegration extends BaseIntegration {
  private fhirClient: any;

  protected async authenticate(): Promise<void> {
    const { clientId, clientSecret, scope } = this.config.credentials;
    try {
      const response = await this.client.post('/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: scope.join(' '),
      });
      
      this.client.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      this.fhirClient = FHIR({
        baseUrl: this.config.system.baseUrl,
        auth: { bearer: response.data.access_token },
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async fetchQualityMetrics(startDate: Date, endDate: Date): Promise<HealthcareData[]> {
    try {
      await this.authenticate();
      const response = await this.fhirClient.search({
        type: 'Observation',
        query: {
          date: `ge${startDate.toISOString()}`,
          'date-end': `le${endDate.toISOString()}`,
          category: 'quality-metric',
        },
      });

      return response.data.entry.map((entry: any) => ({
        patientId: entry.resource.subject.reference.split('/').pop(),
        timestamp: entry.resource.effectiveDateTime,
        metrics: {
          qualityScore: parseFloat(entry.resource.valueQuantity.value),
          complianceRate: parseFloat(entry.resource.component?.[0]?.valueQuantity?.value || '0'),
          incidentCount: parseInt(entry.resource.component?.[1]?.valueQuantity?.value || '0'),
        },
        source: this.config.system.name,
      }));
    } catch (error) {
      throw this.handleError(error);
    }
  }
}