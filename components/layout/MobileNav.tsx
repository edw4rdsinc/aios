'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold text-dark-900">Menu</span>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-700 rounded-md"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <Link
            href="/auto"
            className="block py-3 px-4 text-lg font-medium text-dark-900 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
            onClick={onClose}
          >
            AIOS Auto
          </Link>
          <Link
            href="/home-services"
            className="block py-3 px-4 text-lg font-medium text-dark-900 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
            onClick={onClose}
          >
            AIOS Home
          </Link>
          <Link
            href="/about"
            className="block py-3 px-4 text-lg font-medium text-dark-900 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-3 px-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-center mt-6"
            onClick={onClose}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </div>
  )
}
