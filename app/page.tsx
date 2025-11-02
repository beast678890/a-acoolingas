import React from 'react'
import SEO from '../components/SEO'
import FeaturedProducts from '../components/FeaturedProducts'

export default async function Home() {
  return (
    <>
      <SEO />

      <header className="bg-[color:var(--muted)] border-b">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl text-[color:var(--navy)]">A&A Cooling — Reliable Distribution for Industrial Cooling & Supplies</h1>
              <p className="mt-4 text-[color:var(--steel)]">We stock essential OEM and MRO parts, coolant chemistry, and accessories — shipped same day nationwide.</p>
              <div className="mt-6 flex gap-4">
                <a href="/products" className="inline-block bg-[color:var(--accent)] text-white px-5 py-3 rounded font-semibold">Browse Catalog</a>
                <a href="/contact" className="inline-block border border-[color:var(--navy)] text-[color:var(--navy)] px-5 py-3 rounded">Contact Sales</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/team/Stephen-Kidd.jpg" alt="A&amp;A distribution" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section>
          <h2 className="font-heading text-2xl">What We Do</h2>
          <p className="text-[color:var(--steel)] mt-2">From industrial coolants to heat-transfer systems and replacement parts — we help keep equipment running.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 border rounded bg-white">
              <h3 className="font-semibold">Same-day Shipping</h3>
              <p className="text-sm text-[color:var(--steel)] mt-2">High-turn SKUs ready to ship from regional warehouses.</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h3 className="font-semibold">Technical Support</h3>
              <p className="text-sm text-[color:var(--steel)] mt-2">Product selection and application guidance from experienced reps.</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h3 className="font-semibold">Safety & Compliance</h3>
              <p className="text-sm text-[color:var(--steel)] mt-2">SDS and documentation available for all products.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl">Featured Products</h2>
          <p className="text-[color:var(--steel)] mt-2">Top SKUs updated live.</p>
          <FeaturedProducts />
        </section>
      </main>
    </>
  )
}
