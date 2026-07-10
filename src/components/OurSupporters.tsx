"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const supporters = [
  {
    name: "Regen Ortho Sport",
    logo: "https://regenorthosport.in/wp-content/uploads/2024/08/REGENERATIVE-CENTER-e1724405723936.png",
    category: "Healthcare",
    useImg: false,
  },
  {
    name: "Brihaspathi Technologies",
    logo: "https://www.brihaspathi.com/_next/image?url=%2Fhighbtlogo-tm-1.png&w=256&q=75",
    category: "Technology",
    useImg: true,
  },
  {
    name: "Sri Datta Institute",
    logo: "https://www.sreedattha.ac.in/assets/images/sreedattha-college-logo.png",
    category: "Education",
    useImg: false,
  },
  {
    name: "Harsha Toyota",
    logo: "https://www.harshatoyota.com/images/logo.png",
    category: "Automotive",
    useImg: false,
  },
  {
    name: "Community Partner",
    logo: "/WhatsApp Image 2026-07-08 at 10.10.43 PM.jpeg",
    category: "Community",
    useImg: false,
    isLocal: true,
  },
  {
    name: "Orchids International School",
    logo: "https://www.orchidsinternationalschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheaderLogoNew.824ca5ca.webp&w=256&q=85&dpl=dpl_3fYNPAPy3MnbpN6HfGpFJYJjAJPJ",
    category: "Education",
    useImg: true,
  },
];

const row1 = [...supporters, ...supporters];
const row2 = [...supporters].reverse().concat([...supporters].reverse());

function LogoCard({ s }: { s: typeof supporters[0] }) {
  return (
    <div className="group relative flex-shrink-0 mx-3">
      <div className="relative flex flex-col items-center justify-center gap-3 w-52 h-28 bg-white rounded-2xl border border-zinc-100 shadow-sm px-5 transition-all duration-300 group-hover:shadow-xl group-hover:border-zinc-200 group-hover:-translate-y-1 overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="relative flex items-center justify-center w-full h-14 z-10">
          {s.useImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={s.logo}
              alt={s.name}
              className="max-h-12 max-w-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <Image
              src={s.logo}
              alt={s.name}
              fill
              sizes="176px"
              className="object-contain px-3 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          )}
        </div>
        <p className="text-[11px] font-bold text-zinc-400 group-hover:text-zinc-600 text-center leading-tight tracking-wide transition-colors duration-300 z-10 truncate w-full">
          {s.name}
        </p>
      </div>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
        <span className="bg-zinc-900 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap shadow-lg">
          {s.category}
        </span>
      </div>
    </div>
  );
}

export function OurSupporters() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-zinc-50 border-t border-zinc-100 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 text-center mb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.18em] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Our Supporters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 leading-tight">
            Backed by <span className="text-red-600">Leaders</span> Who{" "}
            <span className="text-blue-700">Believe</span> in Safer Roads.
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto leading-relaxed">
            These organisations and institutions stand alongside Sri Harsha Foundation — united in the mission to end preventable road tragedies across India.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden mb-4">
        <div className="flex w-max" style={{ animation: "marquee-left 28s linear infinite" }}>
          {row1.map((s, i) => <LogoCard key={i} s={s} />)}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max" style={{ animation: "marquee-right 32s linear infinite" }}>
          {row2.map((s, i) => <LogoCard key={i} s={s} />)}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center mt-12"
      >
        <p className="text-sm text-zinc-400 mb-4 font-medium">Want to support our cause?</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-black px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Become a Supporter
          <span className="text-emerald-400">→</span>
        </a>
      </motion.div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .flex:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
