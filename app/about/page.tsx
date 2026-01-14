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

  // ========================
  // Food Quotes
  // ========================
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
    }, 10000) // 10 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="overflow-hidden bg-background">
      {/* Navbar */}
      <Header isScrolled={isScrolled} />

      {/* ========================
          Food Quotes Section (Top)
      ======================== */}
      <section className="pt-36 pb-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/20 backdrop-blur-md rounded-3xl shadow-xl py-12 px-8 text-center transition-all duration-700 animate-fade-in-up">
            <p className="text-2xl md:text-3xl font-semibold text-foreground relative overflow-hidden h-20">
              <span
                key={currentQuoteIndex}
                className="absolute inset-0 opacity-0 animate-fade-in-up"
                style={{ animation: "fadeIn 1s forwards" }}
              >
                "{quotes[currentQuoteIndex]}"
              </span>
            </p>
            <span className="block mt-6 text-sm text-foreground/70">
             
            </span>
          </div>
        </div>
      </section>

      {/* ========================
          Meet The Owner
      ======================== */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Photo First */}
          <Image
            src="/owner.png"
            alt="Owner"
            width={300}
            height={300}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl animate-fade-in-left hover:scale-105 transition duration-700 object-cover"
          />

          {/* Information */}
          <div className="animate-fade-in-right space-y-6">
            <h2 className="text-5xl font-bold text-foreground">
              Meet Our Owner
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
              Bringing over two decades of culinary mastery, our owner and head chef transforms every meal into an unforgettable experience. Passionate about authentic South Indian flavors, they skillfully blend tradition with innovation, using fresh, locally sourced ingredients. Their dedication, creativity, and love for food ensure every dish delights the senses and warms the heart.
            </p>
          </div>
        </div>
      </section>

      {/* ========================
          About Restaurant
      ======================== */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/modern-restaurant-interior.png"
            alt="Restaurant"
            width={1200}
            height={800}
            className="w-full rounded-xl shadow-xl animate-fade-in-left hover:scale-105 transition duration-700 object-cover"
          />

          <div className="animate-fade-in-right space-y-6">
            <h2 className="text-5xl font-bold text-foreground">
              Aathidyam Restaurant
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
              A celebration of authentic South Indian cuisine where tradition, taste, and hospitality meet modern elegance. At Aathidyam, we honor age-old recipes passed down through generations, using the finest ingredients and time-tested cooking techniques. Every dish is thoughtfully prepared to deliver rich flavors, soulful aromas, and an unforgettable dining experience.

              Rooted in cultural heritage and inspired by culinary excellence, our kitchen blends traditional methods with contemporary presentation. From comforting classics to signature specialties, each plate tells a story of passion, precision, and authenticity. At Aathidyam, we believe great food is not just about taste—it is about connection, warmth, and creating moments that guests cherish long after the meal is served.
            </p>
          </div>
        </div>
      </section>

      {/* ========================
          Vision & Mission
      ======================== */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="animate-fade-in-left bg-linear-to-r from-accent/35 via-accent/20 to-accent/35 p-10 rounded-2xl border border-accent/50 shadow-xl hover:-translate-y-3 transition-all duration-700">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Our Vision
            </h3>
            <ul className="space-y-3 text-gray-100 text-lg">
              <li>• Benchmark for South Indian cuisine</li>
              <li>• Preserve authentic traditions</li>
              <li>• Blend culture with modern dining</li>
              <li>• Create unforgettable experiences</li>
            </ul>
          </div>

          {/* Mission */}
          <div className="animate-fade-in-right bg-linear-to-r from-accent/35 via-accent/20 to-accent/35 p-10 rounded-2xl border border-accent/50 shadow-xl hover:-translate-y-3 transition-all duration-700">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
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
        <h2 className="text-5xl font-bold text-center text-foreground mb-14 animate-fade-in-up">
          Restaurant Gallery
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {["about6.jfif", "about4.jfif", "about5.jfif"].map((img, i) => (
            <Image
              key={i}
              src={`/${img}`}
              alt="Gallery"
              width={400}
              height={300}
              className="w-full h-75 object-cover rounded-xl shadow-xl animate-fade-in-up hover:scale-110 transition duration-700"
            />
          ))}
        </div>
      </section>

      {/* ========================
          Food Quotes at Bottom (Optional Repeat)
      ======================== */}
    

      {/* Services (includes its own Footer) */}
      <ServicesSection />

      {/* ========================
          FadeIn Keyframes
      ======================== */}
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
