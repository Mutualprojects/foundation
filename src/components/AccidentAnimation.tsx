"use client"

/**
 * AccidentAnimation
 * ------------------
 * A scroll-driven cinematic sequence built around a single idea:
 * the skid marks left at the moment of impact are the same marks
 * that spell out the warning. The road writes its own headline.
 *
 * Design tokens
 *  Color   asphalt #0b0b0d · dusk #201621 · warn #e8402c · amber #ffb020 · bone #f3ede2 · steel #7a7f8c
 *  Type    display: font-black uppercase tracking-tight (swap in "Archivo Black" / "Bebas Neue" if available)
 *          body: font-medium, steel/bone
 *  Motion  four chapters — approach, tension, impact, message — driven by one scroll progress value
 *
 * No photographic crash imagery is used here on purpose: real accident photography
 * reads as graphic/exploitative for a PSA, and stock "crash" photos are usually
 * staged anyway. Everything below is bespoke vector + code, which also means it's
 * infinitely restylable — swap the palette in one place (CSS vars) and it re-themes.
 *
 * Drop-in requirements: framer-motion. No other deps.
 */

import * as React from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion"

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

const TOKENS = {
  asphalt: "#ffffff",
  dusk: "#fafafa",
  warn: "#e11d48", // Rose-600 for a more premium red
  amber: "#f59e0b",
  bone: "#09090b", // Deep zinc-950 for primary text
  steel: "#71717a", // Zinc-500 for secondary text
}

// Real figure, WHO Global Status Report on Road Safety 2023 / CDC (2021 data)
const ANNUAL_DEATHS = 1_190_000

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

/** A low-poly car silhouette, drawn as a single path so it can take a gradient fill. */
function CarSilhouette({
  flip = false,
  glow,
  className = "",
}: {
  flip?: boolean
  glow: "amber" | "red"
  className?: string
}) {
  const gradId = React.useId()
  const glowColor = glow === "amber" ? TOKENS.amber : TOKENS.warn
  return (
    <svg
      viewBox="0 0 200 70"
      width="220"
      height="77"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined, overflow: "visible" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3d45" />
          <stop offset="55%" stopColor="#1c1d21" />
          <stop offset="100%" stopColor="#0c0c0e" />
        </linearGradient>
      </defs>
      {/* ground glow under the light */}
      <ellipse cx={flip ? 168 : 32} cy="60" rx="34" ry="7" fill={glowColor} opacity="0.35" />
      {/* body */}
      <path
        d="M8,58 L8,50 Q8,42 18,40 L38,36 Q52,20 78,18 L132,18 Q150,18 158,32 L172,40 Q188,42 190,54 L190,58 Z"
        fill={`url(#${gradId})`}
        stroke="#000"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* window band */}
      <path
        d="M55,34 Q66,22 82,21 L124,21 Q136,21 143,32 Z"
        fill="#0a0a0c"
        opacity="0.9"
      />
      {/* light */}
      <rect x={flip ? 4 : 178} y="44" width="14" height="7" rx="2" fill={glowColor} />
      {/* wheels */}
      <circle cx="48" cy="59" r="11" fill="#050506" stroke="#2c2e33" strokeWidth="3" />
      <circle cx="152" cy="59" r="11" fill="#050506" stroke="#2c2e33" strokeWidth="3" />
    </svg>
  )
}

/** Ambient speed lines that stream past during the approach/tension chapters. */
function SpeedLines({ opacity }: { opacity: MotionValue<number> }) {
  const lines = React.useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        top: 8 + i * 8.5,
        delay: (i % 5) * 0.15,
        width: 60 + ((i * 37) % 120),
        dir: i % 2 === 0 ? 1 : -1,
      })),
    []
  )
  return (
    <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      {lines.map((l, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            top: `${l.top}%`,
            left: l.dir > 0 ? "-20%" : "auto",
            right: l.dir < 0 ? "-20%" : "auto",
            width: l.width,
            background: `linear-gradient(${l.dir > 0 ? "90deg" : "270deg"}, transparent, ${TOKENS.steel}, transparent)`,
          }}
          animate={{ x: l.dir > 0 ? ["0%", "700%"] : ["0%", "-700%"] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: "linear",
            delay: l.delay,
          }}
        />
      ))}
    </motion.div>
  )
}

