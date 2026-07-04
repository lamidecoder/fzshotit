"use client";

import { useEffect, useRef } from "react";

export default function Grain() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.style.backgroundPosition = `${Math.random() * 100}px ${Math.random() * 100}px`;
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return <div ref={ref} className="grain-overlay" aria-hidden="true" />;
}
