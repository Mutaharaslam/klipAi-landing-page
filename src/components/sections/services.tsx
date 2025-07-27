"use client";
import React from "react";
import { ServiceCard } from "../ui/ServiceCard";
import { ServiceFeature } from "@/types/services";

const features: ServiceFeature[] = [
  {
    title: "Build a Smarter Dashboard with Personalized Widgets",
    description:
      "Tailor Your Experience By Adding, Removing, Or Rearranging Widgets. Track Only What Matters",
    imageUrl: "/images/build-smarter.webp",
    alt: "Personalized crypto dashboard",
  },
  {
    title: "Efficient, Protected, and Hassle-Free Payments",
    description:
      "Transactions Are Executed Instantly With Top-Grade Security-No Delays, No Hidden Fees.",
    imageUrl: "/images/effiecent-protected.webp",
    alt: "Secure crypto payment withdrawal screen",
  },
  {
    title: "Secure Your Crypto with Smart Protection",
    description:
      "Customize Security Settings, Enable Alerts, And Monitor Activity. Stay Safe And In Control.",
    imageUrl: "/images/scrure-crypto.webp",
    alt: "Fingerprint security icon",
  },
  {
    title: "Instant, Smart, and Effortless AI Receipts",
    description:
      "Get Automatic Receipts Generated In Real-Time Organized, Accurate, And Ready When You Are.",
    imageUrl: "/images/instant-smart.webp",
    alt: "Crypto price chart analysis",
  },
];

const ServiceFeatures: React.FC = () => {
  return (
    <div className="bg-white text-white min-h-screen font-sans">
      <div className="container-responsive mx-auto md:px-5 px-4 py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold relative text-center text-4xl xl:text-5xl lg:leading-none text-black">
            Smarter, Safer, and <br /> Smoother Crypto
          </h2>
        </div>

        {/* Responsive Grid for Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              alt={feature.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
