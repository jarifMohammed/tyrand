import type { Metadata } from "next";
import CareersContent from "./_components/CareersContent";

export const metadata: Metadata = {
  title: "Careers | Tyrand — Join Our Elite Engineering Team",
  description:
    "Join Tyrand's team of elite engineers, designers, and strategists. Open positions include Senior Full-Stack Engineer, UI/UX Designer, and DevOps Engineer. Remote-first, cutting-edge stack, real ownership.",
  keywords: [
    "software engineering jobs",
    "remote developer jobs",
    "Helsinki tech jobs",
    "full-stack engineer career",
    "UI/UX designer jobs",
    "DevOps engineer jobs",
    "deep tech careers",
    "React Next.js jobs",
    "tech startup careers",
  ],
  alternates: {
    canonical: "https://tyrand.dev/careers",
  },
  openGraph: {
    title: "Careers at Tyrand | Join Our Elite Team",
    description:
      "We're hiring elite engineers, designers, and strategists. Remote-first, cutting-edge stack, real ownership.",
    url: "https://tyrand.dev/careers",
    type: "website",
  },
  twitter: {
    title: "Careers at Tyrand | Join Our Elite Team",
    description:
      "We're hiring elite engineers, designers, and strategists. Remote-first, cutting-edge stack.",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
