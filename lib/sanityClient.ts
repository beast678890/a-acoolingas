/**
 * Sanity client helper for server-side fetches.
 *
 * Notes:
 * - This file uses `next-sanity` shape but does not import the package to avoid install during scaffold.
 * - After you run `npm install`, install `next-sanity` and uncomment imports if you want typed client usage.
 */
const PROJECT_ID = process.env.SANITY_PROJECT_ID || ''
const DATASET = process.env.SANITY_DATASET || 'production'
const API_VERSION = '2025-01-01'

export const sanityConfig = {
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: false
}

// Example GROQ helper functions - these use the standard Sanity HTTP API via fetch.
async function sanityFetch(query: string, params: Record<string, any> = {}) {
  if (!PROJECT_ID) {
    throw new Error('SANITY_PROJECT_ID not set in environment')
  }
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`
  const res = await fetch(url)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Sanity fetch error: ${res.status} ${text}`)
  }
  const body = await res.json()
  return body.result
}

export async function getProductBySlug(slug: string) {
  const q = `*[_type == "product" && slug.current == $slug][0]{..., images[]{asset->{url, metadata}}}`
  const params = { slug }
  return sanityFetch(q, params)
}

export async function getProducts(limit = 12) {
  const q = `*[_type == "product"] | order(_createdAt desc)[0...${limit}] { title, slug, sku, inventory, images[]{asset->{url}} }`
  return sanityFetch(q)
}

export default sanityConfig
