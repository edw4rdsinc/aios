import { defineField, defineType } from 'sanity'
import { siteField, getSiteTitle } from './siteField'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    siteField,
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Contact Email' },
        { name: 'phone', type: 'string', title: 'Phone Number' },
      ],
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Default Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Default Meta Description', rows: 3 },
        { name: 'ogImage', type: 'image', title: 'Default OG Image' },
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        { name: 'copyrightText', type: 'string', title: 'Copyright Text' },
        { name: 'disclaimer', type: 'text', title: 'Disclaimer', rows: 4 },
      ],
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      fields: [
        { name: 'googleAnalyticsId', type: 'string', title: 'Google Analytics ID' },
        { name: 'plausibleDomain', type: 'string', title: 'Plausible Domain' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'site',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Site Settings',
        subtitle: getSiteTitle(subtitle),
        media,
      }
    },
  },
})
