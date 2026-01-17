"use client"

import { useState } from "react"
import MenuCard, { MenuItem } from "./menu-card"
import { CartProvider } from "./CartContext"

const menuItems: MenuItem[] = [
  // Fried Rice
  { id: 1, name: "Egg Fried Rice", category: "Fried Rice", image: "/egg-fried-rice.png", price: 170 },
  { id: 2, name: "Chicken Fried Rice", category: "Fried Rice", image: "/chicken-fried-rice.jpg", price: 170 },
  { id: 3, name: "Prawn Fried Rice", category: "Fried Rice", image: "/prawn-fried-rice.jpg", price: 190 },
  { id: 4, name: "Fish Fried Rice", category: "Fried Rice", image: "/fish-fried-rice.jpg", price: 190 },
  { id: 5, name: "Mutton Fried Rice", category: "Fried Rice", image: "/mutton-fried-rice.jpg", price: 270 },
  { id: 6, name: "Mixed Fried Rice", category: "Fried Rice", image: "/mixed-fried-rice.jpg", price: 240 },
  { id: 7, name: "Veg Fried Rice", category: "Fried Rice", image: "/vegetable-fried-rice.png", price: 130 },
  { id: 8, name: "Paneer Fried Rice", category: "Fried Rice", image: "/paneer-fried-rice.jpg", price: 170 },

  // Biryani
  { id: 9, name: "Veg Biryani", category: "Biryani", image: "/veg-biryani.jpg", price: 170 },
  { id: 10, name: "Paneer Biryani", category: "Biryani", image: "/paneer-biryani.jpg", price: 200 },
  { id: 11, name: "Chicken Dum Biryani", category: "Biryani", image: "/chicken-dum-biryani.jpg", price: 210 },
  { id: 12, name: "Chicken Fry Biryani", category: "Biryani", image: "/chicken-fry-biryani.jpg", price: 230 },
  { id: 13, name: "Mutton Biryani", category: "Biryani", image: "/flavorful-mutton-biryani.png", price: 340 },
  { id: 14, name: "Prawn Biryani", category: "Biryani", image: "/prawn-biryani.jpg", price: 280 },
  { id: 15, name: "Fish Biryani", category: "Biryani", image: "/fish-biryani.jpg", price: 270 },

  // Noodles
  { id: 16, name: "Veg Noodles", category: "Noodles", image: "/veg-noodles.jpg", price: 110 },
  { id: 17, name: "Egg Noodles", category: "Noodles", image: "/egg-noodles.jpg", price: 130 },
  { id: 18, name: "Chicken Noodles", category: "Noodles", image: "/Chicken-Noodles.jpg", price: 150 },
  { id: 19, name: "Paneer Noodles", category: "Noodles", image: "/panner-noodles.jfif", price: 170 },
  { id: 20, name: "Schezwan Noodles", category: "Noodles", image: "/sezwan-noodles.jfif", price: 120 },
  { id: 21, name: "Manchurian Noodles", category: "Noodles", image: "/manchurian-noodles.jpg", price: 170 },

  // Starters
  { id: 22, name: "Paneer 65", category: "Starters", image: "/paneer-65-crispy.jpg", price: 170 },
  { id: 23, name: "Chicken 65", category: "Starters", image: "/chicken65.jpg", price: 220 },
  { id: 24, name: "Gobi Manchurian", category: "Starters", image: "/gobimanchurian.jpg", price: 160 },
  { id: 25, name: "Veg Manchurian", category: "Starters", image: "/veg-manchurian.jpg", price: 160 },
  { id: 26, name: "Chilli Chicken", category: "Starters", image: "/chilli-chicken.jpg", price: 230 },
  { id: 27, name: "Chicken Lollipop", category: "Starters", image: "/chicken-lolipop.JPG", price: 230 },
  { id: 28, name: "Prawn Manchurian", category: "Starters", image: "/prawn-manchurian.jpg", price: 270 },
  { id: 29, name: "Fish Fingers", category: "Starters", image: "/fish-finger.jpg", price: 240 },

  // Soups
  { id: 30, name: "Tomato Soup", category: "Soups", image: "/tomato-soup.jpg", price: 60 },
  { id: 31, name: "Hot & Sour Soup", category: "Soups", image: "/hot-and-sour-soup.png", price: 80 },
  { id: 32, name: "Sweet Corn Soup", category: "Soups", image: "/sweet-corn-soup.jpg", price: 60 },
  { id: 33, name: "Manchow Soup", category: "Soups", image: "/manchow-soup.jpg", price: 130 },

  // Curries
  { id: 34, name: "Paneer Curry", category: "Curries", image: "/paneer-curry.jpg", price: 180 },
  { id: 35, name: "Chicken Curry", category: "Curries", image: "/flavorful-chicken-curry.png", price: 220 },
  { id: 36, name: "Mutton Curry", category: "Curries", image: "/mutton-curry.jpg", price: 300 },
  { id: 37, name: "Fish Curry", category: "Curries", image: "/vibrant-fish-curry.png", price: 270 },

  // Desserts
  { id: 38, name: "Gulab Jamun", category: "Desserts", image: "/gulab-jamun.png", price: 40 },
  { id: 39, name: "Carrot Halwa", category: "Desserts", image: "/carrot-halwa.jpg", price: 40 },
  { id: 40, name: "Bread Halwa", category: "Desserts", image: "/bread-halwa.jpg", price: 40 },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", ...Array.from(new Set(menuItems.map(i => i.category)))]

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(i => i.category === selectedCategory)

  return (
    <CartProvider>
      <section id="menu" className="bg-black py-20 px-6">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-[0.35em] mb-6 animate-fade-down"
            style={{
              fontSize: "0.9rem",
              color: "#f39c12",
              textShadow: "0 0 12px rgba(243,156,18,0.6)",
            }}
          >
            AUTHENTIC FLAVORS
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
  Our Delicious Menu
</h2>


          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade">
  “A celebration of Indian and Chinese cuisines, featuring biryanis,
  pulaos, and <br />
  soups made with authentic techniques and premium ingredients.”
</p>

        </div>

        {/* ===== CATEGORIES ===== */}
 <div className="flex justify-center flex-wrap gap-5 mb-12">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`
        px-6 py-2 rounded-full
        text-sm font-medium
        transition-all duration-300
        ${
          selectedCategory === cat
            ? "bg-[#f4a24f] text-black shadow-[0_0_18px_rgba(244,162,79,0.6)]"
            : "border border-[#f4a24f] text-[#f4a24f] hover:bg-[#f4a24f] hover:text-black hover:shadow-[0_0_14px_rgba(244,162,79,0.4)]"
        }
      `}
    >
      {cat}
    </button>
  ))}
</div>




        {/* ===== MENU GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="food-card">
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        {/* ===== ANIMATIONS ===== */}
        <style>{`
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-down { animation: fadeDown 1s ease forwards; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { animation: fadeUp 1.1s ease forwards; }

          @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade { animation: fade 1.3s ease forwards; }

          .food-card {
            animation: cardIn 0.8s ease forwards;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .food-card:hover {
            transform: translateY(-10px) scale(1.04);
            box-shadow: 0 25px 50px rgba(0,0,0,0.6);
          }

          .food-card img {
            transition: transform 0.6s ease;
          }

          .food-card:hover img {
            transform: scale(1.12) rotate(1deg);
          }

          @keyframes cardIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </section>
    </CartProvider>
  )
}
