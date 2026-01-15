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

  /* Same headline color style as Restaurant Gallery */
  const headline =
    "bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,165,0,0.4)]"

  const subHeadline =
    "bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,165,0,0.35)]"

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden pt-16"
    >
      {/* Background */}
      <img
        src="/Banana-leaf.png"
        alt="Banana leaf background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <div className={isLoaded ? "animate-fade-in-up" : "opacity-0"}>

          {/* TITLE */}
          <h1
            className={`
              text-5xl md:text-7xl
              font-bold mb-4
              tracking-widest
              ${headline}
            `}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            AATHIDYAM
          </h1>

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
            A Celebration of Flavors & Hospitality
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
            Inspired by tradition and crafted with care — from aromatic biryanis
            and pulaos to comforting soups and timeless favorites.
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
