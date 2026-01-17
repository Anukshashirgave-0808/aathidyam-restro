"use client"

import { useState, useEffect } from "react"

import Hero from "@/app/home/hero"
import Gallery from "@/app/home/gallery"
import About from "@/app/about/page"
import Services from "@/app/services/page"
import Contact from "@/app/contact/page"
import CustomerReviews from "@/components/customer-reviews"


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-hidden bg-background">
      
      <Hero />
    
     <Gallery />

    
      <CustomerReviews/>
     
    </main>
  )
}
