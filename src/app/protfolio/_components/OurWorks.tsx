"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import FadeIn from "../../_components/motion/FadeIn";
import StaggerContainer from "../../_components/motion/StaggerContainer";
import StaggerItem from "../../_components/motion/StaggerItem";

const projects = [
  {
    category: "E-Commerce Platform for Fashion Hub",
    title: "Chic Boutique",
    website: "https://www.chicboutique.com",
    description:
      "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
    image: "/image/work4.webp",
  },
  {
    category: "Mobile App for Food Delivery Service",
    title: "HungryBites",
    website: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options.",
    image: "/image/work3.webp",
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div ref={ref} className="overflow-hidden rounded-xl">
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={700}
          height={423}
          className="h-[480px] w-full object-cover scale-110"
        />
      </motion.div>
    </div>
  );
}

export default function OurWorks() {
  return (
    <section className="border border-neutral-800 pt-28 mx-36">
      {/* Heading */}
      <div className="px-12">
        <FadeIn>
          <div className="max-w-4xl space-y-4">
            <h2 className="text-5xl font-semibold text-white">
              At Tyrand
            </h2>

            <p className="text-lg leading-7 text-neutral-200">
              We have had the privilege of working with a diverse range
              of clients and delivering exceptional digital products
              that drive success.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 inline-flex rounded-lg bg-neutral-800 px-4 py-3">
            <p className="text-xl text-white">
              Here are ten examples of our notable works:
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Projects */}
      <StaggerContainer
        staggerDelay={0.2}
        className="mt-12 grid grid-cols-1 lg:grid-cols-2"
      >
        {projects.map((project, index) => (
          <StaggerItem key={index}>
            <div className="border-t border-neutral-800 pb-24 lg:border-r last:border-r-0">
              {/* Category */}
              <div className="border-b border-neutral-800 px-12 py-7">
                <h3 className="text-2xl font-medium text-neutral-400">
                  {project.category}
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-7 px-12 pt-7">
                {/* Image */}
                <ProjectImage src={project.image} alt={project.title} />

                {/* Title + Website */}
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <h4 className="text-2xl font-medium text-neutral-200">
                      {project.title}
                    </h4>

                    <div className="mt-3 inline-flex rounded-lg bg-neutral-800 px-4 py-2">
                      <p className="text-lg text-neutral-400">
                        {project.website}
                      </p>
                    </div>
                  </div>

                  <button className="rounded-lg bg-neutral-800 p-3 transition hover:bg-neutral-700">
                    <ArrowUpRight className="h-7 w-7 text-lime-400" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-lg leading-7 text-neutral-400">
                  {project.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
