"use client";
import { useState } from "react";
import ImageFrame from "./ImageFrame";
import Lightbox from "./Lightbox";
type Photo = { src: string; label: string };
export default function PortfolioGallery({ photos }: { photos: Photo[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  function prev() { setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null); }
  function next() { setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null); }
  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {photos.map((p, i) => (
          <div key={p.src} className="break-inside-avoid cursor-pointer group" onClick={() => setLightboxIndex(i)} data-cursor="view">
            <div className="relative overflow-hidden">
              <ImageFrame src={p.src} alt={p.label} ratio="aspect-[3/4]" delay={i * 0.03} />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border border-white/40 px-4 py-2 text-xs tracking-widest uppercase">View</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Lightbox photos={photos} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={prev} onNext={next} />
    </>
  );
}
