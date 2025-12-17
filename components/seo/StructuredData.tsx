interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service'
  data?: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'AIOS LLC',
          alternateName: 'Authentic Intelligence Operating System',
          url: 'https://aios.llc',
          logo: 'https://aios.llc/images/aios-wm.png',
          description: 'Commission-based marketing agency for auto and home service businesses. Zero upfront cost, commission only on sales we generate.',
          areaServed: [
            { '@type': 'City', name: 'Portland', containedInPlace: { '@type': 'State', name: 'Oregon' } },
            { '@type': 'City', name: 'Seattle', containedInPlace: { '@type': 'State', name: 'Washington' } },
            { '@type': 'City', name: 'Tacoma', containedInPlace: { '@type': 'State', name: 'Washington' } },
            { '@type': 'City', name: 'Boise', containedInPlace: { '@type': 'State', name: 'Idaho' } },
            { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
          ],
          sameAs: [],
          ...data,
        }
      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'AIOS LLC',
          description: 'Marketing agency for service businesses',
          ...data,
        }
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: {
            '@type': 'Organization',
            name: 'AIOS LLC',
          },
          ...data,
        }
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  )
}
