"use client";
import { useState, type FormEvent } from "react";
import { Phone, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const WHATSAPP = "5511994136060";

const CHANNELS = [
  { Icon: Phone, l: "WhatsApp · Daniel Alves", v: "+55 11 99413-6060", href: `https://wa.me/${WHATSAPP}` },
  { Icon: Mail, l: "E-mail", v: "contato@nidconsultoria.com.br", href: "mailto:contato@nidconsultoria.com.br" },
  { Icon: Instagram, l: "Instagram", v: "@nidconsultoria", href: "https://instagram.com/nidconsultoria" },
];

const input =
  "w-full rounded-lg border border-black/10 bg-cream/60 px-3 py-2.5 text-[13px] text-ink outline-none placeholder:text-ink/40 transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/30";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Olá! Gostaria de solicitar um diagnóstico.",
      `Nome: ${f.get("nome")}`,
      `Empresa: ${f.get("empresa")}`,
      `WhatsApp: ${f.get("whatsapp")}`,
      `E-mail: ${f.get("email")}`,
      `Desafio: ${f.get("mensagem")}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <section id="contato" className="bg-ink-2 py-16 md:py-24">
      <div className="container-nid grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow !text-gold">Contato</p>
          <h2 className="mt-3 max-w-[14ch] text-3xl font-extrabold leading-tight sm:text-4xl">Vamos colocar a sua gestão sob domínio?</h2>
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/60">
            Converse com um consultor e receba um diagnóstico inicial dos processos da sua empresa.
          </p>
          <ul className="mt-7 space-y-4">
            {CHANNELS.map(({ Icon, l, v, href }) => (
              <li key={l}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-gold transition group-hover:bg-gold group-hover:text-ink">
                    <Icon size={15} />
                  </span>
                  <span>
                    <span className="block text-[9px] text-white/45">{l}</span>
                    <span className="block break-all text-[13px] font-semibold">{v}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-5 text-ink shadow-2xl sm:p-7">
            <h3 className="text-base font-extrabold">Solicite um diagnóstico</h3>
            <p className="mt-0.5 text-[10px] text-ink/45">Retornamos em até 1 dia útil.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <input name="nome" required placeholder="Seu nome" autoComplete="name" className={input} />
              <input name="empresa" placeholder="Empresa" autoComplete="organization" className={input} />
              <input name="whatsapp" required placeholder="WhatsApp" inputMode="tel" autoComplete="tel" className={input} />
              <input name="email" type="email" placeholder="E-mail" autoComplete="email" className={input} />
              <textarea name="mensagem" rows={4} placeholder="Conte um pouco sobre o seu desafio..." className={`${input} resize-none sm:col-span-2`} />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-gold py-3 text-[13px] font-bold text-ink transition hover:brightness-110"
            >
              Enviar mensagem +
            </button>
            {sent && <p role="status" className="mt-3 text-center text-[11px] text-ink/60">Abrimos o WhatsApp com a sua mensagem. Obrigado!</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
