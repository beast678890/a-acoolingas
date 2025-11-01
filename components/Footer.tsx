import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-heading">Products</h4>
          <ul className="mt-2 text-steel">
            <li><a href="/products/industrial-coolants">Industrial Coolants</a></li>
            <li><a href="/products/hvac">HVAC/R Chemicals</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading">Services</h4>
          <ul className="mt-2 text-steel">
            <li><a href="/services/blending">Bulk Liquid Blending</a></li>
            <li><a href="/services/vmi">Vendor-Managed Inventory</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading">Resources</h4>
          <ul className="mt-2 text-steel">
            <li><a href="/resources/sds">SDS & Downloads</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading">Company</h4>
          <ul className="mt-2 text-steel">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-steel">© {new Date().getFullYear()} A&A Cooling Distributors, Inc. — All rights reserved.</div>
    </footer>
  )
}
