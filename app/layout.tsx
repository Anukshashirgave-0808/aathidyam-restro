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

       

        <Analytics />
      </body>
    </html>
  );
}
