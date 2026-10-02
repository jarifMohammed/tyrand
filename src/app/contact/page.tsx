import React from 'react'
import type { Metadata } from "next";
import ContactUs from './_components/hero'
import ContactInfo from './_components/ContactInfo'
import ContactForm from './_components/ContactForm'
import FAQ from '../_components/FAQ'
import AboutCTA from './_components/AboutCTA'

export const metadata: Metadata = {
  title: "Contact Us | Tyrand — Get a Free Project Estimate",
  description:
    "Get in touch with Tyrand for custom software development, AI automation, CRM/POS solutions, and enterprise integrations. Based in Helsinki, Finland — serving clients worldwide. Free project estimate available.",
  keywords: [
    "contact Tyrand",
    "free project estimate",
    "custom software quote",
    "software development consultation",
    "AI automation services",
    "Helsinki software agency contact",
    "hire software developers",
    "enterprise software consultation",
  ],
  alternates: {
    canonical: "https://tyrand.dev/contact",
  },
  openGraph: {
    title: "Contact Tyrand | Get a Free Project Estimate",
    description:
      "Reach out to discuss your next project. Based in Helsinki, Finland — serving clients worldwide.",
    url: "https://tyrand.dev/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Tyrand | Get a Free Project Estimate",
    description:
      "Reach out to discuss your next project. Based in Helsinki, serving clients worldwide.",
  },
};

export default function page() {
  return (
    <div>
      <ContactUs />
      <ContactInfo/>
      <ContactForm/>
      <FAQ/>
      <AboutCTA/>
    </div>
  )
}
