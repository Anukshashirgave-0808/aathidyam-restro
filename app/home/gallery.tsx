"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* =======================
   SLIDING GALLERY IMAGES
======================= */
const galleryImages = [
  {
    title: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    alt: "Masala dosa",
  },
  {
    title: "South Indian Thali",
    image: "https://images.unsplash.com/photo-1626776876729-bab436d34b25",
    alt: "South Indian thali",
  },
  {
    title: "Idli Sambar",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    alt: "Idli sambar",
  },
  {
    title: "Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    alt: "Biryani",
  },
  {
    title: "Restaurant Interior",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    alt: "Restaurant interior",
  },
]

/* =======================
   OUR SPECIALS
======================= */
const specials = [
  {
    name: "Chicken Pulao",
    desc: "Aromatic basmati rice cooked with tender chicken and traditional spices.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  },
  {
    name: "Non-Veg Mixed Pulao",
    desc: "A royal mix of chicken, mutton, and prawns cooked to perfection.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },
  {
    name: "Mutton Pulao",
    desc: "Slow-cooked mutton infused with rich spices and fragrant rice.",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
  },
  {
    name: "Prawns Pulao",
    desc: "Juicy prawns blended with mildly spiced long-grain rice.",
    image: "https://images.unsplash.com/photo-1604908554169-03c4f1dbb5b1",
  },
  {
    name: "Fish Pulao",
    desc: "Fresh fish cooked delicately with aromatic spices and rice.",
    image: "https://images.unsplash.com/photo-1600628422019-6c5c1b2a63f4",
  },
]

export default function GalleryAndSpecials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () =>
    setCurrentIndex((i) => (i + 1) % galleryImages.length)

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)

  return (
    <>
      {/* =======================
         PHOTO GALLERY (SLIDER)
      ======================= */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Photo Gallery</h2>
          <p className="text-muted-foreground mt-2">
            A glimpse of our food & ambiance
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <img
            src={galleryImages[currentIndex].image}
            alt={galleryImages[currentIndex].alt}
            className="w-full h-80 object-cover"
          />

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* =======================
         OUR SPECIALS
      ======================= */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Our Special Pulao Dishes</h2>
          <p className="text-muted-foreground mt-2">
            Signature recipes loved by our guests
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {specials.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
