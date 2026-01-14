"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO */}
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-md">
                <Image
                  src="/logo.png" // must be in /public
                  alt="Aathidyam Restaurant Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <div>
                <span className="text-lg font-bold block">Aathidyam</span>
                <span className="text-xs text-primary-foreground/70">
                  South Indian Cuisine
                </span>
              </div>
            </div>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Authentic South Indian dining experience where every dish
              celebrates tradition, rich flavors, and heartfelt hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/menu" className="hover:text-accent">Menu</Link></li>
              <li><Link href="/gallery" className="hover:text-accent">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-accent">Dine-In</Link></li>
              <li><Link href="/services" className="hover:text-accent">Delivery</Link></li>
              <li><Link href="/services" className="hover:text-accent">Catering</Link></li>
              <li><Link href="/services" className="hover:text-accent">Events</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition">
                <Facebook size={18} />
              </a>

              <a href="https://www.instagram.com/" target="_blank"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition">
                <Instagram size={18} />
              </a>

              <a href="https://twitter.com/" target="_blank"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition">
                <Twitter size={18} />
              </a>

              <a href="https://www.linkedin.com/" target="_blank"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 py-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} Aathidyam Restaurant. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
