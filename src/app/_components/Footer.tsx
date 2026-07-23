"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { useState, useRef } from "react";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      if (!formRef.current) return;
      const formData = new FormData(formRef.current);
      const res = await fetch("/api/testimonial", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitMessage("Thank you for sharing your experience!");
        formRef.current.reset();
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
    <footer className="border-t border-neutral-800 bg-[#111111]">
      <div className="mx-36 py-12">
        {/* Share Experience Section */}
        <div className="mb-12 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Share Your Experience with Tyrand
          </h3>
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Full Name *
              </label>
              <input
                name="fullName"
                type="text"
                required
                className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                placeholder="Your name"
              />
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Designation *
              </label>
              <input
                name="designation"
                type="text"
                required
                className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                placeholder="Your role"
              />
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Product Built *
              </label>
              <input
                name="productBuilt"
                type="text"
                required
                className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                placeholder="Website name or link"
              />
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Social Media Handle
              </label>
              <input
                name="socialMediaHandle"
                type="text"
                className="w-full border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                placeholder="@yourhandle"
              />
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Your Photo
              </label>
              <input
                name="image"
                type="file"
                accept="image/*"
                className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-lime-400 file:text-zinc-900 file:hover:bg-lime-300 file:cursor-pointer"
              />
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 p-4 md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Description *
              </label>
              <textarea
                name="description"
                rows={3}
                required
                className="w-full resize-none border-b border-zinc-700 bg-transparent text-white outline-none placeholder:text-stone-500"
                placeholder="Share your experience..."
              />
            </div>
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-lime-400 px-8 py-3 text-base font-medium text-zinc-900 transition hover:bg-lime-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p className="mt-4 text-lime-400">{submitMessage}</p>
          )}
        </div>

        {/* Top */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Logo"
              width={180}
              height={56}
              priority
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Back to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-neutral-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* Contact */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Mail className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">info.tyrand@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <MapPin className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">Somewhere in the World</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-neutral-400">© 2023 Tyrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}