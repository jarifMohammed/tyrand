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
    <section ref={ref}>
      <div className="mx-36">
        <div className="relative overflow-hidden border-x border-b border-neutral-800 bg-cover bg-center bg-no-repeat py-60">
          {/* Parallax Background with glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom"
              style={{
                backgroundImage: "url('/image/hero-bg.png')",
                y: bgY,
                scale: 1.1,
              }}
            />
            {/* Lime glow overlay */}
            <div
              className="absolute inset-0 animate-bg-glow-slow"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(163, 230, 53, 0.1), transparent 70%)",
                opacity: 0.2,
              }}
            />
            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />
          </div>

          {/* Gradient overlay for depth - lighter to show background image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

          {/* Content */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-white md:text-6xl xl:text-7xl">
              <TextReveal text="A Digital Product Studio" as="span" />
              <br />
              <TextReveal text="that will Work" as="span" delay={0.4} />
            </h1>

            <StaggerContainer
              staggerDelay={0.08}
              className="mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/30 px-3 py-3 backdrop-blur-md"
            >
              <StaggerItem>
                <span className="text-lg text-neutral-400 xl:text-xl">For</span>
              </StaggerItem>
              {["Startups", "Enterprise Leaders", "Media & Publishers", "Social Good"].map((item) => (
                <StaggerItem key={item}>
                  <span className="rounded-lg bg-neutral-800 px-6 py-3 text-base text-white xl:text-base">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.6} className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="./protfolio" className="rounded-lg border border-neutral-800 bg-neutral-900/30 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-neutral-800">
                Our Works
              </Link>
              <Link href="./contact" className="rounded-lg bg-lime-400 px-6 py-4 text-lg font-medium text-neutral-900 transition hover:bg-lime-300">
                Contact Us
              </Link>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
