import { Card } from "@/components/ui/card";
import { Terminal, Download, CheckCircle } from "lucide-react";

export const Installation = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Terminal className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quick <span className="text-accent">Installation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in seconds with your favorite package manager
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border">
            <div className="flex items-center gap-3 mb-4">
              <Download className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">npm</h3>
            </div>
            <div className="bg-code-bg rounded-lg p-4 border border-code-border">
              <code className="text-foreground font-mono">npm install tmf-sdk</code>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border">
            <div className="flex items-center gap-3 mb-4">
              <Download className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">yarn</h3>
            </div>
            <div className="bg-code-bg rounded-lg p-4 border border-code-border">
              <code className="text-foreground font-mono">yarn add tmf-sdk</code>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            What You Get
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Core Modules</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• TMFClient - Main SDK client</li>
                <li>• HTTPClient - Request handler</li>
                <li>• TMFTransformer - Data transformer</li>
                <li>• Logger - Debug utilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• TypeScript type definitions</li>
                <li>• 22+ TMF API specifications</li>
                <li>• Zero dependencies (fetch-based)</li>
                <li>• Full ESM & CommonJS support</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
