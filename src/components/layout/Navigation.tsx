"use client";
import Link from "next/link";
import { NavigationItem } from "@/types/nav";

const navLinks: NavigationItem[] = [
  { name: "What is KlipAi", href: "#what-is-klipai" },
  { name: "Send KlapAI", href: "#send-klapai" },
  { name: "AI Agent", href: "#ai-agent" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Web3", href: "#web3" },
];

export function Navigation({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <div className="relative flex md:flex-row flex-col items-center lg:gap-4 md:gap-3 gap-5">
      {navLinks.map((link) => {
  const isAnchor = link.href.startsWith('#');
  return isAnchor ? (
    <a
      key={link.name}
      href={link.href}
      className="lg:text-base md:text-sm text-base leading-[18px] font-normal text-light hover:text-primary transition-colors cursor-pointer"
      tabIndex={0}
      onClick={e => {
        e.preventDefault();
        const el = document.querySelector(link.href);
        if (el) {
          (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
        if (onItemClick) onItemClick();
      }}
    >
      {link.name}
    </a>
  ) : (
    <Link
      key={link.name}
      href={link.href}
      className="lg:text-base md:text-sm text-base leading-[18px] font-normal text-light hover:text-primary transition-colors"
      tabIndex={0}
      {...(onItemClick && {
        onClick: (e) => {
          onItemClick();
        },
      })}
    >
      {link.name}
    </Link>
  );
})}
    </div>
  );
}
