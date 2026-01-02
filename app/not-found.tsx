import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | AIOS',
  description: 'The page you\'re looking for doesn\'t exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-sand-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-sand-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-sand-700 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-sand-800 text-white px-8 py-3 rounded-md hover:bg-sand-900 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent border-2 border-sand-800 text-sand-800 px-8 py-3 rounded-md hover:bg-sand-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
