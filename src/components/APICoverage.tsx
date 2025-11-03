import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TMF_APIS, getAllCategories } from "@/sdk/tmf/registry";

export const APICoverage = () => {
  const categories = getAllCategories();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            22+ APIs Supported
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete TMF API <span className="text-accent">Coverage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access the full suite of TM Forum Open APIs with a unified interface
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => {
            const apis = TMF_APIS.filter(api => api.category === category);
            return (
              <div key={category}>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{category} Domain</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {apis.map((api) => (
                    <Card 
                      key={api.code} 
                      className="p-4 hover:border-primary transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <code className="text-sm font-mono text-accent font-semibold">
                          {api.code}
                        </code>
                        <Badge variant="outline" className="text-xs">
                          v{api.version}
                        </Badge>
                      </div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {api.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {api.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
