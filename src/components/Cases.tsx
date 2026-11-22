import { Workflow, MonitorCheck, Building2, LineChart, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

/* RASCUNHO: cases descritivos baseados nos serviços da apresentação (sem números e sem nomes de clientes).
   Validar/ajustar com o Daniel e, com autorização do cliente, trocar por cases reais com resultados. */
const CASES: { Icon: LucideIcon; tag: string; title: string; challenge: string; action: string; result: string }[] = [
  {
    Icon: Workflow,
    tag: "Mapeamento de processos",
    title: "Cada área trabalhando de um jeito",
    challenge: "Rotinas dependiam de pessoas, sem padrão entre obra e escritório e com retrabalho constante.",
    action: "Mapeamos o fluxo real de cada área, desenhamos o processo ideal e definimos responsáveis e rotinas.",
    result: "Processos documentados, equipe alinhada e base pronta para implantar o sistema.",
  },
  {
    Icon: MonitorCheck,
    tag: "Implantação do Sienge",
    title: "ERP contratado, mas pouco usado",
    challenge: "O sistema existia, porém compras e financeiro seguiam fora dele, com alçadas informais.",
    action: "Treinamento, capacitação e acompanhamento lado a lado, com alçadas de aprovação e fluxo de suprimentos configurados.",
    result: "Compras e financeiro rodando dentro do Sienge, com controle e rastreabilidade de ponta a ponta.",
  },
  {
    Icon: Building2,
    tag: "R.G.O. e R.G.R.",
    title: "Sem visão do resultado de cada obra",
    challenge: "A diretoria só enxergava o resultado do empreendimento depois que o prazo já tinha passado.",
    action: "Implantamos o Resultado Geral de Obra e a Reunião Geral de Resultado como ritual mensal da liderança.",
    result: "Decisão com dado atualizado, metas acompanhadas e cobrança clara por responsável.",
  },
  {
    Icon: LineChart,
    tag: "Dashboards e Power BI",
    title: "Informação espalhada em planilhas",
    challenge: "Cada gestor tinha a sua planilha e os números nunca batiam na reunião.",
    action: "Consolidamos os dados do ERP em indicadores no Power BI, com uma única fonte da verdade.",
    result: "Painéis gerenciais únicos para a diretoria decidir com segurança.",
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-cream py-16 text-ink md:py-24">
      <div className="container-nid">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Cases</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Do problema ao resultado.</h2>
          <p className="mt-3 text-[13px] leading-relaxed text-ink/65">Situações típicas que a NID resolve em construtoras de pequeno e médio porte.</p>
        </Reveal>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2">
          {CASES.map(({ Icon, tag, title, challenge, action, result }, i) => (
            <li key={tag}><Reveal delay={i * 0.06} className="h-full group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.4)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-gold transition group-hover:bg-gold group-hover:text-ink">
                  <Icon size={18} />
                </span>
                <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold-dark">{tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold leading-snug">{title}</h3>
              <dl className="mt-3 space-y-2.5 text-[12px] leading-relaxed">
                <Row k="Desafio" v={challenge} />
                <Row k="O que a NID fez" v={action} />
                <Row k="Resultado" v={result} strong />
              </dl>
            </Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className={`grid grid-cols-[88px_1fr] gap-2 ${strong ? "rounded-lg bg-gold/15 p-2.5 -mx-1" : ""}`}>
      <dt className="font-display text-[9px] font-extrabold uppercase tracking-wider text-ink/65">{k}</dt>
      <dd className={strong ? "font-semibold text-ink" : "text-ink/70"}>{v}</dd>
    </div>
  );
}
