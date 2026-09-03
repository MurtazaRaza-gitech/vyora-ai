import { forwardRef, useEffect, useRef, useState } from "react";
import { Rocket, Target, Lightbulb, Users, Trophy, Flag, Sparkles } from "lucide-react";

type Milestone = {
  year: string;
  suffix: string;
  label?: string;
  icon: typeof Rocket;
  bullets: string[];
};

const milestones: Milestone[] = [
  {
    year: "20",
    suffix: "23",
    icon: Lightbulb,
    bullets: [
      "Vyora AI was founded by Muhammad Shehram Mehmood with a clear vision to build an AI company from the ground up and scale it globally.",
      "What started as a dream quickly turned into curiosity, which fueled ambition, discipline, and a strong drive to succeed.",
    ],
  },
  {
    year: "20",
    suffix: "24",
    icon: Users,
    bullets: [
      "The journey began as an individual effort, driven by consistency and hard work.",
      "It became clear that achieving large-scale goals alone would take significant time and effort.",
      "Murtaza Raza and Hussnain Zia Ullah joined as co-founders, bringing new skills and shared vision.",
      "With a stronger team, progress accelerated and small milestones were achieved.",
      "Multiple projects were initiated, with continuous effort and focus on building something meaningful.",
    ],
  },
  {
    year: "20",
    suffix: "25",
    icon: Trophy,
    bullets: [
      "A major turning point came with a nationwide STEM/STEAM competition organized by FBISE.",
      "The team participated and secured first position across Pakistan.",
      "This achievement strengthened their belief in their combined potential and capabilities.",
      "The team became more focused, disciplined, and committed to building impactful solutions.",
      "During this phase, they faced a serious setback while attempting to register a company in the UK, resulting in financial loss due to deception by a trusted individual.",
      "Instead of stopping, they chose to rebuild and learned the importance of self-reliance and resilience.",
    ],
  },
  {
    year: "20",
    suffix: "26",
    icon: Flag,
    bullets: [
      "Vyora AI was successfully registered in Pakistan.",
      "The company is now actively working on multiple projects simultaneously.",
      "These projects are being developed with the aim of reaching a global audience.",
      "The company continues to grow steadily, backed by experience, teamwork, and clear direction.",
    ],
  },
  {
    year: "20",
    suffix: "27",
    label: "Future Vision",
    icon: Sparkles,
    bullets: [
      "Focus on scaling Vyora AI beyond borders and establishing a global presence.",
      "Develop innovative AI solutions that solve real-world problems.",
      "Expand project portfolio and bring products to international markets.",
      "Strengthen the foundation built over the years and continue consistent growth.",
      "The goal is not just to grow, but to create lasting impact through technology and innovation.",
    ],
  },
];

const fullYears = milestones.map((m) => m.year + m.suffix);

