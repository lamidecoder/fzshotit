"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "LONDON",
  "NIGERIAN",
  "GHANAIAN",
  "SOMALI",
  "TURKISH",
  "NIKKAH",
  "HENNA",
  "WEDDINGS",
  "FZSHOTIT",
];

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(WORDS[0]);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen =
      typeof window !== "undefined" && sessionStorage.getItem("fz-preloaded");

    if (reduceMotion || alreadySeen) return;

    sessionStorage.setItem("fz-preloaded", "1");
    setShow(true);
    document.body.style.overflow = "hidden";

    let wi = 0;
    const wordInterval = setInterval(() => {
      wi = (wi + 1) % WORDS.length;
      setWord(WORDS[wi]);
    }, 100);

    const duration = 1900;
    const start = performance.now();
    let raf = 0;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setCount(pct);
      if (elapsed < duration) {
        raf = requestAnimationFrame(tick);
      } else {
        clearInterval(wordInterval);
        document.body.style.overflow = "";
        setTimeout(() => setShow(false), 600);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[400] bg-ink flex items-center justify-center overflow-hidden"
          style={{ transformOrigin: "bottom" }}
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="absolute inset-0 flex items-center justify-center font-display font-extrabold whitespace-nowrap select-none"
            style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)", color: "rgba(242,239,233,0.06)" }}
          >
            {word}
          </span>
          <span className="relative z-10 font-display font-bold" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
            {String(count).padStart(2, "0")}
            <span className="text-henna text-base align-super">%</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
