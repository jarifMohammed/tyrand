import React from "react";
import FadeIn from "@/app/_components/motion/FadeIn";
import { notFound } from "next/navigation";

const industryData: Record<string, { title: string; subtitle: string; content: string[] }> = {
  fintech: {
    title: "FinTech & Banking",
    subtitle: "High-frequency, ultra-secure financial infrastructure.",
    content: [
      "Tyrand engineers robust, low-latency financial systems designed to process high-volume transactions securely.",
      "Our deep tech expertise allows us to integrate blockchain protocols, decentralized finance (DeFi) mechanisms, and complex banking APIs.",
      "We strictly adhere to global compliance standards (PCI-DSS, SOC2), ensuring your users' financial data is wrapped in AES-256 encryption and zero-trust architectures."
    ]
  },
  healthtech: {
    title: "HealthTech & MedTech",
    subtitle: "Next-generation healthcare platforms & wearable integrations.",
    content: [
      "We build HIPAA-compliant digital health applications that bridge the gap between patients and providers.",
      "From high-end medical device integrations (IoT) to AI-driven diagnostic tools, our architectures are built for absolute reliability and precision.",
      "We sign strict NDAs to protect your proprietary algorithms, ensuring your healthcare innovations remain strictly confidential."
    ]
  },
  saas: {
    title: "SaaS Platforms",
    subtitle: "Scalable, multi-tenant cloud ecosystems.",
    content: [
      "Our agency specializes in architecting highly scalable SaaS products that can handle millions of concurrent users without breaking a sweat.",
      "We implement microservices, containerized orchestration (Kubernetes), and serverless computing to optimize your cloud costs and performance.",
      "With transparent payment integrations and subscription management, we build platforms that convert and retain users seamlessly."
    ]
  },
  ecommerce: {
    title: "E-Commerce Solutions",
    subtitle: "High-conversion, global retail infrastructures.",
    content: [
      "Tyrand redefines online retail by building custom headless e-commerce engines that deliver sub-second load times.",
      "We integrate advanced AI recommendation engines, AR product visualizations, and seamless, transparent global payment gateways.",
      "Your proprietary sales data and customer analytics are fiercely protected through our enterprise-grade security protocols."
    ]
  },
  ai: {
    title: "AI & Machine Learning",
    subtitle: "Proprietary intelligence & deep tech modeling.",
    content: [
      "We design custom machine learning pipelines, natural language processing models, and computer vision algorithms tailored to your specific industry.",
      "Our AI solutions are deployed on high-performance computing clusters, optimizing for both speed and operational cost.",
      "Because AI relies on proprietary datasets, we operate under uncompromising NDAs, ensuring your models and data remain exclusively yours."
    ]
  },
  logistics: {
    title: "Logistics & Supply Chain",
    subtitle: "Real-time tracking and predictive routing.",
    content: [
      "We build complex algorithmic routing systems and real-time fleet tracking dashboards for global logistics networks.",
      "Our software integrates deeply with hardware sensors, GPS devices, and warehouse management APIs to provide granular visibility.",
      "Tyrand delivers highly available systems that ensure your supply chain never goes offline, backed by transparent SLAs and support."
    ]
  }
};

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const data = industryData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 text-neutral-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="mb-4 font-heading font-normal text-4xl tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mb-12 text-xl font-medium text-lime-400">
            {data.subtitle}
          </p>
          
          <div className="space-y-8 text-lg leading-relaxed text-neutral-300">
            {data.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 border border-neutral-800 bg-neutral-900/30 p-8 text-center">
            <h3 className="mb-4 font-heading text-2xl font-normal tracking-tight text-white">Ready to Innovate in {data.title}?</h3>
            <p className="mb-8 text-neutral-400">We sign strict NDAs before you even share your idea.</p>
            <a 
              href="/contact" 
              className="inline-block bg-lime-400 px-8 py-3 text-base font-semibold text-zinc-900 transition hover:bg-lime-300"
            >
              Start a Confidential Conversation
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
