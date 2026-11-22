"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { HeroArt } from "./HeroArt";
import { CountUp } from "./CountUp";

const STATS = [
  { n: 10, pre: "", post: "", u: " anos", d: "de NID Consultoria, fundada em 2016" },
  { n: 15, pre: "+", post: "", u: " anos", d: "de experiência no setor da construção civil" },
  { n: 30, pre: "", post: "+", u: "", d: "empresas parceiras atendidas" },
  { n: 0, pre: "", post: "", u: " h", d: "cobradas por hora, sem surpresas na fatura" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink pt-16 xl:pt-[68px]">
      <HeroArt />
      <div className="container-nid relative flex min-h-[min(calc(100svh-4rem),920px)] flex-col justify-center pb-10 pt-14 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pl-24"
        >
          <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 backdrop-blur">
            <span className="rounded-full bg-gold px-2 py-0.5 font-display text-[9px] font-extrabold uppercase text-ink">10 anos</span>
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-white/70 sm:text-[10px]">
              2016 — 2026 · Necessidade · Inovação · Domínio
            </span>
          </div>

          <h1 className="mt-6 max-w-[18ch] text-[2.4rem] font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Processos <span className="md:block">organizados.</span> Obras sob <span className="text-gold">controle.</span>{" "}
            <span className="md:block">Resultados reais.</span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-white/75 sm:text-base">
            Consultoria em processos empresariais para construtoras de pequeno e médio porte — do mapeamento de processos à implantação do Sienge e aos indicadores em Power BI.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-gold px-5 py-3 text-sm font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(240,179,35,0.7)]"
            >
              Quero um diagnóstico <Plus size={14} strokeWidth={3} className="transition-transform duration-300 group-hover:rotate-90" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white/10"
            >
              Conheça os serviços
            </a>
          </div>
        </motion.div>

        <dl className="mt-14 grid grid-cols-2 gap-y-6 md:mt-20 md:grid-cols-4 lg:pl-24">
          {STATS.map((s, i) => (
            <motion.div
              key={s.d}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`pr-4 ${i % 2 === 1 ? "border-l border-white/10 pl-4 md:pl-5" : i > 0 ? "md:border-l md:border-white/10 md:pl-5" : ""}`}
            >
              <dt className="font-display text-2xl font-extrabold text-gold sm:text-[1.7rem]">
                <CountUp to={s.n} prefix={s.pre} suffix={s.post} />
                <span className="text-white">{s.u}</span>
              </dt>
              <dd className="mt-1 max-w-[16ch] text-[11px] leading-snug text-white/65">{s.d}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
