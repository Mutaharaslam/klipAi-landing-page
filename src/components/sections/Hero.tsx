import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center relative">
        <div className="absolute md:block hidden bg-linear-(--green-gradiant) w-[866px]  h-[615px] bg-[] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full blur-[600px]"></div>
        {/* Title */}
        <h1 className="font-bold relative text-center text-4xl xl:text-5xl lg:leading-none  text-black mb-4">
          AI receipts.
          <br className="block md:hidden" /> Simple crypto.
          <br />
          Smart control.
        </h1>
        <div className="flex md:flex-col flex-col-reverse items-center md:gap-0 gap-24">
          <div className="flex flex-col items-center">
            {/* Desc */}
            <p className="text-center relative text-base leading-normal font-normal text-black mx-auto mb-6.5">
              Klip is Your All-In-One Decentralized Wallet
              <br className="hidden md:block" />
              Designed For Security, Flexibility, And Full Ownership.
            </p>

            {/* CTA Button */}
            <button
              rel="noopener noreferrer"
              className="relative max-w-53 cursor-pointer w-full px-2 pb-1 h-14 flex items-center justify-center text-center rounded-full xl:text-sm text-sm font-normal hover:text-red-btn text-dark transition-all duration-300 overflow-hidden group bg-primary-light"
            >
              <span className="relative z-10 flex flex-row gap-4 items-center mt-1">
                GET STARTED{" "}
                <span className="relative translate-x-0 group-hover:translate-x-3 group-hover:scale-[1.6]  transition-transform">
                  <ArrowRight className="text-black w-3.5 h-3.5" />
                </span>
              </span>

              <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:-translate-x-full"></span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:translate-x-full"></span>
            </button>
          </div>

          {/* Hero Image + Blobs */}
          <div className="relative w-full flex justify-center md:items-center items-start md:mt-2 mt-8 max-w-4xl">
            {/* green blob background */}
            <div className="absolute left-1/2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-0 w-[340px] h-[340px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px]">
              <Image
                src="/images/green-blob.webp"
                alt="Green blob background"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* phone image */}
            <div className="relative md:top-14 top-6 z-10 w-[300px] h-[420px] md:w-[340px] md:h-[520px] lg:w-[590px] lg:h-[600px]">
              <Image
                src="/images/phone-tilt.webp"
                alt="KlipAI Wallet Phone"
                fill
                className="object-contain hidden md:block"
                priority
              />
              <Image
                src="/images/phone-tilt-mobile.webp"
                alt="KlipAI Wallet Phone"
                fill
                className="object-contain block md:hidden"
                priority
              />
            </div>
            {/* Left floating card */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 min-w-[246px]">
              <div className="flex items-center rounded-full backdrop-blur-[25px] bg-glass-effect border-light3 px-4 py-3.5 shadow-lg  border border-solid">
                <div className="flex flex-col items-start">
                  <span className="text-light2 text-lg font-inter  font-semibold leading-[1.2]">
                    $2,951.73
                  </span>
                  <span className="text-black text-lg font-inter  font-normal leading-[1.2]">
                    APL 17
                  </span>
                </div>
                <div className="flex flex-col items-end ml-6">
                  <span className="text-light2 text-lg font-inter  font-semibold leading-[1.2]">
                    Apollo
                  </span>
                  <span className="text-black text-lg font-inter  font-normal leading-[1.22]">
                    APL
                  </span>
                </div>
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 ml-2">
                  <Image
                    src="/icons/sparkle.svg"
                    alt="Apollo Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
            {/* Right floating card */}
            <div className="absolute right-0 top-2/3 -translate-y-1/2 z-20  min-w-[267px]">
              <div className="flex items-center rounded-full backdrop-blur-[25px] bg-glass-effect border-light3 px-4 py-3.5 shadow-lg  border border-solid">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mr-2">
                  <Image
                    src="/icons/start.svg"
                    alt="Apollo Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-start mr-2">
                  <span className="text-light2 text-lg font-inter  font-semibold leading-[1.2]">
                    Romulus
                  </span>
                  <span className="text-black text-lg font-inter  font-normal leading-[1.2]">
                    RLS
                  </span>
                </div>
                <div className="flex flex-col items-end ml-auto">
                  <span className="text-light2 text-lg font-inter  font-semibold leading-[1.2]">
                    $3,271.20
                  </span>
                  <span className="text-black text-lg font-inter  font-normal leading-[1.22]">
                    RLS 24
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
