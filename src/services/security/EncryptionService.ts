import CryptoJS from 'crypto-js';
import * as jose from 'jose';
import forge from 'node-forge';
import secureRandom from 'secure-random';

export class EncryptionService {
  private static instance: EncryptionService;
  private readonly keySize = 256;
  private readonly masterKey: string;
  private readonly publicKey: forge.pki.rsa.PublicKey;
  private readonly privateKey: forge.pki.rsa.PrivateKey;

  private constructor() {
    // Generate master key for symmetric encryption
    this.masterKey = this.generateMasterKey();
    
    // Generate RSA key pair for asymmetric encryption
    const keyPair = forge.pki.rsa.generateKeyPair({ bits: 4096 });
    this.publicKey = keyPair.publicKey;
    this.privateKey = keyPair.privateKey;
  }

  public static getInstance(): EncryptionService {
    if (!EncryptionService.instance) {
      EncryptionService.instance = new EncryptionService();
    }
    return EncryptionService.instance;
  }

  private generateMasterKey(): string {
    const randomBytes = secureRandom(32, { type: 'Uint8Array' });
    return forge.util.bytesToHex(randomBytes);
  }

  // Symmetric encryption for data at rest
  public encryptData(data: any): string {
    const jsonStr = JSON.stringify(data);
    const iv = CryptoJS.lib.WordArray.random(16);
    const encrypted = CryptoJS.AES.encrypt(jsonStr, this.masterKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    
    return iv.toString() + encrypted.toString();
  }

  public decryptData(encryptedData: string): any {
    const iv = CryptoJS.enc.Hex.parse(encryptedData.slice(0, 32));
    const encrypted = encryptedData.slice(32);
    
    const decrypted = CryptoJS.AES.decrypt(encrypted, this.masterKey, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }

  // Asymmetric encryption for sensitive data transmission
  public encryptSensitiveData(data: any): string {
    const jsonStr = JSON.stringify(data);
    return forge.util.encode64(
      this.publicKey.encrypt(jsonStr, 'RSA-OAEP', {
        md: forge.md.sha256.create()
      })
    );
  }

  public decryptSensitiveData(encryptedData: string): any {
    const decrypted = this.privateKey.decrypt(
      forge.util.decode64(encryptedData),
      'RSA-OAEP',
      {
        md: forge.md.sha256.create()
      }
    );
    return JSON.parse(decrypted);
  }

  // JWT token generation for secure sessions
  public async generateSecureToken(payload: any): Promise<string> {
    const secret = new TextEncoder().encode(this.masterKey);
    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(secret);
  }

  public async verifySecureToken(token: string): Promise<any> {
    const secret = new TextEncoder().encode(this.masterKey);
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
  }

  // Hash sensitive data (e.g., passwords) before storage
  public hashData(data: string): string {
    return CryptoJS.SHA3(data, { outputLength: 512 }).toString();
  }
}