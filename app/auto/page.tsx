import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import StructuredData from '@/components/seo/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AIOS Auto | Marketing for Auto Glass, PDR & Mobile Mechanics',
  description: 'Commission-based marketing for auto service businesses. Auto glass, windshield repair, paintless dent repair, mobile mechanics. Zero upfront cost, commission only on sales we generate.',
  openGraph: {
    title: 'AIOS Auto | Marketing for Auto Glass, PDR & Mobile Mechanics',
    description: 'Zero upfront cost marketing for auto service businesses. We only get paid when you get paid.',
    url: 'https://aios.llc/auto',
    siteName: 'AIOS',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aios.llc/auto',
  },
}

export default function AutoPage() {
  return (
    <div>
      <StructuredData
        type="service"
        data={{
          name: 'AIOS Auto Marketing Services',
          description: 'Commission-based marketing for auto glass, PDR, and mobile mechanic businesses',
          serviceType: 'Marketing Services',
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-dark-800 text-white py-20 overflow-hidden">
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
                AIOS Auto
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                More Windshields. More Dents. More Revenue.{' '}
                <span className="text-primary-500">Zero Risk.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We generate customers for auto glass, PDR, and mobile mechanic businesses. You pay nothing until we deliver paying customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105 text-center"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Auto Services We Market
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in generating customers for these automotive service verticals.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Auto Glass */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div id="auto-glass" className="bg-sand-100 rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">Auto Glass &amp; Windshield</h3>
                <p className="text-gray-600 mb-6">
                  Retail windshield replacements, chip repairs, and commercial fleet accounts. We drive customers searching for &quot;windshield replacement near me&quot; directly to you.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Retail windshield replacement leads
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rock chip repair customers
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ADAS recalibration referrals
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  Example: 20+ jobs/month = $6,000 revenue, $600 commission
                </p>
              </div>
            </AnimatedSection>

            {/* PDR */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div id="pdr" className="bg-sand-100 rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">Paintless Dent Repair</h3>
                <p className="text-gray-600 mb-6">
                  High-margin PDR work from retail customers and fleet accounts. We position you as the trusted dent expert in your market.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Retail hail damage repairs
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Door ding and parking lot dent customers
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fleet and dealership accounts
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  Example: Fleet account = $3,000/day revenue, $300/day commission
                </p>
              </div>
            </AnimatedSection>

            {/* Mobile Mechanic */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div id="mobile-mechanic" className="bg-sand-100 rounded-xl p-8 h-full">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">Mobile Mechanics</h3>
                <p className="text-gray-600 mb-6">
                  Customers want convenience. We connect you with people searching for mechanics who come to them.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Oil changes and routine maintenance
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Brake and battery replacements
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Diagnostics and minor repairs
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-600 font-medium">
                  Convenience sells—we help you reach busy customers
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fleet Accounts Section */}
      <section id="fleet" className="py-20 bg-dark-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <span className="inline-block px-4 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
                Fleet Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Unlock Fleet Revenue Streams
              </h2>
              <p className="text-gray-300 mb-6">
                Fleet accounts are the holy grail of auto services—recurring revenue, predictable work, and higher volume. AIOS helps you land and keep these accounts.
              </p>
              <ul className="space-y-4">
                {[
                  'U-Haul and rental car companies',
                  'Corporate fleet maintenance contracts',
                  'Dealership partnerships',
                  'Insurance company preferred vendor programs',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <h3 className="text-xl font-bold mb-6">Fleet Account Potential</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Single Fleet Contract</span>
                      <span className="text-primary-400 font-bold">$50K-$200K/year</span>
                    </div>
                    <div className="w-full bg-dark-800 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Your Revenue (After Commission)</span>
                      <span className="text-white font-bold">$45K-$180K/year</span>
                    </div>
                    <div className="w-full bg-dark-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">AIOS Commission</span>
                      <span className="text-gray-400 font-bold">Varies by agreement</span>
                    </div>
                    <div className="w-full bg-dark-800 rounded-full h-2">
                      <div className="bg-gray-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  We help you land fleet accounts you&apos;d never reach on your own—and you keep the majority of every dollar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              What AIOS Auto Provides
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to attract and convert customers—we handle it all.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'GEO-Optimized Website', desc: 'Custom site designed to rank in Google, ChatGPT, and AI search results.' },
              { title: 'Podcast Feature', desc: 'We interview you on our podcast and repurpose content across channels.' },
              { title: 'Social Media Management', desc: 'Nextdoor, Facebook, Instagram presence that builds local trust.' },
              { title: 'Google LSA & Ads', desc: 'Paid campaigns that put you at the top when customers search.' },
              { title: 'Lead Attribution', desc: 'Tracking numbers and forms so you know exactly where leads come from.' },
              { title: 'Ongoing Optimization', desc: 'We continuously improve campaigns based on real performance data.' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className="flex items-start p-4">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Grow Your Auto Service Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stop relying on word-of-mouth. Start building a customer acquisition engine that works 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/home-services"
                className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-400 transition-all"
              >
                View AIOS Home Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
