import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Check } from "lucide-react";
import { breadcrumbLd, pageMeta } from "@/lib/site";
import { getService, serviceLd, services } from "@/lib/services";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    if (!service) {
      return {
        meta: [
          { title: "Service not found — VYORA.AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      ...pageMeta({
        title: service.seoTitle,
        description: service.seoDescription,
        path: `/services/${params.slug}`,
      }),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceLd(service)) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <section className="pt-40 pb-24 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Service not found</h1>
      <p className="text-muted-foreground mb-8">
        This page doesn&apos;t exist. See everything VYORA.AI builds instead.
      </p>
      <CTAButton to="/services">See all services</CTAButton>
    </section>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <PageHero eyebrow={service.eyebrow} title={service.h1} subtitle={service.subtitle}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton to="/connect">Discuss your project</CTAButton>
          <CTAButton to="/creations" variant="ghost">
            See what we&apos;ve built
          </CTAButton>
        </div>
      </PageHero>

      {/* INTRO */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          {service.intro.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DETAIL SECTIONS */}
      <section className="py-12 bg-card/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {service.sections.map((sec) => (
            <Reveal key={sec.heading}>
              <article>
                <h2 className="text-3xl font-bold mb-4">{sec.heading}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {sec.bullets && (
                  <ul className="mt-5 space-y-3">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="h-4 w-4 mt-1 text-primary shrink-0" aria-hidden="true" />
                        <span className="text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16" aria-labelledby="process">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3 text-center">
              How we work
            </p>
            <h2 id="process" className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our {service.name.toLowerCase()} process
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <li className="glass rounded-2xl p-6 h-full">
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* USE CASES + WHY */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass rounded-3xl p-8 h-full gradient-border">
              <h2 className="text-2xl font-bold mb-5">When teams come to us</h2>
              <ul className="space-y-3">
                {service.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shadow-glow shrink-0" />
                    <span className="text-foreground">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass rounded-3xl p-8 h-full gradient-border">
              <h2 className="text-2xl font-bold mb-5">Why VYORA.AI</h2>
              <p className="text-muted-foreground">
                We are a product-building company before we are a service provider. Everything we
                offer here, we have already done for our own software — including the parts that
                come after launch. That means store releases, testing cycles, backends in
                production and the maintenance that follows.
              </p>
              <p className="mt-4 text-muted-foreground">
                We are based in Lahore, Punjab, Pakistan, and we build for a global audience. Read
                more{" "}
                <Link to="/about" className="text-primary underline underline-offset-4">
                  about VYORA.AI
                </Link>{" "}
                or{" "}
                <Link to="/minds" className="text-primary underline underline-offset-4">
                  meet the founders
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVIDENCE — real products */}
      {service.evidence.length > 0 && (
        <section className="py-16" aria-labelledby="evidence">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 id="evidence" className="text-3xl sm:text-4xl font-bold text-center mb-4">
                Products we&apos;ve built
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Our own product line is the evidence behind this work.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.evidence.map((e, i) => {
                const product = getProduct(e.slug);
                if (!product) return null;
                return (
                  <Reveal key={e.slug} delay={i * 60}>
                    <article className="glass rounded-2xl p-6 h-full">
                      <p className="text-xs uppercase tracking-widest text-primary">
                        {product.status}
                      </p>
                      <h3 className="mt-2 font-semibold text-foreground">{product.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
                      <Link
                        to="/creations/$slug"
                        params={{ slug: product.slug }}
                        className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                      >
                        About {product.name} →
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-card/30" aria-labelledby="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="faq" className="text-3xl sm:text-4xl font-bold mb-10">
              Common questions
            </h2>
          </Reveal>
          <dl className="space-y-7">
            {service.faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-lg font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-2 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16" aria-labelledby="related">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="related" className="text-3xl font-bold text-center mb-10">
              Related services
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="glass rounded-2xl p-6 h-full block transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <h3 className="font-semibold text-foreground">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.subtitle}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/connect">Contact VYORA.AI</CTAButton>
            <CTAButton to="/services" variant="ghost">
              All services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
