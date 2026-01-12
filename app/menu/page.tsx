"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Menu from "@/components/menu"

export default function MenuPage() {
  return (
    <main className="overflow-hidden bg-background">
      <Header isScrolled={false} /> {/* optional: handle scroll */}
      <Menu />
      <Footer />
    </main>
  )
}
