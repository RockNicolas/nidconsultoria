"use client";
import { BRAZIL_STATES, BRAZIL_VIEWBOX } from "@/data/brazil";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const HQ = "sp";
const CLIENT_STATES = ["pr", "mg", "go", "ce"];

const LIST = [
  { uf: "SP", n: "São Paulo", r: "Sudeste", d: "CTL Engenharia, Habras, Dubai, Basilar, Pilotti, VL Barros e mais", hq: true },
  { uf: "PR", n: "Paraná", r: "Sul", d: "Curitiba e Astorga · Maper e Casacchi" },
  { uf: "CE", n: "Ceará", r: "Nordeste", d: "Fortaleza · Sete Copa, Duo, Monte Cristo e Dinamic" },
  { uf: "GO", n: "Goiás", r: "Centro-Oeste", d: "Cooperluxo" },
  { uf: "MG", n: "Minas Gerais", r: "Sudeste", d: "Uberlândia · Star San" },
];

const STATS = [
  { v: "5", l: "estados" },
  { v: "4", l: "regiões do Brasil" },
  { v: "30+", l: "empresas parceiras" },
];

const W = 613;
const H = 639;
const pct = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

export function ActuationMap() {
  return (
    <section id="atuacao" className="relative overflow-hidden bg-ink py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_65%,rgba(240,179,35,0.10),transparent_55%)]" />
      <div className="container-nid relative">
        <p className="eyebrow !text-gold">Mapa de atuação</p>

        <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* mapa */}
          <Reveal className="mx-auto w-full max-w-[460px] lg:max-w-[540px]">
            <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
              <svg viewBox={BRAZIL_VIEWBOX} className="absolute inset-0 h-full w-full" role="img" aria-label="Mapa do Brasil com os estados atendidos pela NID">
                {BRAZIL_STATES.map((s, i) => {
                  const hq = s.id === HQ;
                  const client = CLIENT_STATES.includes(s.id);
                  return (
                    <motion.path
                      key={s.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: client || hq ? 0.5 + i * 0.01 : i * 0.015 }}
                      d={s.path}
                      fill={hq ? "#e7a914" : client ? "#f8dc8e" : "#262d3a"}
                      stroke="#171c25"
                      strokeWidth={0.8}
                      className="transition-colors duration-300"
                    />
                  );
                })}
              </svg>

              {/* marcadores */}
              <Marker x={551} y={134} label="Fortaleza" side="left" />
              <Marker x={392} y={478} label="Curitiba" side="right" />
              <span className="absolute" style={{ ...pct(417, 452), transform: "translate(-50%,-50%)" }}>
                <span className="absolute inset-0 -m-1 rounded-full bg-gold/60 animate-pulse-ring" />
                <span className="relative block h-3 w-3 rounded-full border-2 border-ink bg-white" />
              </span>

              {/* tooltip SP */}
              <div
                className="absolute w-[34%] min-w-[118px] rounded-lg bg-white p-2 text-ink shadow-xl sm:p-2.5"
                style={{ ...pct(402, 446), transform: "translate(-100%,-62%)" }}
              >
                <p className="flex items-center gap-1.5 text-[10px] font-extrabold sm:text-xs">
                  São Paulo
                  <span className="rounded bg-gold px-1 py-px font-display text-[7px] font-extrabold uppercase sm:text-[8px]">Sede</span>
                </p>
                <p className="mt-0.5 text-[8px] leading-snug text-ink/60 sm:text-[9.5px]">Sede da NID e maior concentração de clientes atendidos.</p>
              </div>
            </div>
          </Reveal>

          {/* conteúdo */}
          <Reveal delay={0.1}>
            <h2 className="max-w-[12ch] text-3xl font-extrabold leading-tight sm:text-4xl">Onde a NID já transformou a gestão.</h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/60">
              Do Sul ao Nordeste, construtoras de 5 estados já organizaram seus processos com a NID — e o mapa continua crescendo.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-white/55">
              <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-sm bg-[#e7a914]" /> Sede e maior concentração</span>
              <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-sm bg-gold-soft" /> Estados com clientes atendidos</span>
            </div>

            <ul className="mt-6 space-y-2.5">
              {LIST.map((l) => (
                <li key={l.uf} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-3">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg font-display text-[11px] font-extrabold text-ink ${l.hq ? "bg-gold" : "bg-gold-soft"}`}>
                    {l.uf}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">
                      {l.n} <span className="ml-1 font-display text-[8px] font-bold uppercase tracking-wider text-gold">{l.r}</span>
                    </p>
                    <p className="text-[11px] leading-snug text-white/55">{l.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-6 flex gap-8">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-extrabold text-gold">{s.v}</dt>
                  <dd className="text-[10px] text-white/50">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marker({ x, y, label, side }: { x: number; y: number; label: string; side: "left" | "right" }) {
  return (
    <span className="absolute" style={{ ...pct(x, y), transform: "translate(-50%,-50%)" }}>
      <span className="relative block h-2.5 w-2.5 rounded-full border-2 border-ink bg-white" />
      <span
        className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[8px] font-bold text-white sm:text-[10px] ${
          side === "right" ? "left-4" : "right-4 sm:right-auto sm:left-4"
        }`}
      >
        {label}
      </span>
    </span>
  );
}
