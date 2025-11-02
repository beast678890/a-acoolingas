import React from 'react'
import SEO from '../../../components/SEO'
import { getProductBySlug } from '../../../lib/sanityClient'

export const revalidate = 60 // ISR: revalidate every 60 seconds

type Props = { params?: any; searchParams?: any }

export default async function ProductPage({ params }: Props) {
  // Next 15 may pass `params` as a Promise; resolve defensively
  const resolvedParams = await Promise.resolve(params)
  const slug: string | undefined = resolvedParams?.slug
  let product = null
  try {
    product = await getProductBySlug(slug)
  } catch (err) {
    console.error('Sanity error', err)
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="font-heading text-2xl">Product not found</h1>
    <p className="text-steel mt-2">No product with slug {slug} was found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
  <SEO title={`${product.title} — A&A Cooling`} description={product.excerpt || ''} />
      <h1 className="font-heading text-3xl">{product.title}</h1>
      <p className="text-steel">SKU: {product.sku} • In stock: {product.inventory ?? '—'}</p>
      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0].asset.url} alt={`${product.title} image`} className="w-full h-auto rounded" />
              ) : (
                <div className="w-full h-56 bg-gray-100" />
              )}
              <div className="prose max-w-none">{/* Render portable text here when wired to Sanity */}
                {Array.isArray(product.description)
                  ? product.description.map((blk: any, i: number) => (
                      <p key={i}>{blk?.children?.map((c: any) => c.text).join('')}</p>
                    ))
                  : product.description || product.excerpt || 'No description available.'}
              </div>
              {product.sdsUrl && (
                <div className="mt-4">
                  <a href={product.sdsUrl} target="_blank" rel="noreferrer" className="inline-block bg-[color:var(--navy)] text-white px-4 py-2 rounded">Download SDS</a>
                </div>
              )}
            </div>
          </div>
          <aside className="p-4 border rounded">
            <h3 className="font-heading">Request a Quote</h3>
            <p className="text-steel text-sm mt-2">Quick RFQ form (placeholder) — will POST to HubSpot when integrated.</p>
            <form className="mt-4">
              <label className="block text-sm">Quantity</label>
              <input className="w-full border px-2 py-2 rounded mt-1" />
              <button className="mt-4 w-full bg-[color:var(--accent)] text-white px-4 py-2 rounded">Request Quote</button>
            </form>
          </aside>
        </div>
      </section>
    </div>
  )
}
