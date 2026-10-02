import type { Metadata } from "next";
import ServicesHero from "./_components/hero";
import ServiceDetails from "./_components/ServiceDetails";

export const metadata: Metadata = {
  title: "Our Services | Tyrand — Design, Engineering & Project Management",
  description:
    "Explore Tyrand's comprehensive software services: UI/UX Design, Full-Stack Engineering, and Agile Project Management. We build AI-powered platforms, CRM systems, SaaS products, and enterprise-grade digital solutions.",
  keywords: [
    "software development services",
    "UI/UX design services",
    "full-stack engineering",
    "project management agency",
    "AI-powered platforms",
    "CRM development",
    "SaaS development",
    "custom software engineering",
    "enterprise digital solutions",
    "cloud DevOps services",
    "AI chatbot development",
    "SEO marketing services",
    "digital marketing agency",
  ],
  alternates: {
    canonical: "https://tyrand.dev/Services-Page",
  },
  openGraph: {
    title: "Our Services | Tyrand — Design, Engineering & Project Management",
    description:
      "Comprehensive software services: UI/UX Design, Full-Stack Engineering, and Agile Project Management for startups and enterprises.",
    url: "https://tyrand.dev/Services-Page",
    type: "website",
  },
  twitter: {
    title: "Services | Tyrand — Design, Engineering & Project Management",
    description:
      "UI/UX Design, Full-Stack Engineering, and Agile Project Management for startups and enterprises.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
    </>
  );
}