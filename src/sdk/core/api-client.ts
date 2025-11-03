import { HTTPClient } from './http';
import { TMFRequestOptions, TMFResponse } from './types';
import { TMFTransformer } from './transformer';

export class TMFAPIClient {
  private http: HTTPClient;
  private apiCodes: string[];

  constructor(http: HTTPClient, apiCodes: string[]) {
    this.http = http;
    this.apiCodes = apiCodes;
  }

  /**
   * Perform a GET request
   */
  async get<T = any>(path: string, options?: TMFRequestOptions): Promise<TMFResponse<T>> {
    const response = await this.http.request('GET', this.buildPath(path), options);
    return this.createResponse<T>(response);
  }

  /**
   * Perform a POST request
   */
  async post<T = any>(path: string, body: any, options?: TMFRequestOptions): Promise<TMFResponse<T>> {
    const response = await this.http.request('POST', this.buildPath(path), options, body);
    return this.createResponse<T>(response);
  }

  /**
   * Perform a PATCH request
   */
  async patch<T = any>(path: string, body: any, options?: TMFRequestOptions): Promise<TMFResponse<T>> {
    const response = await this.http.request('PATCH', this.buildPath(path), options, body);
    return this.createResponse<T>(response);
  }

  /**
   * Perform a DELETE request
   */
  async delete<T = any>(path: string, options?: TMFRequestOptions): Promise<TMFResponse<T>> {
    const response = await this.http.request('DELETE', this.buildPath(path), options);
    return this.createResponse<T>(response);
  }

  private buildPath(path: string): string {
    // For single API, prepend the API code to the path
    if (this.apiCodes.length === 1) {
      const apiCode = this.apiCodes[0].toLowerCase();
      return path.startsWith('/') ? `/${apiCode}${path}` : `/${apiCode}/${path}`;
    }
    return path;
  }

  private async createResponse<T>(response: Response): Promise<TMFResponse<T>> {
    const data = await response.json();
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      data,
      status: response.status,
      headers,
      transform: (options) => TMFTransformer.transform(data, options),
    };
  }
}
