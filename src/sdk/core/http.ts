import { TMFClientConfig, TMFRequestOptions, HTTPMethod } from './types';
import { Logger } from './logger';

export class HTTPClient {
  private config: TMFClientConfig;
  private logger: Logger;

  constructor(config: TMFClientConfig) {
    this.config = config;
    this.logger = new Logger(config.debug || false);
  }

  async request<T>(
    method: HTTPMethod,
    path: string,
    options: TMFRequestOptions = {},
    body?: any
  ): Promise<Response> {
    const url = this.buildUrl(path, options);
    const headers = this.buildHeaders(options.headers);

    this.logger.logRequest(method, url, headers, body);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      this.logger.logResponse(response.status, await response.clone().text());
      
      return response;
    } catch (error) {
      this.logger.logError(error);
      throw error;
    }
  }

  private buildUrl(path: string, options: TMFRequestOptions): string {
    const url = new URL(path, this.config.baseUrl);
    
    if (options.filter) {
      url.searchParams.append('filter', options.filter);
    }
    if (options.fields) {
      url.searchParams.append('fields', options.fields);
    }
    if (options.offset !== undefined) {
      url.searchParams.append('offset', options.offset.toString());
    }
    if (options.limit !== undefined) {
      url.searchParams.append('limit', options.limit.toString());
    }

    return url.toString();
  }

  private buildHeaders(customHeaders?: Record<string, string>): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...this.config.defaultHeaders,
    };

    if (this.config.authToken) {
      headers['Authorization'] = `Bearer ${this.config.authToken}`;
    }

    if (customHeaders) {
      Object.assign(headers, customHeaders);
    }

    return headers;
  }
}
