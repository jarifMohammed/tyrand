"use client";

import {
  Users,
  LayoutTemplate,
  MousePointerClick,
  Palette,
  Code2,
  Server,
  Globe,
  Database,
  ShieldCheck,
  TestTube2,
  Gauge,
  Bug,
  Rocket,
  Cloud,
  GitBranch,
  RefreshCcw,
  Wrench,
  LineChart,
  Headphones,
  Smartphone,
  Bot,
  Cpu,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "../../_components/motion/FadeIn";
import StaggerContainer from "../../_components/motion/StaggerContainer";
import StaggerItem from "../../_components/motion/StaggerItem";

/* ── Data ── */

interface Service {
  title: string;
  icon: LucideIcon;
}

interface ServiceCategory {
  heading: string;
  subheading: string;
  description: string;
  label: string;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    heading: "Design",
    subheading: "User Experience (UX) Design",
    label: "Our design services include:",
    description:
      "At Tyrand, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it is about creating seamless and intuitive user experiences.",
    services: [
      { title: "User Research and Persona Development", icon: Users },
      { title: "Information Architecture and Wireframing", icon: LayoutTemplate },
      { title: "Interactive Prototyping and User Testing", icon: MousePointerClick },
      { title: "UI Design and Visual Branding", icon: Palette },
      { title: "Design Systems & Components", icon: Palette },
      { title: "Responsive Web Design", icon: LayoutTemplate },
      { title: "Mobile App Interface Design", icon: MousePointerClick },
      { title: "Brand Identity & Guidelines", icon: Users },
    ],
  },
  {
    heading: "Mobile App",
    subheading: "iOS & Android Development",
    label: "Our mobile app services include:",
    description:
      "We craft native and cross-platform mobile experiences that deliver uncompromised performance, intuitive gestures, and seamless hardware integrations. From consumer apps to enterprise mobility solutions, we build for every screen.",
    services: [
      { title: "iOS Native Development", icon: Smartphone },
      { title: "Android Native Development", icon: Smartphone },
      { title: "Cross-Platform (React Native)", icon: Globe },
      { title: "Mobile UI/UX Design", icon: Palette },
      { title: "App Store Optimization", icon: LineChart },
      { title: "Backend API Integration", icon: Server },
      { title: "Offline Support & Sync", icon: Database },
      { title: "Push Notifications & Messaging", icon: Users },
    ],
  },
  {
    heading: "AI & Agents",
    subheading: "Artificial Intelligence Solutions",
    label: "Our AI services include:",
    description:
      "We integrate state-of-the-art LLMs, custom machine learning models, and autonomous AI agents to automate complex workflows and surface unprecedented insights from your data.",
    services: [
      { title: "Autonomous AI Agents", icon: Bot },
      { title: "LLM Fine-Tuning & Integration", icon: Cpu },
      { title: "Predictive Analytics", icon: LineChart },
      { title: "NLP & Chatbots", icon: Users },
      { title: "AI-Powered Search", icon: Globe },
      { title: "Workflow Automation", icon: RefreshCcw },
      { title: "Machine Learning Infrastructure", icon: Server },
      { title: "Neural Networks & Deep Learning", icon: Network },
    ],
  },
  {
    heading: "Engineering",
    subheading: "Full-Stack Development",
    label: "Our engineering services include:",
    description:
      "Our senior engineers build production-grade, type-safe applications with modern frameworks and battle-tested architectures. From monoliths to microservices, we write code that scales, ships fast, and stays maintainable for years.",
    services: [
      { title: "Frontend Development (React / Next.js)", icon: Code2 },
      { title: "Backend APIs & Microservices", icon: Server },
      { title: "Progressive Web Apps (PWA)", icon: Globe },
      { title: "Database Design & Optimization", icon: Database },
      { title: "Third-Party Integrations & APIs", icon: GitBranch },
      { title: "Real-Time & WebSocket Systems", icon: RefreshCcw },
      { title: "Performance Engineering", icon: Gauge },
      { title: "Technical Architecture & Planning", icon: LayoutTemplate },
    ],
  },
  {
    heading: "Quality Assurance",
    subheading: "Testing & QA Engineering",
    label: "Our QA services include:",
    description:
      "We embed quality at every stage — not as an afterthought, but as a core discipline. Our QA engineers ensure pixel-perfect accuracy, functional reliability, and bulletproof security across every device and browser.",
    services: [
      { title: "Automated Testing (Unit / E2E)", icon: TestTube2 },
      { title: "Cross-Browser & Device Testing", icon: Globe },
      { title: "Performance & Load Testing", icon: Gauge },
      { title: "Security Audits & Pen Testing", icon: ShieldCheck },
      { title: "Accessibility Compliance (WCAG)", icon: Users },
      { title: "Regression & Smoke Testing", icon: Bug },
      { title: "API Testing & Contract Validation", icon: Server },
      { title: "Code Review & Best Practices", icon: Code2 },
    ],
  },
  {
    heading: "Deployment & DevOps",
    subheading: "Infrastructure & Delivery Pipelines",
    label: "Our DevOps services include:",
    description:
      "Ship with confidence. We architect CI/CD pipelines, containerised environments, and cloud infrastructure that makes deployments predictable, repeatable, and zero-downtime — so your team moves fast without breaking things.",
    services: [
      { title: "CI/CD Pipeline Configuration", icon: GitBranch },
      { title: "Cloud Infrastructure (AWS / GCP / Azure)", icon: Cloud },
      { title: "Docker & Container Orchestration", icon: Server },
      { title: "Zero-Downtime Deployments", icon: Rocket },
      { title: "Environment Management (Staging / Prod)", icon: Database },
      { title: "Infrastructure as Code (Terraform)", icon: Code2 },
      { title: "SSL, DNS & Domain Configuration", icon: Globe },
      { title: "Monitoring & Alerting Setup", icon: LineChart },
    ],
  },
  {
    heading: "Maintenance & Support",
    subheading: "Ongoing Care & Optimization",
    label: "Our maintenance services include:",
    description:
      "Launch is just the beginning. We provide continuous monitoring, proactive updates, and iterative feature development — keeping your product secure, performant, and ahead of the competition month after month.",
    services: [
      { title: "24/7 Monitoring & Incident Response", icon: Headphones },
      { title: "Bug Fixes & Patch Management", icon: Bug },
      { title: "Performance Optimization Cycles", icon: Gauge },
      { title: "Security Updates & Compliance", icon: ShieldCheck },
      { title: "Feature Iteration & Enhancements", icon: Wrench },
      { title: "Dependency & Framework Upgrades", icon: RefreshCcw },
      { title: "Analytics & Reporting Dashboards", icon: LineChart },
      { title: "SLA-Backed Technical Support", icon: Headphones },
    ],
  },
];

