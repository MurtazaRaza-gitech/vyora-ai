import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/NeuralBackground";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Sparkles, Layers, Target, Lightbulb, Compass } from "lucide-react";
import { CAPABILITIES, pageMeta } from "@/lib/site";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "AI & App Development Company in Pakistan | VYORA.AI",
      description:
        "VYORA.AI builds mobile apps, AI applications, web software, APIs and intelligent digital products from Lahore, Pakistan for users worldwide.",
      path: "/",
    }),
  component: Origin,
});


function Origin() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 aurora-bg" />
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center pt-24">
          <span className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-1.5 text-xs font-medium tracking-widest uppercase animate-fade-in">
            <Sparkles className="h-3 w-3 text-primary" />
            Origin · Est. 2023 · Lahore, Pakistan
          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight animate-fade-up">
            Building Apps That
            <br />
            <span className="gradient-text">Actually Help</span>
            <br />
            People Live Better
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up [animation-delay:150ms]">
            VYORA.AI is a product-building company creating mobile apps, AI applications, web
            software and digital products across finance, health, education, social and lifestyle.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:300ms]">
            <CTAButton to="/creations">Explore Our Products</CTAButton>
            <CTAButton to="/minds" variant="ghost">Meet The Minds</CTAButton>
          </div>


          <div className="mt-16 flex justify-center animate-fade-in [animation-delay:600ms]">
            <div className="h-10 w-6 rounded-full border-2 border-border flex items-start justify-center p-1">
              <div className="h-2 w-1 rounded-full bg-primary animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY — Journey Timeline */}
      <JourneyTimeline />

      {/* WHAT WE DO */}
      <section className="relative py-24 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 text-center">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">AI-Powered Applications</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
              We build AI-powered applications designed to solve real-world problems across multiple industries.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Layers, t: "AI-based mobile and web apps" },
              { icon: Target, t: "User-focused digital products" },
              { icon: Compass, t: "Multi-industry solutions" },
              { icon: Lightbulb, t: "Scalable platforms for global users" },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-hero)" }}>
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-foreground">{item.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH + WHY */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="glass rounded-3xl p-8 sm:p-10 h-full gradient-border">
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Our Approach</p>
              <h3 className="text-3xl font-bold mb-5">We don't believe in building random apps.</h3>
              <p className="text-muted-foreground mb-6">Every product we create is:</p>
              <ul className="space-y-3">
                {[
                  "Designed for a specific audience",
                  "Built around real use cases",
                  "Backed by research and iteration",
                  "Focused on long-term impact",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shadow-glow shrink-0" />
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass rounded-3xl p-8 sm:p-10 h-full gradient-border">
              <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">Why VYORA.AI</p>
              <h3 className="text-3xl font-bold mb-5">We are builders with purpose.</h3>
              <p className="text-muted-foreground mb-6">Because we are not just developers. We combine:</p>
              <ul className="space-y-3">
                {["Technical expertise", "Creative thinking", "Strategic vision"].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground">to create products that actually matter.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton to="/creations">Discover Our Creations</CTAButton>
          <CTAButton to="/minds" variant="ghost">Meet The Minds</CTAButton>
        </div>
      </section>
    </>
  );
}
