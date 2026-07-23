"use client";

export default function OurWorksHero() {
  return (
    <section className="relative overflow-hidden border border-neutral-800 py-28 mx-36">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/image/contect-hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-36 flex flex-col items-center gap-4 px-6 text-center">
        <h2 className="text-4xl font-semibold text-white lg:text-5xl">
          Our Works
        </h2>

        <p className="max-w-4xl text-lg leading-8 text-neutral-200 lg:text-xl">
          Discover a portfolio of visually stunning and strategically crafted
          digital projects that showcase our creativity and expertise.
        </p>
      </div>
    </section>
  );
}