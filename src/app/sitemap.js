import { CITIES } from '@/lib/cities'

const siteUrl = 'https://www.zerodefectsatl.com'

const routes = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/ceramic-coating', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/paint-protection-film', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/paint-correction', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/service-areas', priority: 0.8, changeFrequency: 'monthly' },
  ...CITIES.map((c) => ({ path: `/service-areas/${c.slug}`, priority: 0.8, changeFrequency: 'monthly' })),
  { path: '/gallery', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/reviews', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/our-process', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/zd-mentality', priority: 0.5, changeFrequency: 'yearly' },
]

export default function sitemap() {
  const lastModified = new Date()
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
