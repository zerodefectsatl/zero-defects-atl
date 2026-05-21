import Image from 'next/image'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
  description: 'Browse completed projects — ceramic coatings, paint protection film, and paint correction on luxury vehicles in Braselton, GA.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
    description: 'Browse completed projects — ceramic coatings, PPF, and paint correction on luxury vehicles in Braselton, GA.',
    images: [{ url: '/images/gallery/IMG_9517.jpeg', width: 1200, height: 800, alt: 'Zero Defects ATL gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
    description: 'Browse completed projects — ceramic coatings, PPF, and paint correction on luxury vehicles in Braselton, GA.',
    images: ['/images/gallery/IMG_9517.jpeg'],
  },
}

const photos = [
  '/images/gallery/apex-gt4.jpg',
  '/images/gallery/IMG_5864.jpeg',
  '/images/gallery/IMG_5920.jpeg',
  '/images/gallery/IMG_5979.jpeg',
  '/images/gallery/IMG_6937.jpeg',
  '/images/gallery/IMG_6940.jpeg',
  '/images/gallery/IMG_6951.jpeg',
  '/images/gallery/IMG_6952.jpeg',
  '/images/gallery/IMG_7388.jpeg',
  '/images/gallery/IMG_7392.jpeg',
  '/images/gallery/IMG_7398.jpeg',
  '/images/gallery/IMG_7399.jpeg',
  '/images/gallery/IMG_7400.jpeg',
  '/images/gallery/IMG_7402.jpeg',
  '/images/gallery/IMG_7405.jpeg',
  '/images/gallery/IMG_7409.jpeg',
  '/images/gallery/IMG_7437.jpeg',
  '/images/gallery/IMG_7530.jpeg',
  '/images/gallery/IMG_7531.jpeg',
  '/images/gallery/IMG_7573.jpeg',
  '/images/gallery/IMG_7885.jpeg',
  '/images/gallery/IMG_7887.jpeg',
  '/images/gallery/IMG_8054.jpeg',
  '/images/gallery/IMG_8058.jpeg',
  '/images/gallery/IMG_8143.jpeg',
  '/images/gallery/IMG_8146.jpeg',
  '/images/gallery/IMG_8427.jpeg',
  '/images/gallery/IMG_8433.jpeg',
  '/images/gallery/IMG_8434.jpeg',
  '/images/gallery/IMG_8513.jpeg',
  '/images/gallery/IMG_8518.jpeg',
  '/images/gallery/IMG_8556.jpeg',
  '/images/gallery/IMG_8575.jpeg',
  '/images/gallery/IMG_8707.jpeg',
  '/images/gallery/IMG_8715.jpeg',
  '/images/gallery/IMG_8718.jpeg',
  '/images/gallery/IMG_8822.jpeg',
  '/images/gallery/IMG_8851.jpeg',
  '/images/gallery/IMG_8856.jpeg',
  '/images/gallery/IMG_8859.jpeg',
  '/images/gallery/IMG_8862.jpeg',
  '/images/gallery/IMG_8880.jpeg',
  '/images/gallery/IMG_8882.jpeg',
  '/images/gallery/IMG_9219.jpeg',
  '/images/gallery/IMG_9306.jpeg',
  '/images/gallery/IMG_9417.jpeg',
  '/images/gallery/IMG_9439.jpeg',
  '/images/gallery/IMG_9517.jpeg',
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#080a0c', minHeight: '100vh', paddingTop: '72px' }}>

        <div style={{ padding: '96px 48px 64px', maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#1a8fff', display: 'block', marginBottom: '16px' }}>
            Our Work
          </span>
          <h1 style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(64px, 8vw, 112px)', lineHeight: 0.9, letterSpacing: '3px', color: '#f0f4f8', marginBottom: '24px', textShadow: '0 0 80px rgba(26,143,255,0.2), 0 0 160px rgba(26,143,255,0.08)' }}>
            Gallery
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(240,244,248,0.55)', maxWidth: '480px' }}>
            {photos.length} completed projects — ceramic coatings, paint protection film, and paint correction. Braselton, GA.
          </p>
        </div>

        <div style={{ padding: '0 48px 96px', maxWidth: '1200px', margin: '0 auto', columns: '3', columnGap: '12px' }}>
          {photos.map((src, i) => (
            <div key={src} style={{ breakInside: 'avoid', marginBottom: '12px', position: 'relative', overflow: 'hidden', borderRadius: '4px', background: '#12161b' }}>
              <Image
                src={src}
                alt={`Zero Defects ATL — photo ${i + 1} of ${photos.length}`}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

      </main>
    </>
  )
}
