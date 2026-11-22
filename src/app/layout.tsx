import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const SITE = "https://nidconsultoria.com.br";
const DESC =
  "Consultoria em processos empresariais para construtoras de pequeno e médio porte — do mapeamento de processos à implantação do Sienge e aos indicadores em Power BI. 10 anos de experiência.";

export const metadata: Metadata = {
  title: { default: "NIDconsultoria", template: "%s · NIDconsultoria" },
  description: DESC,
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  keywords: ["consultoria para construtoras", "implantação Sienge", "mapeamento de processos", "Power BI construção civil", "gestão de obras", "NID Consultoria"],
  openGraph: {
    title: "NID Consultoria — Processos organizados. Obras sob controle.",
    description: "Necessidade · Inovação · Domínio. 10 anos transformando a gestão de construtoras.",
    url: SITE,
    siteName: "NID Consultoria",
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image", title: "NID Consultoria", description: DESC },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14181f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NID Consultoria em Processos Empresariais",
  alternateName: "NIDconsultoria",
  url: SITE,
  logo: `${SITE}/icon.png`,
  description: DESC,
  slogan: "Necessidade · Inovação · Domínio",
  foundingDate: "2016",
  founder: { "@type": "Person", name: "Daniel Alves", jobTitle: "CEO" },
  telephone: "+55 11 99413-6060",
  email: "contato@nidconsultoria.com.br",
  sameAs: ["https://instagram.com/nidconsultoria"],
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: ["Mapeamento de processos", "Implantação do ERP Sienge", "Power BI", "Gestão técnica e financeira de construtoras", "BPO"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
      </body>
    </html>
  );
}
