"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Phone,
  Clock,
  Mail,
} from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="hidden md:block bg-accent/90 backdrop-blur-md text-accent-foreground">
        <div className="max-w-7xl mx-auto px-6 py-0.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 hover:opacity-80">
              <Phone size={14} />
              <span>+91 9908727027</span>
            </div>
            <div className="flex items-center gap-1 hover:opacity-80">
              <Mail size={14} />
              <span>aathidyam@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock size={14} />
            <span>Today: 11:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-background"
        }`}
        style={{ minHeight: "50px" }} // ↓ further decreased navbar height
      >
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between"> {/* ↓ decreased padding */}
          {/* Logo with animation */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg animate-logo-bounce">
              <Image
                src="/logo.png"
                alt="Aathidyam Restaurant Logo"
                width={80}
                height={80}
                className="
                  object-contain
                  scale-110
                  transition-transform duration-300
                  group-hover:scale-125
                "
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1 text-foreground hover:text-accent transition-all duration-300 text-base font-medium relative group" // ↓ decreased font size
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-t from-accent to-accent/60 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 rounded-lg hover:bg-accent/10 hover:scale-110 transition"
            >
              <Search size={18} />
            </button>

            <button className="hidden sm:flex items-center gap-2 px-3 py-1 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition font-medium text-base">
              <ShoppingCart size={18} />
              <span>Cart</span>
            </button>

            <button className="hidden sm:block px-4 py-1.5 bg-linear-to-t from-accent to-accent/80 text-accent-foreground rounded-lg font-bold text-base transition hover:shadow-lg hover:scale-105">
              Order Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent/10"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="bg-background/95 backdrop-blur-md px-6 py-2 border-t border-border animate-fade-in-down">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search dishes, ingredients..."
                className="w-full px-4 py-2.5 rounded-lg border-2 border-border bg-input focus:border-accent focus:ring-2 focus:ring-accent/30 text-sm"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border p-3 space-y-2 animate-fade-in-down">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-accent/10 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-border space-y-2">
              <button className="w-full py-2 bg-accent/10 rounded-lg flex justify-center gap-2 text-base font-medium">
                <ShoppingCart size={16} />
                Cart
              </button>
              <button className="w-full py-2 bg-linear-to-t from-accent to-accent/80 text-accent-foreground rounded-lg font-bold text-base">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logo Animation CSS */}
      <style>{`
        @keyframes logo-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-logo-bounce {
          animation: logo-bounce 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  )
}
