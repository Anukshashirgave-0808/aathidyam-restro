"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><radialGradient id="grad1"><stop offset="0%25" style="stop-color:%23D4A574;stop-opacity:0.15" /><stop offset="100%25" style="stop-color:%231a1a1a;stop-opacity:0.9" /></radialGradient></defs><rect width="1200" height="800" fill="%231a1a1a"/><circle cx="300" cy="200" r="400" fill="url(%23grad1)"/><circle cx="900" cy="500" r="350" fill="url(%23grad1)"/></svg>')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Image */}
      <img
        src="/elegant-restaurant-fine-dining.jpg"
        alt="Aathidyam Restaurant signature dish"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">Aathidyam</h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-2 font-light">
            Exquisite South Indian Culinary Experience
          </p>
          <p className="text-sm md:text-base text-gray-200 max-w-md mx-auto mb-8 font-light">
            Where tradition meets innovation. Every dish tells a story of passion and perfection.
          </p>
          <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white/60 w-6 h-6" />
      </div>
    </section>
  )
}
