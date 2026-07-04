"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialFeature({
  items,
}: {
  items: { name: string; quote: string }[];
}) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  function go(i: number) {
    setIndex(((i % items.length) + items.length) % items.length);
  }

  return (
    <div>
      <div className="relative min-h-[16rem] md:min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display text-5xl md:text-7xl text-henna leading-none">&ldquo;</span>
            <p className="font-display text-xl md:text-3xl leading-snug mt-2 mb-6 max-w-3xl">
              {current.quote}
            </p>
            <p className="eyebrow">{current.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 mt-10">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="border border-clay w-11 h-11 flex items-center justify-center hover:border-henna hover:text-henna transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="border border-clay w-11 h-11 flex items-center justify-center hover:border-henna hover:text-henna transition-colors"
        >
          →
        </button>
        <span className="eyebrow text-bone-dim opacity-60 ml-2">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-8 border-t border-clay">
        {items.map((t, i) => (
          <button
            key={t.name}
            onClick={() => go(i)}
            className={`text-sm transition-colors ${
              i === index ? "text-henna" : "text-bone-dim hover:text-bone"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}
