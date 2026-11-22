export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-2 py-6">
      <div className="container-nid flex flex-col items-center justify-between gap-2 text-center text-[10px] text-white/40 sm:flex-row sm:text-left">
        <p>© 2026 NID Consultoria em Processos Empresariais · nidconsultoria.com.br</p>
        <p className="font-display font-bold tracking-wider text-white">
          <span className="text-gold">N</span>ecessidade · <span className="text-gold">I</span>novação · <span className="text-gold">D</span>omínio
        </p>
      </div>
    </footer>
  );
}
