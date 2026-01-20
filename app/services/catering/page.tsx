"use client"

import { Users, CalendarCheck, Utensils } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CateringPage() {
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
          <Users className="mx-auto mb-4 text-accent w-10 h-10" />
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
            Catering Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Perfect catering for weddings, corporate events, birthday parties, and family gatherings.
          </p>
        </div>

        {/* OUTER BROAD BORDER */}
        <div className="border-4 border-accent/40 rounded-3xl p-2 mb-20">

          {/* INNER CARD */}
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12">

            {/* DESCRIPTION */}
            <div className="space-y-6 text-muted-foreground mb-14 text-center max-w-3xl mx-auto">
              <p>
                Our catering service ensures exceptional cuisine and professional service for every occasion.
                Whether it’s an intimate gathering or a grand celebration, we make your event memorable.
              </p>

              <ul className="list-disc list-inside space-y-2 text-left inline-block">
                <li>Customizable menus for your event</li>
                <li>Professional staff and timely service</li>
                <li>Perfect setup for birthday parties, family gatherings, and corporate events</li>
                <li>Limited to <strong>100 people</strong> to ensure quality and attention to detail</li>
              </ul>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { src: "/catering1.jpg", alt: "Elegant Indian Catering Setup" },
                { src: "/catering2.jpg", alt: "Birthday Party Catering" },
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
                    Prior Booking Recommended
                  </h3>
                  <p className="text-muted-foreground">
                    Book your catering in advance to ensure availability and flawless service.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Utensils className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Events up to 100 People
                  </h3>
                  <p className="text-muted-foreground">
                    Our catering services are designed for small to medium-sized events to provide the best quality and attention to detail.
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
                Book Catering Now
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
