"use client";

import { Zap, Code, Shield, Eye, Users, Rocket } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import FadeIn from "../_components/motion/FadeIn";
import TextReveal from "../_components/motion/TextReveal";
import StaggerContainer from "../_components/motion/StaggerContainer";
import StaggerItem from "../_components/motion/StaggerItem";

export default function AboutPage() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, amount: 0.5 });

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
        "We don't just write code; we architect solutions. Performance, scalability, and maintainability are not afterthoughts\u2014they are the foundation.",
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
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <div className="mx-36 border-x border-neutral-800">
        {/* HERO */}
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
            <FadeIn>
              <span className="mb-6 inline-block rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                About Tyrand
              </span>
            </FadeIn>
            <TextReveal
              text="We Engineer Digital Realities"
              as="h1"
              className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            />
            <FadeIn delay={0.3}>
              <div className="mx-auto max-w-3xl">
                <p className="text-lg leading-loose text-neutral-400 md:text-xl">
                  Tyrand is a collective of elite software engineers, visionary designers, and strategic thinkers.
                  We specialize in navigating the complexities of deep tech, architecting robust systems, and
                  crafting highly sophisticated user experiences. We do not just build applications\u2014we forge
                  transformative digital tools that redefine categories, empower enterprises, and systematically
                  solve the most complex technical challenges of our time.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* THE STORY */}
        <section className="relative border-b border-neutral-800 bg-transparent px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
                Born from a desire for excellence.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-8 text-lg leading-loose text-neutral-400">
                <p>
                  The digital landscape is littered with fragile systems, bloated codebases,
                  and forgotten user experiences. Tyrand was founded to break that cycle. We
                  saw too many businesses being held back by technology that was supposed to
                  accelerate them.
                </p>
                <p>
                  Our mission is simple: to bring elite engineering and world-class design
                  to companies tackling difficult problems. Whether it&apos;s architecting a
                  high-throughput microservices backend or crafting an intuitive interface
                  for complex data, we approach every challenge with the same rigor.
                </p>
                <div ref={quoteRef}>
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={quoteInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="origin-left border-l-2 border-lime-400 pl-6"
                  >
                    <p className="italic text-neutral-300">
                      &quot;We believe that when deep technical expertise meets obsessive design,
                      the results are transformative.&quot;
                    </p>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="border-t border-neutral-800 pt-28">
          <div className="space-y-12 px-12">
            <div className="max-w-5xl space-y-4">
              <FadeIn>
                <h2 className="text-5xl font-semibold text-white">Our Values</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg leading-7 text-neutral-200">
                  The DNA that dictates how we work, who we hire, and what we deliver.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-800">
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 border-y border-neutral-800 lg:grid-cols-2 xl:grid-cols-3"
            >
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={i}>
                    <div className="group relative overflow-hidden border-b border-neutral-800 p-12 transition-colors duration-500 hover:bg-neutral-900/20 xl:border-r last:border-r-0">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="mb-7 inline-flex"
                      >
                        <Icon className="h-8 w-8 text-neutral-500 transition-colors duration-500 group-hover:text-lime-400" />
                      </motion.div>

                      <h4 className="mb-3 relative text-xl font-medium leading-8 text-neutral-200 transition-colors duration-300 group-hover:text-white">
                        {val.title}
                      </h4>

                      <p className="relative text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                        {val.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
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
            <TextReveal
              text="Want to partner with us?"
              as="h2"
              className="mb-5 text-4xl font-extrabold text-white md:text-5xl"
            />
            <FadeIn delay={0.2}>
              <p className="mb-10 text-lg text-neutral-400">
                Let&apos;s discuss how our elite team can solve your most complex challenges.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href="/contact"
                className="inline-block rounded-xl bg-lime-400 px-10 py-4 text-lg font-bold text-neutral-900 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.25)]"
              >
                Start the Conversation \u2192
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
