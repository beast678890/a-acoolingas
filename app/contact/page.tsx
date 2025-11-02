import React from 'react'
import SEO from '../../components/SEO'

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <SEO title="Contact — A&A Cooling" />
      <h1 className="font-heading text-3xl">Contact Us</h1>
      <p className="text-[color:var(--steel)] mt-2">Reach our sales or support teams — we're here to help you source replacement parts, coolants, and supplies.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded bg-white">
          <h3 className="font-semibold">Sales</h3>
          <p className="text-sm text-[color:var(--steel)] mt-2">Email: <a href="mailto:sales@aacoolings.com" className="text-[color:var(--accent)]">sales@aacoolings.com</a></p>
          <p className="text-sm text-[color:var(--steel)] mt-1">Phone: (555) 555-5555</p>
        </div>
        <div className="p-4 border rounded bg-white">
          <h3 className="font-semibold">Support</h3>
          <p className="text-sm text-[color:var(--steel)] mt-2">Email: <a href="mailto:support@aacoolings.com" className="text-[color:var(--accent)]">support@aacoolings.com</a></p>
          <p className="text-sm text-[color:var(--steel)] mt-1">For urgent parts, call the number above.</p>
        </div>
      </div>

      <form className="mt-8 p-4 border rounded bg-white">
        <label className="block">Your name</label>
        <input className="w-full border px-2 py-2 rounded mt-1" />
        <label className="block mt-4">Email</label>
        <input className="w-full border px-2 py-2 rounded mt-1" />
        <label className="block mt-4">Message</label>
        <textarea className="w-full border px-2 py-2 rounded mt-1" rows={6} />
        <button className="mt-4 bg-[color:var(--accent)] text-white px-4 py-2 rounded">Send message</button>
      </form>
    </div>
  )
}
