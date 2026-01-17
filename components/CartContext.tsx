"use client"

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react"

export interface CartItemType {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartContextType {
  cartItems: CartItemType[]
  addToCart: (item: CartItemType) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, qty: number) => void
  totalPrice: number
  isInitialized: boolean
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  
  // ✅ 1. Prevents Infinite Loops
  // This ref keeps track of what is CURRENTLY in localStorage 
  // so we don't trigger updates if nothing actually changed.
  const cartStringRef = useRef<string>("")

  /* ✅ 2. Initial Load (Only once on startup) */
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored && stored !== "undefined") {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setCartItems(parsed)
          cartStringRef.current = stored
        }
      } catch (e) {
        console.error("Cart Load Error", e)
      }
    }
    setIsInitialized(true)
  }, [])

  /* ✅ 3. Save & Broadcast Signal */
  useEffect(() => {
    if (!isInitialized) return
    
    const newString = JSON.stringify(cartItems)
    
    // Only update localStorage and broadcast if the data is actually different
    if (newString !== cartStringRef.current) {
      localStorage.setItem("cart", newString)
      cartStringRef.current = newString
      
      // Tell other components (Header/Cart Page) to update NOW
      window.dispatchEvent(new Event("cart-updated"))
    }
  }, [cartItems, isInitialized])

  /* ✅ 4. Sync Across Pages (The "Add More" Fix) */
  useEffect(() => {
    const handleSync = () => {
      const stored = localStorage.getItem("cart")
      if (!stored || stored === cartStringRef.current) return 

      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          cartStringRef.current = stored
          setCartItems(parsed)
        }
      } catch (e) {}
    }

    window.addEventListener("storage", handleSync)
    window.addEventListener("cart-updated", handleSync)
    return () => {
      window.removeEventListener("storage", handleSync)
      window.removeEventListener("cart-updated", handleSync)
    }
  }, [])

  /* ✅ 5. Functional Add To Cart (Preserves Old Items) */
  const addToCart = useCallback((item: CartItemType) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }

      // Keep all previous items (...prev) and add the new one
      return [...prev, item]
    })
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    )
  }, [removeFromCart])

  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        isInitialized,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}