import { EncryptionService } from './EncryptionService';
import bcrypt from 'bcryptjs';

export class SecurityService {
  private static instance: SecurityService;
  private encryptionService: EncryptionService;
  private readonly SALT_ROUNDS = 12;

  private constructor() {
    this.encryptionService = EncryptionService.getInstance();
  }

  public static getInstance(): SecurityService {
    if (!SecurityService.instance) {
      SecurityService.instance = new SecurityService();
    }
    return SecurityService.instance;
  }

  // Password hashing and verification
  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.SALT_ROUNDS);
    return bcrypt.hash(password, salt);
  }

  public async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  // Secure data storage
  public secureStore(key: string, data: any): void {
    const encryptedData = this.encryptionService.encryptData(data);
    localStorage.setItem(key, encryptedData);
  }

  public secureRetrieve(key: string): any {
    const encryptedData = localStorage.getItem(key);
    if (!encryptedData) return null;
    return this.encryptionService.decryptData(encryptedData);
  }

  // Session management
  public async createSecureSession(userData: any): Promise<string> {
    const sessionToken = await this.encryptionService.generateSecureToken(userData);
    this.secureStore('session', { token: sessionToken, timestamp: Date.now() });
    return sessionToken;
  }

  public async validateSession(): Promise<boolean> {
    const session = this.secureRetrieve('session');
    if (!session) return false;

    try {
      await this.encryptionService.verifySecureToken(session.token);
      return true;
    } catch {
      return false;
    }
  }

  // Secure data transmission
  public prepareDataForTransmission(data: any): string {
    return this.encryptionService.encryptSensitiveData(data);
  }

  public receiveSecureData(encryptedData: string): any {
    return this.encryptionService.decryptSensitiveData(encryptedData);
  }

  // Security headers for API requests
  public getSecurityHeaders(): Record<string, string> {
    return {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };
  }
}