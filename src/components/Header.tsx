"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "h-20 bg-white/95 backdrop-blur-md shadow-md border-b border-zinc-100"
          : "h-28 bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-3 py-1">
          <div
            className={`relative overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-102 ${
              isScrolled ? "h-14 w-44" : "h-20 w-64"
            }`}
          >
            <Image
              src="/Sriharsha foundation logo.jpg (1).jpeg"
              alt="Sriharsha Foundation Logo"
              fill
              sizes="(max-width: 640px) 160px, 256px"
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-base font-semibold transition-colors duration-300 py-2 group ${
                isScrolled ? "text-zinc-600 hover:text-emerald-600" : "text-zinc-700 hover:text-emerald-600"
              }`}
            >
              {link.name}
              {/* Premium micro-dot or line animation */}
              <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-8" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/donate"
            className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-500 hover:bg-emerald-700 hover:shadow-emerald-200/50 hover:scale-103 active:scale-97 ${
              isScrolled ? "shadow-md" : "shadow-emerald-600/10"
            }`}
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-3 text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600 focus:outline-none transition-all duration-300"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              // Close Icon (X)
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Top-down Mobile Drawer Menu */}
      <div
        className={`absolute left-0 right-0 z-40 w-full bg-white border-b border-zinc-100 shadow-2xl transition-all duration-500 ease-in-out md:hidden ${
          isScrolled ? "top-20" : "top-28"
        } ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-12 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col space-y-3 px-6 py-10 sm:px-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-zinc-800 hover:text-emerald-600 transition-colors py-3.5 border-b border-zinc-50 last:border-0 flex items-center justify-between group"
              style={{
                transitionDelay: isOpen ? `${idx * 40}ms` : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(-15px)",
                opacity: isOpen ? 1 : 0,
                transitionProperty: "transform, opacity, color",
              }}
            >
              <span>{link.name}</span>
              <svg
                className="h-5 w-5 text-zinc-400 group-hover:text-emerald-600 transition-colors transform group-hover:translate-x-1.5 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
          <div
            className="pt-8"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 40}ms` : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(-15px)",
              opacity: isOpen ? 1 : 0,
              transitionProperty: "transform, opacity",
            }}
          >
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-emerald-700/30 transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop Blur Overlay for Mobile Drawer */}
      {isOpen && (
        <div
          className={`fixed inset-0 -z-10 bg-black/30 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
            isScrolled ? "top-20" : "top-28"
          }`}
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
