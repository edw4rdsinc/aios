'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'

const industries = [
  'Auto Glass / Windshield Repair',
  'Paintless Dent Repair (PDR)',
  'Mobile Mechanic',
  'Window Installation',
  'Roofing',
  'Handyman Services',
  'Pressure Washing',
  'Other',
]

const revenueOptions = [
  'Under $10k',
  '$10k-$25k',
  '$25k-$50k',
  '$50k-$100k',
  '$100k+',
  'Prefer not to say',
]

const referralSources = [
  'Google Search',
  'Referral',
  'Social Media',
  'Podcast',
  'Other',
]

const faqs = [
  {
    q: 'Is there any cost for the consultation?',
    a: 'No. The consultation is completely free with no obligation. We genuinely want to understand your business and see if we can help.',
  },
  {
    q: 'How quickly can we get started?',
    a: "Once we agree to partner, we can typically have your website live and marketing campaigns launched within 30-45 days. Some elements (like podcast production) may take a bit longer, but lead generation starts quickly.",
  },
  {
    q: "What if I'm already working with a marketing agency?",
    a: "That's fine. Many of our partners have tried traditional agencies before and were frustrated by the lack of results or high costs. Our commission model is fundamentally different. Let's talk about what's working, what's not, and whether AIOS could be a better fit.",
  },
  {
    q: 'What information do I need to provide?',
    a: 'Just basic information about your business: services you offer, geographic area you serve, current customer acquisition methods, and business goals.',
  },
  {
    q: 'Will I be locked into a long-term contract?',
    a: "We have a partnership agreement that outlines the commission structure and expectations, but we're not in the business of forcing relationships. If it's not working, we can part ways professionally.",
  },
  {
    q: "How do I know you'll actually deliver results?",
    a: "You don't, and we don't make guarantees. But here's what we can tell you: We only make money if you make money. Our commission model means we're highly motivated to deliver results. We're transparent about what's working and what's not.",
  },
]

