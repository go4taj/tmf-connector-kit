import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CodeExamples } from "@/components/CodeExamples";
import { APICoverage } from "@/components/APICoverage";
import { Installation } from "@/components/Installation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CodeExamples />
      <APICoverage />
      <Installation />
      <Footer />
    </div>
  );
};

export default Index;
