"use client"

import Image from "next/image"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"
import { useCart, CartItemType } from "./CartContext"

export interface MenuItem {
  id: number
  name: string
  category: string
  image: string
  price: number
  subCategory?: "Veg" | "Non-Veg"
}

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart, cartItems } = useCart()
  const router = useRouter()

  const isSelected = useMemo(
    () => cartItems.some((cartItem) => cartItem.id === item.id),
    [cartItems, item.id]
  )

  // AUTO VEG / NON-VEG DETECTION
  const isNonVeg = useMemo(() => {
    const nonVegKeywords = ["chicken", "mutton", "fish", "prawn", "egg"]
    return nonVegKeywords.some((keyword) =>
      item.name.toLowerCase().includes(keyword)
    )
  }, [item.name])

  // ⭐ FEATURED ITEMS (STAR)
  const featuredItems = [
    "chicken dum biryani",
    "chicken fry piece biryani",
    "chicken pulao",
    "non veg mixed biryani",
    "mughlai biryani",
    "bucket biryani",
    "prawns biryani",
    "cashew paneer biryani",
    "veg fried rice",
    "chicken schezwan fried rice",
    "apollo fish fry",
    "chicken lollipops",
    "chilli chicken",
    "pepper chicken",
    "paneer 65",
    "chilli mushroom",
    "veg manchurian",
    "chilli paneer",
    "chicken curry",
    "fish pulusu",
    "paneer curry",
    "chapati",
  ]

  const showStar = useMemo(
    () =>
      featuredItems.some((name) =>
        item.name.toLowerCase().includes(name)
      ),
    [item.name]
  )

  const increment = () => setQuantity((q) => q + 1)
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : q))

  const handleAddToCart = () => {
    const cartItem: CartItemType = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: isSelected ? 1 : quantity,
      image: item.image,
    }

    addToCart(cartItem)
    router.refresh()

    setAdded(true)
    setQuantity(1)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div
      className={`group flex flex-col rounded-xl border transition-all duration-500 p-2 hover:-translate-y-2 
      ${
        isSelected
          ? "border-[#f4a24f] bg-[#f4a24f]/5 shadow-[0_0_20px_rgba(244,162,79,0.1)]"
          : "border-white/10 bg-black/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
      }`}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-lg mb-2 w-full aspect-3/2 bg-black">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
            isSelected ? "opacity-80" : ""
          }`}
        />

        {/* VEG / NON-VEG BADGE */}
        <div
          className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white shadow-lg
            ${isNonVeg ? "bg-[#7a3e1d]" : "bg-green-600"}`}
        >
          {isNonVeg ? "Non-Veg" : "Veg"}
        </div>
{/* ⭐ PURPLE STAR BADGE */}
{showStar && (
  <div className="absolute top-2 right-2 bg-linear-to-br from-purple-400 to-purple-600 p-1.5 rounded-full shadow-lg z-20">
    <Star size={14} className="text-white fill-white" />
  </div>
)}


        {/* IN CART BADGE */}
        {isSelected && (
          <div className="absolute bottom-2 right-2 bg-[#f4a24f] text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg z-10">
            IN CART
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="flex flex-col gap-1 text-sm">
        <h3
          className={`font-semibold text-[14px] wrap-break-words whitespace-normal ${
            isSelected ? "text-[#f4a24f]" : "text-white"
          }`}
        >
          {item.name}
        </h3>

        <div className="flex items-center justify-between mt-1">
          <span className="font-bold text-[#f4a24f] text-[13px]">
            ₹{item.price}
          </span>

          <div className="flex items-center border border-[#f4a24f] rounded-full text-[12px]">
            <button onClick={decrement} className="px-2 py-1 text-white">−</button>
            <span className="px-2 text-white font-medium">{quantity}</span>
            <button onClick={increment} className="px-2 py-1 text-white">+</button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-2 w-full rounded-md py-1.5 text-[12px] font-bold transition-all
            ${
              added
                ? "bg-green-600 text-white"
                : isSelected
                ? "bg-zinc-800 text-[#f4a24f] border border-[#f4a24f]/50"
                : "bg-[#f4a24f] text-black hover:brightness-110"
            }`}
        >
          {added ? "Added ✓" : isSelected ? "Add More" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}
