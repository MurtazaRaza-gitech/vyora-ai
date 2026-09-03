import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { founders } from "@/lib/founders";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { breadcrumbLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/minds")({
  head: () => ({
    ...pageMeta({
      title: "Minds — The Founders Behind VYORA.AI",
      description:
        "Meet the founders of VYORA.AI: M. Shehram Mehmood, Murtaza Raza and Hussnain Zia Ullah — three young entrepreneurs building software products from Lahore, Pakistan.",
      path: "/minds",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "VYORA.AI founders",
          itemListElement: founders.map((f, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Person",
              name: f.name,
              jobTitle: f.role,
              email: f.email,
              description: f.about[0],
              knowsAbout: f.skills,
              sameAs: [f.linkedin],
              url: `${SITE.url}/minds`,
              worksFor: { "@id": `${SITE.url}/#organization` },
            },

          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Minds", path: "/minds" },
          ]),
        ),
      },
    ],
  }),
  component: Minds,
});


function Minds() {
  return (
    <>
      <PageHero
        eyebrow="Minds"
        title={<>The People Behind <span className="gradient-text">VYORA.AI</span></>}
        subtitle="We are young founders, but our thinking is long-term. Every decision we make is guided by where we want to be in the future, not just where we are today."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {founders.map((f, idx) => (
            <Reveal key={f.name} delay={idx * 60}>
              <article className="glass rounded-3xl overflow-hidden grid lg:grid-cols-[360px_1fr] gap-0 hover:shadow-glow transition-all duration-500 group">
                {/* Image */}
                <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: "var(--gradient-hero)" }}
                  />
                  <img
                    src={f.image}
                    alt={`Portrait of ${f.name}`}
                    width={512}
                    height={640}
                    loading="lazy"
                    className="relative h-full w-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-10">
                  <p className="text-xs tracking-widest uppercase text-primary font-medium">{f.role}</p>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{f.name}</h2>

                  <div className="mt-5 space-y-3 text-muted-foreground">
                    {f.about.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-xs tracking-widest uppercase text-secondary font-medium mb-3">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {f.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(f.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-2 text-sm font-medium hover:border-primary/60 hover:-translate-y-0.5 transition-all"
                    >
                      <Mail className="h-4 w-4 text-primary" /> Email
                    </a>
                    <a
                      href={f.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-2 text-sm font-medium hover:border-primary/60 hover:-translate-y-0.5 transition-all"
                    >
                      <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
                    </a>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-2 text-sm font-medium hover:border-primary/60 hover:-translate-y-0.5 transition-all"
                    >
                      <Linkedin className="h-4 w-4 text-secondary" /> LinkedIn
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/creations">See Our Work</CTAButton>
            <CTAButton to="/connect" variant="ghost">Join Our Journey</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
