"use client";

import { useEffect, useState } from "react";
import { Zap, Code, Shield, Eye, Users, Rocket } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger simple fade-in animation
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Radical Transparency",
      description:
        "No black boxes. We build in the open with our partners, communicating trade-offs honestly and maintaining full visibility into our processes.",
      icon: Eye,
    },
    {
      title: "Engineering as Craft",
      description:
        "We don't just write code; we architect solutions. Performance, scalability, and maintainability are not afterthoughts—they are the foundation.",
      icon: Code,
    },
    {
      title: "Uncompromising Quality",
      description:
        "We measure twice and cut once. Rigorous testing and peer reviews ensure that every deployment is robust and secure by design.",
      icon: Shield,
    },
    {
      title: "Velocity with Purpose",
      description:
        "Speed is a byproduct of great engineering. By automating the mundane and standardizing the complex, we ship features faster without sacrificing quality.",
      icon: Zap,
    },
    {
      title: "Design Driven",
      description:
        "Technology serves human needs. We believe enterprise software can and should be as intuitive and beautifully designed as consumer products.",
      icon: Users,
    },
    {
      title: "Forward Thinking",
      description:
        "We stay at the bleeding edge so you don't have to. We leverage modern frameworks and infrastructure to future-proof your digital assets.",
      icon: Rocket,
    },
  ];

  return (
    <main
      className="relative min-h-screen bg-[#0A0A0A]"
      style={{
        backgroundColor: "#0A0A0A",
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

          <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
            <span className="mb-6 inline-block rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
              About Tyrand
            </span>
            <h1 className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              We Engineer Digital Realities
            </h1>
            <div 
              className="mx-auto max-w-3xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 1.2s ease-out 0.2s, transform 1.2s ease-out 0.2s",
              }}
            >
              <p className="text-lg leading-loose text-neutral-400 md:text-xl">
                Tyrand is a collective of elite software engineers, visionary designers, and strategic thinkers. 
                We specialize in navigating the complexities of deep tech, architecting robust systems, and 
                crafting highly sophisticated user experiences. We do not just build applications—we forge 
                transformative digital tools that redefine categories, empower enterprises, and systematically 
                solve the most complex technical challenges of our time.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════ THE STORY ═══════════════════ */}
        <section className="relative border-b border-neutral-800 bg-transparent px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
              Born from a desire for excellence.
            </h2>
            <div className="space-y-8 text-lg leading-loose text-neutral-400">
              <p>
                The digital landscape is littered with fragile systems, bloated codebases,
                and forgotten user experiences. Tyrand was founded to break that cycle. We 
                saw too many businesses being held back by technology that was supposed to 
                accelerate them.
              </p>
              <p>
                Our mission is simple: to bring elite engineering and world-class design
                to companies tackling difficult problems. Whether it's architecting a 
                high-throughput microservices backend or crafting an intuitive interface 
                for complex data, we approach every challenge with the same rigor.
              </p>
              <p className="border-l-2 border-lime-400 pl-6 italic text-neutral-300">
                "We believe that when deep technical expertise meets obsessive design, 
                the results are transformative."
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════ OUR VALUES ═══════════════════ */}
        <section className="border-t border-neutral-800 pt-28">
          <div className="space-y-12 px-12">
            <div className="max-w-5xl space-y-4">
              <h2 className="text-5xl font-semibold text-white">Our Values</h2>
              <p className="text-lg leading-7 text-neutral-200">
                The DNA that dictates how we work, who we hire, and what we deliver.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-800">
            <div className="grid grid-cols-1 border-y border-neutral-800 lg:grid-cols-2 xl:grid-cols-3">
              {values.map((val, i) => {
                const Icon = val.icon;
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
                      <Icon className="h-8 w-8 text-neutral-500 transition-colors duration-500 group-hover:text-lime-400" />
                    </div>

                    {/* Title */}
                    <h4
                      className="
                        mb-3
                        relative
                        text-xl
                        font-medium
                        leading-8
                        text-neutral-200
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {val.title}
                    </h4>

                    {/* Description */}
                    <p className="relative text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                      {val.description}
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
              Want to partner with us?
            </h2>
            <p className="mb-10 text-lg text-neutral-400">
              Let&apos;s discuss how our elite team can solve your most complex challenges.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-xl bg-lime-400 px-10 py-4 text-lg font-bold text-neutral-900 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.25)]"
            >
              Start the Conversation →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
