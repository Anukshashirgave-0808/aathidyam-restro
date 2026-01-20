"use client"

import { ForkKnife, CalendarCheck, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DineInPage() {
  return (
    <main className="pt-28 min-h-screen bg-background flex justify-center px-6">
      <div className="max-w-5xl w-full">

        {/* BACK NAVIGATION */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-10"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </Link>

        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in-up">
          <ForkKnife className="mx-auto mb-4 text-accent w-10 h-10" />

          {/* GRADIENT HEADING – SAME AS OUR SERVICES */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3rem",
              fontWeight: 800,
              letterSpacing: "0.25em",
              textAlign: "center",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              textShadow: "0 0 28px rgba(243,156,18,0.55)",
            }}
          >
            DINE-IN SERVICE
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience fine dining with elegant interiors, warm hospitality, and unforgettable flavors.
          </p>
        </div>

        {/* OUTER BROAD BORDER */}
        <div className="border-4 border-accent/40 rounded-3xl p-2 mb-20">

          {/* INNER CARD */}
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12">

            {/* DESCRIPTION */}
            <div className="space-y-6 text-muted-foreground mb-14 text-center max-w-3xl mx-auto">
              <p>
                Our dine-in experience is crafted for comfort and celebration.
                Whether it’s a casual meal or a special occasion, we ensure every visit feels memorable.
              </p>

              <ul className="list-disc list-inside space-y-2 text-left inline-block">
                <li>Elegant and peaceful dining ambiance</li>
                <li>Signature chef-crafted dishes</li>
                <li>Comfortable seating for all group sizes</li>
              </ul>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { src: "/dinein-1.jfif", alt: "Restaurant Interior" },
                { src: "/dinein-2.jfif", alt: "Birthday Party Setup" },
                { src: "/dinein-3.jfif", alt: "Family Get Together" },
              ].map((img, i) => (
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

            {/* BOOKING INFO */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4 items-start">
                <CalendarCheck className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Prior Table Booking
                  </h3>
                  <p className="text-muted-foreground">
                    Reserve your table in advance for a smooth and stress-free dining experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Users className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Small Parties & Celebrations
                  </h3>
                  <p className="text-muted-foreground">
                    Ideal for birthday parties, family get-togethers, and small group celebrations.
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
                Book a Table
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
