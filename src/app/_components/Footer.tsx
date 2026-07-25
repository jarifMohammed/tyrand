"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import MagneticButton from "./motion/MagneticButton";

const industries = [
  { name: "FinTech & Banking", href: "/industries/fintech" },
  { name: "HealthTech & MedTech", href: "/industries/healthtech" },
  { name: "SaaS Platforms", href: "/industries/saas" },
  { name: "E-Commerce Solutions", href: "/industries/ecommerce" },
  { name: "AI & Machine Learning", href: "/industries/ai" },
  { name: "Logistics & Supply Chain", href: "/industries/logistics" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Careers", href: "/careers" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/tyrand",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/tyrand",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-[#0A0A0A]">
      {/* ── Main Footer Grid ── */}
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 py-10 sm:py-16">
        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">

          {/* Col 1 — Company */}
          <StaggerItem>
            <div>
              <Link href="/">
                <Image
                  src="/image/logo.png"
                  alt="Tyrand Logo"
                  width={180}
                  height={56}
                  priority
                  className="mb-6 h-[46px] w-auto"
                />
              </Link>
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-neutral-400">
                We are a software agency committed to solving complex business challenges. We maintain high quality, strict transparency, full NDA protection, and deliver exceptional solutions from early-stage startups to enterprise platforms.
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition hover:border-lime-400 hover:bg-lime-400/10 hover:text-lime-400"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Col 2 — Industries */}
          <StaggerItem>
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Industries
              </h4>
              <ul className="mb-8 space-y-3">
                {industries.map((i) => (
                  <li key={i.name}>
                    <Link
                      href={i.href}
                      className="group flex items-center gap-2 text-sm text-neutral-400 transition hover:text-lime-400"
                    >
                      <span className="h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-3" />
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Col 3 — Company Links */}
          <StaggerItem>
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((c) => (
                  <li key={c.name}>
                    <Link
                      href={c.href}
                      className="group flex items-center gap-2 text-sm text-neutral-400 transition hover:text-lime-400"
                    >
                      <span className="h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-3" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Col 4 — Trust & Conversion */}
          <StaggerItem>
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Let&apos;s Talk
              </h4>

              {/* Primary CTA */}
              <MagneticButton>
                <Link
                  href="/contact"
                  className="mb-8 inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-lime-300"
                >
                  Estimate Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>

              {/* Office */}
              <div className="mb-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                <div>
                  <p className="text-sm font-medium text-neutral-200">Helsinki, Finland</p>
                  <p className="text-xs text-neutral-500">Pekankatu 5 A 21, 00700</p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6 flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-lime-400" />
                <a
                  href="mailto:info.tyrand@gmail.com"
                  className="text-sm text-neutral-400 transition hover:text-lime-400"
                >
                  info.tyrand@gmail.com
                </a>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>

      {/* ── Bottom Utility Bar ── */}
      <div className="border-t border-neutral-800 bg-[#080808]">
        <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          {/* Copyright */}
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} Tyrand. All rights reserved.
          </p>

          {/* Legal & Status */}
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-neutral-500 transition hover:text-neutral-300">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">|</span>
            <Link href="/terms" className="text-xs text-neutral-500 transition hover:text-neutral-300">
              Terms of Service
            </Link>
          </div>

          {/* Back to Top */}
          <MagneticButton>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
