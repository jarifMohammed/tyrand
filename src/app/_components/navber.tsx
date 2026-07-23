import Image from "next/image";
import Link from "next/link";

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
    <header className="border-b border-neutral-800 bg-[#0F0F0F]">
      <div className="mx-36 flex h-24 items-center justify-between px-6 lg:px-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo.png"
            alt="Marvix Logo"
            width={180}
            height={60}
            priority
            className="h-[50px] w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-7 py-3 text-lg font-medium text-neutral-200 transition hover:bg-neutral-800 hover:text-lime-400"
            >
              {item.name}
            </Link>
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
    </header>
  );
}