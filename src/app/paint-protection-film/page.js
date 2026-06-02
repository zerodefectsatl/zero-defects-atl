import ServiceLanding from '@/components/ServiceLanding'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/paint-protection-film',
  title: 'PPF & Paint Protection Film near Gainesville, GA | XPEL Installer | Zero Defects ATL',
  description:
    'XPEL paint protection film (PPF) installer serving Gainesville, Braselton, Buford & Cumming, GA. Computer-cut, self-healing film with a 10-year warranty. Free quote.',
  keywords: [
    'PPF installer near Gainesville',
    'paint protection film Braselton GA',
    'XPEL installer near Buford',
    'PPF installer near Cumming',
    'clear bra Atlanta',
    'XPEL Ultimate Plus installer Georgia',
    'paint protection film near me',
    'PPF Atlanta',
  ],
  image: '/images/gallery/ppf-r8-01.jpg',
})

export default function PaintProtectionFilmPage() {
  return (
    <ServiceLanding
      path="/paint-protection-film"
      eyebrow="XPEL Authorized · Factory-Trained in San Antonio"
      h1="Paint Protection Film near Gainesville, GA"
      serviceType="Paint Protection Film"
      schemaDescription="XPEL Ultimate Plus paint protection film (PPF) with computer-cut templates and a 10-year warranty, serving Gainesville, Braselton, Buford, Cumming and metro Atlanta."
      heroImage="/images/gallery/ppf-r8-01.jpg"
      lead="Paint protection film is a clear, self-healing TPU layer that physically stops rock chips, road debris, and scratches before they reach your paint. As an XPEL-authorized, factory-trained installer, we cut every panel with computer templates for a precise, near-invisible fit — backed by a 10-year manufacturer warranty."
      highlights={[
        { title: 'XPEL Ultimate Plus', body: 'Self-healing film that erases swirls and light marks with heat. 10-year manufacturer warranty.' },
        { title: 'Computer-cut fitment', body: 'Templates cut per vehicle for clean edges and full coverage — no hand-trimming on your paint.' },
        { title: 'Coverage to fit', body: 'Track pack, full-front, or full-vehicle armor on every painted panel.' },
      ]}
      included={[
        'XPEL Ultimate Plus self-healing film',
        'Computer-cut templates for precise fitment',
        '10-year XPEL manufacturer warranty',
        'Full-front, partial, or custom-zone coverage',
        'Optional matte / stealth finish',
      ]}
      faq={[
        { q: 'What does PPF protect against?', a: 'Rock chips, road debris, bug etching, light scratches, and abrasion. It\'s physical armor — pair it with ceramic coating for gloss and chemical protection too.' },
        { q: 'Where do you install PPF?', a: 'We\'re based in Braselton and are a popular XPEL installer for Gainesville, Buford, Cumming, Flowery Branch, and the wider metro Atlanta area.' },
        { q: 'How long does PPF last?', a: 'XPEL Ultimate Plus carries a 10-year warranty and stays clear and self-healing throughout, with proper care.' },
      ]}
      related={[
        { href: '/ppf-layers', eyebrow: 'Interactive 3D', label: 'Explore PPF Layers' },
        { href: '/ceramic-coating', eyebrow: 'Add Gloss', label: 'Ceramic Coating' },
        { href: '/paint-correction', eyebrow: 'Prep First', label: 'Paint Correction' },
      ]}
    />
  )
}
