import { defineField, defineType } from 'sanity'
import { siteField, getSiteTitle } from './siteField'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  description: 'Business partners for referrals',
  fields: [
    siteField,
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'businessName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'state', type: 'string', title: 'State' },
        { name: 'zip', type: 'string', title: 'ZIP Code' },
      ],
    }),
    defineField({
      name: 'serviceArea',
      title: 'Service Area',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Cities, counties, or regions served',
    }),
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'yearsInBusiness',
      title: 'Years in Business',
      type: 'number',
    }),
    defineField({
      name: 'insuranceApproved',
      title: 'Insurance Approved',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      description: 'Display prominently on the site',
      initialValue: false,
    }),
    defineField({
      name: 'partnerSince',
      title: 'Partner Since',
      type: 'date',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      subtitle: 'site',
      city: 'address.city',
      media: 'logo',
    },
    prepare({ title, subtitle, city, media }) {
      return {
        title,
        subtitle: `${getSiteTitle(subtitle)}${city ? ` - ${city}` : ''}`,
        media,
      }
    },
  },
})
