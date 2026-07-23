import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";
import HennaDivider from "@/components/HennaDivider";
import Accordion from "@/components/Accordion";

export const metadata = { title: "Services - FZShotit" };

const FAQS = [
  { q: "Do you travel for destination weddings?", a: "London is home base. All London bookings are included. Outside London is quoted individually. Destination shoots including abroad are available." },
  { q: "What does retouching include?", a: "Every gallery comes with a set number of fully retouched images depending on your package. Additional retouched images are available for £7 per image." },
  { q: "What is your cancellation or rescheduling policy?", a: "A 50% non-refundable deposit secures your date. Reschedules need at least 72 hours notice. Minimum booking is £200." },
  { q: "What do I receive after my shoot?", a: "Your full edited gallery via Google Drive with digital downloads included. Express delivery (3 working days) available for £75." },
];

const PACKAGES = [
  {
    name: "Mini Session",
    price: "£235",
    duration: "Up to 2 hours",
    desc: "Perfect for portraits, birthdays and lifestyle shoots. Clean, focused, no fuss.",
    includes: ["2hr coverage", "Full edited gallery", "5 retouched images", "Online delivery", "3 day turnaround"],
    popular: false,
  },
  {
    name: "Story Session",
    price: "£360",
    duration: "Up to 3 hours",
    desc: "For clients who want different looks or locations in one shoot. The sweet spot for lifestyle and content creation.",
    includes: ["3hr coverage", "Full edited gallery", "10 retouched images", "Gallery + downloads", "1 week turnaround"],
    popular: true,
  },
  {
    name: "Signature Session",
    price: "£550",
    duration: "Up to 5 hours",
    desc: "Full day coverage for brands and clients who want multiple looks and full storytelling.",
    includes: ["5hr coverage", "Full edited gallery", "15 retouched images", "Full storytelling edit", "2 week turnaround"],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Wedding Photography hero */}
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

      {/* FAQ */}
      <section className="container-shell pb-16">
        <Reveal><h2 className="eyebrow mb-8">Frequently asked questions</h2></Reveal>
        <Reveal delay={0.05}><Accordion items={FAQS} /></Reveal>
      </section>

      {/* Standard Photography pricing cards */}
      <section className="container-shell pb-10">
        <Reveal>
          <p className="eyebrow mb-2">Standard photography</p>
          <p className="text-bone-dim text-sm tracking-widest uppercase mb-10">
            Portraits &nbsp;·&nbsp; Birthdays &nbsp;·&nbsp; Lifestyle &nbsp;·&nbsp; Brand &nbsp;·&nbsp; Content Shoot
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <div className={`relative flex flex-col h-full p-7 ${pkg.popular ? "border-2 border-henna" : "border border-clay"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-6 bg-henna px-3 py-1">
                    <span className="text-bone font-bold" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <p className="eyebrow text-bone-dim mb-3">{pkg.name}</p>
                <p className="font-display font-extrabold mb-1" style={{ fontSize: "clamp(2.8rem, 6vw, 3.8rem)" }}>{pkg.price}</p>
                <p className="text-bone-dim text-sm mb-5">{pkg.duration}</p>
                <p className="text-bone-dim text-sm leading-relaxed mb-7">{pkg.desc}</p>
                <p className="eyebrow text-bone-dim/50 mb-4">Includes</p>
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-bone-dim">
                      <span className="w-2 h-2 bg-henna shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-bone-dim/50 text-sm text-center mt-8 italic">
            Add-ons: Extra retouched image £7 &nbsp;&middot;&nbsp; Express delivery (3 working days) £75 &nbsp;&middot;&nbsp; Minimum booking £200
          </p>
        </Reveal>
      </section>

      {/* Content Creation */}
      <div className="container-shell mt-8"><HennaDivider label="Content creation" /></div>

      <section className="container-shell pb-16">
        <div className="grid md:grid-cols-2 gap-px bg-clay">
          <Reveal className="bg-ink p-8 md:p-10 flex flex-col">
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">Wedding content creation</h3>
            <p className="text-bone-dim leading-relaxed mb-6">Edit-ready social content delivered straight to your phone. Highlight reels and trending formats built for Instagram and TikTok. Photography not included.</p>
            <p className="font-display text-2xl mt-auto">From £300</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-ink p-8 md:p-10 flex flex-col">
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4 text-henna">Frame &amp; Feed</h3>
            <p className="text-bone-dim leading-relaxed mb-6">Your gallery and your grid - sorted in one day. One booking, two creatives, everything delivered.</p>
            <p className="font-display text-2xl mt-auto">From £580</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
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
