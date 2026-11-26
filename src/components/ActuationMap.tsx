"use client";
import { useState } from "react";
import { BRAZIL_STATES, BRAZIL_VIEWBOX } from "@/data/brazil";
import { STATES, type StateInfo } from "@/data/atuacao";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const STATS = [
  { v: "12", l: "estados + DF" },
  { v: "4", l: "regiões do Brasil" },
  { v: "30+", l: "empresas parceiras" },
];

/* Área do desenho com rótulos: o mapa (613 de largura) mais as colunas de texto à direita. */
const W = 860;
const H = 650;

/* Linha de chamada e posição do nome de cada local, como na apresentação da NID.
   `d` sai do ponto da capital; (x, y) é o início do texto, logo acima da linha. */
const CALLOUTS: Record<string, { d: string; x: number; y: number; w: number }> = {
  ce: { d: "M554,141 L575,120 H845", x: 650, y: 120, w: 195 },
  pb: { d: "M611,195 L625,190 H845", x: 650, y: 190, w: 195 },
  ba: { d: "M554,289 L575,270 H845", x: 650, y: 270, w: 195 },
  df: { d: "M406,334 L422,318 H845", x: 650, y: 318, w: 195 },
  go: { d: "M385,349 L394,356 H845", x: 650, y: 356, w: 195 },
  mg: { d: "M469,401 L477,393 H845", x: 650, y: 393, w: 195 },
  es: { d: "M525,407 L545,429 H845", x: 650, y: 429, w: 195 },
  sp: { d: "M428,457 L437,466 H845", x: 650, y: 466, w: 195 },
  pr: { d: "M385,489 L401,505 H610", x: 470, y: 505, w: 140 },
  sc: { d: "M396,524 L412,540 H610", x: 460, y: 540, w: 150 },
  rs: { d: "M354,563 L370,579 H610", x: 440, y: 579, w: 170 },
  mt: { d: "M278,331 L234,375 H30", x: 30, y: 375, w: 180 },
  ms: { d: "M301,410 L256,455 H30", x: 30, y: 455, w: 190 },
};

const BY_ID: Record<string, StateInfo> = Object.fromEntries(STATES.map((s) => [s.id, s]));
/* Estados onde a NID atua ou já atuou saem do azul. */
const FILL = { presence: "#f0b323", hover: "#f8d36b", selected: "#e2661a" };
const LEGEND = [
  { color: FILL.presence, label: "Atua ou já atuou" },
  { color: FILL.selected, label: "Selecionado" },
  { color: "#14809f", label: "Demais estados" },
];
// o DF é desenhado por último para não ficar encoberto por Goiás
const SHAPES = [...BRAZIL_STATES].sort((a, b) => Number(a.id === "df") - Number(b.id === "df"));

type MapProps = {
  labels: boolean;
  sel: string;
  hover: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
};

