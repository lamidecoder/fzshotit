import Reveal from "@/components/Reveal";

export default function RateRow({
  n,
  name,
  description,
  price,
  priceNote,
  details,
  delay = 0,
}: {
  n: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  details: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-9 items-start">
        <span className="font-display text-bone-dim/40 text-4xl md:col-span-1">{n}</span>
        <div className="md:col-span-4">
          <h3 className="font-display font-semibold text-2xl mb-2">{name}</h3>
          <p className="text-bone-dim text-sm leading-relaxed">{description}</p>
        </div>
        <ul className="md:col-span-4 text-sm text-bone-dim space-y-1.5">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <div className="md:col-span-3 md:text-right">
          {priceNote && <p className="eyebrow text-bone-dim opacity-70 mb-1">{priceNote}</p>}
          <p className="font-display font-semibold text-3xl">{price}</p>
        </div>
      </div>
    </Reveal>
  );
}
