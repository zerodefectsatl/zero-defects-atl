import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { CITIES } from '@/lib/cities'
import { pageMetadata } from '@/lib/seo'

const LIME = '#eaff00'

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
    <main style={{ background: '#080808', color: '#fff', minHeight: '100vh', padding: '0 24px' }}>
      <MorphLogo />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '120px 0 64px' }}>
        <a
          href="/"
          style={{ display: 'inline-block', marginBottom: 24, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none' }}
        >
          ← Back to home
        </a>
        <p style={{ color: LIME, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
          Service Areas
        </p>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: 1.03, letterSpacing: '1px', margin: '0 0 20px' }}>
          Where we work
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, lineHeight: 1.7, margin: '0 0 36px', maxWidth: 640 }}>
          Based in Braselton, we bring Gtechniq-accredited ceramic coating, XPEL paint protection film, and paint correction to drivers across North Georgia and metro Atlanta.
        </p>

        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {CITIES.map((c) => (
            <a key={c.slug} href={`/service-areas/${c.slug}`} style={{ background: '#101010', border: '1px solid #1c1c1c', borderRadius: 12, padding: 22, textDecoration: 'none', color: '#fff' }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>{c.name}, GA →</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                Ceramic coating, PPF &amp; paint correction — {c.drive}.
              </p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
