import TilePage from '@/components/TilePage'
import Footer from '@/components/Footer'
import { BUSINESS, cityJsonLd } from '@/lib/seo'

const LIME = '#eaff00'
const BLUE = '#1a8fff'
const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'

const SERVICES = [
  { href: '/ceramic-coating', name: 'Ceramic Coating', blurb: 'Gtechniq Crystal Serum Ultra — gloss, hydrophobicity, and UV protection. Up to a 9-year warranty.' },
  { href: '/paint-protection-film', name: 'Paint Protection Film', blurb: 'XPEL self-healing film against rock chips and road debris. Computer-cut, 10-year warranty.' },
  { href: '/paint-correction', name: 'Paint Correction', blurb: 'Multi-stage machine polishing that removes swirls and oxidation — the foundation of every install.' },
]

/**
 * City service-area page (/service-areas/<slug>) in the gridlocked scroll-tile
 * layout. Emits LocalBusiness + BreadcrumbList JSON-LD focused on the city.
 */
export default function CityLanding({ city }) {
  const jsonLd = cityJsonLd({ slug: city.slug, cityName: city.name })

  return (
    <TilePage jsonLd={jsonLd}>
      <div style={{ padding: '80px 38px 40px' }}>
        <a href="/service-areas" style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}>
          ← All service areas
        </a>
        <p className="tile-eyebrow">Service Area · {city.name}, GA</p>
        <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(34px, 5.2vw, 64px)', lineHeight: 1.03, letterSpacing: 0.5, margin: '0 0 18px' }}>
          Ceramic Coating, PPF &amp; Paint Correction in {city.name}, GA
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 18, lineHeight: 1.7, margin: 0, maxWidth: 620 }}>{city.lead}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
          <a href="/services#contact" style={{ background: LIME, color: '#000', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
            Get a Free Quote →
          </a>
          <a href={`tel:${BUSINESS.telephone.replace('+1', '')}`} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
            Call 404-406-3355
          </a>
        </div>

        {/* Services */}
        <div style={{ borderTop: '1px solid #262626', marginTop: 34, paddingTop: 28 }}>
          <p className="tile-eyebrow" style={{ color: BLUE }}>What we do in {city.name}</p>
          <div style={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {SERVICES.map((s) => (
              <a key={s.href} href={s.href} style={{ background: '#171717', border: '1px solid #262626', borderRadius: 8, padding: '18px 20px', textDecoration: 'none', color: '#fff' }}>
                <h2 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px' }}>{s.name} →</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>{s.blurb}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Local context */}
        <div style={{ borderTop: '1px solid #262626', marginTop: 34, paddingTop: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>Serving {city.name} from Braselton</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, margin: '0 0 14px' }}>
            {city.local} We&apos;re {city.drive}, at {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, {BUSINESS.addressRegion} {BUSINESS.postalCode}.
          </p>
          <a href={BUSINESS.googleProfile} target="_blank" rel="noopener noreferrer" style={{ color: BLUE, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Find us on Google →
          </a>
        </div>
      </div>

      <Footer />
    </TilePage>
  )
}
