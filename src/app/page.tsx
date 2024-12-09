import HeroSection from "@/src/components/HeroSection";
import ServiceBar from "@/src/components/ServiceBar";
import DernierCollection from "@/src/components/DernierCollection";
import AppelezNousMaintenant from "@/src/components/AppelezNousMaintenant";
import AiderlesIndividus from "@/src/components/AiderlesIndividus";
import ParcourezLeGamme from "@/src/components/ParcourezLeGamme";
import OfrireMeilleurService from "@/src/components/OfrireMeilleurService";
import AppelezNouTwo from "@/src/components/AppelezNouTwo";
import DisentNosClients from "@/src/components/DisentNosClients";
import JoignezVous from "@/src/components/JoignezVous";
import NosBlog from "@/src/components/NosBlog";

export default function HomePage() {
  return (
    <div >
      <HeroSection />
      <ServiceBar/>
      <DernierCollection/>
      <AppelezNousMaintenant/>
      <ParcourezLeGamme/>
      <OfrireMeilleurService/>
      <AiderlesIndividus/>
      <AppelezNouTwo/>
      <DisentNosClients/>
      <NosBlog/>
      <JoignezVous/>

    </div>     
    
  );
}
