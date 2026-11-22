"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-ink-2/95 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]" : "bg-ink-2/80"}`}>
      <div className="container-nid flex h-16 items-center justify-between gap-4 xl:h-[68px]">
        <a href="#inicio" aria-label="NID Consultoria — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors hover:text-gold ${
                active === l.href ? "text-gold" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-md bg-gold px-4 py-2 text-[13px] font-bold text-ink transition hover:brightness-110"
          >
            Agende um diagnóstico
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="absolute inset-x-0 top-16 flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto border-t border-white/5 bg-ink-2 px-5 pb-6 pt-3 lg:hidden"
          aria-label="Menu móvel"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-base font-medium ${
                active === l.href ? "bg-white/5 text-gold" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-lg bg-gold px-4 py-3 text-center text-sm font-bold text-ink"
          >
            Agende um diagnóstico
          </a>
        </nav>
      )}
    </header>
  );
}
