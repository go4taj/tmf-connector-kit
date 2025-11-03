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
              <code className="text-foreground font-mono">npm install tmf-connector-kit</code>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border">
            <div className="flex items-center gap-3 mb-4">
              <Download className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">yarn</h3>
            </div>
            <div className="bg-code-bg rounded-lg p-4 border border-code-border">
              <code className="text-foreground font-mono">yarn add tmf-connector-kit</code>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-12 bg-muted/30 border-muted-foreground/20">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Or Clone from GitHub
          </h3>
          <div className="bg-code-bg rounded-lg p-4 border border-code-border">
            <code className="text-foreground font-mono text-sm">git clone https://github.com/go4taj/tmf-connector-kit.git</code>
          </div>
        </Card>

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
