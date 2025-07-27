"use client";

import PartnerLogos from "../ui/PartnerLogos";

export function Partners() {
  return (
    <section className="md:pt-32 pt-24 md:pb-0 pb-12">
      <div className="text-center mb-16 sm:px-0 px-4">
        <h2 className="text-center text-grey text-[24px] leading-[1.2] md:text-xl font-medium">
          Partnered with worldwide leading companies
        </h2>
      </div>
      <PartnerLogos />
    </section>
  );
}
