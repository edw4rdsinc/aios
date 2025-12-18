'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

// Project ID will need to be created via: npx sanity init
// Or use an existing project ID
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bm38nrpn'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'aios',
  title: 'AIOS Content Hub',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-12-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
})
