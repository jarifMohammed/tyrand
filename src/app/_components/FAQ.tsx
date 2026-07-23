"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Tyrand provide?",
    answer:
      "Tyrand offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "How can Tyrand help my business?",
    answer:
      "We help businesses build modern digital products that improve customer experience, increase conversions, and accelerate growth.",
  },
  {
    question: "What industries does Tyrand work with?",
    answer:
      "We work with startups, SaaS companies, healthcare, finance, education, e-commerce, real estate, and enterprise organizations.",
  },
  {
    question:
      "How long does it take to complete a project with Tyrand?",
    answer:
      "Project timelines depend on complexity, but most projects are completed within 4–12 weeks.",
  },
  {
    question:
      "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes. We provide continuous maintenance, performance monitoring, bug fixes, and feature updates.",
  },
  {
    question:
      "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely. We can work with your existing design systems, component libraries, and development stack.",
  },
  {
    question:
      "How involved will I be in the project development process?",
    answer:
      "You'll be involved throughout the process with regular meetings, demos, and progress updates.",
  },
  {
    question:
      "Can you help with website or app maintenance and updates?",
    answer:
      "Yes. We provide long-term website and application support, optimization, security updates, and feature enhancements.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section>
      <div className="mx-36">
        <div className="border-x border-b border-neutral-800">

          {/* Header */}
          <div
            className="relative overflow-hidden border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 text-center md:px-20 xl:px-72"
            style={{
              backgroundImage: "url('/image/FAQ.png')",
            }}
          >  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-lg text-neutral-300">
              Still have any questions? Contact our team via{" "}
              <span className="text-lime-400 cursor-pointer">
                hello@Tyrand.com
              </span>
            </p>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-neutral-800">
            {[0, 1].map((column) => (
              <div key={column}>
                {faqs
                  .slice(column * 4, column * 4 + 4)
                  .map((faq, index) => {
                    const faqIndex = column * 4 + index;
                    const open = active === faqIndex;

                    return (
                      <div
                        key={faq.question}
                        className="border-b border-neutral-800"
                      >
                        <button
                          onClick={() =>
                            setActive(open ? -1 : faqIndex)
                          }
                          className="flex w-full items-start gap-6 px-8 py-8 text-left transition hover:bg-neutral-900/40"
                        >
                          {/* Number */}
                          <div
                            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-800 to-transparent text-2xl font-semibold ${
                              open
                                ? "text-lime-400"
                                : "text-white"
                            }`}
                          >
                            {String(faqIndex + 1).padStart(2, "0")}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-6">
                              <h3
                                className={`text-xl font-medium ${
                                  open
                                    ? "text-lime-300"
                                    : "text-white"
                                }`}
                              >
                                {faq.question}
                              </h3>

                              {open ? (
                                <Minus className="h-6 w-6 text-lime-400" />
                              ) : (
                                <Plus className="h-6 w-6 text-white" />
                              )}
                            </div>

                            {open && (
                              <p className="mt-5 text-lg leading-8 text-neutral-300">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        </button>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}