"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-hidden bg-background">
      {/* Navbar */}
      <Header isScrolled={isScrolled} />

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up">
              <div className="relative rounded-xl overflow-hidden aspect-square glow-accent-lg">
                <img
                  src="/modern-restaurant-interior.png"
                  alt="Aathidyam Restaurant"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-up space-y-6">
              <div>
                <p className="text-accent font-semibold text-sm tracking-widest mb-3 uppercase">About Us</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Aathidyam Restaurant</h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Aathidyam is a celebration of authentic South Indian cuisine. Our name reflects our commitment to bringing
                traditional flavors and time-honored recipes to your table with modern finesse and culinary artistry.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a passion for culinary excellence, we blend heritage techniques with contemporary
                presentation to create an unforgettable dining experience that honors tradition while embracing
                innovation.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2 p-4 rounded-lg bg-background/50 border border-accent/30 hover:border-accent transition-all duration-300 hover:glow-accent">
                  <p className="text-3xl font-bold text-accent">15+</p>
                  <p className="text-muted-foreground text-sm">Years of Experience</p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-background/50 border border-accent/30 hover:border-accent transition-all duration-300 hover:glow-accent">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-muted-foreground text-sm">Signature Dishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
