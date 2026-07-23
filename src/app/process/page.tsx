"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus, Code2, GitBranch, Gauge, ShieldCheck, TestTube2, LineChart } from "lucide-react";
/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const steps = [
  {
    number: "01",
    title: "Discovery & Requirements",
    subtitle: "Deep-dive into your vision",
    description:
      "We conduct thorough stakeholder interviews, competitive audits, and technical feasibility analyses. Every pixel starts with understanding your users, business objectives, and the technology landscape — so we build exactly what your product needs.",
    deliverables: [
      "Project brief & scope document",
      "User personas & journey maps",
      "Technical feasibility report",
      "Competitive landscape audit",
    ],
  },
  {
    number: "02",
    title: "UX Architecture & UI Design",
    subtitle: "Designing experiences, not just screens",
    description:
      "Our design team crafts information architectures, user flows, and high-fidelity prototypes grounded in cognitive psychology and modern interaction patterns. We obsess over hierarchy, spacing, and motion — delivering interfaces that feel intuitive on the first touch.",
    deliverables: [
      "Wireframes & user flows",
      "High-fidelity Figma prototypes",
      "Design system & component library",
      "Usability test reports",
    ],
  },
  {
    number: "03",
    title: "Engineering & Development",
    subtitle: "Production-grade code from day one",
    description:
      "Senior engineers translate designs into performant, type-safe code using React, Next.js, and modern tooling. We write scalable architectures with CI/CD pipelines, automated testing, and infrastructure-as-code — so your product ships fast and stays reliable.",
    deliverables: [
      "Production-ready codebase",
      "CI/CD pipeline & deployment scripts",
      "API documentation",
      "Unit & integration test suites",
    ],
  },
  {
    number: "04",
    title: "QA & Performance Tuning",
    subtitle: "Pixel-perfect across every device",
    description:
      "Rigorous cross-browser testing, lighthouse audits, accessibility checks, and load testing ensure your product performs flawlessly under real-world conditions. We don't ship until every edge case is covered and every metric hits our quality bar.",
    deliverables: [
      "QA test plan & coverage report",
      "Lighthouse & Core Web Vitals audit",
      "WCAG accessibility certification",
      "Security vulnerability scan",
    ],
  },
  {
    number: "05",
    title: "Delivery & Continuous Support",
    subtitle: "Launch is just the beginning",
    description:
      "We deploy with zero-downtime strategies, monitor application health in real time, and provide ongoing iteration cycles. Post-launch, we continuously optimise performance, refine features, and keep your tech stack current.",
    deliverables: [
      "Zero-downtime production deploy",
      "Monitoring & alerting dashboards",
      "Monthly performance reports",
      "Priority support & iteration sprints",
    ],
  },
];

