import { Reveal } from "./Reveal";

const CARDS = [
  { t: "Visão", d: "Ser uma empresa reconhecida no mercado, com alto índice de satisfação e criação de valor para as organizações dos nossos clientes." },
  { t: "Missão", d: "Oferecer um serviço de alta qualidade para pequenas e médias empresas, com atendimento diferenciado e busca incessante por resultados e satisfação do cliente." },
  { t: "Valores", d: "Compromisso com a ética, integridade e respeito ao nosso cliente e à sociedade." },
];

export function Mission() {
  return (
    <section className="bg-cream py-16 text-ink md:py-24">
      <div className="container-nid">
        <Reveal><p className="eyebrow">Visão · Missão · Valores</p></Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border-t-[3px] border-gold bg-white p-6 shadow-[0_6px_24px_-14px_rgba(20,24,31,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(20,24,31,0.22)]">
                <h3 className="text-base font-extrabold">{c.t}</h3>
                <p className="mt-3 text-[12.5px] leading-relaxed text-ink/60">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
