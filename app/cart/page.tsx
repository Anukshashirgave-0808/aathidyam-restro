"use client"

import { useCart, CartItemType } from "@/components/CartContext"

import Link from "next/link"
import { useEffect, useState, useReducer } from "react"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cartItems, totalPrice, removeFromCart, updateQuantity, isInitialized } =
    useCart()

  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // 🔄 Force UI re-sync when cart updates
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    setMounted(true)

    const handleSync = () => forceUpdate()

    window.addEventListener("cart-updated", handleSync)
    window.addEventListener("storage", handleSync)

    return () => {
      window.removeEventListener("cart-updated", handleSync)
      window.removeEventListener("storage", handleSync)
    }
  }, [])

  // 🚫 Prevent hydration issues
  if (!mounted || !isInitialized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#f4a24f] text-xl animate-pulse font-serif italic">
          Preparing your kitchen...
        </div>
      </div>
    )
  }

  return (
    <>
     

      <main
        key={`${cartItems.length}-${totalPrice}`}
        className="max-w-3xl mx-auto p-6 mt-28 min-h-[70vh]"
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "2rem",
            background: "linear-gradient(90deg,#f6c97a,#f39c12,#f6c97a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 28px rgba(243,156,18,0.55)",
          }}
        >
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-gray-400 mb-6 text-lg">
              Your cart is currently empty.
            </p>
            <Link
              href="/menu"
              className="px-8 py-3 bg-[#f4a24f] text-black font-bold rounded-full hover:shadow-lg transition-transform hover:scale-105 inline-block"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto border-2 border-[#f4a24f] rounded-xl bg-black/80 p-6 space-y-4 shadow-2xl">
            {cartItems.map((item: CartItemType) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 bg-black/30 rounded-lg border border-white/5 hover:border-[#f4a24f]/30 transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover border border-gray-700"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-[#f4a24f] font-bold">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="px-3 py-1 bg-zinc-800 text-white hover:bg-zinc-700 transition"
                    >
                      −
                    </button>
                    <span className="px-3 text-white font-bold w-10 text-center bg-black/40">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1 bg-zinc-800 text-white hover:bg-zinc-700 transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-400 text-sm font-medium transition uppercase tracking-tighter"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-[#f4a24f]/40">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  Total Payable
                </p>
                <h2 className="text-3xl font-bold text-white">
                  ₹{totalPrice}
                </h2>
              </div>

              {/* ✅ ORDER NOW → CHECKOUT */}
              <button
                onClick={() => router.push("/checkout")}
                className="mt-4 md:mt-0 px-10 py-3 bg-[#f4a24f] text-black font-black rounded-lg hover:shadow-[0_0_20px_rgba(244,162,79,0.4)] transition-all active:scale-95"
              >
                ORDER NOW
              </button>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/menu"
                className="text-gray-400 text-sm hover:text-[#f4a24f] underline decoration-[#f4a24f]/30 underline-offset-4"
              >
                + Add more items to your meal
              </Link>
            </div>
          </div>
        )}
      </main>

      
    </>
  )
}
