import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="mx-36">
        <div
          className="relative overflow-hidden border-x border-b border-neutral-800 bg-cover bg-center bg-no-repeat py-60"
          style={{
            backgroundImage: "url('/image/hero-bg.png')",
          }}
        >

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Heading */}
            <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-white md:text-6xl xl:text-7xl">
              A Digital Product Studio
              <br />
              that will Work
            </h1>

            {/* Tags */}
            <div className="mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/30 px-3 py-3 backdrop-blur-md">
              <span className="text-lg text-neutral-400 xl:text-xl">
                For
              </span>

              {[
                "Startups",
                "Enterprise Leaders",
                "Media & Publishers",
                "Social Good",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-neutral-800 px-6 py-3 text-base text-white xl:text-base"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="./protfolio"
                className="rounded-lg border border-neutral-800 bg-neutral-900/30 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-neutral-800"
              >
                Our Works
              </Link>

              <Link
                href="./contact"
                className="rounded-lg bg-lime-400 px-6 py-4 text-lg font-medium text-neutral-900 transition hover:bg-lime-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}