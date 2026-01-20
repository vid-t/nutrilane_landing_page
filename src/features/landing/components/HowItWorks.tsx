import { Smartphone, Settings, LineChart } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Settings,
    title: "Architecture Setup",
    description: "We integrate your publication data in combination with in-house data in a custom solution. ",
  },
  {
    id: "02",
    icon: Smartphone,
    title: "WhatsApp Connection",
    description: "We deploy your connection to WhatsApp. Only accessible in-house. Your data stays yours.",
  },
  {
    id: "03",
    icon: LineChart,
    title: "Trade & Audit",
    description: "Benchmark quotes, gain insights and analyze history of your negotiations.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-glow opacity-50" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-mono text-xs text-muted-foreground">PROCESS:</span>
            <span className="font-mono text-xs text-primary">ONBOARDING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Setup to Trading.
            <br />
            <span className="text-gradient">In Hours.</span>
          </h2>
          <p className="text-muted-foreground">
            You trade. We architect.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all glow-effect"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-muted-foreground">STEP_{step.id}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="hidden sm:flex items-center">
                  <div className="font-mono text-2xl font-bold text-muted-foreground/30">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
