import { defineField, defineType } from 'sanity'
import { siteField, getSiteTitle } from './siteField'

export default defineType({
  name: 'whitepaper',
  title: 'White Paper',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
    { name: 'publishing', title: 'Publishing' },
  ],
  fields: [
    // Site selection first
    { ...siteField, group: 'publishing' },

    // Core content
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
      rows: 3,
      description: 'Brief description for SEO and previews',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 6,
      description: 'Executive summary displayed at the top of the white paper',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'isExternal',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'whitepaper' }, { type: 'blog' }],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points summarizing main insights',
      group: 'content',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'seo',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer' },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
      description: 'FAQ schema for rich snippets',
    }),
    defineField({
      name: 'relatedQuestions',
      title: 'People Also Ask',
      type: 'array',
      group: 'seo',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer' },
          ],
        },
      ],
      description: 'Related questions for GEO optimization',
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Source Name' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
            },
          },
        },
      ],
      description: 'Authoritative sources cited in the white paper',
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
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'AIOS Research Team',
      group: 'publishing',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      group: 'publishing',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in white paper listing (1 = first)',
      group: 'publishing',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Version',
      type: 'file',
      options: {
        accept: '.pdf',
      },
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
        { name: 'canonicalUrl', type: 'url', title: 'Canonical URL' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'site',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      const siteLabel = getSiteTitle(subtitle)
      return {
        title: order ? `${order}. ${title}` : title,
        subtitle: siteLabel,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
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
