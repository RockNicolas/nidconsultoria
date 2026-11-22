import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Essence } from "@/components/Essence";
import { History } from "@/components/History";
import { Services } from "@/components/Services";
import { Banner } from "@/components/Banner";
import { Method } from "@/components/Method";
import { ActuationMap } from "@/components/ActuationMap";
import { Cases } from "@/components/Cases";
import { Clients } from "@/components/Clients";
import { Mission } from "@/components/Mission";
import { Contact } from "@/components/Contact";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink">Pular para o conteúdo</a>
      <ScrollProgress />
      <Header />
      <main id="conteudo">
        <Hero />
        <Essence />
        <History />
        <Services />
        <Banner />
        <Method />
        <ActuationMap />
        <Cases />
        <Clients />
        <Mission />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
