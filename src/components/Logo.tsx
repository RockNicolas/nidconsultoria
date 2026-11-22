import Image from "next/image";

export function Logo({ className = "", withText = true }: { className?: string; withText?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image src="/img/nid-logo-white.png" alt="NID" width={520} height={287} priority className="h-7 w-auto sm:h-8" />
      {withText && (
        <span className="hidden border-l border-white/10 pl-3 font-display text-[7px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-white/70 sm:block">
          Consultoria em
          <br />
          Processos Empresariais
        </span>
      )}
    </span>
  );
}
