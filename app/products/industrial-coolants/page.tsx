import React from 'react'
import SEO from '../../../components/SEO'

export default function IndustrialCoolants() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO title="Industrial Coolants — A&A Cooling" description="Industrial coolants and antifreeze with SDS, inventory counts, and sticky RFQ form." />
      <h1 className="font-heading text-3xl">Industrial Coolants & Antifreeze</h1>
      <p className="text-steel mt-4">We stock inhibited and non-inhibited glycols, machinist coolants, and heat-transfer fluids. Each product page includes FAQ schema, SDS link, and an RFQ form.</p>
      <section className="mt-6">
        <h2 className="font-heading text-xl">Featured SKUs</h2>
        <ul className="mt-4">
          <li>SKU: AAC-1001 — Dowfrost HD — In stock: 42</li>
          <li>SKU: AAC-1002 — Glycol-X — In stock: 120</li>
        </ul>
      </section>
    </div>
  )
}
