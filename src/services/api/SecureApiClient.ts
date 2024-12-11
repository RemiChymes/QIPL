import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { SecurityService } from '../security/SecurityService';

export class SecureApiClient {
  private static instance: SecureApiClient;
  private client: AxiosInstance;
  private securityService: SecurityService;

  private constructor() {
    this.securityService = SecurityService.getInstance();
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 30000,
      headers: {
        ...this.securityService.getSecurityHeaders(),
        'Content-Type': 'application/json'
      }
    });

    this.setupInterceptors();
  }

  public static getInstance(): SecureApiClient {
    if (!SecureApiClient.instance) {
      SecureApiClient.instance = new SecureApiClient();
    }
    return SecureApiClient.instance;
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      async (config) => {
        const isValidSession = await this.securityService.validateSession();
        if (!isValidSession) {
          throw new Error('Invalid session');
        }

        if (config.data) {
          config.data = this.securityService.prepareDataForTransmission(config.data);
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        if (response.data) {
          response.data = this.securityService.receiveSecureData(response.data);
        }
        return response;
      },
      (error) => Promise.reject(error)
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}