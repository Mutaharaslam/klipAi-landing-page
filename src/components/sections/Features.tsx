import Image from "next/image";

import type { FeatureCard } from "@/types/ui";

// Data for your feature cards
const featureCards: FeatureCard[] = [
  {
    placeholder: "Token Support",
    image: "/images/card1.webp",
  },
  {
    placeholder: "Token Support",
    image: "/images/card2.webp",
  },
  {
    placeholder: "Token Support",
    image: "/images/card3.webp",
  },
  {
    placeholder: "Token Support",
    image: "/images/card4.webp",
  },
  {
    placeholder: "Token Support",
    image: "/images/card5.webp",
  },
];

export default function Features() {
  return (
    <section id="send-klapai" className="scroll-mt-24 bg-white py-8 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 md:mb-16 xl:mb-22">
          <span
            className="flex items-center justify-center  bg-primary-light2 
          text-black text-base font-bold text px-3 py-1 h-[40px] max-w-[96px]
           rounded-full border border-primary-dark2 sm:mb-8 mb-4"
          >
            BENEFIT
          </span>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start">
            <h2 className="font-bold relative text-left text-4xl xl:text-5xl lg:leading-none  text-black md:mb-0 mb-3">
              Say goodbye to
              <br className="hidden md:block" /> Wallet Addresses.
            </h2>
            <p className="text-black sm:text-base text-xs  sm:leading-normal leading-none font-normal max-w-xs text-black text-left">
              Just enter the handle, select your token, and confirm. No
              copy-paste. No errors. No friction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 relative">
          <div className="absolute block bg-linear-(--green-gradiant2) sm:w-[466px] sm:h-[415px] w-[366px] h-[315px] md:-left-1/12 -left-[40px] md:top-0 -top-[100px] z-0 rounded-full blur-[200px]"></div>
          {featureCards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-0 bg-dark3
                overflow-hidden flex flex-col items-center justify-center text-center
                min-h-[320px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px]
                ${
                  index === 0
                    ? "lg:row-span-2 lg:col-span-1 min-h-[600px] md:pt-4 pt-8"
                    : ""
                }
              `}
            >
              <div
                className={`relative w-full h-full group ${
                  index === 0 ? "md:h-full h-[600px]" : "h-full"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.placeholder}
                  fill
                  className="object-contain group-hover:scale-105 transition-all duration-300"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  priority={true} // Prioritize first few images for LCP
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
