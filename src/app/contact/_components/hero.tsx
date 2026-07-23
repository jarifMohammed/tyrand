"use client";

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden">
        <div className="mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div
            className="relative overflow-hidden border-b border-neutral-800 bg-cover bg-center bg-no-repeat text-center py-32 md:px-20 xl:px-72"
            style={{
              backgroundImage: "url('/image/Testimonials-bg.png')",
            }}
          > {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
              What Our Clients Say About Us
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
              At Tyrand, we take pride in delivering exceptional digital
              products and services that drive success for our clients. Here&apos;s
              what some of our satisfied clients have to say.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}