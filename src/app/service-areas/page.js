import TilePage from '@/components/TilePage'
import Footer from '@/components/Footer'
import { CITIES } from '@/lib/cities'
import { pageMetadata } from '@/lib/seo'

const LIME = '#f5ff36'

export const metadata = pageMetadata({
  path: '/service-areas',
  title: 'Service Areas | Ceramic Coating & PPF near Atlanta, GA | Zero Defects ATL',
  description:
    'Zero Defects ATL serves Braselton, Buford, Cumming, Gainesville, Flowery Branch, Hoschton & metro Atlanta with ceramic coating, XPEL PPF & paint correction.',
  keywords: [
    'ceramic coating near me',
    'PPF installer near me',
    'ceramic coating Braselton GA',
    'PPF installer near Gainesville',
    'paint correction North Georgia',
  ],
})

export default function ServiceAreasPage() {
  return (
    <TilePage>
      <div style={{ padding: '80px 38px 40px' }}>
        <a href="/" style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}>
          ← Back to home
        </a>
        <p className="tile-eyebrow">Service Areas</p>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(34px, 5.2vw, 64px)', lineHeight: 1.03, letterSpacing: 0.5, margin: '0 0 18px' }}>
          Where we work
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 18, lineHeight: 1.7, margin: '0 0 32px', maxWidth: 640 }}>
          Based in Braselton, we bring Gtechniq-accredited ceramic coating, XPEL paint protection film, and paint correction to drivers across North Georgia and metro Atlanta.
        </p>

        <div style={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {CITIES.map((c) => (
            <a key={c.slug} href={`/service-areas/${c.slug}`} style={{ background: '#171717', border: '1px solid #262626', borderRadius: 8, padding: '20px 22px', textDecoration: 'none', color: '#fff' }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>{c.name}, GA →</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                Ceramic coating, PPF &amp; paint correction — {c.drive}.
              </p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </TilePage>
  )
}
