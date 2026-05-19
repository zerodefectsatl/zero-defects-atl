import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow-body',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-cond',
  display: 'swap',
})

const siteUrl = 'https://zerodefectsatl.com'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoBodyShop'],
  name: 'Zero Defects ATL',
  description:
    'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Ceramic coatings, paint protection film, and paint correction.',
  url: siteUrl,
  telephone: '+14044063355',
  image: `${siteUrl}/images/gallery/IMG_9517.jpeg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5450 Technology Pkwy, Suite 500',
    addressLocality: 'Braselton',
    addressRegion: 'GA',
    postalCode: '30517',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.1018,
    longitude: -83.796,
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '50',
  },
  areaServed: ['Braselton, GA', 'Gainesville, GA', 'Buford, GA', 'Cumming, GA', 'Atlanta, GA'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Paint Protection & Ceramic Coating Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Coating' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint Protection Film (PPF)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint Correction' } },
    ],
  },
  priceRange: '$$$',
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Zero Defects ATL — Ceramic Coating & PPF | Braselton, GA',
  description:
    'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Ceramic coatings, paint protection film, and paint correction.',
  keywords: [
    'ceramic coating Atlanta',
    'PPF Atlanta',
    'paint protection film Atlanta',
    'ceramic coating Braselton GA',
    'XPEL installer Atlanta',
    'Gtechniq installer Atlanta',
    'paint correction Atlanta',
    'auto detailing Braselton',
    'Zero Defects ATL',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zero Defects ATL — Ceramic Coating & PPF | Braselton, GA',
    description:
      'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Ceramic coatings, paint protection film, and paint correction.',
    url: siteUrl,
    siteName: 'Zero Defects ATL',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery/IMG_9517.jpeg',
        width: 1200,
        height: 800,
        alt: 'Zero Defects ATL — ceramic coating and PPF in Braselton GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Defects ATL — Ceramic Coating & PPF | Braselton, GA',
    description:
      'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA.',
    images: ['/images/gallery/IMG_9517.jpeg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
