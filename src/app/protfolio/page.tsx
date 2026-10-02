import React from 'react'
import type { Metadata } from "next";
import OurWorksHero from './_components/hero'
import OurWorks from './_components/OurWorks'
import CTA from '../_components/CTA'

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Tyrand — Case Studies & Projects",
  description:
    "Browse Tyrand's portfolio of custom software projects, AI-powered platforms, CRM systems, e-commerce solutions, and enterprise applications. See how we've helped startups and enterprises build world-class digital products.",
  keywords: [
    "software portfolio",
    "case studies",
    "custom software projects",
    "AI platform development",
    "CRM development portfolio",
    "SaaS project examples",
    "enterprise software projects",
    "web development portfolio",
    "mobile app development projects",
  ],
  alternates: {
    canonical: "https://tyrand.dev/protfolio",
  },
  openGraph: {
    title: "Our Work | Tyrand — Portfolio & Case Studies",
    description:
      "Browse our portfolio of custom software projects built for startups and enterprises across fintech, healthtech, e-commerce, and more.",
    url: "https://tyrand.dev/protfolio",
    type: "website",
  },
  twitter: {
    title: "Our Work | Tyrand — Portfolio & Case Studies",
    description:
      "Custom software projects built for startups and enterprises across fintech, healthtech, e-commerce, and more.",
  },
};

export default function page() {
  return (
    <div>
        <OurWorksHero />
        <OurWorks/>
        <CTA/>
    </div>
  )
}
