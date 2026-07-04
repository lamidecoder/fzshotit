import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";
import HennaDivider from "@/components/HennaDivider";
import Accordion from "@/components/Accordion";
import RateRow from "@/components/RateRow";

export const metadata = { title: "Services · FZShotit" };

const FAQS = [
  {
    q: "Do you travel for destination weddings?",
    a: "London is home base, and all London bookings are included. Outside London is quoted individually based on location. Destination shoots, including abroad, are available.",
  },
  {
    q: "What does retouching include?",
    a: "Every gallery comes with a set number of fully retouched images depending on your package. Additional retouched images are available for £7 per image.",
  },
  {
    q: "What is your cancellation policy?",
    a: "A 50% non-refundable deposit secures your date. Reschedules need at least 72 hours notice.",
  },
  {
    q: "What do I receive after my shoot?",
    a: "Your full edited gallery via Google Drive with digital downloads included. Raw files available for an additional fee.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-16 grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-5">Photography</p>
          <h1 className="font-display font-extrabold leading-[0.95] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)" }}>
            Wedding photography{" "}
            <span className="text-henna">from £350</span>
          </h1>
          <p className="text-bone-dim text-lg leading-relaxed max-w-xl mb-8">
            Your wedding day deserves more than just photos. It deserves to be felt. From the
            quiet moments before the ceremony to the last dance of the night, I document it all
            with honesty and care. Coverage for Henna, Bridal Shower, Engagement, Nikkah, Civil
            and full Wedding days.
          </p>
          <Link href="/contact"
            className="inline-block border border-bone/40 px-9 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">
            Enquire today
          </Link>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <ImageFrame src="/photos/DSC08407.jpg" alt="Wedding photography" ratio="aspect-[4/5]" priority />
        </Reveal>
      </section>

      <section className="container-shell pb-16">
        <Reveal><h2 className="eyebrow mb-8">Frequently asked questions</h2></Reveal>
        <Reveal delay={0.05}><Accordion items={FAQS} /></Reveal>
      </section>

      <section className="container-shell pb-16">
        <p className="eyebrow mb-8">Standard photography</p>
        <div className="divide-y divide-clay border-t border-b border-clay">
          <RateRow n="01" name="Mini Session"
            description="Clean, focused and intentional, ideal for portraits, birthdays and lifestyle shoots."
            price="£220"
            details={["2 hrs coverage","3 retouched images","Full gallery + downloads","3 day turnaround"]} />
          <RateRow n="02" name="Story Session"
            description="For when one look isn't enough. Build a gallery that really tells a story."
            price="£350" priceNote="Starting from"
            details={["3 hrs coverage","7 retouched images","Full gallery + downloads","1 week turnaround"]}
            delay={0.06} />
          <RateRow n="03" name="Signature Session"
            description="The full experience. A full day of shooting with complete creative freedom."
            price="£500"
            details={["5 hrs coverage","10 retouched images","Full storytelling edit","2 week turnaround"]}
            delay={0.12} />
        </div>
      </section>

      <div className="container-shell">
        <HennaDivider label="Content creation" />
      </div>

      <section className="container-shell pb-16 grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-5">Content Creation</p>
          <h2 className="font-display font-extrabold leading-[0.95] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Social-first content for your brand, your big day, your life.
          </h2>
          <p className="text-bone-dim text-lg leading-relaxed max-w-xl mb-6">
            Whether it&rsquo;s your wedding day, a lifestyle moment or a corporate event,
            I create edit-ready content delivered straight to your phone. Highlight reels,
            trending formats and behind-the-scenes built for Instagram and TikTok.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Weddings", desc: "Reception reels, ceremony highlights, social-ready clips." },
              { label: "Lifestyle", desc: "Day-in-the-life content, portrait sessions, brand moments." },
              { label: "Corporate", desc: "Events, launches, team days and brand storytelling." },
            ].map(s => (
              <div key={s.label} className="border-t border-clay pt-4">
                <p className="font-display font-semibold mb-2">{s.label}</p>
                <p className="text-bone-dim text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact"
              className="inline-block border border-bone/40 px-9 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
              data-cursor="view">
              Enquire today
            </Link>
          </div>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <ImageFrame src="/photos/IMG_7461.jpg" alt="Content creation" ratio="aspect-[4/5]" />
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <div className="grid md:grid-cols-2 gap-px bg-clay">
          <Reveal className="bg-ink p-8 md:p-10 flex flex-col">
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">Wedding content creation</h3>
            <p className="text-bone-dim leading-relaxed mb-6">
              Edit-ready social content delivered straight to your phone. Highlight reels and
              trending formats built for Instagram and TikTok. Photography not included.
            </p>
            <p className="font-display text-2xl mt-auto">From £300</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-ink p-8 md:p-10 flex flex-col border-l-2 border-henna md:border-l-0">
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4 text-henna">Frame &amp; Feed</h3>
            <p className="text-bone-dim leading-relaxed mb-6">
              Your gallery and your grid, sorted in one day. Wedding photography and social
              content creation bundled. One booking, two creatives, everything delivered.
            </p>
            <p className="font-display text-2xl mt-auto">From £580</p>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-32 text-center">
        <HennaDivider />
        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.95] mb-4"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)" }}>
            Let&rsquo;s connect.
          </h2>
          <p className="text-bone-dim max-w-xl mx-auto mb-6 leading-relaxed">
            For further questions please reach out.
          </p>
          <Link href="/contact"
            className="inline-block border border-bone/40 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">
            Enquire &rarr;
          </Link>
        </Reveal>
      </section>
    </>
  );
}