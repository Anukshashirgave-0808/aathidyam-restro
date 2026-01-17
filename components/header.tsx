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
import { useCart } from "@/components/CartContext"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // ✅ ONLY cartItems — no isInitialized
  const { cartItems } = useCart()

  // ✅ total quantity (correct badge count)
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
        style={{ minHeight: "50px" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg animate-logo-bounce">
              <Image
                src="/logo.png"
                alt="Aathidyam Restaurant Logo"
                width={80}
                height={80}
                className="object-contain scale-110 transition-transform duration-300 group-hover:scale-125"
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
                className="px-4 py-1 text-foreground hover:text-accent transition-all duration-300 text-base font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-t from-accent to-accent/60 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 px-3 py-1 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition font-medium text-base relative"
            >
              <ShoppingCart size={18} />
              <span>Cart</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
