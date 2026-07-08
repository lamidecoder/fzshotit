import type { Metadata } from "next";
import { Unbounded, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Curtain from "@/components/Curtain";
import RouteFade from "@/components/RouteFade";
import Grain from "@/components/Grain";
import Cursor from "@/components/Cursor";
import StickyEnquire from "@/components/StickyEnquire";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FZShotit · Wedding & Lifestyle Photography, London",
  description: "Fauziyah (FZShotit) is a London-based photographer and content creator. Rooted in Culture, Captured with Intention.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body bg-ink text-bone antialiased`}>
        <Grain />
        <Cursor />
        <Curtain />
        <Nav />
        <main>
          <RouteFade>{children}</RouteFade>
        </main>
        <StickyEnquire />
        <Footer />
      </body>
    </html>
  );
}