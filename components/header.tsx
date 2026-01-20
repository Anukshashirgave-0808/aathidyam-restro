"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  ShoppingCart,
  Phone,
  Clock,
  Mail,
  Menu,
  X,
} from "lucide-react"
import { useCart } from "@/components/CartContext"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { cartItems } = useCart()

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ]

  const gradientTextStyle = {
    background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="hidden md:block bg-accent/90 backdrop-blur-md text-accent-foreground">
        <div className="max-w-7xl mx-auto px-6 py-0.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91 9908727027</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>aathidyam@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>Today: 11:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg animate-logo-roll">
              <Image
                src="/logo.png"
                alt="Aathidyam Restaurant Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold" style={gradientTextStyle}>
                Aathidyam
              </span>
              <span className="text-sm font-semibold" style={gradientTextStyle}>
                Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1 text-base font-medium hover:text-accent transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Cart Button */}
            <Link href="/cart">
              <button
                className="relative flex items-center gap-2 px-4 py-1.5 rounded-lg border border-accent/40 hover:bg-accent/10 transition"
              >
                <ShoppingCart size={18} className="text-accent" />
                <span className="font-medium" style={gradientTextStyle}>
                  Cart
                </span>

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium hover:text-accent"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Cart Button */}
            <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 hover:bg-accent/10 transition">
                <ShoppingCart size={18} className="text-accent" />
                <span style={gradientTextStyle}>
                  Cart ({cartCount})
                </span>
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
