/**
 * Registry of supported TMF APIs
 * Maps TMF API codes to their metadata and specifications
 */

export interface TMFAPIMetadata {
  code: string;
  name: string;
  version: string;
  description: string;
  category: string;
}

export const TMF_APIS: TMFAPIMetadata[] = [
  { code: 'TMF620', name: 'Product Catalog Management', version: '4.0', description: 'Manage product catalog', category: 'Product' },
  { code: 'TMF622', name: 'Product Ordering Management', version: '4.0', description: 'Manage product orders', category: 'Product' },
  { code: 'TMF629', name: 'Customer Management', version: '4.0', description: 'Manage customer information', category: 'Customer' },
  { code: 'TMF632', name: 'Party Management', version: '4.0', description: 'Manage party entities', category: 'Party' },
  { code: 'TMF637', name: 'Product Inventory Management', version: '4.0', description: 'Manage product inventory', category: 'Product' },
  { code: 'TMF638', name: 'Service Inventory Management', version: '4.0', description: 'Manage service inventory', category: 'Service' },
  { code: 'TMF639', name: 'Resource Inventory Management', version: '4.0', description: 'Manage resource inventory', category: 'Resource' },
  { code: 'TMF640', name: 'Service Activation and Configuration', version: '4.0', description: 'Activate and configure services', category: 'Service' },
  { code: 'TMF641', name: 'Service Ordering Management', version: '4.0', description: 'Manage service orders', category: 'Service' },
  { code: 'TMF642', name: 'Alarm Management', version: '4.0', description: 'Manage alarms and notifications', category: 'Assurance' },
  { code: 'TMF648', name: 'Quote Management', version: '4.0', description: 'Manage quotes and proposals', category: 'Product' },
  { code: 'TMF653', name: 'Service Test Management', version: '4.0', description: 'Manage service testing', category: 'Service' },
  { code: 'TMF663', name: 'Shopping Cart Management', version: '4.0', description: 'Manage shopping carts', category: 'Product' },
  { code: 'TMF666', name: 'Account Management', version: '4.0', description: 'Manage customer accounts', category: 'Customer' },
  { code: 'TMF673', name: 'Geographic Address Management', version: '4.0', description: 'Manage geographic addresses', category: 'Common' },
  { code: 'TMF674', name: 'Geographic Site Management', version: '4.0', description: 'Manage geographic sites', category: 'Common' },
  { code: 'TMF677', name: 'Usage Management', version: '4.0', description: 'Manage usage records', category: 'Usage' },
  { code: 'TMF678', name: 'Customer Bill Management', version: '4.0', description: 'Manage customer billing', category: 'Customer' },
  { code: 'TMF679', name: 'Product Offering Qualification', version: '4.0', description: 'Qualify product offerings', category: 'Product' },
  { code: 'TMF683', name: 'Party Role Management', version: '4.0', description: 'Manage party roles', category: 'Party' },
  { code: 'TMF621', name: 'Trouble Ticket Management', version: '4.0', description: 'Manage trouble tickets', category: 'Assurance' },
  { code: 'TMF628', name: 'Performance Management', version: '4.0', description: 'Manage performance metrics', category: 'Assurance' },
];

export const TMF_API_REGISTRY = new Map(
  TMF_APIS.map(api => [api.code, api])
);

export function getAPIMetadata(code: string): TMFAPIMetadata | undefined {
  return TMF_API_REGISTRY.get(code);
}

export function getAPIsByCategory(category: string): TMFAPIMetadata[] {
  return TMF_APIS.filter(api => api.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(TMF_APIS.map(api => api.category)));
}
