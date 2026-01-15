"use client"

import { useState } from "react"
import MenuCard from "./menu-card"

const menuItems = [
  // Fried Rice
  { id: 1, name: "Egg Fried Rice", description: "Fluffy fried rice with scrambled eggs and aromatic spices", category: "Fried Rice", image: "/egg-fried-rice.png" },
  { id: 2, name: "Chicken Fried Rice", description: "Tender chicken pieces with perfectly cooked fried rice", category: "Fried Rice", image: "/chicken-fried-rice.jpg" },
  { id: 3, name: "Prawn Fried Rice", description: "Succulent prawns in aromatic fried rice", category: "Fried Rice", image: "/prawn-fried-rice.jpg" },
  { id: 4, name: "Fish Fried Rice", description: "Flaky fish with fragrant fried rice", category: "Fried Rice", image: "/fish-fried-rice.jpg" },
  { id: 5, name: "Mutton Fried Rice", description: "Tender mutton with aromatic fried rice", category: "Fried Rice", image: "/mutton-fried-rice.jpg" },
  { id: 6, name: "Mixed Fried Rice", description: "Egg, chicken, and vegetables in fried rice", category: "Fried Rice", image: "/mixed-fried-rice.jpg" },
  { id: 7, name: "Veg Fried Rice", description: "Fresh vegetables with perfectly cooked rice", category: "Fried Rice", image: "/vegetable-fried-rice.png" },
  { id: 8, name: "Paneer Fried Rice", description: "Soft paneer chunks in fragrant fried rice", category: "Fried Rice", image: "/paneer-fried-rice.jpg" },

  // Biryani
  { id: 9, name: "Veg Biryani", description: "Fragrant basmati rice with fresh vegetables and spices", category: "Biryani", image: "/veg-biryani.jpg" },
  { id: 10, name: "Paneer Biryani", description: "Creamy paneer with aromatic basmati rice", category: "Biryani", image: "/paneer-biryani.jpg" },
  { id: 11, name: "Chicken Dum Biryani", description: "Tender chicken cooked in fragrant rice with traditional spices", category: "Biryani", image: "/chicken-dum-biryani.jpg" },
  { id: 12, name: "Chicken Fry Biryani", description: "Crispy fried chicken layered with fragrant rice", category: "Biryani", image: "/chicken-fry-biryani.jpg" },
  { id: 13, name: "Mutton Biryani", description: "Tender mutton pieces with aromatic basmati rice", category: "Biryani", image: "/flavorful-mutton-biryani.png" },
  { id: 14, name: "Prawn Biryani", description: "Succulent prawns with fragrant rice and spices", category: "Biryani", image: "/prawn-biryani.jpg" },
  { id: 15, name: "Fish Biryani", description: "Flaky fish with aromatic rice and traditional flavors", category: "Biryani", image: "/fish-biryani.jpg" },

  // Noodles
  { id: 16, name: "Veg Noodles", description: "Stir-fried noodles with fresh vegetables", category: "Noodles", image: "/veg-noodles.jpg" },
  { id: 17, name: "Egg Noodles", description: "Noodles with scrambled eggs and aromatic spices", category: "Noodles", image: "/egg-noodles.jpg" },
  { id: 18, name: "Chicken Noodles", description: "Tender chicken with perfectly stir-fried noodles", category: "Noodles", image: "/Chicken-Noodles.jpg" },
  { id: 19, name: "Paneer Noodles", description: "Soft paneer chunks stir-fried with noodles", category: "Noodles", image: "/panner-noodles.jfif" },
  { id: 20, name: "Schezwan Noodles", description: "Spicy noodles with Schezwan sauce and vegetables", category: "Noodles", image: "/sezwan-noodles.jfif" },
  { id: 21, name: "Manchurian Noodles", description: "Noodles with crispy manchurian balls", category: "Noodles", image: "/manchurian-noodles.jpg" },

  // Starters
  { id: 22, name: "Paneer 65", description: "Crispy fried paneer with aromatic spices", category: "Starters", image: "/paneer-65-crispy.jpg" },
  { id: 23, name: "Chicken 65", description: "Crispy fried chicken bites with spices", category: "Starters", image: "/chicken65.jpg" },
  { id: 24, name: "Gobi Manchurian", description: "Crispy cauliflower in tangy Manchurian sauce", category: "Starters", image: "/gobimanchurian.jpg" },
  { id: 25, name: "Veg Manchurian", description: "Mixed vegetables in sweet Manchurian sauce", category: "Starters", image: "/veg-manchurian.jpg" },
  { id: 26, name: "Chilli Chicken", description: "Tender chicken with spicy chilli sauce", category: "Starters", image: "/chilli-chicken.jpg" },
  { id: 27, name: "Chicken Lollipop", description: "Marinated chicken drumettes, crispy and delicious", category: "Starters", image: "/chicken-lolipop.JPG" },
  { id: 28, name: "Prawn Manchurian", description: "Succulent prawns in tangy Manchurian sauce", category: "Starters", image: "/prawn-manchurian.jpg" },
  { id: 29, name: "Fish Fingers", description: "Crispy battered fish fingers", category: "Starters", image: "/fish-finger.jpg" },

  // Soups
  { id: 30, name: "Tomato Soup", description: "Creamy tomato soup with herbs", category: "Soups", image: "/tomato-soup.jpg" },
  { id: 31, name: "Hot & Sour Soup", description: "Tangy and spicy Chinese-style soup", category: "Soups", image: "/hot-and-sour-soup.png" },
  { id: 32, name: "Sweet Corn Soup", description: "Creamy soup with sweet corn kernels", category: "Soups", image: "/sweet-corn-soup.jpg" },
  { id: 33, name: "Manchow Soup", description: "Crispy noodles in tangy vegetable soup", category: "Soups", image: "/manchow-soup.jpg" },

  // Curries
  { id: 34, name: "Paneer Curry", description: "Soft paneer in creamy, aromatic sauce", category: "Curries", image: "/paneer-curry.jpg" },
  { id: 35, name: "Chicken Curry", description: "Tender chicken in rich, spiced gravy", category: "Curries", image: "/flavorful-chicken-curry.png" },
  { id: 36, name: "Mutton Curry", description: "Tender mutton in aromatic curry sauce", category: "Curries", image: "/mutton-curry.jpg" },
  { id: 37, name: "Fish Curry", description: "Flaky fish in coconut curry sauce", category: "Curries", image: "/vibrant-fish-curry.png" },

  // Desserts
  { id: 38, name: "Gulab Jamun", description: "Sweet milk solid dumplings in sugar syrup", category: "Desserts", image: "/gulab-jamun.png" },
  { id: 39, name: "Carrot Halwa", description: "Sweet carrot pudding with nuts", category: "Desserts", image: "/carrot-halwa.jpg" },
  { id: 40, name: "Bread Halwa", description: "Rich and sweet bread pudding", category: "Desserts", image: "/bread-halwa.jpg" },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold text-sm tracking-widest mb-3 uppercase">Authentic Flavors</p>
         <h2
  className="text-center text-4xl md:text-5xl font-bold tracking-widest mb-8"
  style={{
    fontFamily: "'Playfair Display', serif",
    background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 26px rgba(243,156,18,0.5)",
  }}
>
  Our Delicious Menu
</h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            “A celebration of Indian and Chinese cuisines, featuring biryanis, pulaos, and soups made with authentic techniques and premium ingredients.”
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 md:gap-4 mb-16 flex-wrap animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg scale-105 glow-accent"
                  : "border border-accent/50 text-accent hover:border-accent hover:text-accent hover:glow-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
