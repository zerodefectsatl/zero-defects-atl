import { notFound } from 'next/navigation'
import CityLanding from '@/components/CityLanding'
import { CITIES, getCity } from '@/lib/cities'
import { pageMetadata } from '@/lib/seo'

// Only the defined cities exist as static pages; anything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) return {}
  return pageMetadata({
    path: `/service-areas/${slug}`,
    title: `Ceramic Coating & PPF in ${city.name}, GA | Zero Defects ATL`,
    description: `Gtechniq-accredited ceramic coating, XPEL PPF & paint correction serving ${city.name}, GA — from our Braselton studio. Get a free quote today.`,
    keywords: [
      `ceramic coating ${city.name} GA`,
      `PPF ${city.name}`,
      `paint protection film ${city.name}`,
      `paint correction ${city.name} GA`,
      `ceramic coating near ${city.name}`,
      `XPEL installer ${city.name}`,
    ],
  })
}

export default async function CityPage({ params }) {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) notFound()
  return <CityLanding city={city} />
}
