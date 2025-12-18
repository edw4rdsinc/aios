#!/usr/bin/env node

/**
 * Fix Windshield Advisor Blog Migration
 * Re-imports the 36 blogs that failed due to schema differences
 */

const { createClient } = require('@sanity/client')

const AIOS_PROJECT_ID = 'bm38nrpn'
const AIOS_DATASET = 'production'
const AIOS_TOKEN = process.env.AIOS_TOKEN

const WINDSHIELD_PROJECT_ID = '23d5d36h'
const SITE_VALUE = 'windshield-advisor'

const sourceClient = createClient({
  projectId: WINDSHIELD_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-12-01',
  useCdn: false,
})

const targetClient = createClient({
  projectId: AIOS_PROJECT_ID,
  dataset: AIOS_DATASET,
  apiVersion: '2024-12-01',
  useCdn: false,
  token: AIOS_TOKEN,
})

function transformId(originalId) {
  const cleanId = originalId.replace('drafts.', '')
  const prefix = originalId.startsWith('drafts.') ? 'drafts.' : ''
  return `${prefix}${SITE_VALUE}--${cleanId}`
}

function transformReference(ref) {
  if (!ref || !ref._ref) return ref
  return {
    ...ref,
    _ref: transformId(ref._ref)
  }
}

function normalizeBlog(doc) {
  const normalized = { ...doc }

  // Convert author object to string
  if (normalized.author && typeof normalized.author === 'object') {
    normalized.author = normalized.author.name || 'Staff'
  }

  // Convert parentWhitePaper (camelCase) to referencedWhitepapers array
  if (normalized.parentWhitePaper && normalized.parentWhitePaper._ref) {
    normalized.referencedWhitepapers = [transformReference(normalized.parentWhitePaper)]
    delete normalized.parentWhitePaper
  }

  // Convert keywords to tags
  if (normalized.keywords && !normalized.tags) {
    normalized.tags = normalized.keywords
  }
  delete normalized.keywords

  // Remove fields not in AIOS schema
  delete normalized.readTime

  // Normalize SEO object
  if (normalized.seo) {
    const { focusKeyword, ...seoRest } = normalized.seo
    normalized.seo = seoRest
  }

  // Transform any categories references
  if (normalized.categories && Array.isArray(normalized.categories)) {
    normalized.categories = normalized.categories.map(ref => transformReference(ref))
  }

  // Set site and new ID
  normalized.site = SITE_VALUE
  normalized._id = transformId(doc._id)
  delete normalized._rev
  delete normalized._updatedAt
  delete normalized._createdAt

  return normalized
}

async function fixBlogs() {
  console.log('═'.repeat(60))
  console.log('Windshield Advisor Blog Fix')
  console.log('═'.repeat(60))

  if (!AIOS_TOKEN) {
    console.error('\n❌ Error: AIOS_TOKEN not set')
    process.exit(1)
  }

  // Fetch all blogs from source
  console.log('\n📤 Fetching blogs from Windshield Advisor...')
  const blogs = await sourceClient.fetch('*[_type == "blog"]')
  console.log(`   Found ${blogs.length} blogs`)

  let imported = 0
  let failed = 0
  const errors = []

  console.log('\n📥 Importing to AIOS...')
  for (const blog of blogs) {
    try {
      const normalized = normalizeBlog(blog)
      const cleanDoc = JSON.parse(JSON.stringify(normalized))
      await targetClient.createOrReplace(cleanDoc)
      imported++
      process.stdout.write(`\r   Progress: ${imported + failed}/${blogs.length}`)
    } catch (err) {
      failed++
      errors.push({
        id: blog._id,
        title: blog.title?.substring(0, 50),
        error: err.message
      })
    }
  }

  console.log(`\n\n✓ Imported: ${imported}`)
  console.log(`✗ Failed: ${failed}`)

  if (errors.length > 0) {
    console.log('\nErrors:')
    for (const e of errors) {
      console.log(`  - ${e.title}: ${e.error}`)
    }
  }
}

fixBlogs().catch(err => {
  console.error('\n❌ Failed:', err.message)
  process.exit(1)
})
