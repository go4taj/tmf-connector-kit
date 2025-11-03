import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const examples = {
  basic: `import { TMFClient } from 'tmf-sdk';

// Initialize the SDK
const tmf = new TMFClient({
  baseUrl: 'https://api.company.com/tmf',
  authToken: 'your-bearer-token',
  defaultHeaders: {
    'X-Client-Id': 'my-app'
  }
});

// Get a specific TMF API client
const catalog = tmf.code(620);  // TMF620
const orders = tmf.code('TMF622');  // Also works

// Make API calls
const products = await catalog.get('/productOffering');
console.log(products.data);`,

  filtering: `// Advanced filtering with TMF query parameters
const tmf622 = tmf.code(622);

const response = await tmf622.get('/productOrder', {
  filter: 'state=completed,orderDate.gt=2024-01-01',
  fields: 'id,state,orderDate,orderItem.product',
  limit: 50,
  offset: 0
});

// Access the filtered data
console.log(response.data);
console.log('Status:', response.status);`,

  transformation: `// Transform response data on the fly
const response = await tmf622.get('/productOrder');

// Pick specific fields (including nested)
const simplified = response.transform({
  pick: [
    'id',
    'state',
    'orderDate',
    'orderItem.product.name',
    'orderItem.product.id'
  ]
});

// Or omit fields you don't need
const cleaned = response.transform({
  omit: ['@baseType', '@type', 'href']
});

// Rename fields for your data model
const mapped = response.transform({
  rename: {
    'id': 'orderId',
    'state': 'status'
  }
});`,

  crud: `const tmf622 = tmf.code(622);

// CREATE - POST request
const newOrder = await tmf622.post('/productOrder', {
  externalId: 'ORDER-001',
  orderDate: new Date().toISOString(),
  state: 'acknowledged',
  orderItem: [
    {
      action: 'add',
      product: { id: 'PROD-123' }
    }
  ]
});

// UPDATE - PATCH request
const updated = await tmf622.patch('/productOrder/123', {
  state: 'inProgress'
});

// DELETE
await tmf622.delete('/productOrder/123');`,

  orchestration: `// Work with multiple TMF APIs
const multiApi = tmf.code([620, 622, 648]);

// Or handle orchestrated workflows
const catalog = tmf.code(620);
const quotes = tmf.code(648);
const orders = tmf.code(622);

// 1. Get product from catalog
const product = await catalog.get('/productOffering/PROD-001');

// 2. Create a quote
const quote = await quotes.post('/quote', {
  instantSyncQuote: true,
  quoteItem: [{
    product: product.data
  }]
});

// 3. Create order from quote
const order = await orders.post('/productOrder', {
  quote: { id: quote.data.id }
});`,

  extensibility: `// Register custom TMF API handlers
class TMF684Handler {
  // Your custom implementation
}

tmf.register('TMF684', TMF684Handler);

// Check registered APIs
const registeredAPIs = tmf.getRegisteredAPIs();
console.log('Available APIs:', registeredAPIs);

// Enable debug logging
const debugTmf = new TMFClient({
  baseUrl: 'https://api.company.com/tmf',
  authToken: 'token',
  debug: true  // Logs all requests/responses
});`
};

export const CodeExamples = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Yet <span className="text-primary">Powerful</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how easy it is to work with TMF APIs using our SDK
          </p>
        </div>

        <Card className="p-6 bg-card border-border shadow-lg">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="filtering">Filtering</TabsTrigger>
              <TabsTrigger value="transformation">Transform</TabsTrigger>
              <TabsTrigger value="crud">CRUD Ops</TabsTrigger>
              <TabsTrigger value="orchestration">Orchestration</TabsTrigger>
              <TabsTrigger value="extensibility">Extensibility</TabsTrigger>
            </TabsList>

            {Object.entries(examples).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <div className="bg-code-bg rounded-lg p-6 border border-code-border">
                  <pre className="text-sm overflow-x-auto">
                    <code className="font-mono text-foreground whitespace-pre">
                      {code}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
