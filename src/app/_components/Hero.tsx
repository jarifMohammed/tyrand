"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import TextReveal from "./motion/TextReveal";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import FadeIn from "./motion/FadeIn";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
      <div className="relative overflow-hidden border border-neutral-800 bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-32 lg:py-44 xl:py-60">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom"
            style={{
              backgroundImage: "url('/image/hero-bg.png')",
              y: bgY,
              scale: 1.1,
            }}
          />
          <div
            className="absolute inset-0 animate-bg-glow-slow"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(163, 230, 53, 0.1), transparent 70%)",
              opacity: 0.2,
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

        {/* Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6"
        >
          {/* Heading */}
          <h1
            className="max-w-5xl font-heading font-normal tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontSize: "clamp(1.75rem, 5vw, 7rem)", lineHeight: "var(--lh-display)" }}
          >
            <TextReveal text="We Build Software" as="span" />
            <br />
            <TextReveal text="That Scales" as="span" delay={0.4} />
          </h1>

          {/* Subtitle */}
          <FadeIn delay={0.3}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base sm:leading-7 md:mt-6">
              We Design, Engineer and Scale Custom Software From AI-Powered Platforms To Enterprise Systems.
            </p>
          </FadeIn>

          {/* Services — desktop */}
          <StaggerContainer
            staggerDelay={0.06}
            className="mt-8 hidden flex-wrap items-center justify-center gap-3 sm:flex md:mt-10"
          >
            {["AI & Automation", "CRM & POS", "SaaS Platforms", "Cloud & DevOps"].map((item) => (
              <StaggerItem key={item}>
                <span className="border border-neutral-800 bg-neutral-900/30 px-4 py-2 text-sm text-neutral-300 backdrop-blur-md">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Services — mobile */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:hidden">
            {["AI & Automation", "CRM & POS", "SaaS Platforms", "Cloud & DevOps"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                className="border border-neutral-800/60 bg-neutral-900/30 px-3 py-1.5 text-xs text-neutral-300"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <FadeIn delay={0.6} className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:mt-12 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <Link
              href="./protfolio"
              className="border border-neutral-800 bg-neutral-900/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-neutral-800 sm:px-8 sm:py-4 sm:text-lg"
            >
              Our Works
            </Link>
            <Link
              href="./contact"
              className="bg-lime-400 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-lime-300 sm:px-6 sm:py-4 sm:text-lg"
            >
              Contact Us
            </Link>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
