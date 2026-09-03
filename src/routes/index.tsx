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
          <CTAButton to="/creations">Explore VYORA.AI Products</CTAButton>
          <CTAButton to="/minds" variant="ghost">Meet the VYORA.AI Founders</CTAButton>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-24 bg-card/30" aria-labelledby="capabilities">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 text-center">
              What We Build
            </p>
            <h2 id="capabilities" className="text-4xl sm:text-5xl font-bold text-center mb-4">
              Mobile apps, AI applications and software
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
              VYORA.AI is a technology and product-building company in Lahore, Pakistan. We design,
              engineer and ship applications end to end — the same way we build our own products.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <article className="glass rounded-2xl p-6 h-full">
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY FACTS — plain, crawlable answers */}
      <section className="relative py-24" aria-labelledby="company-facts">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="company-facts" className="text-4xl sm:text-5xl font-bold mb-10">
              About VYORA.AI
            </h2>
          </Reveal>
          <dl className="space-y-7">
            {[
              {
                q: "What is VYORA.AI?",
                a: (
                  <>
                    VYORA.AI is a technology and product-building company that develops mobile apps,
                    web applications, AI products, APIs, AI agents and software.{" "}
                    <Link to="/about" className="text-primary underline underline-offset-4">
                      Learn about VYORA.AI
                    </Link>
                    .
                  </>
                ),
              },
              {
                q: "Where is VYORA.AI located?",
                a: <>VYORA.AI is based in Lahore, Punjab, Pakistan, and builds for a global audience.</>,
              },
              {
                q: "When was VYORA.AI founded?",
                a: <>VYORA.AI was founded in 2023 and registered in 2026.</>,
              },
              {
                q: "Who founded VYORA.AI?",
                a: (
                  <>
                    VYORA.AI was founded by M. Shehram Mehmood (Founder), Murtaza Raza (Co-Founder)
                    and Hussnain Zia Ullah (Co-Founder).{" "}
                    <Link to="/minds" className="text-primary underline underline-offset-4">
                      Meet the VYORA.AI founders
                    </Link>
                    .
                  </>
                ),
              },
              {
                q: "What products has VYORA.AI built?",
                a: (
                  <>
                    {products.map((p) => p.name).join(", ")}. Flowdash is in production on Google
                    Play, OpenCpp is in closed testing, and SugarKill, WISHES, Giffy and Horoguide
                    are in development.{" "}
                    <Link to="/creations" className="text-primary underline underline-offset-4">
                      Explore VYORA.AI products
                    </Link>
                    .
                  </>
                ),
              },
              {
                q: "How do I start a project with VYORA.AI?",
                a: (
                  <>
                    <Link to="/connect" className="text-primary underline underline-offset-4">
                      Contact VYORA.AI
                    </Link>{" "}
                    to discuss an app development, AI application or software project.
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.q}>
                <dt className="text-lg font-semibold text-foreground">{item.q}</dt>
                <dd className="mt-2 text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-muted-foreground">
            Also read our{" "}
            <Link to="/vision" className="text-primary underline underline-offset-4">
              long-term product vision
            </Link>{" "}
            and how we{" "}
            <Link to="/pulse" className="text-primary underline underline-offset-4">
              work day to day
            </Link>
            .
          </p>
        </div>
      </section>

    </>
  );
}
