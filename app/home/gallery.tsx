"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* =======================
   PHOTO GALLERY DATA
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
   OUR SPECIALS DATA
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
  const top10Ref = useRef<HTMLDivElement | null>(null)
  const [top10Visible, setTop10Visible] = useState(false)

  // IntersectionObserver for Top 10 animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTop10Visible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (top10Ref.current) observer.observe(top10Ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* =======================
         ANIMATIONS
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

        /* =======================
           TOP 10 ANIMATION
        ======================== */
        .fade-slide-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1s ease-out;
        }
        .fade-slide-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 1s ease-out;
        }
        .fade-slide-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease-out;
        }
        .fade-show {
          opacity: 1;
          transform: translate(0);
        }

        .top10-img:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
          transition: all 0.5s ease-in-out;
        }
      `}</style>

      {/* =======================
         PHOTO GALLERY
      ======================== */}
      <section style={{ padding: "90px 20px" }}>
        <h2
          className="text-center text-5xl md:text-6xl font-bold tracking-widest mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 28px rgba(243,156,18,0.45)",
          }}
        >
          Delicious Food Gallery
        </h2>

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <Image
            src={galleryImages[current].image}
            alt={galleryImages[current].title}
            width={900}
            height={480}
            style={{
              width: "100%",
              height: 480,
              objectFit: "cover",
              borderRadius: 14,
              boxShadow: "0 25px 60px rgba(243,156,18,0.25)",
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

          <p
            style={{
              textAlign: "center",
              marginTop: 18,
              fontSize: 18,
              letterSpacing: "1px",
              color: "#f39c12",
              textShadow: "0 0 12px rgba(243,156,18,0.45)",
            }}
          >
            {galleryImages[current].title}
          </p>
        </div>
      </section>

      {/* =======================
         TOP 10 RESTAURANT
      ======================== */}
      <section style={{ padding: "90px 20px" }}>
        <div
          ref={top10Ref}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* IMAGE */}
          <div
            className={`top10-img ${top10Visible ? "fade-slide-left fade-show" : "fade-slide-left"}`}
            style={{
              flex: "1 1 400px",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(243,156,18,0.25)",
            }}
          >
            <Image
              src="/newtop10.jfif"
              alt="Top 10 Restaurant"
              width={500}
              height={350}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 14,
              }}
            />
          </div>

          {/* TEXT */}
          <div
            className={top10Visible ? "fade-slide-right fade-show" : "fade-slide-right"}
            style={{ flex: "1 1 400px" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold tracking-widest mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 26px rgba(243,156,18,0.45)",
              }}
            >
              Ranked Among the Top 10 Restaurants in the "City of Destiny-Visakhapatnam"
            </h2>

            <p style={para}>
              Our commitment to authentic flavors, fresh ingredients, and exceptional
              service has earned us recognition among the city's top culinary destinations.
            </p>

            <p style={para}>
              Signature dishes like Biryani, Pulao, and our Chef Specials showcase a perfect
              blend of tradition and modern culinary artistry.
            </p>

            <p style={para}>
              Recognized by food critics and featured in leading food guides, we continue to
              set benchmarks in quality and taste.
            </p>

            <p style={para}>
              Ideal for family dining, celebrations, and private events, we offer a warm
              ambiance with unforgettable flavors.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
         OUR SPECIALS
      ======================== */}
      <section style={{ padding: "90px 20px" }}>
        <h2
          className="text-center text-5xl md:text-6xl font-bold tracking-widest mb-24"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(243,156,18,0.5)",
          }}
        >
          Our Special Dishes
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
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("show"),
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
        gap: 60,
        alignItems: "center",
        marginBottom: 110,
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
          borderRadius: 14,
          transition: "0.6s ease",
          boxShadow: "0 22px 55px rgba(243,156,18,0.25)",
        }}
      />

      <div className="slide-up show">
        <h3
          style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: "#f39c12",
            textShadow: "0 0 20px rgba(243,156,18,0.45)",
            marginBottom: 14,
          }}
        >
          {item.name}
        </h3>

        <p style={{ fontSize: 18, color: "#e0e0e0", lineHeight: 1.8, maxWidth: 420 }}>
          {item.desc}
        </p>
      </div>
    </div>
  )
}

/* =======================
   STYLES
======================= */
const para = {
  fontSize: 18,
  color: "#fff",
  lineHeight: 1.8,
  maxWidth: 480,
  marginBottom: 12,
}

function nav(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 14,
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.6)",
    border: "1px solid rgba(243,156,18,0.4)",
    padding: 12,
    cursor: "pointer",
    color: "#f39c12",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(243,156,18,0.4)",
  }
}
