'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { FiArrowRight } from "react-icons/fi";


export function Hero() {
  const [leftIn, setLeftIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry]) => setLeftIn(entry?.isIntersecting ?? false),
      { threshold: 0.3 }
    );
    const rightObserver = new IntersectionObserver(
      ([entry]) => setRightIn(entry?.isIntersecting ?? false),
      { threshold: 0.3 }
    );
    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);
    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center relative">
        {/* A green light bg behide the hero content */}
        <div className="absolute md:block hidden bg-linear-(--green-gradiant) w-[866px]  h-[615px] bg-[] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full blur-[600px]"></div>
        {/* Title */}
        <h1 className="font-bold relative text-center text-4xl xl:text-5xl lg:leading-none  text-black mb-4">
          AI receipts.
          <br className="block md:hidden" /> Simple crypto.
          <br />
          Smart control.
        </h1>
        <div className="flex md:flex-col flex-col-reverse w-full items-center md:gap-0 gap-24">
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
                  <FiArrowRight className="text-black w-3.5 h-3.5" />
                </span>
              </span>

              <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:-translate-x-full"></span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:translate-x-full"></span>
            </button>
          </div>

          {/* Hero Image + Blobs */}
          <div className="relative w-full flex justify-center md:items-center items-start md:mt-2 mt-8 max-w-4xl">
            {/* green blob background */}
            <div className="absolute left-1/2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-0 w-[370px] h-[370px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px]">
              <Image
                src="/images/green-blob.webp"
                alt="Green blob background"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* phone image */}
            <div className="relative group md:top-14 top-6 z-10 w-[300px] h-[420px] md:w-[340px] md:h-[520px] lg:w-[590px] lg:h-[600px]">
              <Image
                src="/images/phone-tilt.webp"
                alt="KlipAI Wallet Phone"
                fill
                className="object-contain hidden md:block group-hover:scale-105 transition-transform duration-300"
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
            <div
              ref={leftRef}
              className={`absolute left-0 md:top-1/2 sm:top-[70px] top-[50px] md:-translate-y-1/2 sm:-translate-y-1/6 -translate-y-1/12 z-20 md:min-w-[246px] min-w-[130px] 
                transition-all duration-700 ease-out
                ${
                  leftIn
                    ? "opacity-100 md:translate-x-0 md:translate-y-0 translate-y-0"
                    : "opacity-0 md:-translate-x-16 md:translate-y-0 translate-y-16"
                }
              `}
            >
              <div className="flex items-center rounded-full backdrop-blur-[25px] bg-glass-effect border-light3 md:px-4 sm:px-3 px-2 md:py-3.5 sm:py-2.5 py-1.5 shadow-lg  border border-solid">
                <div className="flex flex-col items-start mr-3">
                  <span className="text-light2 md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-semibold leading-[1.2]">
                    $2,951.73
                  </span>
                  <span className="text-black md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-normal leading-[1.2]">
                    APL 17
                  </span>
                </div>
                <div className="flex flex-col items-end ml-auto">
                  <span className="text-light2 md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-semibold leading-[1.2]">
                    Apollo
                  </span>
                  <span className="text-black md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-normal leading-[1.22]">
                    APL
                  </span>
                </div>
                <div className="relative md:w-10 sm:w-8 w-6 md:h-10 sm:h-8 h-6  flex items-center justify-center flex-shrink-0 ml-2">
                  <Image
                    src="/icons/sparkle.svg"
                    alt="Apollo Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Right floating card */}
            <div
              ref={rightRef}
              className={`absolute right-0 top-2/3 -translate-y-1/2 z-20  md:min-w-[267px] min-w-[150px] 
                transition-all duration-700 ease-out
                ${
                  rightIn
                    ? "opacity-100 md:translate-x-0 md:translate-y-0 translate-y-0"
                    : "opacity-0 md:translate-x-16 md:translate-y-0 translate-y-16"
                }
              `}
            >
              <div className="flex items-center rounded-full backdrop-blur-[25px] bg-glass-effect border-light3 md:px-4 sm:px-3 px-2 md:py-3.5 sm:py-2.5 py-1.5 shadow-lg  border border-solid">
                <div className="relative md:w-10 sm:w-8 w-6 md:h-10 sm:h-8 h-6  flex items-center justify-center flex-shrink-0 mr-2">
                  <Image
                    src="/icons/start.svg"
                    alt="Apollo Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-start mr-2">
                  <span className="text-light2 md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-semibold leading-[1.2]">
                    Romulus
                  </span>
                  <span className="text-black md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-normal leading-[1.2]">
                    RLS
                  </span>
                </div>
                <div className="flex flex-col items-end ml-auto">
                  <span className="text-light2 md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-semibold leading-[1.2]">
                    $3,271.20
                  </span>
                  <span className="text-black md:text-lg sm:text-base xs:text-sm text-xs font-inter  font-normal leading-[1.22]">
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
