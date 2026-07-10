"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const TESTIMONIALS = [
  {
    name: "Samuel & Boluwatife",
    photo: "/photos/testimonial_samuel.jpg",
    quote: "FZShotit is an elite photographer, she has come through for me for my 25th birthday party and civil wedding and does not disappoint. She accommodates you, very creative with picture ideas and when she is working she goes straight into photographer mode. On top of her working with you, she will always make you feel special, think \"main character energy\" I highly recommend FZShotit as your photographer!",
    highlight: ["does not disappoint", "main character energy"],
  },
  {
    name: "Ajani & Oyinkansola",
    photo: "/photos/testimonial_ajani.jpg",
    quote: "FZShotit's booking system was easy and smooth, and the process was straightforward from beginning to end. Even in a 3-hour booking she captured every moment, and I have pictures I will cherish for the rest of my life. Very professional and clear about what shots she wants and where.",
    highlight: [],
  },
  {
    name: "Abdul & Azeeza",
    photo: "/photos/testimonial_abdul.jpg",
    quote: "Absolutely loved working with FZShotit! She genuinely built my confidence along the way, especially as someone who is camera shy, I became comfortable very quickly and loved how our pictures came out. Even my mum was asking for her details for a photoshoot.",
    highlight: ["genuinely built my confidence"],
  },
  {
    name: "Hazal & Ilyas",
    photo: "/photos/testimonial_hazal.jpg",
    quote: "FZShotit guided us through every stage and made us feel completely at ease, capturing the most spectacular photos, and incredibly friendly throughout. Truly amazing at what she does.",
    highlight: ["guided us through every stage and made us feel completely at ease"],
  },
  {
    name: "Ameenah & Sherif",
    photo: "/photos/testimonial_ameenah.jpg",
    quote: "Working with FZShotit was absolutely great. She was very professional, came with so many ideas for photos, was understanding of my needs and produced the photos quickly. She has a real talent and I definitely recommend her.",
    highlight: ["She has a real talent and I definitely recommend her"],
  },
  {
    name: "Anike",
    photo: "/photos/IMG_7457.jpg",
    quote: "I had an amazing experience with FZShotit for my 25th birthday photoshoot. She was super welcoming, helped me get ready, and directed my poses really well. The pictures came out super nice. I would definitely recommend her.",
    highlight: ["She was super welcoming, helped me get ready, and directed my poses really well"],
  },
  {
    name: "Fataou",
    photo: "/photos/fatou_makeup.jpg",
    quote: "Working with FZShotit was a great experience. She has a creative vision and executes it perfectly in her work.",
    highlight: ["creative vision and executes it perfectly in her work"],
  },
  {
    name: "Hafsah",
    photo: "/photos/IMG_7446.jpg",
    quote: "FZShotit was incredibly patient and brought such a warm, bubbly energy to the session. She is very professional, guides you through every pose, shows you the photos as she takes them, and is always open to feedback. My parents loved the pictures too. Book her immediately.",
    highlight: ["Book her immediately"],
  },
];

function highlightText(text: string, highlights: string[]) {
  if (!highlights.length) return <span className="text-white">{text}</span>;
  const parts: React.ReactNode[] = [];
  let remaining = text;
  for (const h of highlights) {
    const idx = remaining.toLowerCase().indexOf(h.toLowerCase());
    if (idx === -1) continue;
    if (idx > 0) parts.push(<span key={`b-${h}`} className="text-white">{remaining.slice(0, idx)}</span>);
    parts.push(<span key={`h-${h}`} className="text-henna font-bold">{remaining.slice(idx, idx + h.length)}</span>);
    remaining = remaining.slice(idx + h.length);
  }
  if (remaining) parts.push(<span key="end" className="text-white">{remaining}</span>);
  return <>{parts}</>;
}

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => {
    setActive(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!paused) setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [paused]);

  function pause() { setPaused(true); setTimeout(() => setPaused(false), 7000); }
  const t = TESTIMONIALS[active];

  return (
    <>
      <div className="relative w-full" style={{ height: "100svh", minHeight: "600px" }}>
        {TESTIMONIALS.map((item, i) => (
          <div key={item.name}
            className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}>
            <Image src={item.photo} alt={item.name} fill sizes="100vw"
              className="object-cover object-center" priority={i === 0} />
          </div>
        ))}
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 text-center">
          <p className="text-white text-base md:text-xl leading-relaxed max-w-2xl font-medium" style={{ fontStyle: "italic" }}>
            &ldquo;{highlightText(t.quote, t.highlight)}&rdquo;
          </p>
        </div>
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <p className="font-display font-bold text-white tracking-[0.2em] text-sm md:text-base uppercase">{t.name}</p>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8">
          <button onClick={() => { go(active - 1); pause(); }} className="text-white/70 hover:text-white transition-colors text-2xl px-4 py-2" aria-label="Previous">&#8592;</button>
          <span className="text-white/60 text-sm tracking-widest">{active + 1} / {TESTIMONIALS.length}</span>
          <button onClick={() => { go(active + 1); pause(); }} className="text-white/70 hover:text-white transition-colors text-2xl px-4 py-2" aria-label="Next">&#8594;</button>
        </div>
        <div className="absolute top-8 left-0 right-0 flex items-center justify-center gap-2 pt-20">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => { go(i); pause(); }}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-1.5 bg-henna" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
              aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
      </div>
      <section className="container-shell py-24 text-center">
        <Reveal>
          <p className="eyebrow text-bone-dim mb-6">Ready to create something beautiful?</p>
          <Link href="/contact" className="inline-block border border-bone/35 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300" data-cursor="view">
            Book me today
          </Link>
        </Reveal>
      </section>
    </>
  );
}
