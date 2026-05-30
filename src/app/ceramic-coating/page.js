import ServiceLanding from '@/components/ServiceLanding'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/ceramic-coating',
  title: 'Ceramic Coating in Braselton, GA | Gtechniq Accredited | Zero Defects ATL',
  description:
    'Gtechniq Crystal Serum Ultra ceramic coating in Braselton, GA — serving Buford, Cumming, Gainesville & metro Atlanta. 9-year warranty, paint correction included. Free quote.',
  keywords: [
    'ceramic coating Braselton GA',
    'ceramic coating near Buford',
    'ceramic coating near Cumming',
    'ceramic coating Gainesville GA',
    'Gtechniq Crystal Serum Ultra installer',
    'ceramic coating Atlanta',
    'ceramic coating near me',
    'car ceramic coating Georgia',
  ],
  image: '/images/gallery/g-techniq-ultra-serum.jpg',
})

export default function CeramicCoatingPage() {
  return (
    <ServiceLanding
      path="/ceramic-coating"
      eyebrow="Gtechniq Crystal Serum Ultra · Accredited Installer"
      h1="Ceramic Coating in Braselton, GA"
      serviceType="Ceramic Coating"
      schemaDescription="Gtechniq Crystal Serum Ultra ceramic coating with full paint correction, serving Braselton, Buford, Cumming, Gainesville and metro Atlanta. Up to a 9-year warranty."
      heroImage="/images/gallery/g-techniq-ultra-serum.jpg"
      lead="A ceramic coating chemically bonds to your factory paint to add deep gloss, hydrophobic water beading, and UV protection. We're the only shop in the area with Gtechniq Crystal Serum Ultra accreditation — and every coating includes full paint correction first, so you lock in flawless paint, not flaws."
      highlights={[
        { title: 'Crystal Serum Ultra', body: 'Dual-layer 10H/7H system rated from −40°C to +250°C, backed by a 9-year warranty.' },
        { title: 'Correction included', body: 'Multi-stage paint correction before every coating — we never seal in swirls or oxidation.' },
        { title: 'Built for Georgia', body: 'Hydrophobic, UV-stable protection that handles GA heat, pollen, and summer storms.' },
      ]}
      included={[
        'Gtechniq Crystal Serum Ultra · 9-year warranty',
        'CCI Revolution · 6+ years of protection',
        'CCI Advance · 3–5 years, daily-driver value',
        'Full multi-stage paint correction on every install',
        'Aftercare guide + maintenance walkthrough',
      ]}
      faq={[
        { q: 'How long does ceramic coating last?', a: 'Gtechniq Crystal Serum Ultra carries a 9-year warranty, CCI Revolution lasts 6+ years, and CCI Advance lasts 3–5 years. Real-world longevity depends on wash habits and whether the car is garaged.' },
        { q: 'How much does ceramic coating cost near Braselton?', a: 'Crystal Serum Ultra starts at $1,500 for small cars, $1,750 for medium, and $2,000 for large vehicles, including paint correction. Call 404-406-3355 for a custom quote.' },
        { q: 'Do you serve Buford, Cumming, and Gainesville?', a: 'Yes — we\'re based in Braselton and regularly coat cars from Buford, Cumming, Gainesville, Flowery Branch, and across metro Atlanta.' },
      ]}
      related={[
        { href: '/paint-protection-film', eyebrow: 'Add Protection', label: 'Paint Protection Film' },
        { href: '/paint-correction', eyebrow: 'The First Step', label: 'Paint Correction' },
        { href: '/gallery', eyebrow: 'Our Work', label: 'Gallery' },
      ]}
    />
  )
}
