import { MessageSquare, BarChart3, FileSearch, Globe2, Shield, SquarePlus } from "lucide-react";

const features = [
  {
    id: "01",
    icon: MessageSquare,
    title: "WhatsApp Native",
    description: "We know that traders live in WhatsApp. Market intelligence should too.",
  },
  {
    id: "02",
    icon: BarChart3,
    title: "Market Data Feeds",
    description: "Turn your exisiting market data into pre-trade intelligence. All major vendors supported.",
  },
  {
    id: "03",
    icon: FileSearch,
    title: "Deal Auditing",
    description: "Captur the market context at the time of negotiation. Review later for improved future deals.",
  },
  {
    id: "04",
    icon: SquarePlus,
    title: "Custom Caluclations",
    description: "Combine market data with in-house supply chain costs to spot opportunities. Without leaving WhatsApp.",
  },
  {
    id: "05",
    icon: Globe2,
    title: "Tailored to Your Market",
    description: "Find the data points you need for your trades. All summarized in one place. ",
  },
  {
    id: "06",
    icon: Shield,
    title: "Privacy & Compliance",
    description: "We build systems you own. Your data stays with you. No publication copyright infringements.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-muted-foreground">MODULE:</span>
            <span className="font-mono text-xs text-primary">FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your data meets you where you trade.   
            <br />
            <span className="text-gradient">Just send a message.</span>
          </h2>
          <p className="text-muted-foreground">
            
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 glow-effect"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
