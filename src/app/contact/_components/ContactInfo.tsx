"use client";

import { Mail, MapPin } from "lucide-react";
import FadeIn from "../../_components/motion/FadeIn";

export default function ContactInfo() {
  return (
    <section className="py-12">
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
        <FadeIn className="flex flex-col items-center justify-center gap-4 sm:gap-7 lg:flex-row">
          {/* Email */}
          <div className="flex items-center gap-3 rounded-lg bg-neutral-800 px-4 py-3 sm:px-6 sm:py-4">
            <Mail className="h-5 w-5 text-lime-400 sm:h-7 sm:w-7" />
            <p className="text-sm font-medium leading-6 text-neutral-200 sm:text-xl sm:leading-8">
              info.tyrand@gmail.com
            </p>
          </div>

          {/* Office */}
          <div className="flex items-center gap-3 rounded-lg bg-neutral-800 px-4 py-3 sm:px-6 sm:py-4">
            <MapPin className="h-5 w-5 text-lime-400 sm:h-7 sm:w-7" />
            <p className="text-sm font-medium leading-6 text-neutral-200 sm:text-xl sm:leading-8">
              Pekankatu 5 A 21, 00700, Helsinki, Finland
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
