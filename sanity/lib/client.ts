import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SiteValue } from '../schemaTypes/siteField'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bm38nrpn'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-12-01',
  useCdn: true,
})

// Client without CDN for mutations and real-time updates
export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-12-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// ============================================
// CONTENT FETCHING FUNCTIONS (per-site)
// ============================================

// Types
export interface Whitepaper {
  _id: string
  title: string
  slug: { current: string }
  description: string
  summary?: string
  content: any[]
  sources?: { name: string; url?: string; description?: string }[]
  keyTakeaways?: string[]
  faqs?: { question: string; answer: string }[]
  categories?: { _id: string; title: string; slug: { current: string } }[]
  tags?: string[]
  author: string
  publishedAt: string
  order?: number
  site: SiteValue
}

export interface Blog {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: any[]
  referencedWhitepapers?: { _id: string; title: string; slug: { current: string } }[]
  keyTakeaways?: string[]
  faqs?: { question: string; answer: string }[]
  categories?: { _id: string; title: string; slug: { current: string } }[]
  tags?: string[]
  author: string
  publishedAt: string
  site: SiteValue
}

export interface Video {
  _id: string
  title: string
  slug: { current: string }
  description: string
  videoUrl?: string
  transcript?: string
  thumbnail?: any
  referencedBlogs?: { _id: string; title: string; slug: { current: string } }[]
  referencedWhitepapers?: { _id: string; title: string; slug: { current: string } }[]
  keyTakeaways?: string[]
  timestamps?: { time: string; label: string }[]
  categories?: { _id: string; title: string; slug: { current: string } }[]
  tags?: string[]
  duration?: string
  publishedAt: string
  site: SiteValue
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  order?: number
  site: SiteValue
}

// ============================================
// PUBLISHED CONTENT QUERIES (with date filter)
// ============================================

export async function getPublishedWhitepapers(site: SiteValue): Promise<Whitepaper[]> {
  return sanityClient.fetch(`
    *[_type == "whitepaper" && site == $site && publishedAt <= now()] | order(order asc, publishedAt desc) {
      _id,
      title,
      slug,
      description,
      summary,
      author,
      publishedAt,
      tags,
      order,
      site,
      categories[]->{ _id, title, slug }
    }
  `, { site })
}

export async function getWhitepaperBySlug(site: SiteValue, slug: string): Promise<Whitepaper | null> {
  return sanityClient.fetch(`
    *[_type == "whitepaper" && site == $site && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      summary,
      content,
      sources,
      keyTakeaways,
      faqs,
      author,
      publishedAt,
      tags,
      site,
      categories[]->{ _id, title, slug }
    }
  `, { site, slug })
}

export async function getPublishedBlogs(site: SiteValue): Promise<Blog[]> {
  return sanityClient.fetch(`
    *[_type == "blog" && site == $site && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      tags,
      site,
      referencedWhitepapers[]->{ _id, title, slug },
      categories[]->{ _id, title, slug }
    }
  `, { site })
}

export async function getBlogBySlug(site: SiteValue, slug: string): Promise<Blog | null> {
  return sanityClient.fetch(`
    *[_type == "blog" && site == $site && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      keyTakeaways,
      faqs,
      author,
      publishedAt,
      tags,
      site,
      referencedWhitepapers[]->{ _id, title, slug },
      categories[]->{ _id, title, slug }
    }
  `, { site, slug })
}

export async function getBlogsByWhitepaper(site: SiteValue, whitepaperSlug: string): Promise<Blog[]> {
  return sanityClient.fetch(`
    *[_type == "blog" && site == $site && $whitepaperSlug in referencedWhitepapers[]->slug.current && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      tags,
      site
    }
  `, { site, whitepaperSlug })
}

export async function getPublishedVideos(site: SiteValue): Promise<Video[]> {
  return sanityClient.fetch(`
    *[_type == "video" && site == $site && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      videoUrl,
      thumbnail,
      duration,
      publishedAt,
      tags,
      site,
      categories[]->{ _id, title, slug }
    }
  `, { site })
}

export async function getVideoBySlug(site: SiteValue, slug: string): Promise<Video | null> {
  return sanityClient.fetch(`
    *[_type == "video" && site == $site && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      videoUrl,
      thumbnail,
      transcript,
      keyTakeaways,
      timestamps,
      duration,
      publishedAt,
      tags,
      site,
      referencedBlogs[]->{ _id, title, slug },
      referencedWhitepapers[]->{ _id, title, slug },
      categories[]->{ _id, title, slug }
    }
  `, { site, slug })
}

export async function getCategories(site: SiteValue): Promise<Category[]> {
  return sanityClient.fetch(`
    *[_type == "category" && site == $site] | order(order asc, title asc) {
      _id,
      title,
      slug,
      description,
      order,
      site
    }
  `, { site })
}

export async function getCategoryBySlug(site: SiteValue, slug: string): Promise<Category | null> {
  return sanityClient.fetch(`
    *[_type == "category" && site == $site && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      site
    }
  `, { site, slug })
}

export async function getWhitepapersByCategory(site: SiteValue, categorySlug: string): Promise<Whitepaper[]> {
  return sanityClient.fetch(`
    *[_type == "whitepaper" && site == $site && publishedAt <= now() && $categorySlug in categories[]->slug.current] | order(order asc, publishedAt desc) {
      _id,
      title,
      slug,
      description,
      summary,
      author,
      publishedAt,
      tags,
      order,
      site,
      categories[]->{ _id, title, slug }
    }
  `, { site, categorySlug })
}
