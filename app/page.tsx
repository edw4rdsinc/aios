import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import StructuredData from '@/components/seo/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AIOS | Zero-Cost Marketing for Auto & Home Service Businesses',
  description: 'Your sales & marketing partner. No upfront costs, no retainers. We earn commission only on sales we generate for auto glass, PDR, mobile mechanics, window installation, roofing, and handyman businesses.',
  openGraph: {
    title: 'AIOS | Zero-Cost Marketing for Auto & Home Service Businesses',
    description: 'Your sales & marketing partner. No upfront costs, no retainers. We earn commission only on sales we generate.',
    url: 'https://aios.llc',
    siteName: 'AIOS',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aios.llc',
  },
}

export default function HomePage() {
  return (
    <div>
      <StructuredData type="organization" />

      {/* Hero Section */}
      <section className="relative bg-dark-950 text-white min-h-[70vh] flex items-center overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Your Service Business Deserves Customers.{' '}
                <span className="text-primary-500">Not Marketing Headaches.</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-4 text-gray-300">
                Zero upfront cost. <span className="text-primary-400 font-semibold">Commission only on sales we generate.</span> That&apos;s it.
              </p>
              <p className="text-lg mb-8 text-gray-400">
                We handle your marketing, sales, and customer acquisition so you can focus on what you do best: delivering exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-500 text-dark-950 px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20 text-center"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="#how-it-works"
                  className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-400 transition-all text-center"
                >
                  See How It Works
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Trusted by service businesses in auto glass, PDR, mobile mechanics, window installation, roofing, and more.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Choose Your Vertical Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Which Industry Are You In?
            </h2>
            <p className="text-xl text-gray-600">
              AIOS specializes in two service verticals. Choose yours to see how we drive customers to your business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AIOS Auto */}
            <AnimatedSection animation="fade-up" delay={100}>
              <Link href="/auto" className="block group">
                <div className="bg-dark-950 rounded-xl p-8 h-full border-2 border-transparent hover:border-primary-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m0 0l-4-4m4 4l-4 4m-4 6h8m0 0l-4 4m4-4l-4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AIOS Auto</h3>
                  <ul className="text-gray-400 space-y-2 mb-6">
                    <li>Auto Glass &amp; Windshield Repair</li>
                    <li>Paintless Dent Repair (PDR)</li>
                    <li>Mobile Mechanics</li>
                    <li>Fleet Services</li>
                  </ul>
                  <span className="inline-flex items-center text-primary-400 font-semibold group-hover:text-primary-300 transition-colors">
                    Explore AIOS Auto
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* AIOS Home */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Link href="/home-services" className="block group">
                <div className="bg-dark-950 rounded-xl p-8 h-full border-2 border-transparent hover:border-primary-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AIOS Home</h3>
                  <ul className="text-gray-400 space-y-2 mb-6">
                    <li>Window Installation</li>
                    <li>Roofing Services</li>
                    <li>Handyman Services</li>
                    <li>Pressure Washing</li>
                  </ul>
                  <span className="inline-flex items-center text-primary-400 font-semibold group-hover:text-primary-300 transition-colors">
                    Explore AIOS Home
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-aios-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-6">
              You&apos;re Great at Your Trade. But Finding Customers Shouldn&apos;t Be This Hard.
            </h2>
            <div className="text-left space-y-4 text-lg text-gray-600">
              <p>
                <strong className="text-dark-900">You&apos;re too busy to do marketing.</strong> Between jobs, customer calls, and managing operations, there&apos;s no time left for building a marketing engine.
              </p>
              <p>
                <strong className="text-dark-900">Traditional agencies are too expensive.</strong> $2,000-$10,000/month retainers with no guarantee of results? That&apos;s not sustainable for a small business.
              </p>
              <p>
                <strong className="text-dark-900">Lead services waste your time.</strong> You&apos;re paying for leads that are shared with 5 other competitors. Most don&apos;t convert, and you&apos;re just throwing money away.
              </p>
              <p>
                <strong className="text-dark-900">You rely on word-of-mouth.</strong> It got you this far, but you&apos;re stuck. You can&apos;t scale beyond your immediate network.
              </p>
            </div>
            <p className="text-xl font-semibold text-dark-900 mt-8">
              The truth is: You need customers, not complexity. You need a partner who only wins when you win.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Introducing AIOS: Your Partner That Only Gets Paid When You Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AIOS is not a marketing agency. We&apos;re your outsourced sales and marketing team&mdash;and we only earn money when we bring you paying customers.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">$0</span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">Zero Upfront Cost</h3>
                <p className="text-gray-600">No retainers. No monthly fees. No contracts locking you in. You pay nothing until we deliver results.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">%</span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">Commission Model</h3>
                <p className="text-gray-600">We earn a commission on sales we generate for you. That&apos;s it. If we don&apos;t bring you customers, we don&apos;t get paid.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">Full-Service Marketing</h3>
                <p className="text-gray-600">We build your website, create content, run ads, manage leads, and optimize everything for results.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">Proven Systems</h3>
                <p className="text-gray-600">GEO optimization, AI-powered content, podcasts, and social media to put you in front of customers searching for your services.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" className="text-center mt-12">
            <p className="text-2xl font-bold text-primary-600">
              The Result? More customers. More revenue. Zero risk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-dark-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How AIOS Brings You Customers
            </h2>
            <p className="text-xl text-gray-400">
              Our process is simple, scalable, and designed to generate real revenue.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Build Your Engine', desc: 'Custom GEO-optimized website, podcast content, social media presence' },
              { step: '2', title: 'Customers Find You', desc: 'Your business appears in search results when customers need you' },
              { step: '3', title: 'Track Every Lead', desc: 'Custom forms, tracking numbers, full attribution transparency' },
              { step: '4', title: 'You Do Your Thing', desc: 'Customer calls, you provide exceptional service, they pay you' },
              { step: '5', title: 'We Get Paid', desc: 'You report the sale, we invoice our commission. Everyone wins.' },
            ].map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-dark-950">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Why Service Businesses Choose AIOS
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Zero Financial Risk', desc: 'You don\'t pay a dime unless we bring you paying customers. No retainers, no setup fees, no hidden costs.' },
              { title: 'Aligned Incentives', desc: 'We only make money when you make money. Your success is our success.' },
              { title: 'Proven Expertise', desc: 'We\'ve built GEO-optimized websites, launched content marketing engines, and generated leads for service businesses just like yours.' },
              { title: 'Technology Advantage', desc: 'We use cutting-edge AI, automation, and GEO strategies that most agencies don\'t even understand yet.' },
              { title: 'Full Transparency', desc: 'You see exactly where your leads come from. Custom tracking systems ensure accurate attribution and reporting.' },
              { title: 'Ongoing Optimization', desc: 'We don\'t just set it and forget it. We continuously test, refine, and improve your campaigns to maximize results.' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className="bg-aios-light-grey rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-aios-light-grey">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { q: 'How do I know AIOS actually generated the sale?', a: 'We use custom tracking mechanisms including unique forms, dedicated tracking phone numbers, UTM codes, and analytics. Everything is transparent—you\'ll know exactly which customers came from AIOS.' },
              { q: 'What if I already have a website?', a: 'Great! We can optimize your existing site or build a new one from scratch. Either way, we ensure it\'s set up to convert visitors into leads and track attribution properly.' },
              { q: 'How does the commission work?', a: 'We agree on a fair commission rate based on your business and margins. You pay commission on the gross sale amount from customers we generate. Simple, transparent, and customized to your business.' },
              { q: 'How long does it take to see results?', a: 'It varies. Some partners see leads within 30 days. Others take 60-90 days as we build content, optimize campaigns, and gain traction. The marketing engine gets stronger over time.' },
              { q: 'Do you work with multiple businesses in the same area?', a: 'We offer exclusivity within your vertical and metro area. If you\'re our auto glass partner in Portland, we won\'t sign another auto glass company in Portland.' },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-dark-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Stop Guessing and Start Growing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let&apos;s talk about your business, your goals, and how AIOS can become your customer acquisition partner.
            </p>
            <p className="text-gray-500 mb-8">
              No pressure. No obligation. Just a conversation about results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-500 text-dark-950 px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/auto"
                className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-400 transition-all"
              >
                Learn More About AIOS Auto
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
