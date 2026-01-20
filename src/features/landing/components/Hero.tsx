import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import whatsappScreenshot from "@/assets/Untitled design.PNG";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-glow opacity-70" />
      
      {/* Grid overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 grid-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center flex flex-col items-center">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
       
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
              Fertilizer Negotiation Data
              <br />
              <span className="text-gradient">Straight from WhatsApp</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
              Negotiate better with just-in-time market intelligence you already pay for. 
              <br />
              Automatically capture past negotiations for context and missed margin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="default" size="lg" className="font-mono text-sm">
                Book Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {['Real-time PRA Data', 'Deal Auditing', 'Full History Overview'].map((feature) => (
            <div key={feature} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              <span className="font-mono text-xs text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Preview + iPhone Demo */}
        <div className="mt-20 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
            <div
              className="relative h-full rounded-lg border border-border bg-card shadow-elevated overflow-hidden flex flex-col"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
              }}
            >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2">nutrilane-dashboard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[10px] text-accent">Last Updated: 17/01/2026 9:32 AM</span>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-5 md:p-6">

              {/* Deal Inspection + Audit Trail */}
              <div className="grid md:grid-cols-5 gap-4">
                <div className="md:col-span-5 rounded bg-secondary/20 border border-border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs font-medium">Deal-by-Deal Inspection</p>
                      <p className="text-[10px] text-muted-foreground">Audit trail vs. market benchmarks</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Closed
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        Review
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        title: "DEAL: EGYPT UREA",
                        product: "Granular UREA",
                        incoterm: "FOB Damietta",
                        volume: "5,000 MT",
                        price: "$474.50/MT",
                        benchmark: "$475–$480/MT",
                        delta: "-$0.50/MT vs. low end",
                        verdict: "Well executed",
                        verdictTone: "text-accent",
                      },
                      {
                        title: "DEAL: UZBEK NPK",
                        product: "UZBEK NPK 15:15:15",
                        incoterm: "FCA Namagan",
                        volume: "3,500 MT",
                        price: "$412.00/MT",
                        benchmark: "$406–$408/MT",
                        delta: "+$4.00/MT vs. Argus NPKs",
                        verdict: "Above market",
                        verdictTone: "text-yellow-500",
                      },
                      {
                        title: "Deal 3",
                        product: "Turkish DAP",
                        incoterm: "CFR Klaipeda",
                        volume: "10,000 MT",
                        price: "$684.00/MT",
                        benchmark: "$683–$685/MT",
                        delta: "In range based on FOB + Freight",
                        verdict: "Competitive",
                        verdictTone: "text-accent",
                      },
                    ].map((deal) => (
                      <div key={deal.title} className="rounded border border-border/60 bg-muted/20 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <p className="text-sm font-semibold">{deal.title}</p>
                            <span className={`text-[13px] ${deal.verdictTone}`}>{deal.verdict}</span>
                          </div>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"
                          >
                            Audit context
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[13px] text-muted-foreground">
                          <div>
                            <p className="uppercase tracking-wide text-[12px]">Product</p>
                            <p className="text-sm text-foreground">{deal.product}</p>
                          </div>
                          <div>
                            <p className="uppercase tracking-wide text-[12px]">Incoterm</p>
                            <p className="text-sm text-foreground">{deal.incoterm}</p>
                          </div>
                          <div>
                            <p className="uppercase tracking-wide text-[12px]">Volume</p>
                            <p className="text-sm text-foreground">{deal.volume}</p>
                          </div>
                          <div>
                            <p className="uppercase tracking-wide text-[12px]">Executed</p>
                            <p className="text-sm text-foreground">{deal.price}</p>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[13px]">
                          <span className="text-muted-foreground">Benchmark: {deal.benchmark}</span>
                          <span className="text-foreground">{deal.delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="flex items-stretch justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px]">
                <img
                  src={whatsappScreenshot}
                  alt="WhatsApp conversation demo on iPhone"
                  className="w-full h-auto rounded-[2.2rem]"
                />
                <p className="mt-5 text-center text-m text-muted-foreground">
                  Access industry-leading publication data.
                  <br />
                  Now directly in WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
