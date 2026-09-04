import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Mail, MapPin, Send, Handshake, Briefcase, MessageSquare, HelpCircle, Linkedin, MessageCircle } from "lucide-react";
import { founders } from "@/lib/founders";
import hussnainConnect from "@/assets/founder-hussnain-connect.jpg";
import { SITE, breadcrumbLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/connect")({
  head: () => ({
    ...pageMeta({
      title: "Contact VYORA.AI — Collaborate, Partner or Ask",
      description:
        "Contact VYORA.AI in Lahore, Pakistan. Reach the founders by email, WhatsApp or LinkedIn for collaboration, partnerships, product questions and general enquiries.",
      path: "/connect",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact VYORA.AI",
          mainEntity: {
            "@type": "Organization",
            name: SITE.name,
            email: SITE.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE.address.street,
              addressLocality: SITE.address.city,
              addressRegion: SITE.address.region,
              postalCode: SITE.address.postalCode,
              addressCountry: SITE.address.country,
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Connect", path: "/connect" },
          ]),
        ),
      },
    ],
  }),
  component: Connect,
});


function Connect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    if (error) {
      setStatus("error");
      return;
    }
    setForm({ name: "", email: "", message: "" });
    setStatus("sent");
  };


  return (
    <>
      <PageHero
        eyebrow="Connect"
        title={<>Let's <span className="gradient-text">Talk</span></>}
        subtitle="Whether you want to collaborate, partner, or just learn more about what we're building, we're open to conversations."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 sm:p-10 gradient-border space-y-5"
            >
              <div>
                <label className="text-xs tracking-widest uppercase text-primary font-medium">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-primary font-medium">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-primary font-medium">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow transition-all resize-none"
                  placeholder="Tell us about your idea, project, or partnership opportunity…"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                style={{ background: "var(--gradient-hero)" }}
              >
                {sent ? "Opening your mail app…" : "Get In Touch"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-xs text-muted-foreground">
                We'll route your message to <span className="text-foreground">Vyora.ai001@gmail.com</span>.
              </p>
            </form>
          </Reveal>

          {/* Side info */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="glass rounded-3xl p-7">
                <p className="text-xs tracking-widest uppercase text-secondary font-medium mb-3">Why Reach Out</p>
                <ul className="space-y-3">
                  {[
                    { icon: Handshake, t: "Collaboration opportunities" },
                    { icon: Briefcase, t: "Business partnerships" },
                    { icon: MessageSquare, t: "Product discussions" },
                    { icon: HelpCircle, t: "General inquiries" },
                  ].map((item) => (
                    <li key={item.t} className="flex items-center gap-3 text-foreground">
                      <span className="h-9 w-9 rounded-lg flex items-center justify-center bg-muted/40 border border-border">
                        <item.icon className="h-4 w-4 text-primary" />
                      </span>
                      {item.t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="glass rounded-3xl p-7">
                <p className="text-xs tracking-widest uppercase text-primary font-medium mb-3">Find Us</p>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-3 text-foreground">
                    <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <span>
                      Bahar Shah Road, Momin Street, Street 20,<br />
                      Joray Pul, Al Faisal Town,<br />
                      Lahore, Punjab, 54000, Pakistan
                    </span>
                  </p>
                  <p className="flex items-center gap-3 text-foreground">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Vyora.ai001@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Vyora.ai001@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Direct contacts */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-primary font-medium mb-3 text-center">Reach the Founders Directly</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Start a Conversation</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 80}>
                <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-glow transition-all h-full">
                  <img
                    src={f.name.startsWith("Hussnain") ? hussnainConnect : f.image}
                    alt={f.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="mx-auto h-20 w-20 rounded-full object-cover border-2 border-border shadow-glow"
                  />
                  <p className="mt-4 font-semibold">{f.name}</p>
                  <p className="text-xs text-muted-foreground mb-4">{f.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(f.email)}`} target="_blank" rel="noopener noreferrer" aria-label={`Email ${f.name}`}
                      className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                      <Mail className="h-4 w-4" />
                    </a>
                    <a href={f.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${f.name}`}
                      className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                      <MessageCircle className="h-4 w-4" />
                    </a>
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${f.name}`}
                      className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final note */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm tracking-widest uppercase text-secondary font-medium mb-3">Final Note</p>
            <p className="text-2xl sm:text-3xl font-semibold leading-snug">
              We are still early in our journey, but we are building with{" "}
              <span className="gradient-text">clarity and intent</span>.
            </p>
            <p className="mt-5 text-muted-foreground">
              If you believe in building meaningful AI products, this is just the beginning.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
