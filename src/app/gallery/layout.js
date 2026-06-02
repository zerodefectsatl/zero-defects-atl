import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/gallery',
  title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
  description:
    'Browse completed projects — ceramic coatings, paint protection film, and paint correction on luxury vehicles in Braselton, GA.',
  keywords: [
    'ceramic coating portfolio Braselton',
    'PPF gallery Atlanta',
    'paint protection film examples Georgia',
    'exotic car detailing Braselton GA',
    'Zero Defects ATL work',
  ],
  imageAlt: 'Zero Defects ATL gallery',
})

export default function GalleryLayout({ children }) {
  return children
}
