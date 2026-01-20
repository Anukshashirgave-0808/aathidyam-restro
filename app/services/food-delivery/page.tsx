"use client"

import { Truck, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FoodDeliveryPage() {
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
          <Truck className="mx-auto mb-4 text-accent w-10 h-10" />

          {/* GRADIENT HEADING */}
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
            FOOD DELIVERY
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fresh, hygienic, and fast food delivery straight to your doorstep.
          </p>
        </div>

        {/* OUTER BROAD BORDER */}
        <div className="border-4 border-accent/40 rounded-3xl p-2 mb-20">

          {/* INNER CARD */}
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12">

            {/* DESCRIPTION */}
            <div className="space-y-6 text-muted-foreground mb-14 text-center max-w-3xl mx-auto">
              <p>
                Enjoy our authentic dishes delivered fresh and fast. Perfect for busy days, office lunches, or cozy meals at home.
              </p>

              <ul className="list-disc list-inside space-y-2 text-left inline-block">
                <li>Quick delivery within the city</li>
                <li>Sealed & hygienic packaging</li>
                <li>Live order tracking for your convenience</li>
              </ul>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { src: "/delivery1.jpg", alt: "Food Packaged for Delivery" },
                { src: "/delivery2.jpg", alt: "Delivery Rider" },
                { src: "/delivery3.jpg", alt: "Home Delivery" },
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

            {/* DELIVERY INFO */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4 items-start">
                <Clock className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Fast & Reliable
                  </h3>
                  <p className="text-muted-foreground">
                    Receive your food quickly and on time, every time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Truck className="text-accent w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Safe & Hygienic
                  </h3>
                  <p className="text-muted-foreground">
                    All orders are packaged safely to ensure freshness and quality.
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
                Order Now
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
