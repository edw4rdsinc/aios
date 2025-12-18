import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AIOS',
  description: 'Privacy policy for AIOS LLC marketing services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sand-100 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-dark-800 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-dark-700 space-y-6">
          <p className="text-sm text-dark-500">Last updated: December 2025</p>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Information We Collect</h2>
            <p>AIOS LLC collects information you provide directly to us, such as when you fill out a contact form, schedule a consultation, or communicate with us. This may include your name, email address, phone number, business name, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Communicate with you about our services</li>
              <li>Analyze and improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              <strong>AIOS LLC</strong><br />
              Email: privacy@aios.llc
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
