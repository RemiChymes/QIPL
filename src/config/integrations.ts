import { HealthcareSystem } from '../types/integrations';

export const SUPPORTED_SYSTEMS: HealthcareSystem[] = [
  {
    id: 'epic',
    name: 'Epic Systems',
    type: 'EHR',
    apiVersion: 'FHIR R4',
    baseUrl: process.env.EPIC_API_URL || '',
  },
  {
    id: 'cerner',
    name: 'Cerner',
    type: 'EHR',
    apiVersion: 'FHIR R4',
    baseUrl: process.env.CERNER_API_URL || '',
  },
  {
    id: 'allscripts',
    name: 'Allscripts',
    type: 'EHR',
    apiVersion: 'FHIR R4',
    baseUrl: process.env.ALLSCRIPTS_API_URL || '',
  },
  {
    id: 'meditech',
    name: 'MEDITECH',
    type: 'EHR',
    apiVersion: 'FHIR R4',
    baseUrl: process.env.MEDITECH_API_URL || '',
  },
  {
    id: 'labware',
    name: 'LabWare LIMS',
    type: 'LIMS',
    apiVersion: 'REST v2',
    baseUrl: process.env.LABWARE_API_URL || '',
  },
  {
    id: 'starlims',
    name: 'STARLIMS',
    type: 'LIMS',
    apiVersion: 'REST v3',
    baseUrl: process.env.STARLIMS_API_URL || '',
  },
  {
    id: 'labvantage',
    name: 'LabVantage',
    type: 'LIMS',
    apiVersion: 'REST v8',
    baseUrl: process.env.LABVANTAGE_API_URL || '',
  },
  {
    id: 'agfa',
    name: 'Agfa HealthCare',
    type: 'PACS',
    apiVersion: 'DICOM',
    baseUrl: process.env.AGFA_API_URL || '',
  },
  {
    id: 'ge-centricity',
    name: 'GE Centricity',
    type: 'RIS',
    apiVersion: 'HL7 v2.8',
    baseUrl: process.env.GE_CENTRICITY_API_URL || '',
  },
  {
    id: 'athena',
    name: 'athenahealth',
    type: 'PMS',
    apiVersion: 'REST v1',
    baseUrl: process.env.ATHENA_API_URL || '',
  },
];