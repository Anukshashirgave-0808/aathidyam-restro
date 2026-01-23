"use client"

import { useCart } from "@/components/CartContext"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart()
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    email: "",
    name: "",
    street: "",
    city: "",
    pin: "",
    phone: "",
    country: "India", // Set default
    state: "Andhra Pradesh", // Set default
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}

    if (!form.email.trim()) e.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email should be like name@example.com"

    if (!form.name.trim()) e.name = "Name is required"
    if (!form.street.trim()) e.street = "Street address is required"
    if (!form.city.trim()) e.city = "City is required"

    if (!form.pin.trim()) e.pin = "PIN is required"
    else if (!/^\d{6}$/.test(form.pin)) e.pin = "PIN must be exactly 6 digits"

    if (!form.phone.trim()) e.phone = "Phone is required"
    else if (!/^\d{10}$/.test(form.phone)) e.phone = "Phone must be exactly 10 digits"

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handlePlaceOrder = async () => {
    if (!validate()) return
    setLoading(true)

    const orderData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      street: form.street,
      city: form.city,
      pin: form.pin,
      state: form.state,
      country: form.country,
      cartItems, 
      total: cartItems.reduce((s, i) => s + i.price * i.quantity, 0),
      paymentMethod: "Cash on Delivery",
      isGuest: true,
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (!response.ok) throw new Error(result.error || "Failed to place order")

      clearCart()
      setShowSuccess(true)
    } catch (err: any) {
      console.error("Checkout Error:", err.message)
      alert(`Order Failed: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="pt-28 pb-20 bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-3 gap-10">

          {/* LEFT: Customer Details Form */}
          <div className="lg:col-span-2 bg-black/80 border border-[#f4a24f]/30 rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-[#f4a24f] mb-6">Customer Details</h2>

            <input
              type="text"
              placeholder="Email address"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-2 focus:border-[#f4a24f] outline-none"
            />
            {errors.email && <p className="text-xs text-red-400 mb-2">{errors.email}</p>}

            <p className="text-[11px] text-gray-400 mb-4">You are checking out as a guest.</p>

            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-2 focus:border-[#f4a24f] outline-none"
            />
            {errors.name && <p className="text-xs text-red-400 mb-2">{errors.name}</p>}

            <h3 className="text-sm font-semibold text-white mt-4 mb-2">Delivery Address</h3>

            <input
              type="text"
              placeholder="Street address"
              value={form.street}
              onChange={e => setForm({ ...form, street: e.target.value })}
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-2 focus:border-[#f4a24f] outline-none"
            />
            {errors.street && <p className="text-xs text-red-400 mb-2">{errors.street}</p>}

            {/* UPDATED: Country & State Dropdowns */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <select
                value={form.country}
                onChange={e => setForm({ ...form, country: e.target.value })}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:border-[#f4a24f] outline-none"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>

              <select
                value={form.state}
                onChange={e => setForm({ ...form, state: e.target.value })}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:border-[#f4a24f] outline-none"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                placeholder="City"
                value={form.city}
                onChange={e => setForm({ ...form, city: e.target.value })}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:border-[#f4a24f] outline-none"
              />
              <input
                type="text"
                placeholder="PIN Code"
                value={form.pin}
                onChange={e => setForm({ ...form, pin: e.target.value })}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:border-[#f4a24f] outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-4 focus:border-[#f4a24f] outline-none"
            />

            {(errors.city || errors.pin || errors.phone) && (
              <p className="text-xs text-red-400 mb-4">{errors.city || errors.pin || errors.phone}</p>
            )}

            <h3 className="text-sm font-semibold text-white mb-2">Payment Method</h3>

            <div className="border border-[#f4a24f]/40 rounded-xl p-4 mb-6 text-sm">
              <label className="flex gap-3 text-white items-center">
                <input type="radio" checked readOnly />
                Cash on Delivery
              </label>
              <p className="text-[11px] text-gray-400 ml-6 mt-1">Pay after delivery</p>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className={`w-full py-2.5 rounded-full bg-[#f4a24f] text-sm text-black font-bold ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d98a3d] transition-colors'}`}
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-black/80 border border-[#f4a24f]/30 rounded-2xl p-6 sticky top-32 h-fit">
            <h2 className="text-lg font-bold text-[#f4a24f] mb-6">Order Summary</h2>

            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between mb-4 text-sm text-white">
                <img src={item.image} className="w-14 h-14 rounded-lg object-cover mr-4" alt={item.name} />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">₹{item.price} × {item.quantity}</p>
                </div>
                <span className="font-semibold">₹{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="border-t border-zinc-700 mt-4 pt-4 text-sm font-bold text-white flex justify-between">
              <span>Total</span>
              <span>₹{cartItems.reduce((s, i) => s + i.price * i.quantity, 0)}</span>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black p-8 rounded-3xl text-center border border-[#f4a24f]/50 shadow-2xl">
            <CheckCircle size={56} className="text-[#f4a24f] mx-auto mb-3" />
            <h2 className="text-lg text-white font-bold mb-4">Order Placed Successfully!</h2>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-2 bg-[#f4a24f] text-sm text-black rounded-full font-bold hover:bg-[#d98a3d] transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </>
  )
}