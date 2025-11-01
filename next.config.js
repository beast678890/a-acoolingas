/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;"
  }
]

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  }
}
