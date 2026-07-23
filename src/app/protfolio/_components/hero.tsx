"use client";

import FadeIn from "../../_components/motion/FadeIn";

export default function OurWorksHero() {
  return (
    <section className="relative overflow-hidden border border-neutral-800 py-16 sm:py-20 md:py-28">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-image-zoom" style={{ backgroundImage: "url('/image/contect-hero-bg.png')" }} />
        <div className="absolute inset-0 animate-bg-glow-slow" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.1), transparent 70%)", opacity: 0.2 }} />
      </div>
      <div className="absolute inset-0 bg-black/40 animate-overlay-breathe" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />

      <FadeIn className="relative z-10 mx-4 flex flex-col items-center gap-4 px-4 text-center sm:mx-6 sm:px-6 md:mx-10 lg:mx-20 xl:mx-36">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Our Works</h2>
        <p className="max-w-4xl text-base leading-7 text-neutral-200 sm:text-lg sm:leading-8 lg:text-xl">
          Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.
        </p>
      </FadeIn>
    </section>
  );
}
