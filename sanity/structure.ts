import { StructureBuilder } from 'sanity/structure'
import { SITES } from './schemaTypes/siteField'

// Icons for different content types
const icons = {
  whitepaper: () => '📄',
  blog: () => '✍️',
  video: () => '🎬',
  category: () => '🏷️',
  partner: () => '🤝',
  settings: () => '⚙️',
}

// Build a filtered document list for a specific site and type
function siteDocumentList(
  S: StructureBuilder,
  siteValue: string,
  docType: string,
  title: string
) {
  return S.listItem()
    .title(title)
    .icon(icons[docType as keyof typeof icons])
    .child(
      S.documentList()
        .title(title)
        .filter('_type == $type && site == $site')
        .params({ type: docType, site: siteValue })
        .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
    )
}

// Build a site section with all its content types
function siteSection(S: StructureBuilder, siteTitle: string, siteValue: string) {
  return S.listItem()
    .title(siteTitle)
    .child(
      S.list()
        .title(siteTitle)
        .items([
          siteDocumentList(S, siteValue, 'whitepaper', 'White Papers'),
          siteDocumentList(S, siteValue, 'blog', 'Blog Posts'),
          siteDocumentList(S, siteValue, 'video', 'Videos'),
          S.divider(),
          siteDocumentList(S, siteValue, 'category', 'Categories'),
          siteDocumentList(S, siteValue, 'partner', 'Partners'),
          S.divider(),
          S.listItem()
            .title('Site Settings')
            .icon(icons.settings)
            .child(
              S.documentList()
                .title('Site Settings')
                .filter('_type == "siteSettings" && site == $site')
                .params({ site: siteValue })
            ),
        ])
    )
}

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('AIOS Content Hub')
    .items([
      // Per-site sections
      ...SITES.map((site) => siteSection(S, site.title, site.value)),

      S.divider(),

      // All content views (cross-site)
      S.listItem()
        .title('All Content')
        .child(
          S.list()
            .title('All Content')
            .items([
              S.listItem()
                .title('All White Papers')
                .icon(icons.whitepaper)
                .child(
                  S.documentList()
                    .title('All White Papers')
                    .filter('_type == "whitepaper"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('All Blog Posts')
                .icon(icons.blog)
                .child(
                  S.documentList()
                    .title('All Blog Posts')
                    .filter('_type == "blog"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('All Videos')
                .icon(icons.video)
                .child(
                  S.documentList()
                    .title('All Videos')
                    .filter('_type == "video"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.divider(),
              S.listItem()
                .title('All Categories')
                .icon(icons.category)
                .child(S.documentTypeList('category').title('All Categories')),
              S.listItem()
                .title('All Partners')
                .icon(icons.partner)
                .child(S.documentTypeList('partner').title('All Partners')),
              S.listItem()
                .title('All Site Settings')
                .icon(icons.settings)
                .child(S.documentTypeList('siteSettings').title('All Site Settings')),
            ])
        ),

      S.divider(),

      // Scheduled content (future publish dates)
      S.listItem()
        .title('Scheduled Content')
        .child(
          S.list()
            .title('Scheduled Content')
            .items([
              S.listItem()
                .title('Scheduled White Papers')
                .child(
                  S.documentList()
                    .title('Scheduled White Papers')
                    .filter('_type == "whitepaper" && publishedAt > now()')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'asc' }])
                ),
              S.listItem()
                .title('Scheduled Blog Posts')
                .child(
                  S.documentList()
                    .title('Scheduled Blog Posts')
                    .filter('_type == "blog" && publishedAt > now()')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'asc' }])
                ),
            ])
        ),

      // Recently modified
      S.listItem()
        .title('Recently Modified')
        .child(
          S.documentList()
            .title('Recently Modified')
            .filter('_type in ["whitepaper", "blog", "video"]')
            .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
        ),
    ])
