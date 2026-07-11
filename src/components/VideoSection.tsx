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
    <section className="bg-zinc-950 text-white relative overflow-hidden">
      <ContainerScroll className="py-20 lg:py-0">
        <ContainerSticky className="flex flex-col items-center justify-center">
          
          {/* Text Content that fades/moves on scroll */}
          <ContainerAnimated
            inputRange={[0, 0.15]}
            outputRange={[30, 0]}
            className="text-center z-20 px-4 mb-10 mt-10 md:mt-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Every Second Counts. <br />
              <span className="text-red-500">Drive Responsibly.</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto font-medium">
              Join our mission to eliminate avoidable road fatalities. 
              Watch our campaign to understand the fatal consequences of reckless driving.
            </p>
          </ContainerAnimated>
          
          {/* Video Container that scales up on scroll */}
          <div className="w-full max-w-6xl px-4 md:px-8 relative z-10 flex flex-col items-center pb-20 md:pb-32">
             <HeroVideo
               src="https://www.youtube.com/embed/xDc9BqJLBRw?autoplay=1&mute=1&loop=1&playlist=xDc9BqJLBRw&controls=0&modestbranding=1&playsinline=1&rel=0"
               title="Road Safety Campaign"
             />
          </div>

        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}
