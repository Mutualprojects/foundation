"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gauge, HeartHandshake, ShieldAlert, Milestone, UserCheck } from "lucide-react";
import heroImage from "./home_images/n.jpeg";
import founderImage from "./home_images/Neutral Beige Modern Minimalist Photo Instagram Post.png";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll translation for the images (parallax movement)
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yFounder = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div className="flex flex-col flex-1 bg-white" ref={containerRef}>
      {/* Split Hero Section */}
      <section className="relative w-full lg:min-h-[calc(100vh-7rem)] flex flex-col lg:flex-row-reverse">
        
        {/* Right Side: Full Image Centered and Fully Visible with Parallax */}
        <motion.div
          className="relative w-full h-[50vh] lg:h-[calc(100vh-7rem)] lg:w-1/2 flex items-center justify-center bg-zinc-50 border-l border-zinc-100 overflow-hidden"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="relative w-[90%] h-[90%] flex items-center justify-center overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={{ y }}
              className="absolute -top-[10%] left-0 right-0 w-full h-[120%] flex items-center justify-center"
            >
              <Image
                src={heroImage}
                alt="Road safety awareness: Speed thrills, but kills"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
          {/* Subtle overlay border for a premium framing effect */}
          <div className="absolute inset-0 border-l border-zinc-100 pointer-events-none" />
        </motion.div>

        {/* Left Side: Content Area (Slides in on Load/Scroll) */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-[10px] py-12 sm:py-16 lg:py-24 bg-white">
          <motion.div
            className="max-w-[90%] mx-auto lg:mx-0 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Heading (Increased Text Size, Solid Colors) */}
            <h1 className="text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.02] pt-4">
              SPEED THRILLS, <br />
              <span className="text-red-600">
                BUT KILLS.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-600 font-medium">
              A single moment of speed can cost a lifetime. We are on a mission to save our youth, educate drivers, and build safer roads for a responsible tomorrow.
            </p>

            {/* Action Buttons using Solid Colors with Hover Scaling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/campaign"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-emerald-600 px-[15px] py-[10px] text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700"
                >
                  Join Sriharsha Foundation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/safety"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-rose-600 px-[15px] py-[10px] text-base font-bold text-rose-600 transition-all duration-300 hover:bg-rose-50"
                >
                  Learn Safety Rules
                </Link>
              </motion.div>
            </div>

            {/* High-Fidelity Features with Lucide Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-100 pt-8 mt-4">
              
              {/* Feature 1: Be Responsible */}
              <div className="flex items-start gap-4 p-2 rounded-2xl transition-all duration-300 hover:bg-zinc-50/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
                  <Gauge className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-bold text-zinc-900">Be Responsible</h4>
                  <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">Keep speeds within prescribed limits.</p>
                </div>
              </div>

              {/* Feature 2: Protect Lives */}
              <div className="flex items-start gap-4 p-2 rounded-2xl transition-all duration-300 hover:bg-zinc-50/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-bold text-zinc-900">Protect Lives</h4>
                  <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">Pedestrians and youth are our priority.</p>
                </div>
              </div>

            </div>

          </motion.div>
        </div>

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
              <motion.div 
                className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl bg-white shadow-xl border border-zinc-100"
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={founderImage}
                  alt="Miss Himabindu Reddy - Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover rounded-2xl"
                />
              </motion.div>
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

      {/* STOP SPEED Campaign Section */}
      <section className="relative w-full py-12 lg:py-16 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-[10px]">
          
          {/* Headline & Description */}
          <div className="max-w-[90%] mb-8 lg:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">THE INITIATIVE</span>
            <h2 className="text-3xl font-black sm:text-4xl text-zinc-900 leading-tight mt-3">
              A road accident took her son's life. <br />
              She is now fighting for <span className="text-red-600">safer roads</span> & <span className="text-blue-600">responsible driving</span>.
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mt-4 font-medium">
              The STOP SPEED campaign is the initiative started to create awareness and educate youngsters about the deadly consequences of SPEED DRIVING.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
            
            {/* Card 1: Loss */}
            <motion.div 
              className="border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 py-6 px-[10px] rounded-3xl transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-zinc-900 leading-snug">
                  A ROAD ACCIDENT TOOK HER SON'S LIFE
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Transforming absolute grief into national advocacy to save other parents and families from suffering preventable loss.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Safer Roads */}
            <motion.div 
              className="border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 py-6 px-[10px] rounded-3xl transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Milestone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-zinc-900 leading-snug">
                  FIGHTING FOR SAFER ROADS
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Partnering with local planning authorities to redesign speed-prone corridors and implement protective infrastructure.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Responsible Driving */}
            <motion.div 
              className="border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 py-6 px-[10px] rounded-3xl transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-zinc-900 leading-snug">
                  RESPONSIBLE DRIVING
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Educating high school and college students on the direct mathematics of speed and driver responsibility.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
