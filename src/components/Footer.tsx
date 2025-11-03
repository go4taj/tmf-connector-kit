import { Code2, Github, Book, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">TMF SDK</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The unified interface for TM Forum Open APIs in Node.js.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stack Overflow</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">TM Forum</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Open APIs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Specifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conformance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Catalyst</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© 2025 TMF SDK</span>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">MIT License</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
