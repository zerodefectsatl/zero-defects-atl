import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin Turbopack root to THIS directory so Next doesn't pick up the
  // main repo's package-lock.json and serve master's source instead of
  // the worktree's. Without this, multiple lockfiles confuse root detection.
  turbopack: {
    root: __dirname,
  },
  devIndicators: false,
  images: {
    qualities: [75, 90, 95],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // /process was an orphan duplicate of /our-process. Permanent (308)
      // redirect so any indexed URLs or bookmarks land on the canonical page.
      {
        source: '/process',
        destination: '/our-process',
        permanent: true,
      },

      // ── Legacy WordPress URLs → new Next.js equivalents ──
      // The old WP pages are still indexed by Google. 301/308 redirecting
      // them consolidates ranking signals onto the new pages and clears the
      // duplicate-content / crawl conflict (better than letting them 404).
      { source: '/contact-us', destination: '/services#contact', permanent: true },
      { source: '/contact', destination: '/services#contact', permanent: true },
      { source: '/ceramic-coating-intro', destination: '/ceramic-coating', permanent: true },
      { source: '/about', destination: '/zd-mentality', permanent: true },
      { source: '/about-us', destination: '/zd-mentality', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/ultimate-detail', destination: '/services', permanent: true },
      { source: '/zero-defects', destination: '/paint-correction', permanent: true },
      { source: '/zero-defects-intro', destination: '/paint-correction', permanent: true },
      { source: '/xpel', destination: '/paint-protection-film', permanent: true },
      { source: '/gtechniq', destination: '/ceramic-coating', permanent: true },
      { source: '/gtechniq-intro', destination: '/ceramic-coating', permanent: true },
      { source: '/bmw-z8', destination: '/gallery', permanent: true },
      { source: '/recent-projects', destination: '/gallery', permanent: true },
      { source: '/our-shop', destination: '/', permanent: true },
      // WordPress archive URLs → home (specific category before the wildcard).
      { source: '/category/why-us', destination: '/zd-mentality', permanent: true },
      { source: '/category/:slug*', destination: '/', permanent: true },
      { source: '/author/:slug*', destination: '/', permanent: true },
      { source: '/tag/:slug*', destination: '/', permanent: true },
    ]
  },
};

export default nextConfig;
