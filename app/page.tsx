import React from 'react'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO />
      <section className="relative w-full h-screen bg-black">
        {/* Hero video placeholder (add public/hero.mp4) */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-white">
          <h1 className="font-heading text-3xl sm:text-5xl leading-tight">Industrial Cooling, Chemicals, Steel & More — Stocked & Shipped Same Day.</h1>
          <p className="mt-4 text-lg">Serving OEMs, MROs & Contractors Since 1995.</p>
          <div className="mt-6 flex gap-4">
            <a href="/products" className="bg-arctic text-navy px-5 py-3 rounded font-semibold">Browse Catalog</a>
            <a href="/contact" className="border border-white px-5 py-3 rounded">Schedule Call</a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-6">
        <h2 className="font-heading text-2xl">Featured Products</h2>
        <p className="text-steel mt-2">Top SKUs updated live.</p>
        {/* Algolia carousel placeholder */}
      </section>
    </>
  )
}
