"use client"

import { Utensils, Users, Truck, Clock } from "lucide-react"

const services = [
  {
    icon: Utensils,
    title: "Dine-In Service",
    description:
      "Experience fine dining in our elegant restaurant with impeccable service and ambiance.",
  },
  {
    icon: Truck,
    title: "Food Delivery",
    description:
      "Enjoy our authentic dishes delivered fresh to your doorstep within the city.",
  },
  {
    icon: Users,
    title: "Catering",
    description:
      "Perfect for weddings, corporate events, and celebrations with customized menus.",
  },
  {
    icon: Clock,
    title: "Quick Bites",
    description:
      "Grab authentic South Indian snacks and quick meals during your busy schedule.",
  },
]

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-background">
      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-accent font-semibold text-sm tracking-widest mb-3 uppercase">
              What We Offer
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
                textShadow: "0 0 28px rgba(243,156,18,0.55)",
              }}
            >
              Our Services
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Multiple ways to enjoy authentic South Indian cuisine tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-accent/20 hover:border-accent hover:glow-accent"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 border border-accent/30">
                      <Icon className="text-accent w-8 h-8 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce-gentle" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
