import { Link } from "@tanstack/react-router";
import vyoraLogoLight from "@/assets/vyora-logo-light.png";
import vyoraLogoDark from "@/assets/vyora-logo-dark.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/", label: "Origin" },
  { to: "/about", label: "About" },
  { to: "/minds", label: "Minds" },
  { to: "/services", label: "Services" },
  { to: "/creations", label: "Creations" },
  { to: "/vision", label: "Vision" },
  { to: "/pulse", label: "Pulse" },
  { to: "/connect", label: "Connect" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${
          scrolled ? "glass-strong rounded-2xl shadow-card" : ""
        } transition-all duration-300`}
      >
        {/* Left nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-6 flex-1">
          {NAV.slice(0, 4).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 px-4 py-2 group"
        >
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[linear-gradient(145deg,#f0f0f0_0%,#e2e2e2_40%,#f5f5f5_70%,#ffffff_100%)] shadow-[0_0_14px_rgba(0,0,0,0.1)] border border-black/10 dark:hidden">
            <img src={vyoraLogoLight} alt="VYORA.AI logo" className="h-7 w-7 object-contain" />
          </span>
          <span className="hidden dark:inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[linear-gradient(145deg,#1a1a2e_0%,#16213e_40%,#0f3460_70%,#1a1a2e_100%)] shadow-[0_0_14px_rgba(0,0,0,0.3)] border border-white/15">
            <img src={vyoraLogoDark} alt="VYORA.AI logo" className="h-7 w-7 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]" />
          </span>
          <span className="text-lg sm:text-xl font-bold tracking-tight">
            <span className="gradient-text">VYORA</span>
            <span className="text-foreground">.AI</span>
          </span>
        </Link>

        {/* Right nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          {NAV.slice(4).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden mx-4 mt-2 glass-strong rounded-2xl p-4 shadow-card animate-fade-in">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-primary/10 text-primary" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
