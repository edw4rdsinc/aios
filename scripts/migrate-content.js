#!/usr/bin/env node

/**
 * AIOS Content Migration Script
 *
 * This script exports content from existing Sanity projects and imports them
 * into the consolidated AIOS Content Hub with the appropriate site field.
 *
 * Usage:
 *   node scripts/migrate-content.js export <source-project-id> <site-value>
 *   node scripts/migrate-content.js import <exported-file.ndjson>
 *   node scripts/migrate-content.js migrate-all
 *
 * Environment Variables Required:
 *   AIOS_PROJECT_ID - Target AIOS project ID
 *   AIOS_DATASET - Target dataset (default: production)
 *   AIOS_TOKEN - Write token for AIOS project
 */

const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Source projects configuration
const SOURCE_PROJECTS = {
  'windshield-advisor': {
    projectId: '23d5d36h',
    dataset: 'production',
    siteValue: 'windshield-advisor',
  },
  'dent-advisor': {
    projectId: 'n1pctdd7',
    dataset: 'production',
    siteValue: 'dent-advisor',
  },
  'xl-benefits': {
    projectId: 'xl-benefits-project-id', // Update with actual ID
    dataset: 'production',
    siteValue: 'xl-benefits',
  },
  'cw-custom-works': {
    projectId: 'cw-project-id', // Update with actual ID
    dataset: 'production',
    siteValue: 'cw-custom-works',
  },
}

// Content types to migrate
const CONTENT_TYPES = ['whitepaper', 'blog', 'video', 'category', 'partner', 'siteSettings']

// Create a client for a source project
function createSourceClient(projectId, dataset) {
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-12-01',
    useCdn: false,
  })
}

// Create a client for the target AIOS project
function createTargetClient() {
  const projectId = process.env.AIOS_PROJECT_ID
  const dataset = process.env.AIOS_DATASET || 'production'
  const token = process.env.AIOS_TOKEN

  if (!projectId || !token) {
    throw new Error('Missing AIOS_PROJECT_ID or AIOS_TOKEN environment variables')
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-12-01',
    useCdn: false,
    token,
  })
}

// Export content from a source project
async function exportFromProject(projectConfig, outputDir) {
  const { projectId, dataset, siteValue } = projectConfig
  const client = createSourceClient(projectId, dataset)

  console.log(`\nExporting from ${siteValue} (${projectId})...`)

  const outputFile = path.join(outputDir, `${siteValue}.ndjson`)
  const documents = []

  for (const type of CONTENT_TYPES) {
    console.log(`  Fetching ${type}s...`)
    try {
      const items = await client.fetch(`*[_type == "${type}"]`)

      // Add site field to each document
      for (const item of items) {
        const migratedDoc = {
          ...item,
          site: siteValue,
          // Generate new ID to avoid conflicts
          _id: `${siteValue}-${item._id}`,
          // Remove revision info
          _rev: undefined,
          _updatedAt: undefined,
          _createdAt: undefined,
        }
        documents.push(migratedDoc)
      }

      console.log(`    Found ${items.length} ${type}(s)`)
    } catch (err) {
      console.log(`    No ${type}s found or error: ${err.message}`)
    }
  }

  // Write to NDJSON file
  const ndjson = documents.map(doc => JSON.stringify(doc)).join('\n')
  fs.writeFileSync(outputFile, ndjson)

  console.log(`  Exported ${documents.length} documents to ${outputFile}`)
  return { file: outputFile, count: documents.length }
}

// Import content to the AIOS project
async function importToAIOS(ndjsonFile) {
  const client = createTargetClient()

  console.log(`\nImporting from ${ndjsonFile}...`)

  const content = fs.readFileSync(ndjsonFile, 'utf-8')
  const documents = content.split('\n').filter(Boolean).map(line => JSON.parse(line))

  let imported = 0
  let failed = 0

  // Use transactions for better performance
  const batchSize = 50
  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize)
    const transaction = client.transaction()

    for (const doc of batch) {
      transaction.createOrReplace(doc)
    }

    try {
      await transaction.commit()
      imported += batch.length
      console.log(`  Imported ${imported}/${documents.length}...`)
    } catch (err) {
      console.error(`  Error importing batch: ${err.message}`)
      failed += batch.length
    }
  }

  console.log(`\nImport complete: ${imported} succeeded, ${failed} failed`)
  return { imported, failed }
}

