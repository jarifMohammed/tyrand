import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="mx-36">
        <div
          className="relative overflow-hidden border-x border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 md:px-20 xl:px-72"
          style={{
            backgroundImage: "url('/image/CTA.png')",
          }}
        > {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10">
          <div className="mx-auto flex flex-col items-center text-center">


            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl xl:text-5xl">
              Thank You for Your Interest in Tyrand
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
              We would love to hear from you and discuss how we can help bring
              your digital ideas to life. Here are the different ways you can
              get in touch with us.
            </p>

            {/* CTA Button */}
            <Link
              href="./contact"
              className="mt-12 rounded-lg bg-lime-400 px-8 py-4 text-lg font-medium text-neutral-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300"
            >
              Start Project
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}