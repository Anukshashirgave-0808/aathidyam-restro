"use client"


import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      

      <main className="pt-28">
        <section className="py-24 px-6 bg-card">
          <div className="max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-widest uppercase mb-3">
                Get in Touch
              </p>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3rem",
                  fontWeight: 800,
                  letterSpacing: "0.25em",
                  marginBottom: "2rem",
                  background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(243,156,18,0.55)",
                }}
              >
                Contact Us
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach out to us for reservations, catering, or any inquiries
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="flex justify-center">
              <div className="w-full max-w-xl space-y-6">
                <Info icon={<MapPin />} title="Visit Us">
                  CBM Compound, Asilmetta, Visakhapatnam, Andhra Pradesh 530003
                </Info>

                <Info icon={<Phone />} title="Call Us">
                  +91 9908727027
                </Info>

                <Info icon={<Mail />} title="Email Us">
                  aathidyam@gmail.com
                </Info>

                <Info icon={<Clock />} title="Opening Hours">
                  Sun – Mon: 11:00 AM – 11:00 PM <br />
                  Wed – Sat: 11:00 AM – 11:00 PM
                </Info>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

/* INFO CARD */
function Info({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-5 p-5 rounded-xl border border-accent/20 hover:border-accent transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{children}</p>
      </div>
    </div>
  )
}
