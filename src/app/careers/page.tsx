"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import FadeIn from "../_components/motion/FadeIn";
import TextReveal from "../_components/motion/TextReveal";
import StaggerContainer from "../_components/motion/StaggerContainer";
import StaggerItem from "../_components/motion/StaggerItem";
import MagneticButton from "../_components/motion/MagneticButton";
import { Briefcase, MapPin, ArrowRight, Upload, CheckCircle, AlertCircle, X } from "lucide-react";

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time",
    location: "Helsinki, Finland / Remote",
    description:
      "Build production-grade applications with React, Next.js, and modern tooling. Lead technical architecture decisions and mentor junior engineers.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Helsinki, Finland / Remote",
    description:
      "Craft intuitive, visually stunning interfaces grounded in cognitive psychology and modern interaction patterns. Own the design system end-to-end.",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    description:
      "Architect CI/CD pipelines, containerised environments, and cloud infrastructure. Ensure zero-downtime deployments and bulletproof monitoring.",
  },
];

type ApplicationFormData = {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  portfolioUrl: string;
  coverLetter: string;
};

const initialFormData: ApplicationFormData = {
  fullName: "",
  email: "",
  phone: "",
  linkedinUrl: "",
  portfolioUrl: "",
  coverLetter: "",
};

export default function CareersPage() {
  const [activeApply, setActiveApply] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (title: string) => {
    if (activeApply === title) {
      setActiveApply(null);
      setFormData(initialFormData);
      setResumeFile(null);
      setSubmitStatus(null);
    } else {
      setActiveApply(title);
      setFormData(initialFormData);
      setResumeFile(null);
      setSubmitStatus(null);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSubmitStatus(null);

    if (!file) {
      setResumeFile(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      setSubmitStatus({
        type: "error",
        message: "Only PDF, DOC, and DOCX files are accepted.",
      });
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setSubmitStatus({
        type: "error",
        message: "Resume file must be under 10MB.",
      });
      e.target.value = "";
      return;
    }

    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!resumeFile) {
      setSubmitStatus({ type: "error", message: "Please upload your resume." });
      setIsSubmitting(false);
      return;
    }

    const submitData = new FormData();
    submitData.append("fullName", formData.fullName);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("position", activeApply || "");
    submitData.append("linkedinUrl", formData.linkedinUrl);
    submitData.append("portfolioUrl", formData.portfolioUrl);
    submitData.append("coverLetter", formData.coverLetter);
    submitData.append("resume", resumeFile);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: submitData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData(initialFormData);
        setResumeFile(null);
        const fileInput = document.getElementById("resume-input") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setSubmitStatus({ type: "error", message: data.message });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 border-x border-neutral-800">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-800 bg-transparent">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24 md:py-32 lg:py-44">
            <FadeIn>
              <span className="mb-6 inline-block border border-lime-400/20 bg-lime-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                Careers
              </span>
            </FadeIn>
            <TextReveal
              text="Join the Team That Ships Exceptional Products"
              as="h1"
              className="mb-8 font-heading font-normal text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <FadeIn delay={0.3}>
              <div className="mx-auto max-w-3xl">
                <p className="text-lg leading-loose text-neutral-400 md:text-xl">
                  We&apos;re a collective of elite engineers, designers, and
                  strategists building transformative digital tools. If you
                  thrive on solving hard problems and shipping world-class
                  products, we want to hear from you.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* WHY WORK HERE */}
        <section className="border-b border-neutral-800 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-10 font-heading font-normal text-2xl tracking-tight text-white sm:text-3xl md:text-4xl">
                Why Tyrand?
              </h2>
            </FadeIn>
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {[
                {
                  title: "Elite Engineering Culture",
                  description:
                    "Work alongside senior engineers who obsess over code quality, architecture, and performance.",
                },
                {
                  title: "Remote-First Flexibility",
                  description:
                    "Work from Helsinki or anywhere in the world. We trust outcomes, not hours.",
                },
                {
                  title: "Cutting-Edge Stack",
                  description:
                    "React, Next.js, TypeScript, AI/ML, and modern infrastructure \u2014 no legacy cruft.",
                },
                {
                  title: "Growth & Ownership",
                  description:
                    "Take ownership of features from design to deployment. Your work ships to real users.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="border border-neutral-800 bg-neutral-900/30 p-8 transition-colors duration-300 hover:border-lime-400/30 hover:bg-neutral-900/50">
                    <h3 className="mb-3 text-xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className="border-b border-neutral-800 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-4 font-heading font-normal text-2xl tracking-tight text-white sm:text-3xl md:text-4xl">
                Open Positions
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-12 text-lg text-neutral-400">
                Don&apos;t see a perfect match? Send us your resume anyway at{" "}
                <span className="text-lime-400">info.tyrand@gmail.com</span>
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.12}>
              {openings.map((job, i) => {
                const isFormOpen = activeApply === job.title;

                return (
                  <StaggerItem key={i}>
                    <div className="border-b border-neutral-800 py-8 last:border-b-0">
                      {/* Job Header */}
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3
                            className={`font-heading font-normal text-xl tracking-tight transition-colors duration-300 sm:text-2xl ${isFormOpen ? "text-lime-300" : "text-white"}`}
                          >
                            {job.title}
                          </h3>
                          <p className="mt-2 text-neutral-400">
                            {job.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="h-4 w-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleApplyClick(job.title)}
                          className={`flex shrink-0 items-center gap-2 border px-6 py-3 transition-all duration-300 ${
                            isFormOpen
                              ? "border-lime-400/50 bg-lime-400/10 text-lime-400"
                              : "border-neutral-800 bg-neutral-900/30 text-white hover:border-lime-400/50 hover:bg-neutral-800 hover:text-lime-400"
                          }`}
                        >
                          {isFormOpen ? (
                            <>
                              Close <X size={16} />
                            </>
                          ) : (
                            <>
                              Apply <ArrowRight size={16} />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Inline Application Form */}
                      <AnimatePresence>
                        {isFormOpen && (
                          <motion.div
                            ref={formRef}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.3, delay: 0.05 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-8 border border-neutral-800 bg-neutral-900/20 p-6 sm:p-8 md:p-10">
                              <h4 className="mb-6 font-heading text-lg font-normal tracking-tight text-lime-300">
                                Apply for {job.title}
                              </h4>

                              <form
                                onSubmit={handleSubmit}
                                className="space-y-8"
                              >
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                  <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                    <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                      Full Name <span className="text-lime-400">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Your full name"
                                      required
                                      value={formData.fullName}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          fullName: e.target.value,
                                        })
                                      }
                                      className="w-full border-b border-zinc-800 bg-transparent pb-3 text-white outline-none placeholder:text-stone-500"
                                    />
                                  </div>

                                  <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                    <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                      Email <span className="text-lime-400">*</span>
                                    </label>
                                    <input
                                      type="email"
                                      placeholder="your@email.com"
                                      required
                                      value={formData.email}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          email: e.target.value,
                                        })
                                      }
                                      className="w-full border-b border-zinc-800 bg-transparent pb-3 text-white outline-none placeholder:text-stone-500"
                                    />
                                  </div>
                                </div>

                                {/* Phone & Position */}
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                  <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                    <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                      Phone Number
                                    </label>
                                    <input
                                      type="tel"
                                      placeholder="+1 (555) 000-0000"
                                      value={formData.phone}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          phone: e.target.value,
                                        })
                                      }
                                      className="w-full border-b border-zinc-800 bg-transparent pb-3 text-white outline-none placeholder:text-stone-500"
                                    />
                                  </div>

                                  <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                    <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                      Position
                                    </label>
                                    <input
                                      type="text"
                                      value={job.title}
                                      readOnly
                                      className="w-full border-b border-zinc-800 bg-transparent pb-3 text-neutral-400"
                                    />
                                  </div>
                                </div>

                                {/* LinkedIn & Portfolio */}
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                  <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                    <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                      LinkedIn Profile
                                    </label>
                                    <input
                                      type="url"
                                      placeholder="https://linkedin.com/in/yourprofile"
                                      value={formData.linkedinUrl}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          linkedinUrl: e.target.value,
                                        })
                                      }
                                      className="w-full border-b border-zinc-800 bg-transparent pb-3 text-white outline-none placeholder:text-stone-500"
                                    />
                                  </div>

                                  <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                    <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                      Portfolio / Website
                                    </label>
                                    <input
                                      type="url"
                                      placeholder="https://yourportfolio.com"
                                      value={formData.portfolioUrl}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          portfolioUrl: e.target.value,
                                        })
                                      }
                                      className="w-full border-b border-zinc-800 bg-transparent pb-3 text-white outline-none placeholder:text-stone-500"
                                    />
                                  </div>
                                </div>

                                {/* Cover Letter */}
                                <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                  <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                    Cover Letter
                                  </label>
                                  <textarea
                                    rows={5}
                                    placeholder="Tell us why you're a great fit for this role..."
                                    value={formData.coverLetter}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        coverLetter: e.target.value,
                                      })
                                    }
                                    className="w-full resize-none border-b border-zinc-800 bg-transparent text-white outline-none placeholder:text-stone-500"
                                  />
                                </div>

                                {/* Resume Upload */}
                                <div className="border border-neutral-800 bg-neutral-800/50 p-6">
                                  <label className="mb-4 block font-heading text-sm font-normal tracking-tight text-white">
                                    Resume / CV <span className="text-lime-400">*</span>
                                  </label>
                                  <p className="mb-4 text-xs text-neutral-500">
                                    Accepted formats: PDF, DOC, DOCX (max 10MB)
                                  </p>

                                  <label className="flex cursor-pointer items-center gap-3 border border-dashed border-neutral-700 bg-neutral-900/50 px-6 py-4 transition-colors duration-300 hover:border-lime-400/40">
                                    <Upload className="h-5 w-5 text-neutral-400" />
                                    <span className="text-sm text-neutral-300">
                                      {resumeFile
                                        ? resumeFile.name
                                        : "Choose file..."}
                                    </span>
                                    <input
                                      id="resume-input"
                                      type="file"
                                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                      onChange={handleFileChange}
                                      className="hidden"
                                    />
                                  </label>

                                  {resumeFile && (
                                    <div className="mt-3 flex items-center gap-2 text-sm text-lime-400">
                                      <CheckCircle className="h-4 w-4" />
                                      {resumeFile.name} (
                                      {(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                                    </div>
                                  )}
                                </div>

                                {/* Submit Status */}
                                {submitStatus && (
                                  <div
                                    className={`flex items-center gap-3 text-sm ${
                                      submitStatus.type === "success"
                                        ? "text-lime-400"
                                        : "text-red-400"
                                    }`}
                                  >
                                    {submitStatus.type === "success" ? (
                                      <CheckCircle className="h-5 w-5 shrink-0" />
                                    ) : (
                                      <AlertCircle className="h-5 w-5 shrink-0" />
                                    )}
                                    {submitStatus.message}
                                  </div>
                                )}

                                {/* Submit Button */}
                                <MagneticButton>
                                  <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-lime-400 px-10 py-4 text-lg font-medium text-neutral-900 transition hover:bg-lime-300 disabled:opacity-50"
                                  >
                                    {isSubmitting
                                      ? "Submitting..."
                                      : "Submit Application"}
                                  </button>
                                </MagneticButton>
                              </form>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-neutral-800 bg-transparent">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28 lg:py-36">
            <TextReveal
              text="Ready to Build the Future With Us?"
              as="h2"
              className="mb-5 font-heading font-normal text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            />
            <FadeIn delay={0.2}>
              <p className="mb-10 text-lg text-neutral-400">
                We&apos;re always looking for exceptional talent. Let&apos;s
                create something remarkable together.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link
                href="/contact"
                className="inline-block bg-lime-400 px-10 py-4 text-lg font-bold text-neutral-900 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.25)]"
              >
                Get in Touch
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
