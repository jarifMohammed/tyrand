import React from 'react'
import Hero from './_components/Hero'
import TrustedCompanies from './_components/Tag'
import Services from './_components/Services'
import WhyChoose from './_components/WhyChoose'
import FAQ from './_components/FAQ'
import CTA from './_components/CTA'

// FAQ structured data for Google rich snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Tyrand provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tyrand offers a comprehensive range of software development services. Whether you want to build a website from scratch, need a full website redesign, or want to build custom software, we can help. Our expertise includes UI/UX design, web and mobile app development, AI automation, CRM and POS systems, and SaaS platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How can Tyrand help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We help businesses build modern, scalable digital products. If you are looking to build a website that converts visitors or need to build custom software to automate your operations, our deep tech expertise in AI and enterprise integrations will solve challenges that off-the-shelf solutions cannot.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Tyrand work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work across diverse industries including FinTech and banking, HealthTech and MedTech, SaaS platforms, e-commerce, AI and machine learning, logistics and supply chain, education, real estate, and enterprise organizations. Our team adapts to each industry's regulatory and technical requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to complete a project with Tyrand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines depend on complexity and scope. Most projects are completed within 4–12 weeks. We follow an agile development methodology with regular milestones, demos, and transparent progress tracking to ensure timely delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support and maintenance after the project is completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide continuous post-launch support including performance monitoring, bug fixes, security updates, feature enhancements, and optimization. We offer flexible Service Level Agreements (SLAs) tailored to your needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with existing design or development frameworks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our engineers and designers can seamlessly integrate with your existing design systems, component libraries, development stack, and CI/CD pipelines. We adapt to your tech ecosystem rather than forcing you to adopt ours.",
      },
    },
    {
      "@type": "Question",
      name: "How involved will I be in the project development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll be closely involved throughout the entire process. We maintain radical transparency with regular sprint meetings, progress demos, design reviews, and real-time communication channels to ensure the product aligns with your vision.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with website or app maintenance and updates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide comprehensive long-term website and application support, including performance optimization, security updates, accessibility improvements, feature enhancements, and tech stack upgrades to keep your digital products modern and competitive.",
      },
    },
  ],
};

// BreadcrumbList for homepage
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tyrand.dev",
    },
  ],
};

export default function page() {
  return (
    <main id="main-content">
      {/* Structured data for FAQ rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero/>
      <TrustedCompanies/>
      <Services/>
      <WhyChoose/>
      <FAQ/>
      <CTA/>
    </main>
  )
}
