export default function ServicesHero() {
  return (
    <section>
      <div className="mx-36">
        <div
  className="relative overflow-hidden border-x border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 text-center md:px-16 md:py-24 xl:px-72 xl:py-28"
  style={{
    backgroundImage: "url('/image/page-hero-bg.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />

  {/* Content */}
  <div className="relative z-10">
    <h1 className="mt-8 text-4xl font-semibold text-white md:text-5xl xl:text-6xl">
      Our Services
    </h1>

    <p className="mx-auto mt-6 text-lg leading-8 text-neutral-300">
      Transform your brand with our innovative digital solutions that
      captivate and engage your audience.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}