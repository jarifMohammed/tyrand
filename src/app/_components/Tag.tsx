"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import FadeIn from "./motion/FadeIn";

const brands = [
  "/images/brands/logo-1.svg",
  "/images/brands/logo-2.svg",
  "/images/brands/logo-3.svg",
  "/images/brands/logo-4.svg",
  "/images/brands/logo-5.svg",
  "/images/brands/logo-6.svg",
];

export default function TrustedCompanies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref}>
      <div className="mx-36">
        <div className="relative border-x border-b border-neutral-800 bg-neutral-900/20 py-10">
          {/* Badge */}
          <FadeIn className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full border border-neutral-800 bg-[#111111] px-6 py-3 text-center">
              <span className="text-lg font-medium text-white">
                Trusted By 250+ Companies
              </span>
            </div>
          </FadeIn>

          {/* Floating Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {brands.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-32 items-center justify-center border-r border-neutral-800 last:border-r-0"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    width={140}
                    height={48}
                    className="h-12 w-auto opacity-60 transition duration-500 hover:opacity-100"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
