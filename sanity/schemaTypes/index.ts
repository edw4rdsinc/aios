import category from './category'
import whitepaper from './whitepaper'
import blog from './blog'
import video from './video'
import partner from './partner'
import siteSettings from './siteSettings'

export const schemaTypes = [
  // Content types
  whitepaper,
  blog,
  video,

  // Taxonomy
  category,

  // Business
  partner,

  // Settings
  siteSettings,
]
