"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HennaDivider({
  label,
  align = "center",
}: {
  label?: string;
  align?: "center" | "left";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 my-10 md:my-16 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {label && (
        <motion.span
          className="eyebrow whitespace-nowrap"
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.span>
      )}
      <motion.span
        className="h-px bg-clay flex-1"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
