// components/StackedSection.tsx
import Image from "next/image";
import { BottomCurved } from "../ui/BottomCurved";

// Data for your feature cards
const phones = [
  {
    placeholder: "Token Support",
    image: "/images/phone-1.webp",
  },
  {
    placeholder: "Token Support",
    image: "/images/phone-2.webp",
  },
  {
    placeholder: "Token Support",
    image: "/images/phone-3.webp",
  },
];

export default function RoundedSections() {
  return (
    <section className="p-0">
      {/* 1st */}
      <BottomCurved bgColor="#74F174" curveColor="white">
        <div className="container">
          <div className="flex items-center justify-center relative max-w-[420px] h-[860px] mx-auto">
            <Image
              src="/images/phone-1.webp"
              alt="phone-1"
              className="Object-contain"
              fill
              priority
            />
          </div>
        </div>
      </BottomCurved>
      {/* 2nd */}
      <BottomCurved bgColor="white" curveColor="#74F174">
        <div className="container">
          <div className="flex items-center justify-center relative max-w-[420px] h-[860px] mx-auto">
            <Image
              src="/images/phone-1.webp"
              alt="phone-1"
              className="Object-contain"
              fill
              priority
            />
          </div>
        </div>
      </BottomCurved>
      {/* 3rd */}
      <BottomCurved bgColor="#74F174" curveColor="white">
        <div className="container">
          <div className="flex items-center justify-center relative max-w-[420px] h-[860px] mx-auto">
            <Image
              src="/images/phone-1.webp"
              alt="phone-1"
              className="Object-contain"
              fill
              priority
            />
          </div>
        </div>
      </BottomCurved>
      <div className="container py-24">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-bold relative text-center text-4xl xl:text-5xl lg:leading-none text-black md:mb-7 mb-4">
            Trusted by Innovators
          </h2>
          <h3 className="lg:text-[32px] md:text-[24px] text-[17px] leading-[1.2] text-center font-medium text-primary md:mb-7 mb-4">
            Your personal financial assistant built into your wallet.
          </h3>
          <p className="lg:text-[16px] md:text-[14px] text-[12px] leading-[1.5] text-center font-normal text-black mb-0">
            Secure your digital assets with the peace of mind that comes from
            knowing you are protected by the best technology in the blockchain
            space.
          </p>
        </div>
      </div>
    </section>
  );
}
