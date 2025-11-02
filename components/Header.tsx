import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="A&A Cooling" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full" style={{ background: 'var(--navy)' }} />
          <span className="font-heading text-xl" style={{ color: 'var(--navy)' }}>A&A Cooling</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="/" className="text-[color:var(--navy)]">Home</a>
          <a href="/about" className="text-[color:var(--navy)]">About</a>
          <a href="/products" className="text-[color:var(--navy)]">Products</a>
          <a href="/services" className="text-[color:var(--navy)]">Services</a>
          <a href="/team" className="text-[color:var(--navy)]">Team</a>
          <a href="/news" className="text-[color:var(--navy)]">News</a>
          <a href="/contact" className="ml-4 border px-3 py-2 rounded text-[color:var(--navy)]">Contact</a>
          <a href="tel:+14195551905" className="bg-[color:var(--safety)] text-white px-3 py-2 rounded">Call 419-555-1905</a>
        </nav>
        <div className="md:hidden">{/* mobile menu toggle (TODO) */}</div>
      </div>
    </header>
  )
}
