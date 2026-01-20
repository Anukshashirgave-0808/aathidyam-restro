"use client"

import { useState } from "react"
import MenuCard, { MenuItem } from "./menu-card"
import { CartProvider } from "./CartContext"

// =================== MENU ITEMS ===================
const menuItems: MenuItem[] = [

  // ================= SOUPS =================
  { id: 1, name: "Sweet Corn Soup", category: "Soups", image: "/sweet-corn-soup.jpg", price: 120 },
  { id: 2, name: "Tomato Soup", category: "Soups", image: "/tomato-soup.jpg", price: 120 },
  { id: 3, name: "Veg Manchow Soup", category: "Soups", image: "/manchow-soup.jpg", price: 120 },
  { id: 4, name: "Veg Hot & Sour Soup", category: "Soups", image: "/hot-and-sour-soup.png", price: 120 },
  { id: 5, name: "Chicken Manchow Soup", category: "Soups", image: "/chicken-manchow-soup.jfif", price: 180 },
  { id: 6, name: "Chicken Hot & Sour Soup", category: "Soups", image: "/chicken-hot&sour.jfif", price: 180 },

  // ================= STARTERS =================
  { id: 7, name: "Veg Manchurian", category: "Starters", subCategory: "Veg", image: "/veg-manchurian.jpg", price: 160 },
  { id: 8, name: "Paneer 65", category: "Starters", subCategory: "Veg", image: "/paneer-65-crispy.jpg", price: 170 },
  { id: 9, name: "Paneer Chilli", category: "Starters", subCategory: "Veg", image: "/panner-chilli.jfif", price: 180 },
  { id: 10, name: "Gobi Manchurian", category: "Starters", subCategory: "Veg", image: "/gobimanchurian.jpg", price: 170 },
  { id: 11, name: "Mushroom Manchurian", category: "Starters", subCategory: "Veg", image: "/mushroom-manchurian.jfif", price: 180 },
  { id: 12, name: "Crispy Corn", category: "Starters", subCategory: "Veg", image: "/crispy-corn.jfif", price: 180 },

  { id: 13, name: "Chicken Manchurian", category: "Starters", subCategory: "Non-Veg", image: "/chicken-manchurian.jfif", price: 230 },
  { id: 14, name: "Chilli Chicken", category: "Starters", subCategory: "Non-Veg", image: "/chilli-chicken.jpg", price: 230 },
  { id: 15, name: "Chicken 555", category: "Starters", subCategory: "Non-Veg", image: "/chicken-555.jfif", price: 250 },
  { id: 16, name: "Chicken Majestic", category: "Starters", subCategory: "Non-Veg", image: "/chicken-majestic.jfif", price: 250 },
  { id: 17, name: "Apollo Chicken", category: "Starters", subCategory: "Non-Veg", image: "/apollo-chicken.jfif", price: 240 },
  { id: 18, name: "Chicken Lollipop", category: "Starters", subCategory: "Non-Veg", image: "/chicken-lolipop.JPG", price: 240 },
  { id: 19, name: "Fish 65", category: "Starters", subCategory: "Non-Veg", image: "/fish-65.jfif", price: 220 },
  { id: 20, name: "Prawns Manchurian", category: "Starters", subCategory: "Non-Veg", image: "/prawn-manchurian.jpg", price: 250 },

  // ================= NOODLES =================
  { id: 21, name: "Veg Noodles", category: "Noodles", image: "/veg-noodles.jpg", price: 150 },
  { id: 22, name: "Egg Noodles", category: "Noodles", image: "/egg-noodles.jpg", price: 160 },
  { id: 23, name: "Chicken Noodles", category: "Noodles", image: "/Chicken-Noodles.jpg", price: 190 },
  { id: 24, name: "Paneer Noodles", category: "Noodles", image: "/panner-noodles.jfif", price: 160 },
  { id: 25, name: "Egg Schezwan Noodles", category: "Noodles", image: "/egg-noodles.jpg", price: 170 },
  { id: 26, name: "Chicken Schezwan Noodles", category: "Noodles", image: "/chicken-schezwan-noodles.jfif", price: 210 },

  // ================= ROLLS =================
  { id: 27, name: "Veg Roll", category: "Rolls", image: "/veg-roll.jfif", price: 80 },
  { id: 28, name: "Paneer Roll", category: "Rolls", image: "/panner-roll.jfif", price: 90 },
  { id: 29, name: "Mushroom Roll", category: "Rolls", image: "/mashroom-roll.jfif", price: 90 },
  { id: 30, name: "Egg Roll", category: "Rolls", image: "/egg-roll.jfif", price: 90 },
  { id: 31, name: "Chicken Roll", category: "Rolls", image: "/chicken-roll.jfif", price: 110 },

  // ================= COMBO BIRYANI =================
  { id: 32, name: "Non Veg Biryani Combo (1)", category: "Combo Biryani", image: "/non-veg-combo1.png", price: 600 },
  { id: 33, name: "Veg Combo", category: "Combo Biryani", image: "/veg-combo.webp", price: 520 },
  { id: 34, name: "Non Veg Biryani Combo (2)", category: "Combo Biryani", image: "/non-veg-combo2.jpg", price: 700 },

  // ================= FRIED RICE =================
  { id: 35, name: "Veg Fried Rice", category: "Fried Rice", subCategory: "Veg", image: "/vegetable-fried-rice.png", price: 150 },
  { id: 36, name: "Paneer Fried Rice", category: "Fried Rice", subCategory: "Veg", image: "/paneer-fried-rice.jpg", price: 180 },
  { id: 37, name: "Veg Mixed Fried Rice", category: "Fried Rice", subCategory: "Veg", image: "/mixed-fried-rice.jpg", price: 200 },
  { id: 38, name: "Sweet Corn Fried Rice", category: "Fried Rice", subCategory: "Veg", image: "/sweet-corn-fried rice.jfif", price: 170 },

  { id: 39, name: "Egg Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", image: "/egg-fried-rice.png", price: 160 },
  { id: 40, name: "Chicken Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", image: "/chicken-fried-rice.jpg", price: 190 },
  { id: 41, name: "Chicken Schezwan Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", image: "/chicken-schezwan-fried rice.jfif", price: 210 },
  { id: 42, name: "Non Veg Mixed Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", image: "/non-veg-mixed-fried rice.jfif", price: 290 },

  // ================= BIRYANI =================
  { id: 43, name: "Veg Biryani", category: "Biryani", image: "/veg-biryani.jpg", price: 200 },
  { id: 44, name: "Paneer Biryani", category: "Biryani", image: "/paneer-biryani.jpg", price: 220 },
  { id: 45, name: "Chicken Dum Biryani", category: "Biryani", image: "/chicken-dum-biryani.jpg", price: 220 },
  { id: 46, name: "Chicken Fry Piece Biryani", category: "Biryani", image: "/chicken-fry-biryani.jpg", price: 240 },
  { id: 47, name: "Chicken Mughlai Biryani", category: "Biryani", image: "/chicken-moghlai-biryani.jfif", price: 290 },
  { id: 48, name: "Mutton Biryani", category: "Biryani", image: "/flavorful-mutton-biryani.png", price: 380 },
  { id: 49, name: "Fish Biryani", category: "Biryani", image: "/fish-biryani.jpg", price: 260 },
  { id: 50, name: "Prawns Biryani", category: "Biryani", image: "/prawn-biryani.jpg", price: 280 },

  // ================= PULAO =================
  { id: 51, name: "Veg Pulao", category: "Pulao", image: "/veg-pulao.jfif", price: 220 },
  { id: 52, name: "Paneer Pulao", category: "Pulao", image: "/panner-pulao.jfif", price: 240 },
  { id: 53, name: "Mushroom Pulao", category: "Pulao", image: "/mashroom-pulao.jfif", price: 240 },
  { id: 54, name: "Chicken Pulao", category: "Pulao", image: "/chicken-pulao.jfif", price: 300 },
  { id: 55, name: "Mutton Pulao", category: "Pulao", image: "/mutton-pulao.jpg", price: 380 },

  // ================= RICE ITEMS =================
  { id: 56, name: "Jeera Rice", category: "Rice Items", image: "/jera-rice.jfif", price: 190 },
  { id: 57, name: "Tomato Rice", category: "Rice Items", image: "/tomato-rice.jfif", price: 190 },
  { id: 58, name: "Curd Rice", category: "Rice Items", image: "/curd-rice.jfif", price: 120 },

  // ================= CURRIES =================
  { id: 59, name: "Paneer Curry", category: "Curries", image: "/paneer-curry.jpg", price: 180 },
  { id: 60, name: "Cashew Paneer Curry", category: "Curries", image: "/cashew-panner-curry.jfif", price: 200 },
  { id: 61, name: "Chicken Curry", category: "Curries", image: "/flavorful-chicken-curry.png", price: 220 },
  { id: 62, name: "Mutton Curry", category: "Curries", image: "/mutton-curry.jpg", price: 290 },

  // ================= BREADS =================
  { id: 63, name: "Chapati", category: "Breads", image: "/chapati.jfif", price: 20 },
  { id: 64, name: "Paratha", category: "Breads", image: "/paratha.jfif", price: 30 },

  // ================= BEVERAGES =================
  { id: 65, name: "Water Bottle", category: "Beverages", image: "/water-bottle.jfif", price: 20 },
  { id: 66, name: "Rose Milk", category: "Beverages", image: "/rose-milk.jfif", price: 60 },
  { id: 67, name: "Badam Milk", category: "Beverages", image: "/badam-milk.jfif", price: 50 },

  // ================= DESSERTS =================
  { id: 68, name: "Gulab Jamun (2 pcs)", category: "Desserts", image: "/gulab-jamun.png", price: 40 },
  { id: 69, name: "Carrot Halwa", category: "Desserts", image: "/carrot-halwa.jpg", price: 45 },
  { id: 70, name: "Bread Halwa", category: "Desserts", image: "/bread-halwa.jpg", price: 40 },

  // ================= PIZZAS =================
{ id: 71, name: "Veg Pizza", category: "Pizzas", subCategory: "Veg", image: "/veg-pizza.jfif", price: 180 },
{ id: 72, name: "Paneer Pizza", category: "Pizzas", subCategory: "Veg", image: "/panner-pizza.jfif", price: 200 },
{ id: 73, name: "Mushroom Pizza", category: "Pizzas", subCategory: "Veg", image: "/mshrrom-pizza.jfif", price: 200 },

{ id: 74, name: "Chicken Pizza", category: "Pizzas", subCategory: "Non-Veg", image: "/chicken-pizza.jfif", price: 240 },
{ id: 75, name: "Prawns Pizza", category: "Pizzas", subCategory: "Non-Veg", image: "/prawn-pizza.jfif", price: 260 },


]

// =================== MENU COMPONENT ===================
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
