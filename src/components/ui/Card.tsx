"use client";
import Image from "next/image";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  showPlusIcon?: boolean;
  titleCenter?: boolean;
  title?: string;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      showPlusIcon = false,
      title,
      titleCenter = false,
      children,
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`relative rounded-[20px] p-0 bg-dark3
                overflow-hidden flex flex-col items-start justify-start text-center
                min-h-[320px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px] ${
                  className ?? ""
                }`}
      {...props}
    >
      {showPlusIcon && (
        <span className="absolute z-10 md:top-5 md:right-5 top-4 right-4 text-gray-300">
          <div className="flex group items-center justify-center relative w-9 h-9">
            <Image
              src="/icons/plus.svg"
              alt="plus"
              className="Object-contain group-hover:rotate-90 transition-transform duration-300"
              fill
              priority
            />
          </div>
        </span>
      )}
      {title && (
        <h2
          className={`text-[36px] font-normal mb-4 leading-none text-white mt-6 md:mt-8 ${
            titleCenter ? "text-center" : "text-left"
          }`}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  )
);

Card.displayName = "Card";
