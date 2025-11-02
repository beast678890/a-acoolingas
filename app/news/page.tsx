import React from 'react'
import SEO from '../../components/SEO'

const placeholderNews = [
  { id: '1', title: 'A&A expands warehouse footprint', excerpt: 'New regional inventory hub to speed deliveries.' },
  { id: '2', title: 'New coolant formulation released', excerpt: 'Improved stability for high-temperature applications.' }
]

export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO title="News — A&A Cooling" />
      <h1 className="font-heading text-3xl">News</h1>
      <p className="text-[color:var(--steel)] mt-2">Company updates, product releases and industry news.</p>

      <div className="mt-6 space-y-4">
        {placeholderNews.map((n) => (
          <article key={n.id} className="p-4 border rounded bg-white">
            <h3 className="font-semibold">{n.title}</h3>
            <p className="text-sm text-[color:var(--steel)] mt-2">{n.excerpt}</p>
            <a href="#" className="mt-3 inline-block text-[color:var(--accent)]">Read more</a>
          </article>
        ))}
      </div>
    </div>
  )
}
