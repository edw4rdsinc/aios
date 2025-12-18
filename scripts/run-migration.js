#!/usr/bin/env node

/**
 * AIOS Content Migration - Run All
 * Exports from all source projects and imports to AIOS Content Hub
 * Handles references by importing in correct order and transforming IDs
 */

const { createClient } = require('@sanity/client')

// Target AIOS project
const AIOS_PROJECT_ID = 'bm38nrpn'
const AIOS_DATASET = 'production'
const AIOS_TOKEN = process.env.AIOS_TOKEN

// Source projects with their site values
const SOURCE_PROJECTS = [
  { projectId: '23d5d36h', name: 'Windshield Advisor', siteValue: 'windshield-advisor' },
  { projectId: 'n1pctdd7', name: 'Dent Advisor', siteValue: 'dent-advisor' },
  { projectId: 'rm1y6ybn', name: 'XL Benefits', siteValue: 'xl-benefits' },
  { projectId: 'm3vvwwn0', name: 'Glass Advisor', siteValue: 'glass-advisor' },
]

// Import order matters - categories first, then whitepapers, then blogs/videos
const IMPORT_ORDER = ['category', 'siteSettings', 'partner', 'whitepaper', 'blog', 'video']

// Create client for source project (read-only)
function createSourceClient(projectId) {
  return createClient({
    projectId,
    dataset: 'production',
    apiVersion: '2024-12-01',
    useCdn: false,
  })
}

// Create client for target AIOS project (with write token)
function createTargetClient() {
  return createClient({
    projectId: AIOS_PROJECT_ID,
    dataset: AIOS_DATASET,
    apiVersion: '2024-12-01',
    useCdn: false,
    token: AIOS_TOKEN,
  })
}

// Transform document ID for the new site
function transformId(originalId, siteValue) {
  const cleanId = originalId.replace('drafts.', '')
  const prefix = originalId.startsWith('drafts.') ? 'drafts.' : ''
  return `${prefix}${siteValue}--${cleanId}`
}

// Transform a reference to use new ID
function transformReference(ref, siteValue) {
  if (!ref || !ref._ref) return ref
  return {
    ...ref,
    _ref: transformId(ref._ref, siteValue)
  }
}

// Normalize blog schema differences (windshield-advisor has different schema)
function normalizeBlogSchema(doc, siteValue) {
  const normalized = { ...doc }

  // Convert author object to string
  if (normalized.author && typeof normalized.author === 'object') {
    normalized.author = normalized.author.name || 'Staff'
  }

  // Convert parentWhitePaper (camelCase) to referencedWhitepapers array
  if (normalized.parentWhitePaper && normalized.parentWhitePaper._ref) {
    normalized.referencedWhitepapers = [
      transformReference(normalized.parentWhitePaper, siteValue)
    ]
    delete normalized.parentWhitePaper
  }

  // Convert keywords to tags (if tags doesn't exist)
  if (normalized.keywords && !normalized.tags) {
    normalized.tags = normalized.keywords
    delete normalized.keywords
  }

  // Remove fields not in AIOS schema
  delete normalized.readTime

  // Normalize SEO object (remove focusKeyword, keep compatible fields)
  if (normalized.seo) {
    const { focusKeyword, ...seoRest } = normalized.seo
    normalized.seo = seoRest
  }

  return normalized
}

// Deep transform all references in a document
function transformDocumentReferences(doc, siteValue) {
  const transformed = { ...doc }

  // Reference array fields
  const refArrayFields = ['referencedWhitepapers', 'referencedBlogs', 'categories']
  for (const field of refArrayFields) {
    if (transformed[field] && Array.isArray(transformed[field])) {
      transformed[field] = transformed[field].map(ref => transformReference(ref, siteValue))
    }
  }

  // Single reference fields
  const refSingleFields = ['parentWhitepaper']
  for (const field of refSingleFields) {
    if (transformed[field] && transformed[field]._ref) {
      transformed[field] = transformReference(transformed[field], siteValue)
    }
  }

  return transformed
}

