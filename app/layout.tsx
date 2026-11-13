import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Yakir's Fine Jewelry | Frost Yourself",
  description: "Timeless Radiance. Frost Yourself with Yakir's Fine Jewelry.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  )
}
