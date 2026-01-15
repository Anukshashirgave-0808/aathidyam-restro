"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import ServicesSection from "@/app/services/page"

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ========================
     Food Quotes
  ======================== */
  const quotes = [
    "Good food is the foundation of genuine happiness.",
    "Cooking is an art, and the kitchen is the canvas.",
    "Food is not just fuel, it’s an experience.",
    "A recipe has no soul. You as the cook must bring soul to the recipe.",
    "The secret ingredient is always love.",
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  /* ========================
     ORANGE HEADLINE STYLE
  ======================== */
  const headline =
    "bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent tracking-wider drop-shadow-[0_0_18px_rgba(255,165,0,0.35)]"

  return (
    <main className="overflow-hidden bg-background">
      <Header isScrolled={isScrolled} />

      {/* ========================
          Food Quotes
      ======================== */}
      <section className="pt-28 pb-10 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/20 backdrop-blur-md shadow-lg py-6 px-6 text-center animate-fade-in-up transition-all duration-700">
            <p className="text-xl md:text-2xl font-semibold text-foreground relative overflow-hidden h-14">
              <span
                key={currentQuoteIndex}
                className="absolute inset-0 opacity-0 animate-fade-in-up"
                style={{ animation: "fadeIn 0.8s forwards" }}
              >
                "{quotes[currentQuoteIndex]}"
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ========================
          Meet The Owner
      ======================== */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto border-2 border-orange-400/70 p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/owner.png"
                alt="Owner"
                width={300}
                height={300}
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover animate-fade-in-left hover:scale-105 transition duration-700"
              />
            </div>

            <div className="animate-fade-in-right space-y-4 text-center md:text-left">
              <h2 className={`text-4xl md:text-5xl font-bold ${headline}`}>
                Meet Our Owner
              </h2>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                “With over two decades of experience in the hospitality industry,
                our owner brings a deep passion for quality, tradition, and guest
                satisfaction. Her vision is rooted in creating a warm dining
                atmosphere where exceptional flavors, thoughtful service, and
                attention to detail come together to deliver memorable
                experiences for every guest.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          About Restaurant
      ======================== */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="h-full">
            <Image
              src="/aathidyam3.png"
              alt="Restaurant"
              width={1200}
              height={800}
              className="w-full h-full shadow-xl animate-fade-in-left hover:scale-105 transition duration-700 object-cover"
            />
          </div>

          <div className="animate-fade-in-right space-y-6 flex flex-col justify-center">
            <h2 className={`text-5xl font-bold ${headline}`}>
              AATHIDYAM Restaurant
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
              Aathidyam is a celebration of diverse flavors where tradition,
              taste, and hospitality come together in a modern dining experience.
              We bring together a wide range of cuisines—from aromatic biryanis
              and flavorful pulaos to popular Chinese dishes and comforting
              soups—crafted to satisfy every palate.
              <br /><br />
              Rooted in a passion for food and inspired by culinary diversity,
              our kitchen blends classic techniques with contemporary
              presentation. At Aathidyam, great food is more than just a
              meal—it’s about comfort, connection, and moments worth revisiting.
            </p>
          </div>
        </div>
      </section>

      {/* ========================
          Vision & Mission
      ======================== */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in-right bg-linear-to-r from-accent/35 via-accent/20 to-accent/35 p-10 rounded-2xl border border-accent/50 shadow-xl hover:-translate-y-3 transition-all duration-700">
            <h3 className={`text-4xl font-bold mb-6 ${headline}`}>Our Vision</h3>
            <ul className="space-y-3 text-gray-100 text-lg">
              <li>• Benchmark for South Indian cuisine</li>
              <li>• Preserve authentic traditions</li>
              <li>• Blend culture with modern dining</li>
              <li>• Create unforgettable experiences</li>
            </ul>
          </div>

          <div className="animate-fade-in-right bg-linear-to-r from-accent/35 via-accent/20 to-accent/35 p-10 rounded-2xl border border-accent/50 shadow-xl hover:-translate-y-3 transition-all duration-700">
            <h3 className={`text-4xl font-bold mb-6 ${headline}`}>Our Mission</h3>
            <ul className="space-y-3 text-gray-100 text-lg">
              <li>• Serve authentic cuisine</li>
              <li>• Deliver premium service</li>
              <li>• Innovate respectfully</li>
              <li>• Delight every guest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================
          Restaurant Gallery
      ======================== */}
      <section className="py-28 px-6 bg-background">
        <h2 className={`text-5xl font-bold text-center mb-14 animate-fade-in-up ${headline}`}>
          Restaurant Gallery
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {["aathidyam5.webp", "aathidyam4.webp", "aathidyam2.webp"].map((img, i) => (
            <Image
              key={i}
              src={`/${img}`}
              alt="Gallery"
              width={400}
              height={300}
              className="w-full h-75 object-cover shadow-xl animate-fade-in-up hover:scale-110 transition duration-700"
            />
          ))}
        </div>
      </section>

      <ServicesSection />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
