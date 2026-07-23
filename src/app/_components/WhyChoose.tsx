import {
  Award,
  Users,
  TrendingUp,
  Handshake,
} from "lucide-react";

const features = [
  {
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: Award,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, tailoring our services to meet your specific requirements. Your success is our success.",
    icon: Users,
  },
  {
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: TrendingUp,
  },
  {
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: Handshake,
  },
];

export default function WhyChoose() {
  return (
    <section>
      <div className="mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div
            className="relative overflow-hidden border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 text-center md:px-20 xl:px-72"
            style={{
              backgroundImage: "url('/image/Why-Choose.png')",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Why Choose Tyrand?
            </h2>

            <p className="mx-auto mt-3 text-lg leading-7 text-neutral-300">
              Experience excellence in digital craftsmanship with our team of
              skilled professionals dedicated to delivering exceptional
              results.
            </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 divide-y divide-neutral-800 md:grid-cols-2 md:divide-x">
            {features.map(({ title, description, icon: Icon }, index) => (
              <div
                key={index}
                className="p-10 lg:p-16 xl:p-20"
              >
                {/* Title */}
                <div className="mb-10 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-neutral-800 bg-gradient-to-br from-lime-400/20 to-transparent">
                    <Icon className="h-8 w-8 text-lime-400" />
                  </div>

                  <h3 className="text-2xl font-medium text-white lg:text-3xl">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg leading-8 text-neutral-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}