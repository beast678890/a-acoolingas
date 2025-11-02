import React from 'react'
import SEO from '../../components/SEO'
import FeaturedProducts from '../../components/FeaturedProducts'

const verticals = [
  { slug: 'industrial-coolants', title: 'Industrial Coolants & Antifreeze', desc: 'Bulk coolants, glycols and inhibitors for industrial applications.' },
  { slug: 'heat-transfer-fluids', title: 'Heat-Transfer Fluids', desc: 'High-performance fluids for closed-loop systems.' }
]

export default function ProductsIndex() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO title="Products — A&A Cooling" description="Browse our product verticals including Industrial Coolants, Heat-Transfer Fluids, HVAC/R Chemicals and more." />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl">Products</h1>
          <p className="text-[color:var(--steel)] mt-2">Browse our catalogs and download SDS for specific SKUs.</p>
        </div>
        <div>
          <a href="/contact" className="bg-[color:var(--accent)] text-white px-4 py-2 rounded">Request Pricing</a>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {verticals.map(v => (
          <div key={v.slug} className="p-4 border rounded bg-white">
            <a href={`/products/${v.slug}`} className="font-semibold text-[color:var(--navy)]">{v.title}</a>
            <p className="text-sm text-[color:var(--steel)] mt-2">{v.desc}</p>
            <div className="mt-4">
              <a href={`/products/${v.slug}`} className="text-[color:var(--accent)]">Browse {v.title}</a>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Top SKUs</h2>
        <p className="text-[color:var(--steel)] mt-2">Popular items customers buy most.</p>
        <FeaturedProducts />
      </section>
    </div>
  )
}
