import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { Code2, Palette, Search, Compass } from "lucide-react";
import { breadcrumbLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/pulse")({
  head: () => ({
    ...pageMeta({
      title: "Pulse — How the VYORA.AI Team Works",
      description:
        "Inside VYORA.AI: how our developers, designers, researchers and strategists work together with focused execution, continuous learning and honest communication.",
      path: "/pulse",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Pulse", path: "/pulse" },
          ]),
        ),
      },
    ],
  }),
  component: Pulse,
});


function Pulse() {
  return (
    <>
      <PageHero
        eyebrow="Pulse"
        title={<>The <span className="gradient-text">Heartbeat</span> of VYORA.AI</>}
        subtitle="VYORA.AI is powered by a growing team of developers, designers, and thinkers."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass rounded-3xl p-8 sm:p-10 gradient-border text-center">
              <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3">Our Team</p>
              <p className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="gradient-text">10+</span> members
              </p>
              <p className="text-muted-foreground">working across multiple disciplines</p>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Code2, t: "Development" },
              { icon: Palette, t: "Design" },
              { icon: Search, t: "Research" },
              { icon: Compass, t: "Strategy" },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-glow transition-all h-full">
                  <div className="mx-auto h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-hero)" }}>
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="font-semibold">{item.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-secondary font-medium mb-3">Our Culture</p>
            <h2 className="text-4xl font-bold mb-10">How we operate</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Focused work",
              "Continuous learning",
              "Honest communication",
              "Growth mindset",
            ].map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all">
                  <span className="text-2xl font-bold gradient-text">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-medium text-lg">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Different */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3">What Makes Us Different</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              We are young, but we think <span className="gradient-text">long-term</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are building not just products, but a company that lasts.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/minds">Meet The Team</CTAButton>
            <CTAButton to="/connect" variant="ghost">Work With Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
