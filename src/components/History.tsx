import Image from "next/image";
import { Reveal } from "./Reveal";

const TIMELINE: { y: string; d: string; img?: string }[] = [
  { y: "2016", d: "Fundação da NID" },
  { y: "2019", d: "APEX NID Leader 2.0", img: "/img/apex-leader.jpg" },
  { y: "2021", d: "APEX Summit 2.0", img: "/img/apex-summit.jpg" },
  { y: "2026", d: "10 anos de NID" },
];

const CREDS = [
  "Economista (FAECO-FSA) com MBA em Gestão Financeira, Controladoria e Auditoria pela FGV",
  "Certificado internacionalmente em Comportamento Humano pela Extended DISC",
  "Pós-graduado em Docência do Ensino Superior (USCS)",
];

const CHIPS = ["NID Consultoria", "NID Comportamental", "NID Cursos", "NID Tecnologia"];

export function History() {
  return (
    <section id="sobre" className="bg-white py-16 text-ink md:py-24">
      <div className="container-nid grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Nossa história</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Nascemos dentro da construção civil.</h2>
          <p className="mt-5 text-[14px] leading-relaxed text-ink/65">
            A NID Consultoria foi fundada em 2 de outubro de 2016 por Daniel Alves, após anos atuando em consultoria e treinamento de sistema ERP para o segmento da construção civil. Ele enxergou uma carência clara do mercado: profissionais especialistas em gestão e processos para construtoras.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
            Hoje, a NID inova os processos, atividades e controles de seus clientes, unindo gestão técnica, gestão financeira e o comportamento humano das equipes.
          </p>

          <ol className="mt-8 grid grid-cols-4 border-t border-dashed border-gold/60 pt-0">
            {TIMELINE.map((t) => (
              <li key={t.y} className="relative pt-4">
                <span className="absolute -top-[4.5px] left-0 h-2 w-2 rounded-full bg-gold" />
                <p className="flex items-center gap-2 font-display text-sm font-extrabold">
                  {t.y}
                  {"img" in t && t.img && <Image src={t.img} alt="" width={28} height={28} className="h-6 w-6 rounded object-cover" />}
                </p>
                <p className="mt-0.5 text-[10px] leading-snug text-ink/50">{t.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-ink-2 p-6 text-white shadow-2xl shadow-ink/20 sm:p-8">
            <Image src="/img/daniel.jpg" alt="Daniel Alves, CEO do Grupo NID" width={378} height={324} className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-gold" />
            <h3 className="mt-4 text-xl font-bold">Daniel Alves</h3>
            <p className="mt-0.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-gold">CEO · Grupo NID</p>
            <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
              {CREDS.map((c) => (
                <li key={c} className="flex gap-2.5 text-[12px] leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <span key={c} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
