import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/navber";
import PageTransition from "./_components/motion/PageTransition";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyrand | Deep Tech Software Agency — AI Automation, CRM & Enterprise Solutions",
  description:
    "Tyrand is a premier Helsinki-based software agency specializing in AI Automation, CRM, POS, SaaS platforms, and complex deep tech integrations. We design, engineer, and scale custom software for startups and enterprises worldwide.",
  keywords: [
    "software agency",
    "deep tech",
    "AI automation",
    "CRM development",
    "custom software",
    "enterprise solutions",
    "SaaS development",
    "POS systems",
    "Helsinki software company",
    "full-stack development",
    "cloud DevOps",
    "React Next.js agency",
    "build a website",
    "website redesign",
    "build custom software",
    "website development",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://tyrand.dev",
    title: "Tyrand | Deep Tech Software Agency — AI Automation, CRM & Enterprise Solutions",
    description: "Helsinki-based software agency specializing in AI Automation, CRM, POS, SaaS, and complex deep tech integrations for startups and enterprises.",
    siteName: "Tyrand",
    locale: "en_US",
    images: [{
      url: "/image/tyrand_logo.jpeg",
      width: 1200,
      height: 630,
      alt: "Tyrand — Deep Tech Software Agency",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyrand | Deep Tech Software Agency",
    description: "Helsinki-based agency specializing in AI Automation, CRM, POS, SaaS, and deep tech integrations.",
    images: ["/image/tyrand_logo.jpeg"],
  },
  icons: {
    icon: "/image/tyrand_logo.jpeg",
    apple: "/image/tyrand_logo.jpeg",
  },
  alternates: {
    canonical: "https://tyrand.dev",
  },
  metadataBase: new URL("https://tyrand.dev"),
};

// JSON-LD structured data for Organization + WebSite
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tyrand",
  url: "https://tyrand.dev",
  logo: "https://tyrand.dev/image/tyrand_logo.jpeg",
  description:
    "Premier Helsinki-based deep tech software agency specializing in AI Automation, CRM, POS, SaaS platforms, and enterprise integrations.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pekankatu 5 A 21",
    addressLocality: "Helsinki",
    postalCode: "00700",
    addressCountry: "FI",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info.tyrand@gmail.com",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://linkedin.com/company/tyrand",
    "https://x.com/tyrand",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Helsinki, Finland",
  },
  knowsAbout: [
    "AI Automation",
    "Custom Software Development",
    "CRM Development",
    "POS Systems",
    "SaaS Platforms",
    "Cloud & DevOps",
    "Full-Stack Engineering",
    "UI/UX Design",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tyrand",
  url: "https://tyrand.dev",
  description: "Deep Tech Software Agency — AI Automation, CRM & Enterprise Solutions",
  publisher: {
    "@type": "Organization",
    name: "Tyrand",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch / Preconnect for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://musegala.com.au" />
        <link rel="dns-prefetch" href="https://vendofood.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
