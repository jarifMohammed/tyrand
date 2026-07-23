"use client";

import { ArrowRight, Brush, Code2, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";

const services = [
  {
    title: "Design",
    description:
      "At Tyrand, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe great design is about creating seamless and intuitive user experiences.",
    icon: Brush,
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with innovation to build robust, scalable digital solutions using modern technologies and industry best practices.",
    icon: Code2,
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures your projects are delivered on time, within budget, and according to your requirements while maintaining transparent communication.",
    icon: BriefcaseBusiness,
  },
];

export default function Services() {
  return (
    <section>
      <div className="mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Section Header */}
          <div className="relative overflow-hidden border-b border-neutral-800 px-6 py-20 text-center md:px-20 xl:px-72">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom"
                style={{ backgroundImage: "url('./image/service-bg.png')" }}
              />
              <div
                className="absolute inset-0 animate-bg-glow-slow"
                style={{
                  background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.12), transparent 70%)",
                  opacity: 0.25,
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/50 animate-overlay-breathe" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />

            <div className="relative z-10">
              <FadeIn>
                <h2 className="text-4xl font-semibold text-white md:text-5xl">Our Services</h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mx-auto mt-3 text-lg leading-7 text-neutral-300">
                  Transform your brand with our innovative digital solutions that captivate and engage your audience.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Cards */}
          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 divide-y divide-neutral-800 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          >
            {services.map(({ title, description, icon: Icon }) => (
              <StaggerItem key={title}>
                <div className="flex flex-col justify-between p-8 xl:p-12 group transition-all duration-500">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="mb-10 flex h-16 w-16 items-center justify-center rounded-lg border border-neutral-800 bg-gradient-to-br from-lime-400/20 to-transparent group-hover:border-lime-400/50 group-hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]"
                    >
                      <Icon className="h-8 w-8 text-lime-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                    </motion.div>
                    <h3 className="text-3xl font-semibold text-white">{title}</h3>
                    <p className="mt-5 text-lg leading-8 text-neutral-300">{description}</p>
                  </div>
                  <Link
                    href={`/Services-Page#${title === "Project Management" ? "engineering" : title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-16 flex items-center justify-center gap-2 rounded-lg bg-neutral-800 px-6 py-4 text-lg font-medium text-white transition hover:bg-neutral-700"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
