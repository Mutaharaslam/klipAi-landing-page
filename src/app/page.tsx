import { Header } from "@/components/layout/Header";
import AiAssistant from "@/components/sections/AiAssitant";
import Features from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import RoundedSections from "@/components/sections/roundedSections";
import Services from "@/components/sections/services";
import { WhatIsKlip } from "@/components/sections/whatisKlip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsKlip />
        <Features />
        <Partners />
        <Services />
        <AiAssistant />
        <RoundedSections />
      </main> 
    </>
  );
}
