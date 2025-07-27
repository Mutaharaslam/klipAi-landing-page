import Image from "next/image";
import { Card } from "../ui";

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
          <div
            className="absolute block bg-linear-(--green-gradiant2) sm:w-[466px] sm:h-[415px] 
          w-[366px] h-[315px] md:-left-1/12 -left-[40px] md:top-0 -top-[100px] z-0 rounded-full blur-[200px]"
          ></div>
          {/* 1st Card */}
          <Card
            showPlusIcon
            className="relative min-h-[320px] md:min-h-[400px] lg:min-h-[500px]  xl:min-h-[600px]
             lg:row-span-2 lg:col-span-1 md:pt-4 pt-8 pb-16"
          >
            <div className="flex flex-col px-10 py-8 items-start justify-start">
              <div className="relative w-14 h-14 mb-4">
                <Image
                  src="/images/tocken-support-Icon.webp"
                  alt="tocken-support-Icon"
                  className="object-contain"
                  fill
                />
              </div>
              <h2 className="text-[36px] font-normal mb-4 text-left leading-none text-white">
                Tocken <br /> Support
              </h2>
            </div>
            <div className={`relative group w-full md:h-full h-[500px] z-10`}>
              <Image
                src="/images/iphone-mockup.webp"
                alt="iphone-mockup group-hover:scale-105 transition-transform duration-300"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-2 left-0 right-0 w-full h-[90px]">
              <Image
                src="/images/bars.webp"
                alt="bars"
                fill
                className="object-contain"
              />
            </div>
          </Card>
          {/* 2nd Card */}
          <Card title="Secure Transfers" className="px-8 pt-3 pb-8">
            <div className={`relative group w-full h-[260px]`}>
              <Image
                src="/images/credit-card.webp"
                alt="credit-card"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>
          {/* 3nd Card */}
          <Card showPlusIcon className="px-8 pt-18 pb-4">
            <div className={`relative group w-full h-[290px]`}>
              <Image
                src="/images/multicards.webp"
                alt="multicards"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>
          {/* 4th Card */}
          <Card
            showPlusIcon
            className="px-8 pt-12 pb-4 items-center justify-center"
          >
            <div className={`relative group w-full h-[310px]`}>
              <Image
                src="/images/balance-cards.webp"
                alt="card5"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>
          {/* 5th Card */}
          <Card
            showPlusIcon
            title="Unique Identity"
            titleCenter
            className="px-6 py-0 !items-center pb-0"
          >
            <div className="relative group w-full h-full -bottom-3">
              <Image
                src="/images/effiecent-protected.webp"
                alt="card5"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
