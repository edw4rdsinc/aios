import { defineField, defineType } from 'sanity'
import { siteField, getSiteTitle } from './siteField'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
    { name: 'publishing', title: 'Publishing' },
  ],
  fields: [
    // Site selection first
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief excerpt for previews and SEO',
      validation: (Rule) => Rule.required(),
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
      name: 'referencedWhitepapers',
      title: 'Referenced White Papers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'whitepaper' }] }],
      description: 'White papers this blog post is derived from or references',
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
            },
          },
        },
      ],
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
      initialValue: 'AIOS Staff',
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
      media: 'seo.ogImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: getSiteTitle(subtitle),
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
