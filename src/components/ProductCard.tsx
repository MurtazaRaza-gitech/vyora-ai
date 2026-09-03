import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Heart, Leaf, Smile, Sparkles, Stars, Wallet } from "lucide-react";
import type { Product, ProductStatus } from "@/lib/products";

const icons = {
  wallet: Wallet,
  code: Code2,
  leaf: Leaf,
  heart: Heart,
  smile: Smile,
  stars: Stars,
} as const;

export function StatusBadge({ status }: { status: ProductStatus }) {
  const tone =
    status === "In Production"
      ? "border-primary/50 text-primary"
      : status === "Closed Testing"
        ? "border-secondary/50 text-secondary"
        : "border-border text-muted-foreground";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-widest uppercase ${tone}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon] ?? Sparkles;
  return (
    <article className="glass rounded-3xl p-7 sm:p-8 h-full gradient-border hover:-translate-y-1 hover:shadow-glow transition-all duration-500 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div
          className="h-12 w-12 rounded-xl flex items-center justify-center shadow-glow shrink-0"
          style={{ background: "var(--gradient-hero)" }}
        >
          <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
        </div>
        <StatusBadge status={product.status} />
      </div>

      <h3 className="text-2xl font-bold">
        <Link
          to="/creations/$slug"
          params={{ slug: product.slug }}
          className="hover:text-primary transition-colors"
        >
          {product.name}
        </Link>
      </h3>
      <p className="mt-1 text-xs tracking-widest uppercase text-secondary font-medium">
        {product.category}
      </p>
      <p className="mt-4 text-muted-foreground flex-1">{product.shortDescription}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          to="/creations/$slug"
          params={{ slug: product.slug }}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        {product.externalUrl && (
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-1.5 text-sm font-medium hover:border-primary/60 transition-all"
          >
            {product.ctaLabel}
          </a>
        )}
      </div>
    </article>
  );
}
