"use client"

import Image from "next/image"
import { CartItemType } from "./CartContext"

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <div className="flex justify-between mb-2 p-2 border rounded">
      <div className="flex items-center gap-2">
        <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
        <div>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      </div>
      <p>x{item.quantity}</p>
    </div>
  )
}
