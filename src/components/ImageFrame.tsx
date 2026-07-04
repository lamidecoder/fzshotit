"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageFrame({
  src, alt, ratio = "aspect-[4/5]", label, priority = false, delay = 0,
}: {
  src?: string; alt: string; ratio?: string; label?: string; priority?: boolean; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const t = setTimeout(() => setRevealed(true), delay * 1000);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${ratio} bg-ink-soft`}>
      <motion.div className="absolute inset-0 z-10 bg-ink" style={{ transformOrigin: "top" }}
        initial={{ scaleY: 1 }} animate={{ scaleY: revealed ? 0 : 1 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} />
      <motion.div className="absolute inset-0"
        initial={{ scale: 1.08 }} animate={{ scale: revealed ? 1 : 1.08 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}>
        {src ? (
          <Image src={src} alt={alt} fill priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover" draggable={false} />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink-soft via-ink to-ink">
            <span className="eyebrow opacity-40">{label ?? alt}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}