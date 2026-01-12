"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Users, Clock } from "lucide-react"

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    })
  }

  return (
    <section id="reserve" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-accent font-semibold text-sm tracking-widest mb-2">
            BOOK YOUR TABLE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Reserve Now
          </h2>
          <p className="text-muted-foreground text-lg">
            Secure your seat for an unforgettable dining experience
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Users size={16} /> Number of Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1} {i === 0 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Calendar size={16} /> Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Clock size={16} /> Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Special Requests
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
              rows={4}
              placeholder="Any dietary restrictions or special occasions?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Reserve Your Table
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 pt-16 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-muted-foreground text-sm mb-2">Phone</p>
            <p className="text-foreground font-semibold">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-2">Hours</p>
            <p className="text-foreground font-semibold">Tue - Sun 5:00 PM - 11:00 PM</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-2">Location</p>
            <p className="text-foreground font-semibold">123 Culinary Lane, Dining City</p>
          </div>
        </div>

      </div>
    </section>
  )
}
