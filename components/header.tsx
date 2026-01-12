"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, ShoppingCart, Phone, Clock, Mail } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // UPDATE: Use actual page routes
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
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 hover:text-accent-foreground/80 transition-colors cursor-pointer">
              <Phone size={16} />
              <span>+91 9908727027</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-foreground/80 transition-colors cursor-pointer">
              <Mail size={16} />
              <span>aathidyam@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Today: 6:00 AM - 10:00 PM</span>
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
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
            <div className="w-12 h-12 bg-linear-to-t from-accent via-accent/90 to-accent/70 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              A
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                Aathidyam
              </span>
              <span className="text-xs text-accent font-medium">
                South Indian Cuisine
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-foreground hover:text-accent transition-all duration-300 text-sm font-semibold relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-0 w-0 h-1 bg-linear-to-t from-accent to-accent/60 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-accent/10"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Cart */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-300 hover:scale-105 font-semibold group">
              <ShoppingCart size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="text-sm">Cart</span>
            </button>

            {/* Order Now */}
            <button className="hidden sm:block px-6 py-2.5 bg-linear-to-t from-accent to-accent/80 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              Order Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="bg-background/95 backdrop-blur-md px-6 py-4 border-t border-border animate-fade-in-down">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search dishes, ingredients..."
                className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border p-4 space-y-2 animate-fade-in-down">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-border space-y-2">
              <button className="w-full px-4 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Cart
              </button>

              <button className="w-full px-4 py-3 bg-linear-to-t from-accent to-accent/80 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
