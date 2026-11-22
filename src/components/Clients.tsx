import { Reveal } from "./Reveal";

const ROW_A = [
  ["vlbarros", "VL Barros"], ["casacchi", "Casacchi"], ["inc", "INC Desenvolvimento Imobiliário"], ["macro", "Macro"],
  ["ctl", "CTL Engenharia"], ["simetrica", "Simétrica"], ["jl", "JL Engenharia e Construção"], ["tng", "TNG Service"],
  ["duo", "Duo Construtora"], ["pilotti", "Pilotti Engenharia"], ["setecopa", "Sete Copa Engenharia"], ["montecristo", "Construtora Monte Cristo"],
];
const ROW_B = [
  ["habras", "Habras"], ["dubai", "Dubai"], ["starsan", "Star San"], ["nexus", "Nexus"],
  ["liborio", "Liborio Azzi"], ["cooperluxo", "Cooperluxo"], ["integra", "Integra"], ["basilar", "Basilar"],
  ["maper", "Maper"], ["omar", "Omar Maksoud Engenharia"], ["rg", "Rodrigues Gonçalves"], ["alianza", "Alianza"], ["engemais", "EngeMais"],
];

function Row({ items, reverse }: { items: string[][]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <ul className={`flex w-max gap-3 sm:gap-4 ${reverse ? "animate-marquee-rev" : "animate-marquee"} hover:[animation-play-state:paused]`}>
        {loop.map(([slug, name], i) => (
          <li
            key={slug + i}
            aria-hidden={i >= items.length}
            className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-2.5 shadow-[0_4px_16px_-10px_rgba(0,0,0,0.25)] sm:h-[72px] sm:w-40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/clientes/${slug}.webp`} alt={i < items.length ? name : ""} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="bg-white py-16 text-ink md:py-24">
      <div className="container-nid">
        <Reveal className="text-center">
          <p className="eyebrow">Clientes e parceiros</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Empresas que confiam na NID.</h2>
          <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-ink/65">
            Construtoras, incorporadoras e consórcios que estruturaram sua gestão com a gente.
          </p>
        </Reveal>
      </div>
      <div className="mt-10 space-y-3 sm:space-y-4">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
      <p className="mt-6 text-center text-[10px] text-ink/65">+ consórcios Integra 5A Meninos e Integra 15AB</p>
    </section>
  );
}
