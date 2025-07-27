'use client';
import React from "react";
import Image from "next/image";

export function WhatIsKlip() {
  const imgRef = React.useRef<HTMLDivElement>(null);
  const [imgIn, setImgIn] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setImgIn(entry?.isIntersecting ?? false),
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-is-klipai" className="scroll-mt-24 w-auto py-12 md:py-20 bg-white rounded-lg border md:border-light4 border-transparent my-8 md:mx-[20px] mx-auto">
      <div className="grid grid-cols-12 items-center justify-center gap-0 md:gap-12 container px-4">
        {/* Left: Phone and cards */}
        <div className="relative lg:col-span-7 md:col-span-8 col-span-12 flex-shrink-0 overflow-hidden w-full flex items-end justify-center bg-light5 rounded-lg min-h-[471px] md:px-0 px-8 pt-16">
          <div
            ref={imgRef}
            className={`relative w-full flex items-end justify-center
              transition-all duration-700 ease-out
              ${imgIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            <Image
              src="/images/half-screen-mobile.webp"
              alt="KlipAI Phone"
              width={415}
              height={400}
              className="object-cover z-10 relative md:block hidden"
            />
            <Image
              src="/images/half-screen-mobile-smal.webp"
              alt="KlipAI Phone"
              width={300}
              height={200}
              className="object-cover z-10 relative md:hidden block"
            />
          </div>
          {/* Top card */}
          <div className="absolute md:top-20 top-14 md:-left-5 left-2 shadow-(--cards-shadow) rounded-lg bg-white flex items-center md:px-3 px-2 md:py-4 py-2.5 md:min-w-[300px] min-w-[200px] z-20 border border-none">
            <div className="flex relative items-center justify-center sm:w-10 w-7 sm:h-10 h-7 rounded-full -rotate-12">
              <Image
                src="/images/bitcoin-btc-logo.webp"
                alt="BTC"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-2 flex flex-col sm:gap-1 gap-0.5">
              <span className="font-semibold font-inter md:text-[17px] sm:text-base text-sm leadimg-none text-black">
                BTC / USDT
              </span>
              <span className="sm:text-[15px] text-xs text-dark2 font-medium leading-none">
                Bitcoin
              </span>
            </div>
            <div className="ml-auto flex flex-col items-end sm:gap-2 gap-0.5">
              <span className="font-semibold font-inter md:text-[17px] sm:text-base text-sm leadimg-none text-black">
                78,393
              </span>
              <span className="sm:text-[13px] text-[11px] text-primary font-medium leading-none">
                +4.23%
              </span>
            </div>
          </div>
          {/* Bottom card */}
          <div className="absolute bottom-1/6 -translate-y-1/4 right-2 md:-right-8 shadow-(--cards-shadow) rounded-lg bg-white flex items-center md:px-4 px-2 md:py-4 py-2.5 md:min-w-[270px] min-w-[200px] z-20 border border-none">
            <div className="flex relative items-center justify-center sm:w-10 w-7 sm:h-10 h-7 rounded-full ">
              <Image
                src="/images/Icon-bitcoin2.webp"
                alt="BTC"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-4 flex flex-col">
              <span className="font-semibold font-inter md:text-[17px] sm:text-base text-sm leadimg-none text-black">
                BTC / USDT
              </span>
              <span className="sm:text-[15px] text-xs text-dark2 font-medium leading-none">
                Bitcoin
              </span>
            </div>
          </div>
        </div>
        {/* Right: Text */}
        <div className="lg:col-span-5 md:col-span-4 col-span-12 flex-1 flex flex-col justify-center items-start lg:pl-12 mt-8 md:mt-0">
          <h2 className="font-bold relative text-center text-4xl xl:text-5xl lg:leading-none  text-black sm:mb-4 mb-2">
            What is KlipAi
          </h2>
          <p className="text-left relative sm:text-base text-xs  sm:leading-normal  leading-none font-normal text-black mb-2">
            KlipAi Is The All-In-One Smart Wallet Layer For Web3. We Turn Every
            Crypto Transaction Into A Clean, AI-Powered Receipt. You Can Also
            Send Tokens Using A Simple Username. No TX Hashes. No Wallet Address
            Mistakes. Just Clarity, Control, And Convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
