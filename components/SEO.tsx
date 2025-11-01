import React from 'react'

export default function SEO({ title = 'A&A Cooling Distributors', description = "We stock what you need, we source what you don't, and we deliver it yesterday.", children }: { title?: string; description?: string; children?: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aacoolings.com'
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* JSON-LD placeholders */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "A&A Cooling Distributors, Inc.",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`
        }) }} />
      </head>
      {children}
    </>
  )
}
