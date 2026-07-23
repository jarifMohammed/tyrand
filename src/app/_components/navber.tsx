"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Services-Page" },
  { name: "Work", href: "./protfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-0 z-50 border-b border-neutral-800 bg-[#0F0F0F]/95 backdrop-blur-md"
    >
      <div className="mx-4 flex h-16 items-center justify-between sm:h-20 sm:mx-6 md:mx-10 md:h-24 lg:mx-20 xl:mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 lg:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo.png"
            alt="Tyrand Logo"
            width={180}
            height={60}
            priority
            className="h-[36px] w-auto object-contain sm:h-[42px] md:h-[50px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={item.href}
                className="rounded-lg px-7 py-3 text-lg font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-lime-400"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="./contact"
          className="hidden rounded-lg bg-lime-400 px-6 py-3 text-lg font-medium text-neutral-900 transition hover:bg-lime-300 lg:block"
        >
          Contact Us
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-200 transition hover:border-lime-400 hover:text-lime-400 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-neutral-800 bg-[#0F0F0F] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-lime-400"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="./contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-lg bg-lime-400 px-4 py-3 text-center text-lg font-medium text-neutral-900 transition hover:bg-lime-300"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
