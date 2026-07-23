"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";

type Testimonial = {
  title: string;
  description: string;
  name: string;
  role: string;
  image: string;
  website: string;
};

type DbTestimonial = {
  fullName: string;
  designation: string;
  productBuilt: string;
  socialMediaHandle?: string;
  description: string;
  image?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    title: "Tyrand has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    name: "John Smith",
    role: "CEO of Chic Boutique",
    image: "/image/client-1.png",
    website: "#",
  },
  {
    title: "Working with Tyrand was a breeze.",
    description: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. Tyrand is a trusted partner we highly recommend.",
    name: "Sarah Johnson",
    role: "Founder of HungryBites",
    image: "/image/client-2.png",
    website: "#",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data: { success: boolean; data: DbTestimonial[] } = await res.json();
        if (data.success && data.data.length > 0) {
          const formatted: Testimonial[] = data.data.map((item) => ({
            title: item.description.slice(0, 60) + "...",
            description: item.description,
            name: item.fullName,
            role: item.designation,
            image: item.image || "/image/client-1.png",
            website: item.socialMediaHandle || "#",
          }));
          setTestimonials([...defaultTestimonials, ...formatted]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section>
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-neutral-800 px-4 py-12 text-center sm:px-6 sm:py-16 md:px-20 md:py-20 xl:px-72">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom" style={{ backgroundImage: "url('/image/Testimonials-bg.png')" }} />
              <div className="absolute inset-0 animate-bg-glow-slow" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.12), transparent 70%)", opacity: 0.25 }} />
            </div>
            <div className="absolute inset-0 bg-black/50 animate-overlay-breathe" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />

            <div className="relative z-10">
              <FadeIn>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">What Our Clients Say About Us</h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
                  At Tyrand, we take pride in delivering exceptional digital products and services that drive success for our clients. Here&apos;s what some of our satisfied clients have to say.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Testimonials */}
          {isLoading ? (
            <div className="p-12 text-center text-white">Loading...</div>
          ) : (
            <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 divide-y divide-neutral-800 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {testimonials.map((item, index) => (
                <StaggerItem key={item.name + index}>
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                    <div>
                      <h3 className="text-2xl font-medium leading-snug text-lime-300 sm:text-3xl">{item.title}</h3>
                      <p className="mt-6 text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">{item.description}</p>
                    </div>
                    <div className="mt-10 flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <Image src={item.image} alt={item.name} width={56} height={56} className="h-14 w-14 rounded-lg object-cover" />
                        <div>
                          <h4 className="text-lg font-medium text-white sm:text-xl">{item.name}</h4>
                          <p className="text-neutral-400">{item.role}</p>
                        </div>
                      </div>
                      <Link href={item.website} className="flex items-center gap-2 rounded-lg bg-neutral-800 px-5 py-4 text-white transition hover:bg-neutral-700">
                        Open Website <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </div>
    </section>
  );
}
