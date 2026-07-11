"use client"

import * as React from "react"
import {
  ContainerScroll,
  ContainerSticky,
  ContainerAnimated,
  HeroVideo,
} from "@/components/ContainerScroll"

export function VideoSection() {
  return (
    <section className="bg-white text-zinc-900 relative overflow-hidden">
      <ContainerScroll className="py-20 lg:py-0">
        <ContainerSticky className="flex flex-col items-center justify-center">
          
          {/* Text Content that fades/moves on scroll */}
          <ContainerAnimated
            inputRange={[0, 0.15]}
            outputRange={[30, 0]}
            className="text-center z-20 px-4 mb-10 mt-10 md:mt-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-zinc-900">
              Every Second Counts. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Drive Responsibly.</span>
            </h2>
            <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium tracking-tight">
              Join our mission to eliminate avoidable road fatalities. 
              Watch our campaign to understand the fatal consequences of reckless driving.
            </p>
          </ContainerAnimated>
          
          {/* Video Container that scales up on scroll */}
          <div className="w-full max-w-6xl px-4 md:px-8 relative z-10 flex flex-col items-center pb-20 md:pb-32">
             <HeroVideo
               src="https://www.youtube.com/embed/xDc9BqJLBRw?autoplay=1&mute=1&loop=1&playlist=xDc9BqJLBRw&controls=0&modestbranding=1&playsinline=1&rel=0"
               title="Road Safety Campaign"
               className="shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white"
             />
          </div>

        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}
