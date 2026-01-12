"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  category: string
}

export default function MenuCard({ item }: { item: MenuItem }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-xl mb-4 w-full aspect-square bg-muted">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFavorited
              ? "bg-accent text-accent-foreground scale-100"
              : "bg-background/80 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <Heart size={20} fill={isFavorited ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors flex-1">
            {item.name}
          </h3>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mt-1 whitespace-nowrap">
            {item.category}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
