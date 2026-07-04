import Reveal from "@/components/Reveal";
import Image from "next/image";

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
        <Hi>does not disappoint</Hi>. She accommodates you, is very creative with picture ideas,
        and on the day she goes straight into photographer mode. She will always make you feel special. Think main character energy.
      </>
    ),
  },
  {
    name: "Ajani & Oyinkansola",
    photo: "/photos/DSC05674.jpg",
    quote: (
      <>
        Fauziyah&rsquo;s booking system was easy and smooth. Even in a 3-hour booking she captured every
        moment, and I have pictures I will cherish for the rest of my life. Very professional and clear about what shots she wants.
      </>
    ),
  },
  {
    name: "Abdul & Azeeza",
    photo: "/photos/IMG_7257.jpg",
    quote: (
      <>
        Absolutely loved working with Fauziyah! She{" "}
        <Hi>genuinely built confidence</Hi> along the way, especially as someone who is camera shy,
        I became comfortable very quickly and loved how our pictures came out.
      </>
    ),
  },
  {
    name: "Hazal & Ilyas",
    photo: "/photos/708DF59D-4257-4010-8993-0BF3E8B99C57_1_105_c.jpg",
    quote: (
      <>
        <Hi>FZShotit guided us through every stage and made us feel completely at ease</Hi>,
        capturing the most spectacular photos, and was incredibly friendly throughout. My husband and I couldn&rsquo;t have chosen anyone better.
      </>
    ),
  },
  {
    name: "Ameenah & Sherif",
    photo: "/photos/IMG_7453.jpg",
    quote: (
      <>
        Working with Fauziyah was absolutely great. She was very professional, came with so many ideas
        for photos. <Hi>She has a real talent and I&rsquo;d definitely recommend her</Hi>.
      </>
    ),
  },
  {
    name: "Anike",
    photo: "/photos/DSC04847.jpg",
    quote: (
      <>
        I had an amazing experience for my 25th birthday photoshoot.{" "}
        <Hi>She was super welcoming and helped me get poses well</Hi>. The pictures came out super nice. I would definitely recommend her.
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
        Fauziyah was incredibly patient and brought such a warm, bubbly energy to the session.
        My parents loved the pictures too. <Hi>Book her immediately</Hi>.
      </>
    ),
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-8">
        <Reveal>
          <h1 className="font-display font-extrabold leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>
            From the people I&rsquo;ve shot.
          </h1>
        </Reveal>
      </section>

      <section className="pb-24">
        <div className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS.map((t) => (
            <div key={t.name}
              className="shrink-0 w-[85vw] max-w-[420px] border border-clay p-7 flex flex-col gap-5">
              <p className="eyebrow text-bone">{t.name}</p>
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                <Image src={t.photo} alt={t.name} fill sizes="420px" className="object-cover object-top" />
              </div>
              <p className="text-bone-dim leading-relaxed text-sm">{t.quote}</p>
            </div>
          ))}
        </div>
        <p className="text-center eyebrow text-bone-dim/50 mt-2 md:hidden">Swipe to read more</p>
      </section>
    </>
  );
}