'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sand-300 text-dark-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/aios-wm.png"
              alt="AIOS"
              width={120}
              height={48}
              className="h-10 w-auto mb-4 "
            />
            <p className="text-dark-700 text-sm">
              Your Sales &amp; Marketing Partner. We Only Win When You Win.
            </p>
            <p className="text-primary-500 text-sm mt-2 font-medium">
              Commission Only. Zero Upfront Cost.
            </p>
          </div>

          {/* AIOS Auto */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-800">AIOS Auto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auto#auto-glass" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Auto Glass Marketing
                </Link>
              </li>
              <li>
                <Link href="/auto#pdr" className="text-dark-700 hover:text-primary-600 transition-colors">
                  PDR Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/auto#mobile-mechanic" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Mobile Mechanic Leads
                </Link>
              </li>
              <li>
                <Link href="/auto#fleet" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Fleet Accounts
                </Link>
              </li>
            </ul>
          </div>

          {/* AIOS Home */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-800">AIOS Home</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/home-services#windows" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Window Installation
                </Link>
              </li>
              <li>
                <Link href="/home-services#roofing" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Roofing Services
                </Link>
              </li>
              <li>
                <Link href="/home-services#handyman" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Handyman Services
                </Link>
              </li>
              <li>
                <Link href="/home-services#pressure-washing" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Pressure Washing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-800">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-dark-700 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-700 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-2 mt-6 text-dark-800">Markets</h4>
            <p className="text-dark-700 text-sm">
              Portland, OR | Seattle, WA | Boise, ID | Las Vegas, NV
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-blue-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-dark-600">
            <p>&copy; {currentYear} AIOS LLC. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
