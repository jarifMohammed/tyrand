import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    title:
      "Tyrand has been Instrumental in Transforming our Online Presence.",
    description:
      "Their team&apos;s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn&apos;t be happier.",
    name: "John Smith",
    role: "CEO of Chic Boutique",
    image: "/image/client-1.png",
    website: "#",
  },
  {
    title: "Working with Tyrand was a breeze.",
    description:
      "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. Tyrand is a trusted partner we highly recommend.",
    name: "Sarah Johnson",
    role: "Founder of HungryBites",
    image: "/image/client-2.png",
    website: "#",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div
            className="relative overflow-hidden border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 text-center md:px-20 xl:px-72"
            style={{
              backgroundImage: "url('/image/Testimonials-bg.png')",
            }}
          > {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
              What Our Clients Say About Us
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
              At Tyrand, we take pride in delivering exceptional digital
              products and services that drive success for our clients. Here&apos;s
              what some of our satisfied clients have to say.
            </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 divide-y divide-neutral-800 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between p-12"
              >
                <div>
                  <h3 className="text-3xl font-medium leading-snug text-lime-300">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-neutral-300">
                    {item.description}
                  </p>
                </div>

                {/* Client */}
                <div className="mt-10 flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/30 p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div>
                      <h4 className="text-xl font-medium text-white">
                        {item.name}
                      </h4>

                      <p className="text-neutral-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={item.website}
                    className="flex items-center gap-2 rounded-lg bg-neutral-800 px-5 py-4 text-white transition hover:bg-neutral-700"
                  >
                    Open Website
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}