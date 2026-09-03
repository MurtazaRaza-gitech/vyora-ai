import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { SITE, breadcrumbLd, canonical, pageMeta } from "@/lib/site";

const title = "Our Products — Apps Built by VYORA.AI";
const description =
  "Explore the products VYORA.AI is building: Flowdash, OpenCpp, SugarKill, WISHES, Giffy and Horoguide — across finance, education, health, social and AI.";

export const Route = createFileRoute("/creations/")({
  head: () => {
    const base = pageMeta({ title, description, path: "/creations" });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "VYORA.AI products",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: canonical(`/creations/${p.slug}`),
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Creations", path: "/creations" },
            ]),
          ),
        },
      ],
    };
  },
  component: Creations,
});

function Creations() {
  const live = products.filter((p) => p.status === "In Production");
  const building = products.filter((p) => p.status !== "In Production");

  return (
    <>
      <PageHero
        eyebrow="Creations"
        title={<>Our <span className="gradient-text">Products</span></>}
        subtitle="We don't just imagine products. We build them. Each product below has a clear audience, a defined problem, and a real development status."
      />

      <section className="py-14" aria-labelledby="live-products">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="live-products" className="text-3xl sm:text-4xl font-bold mb-8">
              Available now
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {live.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-card/30" aria-labelledby="building-products">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="building-products" className="text-3xl sm:text-4xl font-bold mb-2">
              In testing &amp; development
            </h2>
            <p className="text-muted-foreground mb-8">
              These products are actively being built. We share status openly rather than announcing launches early.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {building.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-secondary font-medium mb-3">
              How we build
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">We don't rush launches.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product from {SITE.name} moves through the same loop before it reaches people.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ol className="mt-10 flex flex-wrap items-center justify-center gap-3 text-lg font-semibold">
              {["Build", "Test", "Improve", "Scale"].map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="rounded-full glass border border-border px-5 py-2 gradient-border">
                    {step}
                  </span>
                  {i < 3 && <span className="text-primary" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/vision">Read Our Vision</CTAButton>
            <CTAButton to="/connect" variant="ghost">Work With Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
