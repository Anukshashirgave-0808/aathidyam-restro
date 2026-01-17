"use client"

import { useCart } from "@/components/CartContext"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart()
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <>
      {/* MAIN PAGE */}
      <div className="pt-28 pb-20 bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-black/80 border border-[#f4a24f]/30 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-bold mb-6 text-[#f4a24f]">
              Customer Details
            </h2>

            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-2 focus:border-[#f4a24f] outline-none"
            />

            <p className="text-xs text-gray-400 mb-6">
              You are checking out as a guest.
            </p>

            <h3 className="text-lg font-semibold mb-4 text-white">
              Delivery Address
            </h3>

            <select className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-4">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white" placeholder="First name" />
              <input className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white" placeholder="Last name" />
            </div>

            <input className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-3" placeholder="Street address" />
            <input className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-4" placeholder="Apartment (optional)" />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white" placeholder="City" />
              <select className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white">
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Tamil Nadu</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white" placeholder="PIN Code" />
              <input className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white" placeholder="Phone (optional)" />
            </div>

            {/* PAYMENT */}
            <h3 className="text-lg font-semibold mb-3 text-white">
              Payment Method
            </h3>

            <div className="border border-[#f4a24f]/40 rounded-xl p-4 mb-6">
              <label className="flex items-center gap-3 text-white text-sm font-medium">
                <input type="radio" checked readOnly />
                Cash on Delivery
              </label>
              <p className="text-xs text-gray-400 mt-1 ml-6">
                Pay after delivery
              </p>
            </div>

            <button
              onClick={() => setShowSuccess(true)}
              className="w-full py-3 rounded-full font-black text-black bg-[#f4a24f] hover:shadow-[0_0_30px_rgba(244,162,79,0.5)] transition-all active:scale-95"
            >
              Place Order
            </button>

            <p className="text-[11px] text-gray-400 mt-4 text-center">
              By placing your order you agree to our Terms & Privacy Policy
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-black/80 border border-[#f4a24f]/30 rounded-2xl p-6 shadow-2xl h-fit sticky top-32">
            <h2 className="text-xl font-bold mb-6 text-[#f4a24f]">
              Order Summary
            </h2>

            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4">
                <img src={item.image} className="w-16 h-16 rounded-lg object-cover border border-zinc-700" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-gray-400">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-bold text-white">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

            <div className="border-t border-[#f4a24f]/30 mt-6 pt-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span className="text-[#f4a24f]">₹{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-black border border-[#f4a24f]/50 rounded-3xl p-10 text-center shadow-[0_0_50px_rgba(244,162,79,0.35)] animate-scale-in">
            <CheckCircle size={72} className="mx-auto text-[#f4a24f] mb-4" />

            <h2 className="text-2xl font-black text-white mb-2">
              Order Placed Successfully!
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              Your delicious food is being prepared 🍽️
            </p>

            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#f4a24f] text-black font-bold rounded-full hover:shadow-lg transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* SIMPLE ANIMATION */}
      <style jsx>{`
        .animate-scale-in {
          animation: scaleIn 0.35s ease-out;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}
