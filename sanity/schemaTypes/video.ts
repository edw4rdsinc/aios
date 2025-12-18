import { defineField, defineType } from 'sanity'
import { siteField, getSiteTitle } from './siteField'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
    { name: 'publishing', title: 'Publishing' },
  ],
  fields: [
    { ...siteField, group: 'publishing' },

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
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
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL',
      group: 'content',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Optional: Upload video file directly',
      group: 'content',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'transcript',
      title: 'Transcript',
      type: 'text',
      rows: 10,
      description: 'Full video transcript for accessibility and SEO',
      group: 'content',
    }),
    defineField({
      name: 'referencedBlogs',
      title: 'Referenced Blog Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }],
      group: 'content',
    }),
    defineField({
      name: 'referencedWhitepapers',
      title: 'Referenced White Papers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'whitepaper' }] }],
      group: 'content',
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'timestamps',
      title: 'Timestamps',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'time', type: 'string', title: 'Time (e.g., 0:30)' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'time',
            },
          },
        },
      ],
      description: 'Chapter markers for video navigation',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      group: 'publishing',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      group: 'publishing',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Video duration (e.g., "5:32" or "1:23:45")',
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      group: 'publishing',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3 },
        { name: 'ogImage', type: 'image', title: 'Open Graph Image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'site',
      media: 'thumbnail',
      duration: 'duration',
    },
    prepare({ title, subtitle, media, duration }) {
      return {
        title,
        subtitle: `${getSiteTitle(subtitle)}${duration ? ` - ${duration}` : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Site',
      name: 'siteAsc',
      by: [{ field: 'site', direction: 'asc' }],
    },
  ],
})
