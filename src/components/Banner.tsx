"use client";
import { motion } from "framer-motion";

const WORDS = ["Pessoas", "+", "Processos", "=", "Resultados"];

export function Banner() {
  return (
    <section className="bg-gold py-10 text-ink md:py-14" aria-label="Pessoas mais processos igual a resultados">
      <div className="container-nid text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-ink/70 md:text-[10px]"
        >
          A equação é simples — porém extremamente importante
        </motion.p>
        <p className="mt-4 flex flex-col items-center gap-1 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl lg:flex-row lg:justify-center lg:gap-6 lg:text-5xl">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? "text-xl font-medium text-ink/65 lg:text-3xl" : ""}
            >
              {w}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
