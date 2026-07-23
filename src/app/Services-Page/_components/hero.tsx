"use client";

import FadeIn from "../../_components/motion/FadeIn";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border border-neutral-800 py-28 mx-36">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-image-zoom" style={{ backgroundImage: "url('/image/Service-bg.png')" }} />
        <div className="absolute inset-0 animate-bg-glow-slow" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.1), transparent 70%)", opacity: 0.2 }} />
      </div>
      <div className="absolute inset-0 bg-black/40 animate-overlay-breathe" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />

      <FadeIn className="relative z-10 mx-36 flex flex-col items-center gap-4 px-6 text-center">
        <h2 className="text-4xl font-semibold text-white lg:text-5xl">Our Services</h2>
        <p className="max-w-4xl text-lg leading-8 text-neutral-200 lg:text-xl">
          Comprehensive digital solutions designed to elevate your brand, streamline your operations, and accelerate your growth.
        </p>
      </FadeIn>
    </section>
  );
}
