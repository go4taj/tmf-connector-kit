import { TMFClientConfig, TMFRequestOptions, TMFResponse } from './types';
import { HTTPClient } from './http';
import { TMFTransformer } from './transformer';
import { TMFAPIClient } from './api-client';
import { TMF_API_REGISTRY } from '../tmf/registry';

export class TMFClient {
  private config: TMFClientConfig;
  private http: HTTPClient;
  private registeredAPIs: Map<string, any> = new Map(TMF_API_REGISTRY);

  constructor(config: TMFClientConfig) {
    this.config = config;
    this.http = new HTTPClient(config);
  }

  /**
   * Get a specific TMF API client by code
   * @param code TMF API code (e.g., 620, 622, "TMF620")
   */
  code(code: number | string | number[]): TMFAPIClient {
    if (Array.isArray(code)) {
      // For orchestration use cases with multiple APIs
      return new TMFAPIClient(this.http, code.map(c => this.normalizeCode(c)));
    }

    const normalizedCode = this.normalizeCode(code);
    return new TMFAPIClient(this.http, [normalizedCode]);
  }

  /**
   * Register a custom TMF API handler
   * @param code TMF API code
   * @param handler API handler class or configuration
   */
  register(code: string, handler: any): void {
    this.registeredAPIs.set(code, handler);
  }

  /**
   * Get all registered TMF APIs
   */
  getRegisteredAPIs(): string[] {
    return Array.from(this.registeredAPIs.keys());
  }

  private normalizeCode(code: number | string): string {
    const codeStr = code.toString();
    return codeStr.startsWith('TMF') ? codeStr : `TMF${codeStr}`;
  }
}
