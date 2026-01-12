"use client"

const ambianceImages = [
  {
    title: "Elegant Interior",
    image: "/luxury-restaurant-interior-elegant-design.jpg",
    alt: "Elegant dining room with ambient lighting",
  },
  {
    title: "Intimate Seating",
    image: "/fine-dining-intimate-booth-seating.jpg",
    alt: "Cozy intimate dining booths",
  },
  {
    title: "Culinary Artistry",
    image: "/chef-plating-gourmet-fine-dining-food.jpg",
    alt: "Chef carefully plating a dish",
  },
  {
    title: "Wine Selection",
    image: "/luxury-wine-bar-collection-bottles.jpg",
    alt: "Curated wine collection display",
  },
]

export default function Ambiance() {
  return (
    <section id="ambiance" className="py-20 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold text-sm tracking-widest mb-2">EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">The Ambiance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the warmth, elegance, and sophistication of our dining spaces
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {ambianceImages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg aspect-square animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
