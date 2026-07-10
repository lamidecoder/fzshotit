"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
function Hi({ children }: { children: string }) {
  return <span className="text-henna font-semibold">{children}</span>;
}
const TESTIMONIALS = [
  { name: "Samuel & Boluwatife", tag: "Birthday & Civil Wedding", photo: "/photos/DSC08845.jpg",
    quote: <>"Fauziyah is an elite photographer. She came through for my 25th birthday and civil wedding and <Hi>does not disappoint</Hi>. Creative with picture ideas and on the day she goes straight into photographer mode. Think main character energy."</> },
  { name: "Ajani & Oyinkansola", tag: "Wedding", photo: "/photos/DSC05674.jpg",
    quote: <>"Fauziyah&rsquo;s booking system was easy and smooth. Even in a 3-hour booking she captured every moment, and I have pictures I will cherish for the rest of my life."</> },
  { name: "Abdul & Azeeza", tag: "Portrait Session", photo: "/photos/IMG_7257.jpg",
    quote: <>"Absolutely loved working with Fauziyah! She <Hi>genuinely built confidence</Hi> along the way, especially as someone who is camera shy. I became comfortable very quickly."</> },
  { name: "Hazal & Ilyas", tag: "Nikkah", photo: "/photos/708DF59D-4257-4010-8993-0BF3E8B99C57_1_105_c.jpg",
    quote: <><Hi>FZShotit guided us through every stage and made us feel completely at ease</Hi>, capturing the most spectacular photos. We could not have chosen anyone better.</> },
  { name: "Ameenah & Sherif", tag: "Wedding", photo: "/photos/IMG_7453.jpg",
    quote: <>"Working with Fauziyah was absolutely great. <Hi>She has a real talent and I&rsquo;d definitely recommend her</Hi>."</> },
  { name: "Anike", tag: "Birthday Shoot", photo: "/photos/DSC04847.jpg",
    quote: <>"I had an amazing experience for my 25th birthday photoshoot. <Hi>She was super welcoming and helped me get poses well</Hi>. The pictures came out super nice."</> },
  { name: "Fataou", tag: "Editorial", photo: "/photos/fatou_makeup.jpg",
    quote: <>"Working with FZShotit was a great experience. <Hi>Creative vision, executes it perfectly in her work</Hi>."</> },
  { name: "Hafsah", tag: "Portrait Session", photo: "/photos/IMG_0356.jpg",
    quote: <>"Fauziyah was incredibly patient and brought such a warm energy to the session. My parents loved the pictures too. <Hi>Book her immediately</Hi>."</> },
];
export default function TestimonialsPage() {
  const stripRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollTo = useCallback((i: number) => {
    const el = stripRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (card) el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActive(i);
  }, []);
  useEffect(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!paused) setActive(prev => { const next = (prev + 1) % TESTIMONIALS.length; scrollTo(next); return next; });
    }, 3200);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [paused, scrollTo]);
  function handlePause() { setPaused(true); setTimeout(() => setPaused(false), 6000); }
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-10">
        <Reveal>
          <p className="eyebrow mb-4">Kind words</p>
          <h1 className="font-display font-extrabold leading-[0.96]" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>
            From the people<br />I&rsquo;ve shot.
          </h1>
        </Reveal>
      </section>
      <section className="pb-8">
        <div ref={stripRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-12 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          onPointerDown={handlePause} onTouchStart={handlePause}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} onClick={() => { scrollTo(i); handlePause(); }}
              className={`shrink-0 w-[85vw] max-w-[340px] snap-start flex flex-col cursor-pointer transition-all duration-500 ${active === i ? "opacity-100 scale-100" : "opacity-40 scale-[0.97]"}`}
              style={{ transformOrigin: "left center" }}>
              <div className="relative w-full overflow-hidden bg-ink-soft">
                <Image src={t.photo} alt={t.name} width={680} height={860} className="w-full h-auto object-contain block" />
                <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-sm px-3 py-1">
                  <span className="eyebrow text-henna" style={{ fontSize: "0.6rem" }}>{t.tag}</span>
                </div>
              </div>
              <div className="p-5 bg-ink-soft border-t border-clay flex flex-col gap-3">
                <p className="font-display font-bold text-bone text-base">{t.name}</p>
                <div className="w-6 h-px bg-henna" />
                <p className="text-bone-dim leading-relaxed text-sm">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container-shell flex items-center gap-2 mt-5">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => { scrollTo(i); handlePause(); }}
              className={`transition-all duration-300 h-px ${active === i ? "w-8 bg-henna" : "w-4 bg-clay hover:bg-bone-dim"}`}
              aria-label={`Testimonial ${i + 1}`} />
          ))}
          <span className="ml-auto eyebrow text-bone-dim/40 hidden md:block">
            {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>
        <div className="container-shell flex gap-3 mt-5">
          <button onClick={() => { scrollTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); handlePause(); }}
            className="border border-clay w-11 h-11 flex items-center justify-center hover:border-henna hover:text-henna transition-colors">&#8592;</button>
          <button onClick={() => { scrollTo((active + 1) % TESTIMONIALS.length); handlePause(); }}
            className="border border-clay w-11 h-11 flex items-center justify-center hover:border-henna hover:text-henna transition-colors">&#8594;</button>
        </div>
      </section>
      <section className="container-shell pb-32 text-center mt-12">
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
