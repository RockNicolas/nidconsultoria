import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIDconsultoria",
  description:
    "Consultoria em processos empresariais para construtoras de pequeno e médio porte — do mapeamento de processos à implantação do Sienge e aos indicadores em Power BI.",
  metadataBase: new URL("https://nidconsultoria.com.br"),
  openGraph: {
    title: "NID Consultoria — Processos organizados. Obras sob controle.",
    description: "Necessidade · Inovação · Domínio. 10 anos transformando a gestão de construtoras.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#14181f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
