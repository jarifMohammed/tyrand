"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import MagneticButton from "./motion/MagneticButton";

const industries = [
  { name: "FinTech", href: "/Services-Page#fintech" },
  { name: "HealthTech", href: "/Services-Page#healthtech" },
  { name: "SaaS", href: "/Services-Page#saas" },
  { name: "Logistics", href: "/Services-Page#logistics" },
];

const techStack = [
  { name: "React & Next.js", href: "/Services-Page#react" },
  { name: "Golang", href: "/Services-Page#golang" },
  { name: "Spring Boot & NestJS", href: "/Services-Page#nestjs" },
  { name: "Azure & AWS", href: "/Services-Page#cloud" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Case Studies", href: "/protfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Engineering Blog", href: "/blog" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/tyrand",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      if (!formRef.current) return;
      const formData = new FormData(formRef.current);
      const res = await fetch("/api/testimonial", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitMessage("Thank you for sharing your experience!");
        formRef.current.reset();
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-[#0A0A0A]">
      {/* ── Testimonial Section ── */}
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 border-b border-neutral-800 py-10 sm:py-16">
        <FadeIn>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 sm:p-6 md:p-8">
            <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
              Share Your Experience with Tyrand
            </h3>
            <p className="mb-6 text-neutral-400">
              We value feedback from the teams we&apos;ve collaborated with.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Full Name *</label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                  placeholder="Your name"
                />
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Designation *</label>
                <input
                  name="designation"
                  type="text"
                  required
                  className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                  placeholder="Your role"
                />
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Product Built *</label>
                <input
                  name="productBuilt"
                  type="text"
                  required
                  className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                  placeholder="Website name or link"
                />
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Social Media Handle</label>
                <input
                  name="socialMediaHandle"
                  type="text"
                  className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                  placeholder="@yourhandle"
                />
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Your Photo</label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-lime-400 file:text-zinc-900 file:hover:bg-lime-300 file:cursor-pointer"
                />
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4 md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Description *</label>
                <textarea
                  name="description"
                  rows={3}
                  required
                  className="w-full resize-none border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                  placeholder="Share your experience..."
                />
              </div>
              <div className="flex flex-col justify-end">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-lime-400 px-8 py-3 text-base font-medium text-zinc-900 transition hover:bg-lime-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </MagneticButton>
              </div>
            </form>
            {submitMessage && (
              <p className="mt-4 text-lime-400">{submitMessage}</p>
            )}
          </div>
        </FadeIn>
      </div>

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
                We help businesses solve complex problems by building
                custom software — from early-stage startups to
                enterprise platforms.
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

          {/* Col 2 — Expertise & Technologies */}
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

              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Tech Stack
              </h4>
              <ul className="space-y-3">
                {techStack.map((t) => (
                  <li key={t.name}>
                    <Link
                      href={t.href}
                      className="group flex items-center gap-2 text-sm text-neutral-400 transition hover:text-lime-400"
                    >
                      <span className="h-px w-0 bg-lime-400 transition-all duration-300 group-hover:w-3" />
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Col 3 — Agency Lifecycle */}
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
            <span className="text-neutral-700">|</span>
            <a
              href="https://status.tyrand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-neutral-500 transition hover:text-neutral-300"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              System Status
            </a>
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
