import React from 'react'
import SEO from '../../components/SEO'

const services = [
  { title: 'Chemical Supply & Blends', desc: 'Industrial coolants, corrosion inhibitors and custom blends.' },
  { title: 'Parts & Components', desc: 'OEM and aftermarket parts for chillers, heat exchangers and cooling towers.' },
  { title: 'Technical Support & Lab Services', desc: 'Fluid analysis, compatibility checks, and troubleshooting.' }
]

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO title="Services — A&A Cooling" />
      <h1 className="font-heading text-3xl">Our Services</h1>
      <p className="text-[color:var(--steel)] mt-2">We partner with customers to supply products and services that keep operations running.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.title} className="p-4 border rounded bg-white">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-[color:var(--steel)] mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
