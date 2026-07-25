import React from "react";
import FadeIn from "../_components/motion/FadeIn";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 text-neutral-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-base leading-7">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">1. Introduction</h2>
              <p>
                At Tyrand, a premier deep tech and software engineering agency, we recognize that our clients entrust us with bleeding-edge innovations, proprietary architectures, and highly sensitive data. This Privacy Policy outlines our rigorous standards for data protection, confidentiality, and security across all our engagements.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">2. Non-Disclosure Agreements (NDA) & Confidentiality</h2>
              <p>
                As an agency working closely with high-end device integrations and revolutionary software ideas, confidentiality is not an option—it is our baseline. All projects, regardless of their stage, are protected under strict Non-Disclosure Agreements (NDAs). We guarantee that your intellectual property remains exclusively yours. Our engineers and partners are legally bound to absolute secrecy regarding your technical stacks and business logic.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">3. Data Collection and Usage</h2>
              <p>
                We only collect data that is strictly necessary for the development, deployment, and optimization of your software solutions. In deep tech and AI integrations, data pipelines are built with a privacy-first architecture, ensuring compliance with global data protection regulations (GDPR, CCPA). We do not monetize, sell, or distribute your data to third parties.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">4. Transparent Payment Processing</h2>
              <p>
                We employ transparent, secure payment networks for all transactions. Financial data is routed through highly encrypted, compliant payment gateways. Tyrand does not store sensitive credit card or payment information on its servers, ensuring your financial privacy is fully safeguarded.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">5. Security Infrastructure</h2>
              <p>
                We utilize enterprise-grade security protocols, including AES-256 encryption, zero-trust architectures, and regular security audits to protect our communication channels and project repositories from unauthorized access.
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-lime-400">6. Contact Us</h2>
              <p>
                For questions regarding our privacy practices, security protocols, or to request a customized NDA before sharing your project details, please reach out to our legal and engineering operations team at <a href="mailto:info.tyrand@gmail.com" className="text-lime-400 hover:underline">info.tyrand@gmail.com</a>.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
