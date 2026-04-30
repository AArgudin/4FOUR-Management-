import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackgroundCanvas from '@/components/BackgroundCanvas'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '4FOUR MGMT | Creative Management & Artist Development',
  description: 'Creative Management. Artist Development. Culture.',
  openGraph: {
    title: '4FOUR MGMT',
    description: 'Creative Management. Artist Development. Culture.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="bg-black text-white font-body antialiased">
        <BackgroundCanvas />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