/** Glass shards that burst outward at the moment of impact. */
function GlassBurst({ impact }: { impact: MotionValue<number> }) {
  const shards = React.useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => {
        const angle = (i / 16) * Math.PI * 2 + (i % 3) * 0.2
        return {
          id: i,
          angle,
          dist: 90 + ((i * 53) % 140),
          size: 6 + ((i * 17) % 16),
          rot: ((i * 47) % 360) - 180,
        }
      }),
    []
  )
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {shards.map((s) => {
        const x = useTransform(impact, [0, 1], [0, Math.cos(s.angle) * s.dist])
        const y = useTransform(impact, [0, 1], [0, Math.sin(s.angle) * s.dist * 0.6 - 20])
        const rotate = useTransform(impact, [0, 1], [0, s.rot])
        const opacity = useTransform(impact, [0, 0.15, 0.8, 1], [0, 1, 1, 0])
        const scale = useTransform(impact, [0, 0.2, 1], [0.3, 1, 0.6])
        return (
          <motion.span
            key={s.id}
            className="absolute"
            style={{
              width: s.size,
              height: s.size * 1.6,
              background: `linear-gradient(135deg, ${TOKENS.bone}, ${TOKENS.steel})`,
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              x,
              y,
              rotate,
              opacity,
              scale,
            }}
          />
        )
      })}
    </div>
  )
}

/** Skid marks that etch across the road at impact — later becomes the visual rhyme for the headline. */
function SkidMarks({ draw }: { draw: MotionValue<number> }) {
  const leftOffset = useTransform(draw, [0, 1], [1, 0])
  const rightOffset = useTransform(draw, [0, 1], [1, 0])
  return (
    <svg
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      className="absolute left-0 right-0 bottom-[30%] w-full h-24 pointer-events-none"
    >
      <motion.path
        d="M120,90 C300,70 380,100 460,60 C520,32 560,50 600,40"
        fill="none"
        stroke="#000"
        strokeOpacity="0.55"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength={1}
        style={{ pathOffset: 0, strokeDasharray: 1, strokeDashoffset: leftOffset }}
      />
      <motion.path
        d="M880,90 C700,70 620,100 540,60 C480,32 440,50 400,40"
        fill="none"
        stroke="#000"
        strokeOpacity="0.55"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength={1}
        style={{ pathOffset: 0, strokeDasharray: 1, strokeDashoffset: rightOffset }}
      />
    </svg>
  )
}

