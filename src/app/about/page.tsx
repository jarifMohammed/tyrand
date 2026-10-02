import type { Metadata } from "next";
import AboutContent from "./_components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Tyrand — Deep Tech Software Agency",
  description:
    "Learn about Tyrand — a Helsinki-based deep tech software agency of elite engineers, designers, and strategists. We specialize in AI automation, custom software development, CRM systems, and enterprise-grade digital solutions.",
  keywords: [
    "about Tyrand",
    "deep tech agency",
    "software engineering team",
    "Helsinki software company",
    "elite engineers",
    "custom software development",
    "AI automation agency",
    "enterprise software",
  ],
  alternates: {
    canonical: "https://tyrand.dev/about",
  },
  openGraph: {
    title: "About Tyrand | Deep Tech Software Agency",
    description:
      "A collective of elite software engineers, visionary designers, and strategic thinkers specializing in deep tech, AI automation, and enterprise solutions.",
    url: "https://tyrand.dev/about",
    type: "website",
  },
  twitter: {
    title: "About Tyrand | Deep Tech Software Agency",
    description:
      "A collective of elite software engineers specializing in deep tech, AI automation, and enterprise solutions.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
