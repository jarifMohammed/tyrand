"use client";

import { useState } from "react";
import FadeIn from "../../_components/motion/FadeIn";
import StaggerContainer from "../../_components/motion/StaggerContainer";
import StaggerItem from "../../_components/motion/StaggerItem";
import MagneticButton from "../../_components/motion/MagneticButton";

type ContactFormData = {
  fullName: string;
  email: string;
  contactReasons: string[];
  budget: number;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    contactReasons: [],
    budget: 1000,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const contactReasonsOptions = [
    "Web Design",
    "Collaboration",
    "Mobile App Design",
    "Mobile App Development",
    "Digital Marketing",
    "AI App",
    "AI Agent",
    "Others",
  ];

  const handleCheckboxChange = (reason: string) => {
    setFormData((prev) => {
      const newReasons = prev.contactReasons.includes(reason)
        ? prev.contactReasons.filter((r) => r !== reason)
        : [...prev.contactReasons, reason];
      return { ...prev, contactReasons: newReasons };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitMessage("Thank you! We have received your inquiry.");
        setFormData({
          fullName: "",
          email: "",
          contactReasons: [],
          budget: 1000,
          message: "",
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border border-neutral-800 py-20 mx-36">
      <div className="mx-auto max-w-7xl">
        <form onSubmit={handleSubmit} className="space-y-10 border border-neutral-800 p-10">
          {/* Name & Email */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <StaggerItem>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-8">
                <label className="mb-5 block text-xl font-medium text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Type here"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border-b border-zinc-800 bg-transparent pb-3 text-lg text-white outline-none placeholder:text-stone-500"
                />
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-8">
                <label className="mb-5 block text-xl font-medium text-white">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Type here"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-zinc-800 bg-transparent pb-3 text-lg text-white outline-none placeholder:text-stone-500"
                />
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Contact Reason */}
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-10">
              <h3 className="mb-8 text-xl font-medium text-white">
                Why are you contacting us?
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {contactReasonsOptions.map((reason) => (
                  <label key={reason} className="flex items-center gap-3 text-lg text-white">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-lime-400"
                      checked={formData.contactReasons.includes(reason)}
                      onChange={() => handleCheckboxChange(reason)}
                    />
                    {reason}
                  </label>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Budget */}
          <FadeIn delay={0.15}>
            <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-10">
              <h3 className="text-xl font-medium text-white">
                Your Budget
              </h3>

              <p className="mt-3 text-lg text-neutral-200">
                Slide to indicate your budget range.
              </p>

              <div className="mt-8">
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                  className="h-2 w-full cursor-pointer accent-lime-400"
                />

                <div className="mt-3 flex justify-between text-white">
                  <span>$1,000</span>
                  <span>${formData.budget}</span>
                  <span>$5,000</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Message */}
          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-10">
              <label className="mb-5 block text-xl font-medium text-white">
                Your Message
              </label>

              <textarea
                rows={6}
                placeholder="Type here"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none border-b border-zinc-800 bg-transparent text-lg text-white outline-none placeholder:text-stone-500"
              />
            </div>
          </FadeIn>

          {/* Submit Button */}
          <FadeIn delay={0.25}>
            <MagneticButton>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-lime-400 px-11 py-4 text-lg font-medium text-zinc-900 transition hover:bg-lime-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </MagneticButton>
          </FadeIn>

          {submitMessage && (
            <p className="text-lg text-lime-400">{submitMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
