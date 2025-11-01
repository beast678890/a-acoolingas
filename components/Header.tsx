import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm transition-all">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="A&A Cooling" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-navy rounded-full" />
          <span className="font-heading text-xl text-navy">A&A Cooling</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/team">Team</a>
          <a href="/news">News</a>
          <a href="/contact" className="ml-4 border px-3 py-2 rounded">Contact</a>
          <a href="tel:+14195551905" className="bg-safety text-white px-3 py-2 rounded">Call 419-555-1905</a>
        </nav>
        <div className="md:hidden">{/* mobile menu toggle */}</div>
      </div>
    </header>
  )
}
