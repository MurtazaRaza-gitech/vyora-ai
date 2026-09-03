import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary:
    "text-primary-foreground shadow-glow hover:shadow-[0_15px_60px_-10px_var(--cyan-glow)]",
  ghost:
    "glass border border-border text-foreground hover:border-primary/60",
};

type LinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
};

export function CTAButton({
  variant = "primary",
  children,
  arrow = true,
  className = "",
  ...rest
}: LinkProps) {
  const style =
    variant === "primary"
      ? { background: "var(--gradient-hero)", backgroundSize: "200% 200%" }
      : undefined;
  return (
    <Link
      {...rest}
      className={`${base} ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}
