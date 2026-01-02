import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import StructuredData from '@/components/seo/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | AIOS - Commission-Based Marketing Agency',
  description: 'Meet the team behind AIOS. We built a marketing agency where our success is tied directly to yours. Zero upfront cost, commission only on results.',
  openGraph: {
    title: 'About Us | AIOS - Commission-Based Marketing Agency',
    description: 'We built a marketing agency where our success is tied directly to yours.',
    url: 'https://aios.llc/about',
    siteName: 'AIOS',
    type: 'website',
    images: [
      {
        url: 'https://aios.llc/images/aios-wm.png',
        width: 1200,
        height: 630,
        alt: 'About AIOS - Commission-Based Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | AIOS - Commission-Based Marketing Agency',
    description: 'We built a marketing agency where our success is tied directly to yours.',
    images: ['https://aios.llc/images/aios-wm.png'],
  },
  alternates: {
    canonical: 'https://aios.llc/about',
  },
}

export default function AboutPage() {
  return (
    <div>
      <StructuredData
        type="breadcrumb"
        items={[
          { name: 'Home', url: 'https://aios.llc' },
          { name: 'About', url: 'https://aios.llc/about' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-sand-200 text-dark-800 py-20 overflow-hidden">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                We Built a Better Way to{' '}
                <span className="text-primary-500">Grow Service Businesses</span>
              </h1>
              <p className="text-xl text-gray-300">
                AIOS exists because traditional marketing doesn&apos;t work for service businesses. Expensive retainers, shared leads, no accountability—we fixed all of it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                AIOS—Authentic Intelligence Operating System—started with a simple observation: <strong className="text-dark-800">service business owners are great at what they do, but terrible at marketing.</strong> Not because they lack intelligence or work ethic, but because they&apos;re too busy actually doing the work.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We saw talented auto glass technicians, skilled PDR specialists, and reliable handymen struggling to grow their businesses. They were spending thousands on marketing agencies that promised the world and delivered nothing. They were buying shared leads that went nowhere. They were watching competitors with worse service steal customers simply because those competitors had a marketing budget.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                So we asked ourselves: <strong className="text-dark-800">What if we built an agency that only gets paid when our partners get paid?</strong>
              </p>
              <p className="text-lg leading-relaxed">
                That&apos;s AIOS. Zero upfront cost. Commission only on sales we generate. Complete alignment between our success and yours.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              What We Believe
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity First',
                desc: 'We tell your real story. No fake reviews, no fabricated testimonials, no BS. Authentic content builds real trust with real customers.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                )
              },
              {
                title: 'Partnership Over Transactions',
                desc: 'We don&apos;t want clients. We want partners. When you win, we win. When you struggle, we work harder. That&apos;s how it should be.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                )
              },
              {
                title: 'Innovation Without Complexity',
                desc: 'We use cutting-edge AI, GEO optimization, and automation—but you don&apos;t need to understand any of it. We handle the tech so you can focus on your craft.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                )
              },
              {
                title: 'Radical Transparency',
                desc: 'You see exactly where every lead comes from. No black boxes, no mysterious algorithms. Just clear data and honest reporting.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                )
              },
              {
                title: 'Results Over Promises',
                desc: 'We don&apos;t sell you on potential. We deliver actual customers. If we can&apos;t help you, we&apos;ll tell you upfront—and point you somewhere that can.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                )
              },
              {
                title: 'Flexibility Over Contracts',
                desc: 'We earn your business every month. No long-term lock-ins, no punitive cancellation fees. If we&apos;re not delivering, you can walk away.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                )
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {value.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              The people building AIOS and growing your business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Samuel Edwards */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-sand-100 rounded-xl p-8">
                <div className="w-24 h-24 bg-dark-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-primary-500">SE</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-2 text-center">Samuel Edwards</h3>
                <p className="text-primary-600 font-medium mb-4 text-center">Co-Founder, The Reconstructionists</p>
                <p className="text-gray-600">
                  Sam brings a unique combination of technical expertise and marketing intelligence to AIOS. With a background in software development and digital strategy, he architects the systems that power AIOS&apos;s GEO optimization and lead generation engines. He believes technology should serve people, not the other way around.
                </p>
              </div>
            </AnimatedSection>

            {/* Miguel Villahermosa */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-sand-100 rounded-xl p-8">
                <div className="w-24 h-24 bg-dark-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-primary-500">MV</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-2 text-center">Miguel Villahermosa</h3>
                <p className="text-primary-600 font-medium mb-4 text-center">Co-Founder</p>
                <p className="text-gray-600">
                  Miguel understands service businesses from the inside out. His hands-on experience in the auto service industry—combined with a relentless focus on customer acquisition—drives AIOS&apos;s partner success. He&apos;s the voice on the other end of the phone, the face on the podcast, and the person who makes sure partners get results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why We&apos;re Different */}
      <section className="py-20 bg-sand-200 text-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why We&apos;re Different
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-500 mb-4">$0</div>
                <h3 className="text-xl font-bold mb-2">Upfront Cost</h3>
                <p className="text-gray-400">
                  Traditional agencies charge $2K-$10K/month before delivering anything. We charge nothing until you make money.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-500 mb-4">%</div>
                <h3 className="text-xl font-bold mb-2">Commission Only</h3>
                <p className="text-gray-400">
                  We only earn when you earn. Our incentives are perfectly aligned with your success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-500 mb-4">100%</div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-400">
                  You see every lead, every attribution, every dollar. No hidden fees, no mystery metrics.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Ready to Partner with AIOS?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s talk about your business and see if we&apos;re a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-500 transition-all hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/"
                className="bg-transparent border-2 border-gray-300 text-dark-800 px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
