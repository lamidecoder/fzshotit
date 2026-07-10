import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";

export const metadata = { title: "Contact - FZShotit" };

export default function ContactPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">

          <Reveal className="md:col-span-5">
            <ImageFrame src="/photos/portrait_pink.jpg" alt="FZShotit" ratio="aspect-[4/5]" priority />
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="eyebrow mb-5">Get in touch</p>
            <h1 className="font-display font-extrabold leading-[0.96] mb-6"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>
              Let&rsquo;s work<br />
              <span className="text-henna">together.</span>
            </h1>

            <p className="text-bone-dim leading-relaxed mb-4 max-w-md">
              Whether it&rsquo;s your Nikkah, wedding, graduation, a portrait session or a brand moment,
              I want to hear about it. No confirmed date or venue needed.
            </p>
            <p className="text-bone-dim leading-relaxed mb-10 max-w-md">
              Click below and tell me all about your day.
            </p>

            <a
              href="mailto:fzshotit@gmail.com?subject=Photography%20Enquiry"
              className="inline-flex items-center gap-3 bg-henna text-bone px-10 py-5 font-display font-bold text-base hover:bg-bone hover:text-ink transition-colors duration-300"
              data-cursor="view">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send an enquiry
            </a>

            <div className="mt-8 flex flex-col gap-2">
              <p className="eyebrow text-bone-dim/50">or email directly</p>
              <a href="mailto:fzshotit@gmail.com"
                className="text-bone hover:text-henna transition-colors font-medium">
                fzshotit@gmail.com
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-clay flex items-center gap-6">
              <a href="https://www.instagram.com/fzshotit" target="_blank" rel="noopener noreferrer"
                className="eyebrow text-bone-dim hover:text-henna transition-colors">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@fzshotit" target="_blank" rel="noopener noreferrer"
                className="eyebrow text-bone-dim hover:text-henna transition-colors">
                TikTok
              </a>
              <span className="eyebrow text-bone-dim/40">London, UK</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
