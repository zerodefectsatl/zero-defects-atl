import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { BUSINESS, cityJsonLd } from '@/lib/seo'

const LIME = '#eaff00'
const BLUE = '#1a8fff'

const SERVICES = [
  { href: '/ceramic-coating', name: 'Ceramic Coating', blurb: 'Gtechniq Crystal Serum Ultra — gloss, hydrophobicity, and UV protection. Up to a 9-year warranty.' },
  { href: '/paint-protection-film', name: 'Paint Protection Film', blurb: 'XPEL self-healing film against rock chips and road debris. Computer-cut, 10-year warranty.' },
  { href: '/paint-correction', name: 'Paint Correction', blurb: 'Multi-stage machine polishing that removes swirls and oxidation — the foundation of every install.' },
]

/**
 * Template for a city service-area page (/service-areas/<slug>).
 * Server component — emits LocalBusiness + BreadcrumbList JSON-LD focused
 * on the city and renders locally-specific copy.
 */
export default function CityLanding({ city }) {
  const jsonLd = cityJsonLd({ slug: city.slug, cityName: city.name })

  return (
    <main style={{ background: '#080808', color: '#fff', minHeight: '100vh', padding: '0 24px' }}>
      <MorphLogo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '120px 0 64px' }}>
        <a
          href="/service-areas"
          style={{ display: 'inline-block', marginBottom: 24, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none' }}
        >
          ← All service areas
        </a>
        <p style={{ color: LIME, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
          Service Area · {city.name}, GA
        </p>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: 1.03, letterSpacing: '1px', margin: '0 0 20px' }}>
          Ceramic Coating, PPF &amp; Paint Correction in {city.name}, GA
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, lineHeight: 1.7, margin: 0 }}>
          {city.lead}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30 }}>
          <a href="/services#contact" style={{ background: LIME, color: '#000', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
            Get a Free Quote →
          </a>
          <a href={`tel:${BUSINESS.telephone.replace('+1', '')}`} style={{ border: '1px solid #2e2e2e', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
            Call 404-406-3355
          </a>
        </div>
      </div>

      {/* Services offered */}
      <section style={{ maxWidth: 860, margin: '0 auto', paddingBottom: 48 }}>
        <p style={{ color: BLUE, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 14 }}>
          What we do in {city.name}
        </p>
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {SERVICES.map((s) => (
            <a key={s.href} href={s.href} style={{ background: '#101010', border: '1px solid #1c1c1c', borderRadius: 12, padding: 22, textDecoration: 'none', color: '#fff' }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>{s.name} →</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Local context */}
      <section style={{ maxWidth: 860, margin: '0 auto', paddingBottom: 72 }}>
        <div style={{ background: '#101010', border: '1px solid #1c1c1c', borderRadius: 12, padding: 26 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>
            Serving {city.name} from Braselton
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, margin: '0 0 14px' }}>
            {city.local} We&apos;re {city.drive}, at {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, {BUSINESS.addressRegion} {BUSINESS.postalCode}.
          </p>
          <a href={BUSINESS.googleProfile} target="_blank" rel="noopener noreferrer" style={{ color: BLUE, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Find us on Google →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
