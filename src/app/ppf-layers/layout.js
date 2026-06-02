import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/ppf-layers',
  title: 'PPF Layer Structure — Interactive 3D Cross-Section | Zero Defects ATL',
  description:
    'Explore the layers of paint protection film in an interactive 3D exploded view. Self-healing topcoat, TPU core, adhesive, and the factory paint underneath.',
  keywords: [
    'PPF layers',
    'paint protection film structure',
    'PPF cross section',
    'how PPF works',
    'XPEL film layers',
  ],
})

export default function PPFLayersLayout({ children }) {
  return children
}
