// Centralized SEO + structured-data helpers.
// Keeps canonical, og:url, and keywords correct and unique per page instead
// of every page inheriting the root layout's values.

export const SITE_URL = 'https://www.zerodefectsatl.com'
export const DEFAULT_OG_IMAGE = '/images/gallery/IMG_9517.jpeg'

// Single source of truth for name/address/phone (NAP) — must stay consistent
// with the Google Business Profile for local SEO.
export const BUSINESS = {
  name: 'Zero Defects ATL',
  telephone: '+14044063355',
  email: 'zerodefectsatl@gmail.com',
  streetAddress: '5450 Technology Pkwy, Suite 500',
  addressLocality: 'Braselton',
  addressRegion: 'GA',
  postalCode: '30517',
  latitude: 34.1018,
  longitude: -83.796,
  // Verified Google Business Profile / Maps listing.
  googleProfile: 'https://maps.app.goo.gl/2vKxF6ayqwKjdA4i7',
  instagram: 'https://www.instagram.com/zerodefectsatl',
}

// Cities we actively serve — used for areaServed schema and "near me" copy.
export const SERVICE_AREAS = [
  'Braselton',
  'Buford',
  'Cumming',
  'Gainesville',
  'Hoschton',
  'Flowery Branch',
  'Jefferson',
  'Sugar Hill',
  'Suwanee',
  'Atlanta',
]

/**
 * Build a complete Next.js metadata object for a page.
 * Ensures a self-referential canonical, a correct per-page og:url, and
 * page-specific keywords (no more shared root keyword list).
 */
export function pageMetadata({
  path = '',
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Zero Defects ATL — ceramic coating & PPF in Braselton, GA',
}) {
  const url = `${SITE_URL}${path}`
  const ot = ogTitle || title
  const od = ogDescription || description
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path || '/' },
    openGraph: {
      title: ot,
      description: od,
      url,
      siteName: BUSINESS.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: image, width: 1200, height: 800, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ot,
      description: od,
      images: [image],
    },
  }
}

// LocalBusiness node reused as the `provider` of each Service.
export function localBusinessNode() {
  return {
    '@type': ['LocalBusiness', 'AutoBodyShop'],
    name: BUSINESS.name,
    telephone: BUSINESS.telephone,
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: `${city}, GA`,
    })),
    sameAs: [BUSINESS.instagram, BUSINESS.googleProfile],
  }
}

/**
 * JSON-LD for a city service-area landing page: a LocalBusiness node whose
 * areaServed centers on the city, plus a BreadcrumbList
 * (Home > Service Areas > City).
 */
export function cityJsonLd({ slug, cityName }) {
  const url = `${SITE_URL}/service-areas/${slug}`
  return [
    {
      '@context': 'https://schema.org',
      ...localBusinessNode(),
      url,
      areaServed: { '@type': 'City', name: `${cityName}, GA` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
        { '@type': 'ListItem', position: 3, name: `${cityName}, GA`, item: url },
      ],
    },
  ]
}

/**
 * JSON-LD for an individual service landing page: a Service node plus a
 * BreadcrumbList. Returns an array ready to JSON.stringify into a script tag.
 */
export function serviceJsonLd({ path, name, serviceType, description }) {
  const url = `${SITE_URL}${path}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      serviceType,
      description,
      url,
      provider: localBusinessNode(),
      areaServed: SERVICE_AREAS.map((city) => ({
        '@type': 'City',
        name: `${city}, GA`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    },
  ]
}
