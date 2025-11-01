import React from 'react'
import SEO from '../../components/SEO'

const verticals = [
  { slug: 'industrial-coolants', title: 'Industrial Coolants & Antifreeze' },
  { slug: 'heat-transfer-fluids', title: 'Heat-Transfer Fluids' }
]

export default function ProductsIndex() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO title="Products — A&A Cooling" description="Browse product verticals including Industrial Coolants, Heat-Transfer Fluids, HVAC/R Chemicals and more." />
      <h1 className="font-heading text-3xl">Product Hub</h1>
      <p className="text-steel mt-2">Select a vertical to browse top SKUs and SDS files.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {verticals.map(v => (
          <li key={v.slug} className="p-4 border rounded">
            <a href={`/products/${v.slug}`} className="font-semibold">{v.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