const serviceAreas = [
  {
    region: 'Pacific Northwest',
    cities: ['Portland, Oregon — Primary market', 'Tacoma, Washington', 'Seattle, Washington'],
  },
  {
    region: 'Mountain West',
    cities: ['Boise, Idaho', 'Meridian, Idaho'],
  },
  {
    region: 'Southwest',
    cities: ['Las Vegas, Nevada'],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
    otherIndustry: '',
    revenue: '',
    referralSource: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        industry: '',
        otherIndustry: '',
        revenue: '',
        referralSource: '',
        message: '',
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Let&apos;s Talk About{' '}
                <span className="text-primary-500">Growing Your Business</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Free consultation • No pressure • Just results-focused conversation
              </p>
              <p className="text-lg text-gray-400">
                Ready to stop relying on word-of-mouth and start building a predictable customer acquisition engine? Let&apos;s talk about how AIOS can become your marketing partner.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Ways to Connect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Two Easy Ways to Connect
            </h2>
            <p className="text-xl text-gray-600">
              Choose the option that works best for you:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-sand-100 rounded-xl p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-3">Schedule a Free Consultation</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Book a 30-minute call to discuss your business, your goals, and how AIOS can help you grow.
                </p>
                <a
                  href="#schedule"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold text-center hover:bg-primary-500 transition-all hover:scale-105"
                >
                  Book a Call
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-sand-100 rounded-xl p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-3">Send Us a Message</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Fill out the contact form and we&apos;ll respond within 1-2 business days.
                </p>
                <a
                  href="#contact-form"
                  className="inline-block bg-transparent border-2 border-gray-300 text-dark-800 px-6 py-3 rounded-md font-semibold text-center hover:border-primary-500 hover:text-primary-600 transition-all"
                >
                  Send Message
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Schedule Consultation */}
      <section id="schedule" className="py-20 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4 text-center">
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Use the scheduling tool below to book a free 30-minute consultation call. We&apos;ll discuss:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                'Your current customer acquisition methods and challenges',
                'Your business goals and growth targets',
                'How the AIOS commission model works',
                "Whether we're a good fit for partnership",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Calendly placeholder */}
            <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-lg">Calendly Scheduling Widget</p>
                <p className="text-gray-400 text-sm mt-2">Integration coming soon</p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-dark-800 mb-6">What to Expect:</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Free 30-minute consultation', desc: 'No cost, no commitment' },
                  { title: 'Honest conversation', desc: "We'll tell you if we think AIOS is a good fit" },
                  { title: 'No pressure', desc: 'Your opportunity to ask questions and learn' },
                  { title: 'Next steps', desc: "If we're aligned, we'll outline a partnership plan" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-800">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4 text-center">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Prefer to reach out via email first? Fill out the form below and we&apos;ll respond within 1-2 business days.
            </p>

            {submitStatus === 'success' ? (
              <div className="bg-primary-500/10 border border-primary-500 rounded-xl p-8 text-center">
                <svg className="w-16 h-16 text-primary-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-dark-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 1-2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-800 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-800 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-800 mb-2">
                      Phone <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-dark-800 mb-2">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your Business Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-dark-800 mb-2">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {formData.industry === 'Other' && (
                  <div>
                    <label htmlFor="otherIndustry" className="block text-sm font-medium text-dark-800 mb-2">
                      Please specify your industry <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="otherIndustry"
                      name="otherIndustry"
                      required
                      value={formData.otherIndustry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your industry"
                    />
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-dark-800 mb-2">
                      Current Monthly Revenue <span className="text-gray-400">(optional)</span>
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select range</option>
                      {revenueOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-dark-800 mb-2">
                      How did you hear about AIOS?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select source</option>
                      {referralSources.map(source => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-800 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your business, your customer acquisition challenges, and what you're hoping to achieve. We're here to help."
                  />
                </div>

                <p className="text-sm text-gray-500">
                  Your information is confidential and will never be shared. Email is not a secure form of communication, so please avoid including sensitive financial information in your initial message.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-500 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              What to Expect After You Reach Out
            </h2>
            <p className="text-xl text-gray-600">
              We know reaching out to a new marketing partner can feel uncertain. Here&apos;s exactly what happens next:
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: "We'll Respond Within 1-2 Business Days",
                desc: "You'll hear back from us via email or phone (whichever you prefer) within 1-2 business days. If you don't hear from us, please check your spam folder or reach out again.",
              },
              {
                step: '2',
                title: "We'll Schedule a Free Consultation",
                desc: "If you haven't already booked a call, we'll find a time that works for you. The consultation is 30 minutes, completely free, and focused on understanding your business.",
              },
              {
                step: '3',
                title: "We'll Discuss Fit and Strategy",
                desc: "On the call, we'll learn about your business, explain how AIOS works, discuss whether we're a good fit, and outline a potential strategy for generating leads.",
              },
              {
                step: '4',
                title: "We'll Propose a Partnership (If We're Aligned)",
                desc: "If we both think there's a good fit, we'll draft a simple partnership agreement outlining the commission structure, explain tracking mechanisms, and answer any remaining questions.",
              },
              {
                step: '5',
                title: "We'll Get to Work",
                desc: "Once the partnership agreement is signed, we'll onboard you, build or optimize your website, record a podcast episode featuring you, implement tracking systems, and launch marketing campaigns.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={500}>
            <p className="text-center text-gray-600 mt-8 bg-white rounded-xl p-6 shadow-sm">
              <strong className="text-dark-800">If we&apos;re not the right fit, that&apos;s okay too.</strong> We&apos;ll provide recommendations and point you in the right direction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Markets We Serve
            </h2>
            <p className="text-xl text-gray-600">
              AIOS currently partners with service businesses in the following markets:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <AnimatedSection key={area.region} animation="fade-up" delay={index * 100}>
                <div className="bg-sand-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-dark-800 mb-4">{area.region}</h3>
                  <ul className="space-y-2">
                    {area.cities.map(city => (
                      <li key={city} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up">
            <div className="bg-dark-800 text-white rounded-xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Expanding to New Markets</h3>
              <p className="text-gray-300">
                We&apos;re actively exploring partnerships in additional markets. If you&apos;re outside our current service areas but think AIOS could be a fit, reach out anyway — we&apos;re open to expansion.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Common Questions Before You Reach Out
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-dark-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-4">
              Get in Touch Directly
            </h2>
            <p className="text-xl text-gray-600">
              Prefer to reach out directly? You can contact us at:
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="bg-sand-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark-800 mb-1">Email</h3>
                <p className="text-gray-600">hello@aios.llc</p>
              </div>
              <div className="bg-sand-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark-800 mb-1">Phone</h3>
                <p className="text-gray-600">Coming soon</p>
              </div>
              <div className="bg-sand-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark-800 mb-1">Office Hours</h3>
                <p className="text-gray-600">Mon-Fri, 9AM-6PM PST</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              You&apos;re One Partnership Away from{' '}
              <span className="text-primary-500">Predictable Growth</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop competing on price. Stop hoping for referrals. Start building a customer acquisition engine that works for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#schedule"
                className="bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-500 transition-all hover:scale-105"
              >
                Schedule Free Consultation
              </a>
              <a
                href="#contact-form"
                className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:border-primary-500 hover:text-primary-500 transition-all"
              >
                Send Us a Message
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
