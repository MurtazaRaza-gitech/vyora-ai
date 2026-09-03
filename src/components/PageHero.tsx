import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 overflow-hidden">
      <div className="absolute inset-0 aurora-bg pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up [animation-delay:120ms]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
