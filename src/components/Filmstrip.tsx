"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  { src: "/photos/FB148D1B-1B3A-4442-83C1-DB1CB0BF9741_1_105_c.jpg", label: "Weddings", note: "Full days, every tradition", href: "/portfolio/weddings" },
  { src: "/photos/DSC08845.jpg", label: "Celebrations", note: "Birthdays & milestones", href: "/portfolio/celebrations" },
  { src: "/photos/_DSC0282.jpg", label: "Weddings", note: "Full days, every tradition", href: "/portfolio/weddings" },
  { src: "/photos/IMG_7479.jpg", label: "Henna", note: "Colour, hands, warmth", href: "/portfolio/henna" },
  { src: "/photos/IMG_5102.jpg", label: "Celebrations", note: "Birthdays & milestones", href: "/portfolio/celebrations" },
  { src: "/photos/IMG_7324.jpg", label: "Nikkah", note: "Sacred & joyful", href: "/portfolio/nikkah" },
  { src: "/photos/DSC04584.jpg", label: "Celebrations", note: "Birthdays & milestones", href: "/portfolio/celebrations" },
];

export default function Filmstrip() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scrollStart: 0 });
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function step() {
      if (!el) return;
      const cardWidth = (el.querySelector("a")?.offsetWidth ?? 360) + 16;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + cardWidth;
      el.scrollTo({ left: next >= maxScroll ? 0 : next, behavior: "smooth" });
    }
    autoRef.current = setInterval(step, 2800);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  function pauseAuto() {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
  }

  function onPointerDown(e: React.PointerEvent) {
    pauseAuto();
    drag.current = { down: true, startX: e.clientX, scrollStart: ref.current?.scrollLeft ?? 0 };
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.down || !ref.current) return;
    ref.current.scrollLeft = drag.current.scrollStart - (e.clientX - drag.current.startX);
  }
  function endDrag() { drag.current.down = false; }

  return (
    <div
      ref={ref}
      className="flex gap-4 overflow-x-auto pb-6 px-6 md:px-12 cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {SLIDES.map((s, i) => (
        <Link key={i} href={s.href} className="shrink-0 w-[78vw] max-w-[360px]" data-cursor="view">
          <div className="relative aspect-[2/3] overflow-hidden bg-ink-soft">
            <Image src={s.src} alt={s.label} fill
              sizes="(max-width: 768px) 78vw, 360px"
              className="object-cover transition-transform duration-700 hover:scale-105"
              draggable={false} />
          </div>
          <div className="flex items-baseline justify-between mt-4">
            <h3 className="font-display font-semibold text-xl">{s.label}</h3>
            <span className="text-xs text-bone-dim">{s.note}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}