"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* Foto e chevrons do hero (imagens oficiais da apresentação NID).
   O conjunto fica limitado a 1680px e centralizado, para não esticar a foto em telas ultrawide. */
export function HeroArt() {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 70]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#2b3344_0%,#1a1f29_50%,#14181f_85%)]" />

      <div className="absolute inset-0 mx-auto max-w-[1680px]">
        {/* foto: multiplicada sobre painel azul-acinzentado, com fade nas bordas */}
        <div
          className="absolute inset-y-0 right-0 w-[92%] bg-[#98a1b8] sm:w-[75%] md:w-[58%] 2xl:w-[52%]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, #000 38%, #000 88%, transparent 100%), linear-gradient(180deg, #000 70%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(90deg, transparent 0%, #000 38%, #000 88%, transparent 100%), linear-gradient(180deg, #000 70%, transparent 100%)",
            maskComposite: "intersect",
            opacity: 0.9,
          }}
        >
                    <motion.img style={{ y }} initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} src="/img/hero-man.jpg" alt="" className="h-[112%] w-full object-cover object-[70%_top] mix-blend-multiply" />
        </div>

        {/* chevrons dourados */}
        <motion.svg
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-1/2 h-auto w-20 -translate-y-1/2 opacity-[0.14] sm:w-28 lg:w-[110px] lg:opacity-100 xl:w-[130px] 2xl:w-[150px]"
          viewBox="0 0 260 520"
        >
          <path d="M0 0h70l190 260L70 520H0l150-260z" fill="#f0b323" />
          <path d="M0 150h46l90 110-90 110H0l66-110z" fill="#f0b323" opacity="0.28" />
        </motion.svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
