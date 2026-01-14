import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aathidyam Restaurant | Authentic South Indian Cuisine",
  description:
    "Experience authentic South Indian culinary excellence at Aathidyam Restaurant. Premium dosa, biryani, and traditional dishes in an elegant atmosphere.",
  icons: {
    icon: "/favicon-48x48.png",
    apple: "/favicon-48x48.png",
  },
};

// WhatsApp number (replace with your number including country code)
const WHATSAPP_NUMBER = "919876543210";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}

        {/* WhatsApp Floating Button */}
        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition-transform duration-300">
            <Image
              src="/whatsapp.webp" // updated to your webp logo
              alt="WhatsApp"
              width={32}
              height={32}
            />
          </div>
        </Link>

        <Analytics />
      </body>
    </html>
  );
}
