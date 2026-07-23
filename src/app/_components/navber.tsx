"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/Services-Page",
  },
  {
    name: "Work",
    href: "./protfolio",
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-neutral-800 bg-[#0F0F0F]"
    >
      <div className="mx-36 flex h-24 items-center justify-between px-6 lg:px-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo.png"
            alt="Tyrand Logo"
            width={180}
            height={60}
            priority
            className="h-[50px] w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
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

        {/* CTA */}
        <Link
          href="./contact"
          className="rounded-lg bg-lime-400 px-6 py-3 text-lg font-medium text-neutral-900 transition hover:bg-lime-300"
        >
          Contact Us
        </Link>

      </div>
    </motion.header>
  );
}
