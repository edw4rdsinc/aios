import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AIOS',
  description: 'Terms of service for AIOS LLC marketing services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-sand-100 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-dark-800 mb-8">Terms of Service</h1>

        <div className="prose prose-lg text-dark-700 space-y-6">
          <p className="text-sm text-dark-500">Last updated: December 2025</p>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Agreement to Terms</h2>
            <p>By accessing or using the services provided by AIOS LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Services</h2>
            <p>AIOS LLC provides marketing and lead generation services on a commission-based model. The specific terms of service, including commission rates and payment terms, are established in individual partnership agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Commission Structure</h2>
            <p>Our commission-based model means we only earn when we generate sales for your business. Specific commission rates and attribution methods are defined in your partnership agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Intellectual Property</h2>
            <p>All content, designs, and materials created by AIOS LLC for marketing purposes remain the property of AIOS LLC unless otherwise specified in your partnership agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Limitation of Liability</h2>
            <p>AIOS LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-800 mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us at:</p>
            <p className="mt-2">
              <strong>AIOS LLC</strong><br />
              Email: legal@aios.llc
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
