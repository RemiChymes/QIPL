export interface HealthcareSystem {
  id: string;
  name: string;
  type: 'EHR' | 'LIMS' | 'PACS' | 'RIS' | 'PMS';
  apiVersion: string;
  baseUrl: string;
}

export interface IntegrationConfig {
  system: HealthcareSystem;
  credentials: {
    clientId: string;
    clientSecret: string;
    scope: string[];
  };
}

export interface HealthcareData {
  patientId: string;
  timestamp: string;
  metrics: {
    qualityScore: number;
    complianceRate: number;
    incidentCount: number;
  };
  source: string;
}

export interface IntegrationError {
  code: string;
  message: string;
  system: string;
  timestamp: string;
}