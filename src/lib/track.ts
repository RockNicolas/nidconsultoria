/* Eventos de conversão: enviam ao Google Analytics (se NEXT_PUBLIC_GA_ID estiver definido) */
declare global {
  interface Window {
    gtag?: (...a: unknown[]) => void;
  }
}
export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", event, params);
}
