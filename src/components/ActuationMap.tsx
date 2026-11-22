"use client";
import { useState } from "react";
import { BRAZIL_STATES, BRAZIL_VIEWBOX } from "@/data/brazil";
import { STATES } from "@/data/atuacao";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const STATS = [
  { v: "5", l: "estados" },
  { v: "4", l: "regiões do Brasil" },
  { v: "30+", l: "empresas parceiras" },
];

const W = 613;
const H = 639;
const pct = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });
const BY_ID = Object.fromEntries(STATES.map((s) => [s.id, s]));

export function ActuationMap() {
  const [sel, setSel] = useState("sp");
  const [hover, setHover] = useState<string | null>(null);
  const cur = BY_ID[sel];

  return (
    <section id="atuacao" className="relative overflow-hidden bg-ink py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_65%,rgba(240,179,35,0.10),transparent_55%)]" />
      <div className="container-nid relative">
        <p className="eyebrow !text-gold">Mapa de atuação</p>

        <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* mapa */}
          <Reveal className="mx-auto w-full max-w-[460px] lg:max-w-[540px]">
            <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
              <svg viewBox={BRAZIL_VIEWBOX} className="absolute inset-0 h-full w-full" role="group" aria-label="Mapa do Brasil. Selecione um estado atendido para ver as empresas.">
                {BRAZIL_STATES.map((s, i) => {
                  const info = BY_ID[s.id];
                  const active = !!info;
                  const picked = sel === s.id;
                  const hot = hover === s.id;
                  const base = info?.hq ? "#e7a914" : active ? "#f8dc8e" : "#262d3a";
                  return (
                    <motion.path
                      key={s.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: active ? 0.5 + i * 0.01 : i * 0.015 }}
                      d={s.path}
                      fill={picked ? "#f0b323" : hot ? "#fbe9b4" : base}
                      stroke={picked ? "#ffffff" : "#171c25"}
                      strokeWidth={picked ? 1.6 : 0.8}
                      className={active ? "cursor-pointer outline-none transition-colors duration-200" : ""}
                      {...(active
                        ? {
                            role: "button",
                            tabIndex: 0,
                            "aria-label": `${info.name}: ver empresas`,
                            "aria-pressed": picked,
                            onClick: () => setSel(s.id),
                            onKeyDown: (e: React.KeyboardEvent) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setSel(s.id);
                              }
                            },
                            onMouseEnter: () => setHover(s.id),
                            onMouseLeave: () => setHover(null),
                            onFocus: () => setHover(s.id),
                            onBlur: () => setHover(null),
                          }
                        : { "aria-hidden": true })}
                    />
                  );
                })}
              </svg>

              <svg viewBox={BRAZIL_VIEWBOX} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
                <path d="M428 457 L452 506" stroke="#fff" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.7" />
              </svg>

              {/* marcadores (coordenadas calculadas a partir de lat/long reais) */}
              <Marker x={554} y={141} label="Fortaleza" side="left" />
              <Marker x={385} y={489} label="Curitiba" side="left" />
              <Marker x={402} y={383} label="Uberlândia" side="right" small />
              <Marker x={349} y={453} label="Astorga" side="left" small />
              <span className="pointer-events-none absolute" style={{ ...pct(428, 457), transform: "translate(-50%,-50%)" }}>
                <span className="absolute inset-0 -m-1 rounded-full bg-gold/60 animate-pulse-ring" />
                <span className="relative block h-3 w-3 rounded-full border-2 border-ink bg-white" />
              </span>

              <div className="pointer-events-none absolute w-[28%] min-w-[104px] rounded-lg bg-white p-2 text-ink shadow-xl sm:p-2.5" style={{ ...pct(438, 504) }}>
                <p className="flex items-center gap-1.5 text-[10px] font-extrabold sm:text-xs">
                  São Paulo
                  <span className="rounded bg-gold px-1 py-px font-display text-[7px] font-extrabold uppercase sm:text-[8px]">Sede</span>
                </p>
                <p className="mt-0.5 text-[8px] leading-snug text-ink/60 sm:text-[9.5px]">Sede da NID e maior concentração de clientes atendidos.</p>
              </div>
            </div>
            <p className="mt-3 text-center text-[10px] text-white/65">Toque em um estado para ver as empresas.</p>
          </Reveal>

          {/* conteúdo */}
          <Reveal delay={0.1}>
            <h2 className="max-w-[12ch] text-3xl font-extrabold leading-tight sm:text-4xl">Onde a NID já transformou a gestão.</h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/60">
              Do Sul ao Nordeste, construtoras de 5 estados já organizaram seus processos com a NID — e o mapa continua crescendo.
            </p>

            <div role="tablist" aria-label="Estados atendidos" className="mt-6 flex flex-wrap gap-2">
              {STATES.map((s) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={sel === s.id}
                  onClick={() => setSel(s.id)}
                  className={`rounded-lg px-3.5 py-2 font-display text-[11px] font-extrabold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    sel === s.id ? "bg-gold text-ink" : "border border-white/10 bg-white/[0.04] text-white/80 hover:border-gold/60"
                  }`}
                >
                  {s.uf}
                </button>
              ))}
            </div>

            <div className="mt-4 min-h-[250px] rounded-2xl border border-white/5 bg-white/[0.04] p-4 sm:p-5" role="tabpanel" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <p className="flex items-baseline gap-2 text-base font-extrabold">
                    {cur.name}
                    <span className="font-display text-[9px] font-bold uppercase tracking-wider text-gold">{cur.region}{cur.hq ? " · Sede" : ""}</span>
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {cur.companies.map((c) => (
                      <li key={c.name} className="flex items-center gap-3 rounded-xl bg-white p-2 text-ink">
                        <span className="grid h-10 w-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-white">
                          {c.slug ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={`/clientes/${c.slug}.webp`} alt="" loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                          ) : (
                            <span className="font-display text-[9px] font-extrabold text-ink/65">{c.name.slice(0, 3).toUpperCase()}</span>
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[12px] font-bold leading-tight">{c.name}</span>
                          <span className="block text-[10px] text-ink/65">{c.ok ? c.city : c.city === "a confirmar" ? "cidade a confirmar" : `${c.city} (a confirmar)`}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  {cur.id === "sp" && <p className="mt-3 text-[10px] text-white/65">E mais empresas atendidas na região.</p>}
                </motion.div>
              </AnimatePresence>
            </div>

            <dl className="mt-6 flex gap-8">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-extrabold text-gold">{s.v}</dt>
                  <dd className="text-[10px] text-white/65">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marker({ x, y, label, side, small }: { x: number; y: number; label: string; side: "left" | "right"; small?: boolean }) {
  return (
    <span className="pointer-events-none absolute" style={{ ...pct(x, y), transform: "translate(-50%,-50%)" }}>
      <span className={`relative block rounded-full border-2 border-ink bg-white ${small ? "h-2 w-2" : "h-2.5 w-2.5"}`} />
      <span
        className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-ink/85 px-1 py-px font-display font-bold text-white ${
          small ? "hidden text-[7px] sm:block sm:text-[8px]" : "text-[8px] sm:text-[10px]"
        } ${side === "right" ? "left-3.5" : "right-3.5"}`}
      >
        {label}
      </span>
    </span>
  );
}
