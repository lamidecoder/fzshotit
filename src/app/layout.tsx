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
const display = Unbounded({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700","800"], display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", weight: ["400","500","600","700"], display: "swap" });
export const metadata: Metadata = {
  title: { default: "FZShotit - Wedding & Lifestyle Photography, London", template: "%s - FZShotit" },
  description: "FZShotit is a London-based photographer and content creator. Rooted in Culture, Captured with Intention.",
  keywords: ["London photographer","wedding photographer London","Nikkah photographer","Muslim wedding photographer","FZShotit","Fauziyah photographer"],
  metadataBase: new URL("https://fzshotit.com"),
  openGraph: {
    type: "website", locale: "en_GB", url: "https://fzshotit.com", siteName: "FZShotit",
    title: "FZShotit - Wedding & Lifestyle Photography, London",
    description: "Rooted in Culture, Captured with Intention. London-based photographer.",
    images: [{ url: "/photos/hero_mosque.jpg", width: 1200, height: 630, alt: "FZShotit Photography London" }],
  },
  twitter: { card: "summary_large_image", title: "FZShotit", description: "Rooted in Culture, Captured with Intention.", images: ["/photos/hero_mosque.jpg"], creator: "@fzshotit" },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body bg-ink text-bone antialiased`}>
        <Grain /><Cursor /><Curtain /><Nav />
        <main><RouteFade>{children}</RouteFade></main>
        <StickyEnquire /><Footer />
      </body>
    </html>
  );
}
