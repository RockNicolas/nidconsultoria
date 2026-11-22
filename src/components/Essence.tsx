import { Reveal } from "./Reveal";

const ITEMS = [
  { l: "N", t: "Necessidade", d: "Diagnosticamos onde a operação perde tempo, dinheiro e informação." },
  { l: "I", t: "Inovação", d: "Redesenhamos processos, rotinas e controles com tecnologia e método." },
  { l: "D", t: "Domínio", d: "Sua equipe passa a ter controle real da gestão — com dados confiáveis." },
];

export function Essence() {
  return (
    <section className="bg-cream py-16 text-ink md:py-24">
      <div className="container-nid">
        <Reveal>
          <p className="eyebrow">O que significa NID</p>
          <blockquote className="mt-4 max-w-2xl font-display text-xl font-semibold leading-snug sm:text-2xl">
            “Toda empresa tem a <b className="text-gold-dark">Necessidade</b> de <b className="text-gold-dark">Inovar</b> os seus processos e rotinas, para ter{" "}
            <b className="text-gold-dark">Domínio</b> da sua gestão.”
          </blockquote>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ITEMS.map((i, k) => (
            <Reveal key={i.t} delay={k * 0.08}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-[0_6px_24px_-12px_rgba(20,24,31,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(20,24,31,0.22)]">
                <span className="font-display text-6xl font-extrabold leading-none text-gold">{i.l}</span>
                <h3 className="mt-6 text-lg font-bold">{i.t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
