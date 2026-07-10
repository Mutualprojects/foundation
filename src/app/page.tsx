"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Shield, Users, AlertTriangle, HeartPulse, Bike, ShieldAlert, HeartHandshake, Milestone, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";
import founderImage from "./home_images/WhatsApp Image 2026-07-08 at 8.05.24 AM.jpeg";
import bannerSlide1 from "./home_images/banner/ChatGPT Image Jul 10, 2026, 01_24_47 AM.png";
import { OurPride } from "@/components/OurPride";

const slides = [
  {
    id: 0,
    eyebrow: "Sri Harsha Foundation",
    heading: "SPEED THRILLS,",
    accent: "BUT KILLS.",
    sub: "Every 4 minutes, India loses a life to a road accident. We are on a mission to save our youth, educate drivers, and build safer roads for a responsible tomorrow.",
    cta1: { label: "Join Our Movement", href: "/campaign" },
    cta2: { label: "Learn Safety Rules", href: "/safety" },
    image: bannerSlide1,
    bgFrom: "from-red-800", bgTo: "to-rose-950",
    accentCls: "text-amber-300",
    badge: "bg-red-500/30 border-red-400/40 text-red-100",
    icon: AlertTriangle,
    stat: { v: "1.35M", l: "Road deaths globally every year" },
  },
  {
    id: 1,
    eyebrow: "#STOPSPEED Campaign",
    heading: "PLEDGE TO",
    accent: "DRIVE SAFE.",
    sub: "Our #STOPSPEED campaign has united thousands of bikers, celebrities, and citizens across India — all pledging to put lives before speed.",
    cta1: { label: "Support #STOPSPEED", href: "/stopspeed" },
    cta2: { label: "Our Events", href: "/events" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=90&fit=crop",
    bgFrom: "from-zinc-900", bgTo: "to-slate-900",
    accentCls: "text-emerald-400",
    badge: "bg-emerald-600/30 border-emerald-400/40 text-emerald-100",
    icon: Bike,
    stat: { v: "10,000+", l: "Pledges taken across India" },
  },
  {
    id: 2,
    eyebrow: "Our Founder's Story",
    heading: "FROM GRIEF",
    accent: "TO PURPOSE.",
    sub: "Miss Himabindu Reddy lost her son to a road accident. She turned her pain into a national mission — so no mother ever endures the same loss.",
    cta1: { label: "Read Her Story", href: "/about" },
    cta2: { label: "Our Mission", href: "/mission" },
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&q=90&fit=crop",
    bgFrom: "from-emerald-900", bgTo: "to-teal-950",
    accentCls: "text-amber-300",
    badge: "bg-amber-500/30 border-amber-400/40 text-amber-100",
    icon: HeartPulse,
    stat: { v: "8+", l: "Years of saving lives on the road" },
  },
  {
    id: 3,
    eyebrow: "Youth Awareness Drive",
    heading: "EDUCATE TODAY,",
    accent: "SAVE TOMORROW.",
    sub: "We conduct road safety workshops across schools and colleges in Telangana & Andhra Pradesh — empowering young drivers before they hit the road.",
    cta1: { label: "Our Programs", href: "/programs" },
    cta2: { label: "Get Involved", href: "/volunteer" },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=90&fit=crop",
    bgFrom: "from-blue-900", bgTo: "to-indigo-950",
    accentCls: "text-sky-300",
    badge: "bg-sky-500/30 border-sky-400/40 text-sky-100",
    icon: Users,
    stat: { v: "25,000+", l: "Students educated on road safety" },
  },
  {
    id: 4,
    eyebrow: "Safer Roads for All",
    heading: "TOGETHER WE",
    accent: "BUILD CHANGE.",
    sub: "From rallies to legislation, from social media to on-ground drives — Sri Harsha Foundation fights every day for safer roads across India.",
    cta1: { label: "Donate Now", href: "/donate" },
    cta2: { label: "See Our Impact", href: "/impact" },
    image: "https://images.unsplash.com/photo-1596276122653-651a3898309f?w=900&q=90&fit=crop",
    bgFrom: "from-violet-900", bgTo: "to-purple-950",
    accentCls: "text-violet-300",
    badge: "bg-violet-500/30 border-violet-400/40 text-violet-100",
    icon: Shield,
    stat: { v: "500+", l: "Road safety events conducted" },
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yFounder = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCur(p => (p + 1) % slides.length); }, 4000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => { setDir(i > cur ? 1 : -1); setCur(i); };
  const prev = () => { setDir(-1); setCur(p => (p - 1 + slides.length) % slides.length); };
  const next = () => { setDir(1); setCur(p => (p + 1) % slides.length); };

  const s = slides[cur];
  const SIcon = s.icon;

  const contentV = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 28 : -28 }),
    center: { opacity: 1, y: 0 },
    exit:  (d: number) => ({ opacity: 0, y: d > 0 ? -28 : 28 }),
  };

  return (
    <div className="flex flex-col flex-1 bg-white" ref={containerRef}>

      {/* ── Split Hero Carousel — 100vh ──────────────────────── */}
      <section className="relative w-full h-[calc(100vh-7rem)] flex flex-col lg:flex-row overflow-hidden">

        {/* LEFT: brand-colored content panel */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={s.id + "-panel"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className={`relative w-full lg:w-[48%] h-1/2 lg:h-full bg-gradient-to-br ${s.bgFrom} ${s.bgTo} flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 overflow-hidden`}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.04] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/[0.03] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            {/* Big watermark number */}
            <span className="absolute bottom-4 right-6 text-[7rem] font-black text-white/[0.05] leading-none select-none pointer-events-none">
              {String(cur + 1).padStart(2, "0")}
            </span>

            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={s.id + "-content"}
                custom={dir}
                variants={contentV}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-md"
              >
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${s.badge} backdrop-blur-sm`}>
                  <SIcon className="w-3 h-3" />
                  {s.eyebrow}
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.93] mb-4">
                  {s.heading}
                  <br />
                  <span className={s.accentCls}>{s.accent}</span>
                </h1>

                {/* Thin divider */}
                <div className="w-12 h-[3px] bg-white/25 rounded-full mb-4" />

                {/* Sub */}
                <p className="text-sm sm:text-base text-white/75 font-medium leading-relaxed mb-6 max-w-sm">
                  {s.sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-2.5 mb-7">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link href={s.cta1.href} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-zinc-900 shadow-xl hover:bg-zinc-50 transition-all">
                      {s.cta1.label}
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link href={s.cta2.href} className="inline-flex items-center justify-center rounded-full border-2 border-white/35 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 hover:border-white transition-all">
                      {s.cta2.label}
                    </Link>
                  </motion.div>
                </div>

                {/* Stat */}
                <div className="inline-flex items-baseline gap-3 bg-black/20 backdrop-blur-sm border border-white/15 px-5 py-3 rounded-xl">
                  <span className="text-3xl font-black text-white">{s.stat.v}</span>
                  <span className="text-xs font-medium text-white/65 max-w-[130px] leading-snug">{s.stat.l}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Counter + dots — bottom bar */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 text-white/50 text-xs font-bold">
                <span className="text-white font-black text-base">{String(cur + 1).padStart(2, "0")}</span>
                <span>/ {String(slides.length).padStart(2, "0")}</span>
              </div>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === cur ? "bg-white w-6 h-2.5" : "bg-white/30 hover:bg-white/55 w-2.5 h-2.5"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT: photo with Ken-Burns transition */}
        <div className="relative w-full lg:w-[52%] h-1/2 lg:h-full overflow-hidden bg-zinc-900">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={s.id + "-img"}
              initial={{ opacity: 0, scale: 1.07 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={s.image}
                alt={s.eyebrow}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/15" />
            </motion.div>
          </AnimatePresence>

          {/* Arrow nav */}
          <div className="absolute bottom-5 right-5 flex gap-2 z-10">
            <button onClick={prev} aria-label="Previous"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 transition-all backdrop-blur-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 transition-all backdrop-blur-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          key={cur + "-bar"}
          className="absolute bottom-0 left-0 h-[3px] bg-white/60 z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </section>

      {/* Heart of Our Mission Section */}
      <section className="relative w-full py-12 lg:py-16 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-[10px]">
          
          {/* Main Headline (Brand Colors: Red and Blue warnings) */}
          <div className="max-w-[90%] mb-8 lg:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">THE HEART OF OUR MISSION</span>
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl text-zinc-900 leading-tight mt-3">
              Turning profound personal <span className="text-red-600">grief</span> into a <span className="text-blue-600">national movement</span> for safer roads.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            
            {/* Left Column: Premium Visual Wrapper (Portrait of Himabindu Reddy) */}
            <motion.div
              className="lg:col-span-5 flex items-center justify-center"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full max-w-sm">
                {/* Decorative background element for premium feel */}
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2.5rem] transform rotate-3 pointer-events-none" />
                
                <motion.div 
                  className="relative w-full overflow-hidden rounded-3xl bg-white shadow-2xl border border-zinc-100"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={founderImage}
                      alt="Miss Himabindu Reddy - Founder"
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: The Founder's Journey */}
            <motion.div
              className="lg:col-span-7 flex flex-col space-y-6 lg:pl-6"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black text-zinc-900">Miss Himabindu Reddy</span>
                <span className="text-base font-bold text-emerald-600 mt-1">Founder, Sri Harsha Foundation</span>
              </div>

              <div className="text-lg text-zinc-700 space-y-4 leading-relaxed font-medium">
                <p>
                  When a devastating road accident tragically took her son's life, Miss Himabindu Reddy chose a path of deep resilience. Instead of surrendering to grief, she transformed her personal loss into a life-saving mission for the entire nation. She realized that awareness, advocacy, and a change in driving culture are the ultimate weapons against reckless habits on the road.
                </p>
                <p>
                  To ensure that no other family has to endure the lifelong pain of a preventable tragedy, she established the Sri Harsha Foundation. Her vision is unyielding: to establish a society where anyone who steps behind the wheel drives with an absolute, unwavering sense of personal responsibility.
                </p>
              </div>

              {/* Styled Pull Quote (10px padding, 5px margin as requested) */}
              <div className="relative pl-6 py-4 px-[10px] my-6 border-l-4 border-emerald-500 bg-zinc-100/50 rounded-r-xl">
                <p className="text-xl text-zinc-800 leading-relaxed font-bold italic">
                  &ldquo;Our mission is simple yet vital: to protect our youth, to educate drivers, and to ensure that every journey ends with a safe return home.&rdquo;
                </p>
                <p className="text-sm font-bold text-zinc-500 mt-2">— Miss Himabindu Reddy</p>
              </div>
            </motion.div>

          </div>


          {/* Signature Action Callout Card (10px padding, 5px margin as requested) */}
          <div className="mt-10 bg-white border border-zinc-100 py-6 px-[10px] rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
            <div className="flex flex-col space-y-1">
              <h4 className="text-xl font-black text-zinc-900">Miss Himabindu Reddy</h4>
              <p className="text-sm font-semibold text-zinc-400">Founder, Sri Harsha Foundation</p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
              className="w-full md:w-auto"
            >
              <Link
                href="/stopspeed"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-red-600 px-[15px] py-[10px] text-base font-bold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 transition-colors"
              >
                Support the #STOPSPEED Movement
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* What Our Founder Said Video Section */}
      <section className="relative w-full py-12 lg:py-16 bg-white border-t border-zinc-100 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-[10px]">
          
          {/* Section Heading */}
          <div className="max-w-[90%] mb-8 lg:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">HEAR HER MESSAGE</span>
            <h2 className="text-3xl font-black sm:text-4xl text-zinc-900 leading-tight mt-3">
              What Our <span className="text-red-600">Founder</span> Said
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Responsive Facebook Video Embed (Autoplays when reached) */}
            <motion.div
              className="lg:col-span-6 flex justify-center items-center w-full"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-zinc-100 bg-black">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fsriharshafoundation2015%2Fvideos%2F998419757475591%2F&show_text=false&width=560&t=0&autoplay=1&mute=1" 
                  className="absolute inset-0 w-full h-full border-none overflow-hidden" 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Column: Video Description & Direct Message */}
            <motion.div
              className="lg:col-span-6 flex flex-col space-y-6 lg:pl-6"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl font-extrabold text-zinc-900 leading-snug">
                Spreading the Word of Safety
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                Hear directly from Miss Himabindu Reddy about the foundation's core vision, addressing the critical road safety measures necessary for today's youth. She outlines why a single moment of awareness is far better than a lifetime of regret, and why active education is essential to saving lives on the asphalt.
              </p>
              
              <div className="relative pl-4 py-2 border-l-4 border-emerald-500 bg-zinc-50 rounded-r-xl">
                <p className="text-base text-zinc-800 font-bold italic leading-relaxed">
                  &ldquo;Educating our youngsters is not just a safety measure, it is a duty to protect the future of our nation.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STOP SPEED Campaign Section — Full Editorial */}
      <section className="relative w-full bg-white border-t border-zinc-100 overflow-hidden">

        {/* Top: Article layout — text left, image grid right */}
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT — Article text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Source tag */}
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest">Road Safety Warriors</span>
                <span className="text-xs text-zinc-400 font-medium">Anisha Bhatia — December 11, 2017</span>
              </div>

              {/* Main headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 leading-[1.05]">
                A Road Accident Took Her Son's Life.{" "}
                <span className="text-red-600">She Is Now Fighting</span> For Safer Roads &amp;{" "}
                <span className="text-blue-700">Responsible Driving.</span>
              </h2>

              {/* Pull quote */}
              <blockquote className="relative border-l-4 border-red-500 pl-5 py-1">
                <p className="text-lg font-bold italic text-zinc-700 leading-relaxed">
                  &ldquo;It was not my son's fault. Within few minutes I lost my 19-year-old son forever.&rdquo;
                </p>
                <cite className="block mt-2 text-xs font-bold uppercase tracking-wider text-zinc-400 not-italic">— Himabindu Reddy, Founder · Sri Harsha Foundation</cite>
              </blockquote>

              {/* Body paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                <p>
                  In India, there is <strong className="text-zinc-800">one death every four minutes</strong> and some twenty children are killed every day due to road accidents. More than one million people have died in road accidents in India in the past decade — speeding and dangerous driving are the biggest reasons for road fatalities.
                </p>
                <p>
                  It's after this incident that <strong className="text-zinc-800">Mrs Himabindu Reddy</strong>, along with her husband and another son, decided to do something to prevent another person from losing a loved one due to unsafe roads. She started the <strong className="text-zinc-800">Sri Harsha Foundation</strong> — whose motive is to make sure that whosoever is behind the wheel is driving with responsibility.
                </p>
                <p>
                  The Foundation roped in the Hyderabad Jonathan Bike Rider Club to train drivers on how to drive carefully and what they need to keep in mind while driving. <strong className="text-zinc-800">Telugu Film Actor Naga Chaitanya</strong> also lent his support; he became the brand ambassador for the <span className="font-black text-red-600">#STOPSPEED</span> campaign.
                </p>
                <p>
                  A rally with <strong className="text-zinc-800">1,000 bikers</strong> along with Actor Naga Chaitanya was held in the city to promote safety, defensive and accident-free driving, and the importance of wearing helmets, seat belts and other safety gears.
                </p>
                <p className="text-xs text-zinc-400 italic">
                  Hyderabad Traffic Police reports 2,271 accidents in a single year — of which 371 were fatal. Keeping these grim figures in mind, Himabindu's organisation aims to reduce road accidents to zero.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Drunk Driving", "Road Accidents", "Road Safety", "Speed Driving", "Hyderabad"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-500 bg-zinc-50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — 3 NDTV images in masonry stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              {/* Image 1 — Himabindu portrait (large) */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://w.ndtvimg.com/sites/13/2016/12/21101228/himabindu-road-safety-hyderabad.jpg"
                  alt="Himabindu Reddy — Founder of Sri Harsha Foundation, Road Safety Activist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold text-white bg-red-600 px-2.5 py-1 rounded-full">Founder</span>
                  <p className="text-white font-black text-sm mt-1">Himabindu Reddy · Sri Harsha Foundation</p>
                </div>
              </motion.div>

              {/* Images 2 & 3 — side by side */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-52 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://w.ndtvimg.com/sites/13/2016/12/21070025/Road-Safety-Naga-Chitanya.jpg"
                    alt="Actor Naga Chaitanya supporting the Stop Speed road safety campaign"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded-full block w-fit mb-0.5">Brand Ambassador</span>
                    <p className="text-white font-black text-xs">Naga Chaitanya</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-52 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://w.ndtvimg.com/sites/13/2016/12/21072732/road-rally-for-road-safety-in-hyderabad.jpg"
                    alt="1000+ biker rally in Hyderabad for Stop Speed road safety campaign"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold text-white bg-emerald-600 px-2 py-0.5 rounded-full block w-fit mb-0.5">#STOPSPEED Rally</span>
                    <p className="text-white font-black text-xs">1,000+ Bikers · Hyderabad</p>
                  </div>
                </motion.div>
              </div>

              {/* Stat strip under images */}
              <div className="grid grid-cols-3 gap-3 mt-1">
                {[
                  { v: "1 in 4min", l: "Deaths on Indian roads" },
                  { v: "20/day", l: "Children killed in accidents" },
                  { v: "1M+", l: "Deaths in past decade" },
                ].map((st, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="bg-zinc-900 rounded-xl px-4 py-3 text-center"
                  >
                    <p className="text-white font-black text-lg leading-none">{st.v}</p>
                    <p className="text-zinc-400 text-[10px] mt-1 leading-snug">{st.l}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom: 3 thematic cards */}
        <div className="bg-zinc-50 border-t border-zinc-100">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

              <motion.div
                className="border border-zinc-100 bg-white py-7 px-6 rounded-3xl transition-all duration-300 hover:shadow-xl flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-base font-black text-zinc-900 leading-snug uppercase tracking-tight">
                  A Road Accident Took Her Son's Life
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                  Transforming absolute grief into national advocacy — so no other parent endures the same preventable loss.
                </p>
                <div className="pt-2 border-t border-zinc-100">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">The Turning Point</span>
                </div>
              </motion.div>

              <motion.div
                className="border border-zinc-100 bg-white py-7 px-6 rounded-3xl transition-all duration-300 hover:shadow-xl flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Milestone className="h-5 w-5" />
                </div>
                <h3 className="text-base font-black text-zinc-900 leading-snug uppercase tracking-tight">
                  Fighting for Safer Roads
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                  Partnering with traffic police, local authorities, and celebrities to redesign road safety culture across Hyderabad and beyond.
                </p>
                <div className="pt-2 border-t border-zinc-100">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">The Mission</span>
                </div>
              </motion.div>

              <motion.div
                className="border border-zinc-100 bg-white py-7 px-6 rounded-3xl transition-all duration-300 hover:shadow-xl flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-black text-zinc-900 leading-snug uppercase tracking-tight">
                  Responsible Driving
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                  Educating youth through workshops, rallies, and the #STOPSPEED campaign — targeting schools, colleges, and biker communities.
                </p>
                <div className="pt-2 border-t border-zinc-100">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">The Movement</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>


      {/* Our Pride Section */}
      <OurPride />
    </div>
  );
}
