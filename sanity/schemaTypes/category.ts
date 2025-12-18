import { defineField, defineType } from 'sanity'
import { siteField, getSiteTitle } from './siteField'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    siteField,
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which category appears in navigation',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'site',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: getSiteTitle(subtitle),
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