// Export all content from a source project
async function exportFromSource(source) {
  const { projectId, name, siteValue } = source
  const client = createSourceClient(projectId)
  const documentsByType = {}

  console.log(`\n📤 Exporting from ${name} (${projectId})...`)

  for (const type of IMPORT_ORDER) {
    try {
      const items = await client.fetch(`*[_type == "${type}"]`)

      if (items.length > 0) {
        console.log(`   Found ${items.length} ${type}(s)`)
        documentsByType[type] = items.map(item => {
          // Transform the document
          let transformed = {
            ...item,
            site: siteValue,
            _id: transformId(item._id, siteValue),
            _rev: undefined,
            _updatedAt: undefined,
            _createdAt: undefined,
          }

          // Normalize blog schema differences
          if (type === 'blog') {
            transformed = normalizeBlogSchema(transformed, siteValue)
          }

          // Transform internal references
          transformed = transformDocumentReferences(transformed, siteValue)

          return transformed
        })
      } else {
        documentsByType[type] = []
      }
    } catch (err) {
      console.log(`   Skipping ${type}: ${err.message}`)
      documentsByType[type] = []
    }
  }

  const total = Object.values(documentsByType).flat().length
  console.log(`   Total: ${total} documents`)

  return documentsByType
}

// Import documents to AIOS by type (in correct order)
async function importToAIOS(documentsByType, sourceName) {
  const client = createTargetClient()

  let totalImported = 0
  let totalFailed = 0

  console.log(`\n📥 Importing to AIOS from ${sourceName}...`)

  for (const type of IMPORT_ORDER) {
    const docs = documentsByType[type]
    if (!docs || docs.length === 0) continue

    console.log(`   Importing ${docs.length} ${type}(s)...`)

    let imported = 0
    let failed = 0

    // Import one at a time to handle errors gracefully
    for (const doc of docs) {
      try {
        // Clean undefined values
        const cleanDoc = JSON.parse(JSON.stringify(doc))
        await client.createOrReplace(cleanDoc)
        imported++
      } catch (err) {
        // Try without references if it fails
        try {
          const docWithoutRefs = { ...doc }
          delete docWithoutRefs.referencedWhitepapers
          delete docWithoutRefs.referencedBlogs
          delete docWithoutRefs.categories
          delete docWithoutRefs.parentWhitepaper

          const cleanDoc = JSON.parse(JSON.stringify(docWithoutRefs))
          await client.createOrReplace(cleanDoc)
          imported++
        } catch (err2) {
          console.log(`      ⚠ Failed: ${doc._id.substring(0, 50)}...`)
          failed++
        }
      }
    }

    console.log(`      ✓ ${imported} imported, ${failed} failed`)
    totalImported += imported
    totalFailed += failed
  }

  return { imported: totalImported, failed: totalFailed }
}

// Main migration function
async function runMigration() {
  console.log('═'.repeat(60))
  console.log('AIOS Content Hub Migration')
  console.log('═'.repeat(60))
  console.log(`\nTarget: ${AIOS_PROJECT_ID} (${AIOS_DATASET})`)

  if (!AIOS_TOKEN) {
    console.error('\n❌ Error: AIOS_TOKEN environment variable not set')
    process.exit(1)
  }

  const results = []

  // Process each source project
  for (const source of SOURCE_PROJECTS) {
    try {
      const documentsByType = await exportFromSource(source)
      const result = await importToAIOS(documentsByType, source.name)
      results.push({ ...source, ...result })
    } catch (err) {
      console.error(`\n❌ Failed to migrate ${source.name}: ${err.message}`)
      results.push({ ...source, imported: 0, failed: 0, error: err.message })
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(60))
  console.log('Migration Summary')
  console.log('═'.repeat(60))

  let totalImported = 0
  let totalFailed = 0

  for (const r of results) {
    console.log(`${r.name}: ${r.imported} imported, ${r.failed} failed`)
    totalImported += r.imported || 0
    totalFailed += r.failed || 0
  }

  console.log('─'.repeat(60))
  console.log(`Total: ${totalImported} imported, ${totalFailed} failed`)
  console.log('\n✅ Migration complete!')
  console.log(`\nView your content at: http://localhost:3000/studio`)
}

runMigration().catch(err => {
  console.error('\n❌ Migration failed:', err.message)
  process.exit(1)
})
