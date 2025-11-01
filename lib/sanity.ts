// Sanity client placeholder. Add @sanity/client and configure dataset/projectId.
export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: false
}

// Example: import { createClient } from 'next-sanity'
// export const client = createClient(sanityConfig)
