import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Essence } from "@/components/Essence";
import { History } from "@/components/History";
import { Services } from "@/components/Services";
import { Banner } from "@/components/Banner";
import { Method } from "@/components/Method";
import { ActuationMap } from "@/components/ActuationMap";
import { Clients } from "@/components/Clients";
import { Mission } from "@/components/Mission";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Essence />
        <History />
        <Services />
        <Banner />
        <Method />
        <ActuationMap />
        <Clients />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
