import { EHRIntegration } from './integrations/EHRIntegration';
import { LIMSIntegration } from './integrations/LIMSIntegration';
import { SUPPORTED_SYSTEMS } from '../config/integrations';
import { HealthcareSystem, IntegrationConfig, HealthcareData } from '../types/integrations';

export class IntegrationService {
  private static instance: IntegrationService;
  private integrations: Map<string, EHRIntegration | LIMSIntegration> = new Map();

  private constructor() {
    this.initializeIntegrations();
  }

  public static getInstance(): IntegrationService {
    if (!IntegrationService.instance) {
      IntegrationService.instance = new IntegrationService();
    }
    return IntegrationService.instance;
  }

  private initializeIntegrations() {
    SUPPORTED_SYSTEMS.forEach(system => {
      const config: IntegrationConfig = {
        system,
        credentials: {
          clientId: process.env[`${system.id.toUpperCase()}_CLIENT_ID`] || '',
          clientSecret: process.env[`${system.id.toUpperCase()}_CLIENT_SECRET`] || '',
          scope: ['quality_metrics.read'],
        },
      };

      const integration = this.createIntegration(system, config);
      if (integration) {
        this.integrations.set(system.id, integration);
      }
    });
  }

  private createIntegration(system: HealthcareSystem, config: IntegrationConfig) {
    switch (system.type) {
      case 'EHR':
        return new EHRIntegration(config);
      case 'LIMS':
        return new LIMSIntegration(config);
      default:
        return null;
    }
  }

  public async fetchQualityData(
    systemId: string,
    startDate: Date,
    endDate: Date
  ): Promise<HealthcareData[]> {
    const integration = this.integrations.get(systemId);
    if (!integration) {
      throw new Error(`Integration not found for system: ${systemId}`);
    }

    return integration.fetchQualityMetrics(startDate, endDate);
  }
}