import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://aios.llc'),
  title: {
    default: 'AIOS | Commission-Based Marketing for Service Businesses',
    template: '%s | AIOS',
  },
  description: 'Zero upfront cost, commission only on sales we generate. Marketing for auto glass, PDR, mobile mechanics, roofing, window installation, and more.',
  keywords: ['commission-based marketing', 'auto glass marketing', 'PDR marketing', 'mobile mechanic leads', 'window installation marketing', 'roofing leads', 'service business marketing'],
  authors: [{ name: 'AIOS LLC' }],
  creator: 'AIOS LLC',
  publisher: 'AIOS LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aios.llc',
    siteName: 'AIOS',
    title: 'AIOS | Commission-Based Marketing for Service Businesses',
    description: 'Zero upfront cost, commission only on sales we generate. We only win when you win.',
    images: [
      {
        url: '/images/aios-wm.png',
        width: 1200,
        height: 630,
        alt: 'AIOS - Commission-Based Marketing for Service Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIOS | Marketing That Only Wins When You Win',
    description: 'Commission-based marketing for auto and home service businesses.',
    images: ['/images/aios-wm.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
