import React from "react";
import FadeIn from "../_components/motion/FadeIn";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 text-neutral-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <div className="space-y-8 text-base leading-7">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">1. Master Service Agreement</h2>
              <p>
                By engaging with Tyrand, you are partnering with a high-end software development agency specializing in deep tech, complex integrations, and next-generation device software. These Terms of Service constitute a legally binding agreement governing the architecture, development, deployment, and ongoing maintenance of your digital assets.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">2. Deep Tech & Intellectual Property</h2>
              <p>
                We operate at the forefront of technological innovation. Unless explicitly stated otherwise in a separate Master Service Agreement (MSA), upon final payment, the client retains full intellectual property rights to the custom code, algorithms, and architectures developed specifically for their project. We take extreme measures to ensure that your proprietary ideas are protected and strictly segregated from other engagements.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">3. Non-Disclosure & Secrecy</h2>
              <p>
                We mandate mutual Non-Disclosure Agreements (NDAs) for all deep tech projects. Tyrand engineers are bound by severe confidentiality clauses. We do not publish case studies or reference your technology stack without explicit, written authorization from your legal representatives.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">4. Transparent Payment Terms</h2>
              <p>
                Tyrand is committed to absolute financial transparency. We operate on a transparent payment framework with clearly defined milestones, deliverables, and billing cycles. There are no hidden fees. All infrastructural costs, third-party API expenses, and development hours are meticulously documented and authorized by the client before proceeding.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">5. Project Scope & Revisions</h2>
              <p>
                Because deep tech development involves exploring unknown technological territories, project scopes are managed agilely. Any major structural pivot in the architecture or hardware integration will trigger a formalized Change Request, ensuring both timeline and budget expectations are transparently updated and mutually agreed upon.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">6. Liability & Warranties</h2>
              <p>
                While we build highly resilient and scalable systems, Tyrand provides software &quot;as is&quot; upon deployment. However, we typically engage in continuous Service Level Agreements (SLAs) for post-launch monitoring, patching, and scaling.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
