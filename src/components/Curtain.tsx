"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "idle" | "covering" | "covered" | "revealing";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Curtain() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    setPhase("covering");
    const t1 = setTimeout(() => setPhase("covered"), 500);
    const t2 = setTimeout(() => setPhase("revealing"), 800);
    const t3 = setTimeout(() => setPhase("idle"), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink flex items-center justify-center pointer-events-none"
          style={{ transformOrigin: phase === "revealing" ? "bottom" : "top" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: phase === "revealing" ? 0 : 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <motion.span
            className="font-display font-bold text-bone text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "covered" ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            fz
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
