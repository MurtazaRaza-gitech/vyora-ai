import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { Globe, Network, Rocket, Target, Users, Zap } from "lucide-react";
import { breadcrumbLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/vision")({
  head: () => ({
    ...pageMeta({
      title: "Vision — Building a Global Product Ecosystem | VYORA.AI",
      description:
        "The long-term vision of VYORA.AI: a connected ecosystem of intelligent, scalable and ethical applications that help people manage and improve everyday life.",
      path: "/vision",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Vision", path: "/vision" },
          ]),
        ),
      },
    ],
  }),
  component: Vision,
});


function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title={<>Our <span className="gradient-text">Vision</span></>}
        subtitle="To build a global AI ecosystem that helps people understand, manage, and improve different aspects of their lives."
      />

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass rounded-3xl p-8 sm:p-12 gradient-border text-center">
              <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3">Our Mission</p>
              <p className="text-2xl sm:text-3xl font-semibold leading-snug">
                To create <span className="gradient-text">intelligent, scalable, and ethical</span> AI applications by combining technology, creativity, and human understanding.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Where We Are Going */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-secondary font-medium mb-3 text-center">Where We Are Going</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">A Roadmap With Intent</h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
                    <Rocket className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Short-Term</h3>
                </div>
                <ul className="space-y-3">
                  {["Launch core products", "Build strong user base", "Improve product systems"].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shadow-glow shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="glass rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Long-Term</h3>
                </div>
                <ul className="space-y-3">
                  {["Expand globally", "Build interconnected platforms", "Create a strong AI ecosystem"].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3 text-center">What Drives Us</p>
            <h2 className="text-4xl font-bold text-center mb-12">We are driven by</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Target, t: "Ambition" },
              { icon: Zap, t: "Discipline" },
              { icon: Users, t: "Real experiences" },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <div className="glass rounded-2xl p-7 text-center hover:-translate-y-1 hover:shadow-glow transition-all">
                  <div className="mx-auto h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-hero)" }}>
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-xl font-semibold">{item.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">
              We've seen both success and failure early, and that shapes how we build.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/connect">Be Part of the Vision</CTAButton>
            <CTAButton to="/connect" variant="ghost">Connect With Us</CTAButton>
          </div>
        </div>

        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
          <Network className="h-40 w-40 text-primary/10" />
        </div>
      </section>
    </>
  );
}
