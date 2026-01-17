import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { CartProvider } from "@/components/CartContext"
import ClientLayout from "@/components/ClientLayout"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aathidyam Restaurant | Authentic South Indian Cuisine",
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
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
