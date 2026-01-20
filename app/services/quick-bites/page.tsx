"use client"

import { Clock, Truck, Coffee } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function QuickBitesPage() {
  const images = [
    { src: "/quickbite1.avif", alt: "Quick Snack Setup" },
    { src: "/quickbite2.jpg", alt: "Delicious Snacks" },
  ]

  return (
    <main className="pt-28 min-h-screen bg-background flex justify-center px-6">
      <div className="max-w-5xl w-full">

        {/* BACK NAVIGATION */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline transition"
          >
            ← Back to Services
          </Link>
        </div>

        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Clock className="mx-auto mb-4 text-accent w-10 h-10" />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3rem",
              fontWeight: 800,
              letterSpacing: "0.25em",
              textAlign: "center",
              marginBottom: "2rem",
              background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              textShadow: "0 0 28px rgba(243,156,18,0.55)",
            }}
          >
            Quick Bites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Delicious snacks for people on the go. Perfect for quick hunger fixes without compromising taste.
          </p>
        </div>

        {/* OUTER BROAD BORDER */}
        <div className="border-4 border-accent/40 rounded-3xl p-2 mb-20">

          {/* INNER CARD */}
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12">

            {/* DESCRIPTION */}
            <div className="space-y-6 text-muted-foreground mb-14 text-center max-w-3xl mx-auto">
              <p>
                Enjoy freshly prepared snacks served fast and with love. Perfect for office breaks, evening cravings, or casual hangouts.
              </p>

              <ul className="list-disc list-inside space-y-2 text-left inline-block">
                <li>Fast service for busy schedules</li>
                <li>Freshly prepared daily</li>
                <li>Affordable and tasty options</li>
                <li>Perfect for small gatherings and personal cravings</li>
              </ul>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-accent/20 group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4 items-start">
                <Truck className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Fast Delivery
                  </h3>
                  <p className="text-muted-foreground">
                    Get your quick bites delivered promptly to your office or home.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Coffee className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Fresh & Hot
                  </h3>
                  <p className="text-muted-foreground">
                    All snacks are freshly prepared to ensure maximum flavor and quality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3
                           bg-accent text-accent-foreground font-semibold
                           rounded-lg hover:opacity-90 transition"
              >
                Order Quick Bites
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
