import { defineField } from 'sanity'

// List of all sites in the AIOS network
export const SITES = [
  { title: 'Windshield Advisor', value: 'windshield-advisor' },
  { title: 'Dent Advisor', value: 'dent-advisor' },
  { title: 'Glass Advisor', value: 'glass-advisor' },
  { title: 'XL Benefits', value: 'xl-benefits' },
  { title: 'CW Custom Works', value: 'cw-custom-works' },
] as const

export type SiteValue = typeof SITES[number]['value']

// Reusable site field for all content types
export const siteField = defineField({
  name: 'site',
  title: 'Site',
  type: 'string',
  options: {
    list: SITES.map(s => ({ title: s.title, value: s.value })),
    layout: 'dropdown',
  },
  validation: (Rule) => Rule.required().error('Site is required'),
  description: 'Which site does this content belong to?',
})

// Helper to get site title from value
export function getSiteTitle(value: string): string {
  return SITES.find(s => s.value === value)?.title || value
}
