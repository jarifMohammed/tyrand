"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import SectionBackground from "./SectionBackground";

const faqs = [
  {
    question: "What services does Tyrand provide?",
    answer: "Tyrand offers a comprehensive range of software development services including UI/UX design, web and mobile app development, AI automation, CRM and POS system development, custom enterprise software, SaaS platform engineering, cloud and DevOps solutions, branding and identity, and ongoing project management and maintenance.",
  },
  {
    question: "How can Tyrand help my business?",
    answer: "We help businesses build modern, scalable digital products that improve customer experience, increase conversions, and accelerate growth. Our deep tech expertise in AI automation, custom software, and enterprise integrations enables us to solve complex challenges that off-the-shelf solutions cannot address.",
  },
  {
    question: "What industries does Tyrand work with?",
    answer: "We work across diverse industries including FinTech and banking, HealthTech and MedTech, SaaS platforms, e-commerce, AI and machine learning, logistics and supply chain, education, real estate, and enterprise organizations. Our team adapts to each industry's regulatory and technical requirements.",
  },
  {
    question: "How long does it take to complete a project with Tyrand?",
    answer: "Project timelines depend on complexity and scope. Most projects are completed within 4–12 weeks. We follow an agile development methodology with regular milestones, demos, and transparent progress tracking to ensure timely delivery.",
  },
  {
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer: "Yes. We provide continuous post-launch support including performance monitoring, bug fixes, security updates, feature enhancements, and optimization. We offer flexible Service Level Agreements (SLAs) tailored to your needs.",
  },
  {
    question: "Can you work with existing design or development frameworks?",
    answer: "Absolutely. Our engineers and designers can seamlessly integrate with your existing design systems, component libraries, development stack, and CI/CD pipelines. We adapt to your tech ecosystem rather than forcing you to adopt ours.",
  },
  {
    question: "How involved will I be in the project development process?",
    answer: "You'll be closely involved throughout the entire process. We maintain radical transparency with regular sprint meetings, progress demos, design reviews, and real-time communication channels to ensure the product aligns with your vision.",
  },
  {
    question: "Can you help with website or app maintenance and updates?",
    answer: "Yes. We provide comprehensive long-term website and application support, including performance optimization, security updates, accessibility improvements, feature enhancements, and tech stack upgrades to keep your digital products modern and competitive.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" aria-label="Frequently asked questions about Tyrand">
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-neutral-800 px-4 py-12 text-center sm:px-6 sm:py-16 md:px-20 md:py-20 xl:px-72">
            <SectionBackground src="/image/FAQ.webp" />

            <div className="relative z-10">
              <FadeIn>
                <h2 className="font-heading font-normal text-3xl tracking-tight text-white sm:text-4xl md:text-5xl" style={{ lineHeight: "var(--lh-h1)" }}>Frequently Asked Questions</h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-4 text-lg text-neutral-300">
                  Still have any questions? Contact our team via{" "}
                  <a href="mailto:info.tyrand@gmail.com" className="text-lime-400 cursor-pointer hover:underline">info.tyrand@gmail.com</a>
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
                        <button onClick={() => setActive(open ? -1 : faqIndex)} className="flex w-full items-start gap-3 px-4 py-6 text-left transition hover:bg-neutral-900/40 sm:gap-6 sm:px-8 sm:py-8" aria-expanded={open} aria-controls={`faq-answer-${faqIndex}`}>
                          <motion.div
                            animate={{ borderColor: open ? "rgba(163, 230, 53, 0.5)" : "rgba(38, 38, 38, 1)", color: open ? "#a3e635" : "#ffffff", scale: open ? 1.05 : 1 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center border bg-gradient-to-b from-neutral-800 to-transparent font-heading text-lg font-normal sm:h-16 sm:w-16 sm:text-2xl"
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
                                <motion.div id={`faq-answer-${faqIndex}`} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3, delay: 0.05 } }} className="overflow-hidden">
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
