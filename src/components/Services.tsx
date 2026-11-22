"use client";
import { useState } from "react";
import {
  Workflow, MonitorCheck, BarChart3, LineChart, Users, Building2, CalendarCheck, Clock, Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES: { t: string; d: string; Icon: LucideIcon }[] = [
  { t: "Mapeamento de Processos", d: "Entendemos e desenhamos como cada área realmente funciona.", Icon: Workflow },
  { t: "Implantação do Sienge", d: "Treinamento, capacitação, acompanhamento e implantação do ERP Sienge.", Icon: MonitorCheck },
  { t: "Gestão Técnica e Financeira", d: "Consultoria empresarial para as duas frentes que sustentam a obra.", Icon: BarChart3 },
  { t: "Dashboards e Power BI", d: "Informações gerenciais consolidadas em indicadores para decidir.", Icon: LineChart },
  { t: "BPO (Outsourcing)", d: "Terceirização de rotinas com padrão NID de controle.", Icon: Users },
  { t: "R.G.O. — Resultado Geral de Obra", d: "Visão completa do resultado de cada empreendimento.", Icon: Building2 },
  { t: "R.G.R. — Reunião Geral de Resultado", d: "Ritual de gestão para acompanhar metas com a liderança.", Icon: CalendarCheck },
  { t: "Acompanhamento da Operação", d: "Lado a lado com as equipes envolvidas no dia a dia.", Icon: Clock },
  { t: "Palestras para Equipes", d: "Palestra sobre a importância das equipes no processo de gestão empresarial.", Icon: Lightbulb },
];

export function Services() {
  const [active, setActive] = useState(1);
  return (
    <section id="servicos" className="bg-cream py-16 text-ink md:py-24">
      <div className="container-nid">
        <Reveal className="grid gap-4 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Uma gestão focada em resultados.</h2>
          </div>
          <p className="text-[13px] leading-relaxed text-ink/65 md:max-w-sm md:justify-self-end">
            Nove frentes de atuação para estruturar, implantar e acompanhar a gestão da sua empresa — do canteiro ao financeiro.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ t, d, Icon }, i) => {
            const on = active === i;
            return (
              <Reveal key={t} delay={(i % 3) * 0.07}>
                <article
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  tabIndex={0}
                  className={`relative h-full cursor-pointer rounded-2xl border p-5 transition-all duration-300 outline-none sm:p-6 ${
                    on
                      ? "border-ink bg-ink-2 text-white shadow-xl shadow-ink/25 lg:-translate-y-0.5"
                      : "border-black/5 bg-white shadow-[0_6px_24px_-14px_rgba(20,24,31,0.15)]"
                  }`}
                >
                  <span className={`absolute right-5 top-5 font-display text-[10px] font-bold ${on ? "text-white" : "text-ink/65"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`grid h-10 w-10 place-items-center rounded-lg transition-colors ${on ? "bg-gold text-ink" : "bg-ink-2 text-gold"}`}>
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold leading-snug">{t}</h3>
                  <p className={`mt-2 text-[12px] leading-relaxed ${on ? "text-white/65" : "text-ink/65"}`}>{d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
