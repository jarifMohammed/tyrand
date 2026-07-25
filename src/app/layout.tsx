import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/navber";
import PageTransition from "./_components/motion/PageTransition";
import { EdgeStoreProvider } from "@/lib/edgestore";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyrand | Deep Tech Software Agency",
  description:
    "Tyrand is a premier software agency specializing in AI Automation, CRM, POS, and complex deep tech integrations for startups and enterprises.",
  keywords: ["software agency", "deep tech", "AI automation", "CRM development", "custom software", "enterprise solutions"],
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
    url: "https://tyrand.com",
    title: "Tyrand | Deep Tech Software Agency",
    description: "Tyrand is a premier software agency specializing in AI Automation, CRM, POS, and complex deep tech integrations.",
    siteName: "Tyrand",
    images: [{
      url: "/image/tyrand_logo.jpeg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyrand | Deep Tech Software Agency",
    description: "Specializing in AI Automation, CRM, POS, and complex deep tech integrations.",
    images: ["/image/tyrand_logo.jpeg"],
  },
  icons: {
    icon: "/image/tyrand_logo.jpeg",
    apple: "/image/tyrand_logo.jpeg",
  },
  metadataBase: new URL("https://tyrand.com"), // Update to actual production domain later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <EdgeStoreProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
