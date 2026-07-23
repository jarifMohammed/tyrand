"use client";

import Link from "next/link";
import FadeIn from "../../_components/motion/FadeIn";
import MagneticButton from "../../_components/motion/MagneticButton";

export default function AboutCTA() {
  return (
    <section className="border border-neutral-800 p-4 sm:p-6 md:p-10 lg:p-20">
      <div className="flex flex-col gap-12">

        {/* Bottom CTA */}
        <FadeIn>
          <div className="flex flex-col gap-6 rounded-xl border border-neutral-800 bg-neutral-800/20 p-6 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">
              <h3 className="text-xl text-neutral-400">
                Welcome to Tyrand
              </h3>

              <div className="rounded-lg bg-neutral-800 px-5 py-4">
                <p className="text-base leading-7 text-white lg:text-lg">
                  Where collaboration, expertise, and client-centricity
                  intersect to shape the future of digital innovation.
                </p>
              </div>
            </div>

            <MagneticButton>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-8 py-4 text-lg font-medium text-zinc-900 transition duration-300 hover:opacity-90"
              >
                Start Project
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
