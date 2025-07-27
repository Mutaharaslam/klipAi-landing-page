import Image from "next/image";
import { ServiceCardProps } from "@/types/services";

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, alt }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div className="lg:py-[70px] md:py-[50px] sm:py-[32px] py-[25px] lg:px-[50px] md:px-[32px] px-[25px] text-center">
        <div className="relative w-full min-h-[280px] mb-6 sm:mb-10 md:mb-14 hover">
          <Image
            src={imageUrl}
            alt={alt}
            className="object-contain hover:scale-105 transition-all duration-300"
            fill
            priority
          />
        </div>
        <h3 className="lg:text-[32px] md:text-[24px] text-[17px] leading-[1.2] font-medium text-primary mb-3">
          {title}
        </h3>
        <p className="lg:text-[16px] md:text-[14px] text-[12px] leading-[1.5] font-normal text-white mb-0">
          {description}
        </p>
      </div>
    </div>
  );
};
