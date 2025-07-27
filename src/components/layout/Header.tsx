"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { IoClose } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false); // Close menu on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Handle menu slide shift to top while scroll
  React.useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
    } else if (showMenu) {
      const timeout = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen, showMenu]);

  return (
    <header
      className={`sticky container z-40 xs:w-full w-auto xs:ml-auto xs:mr-auto ml-4 mr-4 bg-black xl:px-26 lg:px-16 px-4 flex items-center justify-between lg:rounded-2xl md:rounded-2xl rounded-[7px] shadow-lg transition-all duration-300 ${
        scrolled
          ? "top-1 md:top-1 py-0.5 md:py-2.5 opacity-85"
          : "top-4 md:top-6 py-1.5 md:py-4 opacity-100"
      }`}
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <div className="relative w-[83px] h-[25px] md:w-[99px] md:h-[30px]">
        <Image
          fill
          src="/images/logo.webp"
          alt="Company Logo"
          className="object-contain"
          sizes="(max-width: 768px) 83px, 99px"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex" aria-label="Primary">
        <Navigation />
      </nav>

      <button
        rel="noopener noreferrer"
        className={`relative cursor-pointer max-w-27 w-full px-2 pb-1  ${scrolled ? 'h-10' : 'h-12' } hidden md:flex
         items-center justify-center text-center rounded-full xl:text-base text-sm font-semibold hover:text-red-btn 
        text-dark transition-all duration-300 overflow-hidden group bg-primary-light`}
      >
        <span className="relative z-10 mt-1">Login</span>
        <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:-translate-x-full"></span>
        <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:translate-x-full"></span>
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center p-2 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? (
          // Cross icon close menu
          <IoClose className="w-8 h-8 text-white" />
        ) : (
          // Hamburger menu
          <IoMenuOutline className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <nav
          id="mobile-menu"
          className={`fixed top-0 left-0 h-screen bg-black w-[80vw]  max-w-xs z-50 flex items-start justify-center shadow-2xl
            transition-transform duration-300 ${
              menuOpen ? " translate-x-0" : "-translate-x-[80vw]"
            }`}
          aria-label="Mobile Navigation"
        >
          <div
            className={`w-full flex flex-col justify-between items-center pt-8 transition-all duration-300 ease-out ${
              menuOpen
                ? "opacity-100 translate-x-0 animate-menu-side-in"
                : "opacity-0 -translate-x-full animate-menu-side-out"
            }`}
          >
            <div className="relative w-[150px] h-12 mb-8">
              <Image
                fill
                src="/images/logo.webp"
                alt="Company Logo"
                className="object-contain"
              />
            </div>
            {/* Navigation with close on click */}
            <Navigation onItemClick={() => setMenuOpen(false)} />
            <button
              rel="noopener noreferrer"
              className="relative w-40 cursor-pointer mt-6 px-2 pb-1 h-12 flex items-center justify-center text-center rounded-full xl:text-base text-sm font-semibold hover:text-red-btn text-dark transition-all duration-300 overflow-hidden group bg-primary-light"
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative z-10 mt-1">Login</span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:-translate-x-full"></span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:translate-x-full"></span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
