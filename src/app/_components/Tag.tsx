"use client";

import { useRef } from "react";
import FadeIn from "./motion/FadeIn";
import { motion } from "motion/react";

const brands = [
  {
    name: "Muse gala",
    url: "https://musegala.com.au/",
    logo: "https://musegala.com.au/logo.svg",
  },
  {
    name: "vendo food",
    url: "https://vendofood.com/",
    logo: "https://vendofood.com/images/logo.svg",
  },
  {
    name: "act on climate",
    url: "https://actonclimate.co/about",
    logo: "https://actonclimate.co/logo.png",
  },
  {
    name: "DocTime",
    url: "https://doctime.com.bd/",
    logo: "https://doctime.com.bd/images/logo/doctime_logo.webp",
  },
  {
    name: "scuba life",
    url: "http://scubalife.net/",
    logo: "http://scubalife.net/_next/static/media/logo.165f1e9c.png",
  },
  {
    name: "Social Chamber",
    url: "https://www.thesocialchamber.com/",
    logo: "https://www.thesocialchamber.com/img/logo.png",
  }
];

// Duplicate the array to create a seamless infinite scrolling effect
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

export default function TrustedCompanies() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="text-center w-full">
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
        <div className="relative border-x border-b border-neutral-800 bg-neutral-900/20 py-10 flex flex-col items-center">
          {/* Badge */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
            <FadeIn>
              <div className="rounded-full border border-neutral-800 bg-[#111111] px-6 py-3 text-center flex items-center justify-center whitespace-nowrap">
                <span className="text-sm font-medium uppercase tracking-[0.14em] text-white">
                  Trusted By 25+ Companies
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Marquee */}
          <div className="flex overflow-hidden relative w-full h-40 items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-4">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              }}
              className="flex w-max space-x-24 items-center pr-24"
            >
              {duplicatedBrands.map((brand, index) => (
                <a
                  key={index}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:scale-105"
                >
                  {brand.logo && (
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="h-20 w-auto object-contain max-w-[200px]"
                    />
                  )}
                  <span className="text-xs font-semibold text-neutral-300 whitespace-nowrap tracking-[0.14em] uppercase">
                    {brand.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
