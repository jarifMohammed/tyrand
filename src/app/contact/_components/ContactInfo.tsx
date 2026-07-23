"use client";

import { Mail, MapPin } from "lucide-react";
import FadeIn from "../../_components/motion/FadeIn";

export default function ContactInfo() {
  return (
    <section className="py-12">
      <div className="mx-36">
        <FadeIn className="flex flex-col items-center justify-center gap-7 lg:flex-row">
          {/* Email */}
          <div className="flex items-center gap-4 rounded-lg bg-neutral-800 px-6 py-4">
            <Mail className="h-7 w-7 text-lime-400" />
            <p className="text-xl font-medium leading-8 text-neutral-200">
              info.tyrand@gmail.com
            </p>
          </div>

          {/* Office */}
          <div className="flex items-center gap-4 rounded-lg bg-neutral-800 px-6 py-4">
            <MapPin className="h-7 w-7 text-lime-400" />
            <p className="text-xl font-medium leading-8 text-neutral-200">
              Pekankatu 5 A 21, 00700, Helsinki, Finland
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
