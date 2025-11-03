import { Card } from "@/components/ui/card";
import { Zap, Puzzle, GitBranch, Filter, Shield, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Dynamic API Loading",
    description: "Initialize any TMF API with tmf.code(622) - no manual imports needed"
  },
  {
    icon: Code,
    title: "Full CRUD Support",
    description: "GET, POST, PATCH, DELETE operations following TMF Open API standards"
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Built-in support for TMF query parameters: filtering, pagination, field selection"
  },
  {
    icon: GitBranch,
    title: "Data Transformation",
    description: "Pick, omit, or rename fields with the powerful transform() method"
  },
  {
    icon: Puzzle,
    title: "Extensible Design",
    description: "Register custom TMF APIs with tmf.register() - plugin-ready architecture"
  },
  {
    icon: Shield,
    title: "Type-Safe",
    description: "Built with TypeScript for complete type safety and IntelliSense support"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-primary">Developer Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate TMF APIs seamlessly into your applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
