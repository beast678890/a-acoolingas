const fs = require('fs')
const path = require('path')

// Simple sitemap generator placeholder - expand to read routes or Sanity content
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aacoolings.com'
const routes = ['/', '/about', '/products', '/services', '/team', '/news', '/resources', '/contact']

const items = routes.map(r => `<url><loc>${baseUrl}${r}</loc></url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml)
console.log('sitemap.xml generated')
