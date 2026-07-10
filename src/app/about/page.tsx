import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";

export const metadata = { title: "About · FZShotit" };

export default function AboutPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-16">
        <Reveal>
          <p className="eyebrow mb-5">About</p>
          <h1 className="font-display font-extrabold leading-[0.96] max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>
            Photography is about telling <span className="text-henna">your</span> story.
          </h1>
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <Reveal className="md:col-span-5 md:sticky md:top-32">
            <ImageFrame src="/photos/portrait_pink.jpg" alt="Fauziyah, FZShotit" ratio="aspect-[4/5]" priority />
          </Reveal>
          <Reveal className="md:col-span-7 flex flex-col gap-5" delay={0.1}>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.75" }}>
              I&rsquo;m Fauziyah, the photographer and content creator behind FZShotit. Whether it&rsquo;s a
              Ghanaian, Nigerian, Algerian, Somali, Gambian, Turkish or Senegalese wedding, a Nikkah,
              a henna night, a graduation, a portrait, or a celebration, I stay versatile, because
              your day is never generic, and the way I shoot it shouldn&rsquo;t be either.
            </p>
            <p className="text-bone-dim leading-relaxed">
              When it comes to my photography, I ask the important questions first. I want to know
              what matters most to you, so that I can capture your day through your eyes, not just mine.
            </p>
            <p className="text-bone-dim leading-relaxed">
              Based in London, I believe every client is different, but my intention is always the
              same: to give you something real.
            </p>
            <p className="text-bone-dim leading-relaxed">
              I cover both photography and content creation, so whether you need stills, film, or
              both, you&rsquo;re covered.
            </p>
            <Link href="/contact"
              className="inline-block border-b border-henna eyebrow text-bone pb-1 w-fit mt-2"
              data-cursor="view">
              Let&rsquo;s talk about your day
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Reveal><ImageFrame src="/photos/DSC05686.jpg" alt="Work 1" ratio="aspect-[3/4]" /></Reveal>
          <Reveal delay={0.08}><ImageFrame src="/photos/DSC08906.jpg" alt="Work 2" ratio="aspect-[3/4]" /></Reveal>
          <Reveal delay={0.16}><ImageFrame src="/photos/fatou_portrait.jpg" alt="Work 3" ratio="aspect-[3/4]" /></Reveal>
          <Reveal delay={0.24}><ImageFrame src="/photos/IMG_7452.jpg" alt="Work 4" ratio="aspect-[3/4]" /></Reveal>
        </div>
      </section>
    </>
  );
}