/** Highway centre-line as a scroll progress rail — the structural device is literal: it's the road. */
function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  const scaleY = useSpring(progress, { stiffness: 120, damping: 26, mass: 0.4 })
  return (
    <div className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 h-[45vh] w-px z-20 hidden sm:block">
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(${TOKENS.steel} 0 10px, transparent 10px 20px)`,
          opacity: 0.35,
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-px origin-top h-full"
        style={{
          scaleY,
          background: `repeating-linear-gradient(${TOKENS.amber} 0 10px, transparent 10px 20px)`,
        }}
      />
    </div>
  )
}

function StatCounter({ impactProgress }: { impactProgress: MotionValue<number> }) {
  const [display, setDisplay] = React.useState("0")
  useMotionValueEvent(impactProgress, "change", (v) => {
    const clamped = Math.min(1, Math.max(0, v))
    setDisplay(Math.round(clamped * ANNUAL_DEATHS).toLocaleString("en-US"))
  })
  return <span>{display}</span>
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function AccidentAnimation() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const p = useSpring(scrollYProgress, { stiffness: 220, damping: 34, mass: 0.5 })

  // ---- Chapter map --------------------------------------------------
  // 0.00–0.32  approach   cars enter from opposite edges, world is dusk-lit
  // 0.32–0.47  tension    closing distance, color drains toward warning red
  // 0.47–0.52  impact     flash, shake, glass burst, skid marks etch
  // 0.52–0.68  aftermath  fade to black, embers die, stat counts up
  // 0.68–1.00  message    headline resolves, CTA settles
  // ---------------------------------------------------------------------

  const leftCarX = useTransform(p, [0, 0.47], ["-120vw", "-4%"])
  const rightCarX = useTransform(p, [0, 0.47], ["120vw", "4%"])
  const carScale = useTransform(p, [0, 0.3, 0.47], [0.7, 0.92, 1])
  const carBlur = useTransform(p, [0, 0.25, 0.42], [6, 2, 0])
  const carFilter = useTransform(carBlur, (b) => `blur(${b}px)`)

  const shakeSeed = useTransform(p, [0.47, 0.485, 0.5, 0.515, 0.53], [0, -10, 8, -5, 0])
  const carsOpacity = useTransform(p, [0.56, 0.66], [1, 0])
  const impact = useTransform(p, [0.47, 0.53], [0, 1])
  const skidDraw = useTransform(p, [0.49, 0.62], [0, 1])

  const speedLineOpacity = useTransform(p, [0, 0.1, 0.4, 0.47], [0, 0.7, 0.9, 0])
  const flashOpacity = useTransform(p, [0.465, 0.5, 0.56], [0, 0.9, 0])

  const skyColor = useTransform(
    p,
    [0, 0.32, 0.47, 0.5, 0.62, 1],
    [TOKENS.dusk, TOKENS.dusk, "#fee2e2", "#fecaca", TOKENS.asphalt, TOKENS.asphalt]
  )
  const vignette = useTransform(p, [0.5, 0.65], [0, 0.55])

  const headlineOpacity = useTransform(p, [0.66, 0.72], [0, 1])
  const headlineY = useTransform(p, [0.66, 0.74], [24, 0])
  const statOpacity = useTransform(p, [0.55, 0.62, 0.9, 1], [0, 1, 1, 0.4])
  const statCountProgress = useTransform(p, [0.55, 0.66], [0, 1])
  const ctaOpacity = useTransform(p, [0.86, 0.94], [0, 1])
  const introOpacity = useTransform(p, [0, 0.06, 0.28, 0.36], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative w-full h-[400vh]">
      <ProgressRail progress={p} />

      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center"
        style={{ backgroundColor: skyColor, x: shakeSeed }}
      >
        {/* horizon glow */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, rgba(255,176,32,0.08), transparent 60%)`,
          }}
        />

        {/* road surface */}
        <div className="absolute bottom-0 inset-x-0 h-[38%]" style={{ background: `linear-gradient(180deg, transparent, ${TOKENS.asphalt})` }}>
          <div
            className="absolute inset-x-0 top-1/2 h-1"
            style={{
              background: `repeating-linear-gradient(90deg, ${TOKENS.bone} 0 40px, transparent 40px 80px)`,
              opacity: 0.25,
            }}
          />
        </div>

        <SpeedLines opacity={speedLineOpacity} />
        <SkidMarks draw={skidDraw} />

        {/* intro line */}
        <motion.p
          className="absolute top-[14%] text-center px-6 text-sm md:text-base tracking-[0.25em] uppercase font-medium"
          style={{ opacity: introOpacity, color: TOKENS.steel }}
        >
          One life is lost to a road crash every 26 seconds
        </motion.p>

        {/* cars */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute"
            style={{
              x: leftCarX,
              scale: carScale,
              filter: carFilter,
              opacity: carsOpacity,
            }}
          >
            <CarSilhouette glow="amber" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{
              x: rightCarX,
              scale: carScale,
              filter: carFilter,
              opacity: carsOpacity,
            }}
          >
            <CarSilhouette glow="red" flip />
          </motion.div>
          <GlassBurst impact={impact} />
        </div>

        {/* impact flash */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: TOKENS.warn, opacity: flashOpacity }}
        />
        {/* vignette for aftermath */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: vignette,
            background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #e4e4e7 100%)",
          }}
        />

        {/* message */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
          <motion.h2
            className="font-black uppercase leading-[0.92] tracking-tighter"
            style={{
              opacity: headlineOpacity,
              y: headlineY,
              color: TOKENS.bone,
              fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            }}
          >
            Speed thrills.
            <br />
            <span style={{ color: TOKENS.warn }}>It also kills.</span>
          </motion.h2>

          <motion.div
            className="mt-8 flex flex-col items-center gap-1"
            style={{ opacity: statOpacity }}
          >
            <span
              className="font-black tabular-nums"
              style={{ color: TOKENS.amber, fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              <StatCounter impactProgress={statCountProgress} />
            </span>
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase" style={{ color: TOKENS.steel }}>
              lives lost worldwide, every year — WHO, 2023
            </span>
          </motion.div>

          <motion.p
            className="mt-6 text-base md:text-lg font-medium max-w-xl"
            style={{ opacity: ctaOpacity, color: TOKENS.steel }}
          >
            A split second of distraction or a few extra km/h is all it takes.
            Slow down. Arrive.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default AccidentAnimation