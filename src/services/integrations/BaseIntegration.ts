import axios, { AxiosInstance } from 'axios';
import { IntegrationConfig, HealthcareData, IntegrationError } from '../../types/integrations';

export abstract class BaseIntegration {
  protected client: AxiosInstance;
  protected config: IntegrationConfig;

  constructor(config: IntegrationConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.system.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }

  protected abstract authenticate(): Promise<void>;
  protected abstract fetchQualityMetrics(startDate: Date, endDate: Date): Promise<HealthcareData[]>;
  
  protected handleError(error: any): IntegrationError {
    return {
      code: error.response?.status || 'UNKNOWN',
      message: error.message,
      system: this.config.system.name,
      timestamp: new Date().toISOString(),
    };
  }
}