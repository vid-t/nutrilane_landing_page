import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import logoHighRes from "@/assets/Logo high res copy.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="relative flex h-14 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden">
              <img
                src={logoHighRes}
                alt="Nutrilane logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-mono text-lg font-semibold tracking-tight">
              NUTRILANE
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-3 px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              <span className="font-mono text-[10px] text-accent uppercase">Online</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-1">
            {["Features", "How It Works"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="default" size="sm" className="font-mono text-xs" asChild>
              <a href="#cta">Get Started →</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
