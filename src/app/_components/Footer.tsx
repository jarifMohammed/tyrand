"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111111]">
      <div className="mx-36 py-12">
        {/* Top */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Logo"
              width={180}
              height={56}
              priority
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Back to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-neutral-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* Contact */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Mail className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">info.tyrand@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <MapPin className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">Somewhere in the World</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-neutral-400">© 2023 Tyrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}