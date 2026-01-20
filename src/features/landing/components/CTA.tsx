import { Button } from "@/shared/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="relative py-24 md:py-32 scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-glow opacity-60" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform
            <br />
            <span className="text-gradient">How you Trade?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Make the best use of the data you already pay for. 
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 font-mono text-xs">
            {['Bring Your Own License', 'Custom Solution For Your Market'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded bg-secondary/50 border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="default" size="lg" className="font-mono">
            Book Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
