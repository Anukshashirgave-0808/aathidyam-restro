"use client"

import Image from "next/image"

export default function WhatsAppButton() {
  const phoneNumber = "919908727027" // your WhatsApp number in international format

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 z-50 animate-bounce hover:scale-110 transition-transform"
    >
      <div className="w-full h-full relative">
        <Image
          src="\WhatsApp.webp" // your WhatsApp logo in public folder
          alt="Chat on WhatsApp"
          fill
          className="object-contain"
        />
      </div>
    </a>
  )
}
