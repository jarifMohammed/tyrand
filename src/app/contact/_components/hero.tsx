"use client";

import { motion, useScroll, useTransform } from "motion/react";
import FadeIn from "../../_components/motion/FadeIn";
import TextReveal from "../../_components/motion/TextReveal";
import StaggerContainer from "../../_components/motion/StaggerContainer";
import StaggerItem from "../../_components/motion/StaggerItem";

export default function ContactUs() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
        <div className="border-x border-b border-neutral-800">
          <div className="relative overflow-hidden border-b border-neutral-800 text-center py-16 sm:py-20 md:py-24 md:px-20 xl:px-72">
            {/* Animated parallax background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom"
                style={{ backgroundImage: "url('/image/Testimonials-bg.png')", y: bgY }}
              />
              <div className="absolute inset-0 animate-bg-glow-slow" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.12), transparent 70%)", opacity: 0.25 }} />
            </div>
            <div className="absolute inset-0 bg-black/50 animate-overlay-breathe" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />

            <div className="relative z-10">
              <FadeIn>
                <span className="mb-6 inline-block rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                  Get In Touch
                </span>
              </FadeIn>
              <TextReveal text="Let&apos;s Build Something Exceptional" as="h2" className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl" />
              <StaggerContainer staggerDelay={0.1} className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {["Design", "Engineering", "Strategy", "Support"].map((tag) => (
                  <StaggerItem key={tag}>
                    <span className="rounded-full border border-neutral-700 bg-neutral-800/50 px-5 py-2 text-sm text-neutral-300 backdrop-blur-sm">{tag}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <FadeIn delay={0.4}>
                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
                  Whether you have a project in mind, need a technical partner, or just want to explore possibilities \u2014 we&apos;re here and ready to listen.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
