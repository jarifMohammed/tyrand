import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/navber";
import PageTransition from "./_components/motion/PageTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tyrand | Software Agency",
  description:
    "Tyrand is a software agency specializing in Ai Automation, CRM, POS and project management for startups, enterprises, and forward-thinking organizations so solve every business challenge.",
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
