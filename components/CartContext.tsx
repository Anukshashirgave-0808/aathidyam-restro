"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react"

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
  clearCart: () => void
  totalPrice: number
  isInitialized: boolean
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  const cartStringRef = useRef<string>("")

  /* 1️⃣ Load from sessionStorage on init */
  useEffect(() => {
    const stored = sessionStorage.getItem("cart")
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

  /* 2️⃣ Save to sessionStorage + trigger update event */
  useEffect(() => {
    if (!isInitialized) return
    const newString = JSON.stringify(cartItems)
    if (newString !== cartStringRef.current) {
      sessionStorage.setItem("cart", newString)
      cartStringRef.current = newString
      // dispatch custom event for immediate update
      window.dispatchEvent(new Event("cart-updated"))
    }
  }, [cartItems, isInitialized])

  /* 3️⃣ Listen for cart-updated to immediately reflect changes */
  useEffect(() => {
    const handleCartUpdate = () => {
      const stored = sessionStorage.getItem("cart")
      if (!stored || stored === cartStringRef.current) return
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setCartItems(parsed)
          cartStringRef.current = stored
        }
      } catch {}
    }

    window.addEventListener("cart-updated", handleCartUpdate)
    return () => window.removeEventListener("cart-updated", handleCartUpdate)
  }, [])

  /* 4️⃣ Add To Cart */
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
      return [...prev, item]
    })
  }, [])

  /* 5️⃣ Remove from cart */
  const removeFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  /* 6️⃣ Update quantity */
  const updateQuantity = useCallback(
    (id: number, qty: number) => {
      if (qty <= 0) {
        removeFromCart(id)
        return
      }
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
      )
    },
    [removeFromCart]
  )

  /* 7️⃣ Clear Cart */
  const clearCart = useCallback(() => {
    setCartItems([])
    sessionStorage.removeItem("cart")
    cartStringRef.current = ""
    window.dispatchEvent(new Event("cart-updated"))
  }, [])

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
        clearCart,
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
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
