# TMF Connector Kit

A unified TypeScript SDK for TM Forum APIs, providing a consistent and easy-to-use interface for integrating with telecom management systems.

## Features

- **Unified API Client**: Single client interface for multiple TMF APIs
- **TypeScript Support**: Full TypeScript definitions and type safety
- **Flexible Configuration**: Customizable authentication, headers, and request options
- **Data Transformation**: Built-in data transformation utilities
- **Comprehensive Coverage**: Support for 20+ TMF APIs including Product, Customer, Service, and Resource management

## Supported TMF APIs

| API Code | Name | Category |
|----------|------|----------|
| TMF620 | Product Catalog Management | Product |
| TMF622 | Product Ordering Management | Product |
| TMF629 | Customer Management | Customer |
| TMF632 | Party Management | Party |
| TMF637 | Product Inventory Management | Product |
| TMF638 | Service Inventory Management | Service |
| TMF639 | Resource Inventory Management | Resource |
| TMF640 | Service Activation and Configuration | Service |
| TMF641 | Service Ordering Management | Service |
| TMF642 | Alarm Management | Assurance |
| TMF648 | Quote Management | Product |
| TMF653 | Service Test Management | Service |
| TMF663 | Shopping Cart Management | Product |
| TMF666 | Account Management | Customer |
| TMF673 | Geographic Address Management | Common |
| TMF674 | Geographic Site Management | Common |
| TMF677 | Usage Management | Usage |
| TMF678 | Customer Bill Management | Customer |
| TMF679 | Product Offering Qualification | Product |
| TMF683 | Party Role Management | Party |
| TMF621 | Trouble Ticket Management | Assurance |
| TMF628 | Performance Management | Assurance |

## Installation

```bash
npm install tmf-connector-kit
```

## Usage

### Basic Setup

```typescript
import { TMFClient } from 'tmf-connector-kit';

// Initialize the client
const client = new TMFClient({
  baseUrl: 'https://api.your-tmf-server.com',
  authToken: 'your-auth-token', // optional
  debug: true // optional
});
```

### Using TMF APIs

```typescript
// Access a specific TMF API (e.g., Product Catalog Management)
const productAPI = client.code(620); // or client.code('TMF620')

// Get products with filtering
const products = await productAPI.get('/product', {
  filter: 'lifecycleStatus=Active',
  fields: 'id,name,description',
  limit: 10
});

// Create a new product
const newProduct = await productAPI.post('/product', {
  name: 'New Product',
  description: 'Product description',
  lifecycleStatus: 'Active'
});

// Update a product
const updatedProduct = await productAPI.patch('/product/123', {
  description: 'Updated description'
});

// Delete a product
await productAPI.delete('/product/123');
```

### Working with Multiple APIs

```typescript
// Access multiple APIs for orchestration scenarios
const multiAPI = client.code([620, 622, 629]); // Product Catalog, Ordering, and Customer APIs

// The client will handle routing requests to the appropriate API
const order = await multiAPI.post('/productOrder', orderData);
```

### Data Transformation

```typescript
// Transform response data
const response = await productAPI.get('/product/123');

// Pick specific fields
const simplified = response.transform({
  pick: ['id', 'name', 'price']
});

// Omit fields
const filtered = response.transform({
  omit: ['internalId', 'metadata']
});

// Rename fields
const renamed = response.transform({
  rename: {
    'productName': 'name',
    'productDescription': 'description'
  }
});
```

### Advanced Configuration

```typescript
const client = new TMFClient({
  baseUrl: 'https://api.example.com',
  authToken: 'bearer-token',
  defaultHeaders: {
    'X-API-Key': 'your-api-key',
    'Accept': 'application/json'
  },
  debug: true
});

// Custom headers per request
const result = await productAPI.get('/product', {
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

## API Reference

### TMFClient

#### Constructor
```typescript
new TMFClient(config: TMFClientConfig)
```

#### Methods
- `code(code: number | string | number[]): TMFAPIClient` - Get API client for specific TMF code(s)
- `register(code: string, handler: any): void` - Register custom API handler
- `getRegisteredAPIs(): string[]` - Get list of registered APIs

### TMFClientConfig

```typescript
interface TMFClientConfig {
  baseUrl: string;
  authToken?: string;
  defaultHeaders?: Record<string, string>;
  debug?: boolean;
}
```

### TMFRequestOptions

```typescript
interface TMFRequestOptions {
  filter?: string;
  fields?: string;
  offset?: number;
  limit?: number;
  headers?: Record<string, string>;
}
```

## Development

### Building the SDK

```bash
# Install dependencies
npm install

# Build the SDK
npm run build:sdk

# Run linting
npm run lint
```

### Publishing

```bash
# Build and publish
npm run build:sdk
npm publish
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Repository

[https://github.com/go4taj/tmf-connector-kit](https://github.com/go4taj/tmf-connector-kit)
