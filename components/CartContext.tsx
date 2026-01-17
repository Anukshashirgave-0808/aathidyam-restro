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

  // ✅ Prevents Infinite Loops
  const cartStringRef = useRef<string>("")

  /* ✅ 1. Initial Load */
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

  /* ✅ 2. Save & Broadcast */
  useEffect(() => {
    if (!isInitialized) return

    const newString = JSON.stringify(cartItems)

    if (newString !== cartStringRef.current) {
      localStorage.setItem("cart", newString)
      cartStringRef.current = newString
      window.dispatchEvent(new Event("cart-updated"))
    }
  }, [cartItems, isInitialized])

  /* ✅ 3. Cross-Tab & Page Sync */
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
      } catch {}
    }

    window.addEventListener("storage", handleSync)
    window.addEventListener("cart-updated", handleSync)

    return () => {
      window.removeEventListener("storage", handleSync)
      window.removeEventListener("cart-updated", handleSync)
    }
  }, [])

  /* ✅ 4. Add To Cart */
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

  const removeFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

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

  /* ⭐ 5. CLEAR CART (ORDER SUCCESS) */
  const clearCart = useCallback(() => {
    setCartItems([])
    localStorage.removeItem("cart")
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
