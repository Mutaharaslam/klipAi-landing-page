import { Header } from "@/components/layout/Header";
import Features from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
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
      </main>
    </>
  );
}
