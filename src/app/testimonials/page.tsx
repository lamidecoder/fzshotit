import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Testimonials · FZShotit" };

function Hi({ children }: { children: string }) {
  return <span className="text-henna font-semibold">{children}</span>;
}

const TESTIMONIALS = [
  {
    name: "Samuel & Boluwatife",
    photo: "/photos/DSC08845.jpg",
    quote: (
      <>
        Fauziyah is an elite photographer. She came through for my 25th birthday party and civil wedding and{" "}
        <Hi>does not disappoint</Hi>. She accommodates you, is very creative with picture ideas, and on the day she goes straight into photographer mode. She will always make you feel special. Think main character energy.
      </>
    ),
  },
  {
    name: "Ajani & Oyinkansola",
    photo: "/photos/DSC05674.jpg",
    quote: (
      <>
        Fauziyah&rsquo;s booking system was easy and smooth. Even in a 3-hour booking she captured every moment, and I have pictures I will cherish for the rest of my life. Very professional and clear about what shots she wants.
      </>
    ),
  },
  {
    name: "Abdul & Azeeza",
    photo: "/photos/IMG_7257.jpg",
    quote: (
      <>
        Absolutely loved working with Fauziyah! She <Hi>genuinely built confidence</Hi> along the way, especially as someone who is camera shy. I became comfortable very quickly and loved how our pictures came out.
      </>
    ),
  },
  {
    name: "Hazal & Ilyas",
    photo: "/photos/708DF59D-4257-4010-8993-0BF3E8B99C57_1_105_c.jpg",
    quote: (
      <>
        <Hi>FZShotit guided us through every stage and made us feel completely at ease</Hi>, capturing the most spectacular photos. My husband and I couldn&rsquo;t have chosen anyone better.
      </>
    ),
  },
  {
    name: "Ameenah & Sherif",
    photo: "/photos/IMG_7453.jpg",
    quote: (
      <>
        Working with Fauziyah was absolutely great. She was very professional, came with so many ideas for photos.{" "}
        <Hi>She has a real talent and I&rsquo;d definitely recommend her</Hi>.
      </>
    ),
  },
  {
    name: "Anike",
    photo: "/photos/DSC04847.jpg",
    quote: (
      <>
        I had an amazing experience for my 25th birthday photoshoot.{" "}
        <Hi>She was super welcoming and helped me get poses well</Hi>. The pictures came out super nice.
      </>
    ),
  },
  {
    name: "Fataou",
    photo: "/photos/fatou_makeup.jpg",
    quote: (
      <>
        Working with FZShotit was a great experience.{" "}
        <Hi>Creative vision, executes it perfectly in her work</Hi>.
      </>
    ),
  },
  {
    name: "Hafsah",
    photo: "/photos/IMG_0356.jpg",
    quote: (
      <>
        Fauziyah was incredibly patient and brought such a warm, bubbly energy to the session. My parents loved the pictures too.{" "}
        <Hi>Book her immediately</Hi>.
      </>
    ),
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-12">
        <Reveal>
          <h1
            className="font-display font-extrabold leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>
            From the people I&rsquo;ve shot.
          </h1>
        </Reveal>
      </section>

      {/* Horizontal scroll strip */}
      <section className="pb-32">
        <div className="flex gap-5 overflow-x-auto px-6 md:px-12 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="shrink-0 w-[88vw] max-w-[360px] snap-start flex flex-col bg-ink-soft border border-clay"
            >
              {/* Full image — no cropping */}
              <div className="relative w-full overflow-hidden bg-ink">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={720}
                  height={900}
                  className="w-full h-auto object-contain"
                  style={{ display: "block" }}
                />
              </div>

              {/* Content below image */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                {/* Name */}
                <p className="font-display font-bold text-bone text-base">{t.name}</p>

                {/* Divider */}
                <div className="w-8 h-px bg-henna" />

                {/* Quote */}
                <p className="text-bone-dim leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="container-shell flex items-center gap-3 mt-4">
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className={`h-px w-6 ${i === 0 ? "bg-henna" : "bg-clay"}`} />
            ))}
          </div>
          <p className="eyebrow text-bone-dim/50 md:hidden">Swipe to read more</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-shell pb-32 text-center">
        <Reveal>
          <p className="eyebrow text-bone-dim mb-6">Ready to create something beautiful?</p>
          <Link
            href="/contact"
            className="inline-block border border-bone/35 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">
            Book me today
          </Link>
        </Reveal>
      </section>
    </>
  );
}