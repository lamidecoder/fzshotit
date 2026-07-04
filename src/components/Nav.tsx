"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { n: "01", label: "Home", href: "/" },
  { n: "02", label: "About", href: "/about" },
  { n: "03", label: "Portfolio", href: "/portfolio" },
  { n: "04", label: "Services", href: "/services" },
  { n: "05", label: "Testimonials", href: "/testimonials" },
  { n: "06", label: "Contact", href: "/contact" },
];

function IGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function TTIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z"/>
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[150]" style={{ mixBlendMode: "difference" }}>
        <div className="container-shell flex items-center justify-between h-[5.5rem]">
          <Link href="/" className="font-display font-bold text-bone text-base tracking-tight">
            FZShotit
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-4 text-bone-dim">
              <a href="https://www.instagram.com/fzshotit" target="_blank" rel="noopener noreferrer"
                className="hover:text-bone transition-colors" aria-label="Instagram" data-cursor="view">
                <IGIcon />
              </a>
              <a href="https://www.tiktok.com/@fzshotit" target="_blank" rel="noopener noreferrer"
                className="hover:text-bone transition-colors" aria-label="TikTok" data-cursor="view">
                <TTIcon />
              </a>
            </div>
            <button onClick={() => setOpen(true)} className="flex items-center gap-3 eyebrow text-bone" data-cursor="open">
              <span className="flex flex-col gap-1">
                <span className="w-5 h-px bg-bone" />
                <span className="w-5 h-px bg-bone" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[250] bg-ink"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <div className="container-shell flex items-center justify-between h-[5.5rem]">
              <span className="font-display font-bold text-bone text-base">FZShotit</span>
              <button onClick={() => setOpen(false)} className="eyebrow text-bone" data-cursor="close">Close</button>
            </div>
            <div className="container-shell flex flex-col justify-center gap-1" style={{ height: "calc(100vh - 5.5rem)" }}>
              {LINKS.map((link, i) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}>
                    <Link href={link.href}
                      className={`font-display font-bold leading-[1.05] transition-colors ${active ? "text-bone" : "text-bone-dim hover:text-bone"}`}
                      style={{ fontSize: "clamp(2.4rem, 8vw, 5rem)" }}>
                      <span className="text-henna text-sm align-super mr-4 font-body font-semibold">{link.n}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-clay">
                <a href="https://www.instagram.com/fzshotit" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 eyebrow text-bone-dim hover:text-bone transition-colors">
                  <IGIcon /> Instagram
                </a>
                <a href="https://www.tiktok.com/@fzshotit" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 eyebrow text-bone-dim hover:text-bone transition-colors">
                  <TTIcon /> TikTok
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}