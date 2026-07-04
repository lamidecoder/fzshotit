import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact · FZSHOTIT" };

export default function ContactPage() {
  return (
    <section className="container-shell pt-36 md:pt-44 pb-32 grid md:grid-cols-12 gap-12">
      <Reveal className="md:col-span-5">
        <p className="eyebrow mb-5">Book me</p>
        <h1 className="font-display font-extrabold leading-[0.96] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>
          Let&rsquo;s work together.
        </h1>
        <p className="text-bone-dim leading-relaxed mb-6">
          Whether it&rsquo;s your Nikkah, your graduation, a portrait session or a brand moment, I
          want to hear about it. Tell me what you&rsquo;re planning and I&rsquo;ll get back to you
          with how we can make it happen. No confirmed date or venue needed.
        </p>
        <p className="text-bone-dim leading-relaxed mb-8">
          The more details you share below, the better I can tailor things to your vision.
        </p>
        <ImageFrame src="/photos/IMG_6675.jpg" alt="Book FZSHOTIT" ratio="aspect-[4/5]" />
      </Reveal>

      <Reveal className="md:col-span-7" delay={0.1}>
        <ContactForm />
      </Reveal>
    </section>
  );
}
