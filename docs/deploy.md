# Deployment notes (AWS Lightsail + CloudFront)

- Build in CI: npm run build
- Upload build to Lightsail instance (or use container service)
- Use CloudFront in front with SSL wildcard certificate
- Enable GZIP + Brotli, set caching headers for static assets
- Nightly sitemap and backup: run scripts/generate-sitemap.js then snapshot to Backblaze

CI/CD: GitHub Actions recommended; include secrets for S3/CloudFront invalidation and Backblaze keys.
