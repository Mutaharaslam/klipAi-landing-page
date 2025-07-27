import Image from "next/image";

// Data for your feature cards
const featureCards = [
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
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <span className="inline-block bg-[#D9F0E1] text-[#222] text-sm font-semibold px-3 py-1 rounded-full mb-4">
            BENEFIT
          </span>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end">
            <h2 className="text-black text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-0">
              Say goodbye to
              <br className="hidden md:block" /> Wallet Addresses.
            </h2>
            <p className="text-black text-base font-medium max-w-md md:text-right">
              Just enter the handle, select your token, and confirm. No
              copy-paste. No errors. No friction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-0 bg-dark3
                overflow-hidden flex flex-col items-center justify-center text-center
                min-h-[320px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px]
                ${
                  index === 0
                    ? "lg:row-span-2 lg:col-span-1 min-h-[600px] md:pt-0 pt-5"
                    : ""
                }
              `}
            >
              <div
                className={`relative w-full h-full ${
                  index === 0 ? "md:h-full h-[600px]" : "h-full"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.placeholder}
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  priority={index < 1} // Prioritize first few images for LCP
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
