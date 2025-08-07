import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Misha Gholami - Creative Developer & Illustrator",
  description:
    "Portfolio of Misha Gholami, a creative developer and illustrator crafting interactive and aesthetic web experiences.",
  keywords: "web developer, creative developer, illustrator, portfolio, React, TypeScript, Next.js",
  authors: [{ name: "Misha Gholami" }],
  openGraph: {
    title: "Misha Gholami - Creative Developer & Illustrator",
    description: "Portfolio showcasing creative web development and illustration work",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
