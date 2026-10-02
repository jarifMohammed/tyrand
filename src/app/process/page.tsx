import type { Metadata } from "next";
import ProcessContent from "./_components/ProcessContent";

export const metadata: Metadata = {
  title: "Our Process | Tyrand — How We Build World-Class Software",
  description:
    "Discover Tyrand's battle-tested 5-phase software development process: Discovery, UX/UI Design, Engineering, QA & Performance Tuning, and Continuous Delivery. Built for precision, designed for scale.",
  keywords: [
    "software development process",
    "agile development methodology",
    "custom software engineering",
    "UX design process",
    "CI/CD pipeline",
    "QA testing",
    "zero-downtime deployment",
    "scalable software architecture",
    "deep tech development",
  ],
  alternates: {
    canonical: "https://tyrand.dev/process",
  },
  openGraph: {
    title: "Our Process | Tyrand — How We Build World-Class Software",
    description:
      "A 5-phase methodology refined across 150+ digital products — from discovery to continuous delivery.",
    url: "https://tyrand.dev/process",
    type: "website",
  },
  twitter: {
    title: "Our Process | Tyrand",
    description:
      "A 5-phase methodology refined across 150+ digital products — from discovery to continuous delivery.",
  },
};

export default function ProcessPage() {
  return <ProcessContent />;
}
