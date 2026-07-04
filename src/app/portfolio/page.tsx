import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";

export const metadata = { title: "Portfolio · FZShotit" };

const CATS = [
  { src: "/photos/DSC05674.jpg", label: "Weddings", href: "/portfolio/weddings", span: "md:col-span-2 md:row-span-2" },
  { src: "/photos/IMG_2432.jpg", label: "Nikkah", href: "/portfolio/nikkah", span: "" },
  { src: "/photos/IMG_7479.jpg", label: "Henna", href: "/portfolio/henna", span: "" },
  { src: "/photos/DSC08845.jpg", label: "Celebrations", href: "/portfolio/celebrations", span: "md:col-span-2" },
];

const PORTRAITS = [
  { src: "/photos/fatou_makeup.jpg", label: "Fatou" },
  { src: "/photos/fatou_portrait.jpg", label: "Fatou" },
  { src: "/photos/DSC04847.jpg", label: "Portrait" },
  { src: "/photos/IMG_7257.jpg", label: "Portrait" },
  { src: "/photos/F37A6491-DD35-4C0F-ABE5-12D84573905A_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/E86DABF3-28D6-44B0-BCB7-E56190F64A20_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/10F4E1C7-2901-4562-8B68-1345FA0FB994_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/0F131351-6252-4417-A1AE-0952A1DA633A_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/82A0953F-F843-46D1-94C7-C590B2452161_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/F4254BDD-057E-4702-BBFF-398A6583EB48_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/9D847B1C-408B-4753-9294-A34A504006D9_1_105_c.jpg", label: "Portrait" },
  { src: "/photos/708DF59D-4257-4010-8993-0BF3E8B99C57_1_105_c.jpg", label: "Portrait" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="container-shell pt-36 md:pt-44 pb-12">
        <Reveal>
          <p className="eyebrow mb-5">Portfolio</p>
          <h1 className="font-display font-extrabold leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}>
            A few favourite days.
          </h1>
        </Reveal>
      </section>

      <section className="container-shell pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3">
          {CATS.map((item, i) => (
            <div key={item.label} className={item.span}>
              <Link href={item.href} className="group block relative h-full" data-cursor="view">
                <ImageFrame
                  src={item.src}
                  alt={item.label}
                  ratio={item.span.includes("row-span-2") ? "aspect-[4/5] md:h-full" : "aspect-[4/5]"}
                  priority={i === 0}
                />
                <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none">
                  <span className="font-display font-semibold text-xl md:text-2xl text-bone group-hover:text-henna transition-colors">
                    {item.label}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-12">
        <p className="eyebrow mb-8">Portraits &amp; editorial</p>
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {PORTRAITS.map((p, i) => (
            <div key={p.src} className="break-inside-avoid">
              <ImageFrame src={p.src} alt={p.label} ratio="aspect-[3/4]" delay={i * 0.04} />
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell text-center py-20">
        <Reveal>
          <Link href="/contact"
            className="inline-block border border-bone/35 px-10 py-4 eyebrow hover:bg-bone hover:text-ink transition-colors duration-300"
            data-cursor="view">
            Book me today
          </Link>
        </Reveal>
      </section>
    </>
  );
}