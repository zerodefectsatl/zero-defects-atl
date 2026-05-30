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
    ]
  },
};

export default nextConfig;