export function JourneyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [progress, setProgress] = useState(0); // 0..1 across timeline
  const [activeIndex, setActiveIndex] = useState(0);
  const [forcedProgress, setForcedProgress] = useState<number | null>(null);

  // Scroll-driven progress + active year detection
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = -rect.height + vh * 0.3;
      const total = start - end;
      const passed = start - rect.top;
      const p = Math.min(1, Math.max(0, passed / total));
      setProgress(p);

      // active block = the one whose top is closest to ~35% of viewport
      let bestIdx = 0;
      let bestDist = Infinity;
      blockRefs.current.forEach((b, i) => {
        if (!b) return;
        const r = b.getBoundingClientRect();
        const dist = Math.abs(r.top - vh * 0.35);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActiveIndex(bestIdx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Position of each year node along the track (0..1)
  const nodePos = (i: number) => (i + 1) / (fullYears.length + 1);

  const handleNodeClick = (i: number) => {
    const target = blockRefs.current[i];
    if (!target) return;
    // Animate the light to that year first
    setForcedProgress(nodePos(i));
    setActiveIndex(i);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    // Release the forced progress after the smooth scroll settles
    window.setTimeout(() => setForcedProgress(null), 1200);
  };

  const displayProgress = forcedProgress ?? progress;

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Futuristic ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--primary)_15%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Our Story</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Our <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Sticky futuristic timeline track */}
        <div className="sticky top-20 z-20 mx-auto max-w-4xl px-6 sm:px-10 mb-20 sm:mb-28">
          <div className="relative rounded-2xl glass border border-border/60 px-4 sm:px-8 py-6 backdrop-blur-xl">
            <div className="relative h-16">
              {/* base line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
              {/* progress line with moving glow */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: `${displayProgress * 100}%`,
                  background:
                    "linear-gradient(90deg, transparent, var(--primary), var(--secondary))",
                  boxShadow: "0 0 16px var(--primary)",
                }}
              />
              {/* leading light pulse */}
              <div
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full transition-[left] duration-700 ease-out"
                style={{
                  left: `calc(${displayProgress * 100}% - 6px)`,
                  background: "var(--primary)",
                  boxShadow:
                    "0 0 24px 6px color-mix(in oklab, var(--primary) 70%, transparent), 0 0 60px 12px color-mix(in oklab, var(--secondary) 40%, transparent)",
                }}
              />

              {/* Rocket at start */}
              <div
                className="absolute -left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass border border-border flex items-center justify-center"
                style={{ boxShadow: "0 0 20px color-mix(in oklab, var(--primary) 50%, transparent)" }}
              >
                <Rocket className="h-4 w-4 text-primary" />
              </div>

              {/* Target at end */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass border border-border flex items-center justify-center">
                <Target className="h-4 w-4 text-secondary" />
              </div>

              {/* Year nodes — clickable */}
              {fullYears.map((y, i) => {
                const pos = nodePos(i);
                const reached = displayProgress >= pos - 0.02;
                const isActive = i === activeIndex;
                const Icon = milestones[i].icon;
                return (
                  <button
                    key={y}
                    type="button"
                    onClick={() => handleNodeClick(i)}
                    aria-label={`Jump to ${y}`}
                    className="absolute top-1/2 -translate-y-1/2 group focus:outline-none"
                    style={{ left: `${pos * 100}%`, transform: "translate(-50%, -50%)" }}
                  >
                    {/* outer ring on active */}
                    <span
                      aria-hidden
                      className={`absolute inset-0 -m-2 rounded-full transition-all duration-500 ${
                        isActive ? "ring-2 ring-primary/60 animate-pulse" : "ring-0"
                      }`}
                    />
                    <span
                      className={`relative flex items-center justify-center h-6 w-6 rounded-full border-2 transition-all duration-500 ${
                        reached
                          ? "bg-primary border-primary scale-110"
                          : "bg-background border-border group-hover:border-primary/60"
                      }`}
                      style={
                        reached
                          ? {
                              boxShadow:
                                "0 0 18px color-mix(in oklab, var(--primary) 70%, transparent)",
                            }
                          : undefined
                      }
                    >
                      <Icon
                        className={`h-3 w-3 transition-colors ${
                          reached ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                      />
                    </span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 mt-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-foreground"
                          : reached
                          ? "text-foreground/80"
                          : "text-muted-foreground group-hover:text-foreground"
                      } ${i % 2 === 0 ? "top-5" : "-top-10"}`}
                    >
                      {y}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Year sections */}
        <div className="space-y-20 sm:space-y-28">
          {milestones.map((m, idx) => (
            <YearBlock
              key={m.year + m.suffix}
              ref={(el) => {
                blockRefs.current[idx] = el;
              }}
              milestone={m}
              isActive={idx === activeIndex}
              index={idx}
            />
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
            Vyora AI is no longer just an idea. It is a{" "}
            <span className="gradient-text font-bold">journey in motion</span>, built on vision,
            resilience, and continuous progress.
          </p>
        </div>
      </div>
    </section>
  );
}

type YearBlockProps = {
  milestone: Milestone;
  index: number;
  isActive: boolean;
};

const YearBlock = forwardRef<HTMLDivElement, YearBlockProps>(function YearBlock(
  { milestone, isActive },
  ref
) {
  const localRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const setRefs = (el: HTMLDivElement | null) => {
    localRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Icon = milestone.icon;

  return (
    <div
      ref={setRefs}
      id={`year-${milestone.year}${milestone.suffix}`}
      className="scroll-mt-40"
    >
      <div
        className={`group relative rounded-3xl border border-border/60 glass backdrop-blur-xl px-6 sm:px-10 py-10 sm:py-14 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${isActive ? "ring-1 ring-primary/40" : ""}`}
        style={{
          boxShadow: isActive
            ? "0 30px 80px -40px color-mix(in oklab, var(--primary) 60%, transparent), 0 0 0 1px color-mix(in oklab, var(--primary) 25%, transparent) inset"
            : "0 20px 60px -40px color-mix(in oklab, var(--foreground) 40%, transparent)",
        }}
      >
        <div
          aria-hidden
          className={`absolute -inset-px rounded-3xl pointer-events-none transition-opacity duration-700 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
          }`}
          style={{
            background:
              "radial-gradient(600px circle at 0% 0%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 40%), radial-gradient(600px circle at 100% 100%, color-mix(in oklab, var(--secondary) 20%, transparent), transparent 40%)",
          }}
        />

        <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full glass border border-border px-3 py-1 text-xs font-medium tracking-widest uppercase text-primary mb-4">
              <Icon className="h-3.5 w-3.5" />
              Chapter {milestone.year + milestone.suffix}
            </div>
            <div className="relative leading-none">
              <div className="text-7xl sm:text-8xl md:text-[8rem] font-black tracking-tight">
                <span className="text-foreground">{milestone.year}</span>
              </div>
              <div className="text-7xl sm:text-8xl md:text-[8rem] font-black tracking-tight -mt-4 sm:-mt-6">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "var(--gradient-hero, linear-gradient(135deg, var(--primary), var(--secondary)))",
                  }}
                >
                  {milestone.suffix}
                </span>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-6 left-0 text-7xl sm:text-8xl md:text-[8rem] font-black tracking-tight text-muted-foreground/10 select-none"
              >
                {milestone.suffix}
              </div>
              {milestone.label && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full glass border border-border px-3 py-1 text-xs font-medium tracking-widest uppercase text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {milestone.label}
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <ul className="space-y-5">
              {milestone.bullets.map((b, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${150 + i * 110}ms` }}
                >
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0"
                    style={{
                      boxShadow:
                        "0 0 10px color-mix(in oklab, var(--primary) 80%, transparent)",
                    }}
                  />
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
