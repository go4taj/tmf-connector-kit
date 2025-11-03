export interface TMFClientConfig {
  baseUrl: string;
  authToken?: string;
  defaultHeaders?: Record<string, string>;
  debug?: boolean;
}

export interface TMFRequestOptions {
  filter?: string;
  fields?: string;
  offset?: number;
  limit?: number;
  headers?: Record<string, string>;
}

export interface TMFResponse<T = any> {
  data: T;
  status: number;
  headers: Record<string, string>;
  transform: (options: TransformOptions) => any;
}

export interface TransformOptions {
  pick?: string[];
  omit?: string[];
  rename?: Record<string, string>;
}

export type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';
