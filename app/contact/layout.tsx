import type { Metadata } from 'next'
import Script from 'next/script'

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aios.llc"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://aios.llc/contact"
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there any cost for the AIOS consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The consultation is completely free with no obligation. We genuinely want to understand your business and see if we can help."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can AIOS get my marketing started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once we agree to partner, we can typically have your website live and marketing campaigns launched within 30-45 days. Some elements (like podcast production) may take a bit longer, but lead generation starts quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What if I'm already working with a marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's fine. Many of our partners have tried traditional agencies before and were frustrated by the lack of results or high costs. Our commission model is fundamentally different. Let's talk about what's working, what's not, and whether AIOS could be a better fit."
      }
    },
    {
      "@type": "Question",
      "name": "What information do I need to provide to AIOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Just basic information about your business: services you offer, geographic area you serve, current customer acquisition methods, and business goals."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be locked into a long-term contract with AIOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have a partnership agreement that outlines the commission structure and expectations, but we're not in the business of forcing relationships. If it's not working, we can part ways professionally."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know AIOS will actually deliver results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We don't make guarantees, but our commission model means we're highly motivated to deliver results. We only make money if you make money. We're transparent about what's working and what's not."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Contact AIOS - Schedule Free Consultation for Commission-Based Marketing',
  description: 'Contact AIOS to discuss commission-based marketing for your service business. Free consultation. No upfront costs. We generate customers for auto glass, PDR, roofing, window installation, and more.',
  openGraph: {
    title: 'Contact AIOS - Schedule Free Consultation',
    description: 'Free consultation for commission-based marketing. No upfront costs. We only win when you win.',
    url: 'https://aios.llc/contact',
    siteName: 'AIOS',
    type: 'website',
    images: [
      {
        url: 'https://aios.llc/images/aios-wm.png',
        width: 1200,
        height: 630,
        alt: 'Contact AIOS - Commission-Based Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AIOS - Schedule Free Consultation',
    description: 'Free consultation for commission-based marketing. No upfront costs. We only win when you win.',
    images: ['https://aios.llc/images/aios-wm.png'],
  },
  alternates: {
    canonical: 'https://aios.llc/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
