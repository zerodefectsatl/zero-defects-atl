import ServiceLanding from '@/components/ServiceLanding'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/paint-correction',
  title: 'Paint Correction in Braselton, GA | Swirl & Scratch Removal | Zero Defects ATL',
  description:
    'Multi-stage paint correction in Braselton, GA — serving Buford, Cumming & Gainesville. Swirl, scratch, and oxidation removal that restores depth before coating. Free quote.',
  keywords: [
    'paint correction Braselton GA',
    'paint correction Atlanta',
    'paint correction near Buford',
    'paint correction near Cumming',
    'swirl removal Gainesville GA',
    'car paint polishing Georgia',
    'paint correction near me',
    'scratch removal Braselton',
  ],
  image: '/images/gallery/IMG_7437.jpeg',
})

export default function PaintCorrectionPage() {
  return (
    <ServiceLanding
      path="/paint-correction"
      eyebrow="Multi-Stage · Machine Polish · Zero Shortcuts"
      h1="Paint Correction in Braselton, GA"
      serviceType="Paint Correction"
      schemaDescription="Multi-stage machine paint correction removing swirls, scratches, water spots and oxidation, serving Braselton, Buford, Cumming, Gainesville and metro Atlanta."
      heroImage="/images/gallery/IMG_7437.jpeg"
      lead="Paint correction is the machine-polishing process that removes swirls, fine scratches, water spots, oxidation, and buffer trails from your clear coat. It's the foundation of every great finish — because ceramic coating or PPF over damaged paint just preserves the damage forever. We correct first, every time."
      highlights={[
        { title: 'Multi-stage process', body: 'Single, two, or three-stage correction depending on what your paint actually needs.' },
        { title: 'Pro-grade tools', body: 'Machine polished with Rupes and Flex by an IDA / Detailing PRO certified technician.' },
        { title: 'The right foundation', body: 'Required before every coating install so protection locks in flawless paint.' },
      ]}
      included={[
        'Single, two, and three-stage correction',
        'Machine polish with Rupes and Flex',
        'Swirl, scratch, water-spot & oxidation removal',
        'IDA / Detailing PRO certified technician',
        'Included free with every ceramic coating install',
      ]}
      faq={[
        { q: 'Why do I need paint correction before coating?', a: 'Ceramic coating and PPF lock in whatever is on the surface. Correcting first removes swirls and oxidation so you preserve a flawless finish, not the damage.' },
        { q: 'Can you remove scratches and swirls?', a: 'Yes — multi-stage machine polishing removes swirls, fine scratches, water spots, oxidation, and buffer trails. Deep scratches through the clear coat may only be improved, not erased.' },
        { q: 'Do you serve areas around Braselton?', a: 'We correct paint for clients across Buford, Cumming, Gainesville, Flowery Branch, and metro Atlanta from our Braselton shop.' },
      ]}
      related={[
        { href: '/ceramic-coating', eyebrow: 'Lock It In', label: 'Ceramic Coating' },
        { href: '/paint-protection-film', eyebrow: 'Armor Up', label: 'Paint Protection Film' },
        { href: '/gallery', eyebrow: 'Our Work', label: 'Gallery' },
      ]}
    />
  )
}
