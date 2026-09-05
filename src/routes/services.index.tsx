import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Brain, Code, Globe, Layers, Smartphone } from "lucide-react";
import { breadcrumbLd, canonical, pageMeta, SITE } from "@/lib/site";
import { services } from "@/lib/services";

const icons = { smartphone: Smartphone, layers: Layers, brain: Brain, code: Code, globe: Globe };

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VYORA.AI services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: canonical(`/services/${s.slug}`),
  })),
  provider: { "@id": `${SITE.url}/#organization` },
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageMeta({
      title: "Services — App, AI & Software Development | VYORA.AI",
      description:
        "App development, mobile app development, AI development, software development and web development by VYORA.AI, a product-building company in Lahore, Pakistan.",
      path: "/services",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(itemListLd) },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <PageHero
        eyebrow="Services"
        title={
          <>
            What <span className="gradient-text">We Build</span>
          </>
        }
        subtitle="VYORA.AI is a technology and product-building company in Lahore, Pakistan. We design, engineer and ship applications end to end — the same way we build our own products."
      />

      <section className="py-12" aria-labelledby="service-list">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="service-list" className="sr-only">
            Our services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <article className="glass rounded-2xl p-6 h-full flex flex-col">
                    <div
                      className="h-11 w-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{s.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{s.subtitle}</p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="mt-4 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {s.name} in Pakistan →
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every service on this page is backed by software we have built ourselves. See the{" "}
              <Link to="/creations" className="text-primary underline underline-offset-4">
                products VYORA.AI has built
              </Link>{" "}
              or read{" "}
              <Link to="/about" className="text-primary underline underline-offset-4">
                about the company
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/connect">Start a project</CTAButton>
              <CTAButton to="/creations" variant="ghost">
                Explore our products
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
