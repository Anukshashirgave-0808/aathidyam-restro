"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* =======================
   PHOTO GALLERY
======================= */
const galleryImages = [
  { image: "/biryani-rice-dish.jpg", title: "Biryani Rice Dish" },
  { image: "/bread-halwa.jpg", title: "Bread Halwa" },
  { image: "/gobimanchurian.jpg", title: "Gobi Manchurian" },
  { image: "/Chicken-Noodles.jpg", title: "Chicken Noodles" },
  { image: "/sweet-corn-soup.jpg", title: "Sweet Corn Soup" },
  { image: "/mutton-curry.jpg", title: "Mutton Curry" },
]

/* =======================
   OUR SPECIALS
======================= */
const specials = [
  {
    name: "Chicken Pulao",
    desc: "Aromatic basmati rice cooked with tender chicken and traditional spices.",
    image: "/chicken-fried-rice.jpg",
  },
  {
    name: "Mutton Pulao",
    desc: "Slow-cooked mutton infused with rich spices and fragrant rice.",
    image: "/mutton-pulao.jpg",
  },
  {
    name: "Non-Veg Mixed Pulao",
    desc: "Chicken, mutton & prawns cooked in royal spices.",
    image: "/nonveg-mixed-pulao.jpg",
  },
  {
    name: "Fish Pulao",
    desc: "Fresh coastal fish layered with long-grain rice.",
    image: "/fish-biryani.jfif",
  },
  {
    name: "Prawns Pulao",
    desc: "Juicy prawns tossed with fragrant basmati rice & mild spices.",
    image: "/prawn-biryani.jpg",
  },
]

/* =======================
   COMPONENT
======================= */
export default function GalleryAndSpecials() {
  const [current, setCurrent] = useState(0)

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* =======================
         STYLES
      ======================== */}
      <style>{`
        .slide-left {
          opacity: 0;
          transform: translateX(-120px);
          transition: all 0.9s ease;
        }
        .slide-right {
          opacity: 0;
          transform: translateX(120px);
          transition: all 0.9s ease;
        }
        .slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.9s ease;
        }
        .show {
          opacity: 1;
          transform: translate(0);
        }
        .img-hover:hover {
          transform: scale(1.08);
          filter: brightness(1.15);
        }
      `}</style>

      {/* =======================
         GALLERY
      ======================== */}
      <section style={{ padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: 36 }}>South Indian Gallery</h2>

        <div style={{ position: "relative", maxWidth: 900, margin: "30px auto" }}>
          <Image
            src={galleryImages[current].image}
            alt={galleryImages[current].title}
            width={900}
            height={480}
            style={{
              width: "100%",
              height: 480,
              objectFit: "cover",
            }}
          />

          <button
            onClick={() =>
              setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length)
            }
            style={nav("left")}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % galleryImages.length)}
            style={nav("right")}
          >
            <ChevronRight />
          </button>

          <p style={{ textAlign: "center", marginTop: 15, color: "#f39c12" }}>
            {galleryImages[current].title}
          </p>
        </div>
      </section>

      {/* =======================
         OUR SPECIALS
      ======================== */}
      <section style={{ padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: 36, marginBottom: 80 }}>
          Our Special Pulao Dishes
        </h2>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {specials.map((item, index) => (
            <SpecialCard key={index} item={item} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>
    </div>
  )
}

/* =======================
   SPECIAL CARD
======================= */
function SpecialCard({ item, reverse }: any) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={reverse ? "slide-right" : "slide-left"}
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        gap: 50,
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      <Image
        src={item.image}
        alt={item.name}
        className="img-hover"
        width={550}
        height={320}
        style={{
          width: "50%",
          height: 320,
          objectFit: "cover",
          transition: "0.6s ease",
        }}
      />

      <div className="slide-up show">
        <h3 style={{ fontSize: 30, color: "#f39c12" }}>{item.name}</h3>
        <p style={{ fontSize: 18, color: "#ccc", lineHeight: 1.7 }}>{item.desc}</p>
      </div>
    </div>
  )
}

/* =======================
   NAV BUTTON
======================= */
function nav(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 10,
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.7)",
    border: "none",
    padding: 12,
    cursor: "pointer",
    color: "#fff",
  }
}
