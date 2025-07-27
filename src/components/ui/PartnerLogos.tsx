"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Logo } from "@/types/ui";

const logos: Logo[] = [
  { src: "/images/partner-logos/Logo5.webp", alt: "Company Logo 1" },
  { src: "/images/partner-logos/Logo2.webp", alt: "Company Logo 2" },
  { src: "/images/partner-logos/Logo3.webp", alt: "Company Logo 3" },
  { src: "/images/partner-logos/Logo4.webp", alt: "Company Logo 4" },
  { src: "/images/partner-logos/Logo5.webp", alt: "Company Logo 5" },
  { src: "/images/partner-logos/Logo2.webp", alt: "Company Logo 6" },
  { src: "/images/partner-logos/Logo3.webp", alt: "Company Logo 7" },
  { src: "/images/partner-logos/Logo4.webp", alt: "Company Logo 9" },
  { src: "/images/partner-logos/Logo5.webp", alt: "Company Logo 8" },
  { src: "/images/partner-logos/Logo5.webp", alt: "Company Logo 1" },
  { src: "/images/partner-logos/Logo2.webp", alt: "Company Logo 2" },
  { src: "/images/partner-logos/Logo3.webp", alt: "Company Logo 3" },
  { src: "/images/partner-logos/Logo4.webp", alt: "Company Logo 4" },
  { src: "/images/partner-logos/Logo5.webp", alt: "Company Logo 5" },
];


// I just made this with swiper just becuase it looks like sliding logos in figma
const PartnerLogos: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto px-0 max-w-[1600px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.8}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6.5,
              spaceBetween: 40,
            },
          }}
          className="w-full h-24 md:h-32 lg:h-40"
        >
          {logos.map((logo: Logo, index: number) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain max-w-[80%] max-h-[80%] opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerLogos;
