import Image from "next/image";
import React from "react";

// You can replace these with your actual image paths
const desktopImageUrl = "/images/ai-graphic.webp";
const mobileImageUrl = "/images/ai-graphicmobile.webp";
const leftcardAiUrl = "/images/left-card-ai.webp";
const rightCardAiUrl = "/images/ai-right-card.webp";

const AiAssistant: React.FC = () => {
  return (
    <div
      id="ai-agent"
      className="bg-black bg-[url('/images/green-layyerd-bg.webp')] bg-cover md:bg-center bg-right overflow-hidden"
    >
      <div className="relative container mx-auto py-18 md:py-16 flex flex-col items-center text-center">
        {/* --- Text Content --- */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-bold relative text-center text-4xl xl:text-5xl lg:leading-none text-white md:mb-7 mb-4">
            Meet Your AI
            <br className="hidden md:block" /> Agent
          </h2>
          <h3 className="lg:text-[32px] md:text-[24px] text-[17px] leading-[1.2] font-medium text-primary md:mb-7 mb-4">
            Your personal financial assistant built into your wallet.
          </h3>
          <p className="lg:text-[16px] md:text-[14px] text-[12px] leading-[1.5] font-normal text-white mb-0">
            The KlipAI Agent Explains Your Spending, Shows Insights, And Helps
            You Use Crypto Smarter.
          </p>
        </div>

        {/* Image Section --- */}
        <div className="flex md:flex-row flex-col-reverse relative z-10 mt-16 w-full md:items-start items-center justify-center">
          {/* Green glow effect */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-green-500/30 blur-[150px] md:blur-[200px] rounded-full"
            style={{ filter: "blur(100px)" }}
          ></div>
          {/* Green glow effect */}
          <div
            className="absolute lg:block hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-green-500/20 blur-[150px] md:blur-[200px] rounded-full"
            style={{ filter: "blur(100px)" }}
          ></div>
          {/* Left Card */}
          <div className="relative group transform -translate-x-1 top-6 lg:min-w-[250px] min-w-[200px] min-h-[300px]">
            <Image
              src={leftcardAiUrl}
              alt="Crypto Card"
              className=" object-contain group-hover:scale-95 transition-transform duration-300"
              fill
            />
          </div>

          {/* Center Image */}
          <div className="relative group lg:block hidden xl:min-w-[664px] min-w-[530px] min-h-[495px]">
            <Image
              src={desktopImageUrl}
              alt="AI Agent Dashboard"
              className="object-contain group-hover:-translate-y-2 transition-transform duration-300"
              fill
            />
          </div>
          {/*Center Mobile Image */}
          <div className="relative lg:hidden block md:min-w-[340px] min-w-[293px] min-h-[450px]">
            <Image
              src={mobileImageUrl}
              alt="AI Agent Dashboard"
              className="object-contain"
              fill
              priority
            />
          </div>

          {/* Right Card */}
          <div className="relative group md:block hidden transform top-6 md:translate-x-1 lg:min-w-[250px] min-w-[200px] min-h-[300px]">
            <Image
              src={rightCardAiUrl}
              alt="Crypto Card"
              className="object-contain group-hover:scale-95 transition-transform duration-300"
              fill
            />
          </div>
          <div
            className="absolute md:hidden black bottom-0 left-1/2 -translate-x-1/2 -translate-y-0 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-green-500/70 blur-[150px] md:blur-[200px] rounded-full"
            style={{ filter: "blur(100px)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