const stats = [
  { value: "150+", label: "Products Shipped" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9★", label: "Client Satisfaction" },
  { value: "<48h", label: "Avg. Response Time" },
];

const principles = [
  {
    title: "Type-Safe Everything",
    description:
      "End-to-end TypeScript from database schemas to UI components — catching bugs at compile time, not production.",
    icon: Code2,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Every server, pipeline, and config lives in version control. Reproducible, auditable, rollback-ready.",
    icon: GitBranch,
  },
  {
    title: "Performance by Default",
    description:
      "Server-side rendering, edge caching, image optimisation, and lazy loading are baked into every build.",
    icon: Gauge,
  },
  {
    title: "Security-First Mindset",
    description:
      "OWASP top 10, dependency audits, CSP headers, and encrypted secrets — security is never an afterthought.",
    icon: ShieldCheck,
  },
  {
    title: "Automated Quality Gates",
    description:
      "Every PR triggers lint checks, unit tests, E2E suites, and lighthouse audits before it can merge.",
    icon: TestTube2,
  },
  {
    title: "Observable Systems",
    description:
      "Structured logging, distributed tracing, and real-time dashboards give full visibility into production health.",
    icon: LineChart,
  },
];

/* ═══════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════ */

export default function ProcessPage() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [lineHeight, setLineHeight] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use client coordinates for a fixed spotlight relative to the viewport
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisibleSteps((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15 }
    );
    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(
        Math.max((viewH - rect.top) / (rect.height + viewH * 0.3), 0),
        1
      );
      setLineHeight(progress * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main 
      className="relative min-h-screen bg-[#0A0A0A]"
      style={{
        background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(163,230,53,0.06), transparent 40%)`,
        backgroundColor: "#0A0A0A"
      }}
    >
      <div className="mx-36 border-x border-neutral-800">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden border-b border-neutral-800 bg-transparent">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <span className="mb-6 inline-block rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            Our Process
          </span>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-7xl lg:text-8xl">
            Built for Precision
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            A battle-tested, five-phase methodology refined across hundreds of
            digital products — engineered for quality, designed for scale.
          </p>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="border-b border-neutral-800 bg-transparent">
        <div className="grid grid-cols-2 divide-x divide-neutral-800 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center md:py-14">
              <p className="text-3xl font-extrabold text-lime-400 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ TIMELINE ═══════════════════ */}
      <section
        ref={sectionRef}
        className="relative px-20 py-32"
      >
        {/* Vertical line */}
        <div className="absolute left-[103px] top-40 bottom-40 w-px bg-neutral-800/40 hidden md:block">
          <div
            className="w-full bg-gradient-to-b from-lime-400 via-lime-400/50 to-transparent"
            style={{
              height: `${lineHeight}%`,
              transition: "height 0.12s ease-out",
            }}
          />
        </div>
        <div className="absolute left-[43px] top-40 bottom-40 w-px bg-neutral-800/40 md:hidden">
          <div
            className="w-full bg-gradient-to-b from-lime-400 via-lime-400/50 to-transparent"
            style={{
              height: `${lineHeight}%`,
              transition: "height 0.12s ease-out",
            }}
          />
        </div>

        <div className="space-y-24 md:space-y-32 relative z-10">
          {steps.map((step, idx) => {
            const isVisible = visibleSteps.has(idx);

            return (
              <div
                key={idx}
                ref={(el) => {
                  stepsRef.current[idx] = el;
                }}
                data-idx={idx}
                className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                }}
              >
                {/* ── Number ── */}
                <div className="relative z-10 flex-shrink-0 mt-1 md:mt-2">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-[#0A0A0A] font-mono text-sm font-medium"
                    style={{
                      borderColor: isVisible ? "rgba(163,230,53,0.5)" : "rgba(38,38,38,1)",
                      color: isVisible ? "#a3e635" : "#737373",
                      transition: "all 0.6s ease",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="flex-1 max-w-3xl">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-lime-400/80">
                    {step.subtitle}
                  </span>
                  <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    {step.title}
                  </h2>
                  <p className="mb-10 text-base md:text-lg leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                  
                  <div className="border-l border-neutral-800 pl-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Key Deliverables
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-3 text-sm text-neutral-300"
                        >
                          <span className="h-[1px] w-3 bg-lime-400/50" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════ ENGINEERING PRINCIPLES ═══════════════════ */}
      <section className="border-t border-neutral-800 pt-28">
        <div className="space-y-12 px-12">
          <div className="max-w-5xl space-y-4">
            <h2 className="text-5xl font-semibold text-white">Engineering Principles</h2>
            <p className="text-lg leading-7 text-neutral-200">
              Every line of code we write is guided by these non-negotiable
              principles — the foundation of products that scale from zero to
              millions.
            </p>
          </div>

          <div className="inline-flex rounded-lg bg-neutral-800 px-4 py-3">
            <p className="text-xl text-white">Deep Tech DNA</p>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800">
          <div className="grid grid-cols-1 border-y border-neutral-800 lg:grid-cols-2 xl:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    border-b border-neutral-800
                    p-12
                    transition-colors
                    duration-500
                    hover:bg-neutral-900/20
                    xl:border-r
                    last:border-r-0
                  "
                >

                  {/* Icon */}
                  <div className="mb-7">
                    <Icon className="h-8 w-8 text-neutral-500 group-hover:text-lime-400 transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      relative
                      text-xl
                      font-medium
                      leading-8
                      text-neutral-200
                      transition-colors
                      duration-300
                      group-hover:text-white
                      mb-3
                    "
                  >
                    {p.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="relative text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative border-t border-neutral-800 bg-transparent">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <h2 className="mb-5 text-4xl font-extrabold text-white md:text-5xl">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              exceptional
            </span>
            ?
          </h2>
          <p className="mb-10 text-lg text-neutral-400">
            Let&apos;s turn your idea into a world-class digital product.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-xl bg-lime-400 px-10 py-4 text-lg font-bold text-neutral-900 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.25)]"
          >
            Get in Touch →
          </a>
        </div>
      </section>
      </div>
    </main>
  );
}
