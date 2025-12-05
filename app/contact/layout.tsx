import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact AIOS - Schedule Free Consultation for Commission-Based Marketing',
  description: 'Contact AIOS to discuss commission-based marketing for your service business. Free consultation. No upfront costs. We generate customers for auto glass, PDR, roofing, window installation, and more.',
  openGraph: {
    title: 'Contact AIOS - Schedule Free Consultation',
    description: 'Free consultation for commission-based marketing. No upfront costs. We only win when you win.',
    url: 'https://aios.marketing/contact',
    siteName: 'AIOS',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aios.marketing/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
