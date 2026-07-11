import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";
import HennaDivider from "@/components/HennaDivider";
import Accordion from "@/components/Accordion";
import RateRow from "@/components/RateRow";

export const metadata = { title: "Services - FZShotit" };

const FAQS = [
  { q: "Do you travel for destination weddings?", a: "London is home base. All London bookings are included. Outside London is quoted individually. Destination shoots including abroad are available." },
  { q: "What does retouching include?", a: "Every gallery comes with a set number of fully retouched images depending on your package. Additional retouched images are available for £7 per image." },
  { q: "What is your cancellation or rescheduling policy?", a: "A 50% non-refundable deposit secures your date. Reschedules need at least 72 hours notice. Last minute bookings within 48 hours incur a £20 fee." },
  { q: "What do I receive after my shoot?", a: "Your full edited gallery via Google Drive with digital downloads included. Raw files available for an additional fee. Express delivery (3 working days) available as an add-on." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-16 grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-5">Photography</p>
          <h1 className="font-display font-extrabold leading-[0.95] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)" }}>
            Wedding photography <span className="text-henna">from £350</span>
          </h1>
          <p className="text-bone-dim text-lg leading-relaxed max-w-xl mb-8">
            Your wedding day deserves more than just photos. It deserves to be felt. From the quiet moments
            before the ceremony to the last dance of the night, I document it all with honesty and care.
            Coverage for Henna, Bridal Shower, Engagement, Nikkah, Civil and full Wedding days.
          </p>
          <Link href="/contact" className="inline-block border border-bone/40 px-9 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300" data-cursor="view">
            Enquire today
          </Link>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <ImageFrame src="/photos/0F131351-6252-4417-A1AE-0952A1DA633A_1_105_c.jpg" alt="Wedding photography" ratio="aspect-[4/5]" priority />
        </Reveal>
      </section>

      <section className="container-shell pb-16">
        <Reveal><h2 className="eyebrow mb-8">Frequently asked questions</h2></Reveal>
        <Reveal delay={0.05}><Accordion items={FAQS} /></Reveal>
      </section>

      <section className="container-shell pb-16">
        <p className="eyebrow mb-8">Standard photography</p>
        <div className="divide-y divide-clay border-t border-b border-clay">
          <RateRow n="01" name="Mini Session" description="Clean, focused and intentional - ideal for portraits, birthdays and lifestyle shoots." price="£220" details={["2 hrs coverage","3 retouched images","Full edited gallery + downloads","3 days turnaround"]} />
          <RateRow n="02" name="Story Session" description="For when one look isn't enough. Build a gallery that really tells a story." price="£350" priceNote="Starting from" details={["3 hrs coverage","7 retouched images","Full edited gallery + downloads","1 week turnaround"]} delay={0.06} />
          <RateRow n="03" name="Signature Session" description="The full experience. A full day of shooting with complete creative freedom." price="£500" details={["5 hrs coverage","10 retouched images","Full edited gallery","Full storytelling edit","2 weeks turnaround"]} delay={0.12} />
        </div>
      </section>

      <div className="container-shell"><HennaDivider label="Content creation" /></div>

      <section className="container-shell pb-16">
        <div className="grid md:grid-cols-2 gap-px bg-clay">
          <Reveal className="bg-ink p-8 md:p-10 flex flex-col">
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">Wedding content creation</h3>
            <p className="text-bone-dim leading-relaxed mb-6">Edit-ready social content delivered straight to your phone. Highlight reels and trending formats built for Instagram and TikTok. Photography not included. Packages from £300.</p>
            <p className="font-display text-2xl mt-auto">From £300</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-ink p-8 md:p-10 flex flex-col">
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4 text-henna">Frame &amp; Feed</h3>
            <p className="text-bone-dim leading-relaxed mb-6">Your gallery and your grid - sorted in one day. One booking, two creatives, everything delivered. Packages from £580.</p>
            <p className="font-display text-2xl mt-auto">From £580</p>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-20 grid md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-5">
          <ImageFrame src="/photos/wedding_bento.jpg" alt="Lets connect" ratio="aspect-[4/5]" />
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.1}>
          <h2 className="font-display font-extrabold leading-[0.95] mb-4" style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)" }}>
            Let&rsquo;s connect.
          </h2>
          <p className="text-bone-dim leading-relaxed mb-4 max-w-md">Every great shoot starts with a conversation. Tell me about your day, your vision, your people.</p>
          <p className="text-bone-dim mb-6">For further questions please reach out.</p>
          <Link href="/contact" className="inline-block border border-bone/40 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300" data-cursor="view">
            Enquire today
          </Link>
        </Reveal>
      </section>
    </>
  );
}
