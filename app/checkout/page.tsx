"use client"

import { useCart } from "@/components/CartContext"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { createOrder } from "@/lib/order" // ✅ Added import

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    name: "",
    country: "India",
    street: "",
    city: "",
    state: "Andhra Pradesh",
    pin: "",
    phone: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (
      !/^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
        form.email
      )
    ) {
      newErrors.email = "Email should be like name@example.com"
    }

    if (!form.name.trim()) newErrors.name = "Name is required"
    else if (!/^[A-Za-z ]+$/.test(form.name))
      newErrors.name = "Name should contain only letters"

    if (!form.street.trim()) newErrors.street = "Street address is required"

    if (!form.city.trim()) newErrors.city = "City is required"
    else if (!/^[A-Za-z ]+$/.test(form.city))
      newErrors.city = "City should contain only letters"

    if (!form.pin.trim()) newErrors.pin = "PIN code is required"
    else if (!/^\d{6}$/.test(form.pin)) newErrors.pin = "PIN code should be exactly 6 digits"

    if (!form.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number should be exactly 10 digits"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ✅ Updated: handlePlaceOrder to save order automatically
  const handlePlaceOrder = async () => {
    if (!validate()) return

  const orderData = {
  email: form.email,
  name: form.name,
  country: form.country,
  street: form.street,
  city: form.city,
  state: form.state,

  pincode: form.pin,
  phone: form.phone,

  paymentMethod: "Cash on Delivery",
  isGuest: true,

  items: cartItems.map(item =>
    JSON.stringify({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })
  ),
}



    try {
      await createOrder(orderData) // Save order in Appwrite
      clearCart() // Clear cart immediately
      setShowSuccess(true) // Show success popup
    } catch (error) {
      console.error("Order failed:", error)
      alert("Failed to place order. Please try again.")
    }
  }

  return (
    <>
      <div className="pt-28 pb-20 bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-black/80 border border-[#f4a24f]/30 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-bold mb-6 text-[#f4a24f]">
              Customer Details
            </h2>

            {/* EMAIL */}
            <input
              type="text"
              placeholder="Email address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-1 focus:border-[#f4a24f] outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mb-3">{errors.email}</p>
            )}

            <p className="text-xs text-gray-400 mb-6">
              You are checking out as a guest.
            </p>

            <h3 className="text-lg font-semibold mb-4 text-white">
              Delivery Address
            </h3>

            {/* COUNTRY */}
            <select
              value={form.country}
              onChange={(e) =>
                setForm({ ...form, country: e.target.value })
              }
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-4"
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>

            {/* NAME */}
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value.replace(/[^A-Za-z ]/g, ""),
                })
              }
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-1"
            />
            {errors.name && (
              <p className="text-xs text-red-400 mb-3">{errors.name}</p>
            )}

            {/* STREET */}
            <input
              placeholder="Street address"
              value={form.street}
              onChange={(e) =>
                setForm({ ...form, street: e.target.value })
              }
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white mb-1"
            />
            {errors.street && (
              <p className="text-xs text-red-400 mb-3">{errors.street}</p>
            )}

            {/* CITY & STATE */}
            <div className="grid grid-cols-2 gap-4 mb-1">
              <input
                placeholder="City"
                value={form.city}
                onChange={(e) =>
                  setForm({
                    ...form,
                    city: e.target.value.replace(/[^A-Za-z ]/g, ""),
                  })
                }
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white"
              />
              <select
                value={form.state}
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value })
                }
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white"
              >
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Tamil Nadu</option>
              </select>
            </div>
            {errors.city && (
              <p className="text-xs text-red-400 mb-3">{errors.city}</p>
            )}

            {/* PIN & PHONE */}
            <div className="grid grid-cols-2 gap-4 mb-1">
              <input
                placeholder="PIN Code"
                value={form.pin}
                onChange={(e) =>
                  setForm({
                    ...form,
                    pin: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white"
              />
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white"
              />
            </div>
            {(errors.pin || errors.phone) && (
              <p className="text-xs text-red-400 mb-4">
                {errors.pin || errors.phone}
              </p>
            )}

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
              onClick={handlePlaceOrder} // ✅ Call Appwrite logic
              className="w-full py-3 rounded-full font-black text-black bg-[#f4a24f] hover:shadow-[0_0_30px_rgba(244,162,79,0.5)] transition-all active:scale-95"
            >
              Place Order
            </button>
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
          </div>
        </div>
      </div>

      {/* SUCCESS */}
      {showSuccess && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-black border border-[#f4a24f]/50 rounded-3xl p-10 text-center">
            <CheckCircle size={72} className="mx-auto text-[#f4a24f] mb-4" />
            <h2 className="text-2xl font-black text-white mb-2">
              Order Placed Successfully!
            </h2>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 bg-[#f4a24f] text-black font-bold rounded-full"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </>
  )
}
