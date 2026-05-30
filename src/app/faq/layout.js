import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/faq',
  title: 'FAQ — Ceramic Coating, PPF & Paint Correction | Zero Defects ATL',
  description:
    'Answers to common questions about ceramic coating, XPEL PPF, paint correction, warranties, and pricing at Zero Defects ATL in Braselton, GA.',
  keywords: [
    'ceramic coating cost Braselton',
    'how much does PPF cost Atlanta',
    'ceramic coating warranty',
    'paint protection film questions',
    'ceramic coating FAQ Georgia',
  ],
})

export default function FaqLayout({ children }) {
  return children
}
