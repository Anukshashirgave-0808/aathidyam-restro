"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const headline =
    "bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,165,0,0.4)]"

  const subHeadline =
    "bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,165,0,0.35)]"

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-x-hidden"
    >
      {/* Background */}
      <img
        src="/Banana-leaf.png"
        alt="Banana leaf background"
        className="
          absolute inset-x-0 bottom-0
          w-full h-[calc(100%-4rem)]
          object-cover
          z-0
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[calc(100%-4rem)] bg-black/65 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-16 overflow-visible">
        <div className={isLoaded ? "animate-fade-in-up overflow-visible" : "opacity-0"}>

          {/* TITLE WRAPPER (IMPORTANT) */}
          <div className="overflow-visible">
            <h1
              className={`
                text-5xl md:text-7xl
                font-bold
                mb-6
                leading-[1.35]
                py-3
                ${headline}
              `}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ఆతిథ్యం
            </h1>
          </div>

          {/* TAGLINE */}
          <p
            className={`
              text-lg md:text-2xl
              mb-3
              font-light
              tracking-wide
              ${subHeadline}
            `}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            రుచులు & అతిథి సత్కారానికి ఒక వేడుక
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm md:text-base
              max-w-md
              mx-auto
              mb-10
              leading-relaxed
              text-orange-200
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]
            "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            సంప్రదాయాల నుండి ప్రేరణ పొంది, శ్రద్ధతో తయారు చేసిన వంటకాలు —
            సువాసనగల బిర్యానీలు, పులావులు, మనసుకు నచ్చే సూప్‌లు
            మరియు కాలాతీతమైన ఇష్టమైన రుచులు.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => router.push("/menu")}
            className="
              px-6 py-2
              bg-linear-to-r from-orange-400 to-amber-500
              text-black
              text-sm font-semibold tracking-wide
              rounded-full
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_8px_30px_rgba(255,165,0,0.45)]
            "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Explore Menu
          </button>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white/70 w-6 h-6" />
      </div>
    </section>
  )
}
