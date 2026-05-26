import { Manrope } from 'next/font/google'
import './globals.css'

const manropeBody = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow-body',
  display: 'swap',
})

const manropeUi = Manrope({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow-cond',
  display: 'swap',
})

const manropeDisplay = Manrope({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const siteUrl = 'https://zerodefectsatl.com'

const jsonLd = [
  {
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
      ratingCount: '40',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Keith Campbell' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'The black paint came out looking like black chrome! Absolutely beautiful, and bugs can now be wiped off easily. This process and this installer are well worth the money.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Kenny Fletcher' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Blown away with the caliber and quality of work — from the GTechniq Crystal Serum Ceramic Coating to the XPEL PPF. His attention to every detail is incredible, just like his company name: ZERO DEFECTS.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Anthony Matthew' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Chris did an outstanding and amazing job. My car was looking amazing and brand new. He walked me around and explained everything. Customer service at its best. 10/10 stars.',
      },
    ],
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
    sameAs: [
      'https://www.instagram.com/zerodefectsatl',
      'https://maps.app.goo.gl/2vKxF6ayqwKjdA4i7',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does ceramic coating last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic coating longevity depends on the product. Gtechniq Crystal Serum Ultra carries a 9-year warranty and is rated for extreme conditions from −40°C to +250°C. CCI Revolution provides 6+ years of protection, and CCI Advance provides 3–5 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between ceramic coating and paint protection film (PPF)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic coating bonds chemically to your paint and provides hydrophobic protection, UV resistance, and enhanced gloss. Paint protection film (PPF) is a physical TPU film that stops rock chips, scratches, and road debris from reaching the paint. For maximum protection, many customers combine both.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need paint correction before ceramic coating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — ceramic coating locks in whatever is on your paint surface. Zero Defects ATL includes paint correction before every coating application to ensure swirls, water spots, and oxidation are removed first.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does ceramic coating cost in Braselton, GA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gtechniq Crystal Serum Ultra starts at $1,500 for small cars, $1,750 for medium, and $2,000 for large vehicles, and includes a 9-year warranty. CCI Revolution and Advance pricing is available by quote. Call 404-406-3355 for a custom estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Zero Defects ATL an authorized XPEL installer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Zero Defects ATL is an XPEL authorized installer, factory-trained at XPEL HQ in San Antonio, TX. Every PPF installation uses computer-cut templates and comes with a 10-year manufacturer warranty.',
        },
      },
    ],
  },
]

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Zero Defects ATL — Ceramic Coating & PPF | Braselton, GA',
  description:
    'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Ceramic coatings, PPF & paint correction. Get a free quote today.',
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
      'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Ceramic coatings, PPF & paint correction. Get a free quote today.',
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
      'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Ceramic coatings, PPF & paint correction. Get a free quote today.',
    images: ['/images/gallery/IMG_9517.jpeg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manropeDisplay.variable} ${manropeBody.variable} ${manropeUi.variable}`}
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
