"use client";

import Link from "next/link";
import FadeIn from "../_components/motion/FadeIn";
import TextReveal from "../_components/motion/TextReveal";
import StaggerContainer from "../_components/motion/StaggerContainer";
import StaggerItem from "../_components/motion/StaggerItem";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time",
    location: "Helsinki, Finland / Remote",
    description: "Build production-grade applications with React, Next.js, and modern tooling. Lead technical architecture decisions and mentor junior engineers.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Helsinki, Finland / Remote",
    description: "Craft intuitive, visually stunning interfaces grounded in cognitive psychology and modern interaction patterns. Own the design system end-to-end.",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    description: "Architect CI/CD pipelines, containerised environments, and cloud infrastructure. Ensure zero-downtime deployments and bulletproof monitoring.",
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <div className="mx-36 border-x border-neutral-800">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-800 bg-transparent">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
            <FadeIn>
              <span className="mb-6 inline-block rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                Careers
              </span>
            </FadeIn>
            <TextReveal text="Join the Team That Ships Exceptional Products" as="h1" className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl" />
            <FadeIn delay={0.3}>
              <div className="mx-auto max-w-3xl">
                <p className="text-lg leading-loose text-neutral-400 md:text-xl">
                  We&apos;re a collective of elite engineers, designers, and strategists building transformative digital tools. If you thrive on solving hard problems and shipping world-class products, we want to hear from you.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* WHY WORK HERE */}
        <section className="border-b border-neutral-800 px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">Why Tyrand?</h2>
            </FadeIn>
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                { title: "Elite Engineering Culture", description: "Work alongside senior engineers who obsess over code quality, architecture, and performance." },
                { title: "Remote-First Flexibility", description: "Work from Helsinki or anywhere in the world. We trust outcomes, not hours." },
                { title: "Cutting-Edge Stack", description: "React, Next.js, TypeScript, AI/ML, and modern infrastructure \u2014 no legacy cruft." },
                { title: "Growth & Ownership", description: "Take ownership of features from design to deployment. Your work ships to real users." },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8 transition-colors duration-300 hover:border-lime-400/30 hover:bg-neutral-900/50">
                    <h3 className="mb-3 text-xl font-medium text-white">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className="border-b border-neutral-800 px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Open Positions</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-12 text-lg text-neutral-400">Don&apos;t see a perfect match? Send us your resume anyway at <span className="text-lime-400">careers@tyrand.com</span></p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.12}>
              {openings.map((job, i) => (
                <StaggerItem key={i}>
                  <div className="group border-b border-neutral-800 py-8 transition-colors duration-300 hover:bg-neutral-900/20 last:border-b-0">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-medium text-white group-hover:text-lime-300 transition-colors duration-300">{job.title}</h3>
                        <p className="mt-2 text-neutral-400">{job.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{job.type}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{job.location}</span>
                        </div>
                      </div>
                      <Link href="/contact" className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/30 px-6 py-3 text-white transition-all duration-300 hover:border-lime-400/50 hover:bg-neutral-800 hover:text-lime-400 shrink-0">
                        Apply <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-neutral-800 bg-transparent">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

          <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
            <TextReveal text="Ready to Build the Future With Us?" as="h2" className="mb-5 text-4xl font-extrabold text-white md:text-5xl" />
            <FadeIn delay={0.2}>
              <p className="mb-10 text-lg text-neutral-400">
                We&apos;re always looking for exceptional talent. Let&apos;s create something remarkable together.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link href="/contact" className="inline-block rounded-xl bg-lime-400 px-10 py-4 text-lg font-bold text-neutral-900 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.25)]">
                Get in Touch \u2192
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
