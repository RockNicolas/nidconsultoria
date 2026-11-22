import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", t: "Segurança", d: "Quem acessa, o quê, onde e quando. Perfis, permissões e LGPD." },
  { n: "02", t: "Apoio", d: "Base de dados unificada: empresas, obras, centros de custo e plano financeiro." },
  { n: "03", t: "Suprimentos", d: "Gestão de compras e contratos, medições e faturamento direto." },
  { n: "04", t: "Alçadas", d: "Aprovações com governança, rastreabilidade e redução de riscos." },
  { n: "05", t: "Decisão", d: "Custo real vs. orçado, cronograma físico-financeiro e rentabilidade." },
];

const PERKS = [
  { t: "Equipe especialista", d: "Mais de 15 anos em gestão técnica e financeira na construção civil." },
  { t: "Sem cobrança por hora", d: "Projeto fechado: nenhuma surpresa nas faturas mensais." },
  { t: "Retorno garantido", d: "Seu investimento na NID não é despesa — é resultado." },
  { t: "Seu sistema, sua decisão", d: "Nenhuma alteração no Sienge sem validação do cliente." },
  { t: "Conhecimento atualizado", d: "Consultores sempre em dia com o setor da construção." },
  { t: "Pessoas no centro", d: "Leitura comportamental para potencializar as equipes." },
];

export function Method() {
  return (
    <section id="metodo" className="bg-white py-16 text-ink md:py-24">
      <div className="container-nid">
        <Reveal>
          <p className="eyebrow">Método NID · Sistema ERP Sienge</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Do cadastro à decisão: a gestão inteira dentro do Sienge.
          </h2>
        </Reveal>

        {/* passos */}
        <ol className="relative mt-12 grid gap-0 md:grid-cols-5 md:gap-4">
          <span aria-hidden className="absolute left-[60px] right-[60px] top-5 hidden border-t border-dashed border-gold/70 md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <li className="relative flex gap-4 pb-6 md:block md:pb-0 md:text-center">
                {i < STEPS.length - 1 && (
                  <span aria-hidden className="absolute left-5 top-10 h-[calc(100%-1.5rem)] border-l border-dashed border-gold/70 md:hidden" />
                )}
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-gold bg-white font-display text-xs font-extrabold md:mx-auto">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-sm font-bold md:mt-3">{s.t}</h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-ink/65">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* diferenciais */}
        <div className="mt-12 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.06}>
              <div className="border-l-2 border-gold pl-3">
                <h3 className="text-[13px] font-bold">{p.t}</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-ink/65">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
