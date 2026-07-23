"use client";

import Link from "next/link";
import TextReveal from "./motion/TextReveal";
import FadeIn from "./motion/FadeIn";
import MagneticButton from "./motion/MagneticButton";

export default function CTA() {
  return (
    <section>
      <div className="mx-36">
        <div className="relative overflow-hidden border-x border-b border-neutral-800 px-6 py-20 md:px-20 xl:px-72">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom" style={{ backgroundImage: "url('/image/CTA.png')" }} />
            <div className="absolute inset-0 animate-bg-glow-slow" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.15), transparent 70%)", opacity: 0.3 }} />
          </div>
          <div className="absolute inset-0 bg-black/50 animate-overlay-breathe" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent animate-border-glow" />

          <div className="relative z-10">
            <div className="mx-auto flex flex-col items-center text-center">
              <TextReveal text="Thank You for Your Interest in Tyrand" as="h2" className="text-3xl font-semibold leading-tight text-white md:text-4xl xl:text-5xl" />
              <FadeIn delay={0.25}>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                  We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <MagneticButton>
                  <Link href="./contact" className="mt-12 inline-block rounded-lg bg-lime-400 px-8 py-4 text-lg font-medium text-neutral-900 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.35)]">
                    Start Project
                  </Link>
                </MagneticButton>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
