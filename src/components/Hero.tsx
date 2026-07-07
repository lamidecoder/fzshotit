"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    function onMove(e: MouseEvent) {
      if (!bgRef.current) return;
      const px = (e.clientX / window.innerWidth - 0.5) * 14;
      const py = (e.clientY / window.innerHeight - 0.5) * 14;
      bgRef.current.style.transform = `translate(${px}px, ${py}px)`;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      <div ref={bgRef} className="absolute -inset-[5%] transition-transform duration-200 ease-linear">
        <Image
          src="/photos/hero_mosque.jpg"
          alt="FZShotit photography"
          fill
          priority
          sizes="120vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </div>

      {/* Same overlay style as before */}
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/90" />

      <div className="container-shell relative z-10 pt-24">

        {/* Eyebrow — same as before */}
        <motion.p
          className="mb-6 text-sm tracking-[0.22em] uppercase text-white/50 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          Photographer &amp; Content Creator, London
        </motion.p>

        {/* Big headline — same size as original "Your day told in honest light" */}
        <motion.h1
          className="font-display font-extrabold leading-[0.86] tracking-tight"
          style={{ fontSize: "clamp(3.4rem, 13vw, 9.5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          Rooted in<br />
          <span className="text-henna">Culture,</span><br />
          Captured with<br />
          <span className="text-henna">Intention.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-bone/35 px-8 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">
            View Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}>
        <span className="text-white/40" style={{ writingMode: "vertical-rl", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        <span className="scroll-line" />
      </motion.div>
    </section>
  );
}