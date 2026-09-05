import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { products } from "@/lib/products";
import { services } from "@/lib/services";


export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden">
                <span className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
                <span className="relative font-bold text-primary-foreground">V</span>
              </span>
              <span className="text-xl font-bold">
                <span className="gradient-text">VYORA</span>.AI
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              A next-generation AI company creating intelligent mobile and web applications across health, lifestyle, business, and beyond.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Bahar Shah Road, Momin Street, Street 20, Joray Pul, Al Faisal Town, Lahore, Punjab, 54000, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@vyora-ai.technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  contact@vyora-ai.technology
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="hover:text-foreground transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/creations/$slug"
                    params={{ slug: p.slug }}
                    className="hover:text-foreground transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Origin</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/minds" className="hover:text-foreground transition-colors">Minds</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/creations" className="hover:text-foreground transition-colors">Creations</Link></li>
              <li><Link to="/vision" className="hover:text-foreground transition-colors">Vision</Link></li>
              <li><Link to="/pulse" className="hover:text-foreground transition-colors">Pulse</Link></li>
              <li><Link to="/connect" className="hover:text-foreground transition-colors">Connect</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VYORA.AI — Registered in Pakistan. All rights reserved.</p>
          <p>Built with clarity & long-term intent.</p>
        </div>
      </div>
    </footer>
  );
}