export function ActuationMap() {
  const [sel, setSel] = useState("sp");
  const [hover, setHover] = useState<string | null>(null);
  const cur = BY_ID[sel];
  const map = { sel, hover, onSelect: setSel, onHover: setHover };

  return (
    <section id="atuacao" className="relative border-t border-ink/10 bg-white py-16 text-ink md:py-24">
      <div className="container-nid">
        <p className="eyebrow">Mapa de atuação</p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Onde a NID atua ou já atuou</h2>
        <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/65">
          Do Sul ao Nordeste, em 12 estados e no Distrito Federal. Passe o mouse ou clique em um local para ver os detalhes.
        </p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.7fr_1fr]">
          <Reveal className="w-full min-w-0">
            <div className="relative hidden md:block">
              <BrazilMap labels {...map} />
              <AnimatePresence>{hover && <Tooltip key={hover} info={BY_ID[hover]} />}</AnimatePresence>
            </div>
            <div className="mx-auto max-w-[460px] md:hidden">
              <BrazilMap labels={false} {...map} />
            </div>
            <ul aria-label="Legenda do mapa" className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-ink/70">
              {LEGEND.map((l) => (
                <li key={l.label} className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-sm" style={{ background: l.color }} />
                  {l.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <div role="group" aria-label="Estados atendidos" className="flex flex-wrap gap-1.5">
              {STATES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={sel === s.id}
                  aria-label={s.name}
                  onClick={() => setSel(s.id)}
                  className={`rounded-lg px-3 py-2 font-display text-[11px] font-extrabold transition ${
                    sel === s.id ? "bg-gold text-ink" : "border border-ink/10 bg-cream text-ink/75 hover:border-gold"
                  }`}
                >
                  {s.uf}
                </button>
              ))}
            </div>

            <div className="mt-4 min-h-[250px] rounded-2xl bg-cream p-4 sm:p-5" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <h3 className="text-base font-extrabold">{cur.name}</h3>
                  <p className="font-display text-[9px] font-bold uppercase tracking-wider text-gold-dark">
                    {cur.region}
                    {cur.hq ? " · Sede" : ""}
                  </p>

                  <p className="mt-3 text-[11px] font-bold text-ink/65">{cur.cities.length > 1 ? `${cur.cities.length} cidades` : "Cidade"}</p>
                  <ul aria-label="Cidades atendidas" className="mt-1.5 flex flex-wrap gap-1.5">
                    {cur.cities.map((city) => (
                      <li key={city} className="rounded-md bg-white px-2 py-1 text-[11px] text-ink/80">
                        {city}
                      </li>
                    ))}
                  </ul>

                  {cur.companies.length > 0 && (
                    <>
                      <p className="mt-4 text-[11px] font-bold text-ink/65">Empresas atendidas</p>
                      <ul aria-label="Empresas atendidas" className="mt-1.5 grid gap-2">
                        {cur.companies.map((c) => (
                          <li key={c.name} className="flex items-center gap-3 rounded-xl bg-white p-2">
                            <span className="grid h-10 w-14 shrink-0 place-items-center overflow-hidden rounded-lg">
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
                    </>
                  )}
                  {cur.id === "sp" && <p className="mt-3 text-[10px] text-ink/65">E mais empresas atendidas na região.</p>}
                </motion.div>
              </AnimatePresence>
            </div>

            <dl className="mt-6 flex gap-8">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-extrabold text-gold-dark">{s.v}</dt>
                  <dd className="text-[10px] text-ink/65">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* O teclado e leitores de tela usam os botões de UF; o desenho é o atalho visual para mouse e toque. */
function BrazilMap({ labels, sel, hover, onSelect, onHover }: MapProps) {
  const gradient = labels ? "nid-map-wide" : "nid-map-compact";
  const events = (id: string) => ({
    onClick: () => onSelect(id),
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") onHover(id);
    },
    onPointerLeave: () => onHover(null),
    className: "cursor-pointer",
  });

  return (
    <svg viewBox={labels ? `0 0 ${W} ${H}` : BRAZIL_VIEWBOX} className="block h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id={gradient} gradientUnits="userSpaceOnUse" x1="0" y1="200" x2="610" y2="360">
          <stop offset="0" stopColor="#5aa6d8" />
          <stop offset="0.55" stopColor="#14809f" />
          <stop offset="1" stopColor="#062c47" />
        </linearGradient>
      </defs>

      {SHAPES.map((s) => (
        <path
          key={s.id}
          d={s.path}
          fill={!BY_ID[s.id] ? `url(#${gradient})` : sel === s.id ? FILL.selected : hover === s.id ? FILL.hover : FILL.presence}
          stroke="#fff"
          strokeWidth={1}
          {...(BY_ID[s.id] ? events(s.id) : {})}
        />
      ))}

      {STATES.map((s) => {
        const c = CALLOUTS[s.id];
        const on = sel === s.id || hover === s.id;
        return (
          <g key={s.id} {...events(s.id)}>
            {labels && (
              <>
                <rect x={c.x} y={c.y - 28} width={c.w} height={34} fill="transparent" />
                <path d={c.d} fill="none" stroke={on ? "#7a3a05" : "#b45f14"} strokeWidth={on ? 2.4 : 1.3} />
                <text x={c.x} y={c.y - 7} fontSize={s.hq ? 20 : 18} fontWeight={on || s.hq ? 800 : 500} fill={on ? "#7a3a05" : "#a95410"}>
                  {s.hq ? `${s.uf} · Sede` : `${s.cities[0]} ${s.uf}`}
                </text>
              </>
            )}
            <circle cx={s.pin.x} cy={s.pin.y} r={labels ? 9 : 14} fill="transparent" />
            <circle cx={s.pin.x} cy={s.pin.y} r={on ? 8 : labels ? 5 : 7} fill="#14181f" stroke="#fff" strokeWidth={on ? 2.5 : 1.5} />
          </g>
        );
      })}

    </svg>
  );
}

function Tooltip({ info }: { info: StateInfo }) {
  const { x, y } = info.pin;
  const shiftX = x < 330 ? "-15%" : x > 450 ? "-85%" : "-50%";
  const shiftY = y > 330 ? "calc(-100% - 16px)" : "16px";
  const extra = info.cities.length - 6;

  return (
    <div className="pointer-events-none absolute z-20" style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%`, transform: `translate(${shiftX}, ${shiftY})` }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="w-60 rounded-xl bg-ink p-3 text-white shadow-2xl"
      >
        <p className="text-sm font-extrabold">{info.name}</p>
        <p className="font-display text-[9px] font-bold uppercase tracking-wider text-gold">
          {info.region}
          {info.hq ? " · Sede" : ""}
        </p>
        <p className="mt-2 text-[11px] leading-snug text-white/85">
          {info.cities.slice(0, 6).join(", ")}
          {extra > 0 ? ` e mais ${extra}` : ""}
        </p>
        {info.companies.length > 0 && (
          <p className="mt-2 text-[11px] leading-snug text-white/70">
            <span className="font-bold text-gold">Empresas: </span>
            {info.companies.map((c) => c.name).join(", ")}
          </p>
        )}
        <p className="mt-2 text-[10px] text-white/60">Clique para ver todos os detalhes.</p>
      </motion.div>
    </div>
  );
}
