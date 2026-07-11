"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShieldCheck, Star } from "lucide-react"

export function CelebrityAwareness() {
  const ref = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={ref} className="relative w-full py-20 lg:py-32 bg-white overflow-hidden border-t border-zinc-100">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content (Takes ~25-30%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 w-full lg:w-[30%] xl:w-[25%] order-2 lg:order-1"
          >
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-[10px] font-black uppercase tracking-widest border border-red-100">
                <Star className="w-3.5 h-3.5 fill-red-700" />
                Celebrity Campaign
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-zinc-900 leading-[1.05] tracking-tighter">
              Star Power For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">
                Safer Roads.
              </span>
            </h2>

            <p className="text-base text-zinc-600 font-medium leading-relaxed">
              Superstars <strong className="text-zinc-900">Yash, Naga Chaitanya, and Akhil Akkineni</strong> have joined forces with the Sri Harsha Foundation. <em className="text-zinc-900 font-bold not-italic">Always wear a helmet and prioritize safety.</em>
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                "Wearing a helmet reduces fatal head injuries by 69%.",
                "Real heroes ride responsibly."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <p className="text-sm text-zinc-700 font-medium leading-tight">{text}</p>
                </div>
              ))}
            </div>
            
          </motion.div>

          {/* Right Image Content with Parallax (Takes ~70-75%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-[70%] xl:w-[75%] aspect-[16/9] lg:aspect-[21/9] xl:aspect-[3/1] rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200 order-1 lg:order-2"
          >
            <motion.div style={{ y: yImage }} className="absolute -inset-10">
              <Image 
                src="https://scontent.fhyd14-5.fna.fbcdn.net/v/t39.30808-6/311689595_488093176690754_3697653614969569936_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x396&ctp=s1200x396&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=uy0MRyHlvcYQ7kNvwFoCS6O&_nc_oc=AdoT0ZkJqvX7o9b7qVj6EeImdoEutPDQI1Z2s6VyXO2uq-iu0sS7wsIjDHekMaLg71tkab-mrSw_BXO_jVLNOAIm&_nc_zt=23&_nc_ht=scontent.fhyd14-5.fna&_nc_gid=meDlcIqZYWUjbNjo7kVj5g&_nc_ss=7b2a8&oh=00_AQABGaBG0WUMhn36rMN9X2chDPIZ4ayskz3Gm4HlxO7nrQ&oe=6A582F00"
                alt="Yash, Naga Chaitanya, and Akhil Akkineni promoting bike safety"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 75vw"
                quality={100}
                priority
              />
            </motion.div>

            {/* Gradient Overlay for HD presence */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50 text-sm font-black text-zinc-900 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                #STOPSPEED Campaign
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
