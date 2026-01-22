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
  { id: 32, name: "Non Veg Biryani Combo-1[1 chilli Chiken/Chicken Manchurian+1 Chicken Dum Biryani+1 Mutton Biryani]", category: "Combo Biryani", image: "/non-veg-combo1.png", price: 600 },
  { id: 33, name: "Veg Combo [1 Veg Manchurian+1 Panner Dum Biryani+Special Veg Fried Rice]", category: "Combo Biryani", image: "/veg-combo.webp", price: 520 },
  { id: 34, name: "Non Veg Biryani Combo-2[1 Chicken Lollipop/Wings+1 Chicken Fry piece Biryani+1Chicken Mughlai Biryani ]", category: "Combo Biryani", image: "/non-veg-combo2.jpg", price: 700 },

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
        <div className="text-center mb-20">
          <p
            className="uppercase tracking-[0.35em] mb-6 animate-fade-down"
            style={{
              fontSize: "0.9rem",
              color: "#f39c12",
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
              background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Delicious Menu
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed animate-fade">
            “A celebration of Indian and Chinese cuisines, featuring biryanis,
            pulaos, and soups made with authentic techniques and premium ingredients.”
          </p>
        </div>

        {/* ===== POPULAR DISHES SECTION ===== */}
        <div className="mb-28">
          <h3 className="popular-heading">
            Our Popular Dishes
          </h3>

          <div className="banana-wrapper">
            {/* LEFT LEAF */}
            <div className="banana-leaf animate-leaf-left">
              <h4>Biryanis & Rice</h4>
              <ul>
                <li>Chicken Dum Biryani</li>
                <li>Chicken Fry Piece Biryani</li>
                <li>Chicken Pulao</li>
                <li>Non Veg Mixed Biryani</li>
                <li>Mughlai Biryani</li>
                <li>Bucket Biryani</li>
                <li>Prawns Biryani</li>
                <li>Cashew Paneer Biryani</li>
                <li>Veg Fried Rice</li>
                <li>Chicken Schezwan Fried Rice</li>
              </ul>
            </div>

            {/* RIGHT LEAF */}
            <div className="banana-leaf animate-leaf-right">
              <h4>Starters & Curries</h4>
              <ul>
                <li>Apollo Fish Fry</li>
                <li>Chicken Lollipops</li>
                <li>Chilli Chicken</li>
                <li>Pepper Chicken</li>
                <li>Paneer 65</li>
                <li>Chilli Mushroom</li>
                <li>Veg Manchurian</li>
                <li>Chilli Paneer</li>
                <li>Chicken Curry</li>
                <li>Fish Pulusu</li>
                <li>Paneer Curry</li>
                <li>Chapati</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== CATEGORIES ===== */}
        <div className="flex justify-center flex-wrap gap-5 mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#f4a24f] text-black shadow-[0_0_18px_rgba(244,162,79,0.6)]"
                  : "border border-[#f4a24f] text-[#f4a24f] hover:bg-[#f4a24f] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== MENU GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* ===== STYLES ===== */}
        <style>{`
/* ===== POPULAR HEADING ===== */
.popular-heading {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.6rem;
  letter-spacing: 0.35em;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(90deg,#f6c97a,#f4a24f,#f6c97a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== BANANA LEAF WRAPPER ===== */
.banana-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  max-width: 1050px;
  margin: auto;
}

@media (min-width: 768px) {
  .banana-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

/* ===== BANANA LEAF CARD ===== */
.banana-leaf {
  padding: 3rem 2.5rem;
  border-radius: 140px 140px 40px 40px;
  background: linear-gradient(135deg, #0f3d1f, #1b6b3a, #0f3d1f);
  border: 2px solid rgba(164,255,181,0.45);
  box-shadow:
    inset 0 0 30px rgba(0,0,0,0.4),
    0 20px 60px rgba(0,0,0,0.6);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.banana-leaf h4 {
  color: #ffb96b; /* soft orange */
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  margin-bottom: 1.7rem;
  transition: color 0.4s ease, transform 0.4s ease;
}

.banana-leaf:hover h4 {
  color: #ffc87c;
  transform: scale(1.05);
}

.banana-leaf ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.banana-leaf ul li {
  padding: 0.75rem 0;
  font-size: 1rem;
  color: #e9ffe9;
  border-bottom: 1px dashed rgba(255,255,255,0.3);
  transition: transform 0.35s ease, color 0.35s ease;

  /* allow long menu names to wrap */
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: anywhere;
}

.banana-leaf ul li:hover {
  transform: translateX(12px);
  color: #ffe9a6;
}

/* ===== ENTRY ANIMATIONS ===== */
@keyframes leafFromLeft {
  0% { opacity: 0; transform: translateX(-140px) rotate(-8deg); }
  100% { opacity: 1; transform: translateX(0) rotate(0); }
}

@keyframes leafFromRight {
  0% { opacity: 0; transform: translateX(140px) rotate(8deg); }
  100% { opacity: 1; transform: translateX(0) rotate(0); }
}

/* ===== FLOATING AFTER ENTRY ===== */
@keyframes leafFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

/* ===== APPLY ANIMATIONS ===== */
.animate-leaf-left {
  animation:
    leafFromLeft 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards,
    leafFloat 6s ease-in-out infinite 1.6s;
}

.animate-leaf-right {
  animation:
    leafFromRight 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards,
    leafFloat 6s ease-in-out infinite 1.6s;
}
        `}</style>
      </section>
    </CartProvider>
  )
}
