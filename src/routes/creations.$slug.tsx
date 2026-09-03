import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { ProductCard, StatusBadge } from "@/components/ProductCard";
import { getProduct, productLd, products } from "@/lib/products";
import { breadcrumbLd, pageMeta } from "@/lib/site";
import { Check, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/creations/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const product = loaderData?.product;
    if (!product) {
      return {
        meta: [
          { title: "Product not found — VYORA.AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const base = pageMeta({
      title: product.seoTitle,
      description: product.seoDescription,
      path: `/creations/${params.slug}`,
      ogType: "article",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(productLd(product)) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Creations", path: "/creations" },
              { name: product.name, path: `/creations/${product.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <section className="pt-40 pb-24 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Product not found</h1>
      <p className="text-muted-foreground mb-8">
        This product doesn&apos;t exist. Browse everything we&apos;re building instead.
      </p>
      <CTAButton to="/creations">See all products</CTAButton>
    </section>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={<span className="gradient-text">{product.name}</span>}
        subtitle={product.shortDescription}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <StatusBadge status={product.status} />
          {product.externalUrl && (
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
              style={{ background: "var(--gradient-hero)" }}
            >
              {product.ctaLabel} on {product.externalLabel}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </PageHero>

      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-2">
        <ol className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/creations" className="hover:text-foreground">Creations</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">{product.name}</li>
        </ol>
      </nav>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <Reveal>
            <div className="glass rounded-3xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-4">About {product.name}</h2>
              <div className="space-y-4 text-muted-foreground">
                {product.detailedDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="glass rounded-3xl p-8 h-full gradient-border space-y-5 text-sm">
              <div>
                <dt className="text-xs tracking-widest uppercase text-muted-foreground">Category</dt>
                <dd className="mt-1 font-semibold">{product.category}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-muted-foreground">Status</dt>
                <dd className="mt-1 font-semibold">{product.status}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-muted-foreground">Availability</dt>
                <dd className="mt-1 font-semibold">{product.availability}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest uppercase text-muted-foreground">Built by</dt>
                <dd className="mt-1 font-semibold">
                  <Link to="/minds" className="hover:text-primary">VYORA.AI</Link>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-card/30" aria-labelledby="features">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="features" className="text-3xl font-bold mb-8">Key features</h2>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.features.map((f, i) => (
              <Reveal key={f} delay={i * 40}>
                <li className="glass rounded-2xl px-5 py-4 flex items-start gap-3 h-full">
                  <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold mb-8">More from VYORA.AI</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/creations">See all products</CTAButton>
            <CTAButton to="/connect" variant="ghost">Talk to the team</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
