"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";

const faqs = [
  { question: "What services does Tyrand provide?", answer: "Tyrand offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { question: "How can Tyrand help my business?", answer: "We help businesses build modern digital products that improve customer experience, increase conversions, and accelerate growth." },
  { question: "What industries does Tyrand work with?", answer: "We work with startups, SaaS companies, healthcare, finance, education, e-commerce, real estate, and enterprise organizations." },
  { question: "How long does it take to complete a project with Tyrand?", answer: "Project timelines depend on complexity, but most projects are completed within 4\u201312 weeks." },
  { question: "Do you offer ongoing support and maintenance after the project is completed?", answer: "Yes. We provide continuous maintenance, performance monitoring, bug fixes, and feature updates." },
  { question: "Can you work with existing design or development frameworks?", answer: "Absolutely. We can work with your existing design systems, component libraries, and development stack." },
  { question: "How involved will I be in the project development process?", answer: "You\u2019ll be involved throughout the process with regular meetings, demos, and progress updates." },
  { question: "Can you help with website or app maintenance and updates?", answer: "Yes. We provide long-term website and application support, optimization, security updates, and feature enhancements." },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section>
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-neutral-800 px-4 py-12 text-center sm:px-6 sm:py-16 md:px-20 md:py-20 xl:px-72">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom" style={{ backgroundImage: "url('/image/FAQ.png')" }} />
              <div className="absolute inset-0 animate-bg-glow-slow" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(163, 230, 53, 0.12), transparent 70%)", opacity: 0.25 }} />
            </div>
            <div className="absolute inset-0 bg-black/50 animate-overlay-breathe" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent animate-border-glow" />

            <div className="relative z-10">
              <FadeIn>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-4 text-lg text-neutral-300">
                  Still have any questions? Contact our team via{" "}
                  <span className="text-lime-400 cursor-pointer">hello@Tyrand.com</span>
                </p>
              </FadeIn>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-neutral-800">
            {[0, 1].map((column) => (
              <StaggerContainer key={column} staggerDelay={0.06}>
                {faqs.slice(column * 4, column * 4 + 4).map((faq, index) => {
                  const faqIndex = column * 4 + index;
                  const open = active === faqIndex;
                  return (
                    <StaggerItem key={faq.question}>
                      <div className="border-b border-neutral-800">
                        <button onClick={() => setActive(open ? -1 : faqIndex)} className="flex w-full items-start gap-3 px-4 py-6 text-left transition hover:bg-neutral-900/40 sm:gap-6 sm:px-8 sm:py-8">
                          <motion.div
                            animate={{ borderColor: open ? "rgba(163, 230, 53, 0.5)" : "rgba(38, 38, 38, 1)", color: open ? "#a3e635" : "#ffffff", scale: open ? 1.05 : 1 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-b from-neutral-800 to-transparent text-lg font-semibold sm:h-16 sm:w-16 sm:text-2xl"
                          >
                            {String(faqIndex + 1).padStart(2, "0")}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-6">
                              <h3 className={`text-base font-medium transition-colors duration-300 sm:text-xl ${open ? "text-lime-300" : "text-white"}`}>{faq.question}</h3>
                              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, type: "spring", stiffness: 200 }}>
                                {open ? <Minus className="h-6 w-6 text-lime-400" /> : <Plus className="h-6 w-6 text-white" />}
                              </motion.div>
                            </div>
                            <AnimatePresence>
                              {open && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3, delay: 0.05 } }} className="overflow-hidden">
                                  <p className="mt-5 text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">{faq.answer}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </button>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
