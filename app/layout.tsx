import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { CartProvider } from "@/components/CartContext"
import ClientLayout from "@/components/ClientLayout"
import WhatsAppButton from "@/components/WhatsappButton" // ✅ ADD THIS

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aathidyam Restaurant | Authentic Cuisine",
  description:
    "Experience authentic South Indian culinary excellence at Aathidyam Restaurant.",
  icons: {
    icon: "/favicon-48x48.png",
    apple: "/favicon-48x48.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        <CartProvider>
          <ClientLayout>
            {children}
          </ClientLayout>

          {/* ✅ Floating WhatsApp Button (appears on all pages) */}
          <WhatsAppButton />

          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
