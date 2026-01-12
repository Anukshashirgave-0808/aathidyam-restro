"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "./contact"

export default function ContactPage() {
  return (
    <>
      <Header isScrolled={false} />

      <main className="pt-28">
        <Contact />
      </main>

      <Footer />
    </>
  )
}