/* ── Component ── */

export default function DesignServices() {
  return (
    <>
      {categories.map((cat, catIdx) => (
        <section
          key={catIdx}
          id={cat.heading.toLowerCase().replace(/\s+/g, "-")}
          className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 border border-t-0 border-neutral-800 pt-16 sm:pt-20 md:pt-28 first:border-t"
        >
          {/* Heading */}
          <div className="space-y-8 px-4 sm:space-y-12 sm:px-6 md:px-12">
            <div className="max-w-5xl space-y-4">
              <FadeIn>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{cat.heading}</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg leading-7 text-neutral-200">{cat.description}</p>
              </FadeIn>
            </div>

            <FadeIn delay={0.15}>
              <div className="inline-flex rounded-lg bg-neutral-800 px-4 py-3">
                <p className="text-xl text-white">{cat.label}</p>
              </div>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="mt-12 border-t border-neutral-800">
            <div className="space-y-12 pt-12">
              <h3 className="px-4 text-2xl font-medium text-neutral-400 sm:px-6 sm:text-3xl md:px-12">
                {cat.subheading}
              </h3>

              <StaggerContainer
                staggerDelay={0.05}
                className="grid grid-cols-1 border-y border-neutral-800 lg:grid-cols-2 xl:grid-cols-4"
              >
                {cat.services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <StaggerItem key={index}>
                      <div
                        className="
                          group
                          relative
                          overflow-hidden
                          border-b border-neutral-800
                          p-6
                          sm:p-8
                          md:p-12
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:bg-neutral-900
                          hover:shadow-[0_0_20px_rgba(163,230,53,0.08)]
                          xl:border-r
                          last:border-r-0
                        "
                      >
                        {/* Glow Effect */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-lime-400/5
                            via-transparent
                            to-transparent
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                          "
                        />

                        {/* Icon */}
                        <div
                          className="
                            relative
                            mb-7
                            inline-flex
                            rounded-xl
                            border border-neutral-800
                            bg-gradient-to-br
                            from-lime-400/20
                            to-transparent
                            p-3
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:rotate-6
                            group-hover:border-lime-400/50
                          "
                        >
                          <Icon
                            className="
                              h-10 w-10
                              text-lime-400
                              transition-transform
                              duration-500
                              group-hover:scale-110
                            "
                          />
                        </div>

                        {/* Title */}
                        <h4
                          className="
                            relative
                            text-xl
                            font-medium
                            leading-8
                            text-neutral-200
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        >
                          {service.title}
                        </h4>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
