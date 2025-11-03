import { Button } from "@/components/ui/button";
import { Code2, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-24 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code2 className="h-8 w-8 text-white" />
          <span className="text-white/90 font-semibold text-sm tracking-wider uppercase">TMF SDK</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight">
          Unified TMF API Client
          <br />
          <span className="text-white/90">for Node.js</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          A powerful, extensible SDK for TM Forum Open APIs. Initialize any TMF API dynamically with a simple, consistent interface.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg">
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 shadow-lg bg-white/20 hover:bg-white/30 text-white border-2 border-white/50"
            asChild
          >
            <a 
              href="https://github.com/go4taj/tmf-connector-kit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-border max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="ml-2">Quick Start</span>
          </div>
          <pre className="text-sm md:text-base overflow-x-auto">
            <code className="text-foreground font-mono">{`import { TMFClient } from 'tmf-sdk';

const tmf = new TMFClient({
  baseUrl: 'https://api.company.com',
  authToken: 'your-token'
});

// Initialize any TMF API dynamically
const tmf622 = tmf.code(622);

// Make API calls with filtering & transformation
const orders = await tmf622.get('/productOrder', {
  filter: 'state=completed',
  fields: 'id,state,orderDate'
});`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
