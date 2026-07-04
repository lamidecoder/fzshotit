import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";

export default function CategoryGallery({ title, intro, photos }: {
  title: string; intro: string; photos: string[];
}) {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-12">
        <Reveal>
          <p className="eyebrow mb-5">Portfolio</p>
          <h1 className="font-display font-extrabold leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>{title}</h1>
          <p className="text-bone-dim max-w-xl mt-5 leading-relaxed">{intro}</p>
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {photos.map((src, i) => (
            <div key={src} className="break-inside-avoid">
              <ImageFrame src={src} alt={`${title} ${i + 1}`} ratio="aspect-[3/4]" delay={(i % 3) * 0.05} />
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell text-center pb-28">
        <Reveal>
          <Link href="/contact"
            className="inline-block border border-bone/35 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">Book me today</Link>
        </Reveal>
      </section>
    </>
  );
}