import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Preloader from "@/components/Preloader";
import Filmstrip from "@/components/Filmstrip";
import ImageFrame from "@/components/ImageFrame";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Hero />

      <section className="container-shell py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-4 items-center">
          <Reveal className="md:col-span-5">
            <ImageFrame
              src="/photos/portrait_pink.jpg"
              alt="FZShotit photography"
              ratio="aspect-[4/5]"
              priority
            />
          </Reveal>
          <Reveal className="md:col-span-7 md:pl-8" delay={0.12}>
            <p className="font-display font-semibold leading-snug"
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)" }}>
              I&rsquo;m Fauziyah, the photographer and content creator behind FZShotit.{" "}
              <span className="text-henna">Photography, to me, is about telling your story</span>, not a generic one.
            </p>
            <Link href="/about"
              className="inline-block mt-8 border-b border-henna eyebrow text-bone pb-1"
              data-cursor="view">
              Read my full story
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-4 md:py-8">
        <div className="container-shell flex items-baseline justify-between mb-8 flex-wrap gap-4">
          <Reveal><p className="eyebrow">Selected work</p></Reveal>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="border-b border-henna eyebrow text-bone pb-1" data-cursor="view">
              View full portfolio
            </Link>
          </Reveal>
        </div>
        <Reveal><Filmstrip /></Reveal>
      </section>

      <section className="container-shell py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="col-span-2 md:col-span-1">
            <ImageFrame src="/photos/wedding_bento.jpg" alt="Azeezat and Abz" ratio="aspect-[4/5]" />
          </div>
          <ImageFrame src="/photos/IMG_7446.jpg" alt="Graduation" ratio="aspect-[4/5]" />
          <ImageFrame src="/photos/IMG_2432.jpg" alt="Nikkah bride" ratio="aspect-[4/5]" />
        </div>
      </section>

      <section className="container-shell py-28 text-center">
        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)" }}>
            Let&rsquo;s connect.
          </h2>
          <Link href="/contact"
            className="inline-block border border-bone/35 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">
            Enquire today
          </Link>
        </Reveal>
      </section>
    </>
  );
}