// Fix references after migration (update internal links)
async function fixReferences(siteValue) {
  const client = createTargetClient()

  console.log(`\nFixing references for ${siteValue}...`)

  // Find all documents with references that need updating
  const docsWithRefs = await client.fetch(`
    *[site == $site && (
      defined(referencedWhitepapers) ||
      defined(referencedBlogs) ||
      defined(categories) ||
      defined(parentWhitepaper)
    )]
  `, { site: siteValue })

  let updated = 0

  for (const doc of docsWithRefs) {
    const patches = {}

    // Update whitepaper references
    if (doc.referencedWhitepapers) {
      patches.referencedWhitepapers = doc.referencedWhitepapers.map(ref => ({
        ...ref,
        _ref: `${siteValue}-${ref._ref.replace(`${siteValue}-`, '')}`,
      }))
    }

    // Update blog references
    if (doc.referencedBlogs) {
      patches.referencedBlogs = doc.referencedBlogs.map(ref => ({
        ...ref,
        _ref: `${siteValue}-${ref._ref.replace(`${siteValue}-`, '')}`,
      }))
    }

    // Update category references
    if (doc.categories) {
      patches.categories = doc.categories.map(ref => ({
        ...ref,
        _ref: `${siteValue}-${ref._ref.replace(`${siteValue}-`, '')}`,
      }))
    }

    if (Object.keys(patches).length > 0) {
      try {
        await client.patch(doc._id).set(patches).commit()
        updated++
      } catch (err) {
        console.error(`  Failed to update ${doc._id}: ${err.message}`)
      }
    }
  }

  console.log(`  Updated ${updated} documents`)
}

// Main migration function
async function migrateAll() {
  const outputDir = path.join(__dirname, '..', 'migration-exports')

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  console.log('='.repeat(60))
  console.log('AIOS Content Migration')
  console.log('='.repeat(60))

  // Step 1: Export from all source projects
  console.log('\n📤 STEP 1: Exporting from source projects...')
  const exports = []

  for (const [name, config] of Object.entries(SOURCE_PROJECTS)) {
    try {
      const result = await exportFromProject(config, outputDir)
      exports.push(result)
    } catch (err) {
      console.error(`Failed to export ${name}: ${err.message}`)
    }
  }

  // Step 2: Import to AIOS
  console.log('\n📥 STEP 2: Importing to AIOS...')
  for (const exp of exports) {
    if (fs.existsSync(exp.file)) {
      await importToAIOS(exp.file)
    }
  }

  // Step 3: Fix references
  console.log('\n🔗 STEP 3: Fixing references...')
  for (const [name, config] of Object.entries(SOURCE_PROJECTS)) {
    await fixReferences(config.siteValue)
  }

  console.log('\n' + '='.repeat(60))
  console.log('✅ Migration complete!')
  console.log('='.repeat(60))
}

// CLI handler
async function main() {
  const [,, command, ...args] = process.argv

  switch (command) {
    case 'export': {
      const [projectId, siteValue] = args
      if (!projectId || !siteValue) {
        console.error('Usage: migrate-content.js export <project-id> <site-value>')
        process.exit(1)
      }
      const outputDir = path.join(__dirname, '..', 'migration-exports')
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })
      await exportFromProject({ projectId, dataset: 'production', siteValue }, outputDir)
      break
    }

    case 'import': {
      const [file] = args
      if (!file) {
        console.error('Usage: migrate-content.js import <file.ndjson>')
        process.exit(1)
      }
      await importToAIOS(file)
      break
    }

    case 'migrate-all':
      await migrateAll()
      break

    default:
      console.log(`
AIOS Content Migration Script

Commands:
  export <project-id> <site-value>  Export from a single project
  import <file.ndjson>              Import an NDJSON file to AIOS
  migrate-all                       Run full migration from all sources

Environment Variables:
  AIOS_PROJECT_ID  Target AIOS Sanity project ID
  AIOS_DATASET     Target dataset (default: production)
  AIOS_TOKEN       Write token for AIOS project
`)
  }
}

main().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
