import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import StructuredData from '@/components/seo/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AIOS Home | Marketing for Window, Roofing & Handyman Services',
  description: 'Commission-based marketing for home service businesses. Window installation, roofing, handyman, pressure washing. Zero upfront cost, commission only on sales we generate.',
  openGraph: {
    title: 'AIOS Home | Marketing for Window, Roofing & Handyman Services',
    description: 'Zero upfront cost marketing for home service businesses. We only get paid when you get paid.',
    url: 'https://aios.llc/home-services',
    siteName: 'AIOS',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aios.llc/home-services',
  },
}

export default function HomeServicesPage() {
  return (
    <div>
      <StructuredData
        type="service"
        data={{
          name: 'AIOS Home Marketing Services',
          description: 'Commission-based marketing for window installation, roofing, handyman, and pressure washing businesses',
          serviceType: 'Marketing Services',
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-dark-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
                AIOS Home
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                More Projects. More Homeowners.{' '}
                <span className="text-primary-500">Zero Marketing Costs.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We connect homeowners with trusted contractors. Window installation, roofing, handyman services, pressure washing—we bring you customers ready to hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-500 text-dark-950 px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105 text-center"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#services"
                  className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-400 transition-all text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Home Services We Market
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Homeowners need trustworthy, reliable contractors. We position you as the obvious choice.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Window Installation */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div id="windows" className="bg-aios-light-grey rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">Window Installation</h3>
                <p className="text-gray-600 mb-6">
                  High-ticket residential and commercial window projects. We drive homeowners researching window replacement directly to your business.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full home window replacement projects
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Energy-efficient upgrade customers
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom and specialty window installations
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  Example: $5,000-$15,000 projects = $500-$1,500 commission per job
                </p>
              </div>
            </AnimatedSection>

            {/* Roofing */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div id="roofing" className="bg-aios-light-grey rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">Roofing Services</h3>
                <p className="text-gray-600 mb-6">
                  Residential roof repairs and full replacements. Homeowners searching for roofers need to trust who they hire—we build that trust before they call.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full roof replacement projects
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Storm damage repair customers
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Inspection and maintenance leads
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  High-ticket projects with significant revenue potential
                </p>
              </div>
            </AnimatedSection>

            {/* Handyman */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div id="handyman" className="bg-aios-light-grey rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">Handyman Services</h3>
                <p className="text-gray-600 mb-6">
                  General repairs, installations, and home improvements. Homeowners want someone reliable they can call for any project.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Home repair and maintenance calls
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Furniture assembly and mounting
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Small renovation projects
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  Build recurring customer relationships from consistent leads
                </p>
              </div>
            </AnimatedSection>

            {/* Pressure Washing */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div id="pressure-washing" className="bg-aios-light-grey rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">Pressure Washing</h3>
                <p className="text-gray-600 mb-6">
                  Exterior cleaning for driveways, siding, decks, and commercial properties. Visual transformation that sells itself.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Driveway and sidewalk cleaning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    House siding and deck washing
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Commercial property maintenance
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  Seasonal demand + visual before/after content = marketing gold
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-dark-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <span className="inline-block px-4 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
                Building Trust
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Homeowners Hire Contractors They Trust
              </h2>
              <p className="text-gray-300 mb-6">
                Home services are personal. People are inviting you into their homes, trusting you with expensive projects. AIOS builds that trust before they ever pick up the phone.
              </p>
              <ul className="space-y-4">
                {[
                  'Podcast episodes featuring your expertise and story',
                  'Local content positioning you as the neighborhood expert',
                  'Reviews and social proof across platforms',
                  'Professional website that converts visitors to leads',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-dark-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="bg-dark-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">What Sets You Apart</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Your Story, Amplified</h4>
                      <p className="text-gray-400 text-sm">We tell your story through podcasts, blogs, and social media that resonate with local homeowners.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Local Dominance</h4>
                      <p className="text-gray-400 text-sm">GEO-optimized content puts you in front of homeowners in your exact service area.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Built-In Credibility</h4>
                      <p className="text-gray-400 text-sm">Professional presence that makes you the obvious choice over competitors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              What AIOS Home Provides
            </h2>
            <p className="text-xl text-gray-600">
              Complete marketing infrastructure—from first impression to signed contract.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'GEO-Optimized Website', desc: 'Custom site designed to rank when homeowners search for your services.' },
              { title: 'Local Content Marketing', desc: 'Blogs, guides, and content that position you as the local expert.' },
              { title: 'Nextdoor Presence', desc: 'The #1 platform for local recommendations—we manage your presence.' },
              { title: 'Social Media Management', desc: 'Facebook, Instagram content that builds community trust.' },
              { title: 'Google LSA & Ads', desc: 'Paid campaigns that put you at the top of local search results.' },
              { title: 'Lead Tracking', desc: 'Know exactly which customers came from AIOS marketing efforts.' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className="flex items-start p-4">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Grow Your Home Service Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stop waiting for referrals. Start building a marketing engine that brings homeowners to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-500 text-dark-950 px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/auto"
                className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-400 transition-all"
              >
                View AIOS Auto Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
