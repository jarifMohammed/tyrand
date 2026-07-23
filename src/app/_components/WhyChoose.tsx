"use client";

import { Award, Users, TrendingUp, Handshake } from "lucide-react";
import { motion } from "motion/react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";

const features = [
  {
    title: "Expertise",
    description: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: Award,
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, tailoring our services to meet your specific requirements. Your success is our success.",
    icon: Users,
  },
  {
    title: "Results-Driven Solutions",
    description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: TrendingUp,
  },
  {
    title: "Collaborative Partnership",
    description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: Handshake,
  },
];

export default function WhyChoose() {
  return (
    <section>
      <div className="mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-neutral-800 px-6 py-20 text-center md:px-20 xl:px-72">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom"
                style={{ backgroundImage: "url('/image/Why-Choose.png')" }}
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
                <h2 className="text-4xl font-semibold text-white md:text-5xl">Why Choose Tyrand?</h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mx-auto mt-3 text-lg leading-7 text-neutral-300">
                  Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Cards */}
          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 divide-y divide-neutral-800 md:grid-cols-2 md:divide-x"
          >
            {features.map(({ title, description, icon: Icon }, index) => (
              <StaggerItem key={index}>
                <div className="p-10 lg:p-16 xl:p-20">
                  <div className="mb-10 flex items-center gap-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex h-16 w-16 items-center justify-center rounded-lg border border-neutral-800 bg-gradient-to-br from-lime-400/20 to-transparent"
                    >
                      <Icon className="h-8 w-8 text-lime-400" />
                    </motion.div>
                    <h3 className="text-2xl font-medium text-white lg:text-3xl">{title}</h3>
                  </div>
                  <p className="text-lg leading-8 text-neutral-300">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
