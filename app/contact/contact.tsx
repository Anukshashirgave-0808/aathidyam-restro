"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, User } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header isScrolled={false} />

      <main className="pt-28">
        <section className="py-24 px-6 bg-card">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
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
    textAlign: "center",
    marginBottom: "2rem",
    background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    textShadow: "0 0 30px rgba(243,156,18,0.55)",
  }}
>
  Contact Us
</h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach out to us for reservations, catering, or any inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

              {/* Contact Info */}
              <div className="space-y-6">
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
                  sun – Mon: 11:00 AM – 11:00 PM <br />
                  wed – Sat: 11:00 AM – 11:00 PM <br />
                  
                </Info>
              </div>

              {/* Contact Form */}
              <form className="bg-background rounded-2xl p-8 shadow-lg border border-accent/20 space-y-6">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>

                <Field icon={<User />} placeholder="Your Name" />
                <Field icon={<Mail />} placeholder="Email Address" type="email" />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full rounded-lg px-4 py-3 bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:scale-[1.02] transition"
                >
                  Send Message
                </button>
              </form>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* Info Card */
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

/* Input Field */
function Field({
  icon,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode
  placeholder: string
  type?: string
}) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
      />
    </div>
  )
}
