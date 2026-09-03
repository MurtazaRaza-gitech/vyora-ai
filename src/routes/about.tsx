import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { Brain, Compass, Layers, Sparkles } from "lucide-react";
import { breadcrumbLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About VYORA.AI — A Product-Building Company in Lahore",
      description:
        "VYORA.AI is a product-building company founded by three young entrepreneurs in Lahore, Pakistan, creating mobile apps, AI applications and web software for global users.",
      path: "/about",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: About,
});


function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Who <span className="gradient-text">We Are</span></>}
        subtitle="A team of young entrepreneurs driven by big ideas, long-term thinking, and the desire to build something global."
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <Reveal><p>We are not here to follow trends. We are here to build systems, products, and solutions that last.</p></Reveal>
          <Reveal delay={80}>
            <p>Our background combines development, design, research, and strategy, allowing us to approach problems from multiple angles.</p>
          </Reveal>
        </div>
      </section>

      {/* MINDSET */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3">Our Mindset</p>
            <h2 className="text-4xl font-bold mb-10">We believe</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              "Great products come from clarity, not complexity",
              "Discipline matters more than motivation",
              "Long-term vision beats short-term wins",
            ].map((s, i) => (
              <Reveal key={s} delay={i * 100}>
                <div className="glass rounded-2xl p-7 h-full hover:-translate-y-1 hover:shadow-glow transition-all">
                  <div className="text-3xl font-bold gradient-text mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-foreground font-medium">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={350}>
            <p className="text-center mt-10 text-muted-foreground">We are constantly learning, improving, and adapting.</p>
          </Reveal>
        </div>
      </section>

      {/* SETBACK */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-secondary font-medium mb-3">From Setback to Direction</p>
            <h2 className="text-4xl font-bold mb-6">Our journey includes both achievement and failure.</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Winning a national competition gave us recognition. Losing everything shortly after gave us perspective.
            </p>
            <p className="text-muted-foreground mb-6">That experience shaped how we think:</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {["We build carefully", "We move strategically", "We value control and sustainability"].map((s, i) => (
              <Reveal key={s} delay={i * 100}>
                <div className="glass rounded-2xl p-6 gradient-border">
                  <p className="font-semibold">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AI */}
      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3">Why We Chose AI</p>
            <h2 className="text-4xl font-bold mb-6">Artificial Intelligence is one of the most powerful tools of this era.</h2>
            <p className="text-lg text-muted-foreground mb-10">But we don't use AI just because it's trending. We use it to:</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Brain, t: "Simplify decision-making" },
              { icon: Sparkles, t: "Personalize user experiences" },
              { icon: Compass, t: "Solve complex problems efficiently" },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 transition-all">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-hero)" }}>
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="font-semibold">{item.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-secondary font-medium mb-3">How We Work</p>
            <h2 className="text-4xl font-bold mb-10">Built around focused execution.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Small focused teams", "Product-first thinking", "Ethical development", "Continuous iteration"].map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full">
                  <Layers className="h-5 w-5 text-primary mb-3" />
                  <p className="font-medium">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/vision">Read Our Vision</CTAButton>
            <CTAButton to="/creations" variant="ghost">Explore Products</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
