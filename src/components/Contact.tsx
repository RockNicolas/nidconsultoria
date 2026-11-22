"use client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { track } from "@/lib/track";

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
  "w-full rounded-lg border border-black/10 bg-cream/60 px-3 py-2.5 text-[13px] text-ink outline-none placeholder:text-ink/65 transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/30";

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const data = Object.fromEntries(f.entries()) as Record<string, string>;
    setState("sending");
    setErr("");
    try {
      const r = await fetch("/api/contato", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || "Falha no envio.");
      track("generate_lead");
      form.reset();
      setState("done");
    } catch (error) {
      // fallback: abre o WhatsApp com a mensagem pronta
      const msg = [
        "Olá! Gostaria de solicitar um diagnóstico.",
        `Nome: ${data.nome}`,
        `Empresa: ${data.empresa}`,
        `WhatsApp: ${data.whatsapp}`,
        `E-mail: ${data.email}`,
        `Desafio: ${data.mensagem}`,
      ].join("\n");
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      setErr(error instanceof Error ? error.message : "Falha no envio.");
      setState("error");
    }
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
                    <span className="block text-[9px] text-white/65">{l}</span>
                    <span className="block break-all text-[13px] font-semibold">{v}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={22} className="text-gold" aria-hidden />
              <p className="text-[11px] leading-tight text-white/70"><span className="block font-display text-base font-extrabold text-white">10 anos</span>de experiência em construtoras</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/img/apex-leader.webp" alt="Selo APEX NID Leader 2.0" width={417} height={355} className="h-11 w-auto rounded-md bg-white/5 object-contain" />
              <Image src="/img/apex-summit.webp" alt="Selo APEX Summit 2.0" width={415} height={415} className="h-11 w-auto rounded-md bg-white/5 object-contain" />
            </div>
            <p className="w-full text-[10px] text-white/65">Especialistas em implantação do ERP Sienge</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} aria-busy={state === "sending"} className="relative rounded-2xl bg-white p-5 text-ink shadow-2xl sm:p-7">
            <h3 className="text-base font-extrabold">Solicite um diagnóstico</h3>
            <p className="mt-0.5 text-[10px] text-ink/65">Retornamos em até 1 dia útil.</p>
            <input name="site" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <input aria-label="Seu nome" name="nome" required placeholder="Seu nome" autoComplete="name" className={input} />
              <input aria-label="Empresa" name="empresa" placeholder="Empresa" autoComplete="organization" className={input} />
              <input aria-label="WhatsApp" name="whatsapp" required placeholder="WhatsApp" inputMode="tel" autoComplete="tel" className={input} />
              <input aria-label="E-mail" name="email" type="email" placeholder="E-mail" autoComplete="email" className={input} />
              <textarea aria-label="Desafio" name="mensagem" rows={4} placeholder="Conte um pouco sobre o seu desafio..." className={`${input} resize-none sm:col-span-2`} />
            </div>
            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-4 w-full rounded-lg bg-gold py-3 text-[13px] font-bold text-ink transition hover:brightness-110 disabled:opacity-60"
            >
              {state === "sending" ? "Enviando..." : "Enviar mensagem +"}
            </button>
            {state === "done" && <p role="status" className="mt-3 text-center text-[12px] font-semibold text-emerald-700">Mensagem enviada! Retornamos em até 1 dia útil.</p>}
            {state === "error" && <p role="alert" className="mt-3 text-center text-[11px] text-ink/60">{err} Abrimos o WhatsApp com a sua mensagem para você enviar por lá.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
