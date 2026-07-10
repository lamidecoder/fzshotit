"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="kenburns absolute inset-0">
          <Image src="/photos/hero_mosque.jpg" alt="FZShotit photography" fill priority sizes="120vw"
            className="object-cover" style={{ objectPosition: "center 40%" }} />
        </div>
      </div>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-ink/80" />
      <div className="container-shell relative z-10 pt-24 max-w-2xl">
        <motion.p className="mb-5 text-xs tracking-[0.25em] uppercase text-white/50 font-medium"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
          Photographer &amp; Content Creator, London
        </motion.p>
        <motion.h1 className="font-display font-extrabold leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)" }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          Rooted in <span className="text-henna">Culture,</span><br />
          Captured with <span className="text-henna">Intention.</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }} className="mt-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 border border-bone/35 px-8 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300" data-cursor="view">
            View Portfolio
          </Link>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.6 }}>
        <span className="text-white/40" style={{ writingMode: "vertical-rl", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        <span className="scroll-line" />
      </motion.div>
    </section>
  );
}
